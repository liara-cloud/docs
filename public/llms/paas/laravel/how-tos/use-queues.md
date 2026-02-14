Original link: https://docs.liara.ir/paas/laravel/how-tos/use-queues/

# کار با Queueها در Laravel 

Queue یا صف، یکی از قابلیت‌های فریم‌ورک لاراول است که به شما 
اجازه می‌دهد تا وظایف سنگین یا زمان‌بر را به جای اجرای همزمان با درخواست‌های کاربر،
در پس‌زمینه، انجام دهید. این قابلیت می‌تواند در بهبود عملکرد و کاهش زمان پاسخ‌دهی، نقش شایانی داشته باشد.
شما می‌توانید با استفاده از ابزارهای مدیریت فرایند، از قابلیت صف‌ها استفاده کنید. یکی از این ابزارها، [Supervisor](https://laravel.com/docs/11.x/queues#supervisor-configuration) است که لیارا از آن پشتیبانی می‌کند.

برای ‌به‌کار‌گیری صف‌ها با استفاده از Supervisor، کافیست تا در مسیر اصلی پروژه، یک فایل به نام `supervisor.conf` ایجاد کنید. اکنون شما می‌توانید تنظیمات صف‌های مختلف را در این فایل قرار بدهید. قطعه کد زیر، یک نمونه config ساده برای یک صف به نام sms است که وظیفه آن، ارسال پیامک به کاربران است:

```config
[program:laravel-worker]
process_name=%(program_name)s_%(process_num)02d
command=php /var/www/html/artisan queue:work
autostart=true
autorestart=true
stopasgroup=true
killasgroup=true
numprocs=1
user=www-data
redirect_stderr=true
stdout_logfile=/tmp/laravel-worker.log
```

پس از تنظیم فایل `supervisor.conf` کافیست تا برنامه خود را مجدداً در لیارا، مستقر کنید. با این کار، صف‌های تعریف شده، شروع به کار می‌کنند.

## مشاهده وضعیت صف‌ها در برنامه
برای مشاهده وضعیت صف‌های تعریف شده در supervisor، کافیست تا در [خط فرمان برنامه](https://docs.liara.ir/paas/details/console-shell) دستور زیر را وارد کنید:

```bash
supervisorctl status
```

> Supervisor سعی می‌کند تا صف‌های شما را همیشه در حال اجرا نگه دارد. اگر به هر دلیلی، صف‌های تعریف شده، به خطا بخورند و خاموش شوند، Supervisor آن‌ها را دوباره ایجاد و فعال می‌کند. پس نیازی نیست که اقدام خاصی را انجام بدهید.

## all links

[All links of docs](https://docs.liara.ir/all-links-llms.txt)
