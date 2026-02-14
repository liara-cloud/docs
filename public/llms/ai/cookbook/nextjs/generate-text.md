Original link: https://docs.liara.ir/ai/cookbook/nextjs/generate-text/

# تولید متن با AI در NextJS

ممکن است شرایطی پیش آید که نیاز به تولید متن بر اساس یک پرامپت (prompt) داشته باشید.  
برای مثال، ممکن است بخواهید به یک پرسش، پاسخ بدهید؛ یا از یک متن، خلاصه بسازید.  
تابع `generateText` می‌تواند برای تولید متن بر اساس پرامپت ورودی، مورد استفاده قرار گیرد.

## کلاینت

بیایید یک کامپوننت ساده‌ی React ایجاد کنیم که هنگام کلیک روی یک دکمه، یک درخواست POST به مسیر `api/completion/` ارسال کند. این endpoint وظیفه دارد بر اساس پرامپت ورودی، متنی را تولید کند.  
در فایل `app/page.tsx` قطعه کد زیر را قرار دهید: 

```js
'use client';

import { useState } from 'react';

export default function Page() {
  const [generation, setGeneration] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  return (
    <div>
      <div
        onClick={async () => {
          setIsLoading(true);

          await fetch('/api/completion', {
            method: 'POST',
            body: JSON.stringify({
              prompt: 'Why is the sky blue?',
            }),
          }).then(response => {
            response.json().then(json => {
              setGeneration(json.text);
              setIsLoading(false);
            });
          });
        }}
      >
        Generate
      </div>

      {isLoading ? 'Loading...' : generation}
    </div>
  );
}
```

## سرور

بیایید یک route handler برای مسیر `api/completion/` ایجاد کنیم که وظیفه دارد بر اساس پرامپت ورودی، متنی تولید کند.  
این route، تابع `generateText` از ماژول `ai` را فراخوانی خواهد کرد. این تابع، متن را بر اساس پرامپت ورودی تولید کرده و نتیجه را بازمی‌گرداند.  
قطعه کد زیر را در مسیر `app/api/completion/route.ts`، قرار دهید: 

```js
// npm i @ai-sdk/openai@^1 ai@^4

import { createOpenAI } from '@ai-sdk/openai';
import { generateText } from 'ai';


const my_model = createOpenAI({
  baseURL: process.env.BASE_URL!,
  apiKey: process.env.LIARA_API_KEY!,
});


export async function POST(req: Request) {
  const { prompt }: { prompt: string } = await req.json();

  const { text } = await generateText({
    model: my_model('openai/gpt-4o-mini'),
    system: 'You are a helpful assistant.',
    prompt,
  });

  return Response.json({ text });
}
```

> متغیرهای محیطی `BASE_URL` و `LIARA_API_KEY` همان baseUrl [سرویس هوش مصنوعی لیارا](https://docs.liara.ir/products/ai/) و [کلید API لیارا](https://docs.liara.ir/references/api/about/#api-access-key) هستند که باید در بخش متغیرهای محیطی برنامه خود، آن‌ها را تنظیم کنید.  

خروجی برنامه فوق: 

![example of generating text in nextjs app router](https://media.liara.ir/ai/ai-sdk/cookbook/nextjs/generate-text-final.png)

> پروژه فوق را می‌توانید به‌صورت کامل در [گیت‌هاب لیارا](https://github.com/liara-cloud/ai-sdk-examples/tree/master/NextJS/generate-text)، مشاهده کنید.

## all links

[All links of docs](https://docs.liara.ir/all-links-llms.txt)
