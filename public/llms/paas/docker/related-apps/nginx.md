Original link: https://docs.liara.ir/paas/docker/related-apps/nginx/

# تنظیم Reverse Proxy با استفاده از Nginx

[Video link](https://media.liara.ir/docker/reverse-proxy.mp4)

> فایل‌های مورد استفاده در ویدیوی فوق، در [اینجا](https://github.com/liara-cloud/docker-go-getting-started/tree/nginx) قابل دسترسی هستند.

- [Reverse proxy](https://docs.liara.ir/paas/details/reverse-proxy) سروری است که درخواست‌های مشتریان (clients) را به یک یا چند سرور پشتیبان (backend servers) ارسال می‌کند و نتایج را به مشتریان بازمی‌گرداند. این ساختار به بهبود کارایی، توازن بار، و امنیت سرورها کمک می‌کند.

- [Nginx](https://nginx.org/en/) یک وب سرور متن‌باز و چندمنظوره است که به عنوان وب سرور، پروکسی معکوس (reverse proxy)، پروکسی ایمیل و load balancer مورد استفاده قرار می‌گیرد. Nginx به دلیل کارایی بالا، توانایی مدیریت اتصالات همزمان زیاد، و مصرف کم منابع سیستم، محبوبیت زیادی پیدا کرده است. این نرم‌افزار به خصوص در محیط‌های با ترافیک بالا و برنامه‌های وب بزرگ به کار می‌رود و می‌تواند به صورت همزمان به عنوان وب سرور و پروکسی معکوس عمل کند.

شما می‌توانید برنامه‌های Nginx خود را با [ایجاد برنامه‌های Docker](../../how-tos/create-app) در لیارا، مستقر کنید.  
برای این‌کار، کافیست تا  
در Local یک دایرکتوری با نام دلخواه بسازید، وارد دایرکتوری شوید و در آن یک فایل به نام `Dockerfile` ایجاد کنید و قطعه کد زیر را در آن قرار دهید:

```dockerfile
FROM nginx

COPY nginx.conf /etc/nginx/nginx.conf
```

حال، می‌توانید در کنار `Dockerfile`، یک فایل دیگر به نام `nginx.conf` ایجاد کنید و درون این فایل، تنظیمات مربوط به reverse proxy را قرار دهید؛ به عنوان مثال:

```conf
user nginx;
worker_processes auto;

pid /tmp/nginx.pid;

events {
    worker_connections 1024;
}

http {

    client_body_temp_path /tmp/client_temp;
	proxy_temp_path /tmp/proxy_temp_path;
	fastcgi_temp_path /tmp/fastcgi_temp;
	uwsgi_temp_path /tmp/uwsgi_temp;
	scgi_temp_path /tmp/scgi_temp;

	include /etc/nginx/mime.types;
	default_type application/octet-stream;

	log_format main '$request_method $status $http_x_forwarded_for "$request_uri" "$http_referer" "$http_user_agent"';

	server_tokens off;
	sendfile on;
	keepalive_timeout 65;
	gzip on;
	access_log /dev/stdout;
	error_log stderr;

    resolver 127.0.0.11 valid=5s ipv6=off;
    resolver_timeout 10s;

    upstream main {
        zone main_zone 64k;
        server app-name:port resolve;
    }

    server {

        location / {
            proxy_pass http://main;  
            proxy_set_header Host $host;
            proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        }
    }
}
```

در قطعه کد فوق، باید به‌منظور هدایت ترافیک، شناسه و پورت برنامه‌ی مقصد خود را با مقادیر `app-name` و `port` در فایل `nginx.conf` جایگزین کنید.

در نهایت، در مسیری که `Dockerfile` قرار گرفته است، دستور زیر را اجرا کنید تا برنامه‌تان در لیارا مستقر شود:

```bash
liara deploy --platform=docker --port=80
```

> هم برنامه داکر شامل Nginx و هم برنامه هدف شما حتماً باید درون یک شبکه خصوصی، قرار داشته باشند تا در نهایت بتوانند به یکدیگر، متصل شوند.

## تنظیم مسیر tmp به‌عنوان مقصدی برای ذخیره‌ی فایل‌های موقتی

در فایل `nginx.conf` فوق  
در موارد مختلف از مسیر tmp به‌عنوان مقصدی برای ذخیره‌ی فایل‌های موقتی استفاده شده است. البته شما می‌توانید مسیر دیگری را برای این‌کار انتخاب کنید؛ چرا که فایل‌سیستم برنامه‌های داکر در لیارا، به صورت پیش‌فرض، writable است، قطعه کد زیر، نمونه‌ای از تنظیم مسیر ذخیره‌سازی، به پوشه tmp است:

```conf
client_body_temp_path /tmp/client_temp;
proxy_temp_path       /tmp/proxy_temp_path;
fastcgi_temp_path     /tmp/fastcgi_temp;
uwsgi_temp_path       /tmp/uwsgi_temp;
scgi_temp_path        /tmp/scgi_temp;
```

## تنظیم Resolver

با توجه به احتمال تغییر IP برنامه در لیارا ، تنظیم resolver در فایل `nginx.conf` این امکان را به‌وجود می‌آورد تا هر بار IP جدید برنامه دریافت شده و مشکلی در هدایت ترافیک به‌وجود نیاید.

```config
resolver 127.0.0.11 valid=5s ipv6=off;
resolver_timeout 10s;

upstream main {
    zone main_zone 64k;
    server app-name:port resolve;
}
```

در قطعه کد فوق، باید شناسه و پورت برنامه‌ی مقصد خود را با مقادیر `app-name` و `port` در فایل `nginx.conf` جایگزین کنید.

> همچنین بخوانید: [نحوه ری‌دایرکت برنامه‌های وردپرسی به زیرمسیر blog](https://docs.liara.ir/one-click-apps/wordpress/how-tos/set-reverse-proxy/)

## all links

[All links of docs](https://docs.liara.ir/all-links-llms.txt)
