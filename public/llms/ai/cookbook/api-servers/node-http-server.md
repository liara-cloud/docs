Original link: https://docs.liara.ir/ai/cookbook/api-servers/node-http-server/

# اتصال به هوش مصنوعی در سرور HTTP مبتنی بر NodeJS

می‌توانید از AI SDK در یک سرور HTTP مبتنی بر NodeJS استفاده کنید تا متن تولید کرده و آن را به‌صورت استریم به کلاینت ارسال نمایید.

## مثال‌ها

مثال‌های زیر، یک سرور HTTP ساده راه‌اندازی می‌کنند که روی پورت `8080` در حال گوش کردن است. می‌توانید با استفاده از دستور زیر در `curl`، سرور خود را آزمایش کنید:

```bash
curl -X POST http://localhost:8080
```

## استریم داده‌ها

در مسیر `src/server.ts` قطعه کد زیر را قرار دهید:

```js
import { createOpenAI } from '@ai-sdk/openai';
import { streamText } from 'ai';
import 'dotenv/config';
import { createServer } from 'http';

const my_model = createOpenAI({
  baseURL: process.env.BASE_URL!,
  apiKey: process.env.LIARA_API_KEY!,
});

createServer(async (req, res) => {
  const result = streamText({
    model: my_model('openai/gpt-4o-mini'),
    prompt: 'Invent a new holiday and describe its traditions.',
  });

  result.pipeDataStreamToResponse(res);
}).listen(8080);
```

> متغیرهای محیطی `BASE_URL` و `LIARA_API_KEY` همان baseUrl [سرویس هوش مصنوعی لیارا](https://liara.ir/products/ai/) و [کلید API لیارا](https://docs.liara.ir/references/api/about/#api-access-key) هستند که باید در بخش متغیرهای محیطی برنامه خود، آن‌ها را تنظیم کنید.

## ارسال داده‌های سفارشی

متد `pipeDataStreamToResponse` می‌تواند برای ارسال داده‌های سفارشی به کلاینت مورد استفاده قرار گیرد.

```js
import { createOpenAI } from '@ai-sdk/openai';
import { pipeDataStreamToResponse, streamText } from 'ai';
import 'dotenv/config';
import { createServer } from 'http';

const my_model = createOpenAI({
  baseURL: process.env.BASE_URL!,
  apiKey: process.env.LIARA_API_KEY!,
});

createServer(async (req, res) => {
  // immediately start streaming the response
  pipeDataStreamToResponse(res, {
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
}).listen(8080);
```

## استریم متن

می‌توانید با استفاده از متد `pipeTextStreamToResponse`، یک استریم متنی به کلاینت ارسال کنید.

```js
import { createOpenAI } from '@ai-sdk/openai';
import { pipeDataStreamToResponse, streamText } from 'ai';
import 'dotenv/config';
import { createServer } from 'http';

const my_model = createOpenAI({
  baseURL: process.env.BASE_URL!,
  apiKey: process.env.LIARA_API_KEY!,
});

createServer(async (req, res) => {
  const result = streamText({
    model: my_model('openai/gpt-4o-mini'),
    prompt: 'Invent a new holiday and describe its traditions.',
  });

  result.pipeDataStreamToResponse(res);
}).listen(8080);
```

> پروژه فوق را می‌توانید به‌صورت کامل در [گیت‌هاب لیارا](https://github.com/liara-cloud/ai-sdk-examples/tree/master/API-Servers/nodejs-http-server)، مشاهده کنید.

## all links

[All links of docs](https://docs.liara.ir/all-links-llms.txt)
