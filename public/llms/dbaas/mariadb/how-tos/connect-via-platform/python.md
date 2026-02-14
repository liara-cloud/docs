Original link: https://docs.liara.ir/dbaas/mariadb/how-tos/connect-via-platform/python/

# اتصال به دیتابیس MariaDB در برنامه‌های Python

برای اتصال به دیتابیس MariaDB در برنامه‌های Python، در ابتدا باید ماژول مربوط به آن‌را با اجرای دستور زیر، نصب کنید:

```bash
pip install mysql-connector-python
```

در ادامه، بایستی متغیر محیطی مربوط به دیتابیس را، به برنامه خود اضافه کنید؛ به عنوان مثال: 

```bash
DB_USER=root
DB_PASSWORD=Wc9yvejxaWm6RrysATmcUeew
DB_HOST=monte-rosa.liara.cloud
DB_PORT=31983
DB_NAME=awesome_swanson

```

در نهایت، می‌توانید مشابه قطعه کد زیر، به دیتابیس‌تان متصل شده و از آن، استفاده کنید: 

```python
import http.server
import socketserver
import mysql.connector
import os

db_config = {
    'user': os.getenv('DB_USER'),
    'password': os.getenv('DB_PASSWORD'),
    'host': os.getenv('DB_HOST'),
    'port': int(os.getenv('DB_PORT')),
    'database': os.getenv('DB_NAME')
}

def check_db_connection():
    try:
        connection = mysql.connector.connect(**db_config)
        if connection.is_connected():
            connection.close()
            return "connection successful"
    except mysql.connector.Error as e:
        return f"error:  {e}"
    return "connection failed"

class RequestHandler(http.server.SimpleHTTPRequestHandler):
    def do_GET(self):
        self.send_response(200)
        self.send_header("Content-type", "text/html; charset=utf-8")
        self.end_headers()

        connection_status = check_db_connection()

        html_content = f"""
        <!DOCTYPE html>
        <html lang="en">
        
        <body>
            <div class="status">{connection_status}</div>
        </body>
        </html>
        """
        self.wfile.write(html_content.encode("utf-8"))

PORT = 8000
with socketserver.TCPServer(("", PORT), RequestHandler) as httpd:
    print(f"Serving on port {PORT}")
    httpd.serve_forever()

```

## استفاده از Connection Pooling

مفهوم Connection pooling به معنای استفاده از یک مجموعه اتصالات از پیش ساخته شده برای اتصال به پایگاه داده است. این تکنیک باعث می‌شود به جای ایجاد و بستن مکرر اتصالات، از اتصالات موجود در مجموعه استفاده شود که کارایی را افزایش می‌دهد.  
> همچنین بخوانید: [آشنایی بیشتر با قابلیت Connection Pooling](https://docs.liara.ir/dbaas/details/connection-pool)

برای استفاده از قابلیت connection pooling در دیتابیس MariaDB،  
می‌توانید مشابه قطعه کد زیر، عمل کنید:

```python
import http.server
import socketserver
from mysql.connector import pooling, Error
import os


db_config = {
    'user': os.getenv('DB_USER'),
    'password': os.getenv('DB_PASSWORD'),
    'host': os.getenv('DB_HOST'),
    'port': int(os.getenv('DB_PORT')),
    'database': os.getenv('DB_NAME')
}

try:
    connection_pool = pooling.MySQLConnectionPool(
        pool_name="mypool",
        pool_size=5,  # connection amount
        **db_config
    )
    print("Connection pool created successfully.")
except Error as e:
    print(f"Error while creating connection pool: {e}")

def check_db_connection():
    try:
        connection = connection_pool.get_connection()
        if connection.is_connected():
            connection.close()  
            return "connection successfull"
    except Error as e:
        return f"error: {e}"
    return "connection failed"

class RequestHandler(http.server.SimpleHTTPRequestHandler):
    def do_GET(self):
        self.send_response(200)
        self.send_header("Content-type", "text/html; charset=utf-8")
        self.end_headers()

        connection_status = check_db_connection()

        html_content = f"""
        <!DOCTYPE html>
        <html lang="en">
        
        <body>
            <div class="status">{connection_status}</div>
        </body>
        </html>
        """
        self.wfile.write(html_content.encode("utf-8"))

PORT = 8000
with socketserver.TCPServer(("", PORT), RequestHandler) as httpd:
    print(f"Serving on port {PORT}")
    httpd.serve_forever()

```

## all links

[All links of docs](https://docs.liara.ir/all-links-llms.txt)
