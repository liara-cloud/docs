Original link: https://docs.liara.ir/paas/django/how-tos/use-asgi/

# راه‌اندازی برنامه ASGI در برنامه‌های Django

ASGI یا Asynchronous Server Gateway Interface در Django یک استاندارد برای ساخت و مدیریت برنامه‌های وب ناهمگام است که از ویژگی‌های همزمان و ناهمزمان پشتیبانی می‌کند. ASGI، جایگزین WSGI شده و امکان استفاده از قابلیت‌های وب‌سوکت، پروتکل‌های HTTP2 و سایر عملیات‌های ناهمزمان را فراهم می‌کند.

برای استقرار برنامه‌های ASGI در پلتفرم Django لیارا تنها باید `WSGI_APPLICATION` را از فایل `settings.py` برنامه حذف کنید و مسیر فایل پیکربندی برنامه‌ی ASGI خود را در متغیر `ASGI_APPLICATION` مقداردهی کنید. به عنوان مثال، اگر نام پروژه‌تان `myapp` است، باید قطعه کد زیر را از فایل `settings.py` پاک کنید:

```python
WSGI_APPLICATION = 'myapp.wsgi.application'
```

و به جای آن، از قطعه کد زیر استفاده کنید:

```python
ASGI_APPLICATION = 'myapp.asgi.application'
```

همچنین، به دلیل استفاده از ASGI، ماژول‌ها به شکل async بارگذاری می‌شوند. بنابراین قبل از اجرا شدن برنامه، باید از بارگذاری درست ماژول‌ها، اطمینان حاصل کنید.
برای این‌کار، بایستی قطعه کد زیر را در ابتدای فایل `asgi.py` قرار دهید:

```python
import os
import django
os.environ.setdefault('DJANGO_SETTINGS_MODULE', '<path_to_settings>')
django.setup()
```

در قطعه کد فوق، بایستی مقدار `<path_to_settings>` را با مسیر فایل `settings.py` خود، جایگزین کنید. 

## all links

[All links of docs](https://docs.liara.ir/all-links-llms.txt)
