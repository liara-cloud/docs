Original link: https://docs.liara.ir/paas/nodejs/fix-common-errors/cors-error/fastify/

# رفع خطای CORS در فریم‌ورک Fastify

برای رفع این خطا در فریم‌ورک Fastify، در ابتدا باید ماژول‌های `cors` و `fastify-express` را با اجرای دستور زیر، نصب کنید:

```bash
npm install cors fastify-express
```

در نهایت، می‌توانید در برنامه خود، مانند قطعه کد زیر، عمل کنید:

```js
await fastify.register(require('fastify-express'))
fastify.use(require('cors')())
```

> برای کسب اطلاعات بیشتر می‌توانید [مستندات رسمی این فریم‌ورک](https://fastify.dev/docs/latest/Reference/Middleware/) را مطالعه کنید.

## all links

[All links of docs](https://docs.liara.ir/all-links-llms.txt)
