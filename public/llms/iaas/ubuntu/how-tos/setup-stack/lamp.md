Original link: https://docs.liara.ir/iaas/ubuntu/how-tos/setup-stack/lamp/

# راه اندازی استک LAMP

استک LAMP شامل Linux (سیستم‌عامل)، Apache (وب سرور)، MySQL (پایگاه داده) و PHP (مفسر سمت سرور) است. این استک یکی از محبوب‌ترین پیکربندی‌ها برای میزبانی وبسایت‌های پویا محسوب می‌شود.  
در ادامه، مراحل نصب و پیکربندی استک LAMP بر روی سرور Ubuntu برای شما توضیح داده شده است:

۱. به‌روزرسانی سیستم   
ابتدا مخازن سیستم را به‌روزرسانی کنید تا آخرین نسخه‌های نرم‌افزارها دریافت شوند:

```bash
sudo apt update
```

۲. نصب Apache   
Apache وب‌سرور اصلی در استک LAMP است. برای نصب آن از دستور زیر استفاده کنید:

```bash
sudo apt install apache2 -y
```

سپس بررسی کنید که سرویس Apache در حال اجرا باشد:

```bash
sudo systemctl status apache2
```

در صورتی که در خروجی دستور فوق، عبارت `active (running)` را مشاهده کردید، به این معنی است که Nginx به درستی نصب و اجرا شده است.

۳. تنظیم فایروال   
برای تنظیم فایروال، می‌توانید از UFW (Uncomplicated Firewall) استفاده کنید که مستندات نصب و فعال‌سازی آن در [https://docs.liara.ir/iaas/ubuntu/how-tos/set-firewall/](https://docs.liara.ir/iaas/ubuntu/how-tos/set-firewall/) موجود است.  
برای فعال کردن دسترسی به وب‌سرور از طریق HTTP و HTTPS، دستورات زیر را اجرا کنید:

```bash
sudo ufw allow in "Apache"
sudo ufw enable
```

۴. نصب و ایمن‌سازی MySQL   
برای مدیریت پایگاه داده، MySQL را نصب کنید:

```bash
sudo apt install mysql-server -y
```

سپس برای افزایش امنیت MySQL، ابزار زیر را اجرا کنید:

```bash
sudo mysql_secure_installation
```

۵. ایجاد دیتابیس و کاربر MySQL   
پس از نصب MySQL، نیاز به ایجاد یک دیتابیس و یک کاربر جدید برای مدیریت آن دارید. برای این کار، در ابتدا وارد محیط MySQL شوید:
```bash
sudo mysql
```

سپس دستورات زیر را اجرا کنید:
```bash
CREATE DATABASE lamp_db;
CREATE USER 'lamp_user'@'localhost' IDENTIFIED BY 'StrongPassword';
GRANT ALL PRIVILEGES ON lamp_db.* TO 'lamp_user'@'localhost';
FLUSH PRIVILEGES;
EXIT;
```

می‌توانید دستورات فوق و اسامی مذکور را با توجه به نیازهای خود تغییر دهید.

۶. نصب PHP   
برای اجرای اسکریپت‌های PHP در Apache، باید PHP و افزونه MySQL را نصب کنید:

```bash
sudo apt install php libapache2-mod-php php-mysql -y
```

سپس نسخه PHP نصب شده را بررسی کنید:

```bash
php -v
```

۷. تنظیم Apache برای PHP   
Apache به‌طور پیش‌فرض فایل `index.html` را در اولویت قرار می‌دهد. برای تغییر این اولویت، باید فایل پیکربندی Apache را ویرایش کنید. در ابتدا،  
فایل مورد نظر را با ویرایشگر مورد نظر خود باز کنید:

```bash
sudo nano /etc/apache2/mods-enabled/dir.conf
```

سپس، محتوای آن را پاک کنید و قطعه کد زیر را درون فایل، قرار دهید:

```conf
<IfModule mod_dir.c>
    DirectoryIndex index.php index.html index.cgi index.pl index.xhtml index.htm
</IfModule>
```

پس از ویرایش، Apache را مجدداً راه‌اندازی کنید:  

```bash
sudo systemctl restart apache2
```

۸. ساخت virtual host برای وب‌سایت   
برای میزبانی بیشتر از یک دامنه و وب‌سایت، باید virtual host ایجاد کنید. به‌منظور این کار، متناسب با نام دامنه‌تان، می‌توانید دایرکتوری زیر را ایجاد کنید (به جای `your-domain` نام دامنه یا نام دلخواه خود را وارد کنید):

```bash
sudo mkdir /var/www/your_domain
```

در ادامه، مالکیت دایرکتوری ساخته شده را با اجرای دستور زیر، به کاربر فعلی که در حال کار با آن هستید، تغییر دهید:

```bash
sudo chown -R $USER:$USER /var/www/your_domain
```

در ادامه، یک فایل پیکربندی در دایرکتوری `sites-available` ایجاد کنید:

```bash
sudo nano /etc/apache2/sites-available/your_domain.conf
```

در ادامه، قطعه کد زیر را درون فایل قرار دهید (به جای `your_domain` نام دامنه یا آدرس IP سرور خود را وارد کنید):

```conf
<VirtualHost *:80>
    ServerName your_domain
    ServerAdmin webmaster@localhost
    DocumentRoot /var/www/your_domain
    ErrorLog \${APACHE_LOG_DIR}/error.log
    CustomLog \${APACHE_LOG_DIR}/access.log combined
</VirtualHost>
```

برای فعال‌سازی virtual host، دستور زیر را اجرا کنید:  

```bash
sudo a2ensite your_domain
```

برای غیرفعال کردن صفحه پیش‌فرض Apache، دستور زیر را اجرا کنید (در صورتی که قصد ندارید از دامنه خودتان استفاده کنید و فقط قصد استفاده از IP را دارید، اجرای این دستور، ضروری است):

```bash
sudo a2dissite 000-default
```

برای بررسی اینکه فایل پیکربندی‌تان، خطای نحوی ندارد، دستور زیر را اجرا کنید:

```bash
sudo apache2ctl configtest
```

در نهایت، Apache را با اجرای دستور زیر، مجدداً راه‌اندازی کنید:

```bash
sudo systemctl reload apache2
```

۹. ساخت صفحه سایت و تست PHP   
با انجام مراحل فوق، وب‌سایت فعال است؛ اما هنوز صفحه ریشه سایت، خالی است. با اجرای دستور زیر، یک صفحه برای آن  
ایجاد کنید:

```bash
nano /var/www/your_domain/index.php
```

سپس کد زیر را درون فایل صفحه ایجاد شده، قرار دهید:

```php
<?php
phpinfo();
```

۱۰. اتصال دامنه و فعال‌سازی SSL   
برای اتصال دامنه به سرور و فعال‌سازی SSL، از [https://docs.liara.ir/iaas/ubuntu/how-tos/connect-domain/](https://docs.liara.ir/iaas/ubuntu/how-tos/connect-domain/) استفاده کنید.

با اجرای گام‌های فوق، استک LAMP به‌درستی بر روی سرور مجازی شما نصب و پیکربندی خواهد شد.

## all links

[All links of docs](https://docs.liara.ir/all-links-llms.txt)
