Original link: https://docs.liara.ir/dbaas/postgresql/how-tos/connect-via-platform/django/

# اتصال به دیتابیس PostgreSQL در برنامه‌های Django

برای اتصال به دیتابیس PostgreSQL در برنامه‌های Django، در ابتدا باید ماژول مربوط به آن‌را با اجرای دستور زیر، نصب کنید:

```bash
pip install psycopg2
```

در ادامه، بایستی در فایل `settings.py` تنظیمات مربوط به دیتابیس را وارد کنید: 

```python
# other codes ...
import os
DATABASES = {
    
    'default': {
        'ENGINE': 'django.db.backends.postgresql',
        'NAME':     os.getenv("POSTGRESQL_DB_NAME"), 
        'USER':     os.getenv("POSTGRESQL_DB_USER"),
        'PASSWORD': os.getenv("POSTGRESQL_DB_PASS"),
        'HOST':     os.getenv("POSTGRESQL_DB_HOST"),
        'PORT':     os.getenv("POSTGRESQL_DB_PORT"),
    },
}
# other codes ...
```

پس از آن، کافیست تا 
اطلاعات مربوط به دیتابیس خود را 
به متغیرهای محیطی برنامه خود، اضافه کنید؛ به عنوان مثال:

```bash
POSTGRESQL_DB_HOST=bromo.liara.cloud
POSTGRESQL_DB_PORT=30334
POSTGRESQL_DB_USER=root
POSTGRESQL_DB_PASS=YY773ElmNtBrv4xrJOdeBY47
POSTGRESQL_DB_NAME=postgres
```

در نهایت، کافیست دستور زیر را اجرا کنید تا فایل `requirements.txt` به‌روز شود و نام ماژول مربوط به دیتابیس، در این فایل، قرار بگیرد:

```bash
pip freeze > requirements.txt
```

تمامی کارها انجام شده است و شما می‌توانید از دیتابیس خود استفاده کنید. به عنوان مثال، می‌توانید با اجرای دستور زیر، یک application جدید ایجاد کنید:

```bash
python manage.py startapp postgresql_app
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
    'postgresql_app', # add this
]
```

در ادامه، در فایل `postgresql_app/views.py` قطعه کد زیر را وارد کنید تا اتصال به دیتابیس، بررسی شود:

```python
from django.shortcuts import render
from django.db import connections
from django.http import HttpResponse

def check_postgresql_connection(request):
    try:
        connection = connections['default']
        connection.ensure_connection()
        return HttpResponse("PostgreSQL connection successful")
    except Exception as e:
        return HttpResponse(f"PostgreSQL connection failed: {e}")
```

سپس، بایستی در دایرکتوری `postgresql_app`، یک فایل به نام `urls.py` ایجاد کنید و قطعه کد زیر را درون آن، قرار دهید:

```python
from django.urls import path
from .views import check_postgresql_connection

urlpatterns = [
    path('', check_postgresql_connection, name='check_postgresql_connection'),
]
```

در نهایت، می‌توانید در فایل `urls.py` موجود در دایرکتوری اصلی پروژه، قطعه کد زیر را اضافه کنید:

```python
from django.urls import include, path

urlpatterns = [
    path('postgresql/', include('postgresql_app.urls')),
]
```

اکنون می‌توانید برنامه‌تان را اجرا کرده و در صفحه `postgresql/` وضعیت اتصال به دیتابیس خود را بررسی کنید.

## استفاده از Connection Pooling

مفهوم Connection pooling به معنای استفاده از یک مجموعه اتصالات از پیش ساخته شده برای اتصال به پایگاه داده است. این تکنیک باعث می‌شود به جای ایجاد و بستن مکرر اتصالات، از اتصالات موجود در مجموعه استفاده شود که کارایی را افزایش می‌دهد.
> همچنین بخوانید: [آشنایی بیشتر با قابلیت Connection Pooling](https://docs.liara.ir/dbaas/details/connection-pool)

برای استفاده از قابلیت connection pooling در دیتابیس PostgreSQL، فقط کافیست تا با اجرای دستور زیر، ماژول موردنیاز را نصب کنید:

```bash
pip install django-db-connection-pool[postgresql]
```

سپس، در فایل `settings.py` در بخش `DATABASES`، فیلد مربوط به `ENGINE` را مانند شکل زیر تغییر دهید:

```python
# other codes ...
import os
DATABASES = {
    'default': {
        'ENGINE': 'dj_db_conn_pool.backends.postgresql',
        'NAME':     os.getenv("POSTGRESQL_DB_NAME"), 
        'USER':     os.getenv("POSTGRESQL_DB_USER"),
        'PASSWORD': os.getenv("POSTGRESQL_DB_PASS"),
        'HOST':     os.getenv("POSTGRESQL_DB_HOST"),
        'PORT':     os.getenv("POSTGRESQL_DB_PORT"),
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
        'ENGINE': 'dj_db_conn_pool.backends.postgresql',
        'NAME':     os.getenv("POSTGRESQL_DB_NAME"), 
        'USER':     os.getenv("POSTGRESQL_DB_USER"),
        'PASSWORD': os.getenv("POSTGRESQL_DB_PASS"),
        'HOST':     os.getenv("POSTGRESQL_DB_HOST"),
        'PORT':     os.getenv("POSTGRESQL_DB_PORT"),
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

اکنون می‌توانید مجدداً برنامه‌تان را اجرا کرده و در صفحه `postgresql/` وضعیت اتصال به دیتابیس خود را بررسی کنید.

## all links

[All links of docs](https://docs.liara.ir/all-links-llms.txt)
