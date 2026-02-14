Original link: https://docs.liara.ir/paas/nodejs/fix-common-errors/cors-error/adonisjs/

# رفع خطای CORS در فریم‌ورک AdonisJS

برای رفع این خطا در فریم‌ورک AdonisJS، کافیست تا وارد فایل `config/cors.js` یا `config/cors.ts` شوید و مقادیر `origin` و `methods` را در این فایل، مانند شکل زیر تنظیم کنید:

```bash
'use strict'

module.exports = {
  origin: '*',
  methods: ['GET', 'PUT', 'PATCH', 'POST', 'DELETE', 'HEAD'],
  headers: true,
  exposeHeaders: false,
  credentials: false,
  maxAge: 90
}
```

> برای کسب اطلاعات بیشتر می‌توانید [مستندات رسمی این فریم‌ورک](https://docs.adonisjs.com/guides/security/cors) را مطالعه کنید.

## all links

[All links of docs](https://docs.liara.ir/all-links-llms.txt)
