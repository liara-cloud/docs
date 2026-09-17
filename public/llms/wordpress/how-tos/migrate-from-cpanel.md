Original link: https://docs.liara.ir/wordpress/how-tos/migrate-from-cpanel/

# انتقال WordPress از cPanel به لیارا

[Video link](https://media.liara.ir/wordpress/wordpress-cpanel.mp4)

برای انتقال برنامه WordPress خود از cPanel به لیارا کافیست تا مراحل زیر را طی کنید:  
۱. ساخت وردپرس در لیارا  
در ابتدا، طبق مستندات [راه اندازی سریع وردپرس](https://docs.liara.ir/wordpress/quick-start/)، یک برنامه وردپرس در لیارا ایجاد کنید.

۲. دانلود فایل‌ها از cPanel  
برای انتقال فایل‌های برنامه وردپرس خود از cPanel به لیارا باید وارد حساب کاربری cPanel شده و از بخش مدیریت فایل (File Manager)، تمام فایل‌های مربوط به برنامه در مسیر `public_html` هاستینگ را به‌صورت zip شده دانلود کنید.

۲. انتقال فایل‌های دانلود شده  به لیارا  
طبق مستندات [ایجاد و کار با دسترسی FTPS](https://docs.liara.ir/wordpress/how-tos/create-ftps-access/)، یک دسترسی FTPS ایجاد کنید و فایل‌های دانلود شده را به صورت unzip شده (از حالت فشرده خارج شده)، درون دیسک وردپرس خود، بریزید.

۳. انتقال دیتابیس

برای انتقال دیتابیس از cPanel باید در ابتدا از اطلاعات دیتابیس خود با استفاده از phpMyAdmin یک Export بگیرید. سپس باید در برنامه وردپرس لیار، وارد بخش **دیتابیس** شده و PHPMyAdmin را راه‌اندازی کنید. درنهایت کافیست تا عملیات Import را انجام دهید.

> برای بازیابی فایل‌های پشتیبان با حجم بالا، توصیه می‌شود که از ابزار [`MySQL CLI`](https://docs.liara.ir/dbaas/mysql/how-tos/connect-via-cli/mysql) استفاده کنید.  
> همچنین بخوانید: [بازیابی فایل پشتیبان در دیتابیس MySQL/MariaDB](https://docs.liara.ir/dbaas/mysql/how-tos/restore-backup)

۴. اتصال دامنه و تهیه گواهی SSL

طبق مستندات [اضافه کردن دامنه به برنامه](https://docs.liara.ir/wordpress/how-tos/add-domain/)، دامنه مدنظرتان را به برنامه وردپرس خود متصل کرده  
و یک گواهی SSL برای دامنه‌تان تهیه کنید.

۵. به‌روزرسانی فایل `wp-config.php`

با دسترسی ftp ایجاد شده، مجدداً به دیسک متصل شوید؛ فایل `wp-config.php` با یک code editor (مانند Notepad)، باز کرده و  
بخش مربوط به اطلاعات اتصال به دیتابیس را با توجه به اطلاعات دیتابیس فعلی‌تان که در بخش **نحوه اتصال دیتابیس** قرار دارد، تغییر دهید.

```php
// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'mydatabase' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', 'somepassword' );

/** Database hostname */
define( 'DB_HOST', 'some-host-name:3306' );
```

با انجام مراحل فوق، برنامه WordPress شما به صورت کامل، منتقل می‌شود و شما می‌توانید از آن استفاده کنید.

> درصورتی که دامنه‌ی قبلی خود را به برنامه وردپرس متصل نکرده باشید باید در جدول `wp_options` فیلد‌های `siteUrl` و `homeUrl` آدرس فعلی برنامه را وارد کرده و درنهایت برنامه را ری‌استارت کنید.

## all links

[All links of docs](https://docs.liara.ir/all-links-llms.txt)
