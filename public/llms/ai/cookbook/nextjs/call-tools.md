Original link: https://docs.liara.ir/ai/cookbook/nextjs/call-tools/

# فراخوانی Toolها با AI در NextJS

برخی از مدل‌ها به توسعه‌دهندگان اجازه می‌دهند فهرستی از Toolها را ارائه دهند که بتوان در هر زمان طی فرآیند تولید محتوا آن‌ها را فراخوانی کرد.  
این قابلیت برای گسترش توانایی‌های LLM بسیار مفید است، زیرا در این صورت، امکان تعامل با سیستم‌های خارج از مدل، فراهم می‌شود.  


## کلاینت

بیایید یک کامپوننت React ایجاد کنیم که در آن از هوک `useChat` از ماژول `ai-sdk/react@` استفاده شده است.  
این هوک هنگام ارسال پیام توسط کاربر، یک endpoint به نام `api/chat/` را فراخوانی می‌کند. این endpoint، پاسخ دستیار را بر اساس تاریخچه‌ی گفتگو تولید کرده و آن را به‌صورت استریم، به کلاینت ارسال می‌کند.  
اگر دستیار در پاسخ خود از فراخوانی Tool استفاده کند، این هوک به‌طور خودکار آن‌ها را نیز نمایش خواهد داد.  

ما از فیلد `maxSteps` برای مشخص کردن حداکثر تعداد مراحل (یا فراخوانی LLM) استفاده می‌کنیم تا از بروز حلقه‌های بی‌نهایت جلوگیری شود.  
در این مثال، مقدار آن روی `2` تنظیم می‌شود تا دو فراخوانی به بک‌اند امکان‌پذیر باشد.  

در فایل `app/page.tsx` قطعه کد زیر را قرار دهید:  

```js
// npm i @ai-sdk/react@^1.2.12
'use client';

import { useChat } from '@ai-sdk/react';

export default function Page() {
  const { messages, input, setInput, append } = useChat({
    api: '/api/chat',
    maxSteps: 2,
  });

  return (
    <div>
      <input
        value={input}
        onChange={event => {
          setInput(event.target.value);
        }}
        onKeyDown={async event => {
          if (event.key === 'Enter') {
            append({ content: input, role: 'user' });
          }
        }}
      />

      {messages.map((message, index) => (
        <div key={index}>{message.content}</div>
      ))}
    </div>
  );
}
```


## سرور

در این بخش، یک مسیر جدید در `api/chat/` ایجاد کنید که از تابع `streamText` از ماژول `ai` برای تولید پاسخ دستیار بر اساس تاریخچه‌ی گفتگو استفاده کند.  
از فیلد `tools` استفاده کنید تا ابزاری به نام `celsiusToFahrenheit` تعریف کنید که مقدار داده‌شده توسط کاربر را از سلسیوس به فارنهایت تبدیل کند.  

همچنین با استفاده از Zod، یک schema برای پارامترهای تابع `celsiusToFahrenheit` تعریف کنید تا اعتبارسنجی داده‌های ورودی به درستی انجام شود.  


در مسیر `app/api/chat/route.ts`، قطعه کد زیر را قرار دهید:  

```js
// npm i @ai-sdk/openai@^1 ai@^4 zod

import { createOpenAI } from '@ai-sdk/openai';
import { ToolInvocation, streamText } from 'ai';
import { z } from 'zod';

const my_model = createOpenAI({
  baseURL: process.env.BASE_URL!,
  apiKey: process.env.LIARA_API_KEY!,
});

interface Message {
  role: 'user' | 'assistant';
  content: string;
  toolInvocations?: ToolInvocation[];
}

export async function POST(req: Request) {
  const { messages }: { messages: Message[] } = await req.json();

  const result = streamText({
    model: my_model('openai/gpt-4o-mini'),
    system: 'You are a helpful assistant.',
    messages,
    tools: {
      getWeather: {
        description: 'Get the weather for a location',
        parameters: z.object({
          city: z.string().describe('The city to get the weather for'),
          unit: z
            .enum(['C', 'F'])
            .describe('The unit to display the temperature in'),
        }),
        execute: async ({ city, unit }) => {
          const weather = {
            value: 24,
            description: 'Sunny',
          };

          return `It is currently ${weather.value}°${unit} and ${weather.description} in ${city}!`;
        },
      },
    },
  });

  return result.toDataStreamResponse();
}
```

> متغیرهای محیطی `BASE_URL` و `LIARA_API_KEY` همان baseUrl [سرویس هوش مصنوعی لیارا](https://docs.liara.ir/products/ai/) و [کلید API لیارا](https://docs.liara.ir/references/api/about/#api-access-key) هستند که باید در بخش متغیرهای محیطی برنامه خود، آن‌ها را تنظیم کنید.  

خروجی برنامه فوق:  


![usage of tool calls in nextjs app router](https://media.liara.ir/ai/ai-sdk/cookbook/nextjs/tool-calls.png)  

> پروژه فوق را می‌توانید به‌صورت کامل در [گیت‌هاب لیارا](https://github.com/liara-cloud/ai-sdk-examples/tree/master/NextJS/tool-calls)، مشاهده کنید.

## all links

[All links of docs](https://docs.liara.ir/all-links-llms.txt)
