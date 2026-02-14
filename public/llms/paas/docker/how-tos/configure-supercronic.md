Original link: https://docs.liara.ir/paas/docker/how-tos/configure-supercronic/

# پیکربندی Supercronic

[Supercronic](https://github.com/aptible/supercronic) یک جایگزین برای cron در محیط‌های Docker و Kubernetes است که برای اجرای وظایف زمانبندی شده (cron jobs) در کانتینرها طراحی شده است.
برای استفاده از Supercronic در برنامه‌های داکر در لیارا، تنها کافیست تا قطعه‌کد زیر را به `Dockerfile` پروژه‌ی خود اضافه کنید:

```dockerfile
COPY --from=liaracloud/supercronic:v0.1.11 \\
     /usr/local/bin/supercronic /usr/local/bin/supercronic
```

همچنین، بایستی فایل `crontab` را در مسیر اصلی پروژه‌ی خود ایجاد کرده و به‌شکل زیر Jobهای مورد نظر خود را اضافه کنید:

```config
* * * * * cd $ROOT && echo $(date) >> /tmp/time.txt
```

درنهایت باید یک فایل به نام `entrypoint.sh` در مسیر اصلی پروژه ایجاد کنید و به‌شکل زیر supercronic و برنامه‌تان را اجرا کنید:

```sh
#!/bin/bash

supercronic /usr/src/app/crontab &

daphne -b 0.0.0.0 -p 80 routeprinter:app
```

## all links

[All links of docs](https://docs.liara.ir/all-links-llms.txt)
