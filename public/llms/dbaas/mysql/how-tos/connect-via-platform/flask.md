Original link: https://docs.liara.ir/dbaas/mysql/how-tos/connect-via-platform/flask/

# اتصال به دیتابیس MySQL در برنامه‌های Flask

برای اتصال به دیتابیس MySQL در برنامه‌های Flask، در ابتدا باید ماژول مربوط به آن‌را با اجرای دستور زیر، نصب کنید:

```bash
pip install mysql-connector-python
```

پس از آن، کافیست تا  
اطلاعات مربوط به دیتابیس خود را  
به متغیرهای محیطی برنامه خود، اضافه کنید؛ به عنوان مثال:

```bash
DB_HOST=annapurna.liara.cloud
DB_PORT=32933
DB_NAME=gallant_ramanujan
DB_USER=root
DB_PASS=UIhfscObpnZhhHG4bo6BOyvF
```

در نهایت، کافیست دستور زیر را اجرا کنید تا فایل `requirements.txt` به‌روز شود و نام ماژول مربوط به دیتابیس، در این فایل، قرار بگیرد:

```bash
pip freeze > requirements.txt
```

تمامی کارها انجام شده است و شما می‌توانید از دیتابیس خود استفاده کنید. به عنوان مثال، می‌توانید  
برای اتصال به دیتابیس، از قطعه کد زیر، استفاده کنید:

```python
from mysql.connector import pooling
from flask import Flask
import os

app = Flask(__name__)

def get_connection():
    try:
        connection_pool = pooling.MySQLConnectionPool(pool_size=1,
                                                      pool_reset_session=True,
                                                      host=os.getenv("DB_HOST"),
                                                      port=os.getenv("DB_PORT"),
                                                      database=os.getenv("DB_NAME"),
                                                      user=os.getenv("DB_USER"),
                                                      password=os.getenv("DB_PASS"))
        return connection_pool.get_connection()
    except Exception as e:
        print(str(e))
        return None

@app.route('/')
def index():
    conn = get_connection()
    if conn:
        with conn.cursor() as cursor:
            cursor.execute("SELECT 1")
            result = cursor.fetchall()
            conn.close()
            return 'connected' if result else 'not connected'
    else:
        return 'not connected'

if __name__ == '__main__':
    app.run(debug=True)
```

## all links

[All links of docs](https://docs.liara.ir/all-links-llms.txt)
