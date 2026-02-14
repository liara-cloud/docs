Original link: https://docs.liara.ir/dbaas/postgresql/how-tos/connect-via-platform/flask/

# اتصال به دیتابیس PostgreSQL در برنامه‌های Flask

برای اتصال به دیتابیس PostgreSQL در برنامه‌های Flask، در ابتدا باید ماژول مربوط به آن‌را با اجرای دستور زیر، نصب کنید:

```bash
pip install psycopg
pip install psycopg_pool
```

پس از آن، کافیست تا  
اطلاعات مربوط به دیتابیس خود را  
به متغیرهای محیطی برنامه خود، اضافه کنید؛ به عنوان مثال:

```bash
PG_URI=postgresql://root:xXVTSVNzxxluPRnaRt6OYVeT@postis:5432/postgres
```

در نهایت، کافیست دستور زیر را اجرا کنید تا فایل `requirements.txt` به‌روز شود و نام ماژول مربوط به دیتابیس، در این فایل، قرار بگیرد:

```bash
pip freeze > requirements.txt
```

تمامی کارها انجام شده است و شما می‌توانید از دیتابیس خود استفاده کنید. به عنوان مثال، می‌توانید  
برای اتصال به دیتابیس، از قطعه کد زیر، استفاده کنید:

```python
from psycopg_pool import ConnectionPool
from flask import Flask
import os 

app = Flask(__name__)

pool = ConnectionPool(conninfo=os.getenv("PG_URI"))

def get_db_connection():
    return pool.getconn()

@app.route('/')
def index():
    try:
        conn = get_db_connection()
        with conn.cursor() as cursor:
            cursor.execute("SELECT 1")
            result = cursor.fetchone()
            return 'connected' if result else 'not connected'
        
    except Exception as e:
        return f'not connected, error: {str(e)}'
    
    finally:
        pool.putconn(conn)

if __name__ == '__main__':
    app.run(debug=True)
```

## all links

[All links of docs](https://docs.liara.ir/all-links-llms.txt)
