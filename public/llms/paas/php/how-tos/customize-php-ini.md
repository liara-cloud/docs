Original link: https://docs.liara.ir/paas/php/how-tos/customize-php-ini/

# تنظیم اختصاصی فایل php.ini

`php.ini` یکی از فایل‌های مهم در سرور PHP است که نقش مهمی در عملکرد و رفتار آن، ایفا می‌کند. شما می‌توانید در برنامه‌های  
PHP خود در لیارا، پارامترهای درون این فایل را، شخصی‌سازی کنید.

کافیست تا در مسیر اصلی پروژه، یک فایل به نام `liara_php.ini` ایجاد کنید و درون آن، تنظیمات مورد نظر خود را، بنویسید. به عنوان مثال، فرض کنید که می‌خواهید حداکثر حجم مجاز برای آپلود فایل در سایت خود را شخصی‌سازی کنید. برای این‌کار می‌توانید در فایل `liara_php.ini`، قطعه کد زیر را، قرار دهید:

```ini
file_uploads = On
memory_limit = 128M
upload_max_filesize = 64M
post_max_size = 128M
max_execution_time = 600
```

سپس، کافیست تا برنامه خود را، مجدداً در لیارا مستقر کنید تا تنظیمات مدنظرتان، اعمال بشود.

> همچنین بخوانید: [رفع خطای محدودیت آپلود فایل با حجم بیش از 100MB](https://docs.liara.ir/paas/laravel/fix-common-errors/upload-limit-size)

## all links

[All links of docs](https://docs.liara.ir/all-links-llms.txt)
