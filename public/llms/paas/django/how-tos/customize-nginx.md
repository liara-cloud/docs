Original link: https://docs.liara.ir/paas/django/how-tos/customize-nginx/

# تنظیم Nginx در برنامه‌های Django

[NGINX](https://nginx.org/en/) یک سرور وب قدرتمند و چندمنظوره است که برای ارائه وب، پروکسی معکوس، کش HTTP، و حتی به عنوان یک لود بالانسر استفاده می‌شود. این سرور به دلیل عملکرد بالا، مقیاس‌پذیری و کارایی در مدیریت ترافیک وب، بسیار محبوب است.

در برنامه‌های Django لیارا، از وب‌سرور Nginx استفاده می‌شود و پیکربندی پیش‌فرض این وب‌سرور به‌شکل زیر است:

```
client_max_body_size 100M;

location /media {
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

حال شما می‌توانید یک فایل به نام `liara_nginx.conf`در مسیر اصلی پروژه‌ی خود ایجاد کرده و پیکربندی وب‌سرور Nginx را متناسب با نیاز خود تغییر دهید. 

سپس، کافیست تا برنامه خود را، مجدداً در لیارا مستقر کنید تا تنظیمات مدنظرتان، اعمال بشود.

> امکان تغییر تنظیمات `nginx` از ابتدا وجود ندارد. شما می‌توانید تنها برخی از این تنظیمات را شخصی‌سازی کنید. در نهایت، فایل تنظیمات شما داخل بلاک server در تنظیمات اصلی، include خواهد شد.

## all links

[All links of docs](https://docs.liara.ir/all-links-llms.txt)
