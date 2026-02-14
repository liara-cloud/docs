Original link: https://docs.liara.ir/ai/cookbook/api-servers/nest/

# اتصال به هوش مصنوعی در سرور NestJS

می‌توانید از AI SDK در یک سرور NestJS برای تولید و ارسال متن و objectها به‌صورت استریم به سمت کلاینت، استفاده کنید.

## مثال‌ها

مثال‌های زیر،  
نشان می‌دهند که چگونه می‌توانید یک کنترلر NestJS ایجاد کنید که از AI SDK برای استریم متن و آبجکت‌ها به سمت کلاینت، استفاده می‌کند.  
می‌توانید با استفاده از دستور زیر در `curl`، سرور خود را آزمایش کنید:

```bash
curl -X POST http://localhost:3000
```

## استریم داده‌ها

می‌توانید از متد `pipeDataStreamToResponse` برای استریم داده‌ها از خروجی result استفاده کرده و سپس آن را به سمت response هدایت (pipe) کنید.

در مسیر `src/app.controller.ts` قطعه کد زیر را قرار دهید:

```js
import { Controller, Post, Res } from '@nestjs/common';
import { createOpenAI } from '@ai-sdk/openai';
import { streamText } from 'ai';
import { Response } from 'express';
import { config } from 'dotenv';
config();

const my_model = createOpenAI({
  baseURL: process.env.BASE_URL!,
  apiKey: process.env.LIARA_API_KEY!,
});

@Controller()
export class AppController {
  @Post()
  async example(@Res() res: Response) {
    const result = streamText({
      model: my_model('openai/gpt-4o-mini'),
      prompt: 'Invent a new holiday and describe its traditions.',
    });

    result.pipeDataStreamToResponse(res);
  }
}
```

> متغیرهای محیطی `BASE_URL` و `LIARA_API_KEY` همان baseUrl [https://docs.liara.ir/products/ai/](https://docs.liara.ir/products/ai/) و [https://docs.liara.ir/references/api/about/#api-access-key](https://docs.liara.ir/references/api/about/#api-access-key) هستند که باید در بخش متغیرهای محیطی برنامه خود، آن‌ها را تنظیم کنید.

## ارسال داده‌های سفارشی

متد `pipeDataStreamToResponse` می‌تواند برای ارسال داده‌های سفارشی به کلاینت مورد استفاده قرار گیرد.

```js
// curl -X POST http://localhost:3000/stream-data
import { Controller, Post, Res } from '@nestjs/common';
import { createOpenAI } from '@ai-sdk/openai';
import { pipeDataStreamToResponse, streamText } from 'ai';
import { Response } from 'express';
import { config } from 'dotenv';
config();

const my_model = createOpenAI({
  baseURL: process.env.BASE_URL!,
  apiKey: process.env.LIARA_API_KEY!,
});

@Controller()
export class AppController {
  @Post('/stream-data')
  async streamData(@Res() res: Response) {
    pipeDataStreamToResponse(res, {
      execute: async (dataStreamWriter) => {
        dataStreamWriter.writeData('initialized call');

        const result = streamText({
          model: my_model('openai/gpt-4o-mini'),
          prompt: 'Invent a new holiday and describe its traditions.',
        });

        result.mergeIntoDataStream(dataStreamWriter);
      },
      onError: (error) => {
        // Error messages are masked by default for security reasons.
        // If you want to expose the error message to the client, you can do so here:
        return error instanceof Error ? error.message : String(error);
      },
    });
  }
}
```

## استریم متن

می‌توانید با استفاده از متد `pipeTextStreamToResponse`، یک استریم متنی به کلاینت ارسال کنید.

```js
import { Controller, Post, Res } from '@nestjs/common';
import { createOpenAI } from '@ai-sdk/openai';
import { streamText } from 'ai';
import { Response } from 'express';
import { config } from 'dotenv';
config();

const my_model = createOpenAI({
  baseURL: process.env.BASE_URL!,
  apiKey: process.env.LIARA_API_KEY!,
});

@Controller()
export class AppController {
  @Post()
  async example(@Res() res: Response) {
    const result = streamText({
      model: my_model('openai/gpt-4o-mini'),
      prompt: 'Invent a new holiday and describe its traditions.',
    });

    result.pipeTextStreamToResponse(res);
  }
}
```

> پروژه فوق را می‌توانید به‌صورت کامل در [https://github.com/liara-cloud/ai-sdk-examples/tree/master/API-Servers/nest](https://github.com/liara-cloud/ai-sdk-examples/tree/master/API-Servers/nest)، مشاهده کنید.

## all links

[All links of docs](https://docs.liara.ir/all-links-llms.txt)
