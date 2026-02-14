Original link: https://docs.liara.ir/paas/python/how-tos/use-asgi/

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

## all links

[All links of docs](https://docs.liara.ir/all-links-llms.txt)
