Original link: https://docs.liara.ir/paas/flask/fix-common-errors/upload-limit-size/

# رفع خطای محدودیت آپلود فایل با حجم بیش از 1MB

از آنجایی که در لیارا، برای اجرای برنامه‌های Flask، از [وب‌سرور Nginx](https://docs.liara.ir/how-tos/customize-nginx) استفاده می‌شود.  
در این وب‌سرور، به‌صورت پیش‌فرض حداکثر حجم مجاز آپلود فایل `1MB` در نظر گرفته شده‌است. شما می‌توانید یک فایل با نام `liara_nginx.conf` در مسیر اصلی پروژه ایجاد کنید و محتویات زیر را داخل آن قرار دهید:  

```python
client_max_body_size 250M;

location /public {
  alias /usr/src/app/public;
}

location / {
  try_files /dev/null @flask_app;
}

location ~\.sqlite3$ {
  deny all;
  error_page 403 =404 /;
}

location ~ /\.well-known {
  allow all;
}
```

با قرار دادن فایل بالا در ریشه‌ی برنامه‌ی‌تان حداکثر حجم مجاز آپلود فایل به 250MB افزایش می‌یابد. شما می‌توانید مقدار دلخواه خودتان را تنظیم کنید. در انتها، کافیست تا برنامه را مجدداً در لیارا مستقر کنید تا تغییرات، اعمال شوند.

## all links

[All links of docs](https://docs.liara.ir/all-links-llms.txt)
