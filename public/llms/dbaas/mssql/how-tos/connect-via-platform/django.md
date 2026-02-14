Original link: https://docs.liara.ir/dbaas/mssql/how-tos/connect-via-platform/django/

# اتصال به دیتابیس MSSQL در برنامه‌های Django

برای اتصال به دیتابیس MSSQL در برنامه‌های Django، در ابتدا باید ماژول مربوط به آن‌را با اجرای دستور زیر، نصب کنید:

```bash
pip install mssql-django
```

در ادامه، بایستی در فایل `settings.py` تنظیمات مربوط به دیتابیس را وارد کنید: 

```python
# other codes ...
import os
DATABASES = {   
    'default': {
        'ENGINE': 'mssql',
        'NAME':     os.getenv("MSSQL_DB_NAME"),
        'USER':     os.getenv("MSSQL_DB_USER"),
        'PASSWORD': os.getenv("MSSQL_DB_PASS"),
        'HOST':     os.getenv("MSSQL_DB_HOST"),
        'PORT':     os.getenv("MSSQL_DB_PORT"),
        'OPTIONS': {
            'driver': 'ODBC Driver 17 for SQL Server',
            'extra_params': 'Encrypt=no;',
        }
    }
}
# other codes ...
```

پس از آن، کافیست تا  
اطلاعات مربوط به دیتابیس خود را  
به متغیرهای محیطی برنامه خود، اضافه کنید؛ به عنوان مثال:

```bash
MSSQL_DB_HOST=bromo.liara.cloud
MSSQL_DB_PORT=34119
MSSQL_DB_USER=sa
MSSQL_DB_PASS=8qLDc1Xco1Q4X0lqgjy4HWc2
MSSQL_DB_NAME=db
```

در نهایت، کافیست دستور زیر را اجرا کنید تا فایل `requirements.txt` به‌روز شود و نام ماژول مربوط به دیتابیس، در این فایل، قرار بگیرد:

```bash
pip freeze > requirements.txt
```

تمامی کارها انجام شده است و شما می‌توانید از دیتابیس خود استفاده کنید. به عنوان مثال، می‌توانید با اجرای دستور زیر، یک application جدید ایجاد کنید:

```bash
python manage.py startapp mssql_app
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
    'mssql_app', # add this
]
```

در ادامه، در فایل `mssql_app/views.py` قطعه کد زیر را وارد کنید تا اتصال به دیتابیس، بررسی شود:

```python
from django.shortcuts import render
from django.db import connections
from django.http import HttpResponse

def check_mssql_connection(request):
    try:
        connection = connections['mssql']
        connection.ensure_connection()
        return HttpResponse("MSSQL connection successful")
    except Exception as e:
        return HttpResponse(f"MSSQL connection failed: {e}")
```

سپس، بایستی در دایرکتوری `mssql_app`، یک فایل به نام `urls.py` ایجاد کنید و قطعه کد زیر را درون آن، قرار دهید:

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
    path('mssql/', include('mssql_app.urls')),
]
```

اکنون می‌توانید برنامه‌تان را اجرا کرده و در صفحه `mssql/` وضعیت اتصال به دیتابیس خود را بررسی کنید.

## استفاده از Connection Pooling

مفهوم Connection pooling به معنای استفاده از یک مجموعه اتصالات از پیش ساخته شده برای اتصال به پایگاه داده است. این تکنیک باعث می‌شود به جای ایجاد و بستن مکرر اتصالات، از اتصالات موجود در مجموعه استفاده شود که کارایی را افزایش می‌دهد.  
> همچنین بخوانید: [آشنایی بیشتر با قابلیت Connection Pooling](https://docs.liara.ir/dbaas/details/connection-pool)

برای استفاده از قابلیت connection pooling در دیتابیس MSSQL  
کافیست تا متغیر `DATABASE_CONNECTION_POOLING` را به فایل `settings.py`، با مقدار زیر، اضافه کنید:

```bash
DATABASES = {   
    'default': {
        'ENGINE': 'mssql',
        'NAME':     os.getenv("MSSQL_DB_NAME"),
        'USER':     os.getenv("MSSQL_DB_USER"),
        'PASSWORD': os.getenv("MSSQL_DB_PASS"),
        'HOST':     os.getenv("MSSQL_DB_HOST"),
        'PORT':     os.getenv("MSSQL_DB_PORT"),
        'OPTIONS': {
            'driver': 'ODBC Driver 17 for SQL Server',
            'extra_params': 'Encrypt=no;',
        }
    }
}

DATABASE_CONNECTION_POOLING = True # add this
```

همچنین، می‌توانید تنظیمات مربوط به Connection Pooling را  
مانند قطعه کد زیر، بر روی دیتابیس خود، اعمال کنید:

```python
# other codes ...
import os
DATABASES = {   
    'default': {
        'ENGINE': 'mssql',
        'NAME':     os.getenv("MSSQL_DB_NAME"),
        'USER':     os.getenv("MSSQL_DB_USER"),
        'PASSWORD': os.getenv("MSSQL_DB_PASS"),
        'HOST':     os.getenv("MSSQL_DB_HOST"),
        'PORT':     os.getenv("MSSQL_DB_PORT"),
        'OPTIONS': {
            'driver': 'ODBC Driver 17 for SQL Server',
            'extra_params': 'Encrypt=no;',
            'MARS_Connection': True,
            'Connection Timeout': 30,
            'pool_options': {
                'min': 5,   
                'max': 20,  
                'increment': 5
            },
        }
    }
}

DATABASE_CONNECTION_POOLING = True
# other codes ...
```

اکنون می‌توانید مجدداً برنامه‌تان را اجرا کرده و در صفحه `mssql/` وضعیت اتصال به دیتابیس خود را بررسی کنید.

## all links

[All links of docs](https://docs.liara.ir/all-links-llms.txt)
