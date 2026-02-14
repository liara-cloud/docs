Original link: https://docs.liara.ir/paas/django/how-tos/use-supervisord/

# استفاده از Supervisord در برنامه‌های Django

[supervisord](http://supervisord.org/) یک ابزار مدیریتی است که برای اجرا و کنترل فرآیندهای پس‌زمینه (background processes) طراحی شده است. این ابزار می‌تواند برای مدیریت سرویس‌های مختلف در یک محیط واقعی، مورد استفاده قرار گیرد.

شما می‌توانید در مسیر اصلی پروژه، یک فایل به نام `supervisor.conf` ایجاد کنید و درون این فایل، Workerهای خود را برای اجرای background jobها، تعریف کنید. به عنوان مثال، برای ایجاد یک Worker در یک برنامه [celery](https://docs.liara.ir/paas/django/related-apps/celery)، می‌توانید از قطعه کد زیر استفاده کنید:

```conf
[program:celery-worker]
process_name=%(program_name)s_%(process_num)02d
command=celery -A proj worker -l INFO
autostart=true
autorestart=true
stopasgroup=true
killasgroup=true
numprocs=1
startsecs=10
stopwaitsecs=600
redirect_stderr=true
stdout_logfile=/tmp/worker.log
```

پس از انجام کار فوق، کافیست برای اعمال تغییرات، برنامه‌تان را مجدداً در لیارا، مستقر کنید. پس از استقرار،  
Supervisor اجرا شده و دستور شما را در Background اجرا خواهد کرد.

## all links

[All links of docs](https://docs.liara.ir/all-links-llms.txt)
