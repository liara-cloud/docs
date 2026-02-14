Original link: https://docs.liara.ir/dbaas/mongodb/how-tos/connect-via-platform/django/

# اتصال به دیتابیس MongoDB در برنامه‌های Django

برای اتصال به دیتابیس MongoDB در برنامه‌های Django، در ابتدا باید ماژول مربوط به آن‌را با اجرای دستور زیر، نصب کنید:

```bash
pip install pymongo
```

پس از آن، کافیست تا  
اطلاعات مربوط به دیتابیس خود را  
به متغیرهای محیطی برنامه خود، اضافه کنید؛ به عنوان مثال:

```bash
MONGODB_URI=mongodb://root:AOnj2OEXiUkgNk2B1tL23gA9@bromo.liara.cloud:30126/my-app?authSource=admin
```

در نهایت، کافیست دستور زیر را اجرا کنید تا فایل `requirements.txt` به‌روز شود و نام ماژول مربوط به دیتابیس، در این فایل، قرار بگیرد:

```bash
pip freeze > requirements.txt
```

تمامی کارها انجام شده است و شما می‌توانید از دیتابیس خود استفاده کنید. به عنوان مثال، می‌توانید با اجرای دستور زیر، یک application جدید ایجاد کنید:

```bash
python manage.py startapp mongodb_app
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
    'mongodb_app', # add this
]
```

در ادامه، در فایل `mongodb_app/views.py` قطعه کد زیر را وارد کنید تا اتصال به دیتابیس، بررسی شود:

```python
from django.shortcuts import render
from django.http import HttpResponse
from pymongo import MongoClient

def check_mongodb_connection(request):
    try:
        client = MongoClient(os.getenv("MONGODB_URI"))
        client.admin.command('ping')
        return HttpResponse("MongoDB connection successful")
    except Exception as e:
        return HttpResponse(f"MongoDB connection failed: {e}")
```

سپس، بایستی در دایرکتوری `mongodb_app`، یک فایل به نام `urls.py` ایجاد کنید و قطعه کد زیر را درون آن، قرار دهید:

```python
from django.urls import path
from .views import check_mongodb_connection

urlpatterns = [
    path('', check_mongodb_connection, name='check_mongodb_connection'),
]
```

در نهایت، می‌توانید در فایل `urls.py` موجود در دایرکتوری اصلی پروژه، قطعه کد زیر را اضافه کنید:

```python
from django.urls import include, path

urlpatterns = [
    path('mongodb/', include('mongodb_app.urls')),

]
```

اکنون می‌توانید برنامه‌تان را اجرا کرده و در صفحه `mongodb/` وضعیت اتصال به دیتابیس خود را بررسی کنید.

## all links

[All links of docs](https://docs.liara.ir/all-links-llms.txt)
