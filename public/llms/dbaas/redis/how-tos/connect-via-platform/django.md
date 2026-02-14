Original link: https://docs.liara.ir/dbaas/redis/how-tos/connect-via-platform/django/

# اتصال به دیتابیس Redis در برنامه‌های Django

برای اتصال به دیتابیس Redis در برنامه‌های Django، در ابتدا باید ماژول مربوط به آن‌را با اجرای دستور زیر، نصب کنید:

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

تمامی کارها انجام شده است و شما می‌توانید از Redis استفاده کنید. به عنوان مثال، می‌توانید با اجرای دستور زیر، یک application جدید ایجاد کنید:

```bash
python manage.py startapp redis_app
```

سپس، این application جدید را به بخش `INSTALLED_APPS` در `settings.py`، اضافه کنید:

```python
# Application definition

INSTALLED_APPS = [
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    'redis_app', # add this
]
```

در ادامه، در فایل `redis_app/views.py` قطعه کد زیر را وارد کنید تا اتصال به دیتابیس، بررسی شود:

```python
from django.shortcuts import HttpResponse
import redis

def check_redis_connection(request):
    try:
        # Connect to Redis
        redis_url = os.getenv('REDIS_URI')
        r = redis.StrictRedis.from_url(redis_url)

        # Insert data
        r.set('test_key', 'test_value')

        # Read data
        value = r.get('test_key')

        return HttpResponse(f"Redis operation successful, value: {value.decode('utf-8')}")
    except Exception as e:
        return HttpResponse(f"Redis operation failed: {e}")
```

سپس، بایستی در دایرکتوری `redis_app`، یک فایل به نام `urls.py` ایجاد کنید و قطعه کد زیر را درون آن، قرار دهید:

```python
from django.urls import path
from .views import check_redis_connection

urlpatterns = [
    path('', check_redis_connection, name='check_redis_connection'),
]
```

در نهایت، می‌توانید در فایل `urls.py` موجود در دایرکتوری اصلی پروژه، قطعه کد زیر را اضافه کنید:

```python
from django.urls import include, path

urlpatterns = [
   
    path('redis/', include('redis_app.urls')),
]
```

اکنون می‌توانید برنامه‌تان را اجرا کرده و در صفحه `redis/` وضعیت اتصال به دیتابیس خود را بررسی کنید.

## all links

[All links of docs](https://docs.liara.ir/all-links-llms.txt)
