Original link: https://docs.liara.ir/paas/nodejs/related-apps/strapi/strapi-mongodb/

# استقرار برنامه‌های Strapi با MongoDB در لیارا

[Video link](https://media.liara.ir/strapi/strapi-mongodb.mp4)

> پروژه و کدهای مورد استفاده در ویدیوی فوق در [اینجا](https://github.com/liara-cloud/strapi-getting-started/tree/mongodb-conf) قابل مشاهده و دسترسی هستند.
پس از ایجاد برنامه NodeJS، کافیست تا در لوکال در مسیر `config/database.js` قطعه کدی مانند قطعه کد زیر را قرار دهید:

```js
module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'mongoose',
      settings: {
        host: env('DATABASE_HOST', 'localhost'),
        srv: env.bool('DATABASE_SRV', false),
        port: env.int('DATABASE_PORT', 27017),
        database: env('DATABASE_NAME', 'strapi'),
        username: env('DATABASE_USERNAME', 'root'),
        password: env('DATABASE_PASSWORD', ''),
      },
      options: {
        authenticationDatabase: env('AUTHENTICATION_DATABASE', null),
        ssl: env.bool('DATABASE_SSL', false),
      },
    },
  },
});
```

در ادامه، باید متغیرهای محیطی مربوط به دیتابیس برنامه Strapi خود را طبق [مستندات اضافه کردن متغیرهای محیطی](https://docs.liara.ir/paas/details/envs) به برنامه NodeJS اضافه کنید. به عنوان مثال:

```bash
DATABASE_HOST=mongodb
DATABASE_PORT=27017
DATABASE_NAME=strapi
DATABASE_USERNAME=root
DATABASE_PASSWORD=YDwHkbMjooP62S5Q5msD563s
```

و از آنجایی که [فایل سیستم لیارا](https://docs.liara.ir/paas/details/file-system) به صورت پیش‌فرض ReadOnly است؛ پس بایستی برای ذخیره media، طبق مستندات [دیسک‌ها](https://docs.liara.ir/paas/disks/create)، یک دیسک ایجاد و آن‌ را به آدرس‌ `app/public/uploads/` متصل کنید.

## Liara Console

- در نهایت کافیست تا برنامه خود را با کنسول و پورت 3000، در لیارا آپلود کنید و عملیات استقرار را انجام دهید تا برنامه با موفقیت در لیارا مستقر شود.

## Liara CLI

- در نهایت کافیست تا دستور زیر را اجرا کنید تا برنامه شما در لیارا مستقر شود:

```bash
liara deploy --port=3000 --platform=node
```

## all links

[All links of docs](https://docs.liara.ir/all-links-llms.txt)
