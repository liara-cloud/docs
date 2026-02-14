Original link: https://docs.liara.ir/paas/nodejs/related-apps/adonisjs/

# استقرار برنامه‌های AdonisJS در لیارا

[AdonisJS](https://docs.adonisjs.com/guides/preface/introduction) یک فریم‌ورک وب برای زبان جاوااسکریپت است که با هدف ساخت و توسعه برنامه‌های تحت وب سمت سرور (Backend) طراحی شده است.  
<div className='h-2' />
شما می‌توانید پروژه‌های AdonisJS خود را با [ایجاد برنامه‌های NodeJS](../../how-tos/create-app) بر روی لیارا مستقر کنید.  
در نظر داشته باشید که قبل از انجام عملیات استقرار، بایستی طبق [مستندات تنظیم متغیرهای محیطی](https://docs.liara.ir/paas/details/envs)؛ متغیرهای زیر را به برنامه خود، اضافه کنید:

```bash
HOST=0.0.0.0
PORT=3000
NODE_ENV=production
APP_URL=http://${HOST}:${PORT}

CACHE_VIEWS=true

APP_KEY=Mag4sXZQWkXwD1D3euQQhOrqGSU98Vfc 

# set your db info
DB_CONNECTION=pg
DB_HOST=postgres
DB_PORT=5432
DB_USER=root
DB_PASSWORD=ZEd90Qk3rFOPD8mB595U2obR
DB_DATABASE=adonis

SESSION_DRIVER=cookie
HASH_DRIVER=bcrypt
ENV_SILENT=true
```

> متغیر محیطی `APP_KEY` پس از ایجاد پروژه در Local توسط AddonisJS برای شما ساخته می‌شود؛ پس فقط کافیست تا مقدار APP_KEY برنامه خود که در فایل `env.` قرار دارد، با مقدار این متغیر در قطعه کد بالا جایگزین کنید.  
> در قطعه کد بالا، بایستی متغیرهای محیطی مربوط به دیتابیس که با عبارت `DB` شروع شده‌اند را بر اساس تنظیمات دیتابیس خود، تغییر بدهید تا برنامه به درستی، به دیتابیس متصل شود.  
> اگر که از [سرویس دیتابیس لیارا](https://docs.liara.ir/dbaas/about) استفاده می‌کنید؛ توصیه می‌شود که دیتابیس را در [شبکه خصوصی](https://docs.liara.ir/paas/details/private-network) خود برنامه بسازید و از اطلاعات شبکه خصوصی برای اتصال به آن در برنامه، استفاده کنید.  

در نظر داشته باشید که اسکریپت‌های فایل `package.json` موجود در مسیر اصلی پروژه، باید مانند قطعه کد زیر باشد:

```json
  "scripts": {
    "start": "node server.js",
    "test": "node ace test"
  },
```

## استقرار برنامه

در نهایت کافیست تا برنامه خود را با کنسول و پورت 3000، در لیارا آپلود کنید و عملیات استقرار را انجام دهید تا برنامه با موفقیت در لیارا مستقر شود.

## استقرار برنامه

در نهایت کافیست تا دستور زیر را اجرا کنید تا برنامه شما در لیارا مستقر شود:

```bash
liara deploy --port=3000 --platform=node
```

> همچنین بخوانید: [رفع خطای CORS در فریم‌ورک AdonisJS](https://docs.liara.ir/fix-common-errors/cors-error/adonisjs)

## all links

[All links of docs](https://docs.liara.ir/all-links-llms.txt)
