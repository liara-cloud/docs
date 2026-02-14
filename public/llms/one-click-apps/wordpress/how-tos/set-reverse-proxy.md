Original link: https://docs.liara.ir/one-click-apps/wordpress/how-tos/set-reverse-proxy/

# تنظیم Reverse Proxy برای WordPress

[Video link](https://media.liara.ir/wordpress/wordpress-reverse-proxy.mp4)

ممکن است که شما بخواهید برنامه‌تان را در  
دامنه اصلی‌تان (مثلاً `example.com`) ارائه  
و در زیرصفحه‌ای از آن (مثلاً `example.com/blog`)، وب‌سایت وردپرسی‌تان  
را به کاربر، نمایش دهید. برای این کار می‌توانید از reverse proxy استفاده کنید.  
پروکسی معکوس یا reverse proxy، یک سرور واسط است که درخواست‌های کلاینت‌ها را دریافت و به سرورهای دیگر در بک‌اند منتقل می‌کند.  

> همچنین بخوانید: [آشنایی با Reverse Proxy](https://docs.liara.ir/paas/details/reverse-proxy)

فرض کنید که دو برنامه دارید؛ یک برنامه وردپرسی  که blog شما است و  
برنامه دیگری که می‌خواهید در دامنه اصلی‌تان ارائه دهید (هر دو برنامه، کاملاً مستقل از هم هستند)  
برای اینکه برنامه اصلی‌تان را در دامنه اصلی ارائه دهید و وب‌سایت وردپرسی‌تان را در زیرصفحه‌ای از آن، نمایش دهید،  
کافیست تا مراحل زیر را طی کنید:  

۱. بررسی شبکه خصوصی   
هم برنامه اصلی و هم برنامه وردپرسی، باید درون  
یک [شبکه خصوصی](https://docs.liara.ir/paas/details/private-network) قرار داشته باشند.  
در غیر این‌صورت، امکان تنظیم reverse proxy برای برنامه‌های مستقر شده در لیارا وجود ندارد.

۲. ساخت سرور reverse proxy  
در شبکه خصوصی مشترک، یک [برنامه Docker](https://docs.liara.ir/paas/docker/getting-started) جدید ایجاد کنید.  
سپس، کافیست تا در لوکال، یک دایرکتوری خالی ایجاد کنید؛ درون دایرکتوری  
یک فایل به نام `Dockerfile` ایجاد کنید و قطعه کد زیر را درون آن قرار دهید:

```Dockerfile
FROM nginx:1.27.3
COPY nginx.conf /etc/nginx/nginx.conf
```

در ادامه، در کنار فایل فوق، فایل دیگری به نام `nginx.conf` ایجاد کنید و قطعه کد زیر را درون آن قرار دهید:

```config
events {}

http {
    resolver 127.0.0.11  valid=5s ipv6=off;
    resolver_timeout 10s;

    upstream wordpress {
        zone wordpress_zone 64k;
        server wordpress-app:80 resolve;
    }

    upstream main {
        zone main_zone 64k;
        server main-app:3005 resolve;
    }


    server {

        location /wp-admin {
            return 301 /blog/wp-admin/;
        }

        location /blog/ {
            proxy_pass http://wordpress/;
            proxy_set_header Host $host;
            proxy_set_header X-Real-IP $remote_addr;
            proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
            proxy_set_header X-Forwarded-Proto $scheme;
            proxy_set_header Connection "keep-alive";

            rewrite ^/blog(/.*)$ $1 break;
        }
    
        location / {
            proxy_pass http://main;  
            proxy_set_header Host $host;
            proxy_set_header X-Real-IP $remote_addr;
            proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
            proxy_set_header Connection "keep-alive";
        }
    }
}
```

در قطعه کد فوق، به جای `main-app` و `wordpress-app`، شناسه برنامه اصلی و وردپرسی خود را قرار دهید.  
از آنجایی که ارتباط از طریق شبکه خصوصی برقرار می‌شود، درخواست http است و همچنین بعد از شناسه، باید پورت‌هایی که برنامه‌ها در آن به درخواست کاربران listen می‌کنند؛ قرار گرفته باشد.  
همچنین، اگر که قصد دارید وردپرس را در زیرصفحه‌ای به جز `blog` قرار دهید. نام زیرصفحه مدنظرتان  
را جایگزین `blog` در قطعه کد فوق، کنید.

در نهایت با اجرای دستور زیر، برنامه فوق را در لیارا مستقر کنید:

```bash
liara deploy --port=80
```

۳. پیکربندی تنظیمات WordPress  
طبق مستندات [دسترسی FTP](https://docs.liara.ir/paas/disks/ftp-access)، یک دسترسی FTP برای دیسک data برنامه وردپرسی خود ایجاد کنید  
و با استفاده از آن، به دیسک متصل شده و در ابتدای فایل `wp-config.php`، پس از خط `php?>`، قطعه کد زیر را قرار دهید:    

```php
<?php // بعد از این خط
    $_SERVER['REQUEST_URI'] = str_replace("/wp-admin/", "/blog/wp-admin/",  $_SERVER['REQUEST_URI']);
    define( 'WP_SITEURL', 'https://example.com/blog' );
    define( 'WP_HOME', 'https://example.com/blog' );
    $_SERVER['HTTPS'] = 'on';
```

در قطعه کد فوق، به جای `example.com`، دامنه اصلی‌تان را قرار دهید.  
همچنین، اگر که قصد دارید وردپرس را در زیرصفحه‌ای به جز `blog` قرار دهید. نام زیرصفحه مدنظرتان  
را جایگزین `blog` در قطعه کد فوق، کنید.  
در نهایت، تنظیمات جدید را ذخیره کرده و دسترسی FTP را ببندید.

تمامی کارها انجام شده است و اکنون می‌توانید در زیر صفحه `blog`، به برنامه وردپرسی‌تان دسترسی داشته باشید؛ در حالی که  
ریشه دامنه، بر روی برنامه اصلی، تنظیم شده است.

## all links

[All links of docs](https://docs.liara.ir/all-links-llms.txt)
