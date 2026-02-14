Original link: https://docs.liara.ir/dbaas/mysql/how-tos/connect-via-platform/django/

# اتصال به دیتابیس MySQL در برنامه‌های Django

برای اتصال به دیتابیس MySQL در برنامه‌های Django، در ابتدا باید ماژول مربوط به آن‌را با اجرای دستور زیر، نصب کنید:

```bash
pip install mysqlclient
```

در ادامه، بایستی در فایل `settings.py` تنظیمات مربوط به دیتابیس را وارد کنید: 

```python
# other codes ...
import os
DATABASES = {
    'default': {
        'ENGINE':   'django.db.backends.mysql', 
        'NAME':     os.getenv("MYSQL_DB_NAME"), 
        'USER':     os.getenv("MYSQL_DB_USER"),
        'PASSWORD': os.getenv("MYSQL_DB_PASS"),
        'HOST':     os.getenv("MYSQL_DB_HOST"),
        'PORT':     os.getenv("MYSQL_DB_PORT"),
    },
}
# other codes ...
```

پس از آن، کافیست تا 
اطلاعات مربوط به دیتابیس خود را 
به متغیرهای محیطی برنامه خود، اضافه کنید؛ به عنوان مثال:

```bash
MYSQL_DB_HOST=bromo.liara.cloud
MYSQL_DB_PORT=33035
MYSQL_DB_USER=root
MYSQL_DB_PASS=gIg1uXioTrGDZOESQf0YXE87
MYSQL_DB_NAME=compassionate_heisenberg

```

در نهایت، کافیست دستور زیر را اجرا کنید تا فایل `requirements.txt` به‌روز شود و نام ماژول مربوط به دیتابیس، در این فایل، قرار بگیرد:

```bash
pip freeze > requirements.txt
```

تمامی کارها انجام شده است و شما می‌توانید از دیتابیس خود استفاده کنید. به عنوان مثال، می‌توانید با اجرای دستور زیر، یک application جدید ایجاد کنید:

```bash
python manage.py startapp mysql_app
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
    'mysql_app', # add this
]
```

در ادامه، در فایل `mysql_app/views.py` قطعه کد زیر را وارد کنید تا اتصال به دیتابیس، بررسی شود:

```python
from django.shortcuts import HttpResponse
from django.db import connections

def check_mysql_connection(request):
    try:
        with connections['default'].cursor() as cursor:
            cursor.execute("SELECT 1")
            result = cursor.fetchone()
        if result:
            return HttpResponse("MySQL connection successful")
        else:
            return HttpResponse("MySQL connection failed")
    except Exception as e:
        return HttpResponse(f"MySQL connection failed: {e}")
```

سپس، بایستی در دایرکتوری `mysql_app`، یک فایل به نام `urls.py` ایجاد کنید و قطعه کد زیر را درون آن، قرار دهید:

```python
from django.urls import path
from .views import check_mysql_connection

urlpatterns = [
    path('', check_mysql_connection, name='check_mysql_connection'),
]
```

در نهایت، می‌توانید در فایل `urls.py` موجود در دایرکتوری اصلی پروژه، قطعه کد زیر را اضافه کنید:

```python
from django.urls import include, path

urlpatterns = [
    path('mysql/', include('mysql_app.urls')),
    
]
```

اکنون می‌توانید برنامه‌تان را اجرا کرده و در صفحه `mysql/` وضعیت اتصال به دیتابیس خود را بررسی کنید.

## استفاده از Connection Pooling

مفهوم Connection pooling به معنای استفاده از یک مجموعه اتصالات از پیش ساخته شده برای اتصال به پایگاه داده است. این تکنیک باعث می‌شود به جای ایجاد و بستن مکرر اتصالات، از اتصالات موجود در مجموعه استفاده شود که کارایی را افزایش می‌دهد.
> همچنین بخوانید: [آشنایی بیشتر با قابلیت Connection Pooling](https://docs.liara.ir/dbaas/details/connection-pool)

برای استفاده از قابلیت connection pooling در دیتابیس MySQL، فقط کافیست تا با اجرای دستور زیر، ماژول موردنیاز را نصب کنید:

```bash
pip install django-db-connection-pool[mysql]
```

سپس، در فایل `settings.py` در بخش `DATABASES`، فیلد مربوط به `ENGINE` را مانند شکل زیر تغییر دهید:

```python
# other codes ...
import os
DATABASES = {
    'default': {
        'ENGINE':   'dj_db_conn_pool.backends.mysql', 
        'NAME':     os.getenv("MYSQL_DB_NAME"), 
        'USER':     os.getenv("MYSQL_DB_USER"),
        'PASSWORD': os.getenv("MYSQL_DB_PASS"),
        'HOST':     os.getenv("MYSQL_DB_HOST"),
        'PORT':     os.getenv("MYSQL_DB_PORT"),
    },
}
# other codes ...
```

همچنین، می‌توانید تنظیمات مربوط به Connection Pooling را در فیلدی به نام `POOL_OPTIONS`مانند قطعه کد زیر، بر روی دیتابیس خود، اعمال کنید:

```python
# other codes ...
import os
DATABASES = {
    'default': {
        'ENGINE':   'dj_db_conn_pool.backends.mysql', 
        'NAME':     os.getenv("MYSQL_DB_NAME"), 
        'USER':     os.getenv("MYSQL_DB_USER"),
        'PASSWORD': os.getenv("MYSQL_DB_PASS"),
        'HOST':     os.getenv("MYSQL_DB_HOST"),
        'PORT':     os.getenv("MYSQL_DB_PORT"),
        'POOL_OPTIONS': {
            'POOL_SIZE': 10,
            'MAX_OVERFLOW': 10,
            'RECYCLE': 24 * 60 * 60
        }
    },
}
# other codes ...
```

در نهایت، کافیست دستور زیر را اجرا کنید تا فایل `requirements.txt`، به‌روز شود و نام ماژول مورد نیاز، در آن، قرار بگیرد:

```python
pip freeze > requirements.txt
```

اکنون می‌توانید مجدداً برنامه‌تان را اجرا کرده و در صفحه `mysql/` وضعیت اتصال به دیتابیس خود را بررسی کنید.

## all links

[All links of docs](https://docs.liara.ir/all-links-llms.txt)
