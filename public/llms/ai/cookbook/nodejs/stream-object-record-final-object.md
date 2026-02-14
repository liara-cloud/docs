Original link: https://docs.liara.ir/ai/cookbook/nodejs/stream-object-record-final-object/

# ثبت آبجکت نهایی پس از استریم در NodeJS با هوش مصنوعی

زمانی که در حال استریم داده‌های ساختارمند هستید، ممکن است بخواهید آبجکت نهایی را برای اهدافی مانند لاگ‌گیری یا ... ذخیره کنید.

## تابع onFinish به‌صورت Callback

شما می‌توانید از تابع `onFinish` برای ثبت آبجکت نهایی استفاده کنید. این تابع زمانی فراخوانی می‌شود که استریم به پایان برسد.  
فیلد `object` شامل آبجکت نهایی است؛ در صورتی که type validation ناموفق باشد، مقدار آن `undefined` خواهد بود. همچنین یک فیلد `error` نیز وجود دارد که در صورت بروز خطا (مثلاً زمانی که آبجکت با اسکیما مطابقت نداشته باشد)؛ حاوی جزئیات خطا خواهد بود.  

یک فایل به نام `main.js` در پوشه پروژه خود ایجاد کنید و کد زیر را در آن قرار دهید:

- ```js
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
  
  const result = streamObject({
    model: my_model('openai/gpt-4o-mini'),
    schema: z.object({
      recipe: z.object({
        name: z.string(),
        ingredients: z.array(z.string()),
        steps: z.array(z.string()),
      }),
    }),
    prompt: 'Generate a lasagna recipe.',
    onFinish({ object, error }) {
      // handle type validation failure (when the object does not match the schema):
      if (object === undefined) {
        console.error('Error:', error);
        return;
      }
  
      console.log('Final object:', JSON.stringify(object, null, 2));
    },
  });
  
  for await (const chunk of result.partialObjectStream) {}  
  ```

> متغیرهای محیطی `BASE_URL` و `LIARA_API_KEY` همان baseUrl [سرویس هوش مصنوعی لیارا](https://liara.ir/products/ai/) و [کلید API لیارا](https://docs.liara.ir/references/api/about/#api-access-key) هستند که باید در بخش متغیرهای محیطی برنامه خود، آن‌ها را تنظیم کنید.

## Object Promise

خروجی تابع `streamObject` شامل یک object promise است که پس از اتمام استریم، به آبجکت نهایی resolve می‌شود.  
اگر type validation طبق اسکیما ناموفق باشد، این promise با خطایی از نوع `TypeValidationError` رد خواهد شد.

یک فایل به نام `main.js` در پوشه پروژه خود ایجاد کنید و کد زیر را در آن قرار دهید:

- ```js
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
  
  const result = streamObject({
    model: my_model('openai/gpt-4o-mini'),
    schema: z.object({
      recipe: z.object({
        name: z.string(),
        ingredients: z.array(z.string()),
        steps: z.array(z.string()),
      }),
    }),
    prompt: 'Generate a lasagna recipe.',
  });
  
  result.object
    .then(({ recipe }) => {
      // do something with the fully typed, final object:
      console.log('Recipe:', JSON.stringify(recipe, null, 2));
    })
    .catch(error => {
      // handle type validation failure
      // (when the object does not match the schema):
      console.error(error);
    });
  
  // note: the stream needs to be consumed because of backpressure
  for await (const partialObject of result.partialObjectStream) {
  }
  ```

> پروژه فوق را می‌توانید به‌صورت کامل در [گیت‌هاب لیارا](https://github.com/liara-cloud/ai-sdk-examples/tree/master/NodeJS/stream-object-record-final-object)، مشاهده کنید.

## all links

[All links of docs](https://docs.liara.ir/all-links-llms.txt)
