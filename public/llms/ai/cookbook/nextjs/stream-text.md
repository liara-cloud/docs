Original link: https://docs.liara.ir/ai/cookbook/nextjs/stream-text/

# استریم متن با AI در NextJS

تولید متن ممکن است زمانبر باشد، مخصوصاً وقتی که در حال تولید چند پاراگراف باشید.
در چنین مواردی، استریم فرآیند تولید متن به‌صورت بلادرنگ به سمت کلاینت، مفید است و این امکان را فراهم می‌کند که کلاینت، متن تولیدشده را در حین generation نمایش دهد، به‌جای اینکه کاربر منتظر بماند تا تولید کامل شود و سپس نتیجه نمایش داده شود.

## کلاینت

بیایید یک کامپوننت ساده‌ی React ایجاد کنیم که در آن از هوک `useCompletion` از ماژول `ai-sdk/react@` استفاده شده است.
هوک `useCompletion` هنگام کلیک روی یک دکمه، endpoint به نام `https://docs.liara.ir/api/completion/` را فراخوانی می‌کند.
این endpoint بر اساس پرامپت، ورودی متنی تولید کرده و آن را به‌صورت استریم به کلاینت ارسال می‌کند.

قطعه کد زیر را در فایل `app/page.tsx` قرار دهید: 

```js
// npm i @ai-sdk/react@^1.2.12

'use client';

import { useCompletion } from '@ai-sdk/react';

export default function Page() {
  const { completion, complete } = useCompletion({
    api: '/api/completion',
  });

  return (
    <div>
      <div
        onClick={async () => {
          await complete('Why is the sky blue?');
        }}
      >
        Generate
      </div>

      {completion}
    </div>
  );
}
```

## سرور

بیایید یک route handler برای مسیر `https://docs.liara.ir/api/completion/` ایجاد کنیم که وظیفه دارد بر اساس پرامپت ورودی، متنی تولید کند.
این route، تابع `streamText` از ماژول `ai` را فراخوانی خواهد کرد. این تابع، متن را بر اساس پرامپت ورودی تولید کرده و نتیجه را به صورت استریم، به کلاینت بازمی‌گرداند.

قطعه کد زیر را در مسیر `app/api/completion/route.ts`، قرار دهید: 

```js
// npm i @ai-sdk/openai@^1 ai@^4

import { createOpenAI } from '@ai-sdk/openai';
import { streamText } from 'ai';

const my_model = createOpenAI({
  baseURL: process.env.BASE_URL!,
  apiKey: process.env.LIARA_API_KEY!,
});


export async function POST(req: Request) {
  const { prompt }: { prompt: string } = await req.json();

  const result = streamText({
    model: my_model('openai/gpt-4o-mini'),
    system: 'You are a helpful assistant.',
    prompt,
  });

  return result.toDataStreamResponse();
}
```

> متغیرهای محیطی `BASE_URL` و `LIARA_API_KEY` همان baseUrl [سرویس هوش مصنوعی لیارا](https://liara.ir/products/ai/) و [کلید API لیارا](https://docs.liara.ir/references/api/about/#api-access-key) هستند که باید در بخش متغیرهای محیطی برنامه خود، آن‌ها را تنظیم کنید.

خروجی برنامه فوق: 

![example of generating text in nextjs app router](https://media.liara.ir/ai/ai-sdk/cookbook/nextjs/generate-text-final.png)

> پروژه فوق را می‌توانید به‌صورت کامل در [گیت‌هاب لیارا](https://github.com/liara-cloud/ai-sdk-examples/tree/master/NextJS/stream-text)، مشاهده کنید.

## all links

[All links of docs](https://docs.liara.ir/all-links-llms.txt)
