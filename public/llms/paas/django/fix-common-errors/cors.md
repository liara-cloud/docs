Original link: https://docs.liara.ir/paas/django/fix-common-errors/cors/

# رفع خطای CORS در برنامه‌های Django

خطای CORS (Cross-Origin Resource Sharing) یک محدودیت امنیتی در مرورگرها است که جلوی درخواست‌های HTTP از منابع مختلف را می‌گیرد.  
این خطا ممکن است زمانی رخ دهد که سعی کنید از یک دامنه یا پورت متفاوت به سروری دیگر درخواست ارسال کنید، و معمولاً با پیام خطایی شبیه به **Access-Control-Allow-Origin** در مرورگر مواجه خواهید شد. در ادامه، به رفع این خطا، پرداخته شده است:

برای رفع این خطا، کافیست تا با اجرای دستور زیر، پکیج `django-cors-headers` را در پروژه خود، نصب کنید:

```bash
pip install django-cors-headers
```

در ادامه، بایستی تا به `INSTALLED_APPS` در فایل `settings.py`، مقدار `corsheaders` را اضافه کنید:

```python
INSTALLED_APPS = [
    # other apps
    'corsheaders',
    # other apps
]
```

سپس، باید مقدار `CorsMiddleware` را به `MIDDLEWARE` در فایل `settings.py`، اضافه کنید:

```bash
MIDDLEWARE = [
    'corsheaders.middleware.CorsMiddleware',
    # other middlewares ...
]
```

تمامی کارها انجام شده و می‌توانید برای اجازه دادن به همه دامنه‌ها، در فایل `settings.py` دستور زیر را وارد کنید:

```python
CORS_ALLOW_ALL_ORIGINS = True
```

یا برای اجازه دادن به دامنه‌های خاص، از قطعه کد زیر استفاده کنید:

```python
CORS_ALLOWED_ORIGINS = [
    'http://example.com',
    'http://anotherdomain.com',
]
```

متدهای مجاز را نیز می‌توانید با اضافه کردن قطعه کد زیر به فایل `settings.py`، در پروژه خود، مشخص کنید:

```python
CORS_ALLOW_METHODS = [
  "DELETE",
  "GET",
  "OPTIONS",
  "PATCH",
  "POST",
  "PUT",
]
```

در نهایت کافیست تا برای ثبت تغییرات، برنامه خود را مجدداً در لیارا، مستقر کنید.

## all links

[All links of docs](https://docs.liara.ir/all-links-llms.txt)
