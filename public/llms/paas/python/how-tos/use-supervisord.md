Original link: https://docs.liara.ir/paas/python/how-tos/use-supervisord/

# استفاده از Supervisord در برنامه‌های Python

[supervisord](http://supervisord.org/) یک ابزار مدیریتی است که برای اجرا و کنترل فرآیندهای پس‌زمینه (background processes) طراحی شده است. این ابزار می‌تواند برای مدیریت سرویس‌های مختلف در یک محیط واقعی، مورد استفاده قرار گیرد.

شما می‌توانید در مسیر اصلی پروژه، یک فایل به نام `supervisor.conf` ایجاد کنید و درون این فایل، Workerهای خود را برای اجرای background jobها، تعریف کنید.  
به عنوان مثال:

```conf
[supervisord]
logfile=/tmp/supervisord.log   ; مسیر فایل لاگ
pidfile=/tmp/supervisord.pid   ; مسیر فایل پی‌آیدی

[program:my_script]
command=python /path/to/my_script.py   ; دستوری که باید اجرا شود
autostart=true                         ; اجرای خودکار پس از استارت
autorestart=true                       ; ری‌استارت خودکار در صورت کرش
stderr_logfile=/tmp/my_script_err.log  ; مسیر لاگ ارورها
stdout_logfile=/tmp/my_script_out.log  ; مسیر لاگ خروجی‌ها
```

پس از انجام کار فوق، کافیست برای اعمال تغییرات، برنامه‌تان را مجدداً در لیارا، مستقر کنید. پس از استقرار،  
Supervisor اجرا شده و دستور شما را در Background اجرا خواهد کرد.

## all links

[All links of docs](https://docs.liara.ir/all-links-llms.txt)
