Original link: https://docs.liara.ir/paas/python/how-tos/connect-to-db/mssql/

# اتصال به دیتابیس MSSQL در برنامه‌های Python

برای اتصال به دیتابیس MSSQL در برنامه‌های Python، در ابتدا باید ماژول مربوط به آن‌را با اجرای دستور زیر، نصب کنید:

```bash
pip install pyodbc
```

سپس، با فرض فعال بودن محیط مجازی در پروژه پایتونی‌تان (virtualenv)، دستور زیر را اجرا کنید تا فایل `requirements.txt` به‌روز شود: 

```bash
pip freeze > requirements.txt
```

در ادامه، بایستی طبق مستندات [نحوه تنظیم متغیرهای محیطی](https://docs.liara.ir/paas/details/envs)، متغیر محیطی مربوط به دیتابیس را، به برنامه اضافه کنید؛ به عنوان مثال: 

```bash
DB_HOST=monte-rosa.liara.cloud
DB_PORT=30592
DB_NAME=master
DB_USER=sa
DB_PASSWORD=YRku6zKq22DlUyF9pMEepoUD

```

در نهایت، می‌توانید مشابه قطعه کد زیر، به دیتابیس‌تان متصل شده و از آن، استفاده کنید: 

```python
import os
from http.server import BaseHTTPRequestHandler, HTTPServer
import pyodbc

# Database connection parameters
DB_HOST = os.getenv('DB_HOST')
DB_PORT = os.getenv('DB_PORT')
DB_NAME = os.getenv('DB_NAME')
DB_USER = os.getenv('DB_USER')
DB_PASSWORD = os.getenv('DB_PASSWORD')

# Connection string
DATABASE_URI = f"DRIVER={{ODBC Driver 18 for SQL Server}};SERVER={DB_HOST},{DB_PORT};DATABASE={DB_NAME};UID={DB_USER};PWD={DB_PASSWORD};Encrypt=no;"

class RequestHandler(BaseHTTPRequestHandler):
    def do_GET(self):
        connection = None  # Initialize connection to None
        try:
            # Connect to the database
            connection = pyodbc.connect(DATABASE_URI)
            cursor = connection.cursor()
            cursor.execute("SELECT @@VERSION;")
            db_version = cursor.fetchone()
            response = f"Connection successful, MSSQL version: {db_version[0]}"
        except Exception as error:
            response = f"Error connecting without pooling: {error}"
        finally:
            if connection:
                cursor.close()
                connection.close()

        # Send response to client
        self.send_response(200)
        self.send_header("Content-type", "text/html")
        self.end_headers()
        self.wfile.write(f"<html><body><h1>{response}</h1></body></html>".encode("utf-8"))

def run(server_class=HTTPServer, handler_class=RequestHandler):
    server_address = ('', 8080)  # Serve on port 8080
    httpd = server_class(server_address, handler_class)
    print("Server running on port 8080")
    httpd.serve_forever()

if __name__ == "__main__":
    run()
```

اکنون می‌توانید برنامه‌تان را در لیارا مستقر کرده و در صفحه `https://docs.liara.ir/` وضعیت اتصال به دیتابیس خود را بررسی کنید.

## all links

[All links of docs](https://docs.liara.ir/all-links-llms.txt)
