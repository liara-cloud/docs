Original link: https://docs.liara.ir/paas/python/how-tos/use-hooks/

# استفاده از Hooks در برنامه‌های Python

Hookها در برنامه‌نویسی به دستوراتی گفته می‌شود که به شما اجازه می‌دهند تا عملکرد یک برنامه را در یک نقطه خاص از فرایند اجرا یا استقرار آن، تغییر یا بهبود دهید؛ بدون اینکه نیاز به تغییر کد اصلی داشته باشید.

در لیارا، شما می‌توانید سه فایل زیر را در مسیر اصلی پروژه خود ایجاد کنید؛ و با توجه به زمان مشخص اجرای هر فایل‌،  
دستورات موردنیاز خود را در آن‌ها تعریف کنید:

| نام هوک | زمان اجرا | امکان دسترسی به envها | مناسب برای |
|---|---|---|---|
| liara_pre_build.sh | قبل از بیلد برنامه | ندارد | نصب پکیج‌های سیستمی لازم با apt-get |
| liara_post_build.sh | بعد از بیلد برنامه	 | ندارد | اجرای دستورات مرتبط با cache و بهینه‌سازی |
| liara_pre_start.sh | قبل از اجرای برنامه  | دارد | مناسب اجرای migrationها |

به عنوان مثال، می‌توانید در فایل `liara_pre_start.sh` دستورات مربوط به migrations را بنویسید تا نیازی نباشد که پس از استقرار برنامه، آن را به صورت دستی در خط فرمان برنامه خود، اجرا کنید:
```sh
echo "Running pre-start script..."

# run migrations
python manage.py migrate

# other needed commands
# ...

echo "Pre-start script finished."
```

> توجه داشته باشید که در [نسخه‌های بدون به‌روزرسانی Python](https://docs.liara.ir/choose-version)، این قابلیت پشتیبانی نمی‌شود.

## all links

[All links of docs](https://docs.liara.ir/all-links-llms.txt)
