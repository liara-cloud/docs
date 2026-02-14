Original link: https://docs.liara.ir/ai/ai-sdk-core/testing/

# آزمایش و تست هوش مصنوعی با AI SDK

آزمایش و تست LLMها می‌تواند چالش‌برانگیز باشد، زیرا این مدل‌ها غیرقطعی (non-deterministic) هستند و فراخوانی آن‌ها نیز فرایندی کند و پرهزینه محسوب می‌شود.  
برای این‌که بتوانید کد خود را که از AI SDK استفاده می‌کند به‌صورت unit آزمایش کنید، AI SDK Core شامل mock providers و ابزارهای کمکی برای تست است. شما می‌توانید ابزارهای کمکی زیر را از `ai/test` به درون برنامه خود import کنید:

- `MockEmbeddingModelV1`: یک مدل embedding شبیه‌سازی‌شده بر اساس مشخصات embedding model v1
- `MockLanguageModelV1`: یک LLM شبیه‌سازی‌شده بر اساس مشخصات language model v1
- `mockId`: تولید ID عدد صحیح به صورت افزایشی
- `mockValues`: پیمایش بر روی یک آرایه از مقادیر در هر فراخوانی (زمانی که آرایه به پایان برسد، آخرین مقدار را بازمی‌گرداند)
- `simulateReadableStream`: شبیه‌سازی یک استریم readable همراه با تاخیر

با استفاده از mock providerها و ابزارهای کمکی تست، شما می‌توانید خروجی AI SDK را کنترل کرده و کد خود را به‌صورت تکرارپذیر و قطعی (deterministic)، بدون نیاز به فراخوانی مستقیم یک ارائه‌دهنده LLM، آزمایش کنید.

## مثال‌ها

شما می‌توانید از ابزارهای کمکی تست (test helperها) همراه با توابع AI Core در unit testهای خود استفاده کنید:

## generateText

```js
// npm i ai@^4
import { generateText } from 'ai';
import { MockLanguageModelV1 } from 'ai/test';

const result = await generateText({
  model: new MockLanguageModelV1({
    doGenerate: async () => ({
      rawCall: { rawPrompt: null, rawSettings: {} },
      finishReason: 'stop',
      usage: { promptTokens: 10, completionTokens: 20 },
      text: `Hello, world!`,
    }),
  }),
  prompt: 'Hello, test!',
});
```

## streamText

```js
// npm i ai@^4
import { streamText, simulateReadableStream } from 'ai';
import { MockLanguageModelV1 } from 'ai/test';

const result = streamText({
  model: new MockLanguageModelV1({
    doStream: async () => ({
      stream: simulateReadableStream({
        chunks: [
          { type: 'text-delta', textDelta: 'Hello' },
          { type: 'text-delta', textDelta: ', ' },
          { type: 'text-delta', textDelta: `world!` },
          {
            type: 'finish',
            finishReason: 'stop',
            logprobs: undefined,
            usage: { completionTokens: 10, promptTokens: 3 },
          },
        ],
      }),
      rawCall: { rawPrompt: null, rawSettings: {} },
    }),
  }),
  prompt: 'Hello, test!',
});
```

## generateObject

```js
import { generateObject } from 'ai';
import { MockLanguageModelV1 } from 'ai/test';
import { z } from 'zod';

const result = await generateObject({
  model: new MockLanguageModelV1({
    defaultObjectGenerationMode: 'json',
    doGenerate: async () => ({
      rawCall: { rawPrompt: null, rawSettings: {} },
      finishReason: 'stop',
      usage: { promptTokens: 10, completionTokens: 20 },
      text: `{"content":"Hello, world!"}`,
    }),
  }),
  schema: z.object({ content: z.string() }),
  prompt: 'Hello, test!',
});
```

## streamObject

```js
import { streamObject, simulateReadableStream } from 'ai';
import { MockLanguageModelV1 } from 'ai/test';
import { z } from 'zod';

const result = streamObject({
  model: new MockLanguageModelV1({
    defaultObjectGenerationMode: 'json',
    doStream: async () => ({
      stream: simulateReadableStream({
        chunks: [
          { type: 'text-delta', textDelta: '{ ' },
          { type: 'text-delta', textDelta: '"content": ' },
          { type: 'text-delta', textDelta: `"Hello, ` },
          { type: 'text-delta', textDelta: `world` },
          { type: 'text-delta', textDelta: `!"` },
          { type: 'text-delta', textDelta: ' }' },
          {
            type: 'finish',
            finishReason: 'stop',
            logprobs: undefined,
            usage: { completionTokens: 10, promptTokens: 3 },
          },
        ],
      }),
      rawCall: { rawPrompt: null, rawSettings: {} },
    }),
  }),
  schema: z.object({ content: z.string() }),
  prompt: 'Hello, test!',
});
```

## شبیه سازی پاسخ های پروتکل Data Stream

شما می‌توانید برای آزمایش (testing)، اشکال‌زدایی (debugging) یا نمایش (demonstration)، پاسخ‌های پروتکل Data Stream را شبیه‌سازی کنید.  
در ادامه، یک مثال در فریم‌ورک NextJS قرار گرفته است (می‌توانید قطعه کد را در یک فایل `route.ts` قرار دهید):

```js
import { simulateReadableStream } from 'ai';

export async function POST(req: Request) {
  return new Response(
    simulateReadableStream({
      initialDelayInMs: 1000, // Delay before the first chunk
      chunkDelayInMs: 300, // Delay between chunks
      chunks: [
        `0:"This"\n`,
        `0:" is an"\n`,
        `0:"example."\n`,
        `e:{"finishReason":"stop","usage":{"promptTokens":20,"completionTokens":50},"isContinued":false}\n`,
        `d:{"finishReason":"stop","usage":{"promptTokens":20,"completionTokens":50}}\n`,
      ],
    }).pipeThrough(new TextEncoderStream()),
    {
      status: 200,
      headers: {
        'X-Vercel-AI-Data-Stream': 'v1',
        'Content-Type': 'text/plain; charset=utf-8',
      },
    },
  );
}
```

## all links

[All links of docs](https://docs.liara.ir/all-links-llms.txt)
