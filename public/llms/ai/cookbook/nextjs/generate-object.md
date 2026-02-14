Original link: https://docs.liara.ir/ai/cookbook/nextjs/generate-object/

#  تولید آبجکت با AI در NextJS

توابعی مانند `generateText` و `streamText` امکان تولید متن بدون ساختار را فراهم می‌کنند.  
اما اگر بخواهید داده‌های ساختاریافته مانند `JSON` تولید کنید، می‌توانید با استفاده از تابع `generateObject` و ارائه‌ی یک طرح‌واره (schema)، ساختار object مورد نظر را مشخص نمایید.

این تابع نیاز دارد که اسکیما را با استفاده از کتابخانه‌ی [Zod](https://zod.dev) تعریف کنید؛ Zod کتابخانه‌ای برای تعریف و اعتبارسنجی ساختار objectها در جاوااسکریپت است.  
با استفاده از Zod نه‌تنها می‌توانید ساختار مورد انتظار را مشخص کنید، بلکه امکان validation آبجکت تولیدشده نیز وجود دارد تا مطمئن شوید که با ساختار تعریف‌شده مطابقت دارد.

## کلاینت

- بیایید یک کامپوننت ساده‌ی React ایجاد کنیم که هنگام کلیک روی یک دکمه، یک درخواست POST به endpoint به نام  `api/completion/` ارسال می‌کند.  
- این endpoint، یک object ساختاریافته را بر اساس پرامپت ورودی تولید کرده و آن را بازمی‌گرداند.  
- ما نیز پس از دریافت پاسخ، object تولیدشده را در رابط کاربری نمایش خواهیم داد.  
- در فایل `app/page.tsx` قطعه کد زیر را قرار دهید:  

```js
'use client';

import { useState } from 'react';

export default function Page() {
  const [generation, setGeneration] = useState();
  const [isLoading, setIsLoading] = useState(false);

  return (
    <div>
      <div
        onClick={async () => {
          setIsLoading(true);

          await fetch('/api/completion', {
            method: 'POST',
            body: JSON.stringify({
              prompt: 'Messages during finals week.',
            }),
          }).then(response => {
            response.json().then(json => {
              setGeneration(json.notifications);
              setIsLoading(false);
            });
          });
        }}
      >
        Generate
      </div>

      {isLoading ? 'Loading...' : {JSON.stringify(generation)}</pre>}
    </div>
  );
}
```

## سرور

- بیایید یک route handler برای `api/completion/` ایجاد کنیم که بر اساس پرامپت ورودی، یک object ساختاریافته تولید کند.  
- این route، تابع `generateObject` از ماژول `ai` را فراخوانی می‌کند.  
- این تابع با استفاده از پرامپت ورودی، یک آبجکت تولید کرده و آن را به‌عنوان پاسخ بازمی‌گرداند.  
- در مسیر `app/api/completion/route.ts`، قطعه کد زیر را قرار دهید:  

```js
// npm i @ai-sdk/openai@^1 ai@^4 zod

import { createOpenAI } from '@ai-sdk/openai';
import { generateObject } from 'ai';
import { z } from 'zod';

const my_model = createOpenAI({
  baseURL: process.env.BASE_URL!,
  apiKey: process.env.LIARA_API_KEY!,
});

export async function POST(req: Request) {
  const { prompt }: { prompt: string } = await req.json();

  const result = await generateObject({
    model: my_model('openai/gpt-4o-mini', { structuredOutputs: true }),
    system: 'You generate three notifications for a messages app.',
    prompt,
    schema: z.object({
      notifications: z.array(
        z.object({
          name: z.string().describe('Name of a fictional person.'),
          message: z.string().describe('Do not use emojis or links.'),
          minutesAgo: z.number(),
        }),
      ),
    }),
  });

  return result.toJsonResponse();
}
```

> متغیرهای محیطی `BASE_URL` و `LIARA_API_KEY` همان baseUrl [سرویس هوش مصنوعی لیارا](https://docs.liara.ir/products/ai/) و [کلید API لیارا](https://docs.liara.ir/references/api/about/#api-access-key) هستند که باید در بخش متغیرهای محیطی برنامه خود، آن‌ها را تنظیم کنید.

> پروژه فوق را می‌توانید به‌صورت کامل در [گیت‌هاب لیارا](https://github.com/liara-cloud/ai-sdk-examples/tree/master/NextJS/generate-object)، مشاهده کنید.

## all links

[All links of docs](https://docs.liara.ir/all-links-llms.txt)
