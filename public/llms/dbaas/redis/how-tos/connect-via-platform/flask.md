Original link: https://docs.liara.ir/dbaas/redis/how-tos/connect-via-platform/flask/

# اتصال به دیتابیس Redis در برنامه‌های Flask

برای اتصال به دیتابیس Redis در برنامه‌های Flask، در ابتدا باید ماژول مربوط به آن‌را با اجرای دستور زیر، نصب کنید:

```bash
pip install redis
```

پس از آن، کافیست تا  
اطلاعات مربوط به دیتابیس خود را  
به متغیرهای محیطی برنامه خود، اضافه کنید؛ به عنوان مثال:
```bash
REDIS_URI=redis://:z4cLHblJzYJcIZk73OGeqyIz@bromo.liara.cloud:30664/0
```

در نهایت، کافیست دستور زیر را اجرا کنید تا فایل `requirements.txt` به‌روز شود و نام ماژول مربوط به دیتابیس، در این فایل، قرار بگیرد:

```bash
pip freeze > requirements.txt
```

تمامی کارها انجام شده است و شما می‌توانید از Redis استفاده کنید.  
به عنوان مثال، می‌توانید  
برای اتصال به دیتابیس، از قطعه کد زیر، استفاده کنید:

```python
from flask import Flask
import redis
import os

app = Flask(__name__)

redis_uri = os.getenv('REDIS_URI')

redis_client = redis.StrictRedis.from_url(redis_uri)

@app.route('/')
def test_redis_connection():
    try:
        redis_client.ping()
        return "Connected to Redis successfully!"
    except Exception as e:
        print(f"Error connecting to Redis: {e}")
        return "Failed to connect to Redis."

if __name__ == '__main__':
    app.run(debug=True)
```

## all links

[All links of docs](https://docs.liara.ir/all-links-llms.txt)
