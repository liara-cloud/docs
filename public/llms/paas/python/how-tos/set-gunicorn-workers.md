Original link: https://docs.liara.ir/paas/python/how-tos/set-gunicorn-workers/

# تنظیم تعداد workerهای Gunicorn در برنامه‌های Python

در [Gunicorn](https://gunicorn.org/)، یک worker فرآیندی است که مسئول پردازش درخواست‌ها و پاسخ‌ها در یک برنامه وب است. worker می‌تواند به صورت مستقل از بقیه فرآیندها عمل کند و بار کاری بین آنها، به سادگی، تقسیم می‌شود. این کار باعث افزایش کارایی و مقیاس‌پذیری برنامه می‌شود.

برای تنظیم تعداد Workerهای Gunicorn کافیست تا طبق مستندات [تنظیم متغیرهای محیطی](https://docs.liara.ir/paas/details/envs)، یک متغیر محیطی به نام `GUNICORN_WORKERS`
با مقدار دلخواه که همان تعداد Workerها است، به برنامه اضافه کنید.

> مقدار پیش‌فرض این متغیر در برنامه‌های Python، برابر با 3 است.

## all links

[All links of docs](https://docs.liara.ir/all-links-llms.txt)
