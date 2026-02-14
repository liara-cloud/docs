Original link: https://docs.liara.ir/ai/cookbook/rsc/generate-text/

# تولید متن با هوش مصنوعی با ساخت RSC

> این مثال از React Server Components (یا همان RSC)، استفاده می‌کند. اگر که قصد دارید از
> client side rendering و هوک‌ها استفاده کنید؛ می‌توانید به [این مستندات](https://docs.liara.ir/ai/cookbook/nextjs/generate-text/) مراجعه کنید.

در برخی موارد ممکن است نیاز داشته باشید متنی را بر اساس یک prompt تولید کنید. به‌عنوان مثال، ممکن است بخواهید به یک سؤال پاسخ دهید یا متنی را خلاصه‌سازی کنید. تابع `generateText` می‌تواند برای تولید متن بر اساس ورودی، مورد استفاده قرار گیرد.

## کلاینت

بیایید یک کامپوننت ساده React ایجاد کنیم که هنگام کلیک روی یک دکمه، تابع `getAnswer` را فراخوانی می‌کند.  
تابع `getAnswer`، تابع `generateText` را از ماژول `ai` فراخوانی خواهد کرد که سپس متنی را بر اساس prompt تولید می‌کند.

در مسیر `app/page.tsx`، قطعه کد زیر را قرار دهید:  

```js
'use client';

import { useState } from 'react';
import { getAnswer } from '@/app/actions';

// Allow streaming responses up to 30 seconds
export const maxDuration = 30;

export default function Home() {
  const [generation, setGeneration] = useState<string>('');

  return (
    <div>
      <button
        onClick={async () => {
          const { text } = await getAnswer('Why is the sky blue?');
          setGeneration(text);
        }}
      >
        Answer
      </button>
      <div>{generation}</div>
    </div>
  );
}
```

## سرور

در سمت سرور، باید تابع `getAnswer` را پیاده‌سازی کنیم که درون خود، تابع `generateText` از ماژول `ai` را فراخوانی می‌کند. تابع `generateText`، یک متن بر اساس پرامپت ورودی تولید می‌کند.

در مسیر `app/actions.ts`، قطعه کد زیر را قرار دهید:

```js
// npm i @ai-sdk/openai@^1 ai@^4

'use server';

import { generateText } from 'ai';
import { createOpenAI } from '@ai-sdk/openai';

const my_model = createOpenAI({
  baseURL: process.env.BASE_URL!,
  apiKey: process.env.LIARA_API_KEY!,
});

export async function getAnswer(question: string) {
  const { text, finishReason, usage } = await generateText({
    model: my_model('openai/gpt-4o-mini'),
    prompt: question,
  });

  return { text, finishReason, usage };
}
```

> متغیرهای محیطی `BASE_URL` و `LIARA_API_KEY` همان baseUrl [سرویس هوش مصنوعی لیارا](https://liara.ir/products/ai/) و [کلید API لیارا](https://docs.liara.ir/references/api/about/#api-access-key) هستند که باید در بخش متغیرهای محیطی برنامه خود، آن‌ها را تنظیم کنید.

> پروژه فوق را می‌توانید به‌صورت کامل در [گیت‌هاب لیارا](https://github.com/liara-cloud/ai-sdk-examples/tree/master/RSC/generate-text)، مشاهده کنید.

## all links

[All links of docs](https://docs.liara.ir/all-links-llms.txt)
