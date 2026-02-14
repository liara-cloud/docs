Original link: https://docs.liara.ir/paas/python/how-tos/connect-to-db/sqlite/

# اتصال به دیتابیس SQLite در برنامه‌های Python

[Video link](https://media.liara.ir/python/python-sqlite.mp4)

برای اتصال به دیتابیس SQLite در برنامه‌های Python،  
تنها کافیست تا  
طبق مستندات [ساخت دیسک](https://docs.liara.ir/paas/disks/create)، یک دیسک برای ذخیره دیتابیس خود بسازید؛ در ادامه، می‌توانید طبق مستندات [تعریف مسیر برای دیسک](https://docs.liara.ir/paas/disks/route)، دیسک‌ خود را به دایرکتوری دیتابیس، مشابه قطعه کد زیر در فایل `liara.josn` یا در استقرار با کنسول، متصل کنید:  

```json
{
    "disks": [
        {
            "name": "database",
            "mountTo": "database"
        }
    ]
}
```

در نهایت، می‌توانید مشابه قطعه کد زیر، به دیتابیس‌تان متصل شده و از آن، استفاده کنید:  

```python
import os
import sqlite3
from http.server import SimpleHTTPRequestHandler, HTTPServer

# Define the directory and database file name
db_directory = 'database'
db_filename = 'my_database.db'
db_path = os.path.join(db_directory, db_filename)

# Create or check the SQLite database connection
def check_db_connection():
    # Check if the database exists
    if not os.path.exists(db_path):
        return False
    
    try:
        # Try connecting to the database to ensure it's accessible
        connection = sqlite3.connect(db_path)
        connection.close()
        return True
    except sqlite3.Error:
        return False

# Custom handler to respond to HTTP requests
class MyHandler(SimpleHTTPRequestHandler):
    def do_GET(self):
        # When accessing the root ("/") page, check if database exists and connection
        if self.path == '/':
            # Check if the database exists
            if not os.path.exists(db_path):
                # Create the database if it doesn't exist
                self.create_db()
                response = "Database created successfully!"
            else:
                response = "Database already exists."
            
            # Check connection to the database
            if check_db_connection():
                connection_status = "Database connection successful!"
            else:
                connection_status = "Failed to connect to the database."
            
            # Respond with both messages
            self.send_response(200)
            self.send_header('Content-type', 'text/html')
            self.end_headers()
            self.wfile.write(f"<html><body><h1>{response}</h1>{connection_status}</body></html>".encode())

    def create_db(self):
        # Create the directory if it doesn't exist
        if not os.path.exists(db_directory):
            os.makedirs(db_directory)
            print(f"Directory '{db_directory}' created.")
        
        # Connect to SQLite and create the database file if it doesn't exist
        connection = sqlite3.connect(db_path)
        cursor = connection.cursor()
        
        # Create a simple table to test the database
        cursor.execute('''CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY, name TEXT)''')
        
        # Commit changes and close the connection
        connection.commit()
        cursor.close()
        connection.close()
        
        print(f"Database created at '{db_path}'")

# Define the server address and port
server_address = ('', 8080)

# Create and run the server
httpd = HTTPServer(server_address, MyHandler)
print("Server running on port 8080")
httpd.serve_forever()
```

اکنون می‌توانید برنامه‌تان را در لیارا مستقر کرده و در صفحه `/` وضعیت اتصال به دیتابیس خود را بررسی کنید.

## all links

[All links of docs](https://docs.liara.ir/all-links-llms.txt)
