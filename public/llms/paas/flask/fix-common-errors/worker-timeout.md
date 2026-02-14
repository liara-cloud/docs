Original link: https://docs.liara.ir/paas/flask/fix-common-errors/worker-timeout/

# رفع خطای WORKER TIMEOUT در برنامه‌های Flask

خطای `WORKER TIMEOUT` در Gunicorn نشان می‌دهد که یک یا چند worker پس از گذشتن از زمان مجاز تعیین‌شده برای پردازش درخواست‌ها، پاسخی ارسال نکرده‌اند و در نتیجه توسط Gunicorn متوقف و دوباره راه‌اندازی شده‌اند. این مشکل معمولاً زمانی رخ می‌دهد که پردازش یک درخواست بیش از حد طولانی شود.  
برای رفع این خطا و در صورتی که به WORKER TIMEOUT بیشتر از 30 ثانیه نیاز دارید، می‌توانید طبق مستندات [تنظیم متغیرهای محیطی](https://docs.liara.ir/paas/details/envs)، متغیر محیطی `GUNICORN_TIMEOUT` را با مقدار مورد نظرتان (به ثانیه)، به برنامه، اضافه کنید:

![set gunicorn timeout env](https://media.liara.ir/old/django/add-gunicorn-timeout-variable-to-django-app.gif)

## all links

[All links of docs](https://docs.liara.ir/all-links-llms.txt)
