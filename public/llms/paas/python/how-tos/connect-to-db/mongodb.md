Original link: https://docs.liara.ir/paas/python/how-tos/connect-to-db/mongodb/

# اتصال به دیتابیس MongoDB در برنامه‌های Python

برای اتصال به دیتابیس MongoDB در برنامه‌های Python، در ابتدا باید ماژول مربوط به آن‌را با اجرای دستور زیر، نصب کنید:

```bash
pip install pymongo
```

سپس، با فرض فعال بودن محیط مجازی در پروژه پایتونی‌تان (virtualenv)، دستور زیر را اجرا کنید تا فایل `requirements.txt` به‌روز شود: 

```bash
pip freeze > requirements.txt
```

در ادامه، بایستی طبق مستندات [نحوه تنظیم متغیرهای محیطی](https://docs.liara.ir/paas/details/envs)، متغیر محیطی مربوط به دیتابیس را، به برنامه اضافه کنید؛ به عنوان مثال: 

```bash
MONGODB_URI=mongodb://root:RiGIQwtB65sWhwPHnKSRRPN0@monte-rosa.liara.cloud:32655/my-app?authSource=admin
```

در نهایت، می‌توانید مشابه قطعه کد زیر، به دیتابیس‌تان متصل شده و از آن، استفاده کنید: 

```python
import os
from http.server import BaseHTTPRequestHandler, HTTPServer
from pymongo import MongoClient
from pymongo.errors import ServerSelectionTimeoutError, ConnectionFailure

# Fetch MongoDB URI from environment variables
MONGODB_URI = os.getenv("MONGODB_URI")

# Initialize MongoDB client
def connect_mongodb():
    try:
        # Create a MongoDB client using the URI
        client = MongoClient(MONGODB_URI, serverSelectionTimeoutMS=5000)
        # Try to access the admin database to check the connection
        client.admin.command('ping')
        return True
    except ServerSelectionTimeoutError as e:
        print(f"ServerSelectionTimeoutError: {e}")
        return False
    except ConnectionFailure as e:
        print(f"ConnectionFailure: {e}")
        return False
    except Exception as e:
        print(f"Unexpected error: {e}")
        return False

# HTTP request handler class
class RequestHandler(BaseHTTPRequestHandler):
    def do_GET(self):
        # Check if MongoDB is reachable
        if connect_mongodb():
            self.send_response(200)
            self.send_header('Content-type', 'text/plain')
            self.end_headers()
            self.wfile.write(b"MongoDB connection successful!")
        else:
            self.send_response(500)
            self.send_header('Content-type', 'text/plain')
            self.end_headers()
            self.wfile.write(b"Failed to connect to MongoDB")

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
