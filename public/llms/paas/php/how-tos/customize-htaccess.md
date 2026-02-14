Original link: https://docs.liara.ir/paas/php/how-tos/customize-htaccess/

# تنظیم اختصاصی فایل htaccess. در PHP

`htaccess.` یک فایل پیکربندی است که توسط سرور Apache استفاده می‌شود. این فایل به شما اجازه می‌دهد تا تنظیمات سرور را به طور خاص، پیکربندی کنید.  
شما می‌توانید با قرار دادن یک فایل به نام `htaccess.` در ریشه پروژه، از مزایای این فایل استفاده کنید.

به عنوان مثال، فرض کنید می‌خواهید از انتهای همه URLها، پسوند `php.` را حذف کنید. کافیست یک فایل `htaccess.` به ریشه برنامه‌ی‌تان اضافه کنید و سپس قطعه کد زیر را در آن قرار دهید:

```config
<IfModule mod_rewrite.c>

RewriteEngine on
RewriteCond %{REQUEST_FILENAME} !-d
RewriteCond %{REQUEST_FILENAME}\.php -f
RewriteRule ^(.*)$ $1.php [NC,L]

</IfModule>
```

سپس، کافیست تا برنامه خود را، مجدداً در لیارا مستقر کنید تا تنظیمات مدنظرتان، اعمال بشود.

بعد از استقرار موفق برنامه، می‌توانید لینکی مانند `https://liara.ir/about.php` را به صورت `https://liara.ir/about` مشاهده کنید.

## all links

[All links of docs](https://docs.liara.ir/all-links-llms.txt)
