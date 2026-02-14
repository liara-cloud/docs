Original link: https://docs.liara.ir/paas/nodejs/related-apps/hono/

# استقرار برنامه‌های Hono در لیارا

[Hono](https://hono.dev/)  
یک فریم‌ورک وب کوچک، ساده و بسیار سریع است که بر روی هر runtime جاوااسکریپتی، کار می‌کند. از دلایل  
محبوبیت این فریم‌ورک، می‌توان به سرعت خارق‌العاده و بهینه بودن بی‌نظیر آن، اشاره کرد.  

&nbsp;

شما می‌توانید برنامه‌های Hono خود را با [ایجاد برنامه‌های NodeJS](../../how-tos/create-app) در لیارا، مستقر کنید.  
برای استقرار برنامه‌های Hono باید اسکریپت `start` را در فایل `package.json` به شکل زیر، تعریف کنید:

```json
{
    "scripts": {
    "start": "tsx src/index.ts",
    "dev": "tsx watch src/index.ts"
  },
}
```

همچنین؛ در نظر داشته باشید که برای اجرای برنامه، حتماً از ماژول `node-server`، استفاده کنید؛ به عنوان مثال:

```js
// src/index.ts
import { serve } from '@hono/node-server'
import { Hono } from 'hono'

const app = new Hono()
app.get('/', (c) => c.text('Hello Node.js!'))

serve(app)
```

## استقرار برنامه

- در نهایت کافیست تا برنامه خود را با کنسول و پورت 3000، در لیارا آپلود کنید و عملیات استقرار را انجام دهید تا برنامه با موفقیت در لیارا مستقر شود. البته اگر که برنامه‌تان در پورت دیگری به جز 3000 به درخواست کاربران listen می‌کند، باید مقدار آن را در فیلد پورت، وارد کنید.

## استقرار برنامه

- در نهایت کافیست تا دستور زیر را اجرا کنید تا برنامه شما در لیارا مستقر شود (البته اگر که برنامه‌تان در پورت دیگری به جز 3000 به درخواست کاربران listen می‌کند، باید در دستور زیر، مقدار آن را وارد کنید):

```bash
liara deploy --port=3000 --platform=node
```

> یک پروژه Hono آماده به استقرار در [اینجا](https://github.com/liara-cloud/hono-getting-started) وجود دارد که می‌توانید از آن، استفاده کنید.

## all links

[All links of docs](https://docs.liara.ir/all-links-llms.txt)
