Original link: https://docs.liara.ir/paas/python/how-tos/connect-to-db/elastic-search/

# اتصال به دیتابیس ElasticSearch در برنامه‌های Python

برای اتصال به دیتابیس ElasticSearch در برنامه‌های Python، در ابتدا باید ماژول مربوط به آن‌را با اجرای دستور زیر، نصب کنید:

```bash
pip install elasticsearch
```

سپس، با فرض فعال بودن محیط مجازی در پروژه پایتونی‌تان (virtualenv)، دستور زیر را اجرا کنید تا فایل `requirements.txt` به‌روز شود: 

```bash
pip freeze > requirements.txt
```

در ادامه، بایستی طبق مستندات [نحوه تنظیم متغیرهای محیطی](https://docs.liara.ir/paas/details/envs)، متغیر محیطی مربوط به دیتابیس را، به برنامه اضافه کنید؛ به عنوان مثال: 

```bash
ELASTICSEARCH_URI=http://elastic:0sYXnw9OuXUzYVFnXTFdwOUh@monte-rosa.liara.cloud:33159/
```

در نهایت، می‌توانید مشابه قطعه کد زیر، به دیتابیس‌تان متصل شده و از آن، استفاده کنید: 

```python
import os
from http.server import BaseHTTPRequestHandler, HTTPServer
from elasticsearch import Elasticsearch
from elasticsearch.exceptions import ConnectionError

# Fetch Elasticsearch URI from environment variables
ELASTICSEARCH_URI = os.getenv("ELASTICSEARCH_URI")

# Initialize Elasticsearch client
def connect_elasticsearch():
    try:
        # Create an Elasticsearch client using the URI
        es = Elasticsearch([ELASTICSEARCH_URI])
        # Check connection by pinging Elasticsearch
        if es.ping():
            return True
        return False
    except ConnectionError:
        return False

# HTTP request handler class
class RequestHandler(BaseHTTPRequestHandler):
    def do_GET(self):
        # Check if Elasticsearch is reachable
        if connect_elasticsearch():
            self.send_response(200)
            self.send_header('Content-type', 'text/plain')
            self.end_headers()
            self.wfile.write(b"Elasticsearch connection successful!")
        else:
            self.send_response(500)
            self.send_header('Content-type', 'text/plain')
            self.end_headers()
            self.wfile.write(b"Failed to connect to Elasticsearch")

# Run the server
def run(server_class=HTTPServer, handler_class=RequestHandler, port=8080):
    server_address = ('', port)
    httpd = server_class(server_address, handler_class)
    print(f'Starting server on port {port}...')
    httpd.serve_forever()

if __name__ == '__main__':
    run()
```

اکنون می‌توانید برنامه‌تان را در لیارا مستقر کرده و در صفحه `https://docs.liara.ir/` وضعیت اتصال به دیتابیس خود را بررسی کنید.

## all links

[All links of docs](https://docs.liara.ir/all-links-llms.txt)
