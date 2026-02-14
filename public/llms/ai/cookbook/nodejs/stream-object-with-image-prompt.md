Original link: https://docs.liara.ir/ai/cookbook/nodejs/stream-object-with-image-prompt/

# استریم آبجکت با ورودی تصویر در NodeJS با هوش مصنوعی

برخی از LLM که از قابلیت‌های بینایی پشتیبانی می‌کنند، امکان دریافت تصاویر به‌عنوان بخشی از پرامپت را فراهم می‌سازند. در این حالت، می‌توانید تصویر را همراه با ورودی متنی برای مدل ارسال کنید.

در ادامه، چند نمونه از فرمت‌های مختلفی که می‌توانید برای وارد کردن تصاویر به‌عنوان ورودی استفاده کنید، آورده شده است. این فرمت‌ها به مدل اجازه می‌دهند که تصویر را تحلیل کرده و هم‌زمان با پردازش آن، آبجکت ساختارمند را به‌صورت استریمی تولید نماید.

## ورودی تصویر با URL

یک فایل به نام `main.js` در پوشه پروژه خود ایجاد کنید و کد زیر را در آن قرار دهید:

```js
// npm i @ai-sdk/openai@^1 ai@^4 dotenv zod 

import { streamObject } from 'ai';
import { createOpenAI } from '@ai-sdk/openai';
import { config } from 'dotenv';
import { z } from 'zod';

config();
const my_model = createOpenAI({
  baseURL: process.env.BASE_URL,
  apiKey: process.env.LIARA_API_KEY,
});


async function main() {
  const { partialObjectStream } = streamObject({
    model: my_model('openai/gpt-4o-mini'),
    maxTokens: 512,
    schema: z.object({
      stamps: z.array(
        z.object({
          country: z.string(),
          date: z.string(),
        }),
      ),
    }),
    messages: [
      {
        role: 'user',
        content: [
          {
            type: 'text',
            text: 'list all the stamps in these passport pages?',
          },
          {
            type: 'image',
            image: new URL(
              'https://media.liara.ir/ai/ai-sdk/cookbook/nodejs/WW2_Spanish_official_passport.jpg',
            ),
          },
        ],
      },
    ],
  });

  for await (const partialObject of partialObjectStream) {
    console.clear();
    console.log(partialObject);
  }
}

main();
```

> متغیرهای محیطی `BASE_URL` و `LIARA_API_KEY` همان baseUrl [سرویس هوش مصنوعی لیارا](https://docs.liara.ir/products/ai/) و [کلید API لیارا](https://docs.liara.ir/references/api/about/#api-access-key) هستند که باید در بخش متغیرهای محیطی برنامه خود، آن‌ها را تنظیم کنید.

## ورودی تصویر با File Buffer

یک فایل به نام `main.js` در پوشه پروژه خود ایجاد کنید و کد زیر را در آن قرار دهید:

```js
// npm i @ai-sdk/openai@^1 ai@^4 dotenv zod 

import { streamObject } from 'ai';
import { createOpenAI } from '@ai-sdk/openai';
import { config } from 'dotenv';
import { z } from 'zod';
import fs from 'node:fs';


config();
const my_model = createOpenAI({
  baseURL: process.env.BASE_URL,
  apiKey: process.env.LIARA_API_KEY,
});


async function main() {
  const { partialObjectStream } = streamObject({
    model: my_model('openai/gpt-4o-mini'),
    maxTokens: 512,
    schema: z.object({
      stamps: z.array(
        z.object({
          country: z.string(),
          date: z.string(),
        }),
      ),
    }),
    messages: [
      {
        role: 'user',
        content: [
          {
            type: 'text',
            text: 'list all the stamps in these passport pages?',
          },
          {
            type: 'image',
            image: fs.readFileSync('./data/some.jpg'),
          },
        ],
      },
    ],
  });

  for await (const partialObject of partialObjectStream) {
    console.clear();
    console.log(partialObject);
  }
}

main();

```

> پروژه فوق را می‌توانید به‌صورت کامل در [گیت‌هاب لیارا](https://github.com/liara-cloud/ai-sdk-examples/tree/master/NodeJS/stream-object-with-image-prompt)، مشاهده کنید.

## all links

[All links of docs](https://docs.liara.ir/all-links-llms.txt)
