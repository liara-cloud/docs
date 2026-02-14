Original link: https://docs.liara.ir/paas/nextjs/how-tos/set-cron-job/

# تنظیم Cron Job

Cron job یک وظیفه زمان‌بندی شده در سیستم‌عامل‌های Unix و Linux است که به کاربران اجازه می‌دهد تا اسکریپت‌ها یا دستورات را در فواصل زمانی منظم اجرا کنند. این ابزار به خصوص برای انجام وظایف دوره‌ای مثل پشتیبان‌گیری، ارسال ایمیل، اجرای اسکریپت‌های نگهداری سیستم، یا به‌روزرسانی اطلاعات مفید است.

برای تنظیم یک Cron Job در NextJS کافیست تا در مسیر اصلی پروژه، یک فایل به نام `liara.json` ایجاد کنید و Cron Jobهای مد نظر خود را در آرایه‌ای به نام `cron`، تنظیم و پیکربندی کنید.  
به عنوان مثال،  
فرض کنید که یک API به نام test با محتوای زیر دارید:  

## Pages Router

```js
// pages/api/test.js

export default function handler(req, res) {
  console.log('this is a test');
  res.status(200).json({ message: 'API executed successfully' });
}
```

## App Router

```js
// app/api/test/route.js

export async function GET(request) {
  console.log('this is a test');
  return new Response(JSON.stringify({ message: 'API executed successfully' }), {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
    },
  });
}
```

و یا اگر که از [TypeScript](https://docs.liara.ir/paas/nextjs/how-tos/use-type-script/) استفاده می‌کنید؛ محتوای APIتان می‌تواند مانند زیر باشد:  

## Pages Router

```ts
// pages/api/test.ts
import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  console.log('this is a test');
  res.status(200).json({ message: 'API executed successfully' });
}
```

## App Router

```ts
// app/api/test/route.ts

import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  console.log('this is a test');
  return NextResponse.json({ message: 'API executed successfully' }, { status: 200 });
}
```

حال، برای اینکه API شما، مثلاً در هر دقیقه، به صورت خودکار اجرا شود؛ شما می‌توانید از قابلیت Cron Job استفاده کنید  
و با استفاده یکی از روش‌های زیر، آن را در پروژه خود فعال کنید:

## Liara Console

برای تنظیم یک Cron Job در NextJS کافیست تا

پس از آپلود پروژه خود در کنسول در بخش **تنظیمات پلتفرم**، Cron Jobهای خود را تعریف کنید:

![set cron jobs on liara](https://media.liara.ir/docs/nextjs-cronjob.png)

## Liara CLI

برای تنظیم یک Cron Job در NextJS کافیست تا در لوکال در آرایه `cron` در فایل `liara.json`، قطعه کدی مشابه قطعه کد زیر، بنویسید:

```json
{
  "cron": [
    "* * * * * curl http://localhost:3000/api/test"
  ]
}
```

با انجام کار فوق و استقرار برنامه‌تان با [Liara CLI](https://docs.liara.ir/references/cli/about) و دستور `liara deploy`، Cron Job در برنامه شما، تنظیم خواهد شد  
و در زمان مشخص شده، برای‌تان اجرا می‌شود.  

## فرمت زمان‌بندی Cron Job
در نظر داشته باشید که فرمت زمان‌بندی Cron به صورت زیر است:

```scss
* * * * *
│ │ │ │ │
│ │ │ │ └── روزهای هفته (۰-۷) (۰ و ۷ هر دو نشان‌دهنده یکشنبه هستند)
│ │ │ └──── ماه‌ها (۱-۱۲)
│ │ └────── روزهای ماه (۱-۳۱)
│ └──────── ساعت‌ها (۰-۲۳)
└────────── دقیقه‌ها (۰-۵۹)
```

> با کمک [این](https://crontab.guru/) وب‌سایت، می‌توانید زمان دلخواه خود را، بسازید.

پس از تنظیم cron jobها و استقرار مجدد برنامه، می‌توانید لیست آن‌ها را در قسمت **تنظیمات برنامه** خود، مشاهده بفرمایید:

![see cron jobs on liara](https://media.liara.ir/docs/see-cron-jobs.png)

## all links

[All links of docs](https://docs.liara.ir/all-links-llms.txt)
