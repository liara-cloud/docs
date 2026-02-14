Original link: https://docs.liara.ir/ai/cookbook/nextjs/call-tools-multiple-steps/

# فراخوانی Toolها در چندمرحله با AI در NextJS

برخی از LLMها توانایی بالایی در فراخوانی Toolها به‌صورت چندمرحله‌ای برای انجام وظایف پیچیده‌تر دارند.  
این ویژگی زمانی مفید است که Toolها به یکدیگر وابسته باشند و نیاز باشد که پشت‌سر‌هم در یک گام از تولید محتوا اجرا شوند.

## کلاینت

بیایید یک کامپوننت React ایجاد کنیم که در آن از هوک `useChat` از ماژول `ai-sdk/react@` استفاده کند.  
این هوک هنگام ارسال پیام توسط کاربر، یک endpoint به نام `api/chat/` را فراخوانی می‌کند.  
این endpoint بر اساس تاریخچه‌ی گفتگو، پاسخ دستیار را تولید کرده و آن را به‌صورت استریم به کلاینت ارسال می‌کند.  
اگر دستیار در پاسخ خود از فراخوانی tool استفاده کند، این هوک به‌صورت خودکار آن‌ها را نیز نمایش می‌دهد.

برای فراخوانی Toolها در چند مرحله، می‌توانید از گزینه‌ی `maxSteps` استفاده کنید تا حداکثر تعداد مراحلی که قبل از پاسخ متنی مدل یا کاربر مجاز است انجام شود را، تعیین نمایید.  
در این مثال، مقدار `maxSteps` روی `5` تنظیم می‌شود تا امکان فراخوانی چندین Tool به‌صورت متوالی فراهم باشد.

در فایل `app/page.tsx` قطعه کد زیر را قرار دهید:  

```js
// npm i @ai-sdk/react@^1.2.12
'use client';

import { useChat } from '@ai-sdk/react';

export default function Page() {
  const { messages, input, setInput, append } = useChat({
    api: '/api/chat',
    maxSteps: 5,
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

اکنون باید یک مسیر جدید در `api/chat/` ایجاد کنید که از تابع `streamText` از ماژول `ai` برای تولید پاسخ دستیار بر اساس تاریخچه‌ی گفتگو استفاده کند.  
از فیلد `tools` برای مشخص کردن دو Tool به نام‌های `getLocation` و `getWeather` استفاده خواهید کرد که ابتدا موقعیت مکانی کاربر را به‌دست می‌آورند و سپس از آن برای دریافت وضعیت آب‌وهوا استفاده می‌کنند.

شما دو تابع ذکرشده را اضافه خواهید کرد و با استفاده از Zod، یک اسکیما برای پارامترهای آن‌ها تعریف خواهید نمود.

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

function getLocation() {
  return { lat: 37.7749, lon: -122.4194 };
}

function getWeather({ lat, lon, unit }: { lat: number; lon: number; unit: string }) {
  return { value: 25, description: 'Sunny' };
}

export async function POST(req: Request) {
  const { messages }: { messages: Message[] } = await req.json();

  const result = streamText({
    model: my_model('openai/gpt-4o-mini'),
    system: 'You are a helpful assistant.',
    messages,
    tools: {
      getLocation: {
        description: 'Get the location of the user',
        parameters: z.object({}),
        execute: async () => {
        const { lat, lon } = getLocation();
        return {
          lat,
          lon,
          message: `Your location is at latitude ${lat} and longitude ${lon}`,
        };
      }
      },
      getWeather: {
        description: 'Get the weather for a location',
        parameters: z.object({
          lat: z.number().describe('The latitude of the location'),
          lon: z.number().describe('The longitude of the location'),
          unit: z
            .enum(['C', 'F'])
            .describe('The unit to display the temperature in'),
        }),
        execute: async ({ lat, lon, unit }) => {
        const { value, description } = getWeather({ lat, lon, unit });
        return {
          temperature: value,
          unit,
          description,
          message: `It is currently ${value}°${unit} and ${description}!`,
        };
      }
      },
    },
  });

  return result.toDataStreamResponse();
}
```

> متغیرهای محیطی `BASE_URL` و `LIARA_API_KEY` همان baseUrl [سرویس هوش مصنوعی لیارا](https://docs.liara.ir) و [کلید API لیارا](https://docs.liara.ir/references/api/about/#api-access-key) هستند که باید در بخش متغیرهای محیطی برنامه خود، آن‌ها را تنظیم کنید.

خروجی برنامه فوق:  

![usage of tool calls in multi-step in nextjs app router](https://media.liara.ir//ai/ai-sdk/cookbook/nextjs/call-tools-multi-step.png)

> پروژه فوق را می‌توانید به‌صورت کامل در [گیت‌هاب لیارا](https://github.com/liara-cloud/ai-sdk-examples/tree/master/NextJS/call-tools-multiple-steps)، مشاهده کنید.

## all links

[All links of docs](https://docs.liara.ir/all-links-llms.txt)
