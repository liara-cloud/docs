Original link: https://docs.liara.ir/dbaas/postgresql/how-tos/connect-via-platform/python/

# اتصال به دیتابیس PostgreSQL در برنامه‌های Python

برای اتصال به دیتابیس PostgreSQL در برنامه‌های Python، در ابتدا باید ماژول مربوط به آن‌را با اجرای دستور زیر، نصب کنید:

```bash
pip install psycopg2
```

در ادامه، بایستی متغیرهای محیطی مربوط به دیتابیس را، به برنامه اضافه کنید؛ به عنوان مثال: 

```bash
DB_USER=root
DB_PASSWORD=GNfqFdndABytxVPFPBjzAppu
DB_HOST=monte-rosa.liara.cloud
DB_PORT=30273
DB_NAME=postgres

```

در نهایت، می‌توانید مشابه قطعه کد زیر، به دیتابیس‌تان متصل شده و از آن، استفاده کنید: 

```python
import os
from http.server import BaseHTTPRequestHandler, HTTPServer
import psycopg2

# Database connection parameters
DB_USER = os.getenv('DB_USER')
DB_PASSWORD = os.getenv('DB_PASSWORD')
DB_HOST = os.getenv('DB_HOST')
DB_PORT = os.getenv('DB_PORT')
DB_NAME = os.getenv('DB_NAME')

DATABASE_URI = f"postgresql://{DB_USER}:{DB_PASSWORD}@{DB_HOST}:{DB_PORT}/{DB_NAME}"

class RequestHandler(BaseHTTPRequestHandler):
    def do_GET(self):
        try:
            # Connect to the database
            connection = psycopg2.connect(DATABASE_URI)
            cursor = connection.cursor()
            cursor.execute("SELECT version();")
            db_version = cursor.fetchone()
            response = f"Connection successful (without pooling), PostgreSQL version: {db_version}"
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

## استفاده از Connection Pooling

مفهوم Connection pooling به معنای استفاده از یک مجموعه اتصالات از پیش ساخته شده برای اتصال به پایگاه داده است. این تکنیک باعث می‌شود به جای ایجاد و بستن مکرر اتصالات، از اتصالات موجود در مجموعه استفاده شود که کارایی را افزایش می‌دهد.  
> همچنین بخوانید: [آشنایی بیشتر با قابلیت Connection Pooling](https://docs.liara.ir/dbaas/details/connection-pool)

برای استفاده از قابلیت connection pooling در دیتابیس PostgreSQL،  
می‌توانید مشابه قطعه کد زیر، عمل کنید:

```python
import os
from http.server import BaseHTTPRequestHandler, HTTPServer
import psycopg2
from psycopg2 import pool

# Database connection parameters
DB_USER = os.getenv('DB_USER')
DB_PASSWORD = os.getenv('DB_PASSWORD')
DB_HOST = os.getenv('DB_HOST')
DB_PORT = os.getenv('DB_PORT')
DB_NAME = os.getenv('DB_NAME')

DATABASE_URI = f"postgresql://{DB_USER}:{DB_PASSWORD}@{DB_HOST}:{DB_PORT}/{DB_NAME}"

# Initialize the connection pool
connection_pool = None

class RequestHandler(BaseHTTPRequestHandler):
    def do_GET(self):
        global connection_pool
        if not connection_pool:
            try:
                # Create the connection pool
                connection_pool = pool.SimpleConnectionPool(
                    minconn=1, maxconn=5, dsn=DATABASE_URI
                )
                response = "Connection pool created successfully."
            except Exception as error:
                response = f"Error creating connection pool: {error}"
                self.respond(response)
                return

        try:
            # Obtain a connection from the pool
            pooled_conn = connection_pool.getconn()
            cursor = pooled_conn.cursor()
            cursor.execute("SELECT version();")
            db_version = cursor.fetchone()
            response = f"Pooling successful, PostgreSQL version: {db_version}"
            connection_pool.putconn(pooled_conn)  # Return connection to the pool
        except Exception as error:
            response = f"Error connecting with pooling: {error}"

        # Send response to client
        self.respond(response)

    def respond(self, message):
        self.send_response(200)
        self.send_header("Content-type", "text/html")
        self.end_headers()
        self.wfile.write(f"<html><body><h1>{message}</h1></body></html>".encode("utf-8"))

def run(server_class=HTTPServer, handler_class=RequestHandler):
    server_address = ('', 8080)  # Serve on port 8080
    httpd = server_class(server_address, handler_class)
    print("Server running on port 8080")
    httpd.serve_forever()

if __name__ == "__main__":
    run()
```

## all links

[All links of docs](https://docs.liara.ir/all-links-llms.txt)
