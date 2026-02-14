Original link: https://docs.liara.ir/paas/docker/how-tos/deploy-docker-compose/



# استقرار Docker Compose


[Video link](https://media.liara.ir/docker/docker-compose.mp4)



Docker Compose ابزاری است که برای تعریف و اجرای برنامه‌های چند کانتینری Docker استفاده می‌شود. با استفاده از یک فایل YAML، می‌توانید سرویس‌های مختلفی که برنامه شما به آن‌ها نیاز دارد (مانند پایگاه داده، وب سرور و ...) را پیکربندی و مدیریت کنید. Docker Compose به شما امکان می‌دهد تا با یک فرمان، همه این سرویس‌ها را بسازید، اجرا کنید و مدیریت نمایید.




لیارا، به صورت مستقیم از Docker Compose پشتیبانی نمی‌کند. اما شما می‌توانید به ازای هر برنامه متفاوت، یک برنامه داکر مستقل ایجاد کنید و آن‌ها را به واسطه [متغیرهای محیطی](https://docs.liara.ir/paas/details/envs) و [شبکه‌خصوصی](https://docs.liara.ir/paas/details/private-network/)، به یکدیگر، متصل کنید.


> همچنین بخوانید: [استقرار برنامه با Liara Compose جایگزین Docker Compose](https://docs.liara.ir/one-click-apps/liara-compose/about/)




به عنوان مثال، فرض کنید که یک Docker Compose متشکل از برنامه go و دیتابیس PostgreSQL دارید. برای استقرار این برنامه، کافیست تا در ابتدا یک برنامه داکر و یک دیتابیس Postgres ایجاد کنید. در ادامه، متغیرهای محیطی دیتابیس را به برنامه داکر خود اضافه کرده و در نهایت، برنامه go داکرایز شده خود را در لیارا، مستقر کنید. در نظر داشته باشید که هم برنامه داکر و هم دیتابیس PostgreSQL بایستی برای ارتباط در شبکه خصوصی، در یک شبکه مشترک قرار گرفته باشند.




## all links

[All links of docs](https://docs.liara.ir/all-links-llms.txt)
