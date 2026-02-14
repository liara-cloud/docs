Original link: https://docs.liara.ir/ai/cookbook/rsc/generate-object/

# تولید آبجکت با هوش مصنوعی با ساخت RSC

> این مثال از React Server Components (یا همان RSC)، استفاده می‌کند. اگر که قصد دارید از
> client side rendering و هوک‌ها استفاده کنید؛ می‌توانید به [این مستندات](https://docs.liara.ir/ai/cookbook/nextjs/generate-object/) مراجعه کنید.

توابع `generateText` و `streamText` این امکان را به ما می‌دادند که متن بدون ساختار تولید کنیم.
با این حال، اگر بخواهید داده‌ی ساختارمند مانند JSON تولید کنید، می‌توانید یک schema که ساختار آبجکت موردنظر شما را توصیف می‌کند، به تابع `generateObject` ارائه دهید.

این تابع نیاز دارد که شما یک schema را با استفاده از کتابخانه‌ی Zod ارائه دهید.
با استفاده از Zod، نه‌تنها می‌توانید ساختار آبجکت را تعریف کنید، بلکه درستی و تطابق آبجکت تولیدشده با ساختار مشخص‌شده را نیز اعتبارسنجی کنید.

## کلاینت

بیایید یک کامپوننت ساده React ایجاد کنیم که هنگام کلیک روی یک دکمه، تابع `getNotifications` را فراخوانی می‌کند.
تابع `getNotifications`، یک لیست از نوتیفیکیشن‌ها را همانطور که در schema مشخص شده است، تولید می‌کند.

در مسیر `app/page.tsx`، قطعه کد زیر را قرار دهید: 

```js
'use client';

import { useState } from 'react';
import { getNotifications } from '@/app/actions';

// Allow streaming responses up to 30 seconds
export const maxDuration = 30;

export default function Home() {
  const [generation, setGeneration] = useState<string>('');

  return (
    <div>
      <button
        onClick={async () => {
          const { notifications } = await getNotifications(
            'Messages during finals week.',
          );

          setGeneration(JSON.stringify(notifications, null, 2));
        }}
      >
        View Notifications
      </button>

      {generation}</pre>
    </div>
  );
}
```

## سرور

اکنون بیایید تابع `getNotifications` را پیاده‌سازی کنیم که درون خود، تابع `generateObject` را فراخوانی می‌کند تا یک لیست از نوتیفیکیشن‌ها بر اساس 
اسکیمایی که قبل‌تر تعریف کردیم، تولید کند.

در مسیر `app/actions.ts`، قطعه کد زیر را قرار دهید:

```js
// npm i @ai-sdk/openai@^1 ai@^4 zod
'use server';

import { generateObject } from 'ai';
import { createOpenAI } from '@ai-sdk/openai';
import { z } from 'zod';

const my_model = createOpenAI({
  baseURL: process.env.BASE_URL!,
  apiKey: process.env.LIARA_API_KEY!,
});

export async function getNotifications(input: string) {
  'use server';

  const { object: notifications } = await generateObject({
    model: my_model('openai/gpt-4o-mini'),
    system: 'You generate three notifications for a messages app.',
    prompt: input,
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

  return { notifications };
}
```

> متغیرهای محیطی `BASE_URL` و `LIARA_API_KEY` همان baseUrl [سرویس هوش مصنوعی لیارا](https://liara.ir/products/ai/) و [کلید API لیارا](https://docs.liara.ir/references/api/about/#api-access-key) هستند که باید در بخش متغیرهای محیطی برنامه خود، آن‌ها را تنظیم کنید.

> پروژه فوق را می‌توانید به‌صورت کامل در [گیت‌هاب لیارا](https://github.com/liara-cloud/ai-sdk-examples/tree/master/RSC/generate-object)، مشاهده کنید.

## all links

[All links of docs](https://docs.liara.ir/all-links-llms.txt)
