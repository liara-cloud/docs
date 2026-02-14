Original link: https://docs.liara.ir/paas/flask/how-tos/enable-gzip/

# فعال‌سازی قابلیت gzip در برنامه‌های Flask

قابلیت gzip در NGINX برای فشرده‌سازی محتوا قبل از ارسال آن به مرورگر کاربران استفاده می‌شود. این کار باعث کاهش حجم داده‌های منتقل‌شده و در نتیجه کاهش زمان بارگذاری صفحات وب می‌شود، که می‌تواند به بهبود عملکرد کمک کند.

برای فعال‌کردن قابلیت gzip می‌توانید از فایل `liara_nginx.conf` استفاده کنید. برای این کار کافیست این فایل را در مسیر اصلی پروژه، ایجاد کنید و یا اگر که از قبل این‌کار را انجام داده‌اید؛ قطعه کد زیر را در آن، قرار دهید:

```conf
gzip             on;
gzip_disable     "msie6";
gzip_vary        on;
gzip_proxied     any;
gzip_comp_level  6;
gzip_types       text/plain text/css application/json application/javascript application/x-javascript text/xml application/xml application/xml+rss text/javascript image/svg+xml;

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

پس از انجام کار فوق، کافیست برای اعمال تغییرات، برنامه‌تان را مجدداً در لیارا، مستقر کنید.

## all links

[All links of docs](https://docs.liara.ir/all-links-llms.txt)
