Original link: https://docs.liara.ir/iaas/ubuntu/how-tos/setup-stack/lemp/

# راه اندازی استک LEMP

استک LEMP یک پیکربندی محبوب برای میزبانی وب‌سایت‌ها و اپلیکیشن‌های تحت وب است که شامل Linux (سیستم‌عامل)، Nginx (وب سرور)، MySQL (پایگاه داده) و PHP (مفسر سمت سرور) می‌شود. در این استک، Nginx جایگزین Apache در [استک LAMP](https://docs.liara.ir/iaas/ubuntu/how-tos/setup-stack/lamp) شده و به دلیل کارایی بالا، مصرف کمتر منابع و مدیریت بهتر درخواست‌ها، برای پروژه‌های مقیاس‌پذیر گزینه‌ی بهتری محسوب می‌شود.
در ادامه، نحوه راه‌اندازی استک LEMP در سرور مجازی Ubuntu به‌صورت گام‌به‌گام توضیح داده شده است:

۱. به‌روزرسانی سیستم   
قبل از نصب بسته‌های مورد نیاز، بهتر است که مخازن سیستم به‌روز شوند تا جدیدترین نسخه‌های نرم‌افزارها نصب شوند. برای به‌روزرسانی سیستم، از دستور زیر استفاده کنید:

```bash
sudo apt update
```

۲. نصب Nginx   
وب‌سرور Nginx یکی از سریع‌ترین و محبوب‌ترین وب‌سرورها برای اجرای برنامه‌های PHP است. برای نصب آن، از دستور زیر استفاده کنید:

```bash
sudo apt install nginx -y
```

پس از نصب، بررسی کنید که آیا سرویس Nginx به درستی اجرا شده است:

```bash
sudo systemctl status nginx
```

در صورتی که در خروجی دستور فوق، عبارت `active (running)` را مشاهده کردید، به این معنی است که Nginx به درستی نصب و اجرا شده است.

۳. تنظیم فایروال   
برای تنظیم فایروال، می‌توانید از UFW (Uncomplicated Firewall) استفاده کنید که مستندات نصب و فعال‌سازی آن در [https://docs.liara.ir/iaas/ubuntu/how-tos/set-firewall/](https://docs.liara.ir/iaas/ubuntu/how-tos/set-firewall/) موجود است.  
برای اینکه Nginx بتواند ترافیک HTTP و HTTPS را مدیریت کند، باید قوانین مناسب را در فایروال با اجرای دستور زیر اضافه کنید:
```bash
sudo ufw allow 'Nginx HTTP'
sudo ufw enable
```

۴. نصب و ایمن‌سازی MySQL   
برای مدیریت پایگاه داده، از MySQL استفاده می‌شود. برای نصب این سرویس، دستور زیر را اجرا کنید:
```bash
sudo apt install mysql-server -y
```

پس از نصب، لازم است که پایگاه داده را ایمن‌سازی کنید. این کار را می‌توان با اجرای ابزار امنیتی MySQL انجام داد:
```bash
sudo mysql_secure_installation
```

با اجرای دستور فوق، باید به سوالات امنیتی پاسخ دهید.

۵. ایجاد دیتابیس و کاربر MySQL   
پس از نصب MySQL، نیاز به ایجاد یک دیتابیس و یک کاربر جدید برای مدیریت آن دارید. برای این کار، در ابتدا وارد محیط MySQL شوید:
```bash
sudo mysql
```

سپس دستورات زیر را اجرا کنید:
```bash
CREATE DATABASE lemp_db;
CREATE USER 'lemp_user'@'localhost' IDENTIFIED BY 'StrongPassword';
GRANT ALL PRIVILEGES ON lemp_db.* TO 'lemp_user'@'localhost';
FLUSH PRIVILEGES;
EXIT;
```

می‌توانید دستورات فوق و اسامی مذکور را با توجه به نیازهای خود تغییر دهید.

۶. نصب PHP   
برای اجرای اسکریپت‌های PHP در وب‌سرور Nginx، باید PHP و افزونه MySQL را نصب کنید:
```bash
sudo apt install php-fpm php-mysql -y
```

پس از نصب، می‌توان نسخه PHP را بررسی کرد:
```bash
php -v
```

۷. تنظیمات Nginx برای PHP   
برای اجرای PHP از طریق Nginx، باید یک فایل پیکربندی جدید ایجاد کنید. این فایل مشخص می‌کند که چگونه درخواست‌های PHP پردازش شوند. برای این کار، فایل زیر را ایجاد می‌کنید:
```bash
sudo nano /etc/nginx/sites-available/lemp
```

سپس قطعه کد زیر را در این فایل قرار دهید:  

```bash
server {
    listen 80;
    server_name YOUR-IP-ADDRESS;
    root /var/www/lemp;
    index index.php index.html;

    location / {
        try_files $uri $uri/ =404;
    }

    location ~ \.php$ {
        include snippets/fastcgi-php.conf;
        fastcgi_pass unix:/run/php/php-fpm.sock;
        fastcgi_param SCRIPT_FILENAME $document_root$fastcgi_script_name;
        include fastcgi_params;
    }
}
```

در قطعه کد فوق، به جای `YOUR-IP-ADDRESS` باید آدرس IP سرور خود را وارد کنید.
برای فعال‌سازی سایت، از دستور زیر استفاده کنید:

```bash
sudo ln -s /etc/nginx/sites-available/lemp /etc/nginx/sites-enabled/
```

سپس پیکربندی Nginx را تست کرده و سرویس را مجدداً راه‌اندازی کنید:

```bash
sudo nginx -t
sudo systemctl reload nginx
```

۸. تست PHP   
برای بررسی عملکرد صحیح PHP، یک فایل تستی ایجاد کنید:
```bash
sudo mkdir -p /var/www/lemp
sudo nano /var/www/lemp/index.php
```

سپس کد زیر را در این فایل قرار دهید:

```php
<?php
phpinfo();
?>
```

سپس مرورگر را باز کرده و به آدرس `http://YOUR-IP-ADDRESS/index.php` بروید تا صحت عملکرد PHP را بررسی کنید.
بدیهی است که باید به جای `YOUR-IP-ADDRESS` باید آدرس IP سرور خود را وارد کنید.

۹. اتصال دامنه به سرور و فعال‌سازی SSL   
برای اتصال دامنه به سرور و فعال‌سازی SSL، می‌توانید از [https://docs.liara.ir/iaas/ubuntu/how-tos/connect-domain/](https://docs.liara.ir/iaas/ubuntu/how-tos/connect-domain/) استفاده کنید.

با اجرای قدم به قدم گام‌های فوق، انتظار می‌رود که استک LEMP به‌درستی بر روی سرور مجازی شما نصب و پیکربندی شده باشد.

## all links

[All links of docs](https://docs.liara.ir/all-links-llms.txt)
