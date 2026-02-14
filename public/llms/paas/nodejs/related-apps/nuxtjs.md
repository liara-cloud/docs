Original link: https://docs.liara.ir/paas/nodejs/related-apps/nuxtjs/

# استقرار برنامه‌های NuxtJS در لیارا

فریم‌ورک NuxtJS یک فریم‌ورک مبتنی بر Vue است که بسیاری از قابلیت‌ها مانند SSR را برای شما به ارمغان می‌آورد. شما می‌توانید برنامه‌های NuxtJS خود را با [ایجاد برنامه‌های NodeJS](../../how-tos/create-app) بر روی لیارا استقرار کنید.

توجه داشته باشید که برای استقرار برنامه‌های **Nuxt 2** نیازی به ایجاد تغییر در فایل `package.json`نیست و لیارا به‌طور کامل از این فریم‌ورک پشتیبانی می‌کند بنابراین تغییری در بخش `scripts` ایجاد نکنید؛ در ادامه، یک مثال از این بخش آورده شده است:

```json
"scripts": {
    "dev": "nuxt",
    "build": "nuxt build",
    "start": "nuxt start"
},
```

ولی برای استقرار برنامه‌های **Nuxt 3** باید در بخش `scripts` فایل `package.json` مقدار `start` را به شکل زیر تغییر دهید:

```json
"scripts": {
    "start": "node .output/server/index.mjs"
},
```

> در نظر داشته باشید که حتماً بعد از ساخت برنامه NodeJS و قبل از استقرار برنامه‌تان، فایل‌سیستم برنامه را طبق [مستندات مربوطه](https://docs.liara.ir/paas/details/file-system/#how-to-make-fs-writable)، از Read-Only به Writable تغییر دهید.

## استقرار برنامه

### Liara Console

[Video link](https://media.liara.ir/nuxtjs/nuxtjs-desktop.mp4)

در نهایت کافیست تا برنامه خود را با کنسول و پورت 3000، در لیارا آپلود کنید و عملیات استقرار را انجام دهید تا برنامه با موفقیت در لیارا مستقر شود.

### Liara CLI

[Video link](https://media.liara.ir/nuxtjs/nuxtjs-cli.mp4)

در نهایت کافیست تا دستور زیر را اجرا کنید تا برنامه شما در لیارا مستقر شود:

```bash
liara deploy --port=3000 --platform=node
```

## تنظیم متغیرها در برنامه NuxtJS

یکی از بهترین روش‌ها برای تنظیم پویای متغیرهای محیطی بدون نیاز به اجرای مجدد دستور `npm run build`، استفاده از روش زیر است: 

۱. فرض کنید که قصد دارید از یک متغیر به نام `API_BASE` به‌صورت public (در دسترس در فرانت‌اند) و از یک متغیر به نام `API_SECRET` به صورت private (در دسترس فقط برای بک‌اند)، استفاده کنید. بنابراین در ابتدا، باید 
در فایل `nuxt.config` خود، قطعه کد زیر را قرار دهید: 

```bash
export default defineNuxtConfig({
          runtimeConfig: {
            apiSecret: '',
            public: {
              apiBase: '', 
            }
          },
        })
```

به شکل فوق، متغیرهای محیطی در برنامه شناخته می‌شوند. 

۲. در ادامه، باید متغیرهای `NUXT_PUBLIC_API_BASE` و `NUXT_API_SECRET` را به همراه مقادیرشان، طبق [مستندات تنظیم متغیر محیطی](https://docs.liara.ir/paas/details/envs/#add-envs)، به برنامه خود در لیارا، اضافه کنید. 

در NuxtJS، باید قوانین زیر را برای متغیرهای public رعایت کنید:

- متغیرها باید با عبارت `NUXT_PUBLIC` شروع شوند
- تمامی حروف متغیرها، UPPERCASE (حروف انگلیسی بزرگ) باشند
- در صورتی که متغیر چندکلمه‌ای است، به جای ساختار camelCase، قبل از شروع هر کلمه جدید، علامت `_` گذاشته شود

مثال: 

```bash
apiBase --> NUXT_PUBLIC_API_BASE
myOwnVar --> NUXT_PUBLIC_MY_OWN_VAR
some --> NUXT_PUBLIC_SOME
```

همچنین، باید قوانین زیر را برای متغیرهای private رعایت کنید:


- متغیرها باید با عبارت `NUXT` شروع شوند
- تمامی حروف متغیرها، UPPERCASE (حروف انگلیسی بزرگ) باشند
- در صورتی که متغیر چندکلمه‌ای است، به جای ساختار camelCase، قبل از شروع هر کلمه جدید، علامت `_` گذاشته شود

مثال: 

```bash
apiBase --> NUXT_API_BASE
myOwnVar --> NUXT_MY_OWN_VAR
some --> NUXT_SOME
```

بعد از انجام کارهای فوق، می‌توانید از متغیر محیطی در برنامه خود استفاده کنید
و در صورت نیاز، تنها کافیست تا متغیر محیطی را تغییر دهید و دیگر نیازی به build مجدد برنامه، نخواهد بود. 

[Video link](https://media.liara.ir/nuxtjs/set-envs.mp4)

> همچنین بخوانید: [استفاده از قابلیت Static Site Generation در برنامه‌های NuxtJS](https://docs.liara.ir/paas/static/related-apps/nuxtjs)
> همچنین بخوانید: [رفع خطای CORS در فریم‌ورک NuxtJS](https://docs.liara.ir/fix-common-errors/cors-error/nuxtjs)

## all links

[All links of docs](https://docs.liara.ir/all-links-llms.txt)
