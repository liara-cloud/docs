Original link: https://docs.liara.ir/ai/cookbook/api-servers/hono/

# اتصال به هوش مصنوعی در فریم‌ورک Hono

می‌توانید از AI SDK در یک سرور Hono استفاده کنید تا متن و آبجکت‌ها را تولید کرده و به‌صورت استریم به کلاینت ارسال نمایید.

مثال‌های زیر، یک سرور HTTP ساده راه‌اندازی می‌کنند که روی پورت `8080` در حال گوش کردن است. می‌توانید با استفاده از دستور زیر در `curl`، سرور خود را آزمایش کنید:

```bash
curl -X POST http://localhost:8080
```

## استریم داده‌ها

در مسیر `src/index.ts` قطعه کد زیر را قرار دهید:

```js
import { createOpenAI } from '@ai-sdk/openai';
import { serve } from '@hono/node-server';
import { streamText } from 'ai';
import { Hono } from 'hono';
import 'dotenv/config';

const my_model = createOpenAI({
  baseURL: process.env.BASE_URL!,
  apiKey: process.env.LIARA_API_KEY!,
});

const app = new Hono();

app.post('/', async c => {
  const result = streamText({
    model: my_model('openai/gpt-4o-mini'),
    prompt: 'Invent a new holiday and describe its traditions.',
  });

  return result.toDataStreamResponse();
});

serve({ fetch: app.fetch, port: 8080 });
```

> متغیرهای محیطی `BASE_URL` و `LIARA_API_KEY` همان baseUrl [سرویس هوش مصنوعی لیارا](https://docs.liara.ir/products/ai/) و [کلید API لیارا](https://docs.liara.ir/references/api/about/#api-access-key) هستند که باید در بخش متغیرهای محیطی برنامه خود، آن‌ها را تنظیم کنید.

## ارسال داده‌های سفارشی

متد `pipeDataStreamToResponse` می‌تواند برای ارسال داده‌های سفارشی به کلاینت مورد استفاده قرار گیرد.

```js
// curl -X POST http://localhost:8080/stream-data
import { createOpenAI } from '@ai-sdk/openai';
import { serve } from '@hono/node-server';
import { createDataStream, streamText } from 'ai';
import { Hono } from 'hono';
import { stream } from 'hono/streaming';
import 'dotenv/config';

const my_model = createOpenAI({
  baseURL: process.env.BASE_URL!,
  apiKey: process.env.LIARA_API_KEY!,
});

const app = new Hono();

app.post('/stream-data', async c => {
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
  c.header('X-Vercel-AI-Data-Stream', 'v1');
  c.header('Content-Type', 'text/plain; charset=utf-8');

  return stream(c, stream =>
    stream.pipe(dataStream.pipeThrough(new TextEncoderStream())),
  );
});

serve({ fetch: app.fetch, port: 8080 });
```

## استریم متن

می‌توانید با استفاده از متد `toTextStreamResponse`، یک استریم متنی به کلاینت ارسال کنید.

```js
import { createOpenAI } from '@ai-sdk/openai';
import { serve } from '@hono/node-server';
import { streamText } from 'ai';
import { Hono } from 'hono';
import 'dotenv/config';

const my_model = createOpenAI({
  baseURL: process.env.BASE_URL!,
  apiKey: process.env.LIARA_API_KEY!,
});

const app = new Hono();

app.post('/', async c => {
  const result = streamText({
    model: my_model('openai/gpt-4o-mini'),
    prompt: 'Invent a new holiday and describe its traditions.',
  });

  return result.toTextStreamResponse();
});

serve({ fetch: app.fetch, port: 8080 });
```

> پروژه فوق را می‌توانید به‌صورت کامل در [گیت‌هاب لیارا](https://github.com/liara-cloud/ai-sdk-examples/tree/master/API-Servers/hono)، مشاهده کنید.

## all links

[All links of docs](https://docs.liara.ir/all-links-llms.txt)
