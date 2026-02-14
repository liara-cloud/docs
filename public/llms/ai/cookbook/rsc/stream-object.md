Original link: https://docs.liara.ir/ai/cookbook/rsc/stream-object/

# استریم آبجکت با هوش مصنوعی با ساخت RSC

> این مثال از React Server Components (یا همان RSC)، استفاده می‌کند. اگر که قصد دارید از
> client side rendering و هوک‌ها استفاده کنید؛ می‌توانید به [این مستندات](https://docs.liara.ir/ai/cookbook/nextjs/stream-object) مراجعه کنید.

تولید object گاهی ممکن است زمان‌بر باشد، مخصوصاً زمانی که در حال تولید یک schema بزرگ هستید.
در چنین مواردی، استریم فرآیند تولید آبجکت به‌صورت بلادرنگ به سمت کلاینت می‌تواند بسیار مفید باشد.
این کار به کلاینت اجازه می‌دهد که آبجکت تولیدشده را در حین فرایند تولید، نمایش دهد، به‌جای اینکه کاربر منتظر بماند تا کل عملیات تولید به پایان برسد و سپس نتیجه را مشاهده کند.

## کلاینت

بیایید یک کامپوننت ساده React ایجاد کنیم که هنگام کلیک روی یک دکمه، تابع `getNotifications` را فراخوانی می‌کند.
تابع `getNotifications`، یک لیست از نوتیفیکیشن‌ها را همانطور که در schema مشخص شده است، تولید می‌کند.

در مسیر `app/page.tsx`، قطعه کد زیر را قرار دهید: 

```js
// npm i @ai-sdk/rsc

'use client';

import { useState } from 'react';
import { generate } from '@/app/actions';
import { readStreamableValue } from '@ai-sdk/rsc';

// Allow streaming responses up to 30 seconds
export const maxDuration = 30;

export default function Home() {
  const [generation, setGeneration] = useState<string>('');

  return (
    <div>
      <button
        onClick={async () => {
          const { object } = await generate('Messages during finals week.');

          for await (const partialObject of readStreamableValue(object)) {
            if (partialObject) {
              setGeneration(
                JSON.stringify(partialObject.notifications, null, 2),
              );
            }
          }
        }}
      >
        Ask
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

import { streamObject } from 'ai';
import { createOpenAI } from '@ai-sdk/openai';
import { createStreamableValue } from '@ai-sdk/rsc';
import { z } from 'zod';

const my_model = createOpenAI({
  baseURL: process.env.BASE_URL!,
  apiKey: process.env.LIARA_API_KEY!,
});

export async function generate(input: string) {
  'use server';

  const stream = createStreamableValue();

  (async () => {
    const { partialObjectStream } = streamObject({
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

    for await (const partialObject of partialObjectStream) {
      stream.update(partialObject);
    }

    stream.done();
  })();

  return { object: stream.value };
}
```

> متغیرهای محیطی `BASE_URL` و `LIARA_API_KEY` همان baseUrl [سرویس هوش مصنوعی لیارا](https://liara.ir/products/ai/) و [کلید API لیارا](https://docs.liara.ir/references/api/about/#api-access-key) هستند که باید در بخش متغیرهای محیطی برنامه خود، آن‌ها را تنظیم کنید.

> پروژه فوق را می‌توانید به‌صورت کامل در [گیت‌هاب لیارا](https://github.com/liara-cloud/ai-sdk-examples/tree/master/RSC/stream-object)، مشاهده کنید.

## all links

[All links of docs](https://docs.liara.ir/all-links-llms.txt)
