Original link: https://docs.liara.ir/ai/cookbook/rsc/stream-text/

# استریم متن با هوش مصنوعی با ساخت RSC

> این مثال از React Server Components (یا همان RSC)، استفاده می‌کند. اگر که قصد دارید از  
> client side rendering و هوک‌ها استفاده کنید؛ می‌توانید به [این مستندات](https://docs.liara.ir/ai/cookbook/nextjs/stream-text) مراجعه کنید.

تولید متن گاهی ممکن است زمان‌بر باشد؛ مخصوصاً  
زمانی که در حال تولید چند تا پاراگراف طولانی هستید. در این حالت‌ها، قابلیت  
استریم متن به‌صورت بلادرنگ به سمت کلاینت در هنگام فرایند تولید متن، می‌تواند مفید باشد.  
این کار به کلاینت این امکان را می‌دهد که  
متن تولید شده را در زمانی که توسط LLM تولید می‌شود، مشاهده کند؛ به جای اینکه منتظر بماند تا کل متن تولید شود.

## کلاینت

بیایید یک کامپوننت ساده React ایجاد کنیم که هنگام کلیک روی یک دکمه، تابع `generate` را فراخوانی می‌کند.  
تابع `generate`، تابع `streamText` را فراخوانی خواهد کرد که در ادامه، یک متن بر اساس پرامپت ورودی، تولید می‌کند. سپس متنی را بر اساس prompt تولید می‌کند.  
برای ارائه stream متن در سمت کلاینت، از تابع `readStreamableValue` از ماژول `ai-sdk/rsc@` استفاده خواهیم کرد.

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
          const { output } = await generate('Why is the sky blue?');

          for await (const delta of readStreamableValue(output)) {
            setGeneration(currentGeneration => `${currentGeneration}${delta}`);
          }
        }}
      >
        Ask
      </button>

      <div>{generation}</div>
    </div>
  );
}
```

## سرور

در سمت سرور، باید تابع `generate` را پیاده‌سازی کنیم که درون خود، تابع `streamText` را فراخوانی می‌کند. تابع `streamText`، یک متن بر اساس پرامپت ورودی تولید می‌کند.  
برای استریم متن تولید شده به سمت کلاینت، باید از `createStreamableValue` استفاده کنیم. این تابع، هر مقدار قابل تغییری را می‌گیرد و آن را به سمت کلاینت، استریم می‌کند.  

با استفاده از DevTools، می‌توانیم ببینیم که متن تولیدشده، به سمت کلاینت به‌صورت بلادرنگ، استریم می‌شود.  

در مسیر `app/actions.ts`، قطعه کد زیر را قرار دهید:

```js
// npm i @ai-sdk/openai@^1 ai@^4
'use server';

import { streamText } from 'ai';
import { createOpenAI } from '@ai-sdk/openai';
import { createStreamableValue } from '@ai-sdk/rsc';

const my_model = createOpenAI({
  baseURL: process.env.BASE_URL!,
  apiKey: process.env.LIARA_API_KEY!,
});

export async function generate(input: string) {
  const stream = createStreamableValue('');

  (async () => {
    const { textStream } = streamText({
      model: my_model('openai/gpt-4o-mini'),
      prompt: input,
    });

    for await (const delta of textStream) {
      stream.update(delta);
    }

    stream.done();
  })();

  return { output: stream.value };
}
```

> متغیرهای محیطی `BASE_URL` و `LIARA_API_KEY` همان baseUrl [سرویس هوش مصنوعی لیارا](https://docs.liara.ir/products/ai/) و [کلید API لیارا](https://docs.liara.ir/references/api/about/#api-access-key) هستند که باید در بخش متغیرهای محیطی برنامه خود، آن‌ها را تنظیم کنید.

> پروژه فوق را می‌توانید به‌صورت کامل در [گیت‌هاب لیارا](https://github.com/liara-cloud/ai-sdk-examples/tree/master/RSC/stream-text)، مشاهده کنید.

## all links

[All links of docs](https://docs.liara.ir/all-links-llms.txt)
