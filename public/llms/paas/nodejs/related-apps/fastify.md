Original link: https://docs.liara.ir/paas/nodejs/related-apps/fastify/

# استقرار برنامه‌های Fastify در لیارا

نرم‌افزار Fastify یک فریم‌ورک برای NodeJS است که با هدف ارائه‌ی کارایی بالا و سادگی در استفاده طراحی شده است. این فریم‌ورک  برای ساختن APIهای سریع و سبک مورد استفاده قرار می‌گیرد. شما می‌توانید برنامه‌های Fastify خود را با [ایجاد برنامه‌های NodeJS](../../how-tos/create-app) در لیارا، مستقر کنید.

برای استقرار برنامه‌های Fastify باید اسکریپت `start` را در فایل `package.json` مشخص کنید؛ به عنوان مثال: 

```bash
{
  "scripts": {"start": "node server.js"}
}
```

در ادامه، در فایل اصلی برنامه خود، باید حتماً فیلد `host` را با مقدار `'0.0.0.0'` مشخص کنید؛ به عنوان مثال:

```js
const start = async () => {
  try {
    await fastify.listen({ port: 3000, host: '0.0.0.0' });
    fastify.log.info(`Server listening on ${fastify.server.address().port}`);
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};
start();
```

در ادامه، مقدار داده شده را باید در متغیری به نام `SESSION_SECRET_KEY` بریزید و طبق [مستندات تنظیم متغیرهای محیطی](https://docs.liara.ir/paas/details/envs) آن را به برنامه خود اضافه کنید.

به صورت کلی، کافیست تا متغیرهای محیطی زیر به برنامه اضافه شوند (مقدار `SESSION_SECRET_KEY` فرضی است): 

```bash
SESSION_SECRET_KEY=3a68b914c9c446565090f8f56142924c
ENV_SILENT=true
```

## Liara Console

در نهایت کافیست تا برنامه خود را با کنسول و پورت 3000، در لیارا آپلود کنید و عملیات استقرار را انجام دهید تا برنامه با موفقیت در لیارا مستقر شود. البته اگر که برنامه‌تان در پورت دیگری به جز 3000 به درخواست کاربران listen می‌کند، باید مقدار آن را در فیلد پورت، وارد کنید.

## Liara CLI

در نهایت کافیست تا دستور زیر را اجرا کنید تا برنامه شما در لیارا مستقر شود (البته اگر که برنامه‌تان در پورت دیگری به جز 3000 به درخواست کاربران listen می‌کند، باید در دستور زیر، مقدار آن را وارد کنید):

```bash
liara deploy --port=3000 --platform=node
```

> یک پروژه Fastify آماده به استقرار در [اینجا](https://github.com/liara-cloud/fastify-getting-started) وجود دارد که می‌توانید از آن، استفاده کنید.

> همچنین بخوانید: [رفع خطای CORS در فریم‌ورک Fastify](https://docs.liara.ir/fix-common-errors/cors-error/fastify)

## all links

[All links of docs](https://docs.liara.ir/all-links-llms.txt)
