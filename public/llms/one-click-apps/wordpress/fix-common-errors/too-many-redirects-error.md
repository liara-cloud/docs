Original link: https://docs.liara.ir/one-click-apps/wordpress/fix-common-errors/too-many-redirects-error/

# رفع خطای err_too_many_redirects

خطای ERR_TOO_MANY_REDIRECTS در وردپرس زمانی رخ می‌دهد که سایت در یک حلقه بی‌پایان از تغییر مسیرها (ریدایرکت‌ها) گرفتار شده است. این مشکل معمولاً به‌دلیل تنظیمات نادرست URL، مشکلات پلاگین‌ها، یا خطاهای پیکربندی فایل `htaccess.` ایجاد می‌شود. 

برای رفع این خطا، در برنامه وردپرسی خود، برای دیسک `data`، یک [دسترسی FTP](https://docs.liara.ir/paas/disks/ftp-access) ایجاد کنید. با این دسترسی وارد فایلی به نام `wp-config.php` شده و قطعه کد زیر را، به آن، اضافه کنید:

```php
$_SERVER['HTTPS'] = 'on';
/* That's all, stop editing! Happy publishing. <-- قبل از این کامنت */
```

در ادامه، دسترسی را ببندید و برنامه خود را ری‌استارت کنید تا مشکل، برطرف شود.

## all links

[All links of docs](https://docs.liara.ir/all-links-llms.txt)
