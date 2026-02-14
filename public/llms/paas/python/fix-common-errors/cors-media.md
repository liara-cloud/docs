Original link: https://docs.liara.ir/paas/python/fix-common-errors/cors-media/

# رفع خطای CORS فایل‌های Media در برنامه‌های Django

فایل‌های رسانه (Media) به کاربران در پلتفرم Django با وب‌سرور Nginx ارائه می‌شود؛ حال، اگر کاربران‌تان برای دسترسی به فایل‌های رسانه با خطای CORS مواجه شدند باید تنظیمات Nginx پروژه‌ی خود را شخصی‌سازی کنید. 

برای رفع این خطا، یک فایل با نام `liara_nginx.conf` در مسیر اصلی پروژه‌ی خود ایجاد کرده و قطعه‌کد زیر را در آن، قرار دهید:

```python
client_max_body_size 100M;

location /media {
  add_header Access-Control-Allow-Origin *;
  alias /usr/src/app/media;
}

location /static {
  alias /usr/src/app/staticfiles;
}

location / {
  try_files /dev/null @django_app;
}

location ~\.sqlite3$ {
  deny all;
  error_page 403 =404 /;
}

location ~ /\.well-known {
  allow all;
}
```

سپس، برنامه خود را مجدداً در لیارا مستقر کنید تا تغییرات، اعمال شوند.

با اعمال این پیکربندی، فایل‌های قرار گرفته در پوشه‌ی `media` با هدر `Access-Control-Allow-Origin` و مقدار `*` سرو می‌شوند. همچنین شما می‌توانید مقدار دلخواه خودتان را نیز، تنظیم کنید.

## all links

[All links of docs](https://docs.liara.ir/all-links-llms.txt)
