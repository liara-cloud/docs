Original link: https://docs.liara.ir/ai/cookbook/api-servers/fastify/

# اتصال به هوش مصنوعی در فریم‌ورک Fastify

می‌توانید از AI SDK در یک سرور Fastify استفاده کنید تا متن و آبجکت‌ها را تولید کرده و به‌صورت استریم به کلاینت ارسال نمایید.

مثال‌های زیر، یک سرور HTTP ساده راه‌اندازی می‌کنند که روی پورت `8080` در حال گوش کردن است. می‌توانید با استفاده از دستور زیر در `curl`، سرور خود را آزمایش کنید:

```bash
curl -X POST http://localhost:8080
```

## استریم داده‌ها

در مسیر `src/index.ts` قطعه کد زیر را قرار دهید:

```js
import { createOpenAI } from '@ai-sdk/openai';
import { streamText } from 'ai';
import Fastify from 'fastify';
import { config } from 'dotenv';

config();

const my_model = createOpenAI({
  baseURL: process.env.BASE_URL!,
  apiKey: process.env.LIARA_API_KEY!,
});

const fastify = Fastify({ logger: true });

fastify.post('/', async function (request, reply) {
  const result = streamText({
    model: my_model('openai/gpt-4o-mini'),
    prompt: 'Invent a new holiday and describe its traditions.',
  });

  reply.header('Content-Type', 'text/plain; charset=utf-8');

  return reply.send(result.toDataStream());
});

fastify.listen({ port: 8080 });
```

> متغیرهای محیطی `BASE_URL` و `LIARA_API_KEY` همان baseUrl [سرویس هوش مصنوعی لیارا](https://liara.ir/products/ai/) و [کلید API لیارا](https://docs.liara.ir/references/api/about/#api-access-key) هستند که باید در بخش متغیرهای محیطی برنامه خود، آن‌ها را تنظیم کنید.

## ارسال داده‌های سفارشی

متد `createDataStream` می‌تواند برای ارسال داده‌های سفارشی به کلاینت مورد استفاده قرار گیرد.

```js
// curl -X POST http://localhost:8080/stream-data
import { createOpenAI } from '@ai-sdk/openai';
import { createDataStream, streamText } from 'ai';
import Fastify from 'fastify';
import { config } from 'dotenv';

config();

const my_model = createOpenAI({
  baseURL: process.env.BASE_URL!,
  apiKey: process.env.LIARA_API_KEY!,
});

const fastify = Fastify({ logger: true });

fastify.post('/stream-data', async function (request, reply) {
  // immediately start streaming the response
  const dataStream = createDataStream({
    execute: async dataStreamWriter => {
      dataStreamWriter.writeData('initialized call');

      const result = streamText({
        model: my_model('openai/gpt-4o-mini'),
        prompt: 'Invent a new holiday and describe its traditions.',
      });

      result.mergeIntoDataStream(dataStreamWriter);
    },
    onError: error => {
      // Error messages are masked by default for security reasons.
      // If you want to expose the error message to the client, you can do so here:
      return error instanceof Error ? error.message : String(error);
    },
  });

  // Mark the response as a v1 data stream:
  reply.header('X-Vercel-AI-Data-Stream', 'v1');
  reply.header('Content-Type', 'text/plain; charset=utf-8');

  return reply.send(dataStream);
});

fastify.listen({ port: 8080 });
```

## استریم متن

می‌توانید با استفاده از متد `textStream`، یک استریم متنی به کلاینت ارسال کنید.

```js
import { createOpenAI } from '@ai-sdk/openai';
import { streamText } from 'ai';
import Fastify from 'fastify';
import { config } from 'dotenv';


config();

const my_model = createOpenAI({
  baseURL: process.env.BASE_URL!,
  apiKey: process.env.LIARA_API_KEY!,
});
const fastify = Fastify({ logger: true });

fastify.post('/', async function (request, reply) {
  const result = streamText({
    model: my_model('openai/gpt-4o-mini'),
    prompt: 'Invent a new holiday and describe its traditions.',
  });

  reply.header('Content-Type', 'text/plain; charset=utf-8');

  return reply.send(result.textStream);
});

fastify.listen({ port: 8080 });
```

> پروژه فوق را می‌توانید به‌صورت کامل در [گیت‌هاب لیارا](https://github.com/liara-cloud/ai-sdk-examples/tree/master/API-Servers/fastify)، مشاهده کنید.

## all links

[All links of docs](https://docs.liara.ir/all-links-llms.txt)
