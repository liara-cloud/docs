Original link: https://docs.liara.ir/paas/django/how-tos/set-gunicorn-maxrequest/

# تنظیم max_request در Gunicorn در برنامه‌های Django

در [Gunicorn](https://gunicorn.org/)، پارامتر `max_requests` تعداد درخواست‌هایی را که هر Worker باید قبل از retirement (خاتمه کار) پردازش کند، مشخص می‌کند. پس از رسیدن یک Worker به این اندازه، به طور خودکار retired می‌شود و یک Worker جدید جایگزین آن می‌شود. 

یکی از راه‌های جلوگیری از نشت حافظه و مصرف بالای RAM در Gunicorn، تنظیم پارامتر `max_requests` است. با تنظیم این پارامتر، با رسیدن تعداد درخواست‌های هر یک از Threadهای Gunicorn به این عدد، آن Thread ری‌استارت شده و حافظه‌ی RAM آن خالی می‌شود. در صورتی که در برنا‌مه‌ی Django خود نیاز به ری‌استارت WORKER THREAD بعد از تعداد مشخصی Request دارید، می‌توانید طبق مستندات [تنظیم متغیرهای محیطی](https://docs.liara.ir/paas/details/envs)، متغیر محیطی `GUNICORN_MAX_REQUESTS` را با مقدار 1000 به برنامه Django خود، اضافه کنید.

> مقدار پیش‌فرض این متغیر در برنامه‌های Django، برابر با 10000 است.

## all links

[All links of docs](https://docs.liara.ir/all-links-llms.txt)
