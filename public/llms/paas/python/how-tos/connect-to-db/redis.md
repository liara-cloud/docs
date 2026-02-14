Original link: https://docs.liara.ir/paas/python/how-tos/connect-to-db/redis/

# اتصال به دیتابیس Redis در برنامه‌های Python

برای اتصال به دیتابیس Redis در برنامه‌های Python، در ابتدا باید ماژول مربوط به آن‌را با اجرای دستور زیر، نصب کنید:

```bash
pip install redis
```

سپس، با فرض فعال بودن محیط مجازی در پروژه پایتونی‌تان (virtualenv)، دستور زیر را اجرا کنید تا فایل `requirements.txt` به‌روز شود:

```bash
pip freeze > requirements.txt
```

در ادامه، بایستی طبق مستندات [نحوه تنظیم متغیرهای محیطی](https://docs.liara.ir/paas/details/envs)، متغیر محیطی مربوط به دیتابیس را، به برنامه اضافه کنید؛ به عنوان مثال:

```bash
REDIS_URI=redis://:vwPoLIjd5BqZbqX2giABr2xq@monte-rosa.liara.cloud:34356/0

```

در نهایت، می‌توانید مشابه قطعه کد زیر، به دیتابیس‌تان متصل شده و از آن، استفاده کنید:

```python
import os
import redis
from http.server import BaseHTTPRequestHandler, HTTPServer

# Fetch Redis URI from environment variables
REDIS_URI = os.getenv("REDIS_URI")

# Initialize Redis client
def connect_redis():
    try:
        # Connect to Redis server using URI
        redis_client = redis.from_url(REDIS_URI)
        # Check connection by pinging Redis
        redis_client.ping()
        return True
    except redis.ConnectionError:
        return False

# HTTP request handler class
class RequestHandler(BaseHTTPRequestHandler):
    def do_GET(self):
        # Check if Redis is reachable
        if connect_redis():
            self.send_response(200)
            self.send_header('Content-type', 'text/plain')
            self.end_headers()
            self.wfile.write(b"Redis connection successful!")
        else:
            self.send_response(500)
            self.send_header('Content-type', 'text/plain')
            self.end_headers()
            self.wfile.write(b"Failed to connect to Redis")

# Run the server
def run(server_class=HTTPServer, handler_class=RequestHandler, port=8080):
    server_address = ('', port)
    httpd = server_class(server_address, handler_class)
    print(f'Starting server on port {port}...')
    httpd.serve_forever()

if __name__ == '__main__':
    run()

```

اکنون می‌توانید برنامه‌تان را در لیارا مستقر کرده و در صفحه [`https://docs.liara.ir/`](https://docs.liara.ir/) وضعیت اتصال به دیتابیس خود را بررسی کنید.

## all links

[All links of docs](https://docs.liara.ir/all-links-llms.txt)
