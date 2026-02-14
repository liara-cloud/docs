Original link: https://docs.liara.ir/one-click-apps/wordpress/how-tos/migrate-from-cpanel/

# انتقال WordPress از cPanel به لیارا

[Video link](https://media.liara.ir/wordpress/wordpress-cpanel.mp4)

برای انتقال برنامه WordPress خود از cPanel به لیارا کافیست تا مراحل زیر را طی کنید:  
۱. دانلود فایل‌ها از cPanel  
برای انتقال فایل‌های برنامه وردپرس خود از cPanel به لیارا باید وارد حساب کاربری cPanel شده و از بخش مدیریت فایل (File Manager)، تمام فایل‌های مربوط به برنامه در مسیر `public_html` هاستینگ را به‌صورت zip شده دانلود کنید.

۲. انتقال فایل‌های دانلود شده  به لیارا  
در برنامه وردپرسی خود در لیارا، یک [یک دسترسی FTP جدید](https://docs.liara.ir/paas/disks/ftp-access) برای دیسک `data` ایجاد کنید. با این دسترسی به دیسک متصل شوید و تمامی فایل‌های درون دیسک را پاک کنید.  
در ادامه، فایل zip دانلود شده از هاست cPanel را در Local از حالت فشرده خارج کرده و فایل‌های استخراج شده را با دسترسی FTP، درون دیسک، آپلود کنید.

۳. انتقال دیتابیس

برای انتقال دیتابیس از cPanel باید در ابتدا از اطلاعات دیتابیس خود با استفاده از phpMyAdmin یک Export بگیرید. سپس باید وارد دیتابیس خود در لیارا شده و در بخش **نحوه‌ی اتصال**، phpMyAdmin را برای دسترسی آسان به دیتابیس راه‌اندازی کنید.  
درنهایت برای Import کردن داده‌های دیتابیس قبلی برنامه‌ی خود به دیتابیس فعلی بایستی با استفاده از phpMyAdmin به دیتابیس فعلی متصل شده و فایل `sql.` را در دیتابیس وردپرس Import کنید.

> برای بازیابی فایل‌های پشتیبان با حجم بالا، توصیه می‌شود که از ابزار [`MySQL CLI`](https://docs.liara.ir/dbaas/mysql/how-tos/connect-via-cli/mysql) استفاده کنید.  
> همچنین بخوانید: [بازیابی فایل پشتیبان در دیتابیس MySQL/MariaDB](https://docs.liara.ir/dbaas/mysql/how-tos/restore-backup)

۴. اتصال دامنه و تهیه گواهی SSL

طبق مستندات [اضافه کردن دامنه به برنامه](https://docs.liara.ir/paas/domains/add-domain)، دامنه مدنظرتان را به برنامه وردپرس خود متصل کرده  
و طبق مستندات [تهیه گواهی SSL](https://docs.liara.ir/paas/domains/enable-ssl)، یک گواهی SSL برای دامنه‌تان تهیه کنید.

۵. به‌روزرسانی فایل `wp-config.php`

با دسترسی ftp ایجاد شده، مجدداً به دیسک `data` متصل شوید؛ فایل `wp-config.php` با یک code editor (مانند Notepad)، باز کرده و  
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
> برای اتصال به دیتابیس، حتماً از اطلاعات شبکه خصوصی، استفاده کنید.

با انجام مراحل فوق، برنامه WordPress شما به صورت کامل، منتقل می‌شود و شما می‌توانید از آن استفاده کنید.

> درصورتی که دامنه‌ی قبلی خود را به برنامه وردپرس متصل نکرده باشید باید در جدول `wp_options` فیلد‌های `siteUrl` و `homeUrl` آدرس فعلی برنامه را وارد کرده و درنهایت برنامه را ری‌استارت کنید.

ممکن است در اجرای برنامه وردپرس خود، با یک‌سری مشکل مواجه شوید که برای رفع آن، می‌توانید به صفحه [رفع خطاهای رایج](https://docs.liara.ir/one-click-apps/wordpress/fix-common-errors/about)، مراجعه کنید.

## all links

[All links of docs](https://docs.liara.ir/all-links-llms.txt)
