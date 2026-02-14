Original link: https://docs.liara.ir/iaas/debian/how-tos/connect-domain/

# اتصال دامنه به سرور مجازی ابری به همراه تهیه گواهی SSL

برای اتصال دامنه مدنظرتان به سرور مجازی ابری خود و تهیه گواهی SSL، بسته به نوع وب‌سرور خود (Apache یا Nginx) کافیست تا گام‌های زیر را به ترتیب، طی کنید. 

> در صورتی که با کاربر `root` به سرور دبیان متصل شده‌اید، نیازی نیست که از عبارت `sudo` قبل از دستورات استفاده کنید.

## NginX

۱. اضافه کردن رکورد `A` در سامانه مدیریت دامنه   
در ابتدا، بایستی دامنه خود را در یک سامانه مدیریت دامنه، مانند [Cloudflare](https://liara.ir/products/dns) یا [لیارا](https://docs.liara.ir)‌، ثبت کنید. سپس، 
یک رکورد از نوع `A` با نام `@` یا زیر دامنه‌ای از دامنه‌تان و مقدار IP سرور مجازی ابری‌تان که در بخش **اتصال** سرور مجازی ابری در کنسول لیارا، قرار گرفته است؛ به آن، اضافه کنید.

[Video link](https://media.liara.ir/vps/add-cloud-server-ip-as-a-record-on-liara-dns-management-system.mp4)

۲. نصب وب‌سرور NginX   
پس از [اتصال به سرور مجازی ابری خود با استفاده از SSH](https://docs.liara.ir/iaas/Debian/how-tos/connect-to-server-using-ssh)، کافیست تا با اجرای دستور زیر، NginX را بر روی سرور خود، نصب کنید:

```bash
sudo apt update && sudo apt install -y nginx
```

۳. پیکربندی یک Virtual Host جدید   
با اجرای دستور زیر، یک فایل پیکربندی جدید ایجاد کنید (به جای `example.com`، نام دامنه خود را وارد کنید):

```bash
sudo nano /etc/nginx/sites-available/example.com
```

در ادامه، قطعه کد زیر را به فایل فوق، اضافه کنید (به جای `example.com`، نام دامنه خود را وارد کنید):

```config
server {
    listen 80;
    server_name example.com ;

    root /var/www/example.com;
    index index.html index.htm index.php;

    location / {
        try_files $uri $uri/ =404;
    }
}
```

سپس، برای ذخیره فایل و خروج از nano، دکمه‌های ترکیبی `CTRL + X` را فشرده و سپس `Y` را انتخاب کنید و در نهایت `Enter` را بزنید.  
در ادامه، یک دایرکتوری وب، ایجاد کنید (به جای `example.com`، نام دامنه خود را وارد کنید):

```bash
sudo mkdir -p /var/www/example.com
```

و یک فایل تست، به آن، اضافه کنید (به جای `example.com`، نام دامنه خود را وارد کنید):

```bash
echo '<h1>It works on Nginx!</h1>' | sudo tee /var/www/example.com/index.html
```

در ادامه، دسترسی‌های لازم را به فایل ایجاد شده، اعطا کنید (به جای `example.com`، نام دامنه خود را وارد کنید):

```bash
sudo chown -R www-data:www-data /var/www/example.com
```

پیکربندی ایجاد شده را، فعال کنید (به جای `example.com`، نام دامنه خود را وارد کنید):

```bash
sudo ln -s /etc/nginx/sites-available/example.com /etc/nginx/sites-enabled/
```

در نهایت، Nginx را، ری‌استارت کنید:

```bash
sudo systemctl restart nginx
```

۴. نصب گواهی SSL (با Let's Encrypt)   
با اجرای دستور زیر، پکیج `Certbot` را نصب کنید:

```bash
sudo apt install -y certbot python3-certbot-nginx
```

در ادامه، دستور زیر را اجرا کنید تا Certbot یک گواهی SSL تهیه کند و `HTTP` را به `HTTPS`، ری‌دایرکت کند (به جای `example.com`، نام دامنه خود را وارد کنید):

```bash
sudo certbot --nginx -d example.com
```

۵. تنظیم تمدید خودکار SSL   
با اجرای دستور زیر، تمدید خودکار گواهی SSL را برای دامنه خود، تنظیم کنید:

```bash
sudo certbot renew --dry-run
```

۶. بررسی پیکربندی   
تمامی کارها، انجام شده است و اکنون، کافیست تا وب‌سرور خود را، ری‌استارت کنید:

```bash
sudo systemctl restart nginx
```

اکنون، می‌توانید در مرورگر، دامنه‌تان را وارد کنید تا به صفحه تستی که ساختید، هدایت شوید (به جای `example.com`، نام دامنه خود را وارد کنید):   

```js
https://example.com
```

در صورتی که صفحه سایت، با موفقیت، برایتان بالا آمد؛ بدین معناست که تمامی کارها  
را به درستی انجام داده‌اید و دامنه شما به سرور مجازی ابری‌تان، متصل شده است.

## Apache

۱. اضافه کردن رکورد `A` در سامانه مدیریت دامنه   
در ابتدا، بایستی دامنه خود را در یک سامانه مدیریت دامنه، مانند [Cloudflare](https://liara.ir/products/dns) یا [لیارا](https://docs.liara.ir)، ثبت کنید. سپس، 
یک رکورد از نوع `A` با نام `@` یا زیر دامنه‌ای از دامنه‌تان و مقدار IP سرور مجازی ابری‌تان که در بخش **اتصال** سرور مجازی ابری در کنسول لیارا، قرار گرفته است؛ به آن، اضافه کنید.

[Video link](https://media.liara.ir/vps/add-cloud-server-ip-as-a-record-on-liara-dns-management-system.mp4)

۲. نصب وب‌سرور Apache   
پس از [اتصال به سرور مجازی ابری خود با استفاده از SSH](https://docs.liara.ir/iaas/Debian/how-tos/connect-to-server-using-ssh)، کافیست تا با اجرای دستور زیر، Apache را بر روی سرور خود، نصب کنید:

```bash
sudo apt update && sudo apt install -y apache2
```

۳. پیکربندی یک Virtual Host جدید   
با اجرای دستور زیر، یک فایل پیکربندی جدید ایجاد کنید (به جای `example.com`، نام دامنه خود را وارد کنید):

```bash
sudo nano /etc/apache2/sites-available/example.com.conf
```

در ادامه، قطعه کد زیر را به فایل فوق، اضافه کنید (به جای `example.com`، نام دامنه خود را وارد کنید):

```config
<VirtualHost *:80>
    ServerName example.com

    DocumentRoot /var/www/example.com

    <Directory /var/www/example.com>
        AllowOverride All
        Require all granted
    </Directory>

    ErrorLog ${APACHE_LOG_DIR}/error.log
    CustomLog ${APACHE_LOG_DIR}/access.log combined
</VirtualHost>
```

سپس، برای ذخیره فایل و خروج از nano، دکمه‌های ترکیبی `CTRL + X` را فشرده و سپس `Y` را انتخاب کنید و در نهایت `Enter` را بزنید.  
در ادامه، یک دایرکتوری وب، ایجاد کنید (به جای `example.com`، نام دامنه خود را وارد کنید):

```bash
sudo mkdir -p /var/www/example.com
```

و یک فایل تست، به آن، اضافه کنید (به جای `example.com`، نام دامنه خود را وارد کنید):

```bash
echo '<h1>It works on Apache!</h1>' | sudo tee /var/www/example.com/index.html
```

در ادامه، دسترسی‌های لازم را به فایل ایجاد شده، اعطا کنید (به جای `example.com`، نام دامنه خود را وارد کنید):

```bash
sudo chown -R www-data:www-data /var/www/example.com
```

پیکربندی ایجاد شده را، فعال کنید (به جای `example.com`، نام دامنه خود را وارد کنید):

```bash
sudo a2ensite example.com.conf
```

در نهایت، Apache را، ری‌استارت کنید:

```bash
sudo systemctl restart apache2
```

۴. نصب گواهی SSL (با Let's Encrypt)   
با اجرای دستور زیر، پکیج `Certbot` را نصب کنید:

```bash
sudo apt install -y certbot python3-certbot-apache
```

در ادامه، دستور زیر را اجرا کنید تا Certbot یک گواهی SSL تهیه کند و `HTTP` را به `HTTPS`، ری‌دایرکت کند (به جای `example.com`، نام دامنه خود را وارد کنید):

```bash
sudo certbot --apache -d example.com
```

۵. تنظیم تمدید خودکار SSL   
با اجرای دستور زیر، تمدید خودکار گواهی SSL را برای دامنه خود، تنظیم کنید:

```bash
sudo certbot renew --dry-run
```

۶. بررسی پیکربندی   
تمامی کارها، انجام شده است و اکنون، کافیست تا وب‌سرور خود را، ری‌استارت کنید:

```bash
sudo systemctl restart apache2
```

اکنون، می‌توانید در مرورگر، دامنه‌تان را وارد کنید تا به صفحه تستی که ساختید، هدایت شوید (به جای `example.com`، نام دامنه خود را وارد کنید):   

```js
https://example.com
```

در صورتی که صفحه سایت، با موفقیت، برایتان بالا آمد؛ بدین معناست که تمامی کارها  
را به درستی انجام داده‌اید و دامنه شما به سرور مجازی ابری‌تان، متصل شده است.

## all links

[All links of docs](https://docs.liara.ir/all-links-llms.txt)
