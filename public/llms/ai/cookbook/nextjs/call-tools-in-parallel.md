Original link: https://docs.liara.ir/ai/cookbook/nextjs/call-tools-in-parallel/

# فراخوانی Toolها به صورت موازی با AI در NextJS

برخی از LLMها از فراخوانی Toolها به‌صورت موازی (parallel) پشتیبانی می‌کنند.  
این قابلیت زمانی مفید است که چندین Tool، مستقل از یکدیگر باشند و بتوانند در همان مرحله از تولید محتوا، به‌طور هم‌زمان اجرا شوند.

## کلاینت

بیایید یک کامپوننت React ایجاد کنیم که در آن از هوک `useChat` از ماژول `ai-sdk/react@` استفاده شده است.  
این هوک، هنگام ارسال پیام توسط کاربر، یک endpoint به نام `api/chat/` را فراخوانی می‌کند.  
این endpoint پاسخ دستیار را بر اساس تاریخچه‌ی گفتگو تولید کرده و به‌صورت استریم به کلاینت ارسال می‌کند.  
اگر دستیار در پاسخ خود از Tool استفاده کند، این هوک به‌صورت خودکار آن را نیز نمایش خواهد داد.

شما همچنین می‌توانید از گزینه‌ی `maxSteps` برای مشخص کردن حداکثر تعداد مراحل، قبل از اینکه مدل یا کاربر با یک پیام متنی پاسخ دهد، استفاده کنید.  
در این مثال، مقدار `maxSteps` روی `2` تنظیم شده است تا امکان فراخوانی مجدد مدل با نتیجه Tool وجود داشته باشد.  
در فایل `app/page.tsx` قطعه کد زیر را قرار دهید:  

```js
// npm i @ai-sdk/react@^1.2.12
'use client';

import { useChat } from '@ai-sdk/react';

export default function Page() {
  const { messages, input, setInput, append } = useChat({
    api: 'https://docs.liara.ir/api/chat',
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

یک مسیر جدید در `api/chat/` ایجاد کنید که از تابع `streamText` از ماژول `ai` برای تولید پاسخ دستیار بر اساس تاریخچه‌ی گفتگو استفاده می‌کند.  
در این مسیر، از فیلد `tool` برای تعریف ابزاری به نام `getWeather` استفاده کنید؛ این Tool وظیفه دارد وضعیت آب‌وهوا را برای یک موقعیت مکانی مشخص بازیابی کند.  
همچنین، تابع `getWeather` را تعریف کنید و با استفاده از کتابخانه Zod، اسکیما برای پارامترهای این Tool ارائه دهید تا داده‌های ورودی را اعتبارسنجی کند.

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

function getWeather({ city, unit }) {
  return { value: 25, description: 'Sunny' };
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
          const { value, description } = getWeather({ city, unit });
          return `It is currently ${value}°${unit} and ${description} in ${city}!`;
        },
      },
    },
  });

  return result.toDataStreamResponse();
}
```

> متغیرهای محیطی `BASE_URL` و `LIARA_API_KEY` همان baseUrl [سرویس هوش مصنوعی لیارا](https://docs.liara.ir/products/ai/) و [کلید API لیارا](https://docs.liara.ir/references/api/about/#api-access-key) هستند که باید در بخش متغیرهای محیطی برنامه خود، آن‌ها را تنظیم کنید.  
> پروژه فوق را می‌توانید به‌صورت کامل در [گیت‌هاب لیارا](https://github.com/liara-cloud/ai-sdk-examples/tree/master/NextJS/call-tools-in-parallel)، مشاهده کنید.

## all links

[All links of docs](https://docs.liara.ir/all-links-llms.txt)
