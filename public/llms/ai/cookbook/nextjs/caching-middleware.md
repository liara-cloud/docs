Original link: https://docs.liara.ir/ai/cookbook/nextjs/caching-middleware/

# کش Middleware در NextJS با AI

بیایید یک رابط چت ساده ایجاد کنیم که با استفاده از `LanguageModelMiddleware`، پاسخ‌های دستیار را در یک فضای ذخیره‌سازی کلید-مقدار (KV) سریع کش کند. این میان‌افزار باعث می‌شود که پاسخ‌های تولیدشده توسط مدل زبانی ذخیره شوند و در صورت تکرار درخواست مشابه، بدون نیاز به پردازش مجدد مدل، از کش بازگردانده شوند.

## کلاینت

بیایید یک رابط چت ساده ایجاد کنیم که به کاربران اجازه دهد پیام‌هایی را به دستیار ارسال کرده و پاسخ‌ها را دریافت کنند. در این پیاده‌سازی، شما از هوک `useChat` از پکیج `ai-sdk/react@` استفاده خواهید کرد تا پاسخ‌ها به‌صورت استریمی دریافت شوند.
در مسیر `app/page.tsx`، کد زیر را قرار دهید:

```js
// npm i @ai-sdk/react@^1.2.12
'use client';

import { useChat } from '@ai-sdk/react';

export default function Chat() {
  const { messages, input, handleInputChange, handleSubmit, error } = useChat();
  if (error) return <div>{error.message}</div>;

  return (
    <div className="flex flex-col w-full max-w-md py-24 mx-auto stretch">
      <div className="space-y-4">
        {messages.map(m => (
          <div key={m.id} className="whitespace-pre-wrap">
            <div>
              <div className="font-bold">{m.role}</div>
              {m.toolInvocations ? (
                {JSON.stringify(m.toolInvocations, null, 2)}</pre>
              ) : (
                <p>{m.content}
              )}
            </div>
          </div>
        ))}
      </div>

      <form onSubmit={handleSubmit}>
        <input
          className="fixed bottom-0 w-full max-w-md p-2 mb-8 border border-gray-300 rounded shadow-xl"
          value={input}
          placeholder="Say something..."
          onChange={handleInputChange}
        />
      </form>
    </div>
  );
}
```

## Middleware

در مرحله‌ی بعد، شما باید یک `LanguageModelMiddleware` ایجاد کنید که پاسخ‌های دستیار را در فضای ذخیره‌سازی کلید-مقدار (KV) کش کند.
`LanguageModelMiddleware` دو متد دارد: `wrapGenerate` و `wrapStream`.

`wrapGenerate` زمانی فراخوانی می‌شود که از توابع `generateText` و `generateObject` استفاده شود، و در این حالت می‌توان پاسخ را مستقیماً کش کرد.

در مقابل، `wrapStream` زمانی استفاده می‌شود که از `streamText` یا `streamObject` استفاده شود. در این حالت، شما آرایه‌ای از بخش‌های استریم‌شده را کش می‌کنید.

می‌توان با استفاده از تابع `simulateReadableStream`، از پاسخ کش‌شده یک `ReadableStream` شبیه‌سازی‌شده ساخت که پاسخ را chunk به chunk بازمی‌گرداند، انگار که مدل آن را در لحظه تولید می‌کند.
برای کنترل نحوه‌ی شبیه‌سازی استریم، می‌توان از دو پارامتر `initialDelayInMs` (تأخیر اولیه پیش از ارسال اولین chunk) و `chunkDelayInMs` (تأخیر بین ارسال هر chunk) استفاده کرد.
به این ترتیب، پاسخ کش‌شده به‌صورت تدریجی و مشابه تولید زنده LLM، به کاربر بازگردانده می‌شود.

قطعه کد زیر را در مسیر `ai/middleware.ts` قرار دهید:

```js
// npm i ioredis

import Redis from 'ioredis';
import {
  type LanguageModelV1,
  type LanguageModelV1Middleware,
  type LanguageModelV1StreamPart,
  simulateReadableStream,
} from 'ai';

const redis = new Redis(process.env.KV_URL!); 

export const cacheMiddleware: LanguageModelV1Middleware = {
  wrapGenerate: async ({ doGenerate, params }) => {
    const cacheKey = JSON.stringify(params);

    const cachedRaw = await redis.get(cacheKey);
    const cached = cachedRaw ? JSON.parse(cachedRaw) as Awaited<ReturnType<LanguageModelV1['doGenerate']>> : null;

    if (cached !== null) {
      return {
        ...cached,
        response: {
          ...cached.response,
          timestamp: cached?.response?.timestamp
            ? new Date(cached?.response?.timestamp)
            : undefined,
        },
      };
    }

    const result = await doGenerate();
    redis.set(cacheKey, JSON.stringify(result));
    return result;
  },

  wrapStream: async ({ doStream, params }) => {
    const cacheKey = JSON.stringify(params);

    const cachedRaw = await redis.get(cacheKey);
    const cached = cachedRaw ? JSON.parse(cachedRaw) as LanguageModelV1StreamPart[] : null;

    if (cached !== null) {
      const formattedChunks = cached.map(p => {
        if (p.type === 'response-metadata' && p.timestamp) {
          return { ...p, timestamp: new Date(p.timestamp) };
        } else return p;
      });

      return {
        stream: simulateReadableStream({
          initialDelayInMs: 0,
          chunkDelayInMs: 10,
          chunks: formattedChunks,
        }),
        rawCall: { rawPrompt: null, rawSettings: {} },
      };
    }

    const { stream, ...rest } = await doStream();

    const fullResponse: LanguageModelV1StreamPart[] = [];

    const transformStream = new TransformStream<
      LanguageModelV1StreamPart,
      LanguageModelV1StreamPart
    >({
      transform(chunk, controller) {
        fullResponse.push(chunk);
        controller.enqueue(chunk);
      },
      flush() {
        redis.set(cacheKey, JSON.stringify(fullResponse));
      },
    });

    return {
      stream: stream.pipeThrough(transformStream),
      ...rest,
    };
  },
};
```

> متغیر محیطی `KV_URL` باید به URL دیتابیس Redis شما اشاره کند.
> برای اتصال به دیتابیس Redis می‌توانید از [دیتابیس ردیس لیارا](https://docs.liara.ir/landing/%D9%87%D8%A7%D8%B3%D8%AA-%D8%A7%D8%A8%D8%B1%DB%8C-redis/)، استفاده کنید.

## سرور

در نهایت، باید یک  API route به نام `api/chat` ایجاد کنید تا پیام‌ها و پاسخ‌های دستیار را مدیریت کند. برای استفاده از cache middleware، می‌توانید مدل را با استفاده از تابع `wrapLanguageModel` پیکربندی کرده و middleware را به عنوان آرگومان به آن منتقل کنید.

در مسیر `app/api/chat/route.ts`، کد زیر را قرار دهید:

```js
// npm i @ai-sdk/openai@^1 ai@^4 zod

import { createOpenAI } from '@ai-sdk/openai'
import { cacheMiddleware } from '@/ai/middleware';
import { wrapLanguageModel, streamText, tool } from 'ai';
import { z } from 'zod';

const my_model = createOpenAI({

  baseURL: process.env.BASE_URL!,
  apiKey: process.env.LIARA_API_KEY!,
});

const wrappedModel = wrapLanguageModel({
  model: my_model('openai/gpt-4o-mini'),
  middleware: cacheMiddleware,
});


export async function POST(req: Request) {
  const { messages } = await req.json();

  const result = streamText({
    model: wrappedModel,
    messages,
    tools: {
      weather: tool({
        description: 'Get the weather in a location',
        parameters: z.object({
          location: z.string().describe('The location to get the weather for'),
        }),
        execute: async ({ location }) => ({
          location,
          temperature: 72 + Math.floor(Math.random() * 21) - 10,
        }),
      }),
    },
  });
  return result.toDataStreamResponse();
}
```

> متغیرهای محیطی `BASE_URL` و `LIARA_API_KEY` همان baseUrl [سرویس هوش مصنوعی لیارا](https://docs.liara.ir/products/ai/) و [کلید API لیارا](https://docs.liara.ir/references/api/about/#api-access-key) هستند که باید در بخش متغیرهای محیطی برنامه خود، آن‌ها را تنظیم کنید.
> پروژه فوق را می‌توانید به‌صورت کامل در [گیت‌هاب لیارا](https://github.com/liara-cloud/ai-sdk-examples/tree/master/NextJS/caching-middleware)، مشاهده کنید.

## all links

[All links of docs](https://docs.liara.ir/all-links-llms.txt)
