Original link: https://docs.liara.ir/ai/cookbook/nodejs/generate-object/

# تولید آبجکت در NodeJS با هوش مصنوعی

تابع‌هایی مانند `generateText` و `streamText` امکان تولید متن غیرساختارمند را فراهم می‌کردند. با این حال، اگر بخواهید داده‌های ساختارمند مانند JSON تولید کنید، می‌توانید با استفاده از تابع `generateObject`، یک اسکیما (schema) که ساختار آبجکت موردنظر شما را توصیف می‌کند، ارائه دهید.

این تابع الزام می‌کند که اسکیما را با استفاده از کتابخانه‌ی `Zod` تعریف کنید؛ کتابخانه‌ای برای تعریف اسکیما برای آبجکت‌های جاوااسکریپت. با استفاده از `Zod`، نه‌تنها می‌توانید ساختار خروجی را مشخص کنید، بلکه می‌توانید اعتبارسنجی (validation) نیز انجام دهید تا اطمینان حاصل شود که آبجکت تولیدشده با ساختار تعیین‌شده مطابقت دارد.

یک فایل به نام `main.js` در پوشه پروژه خود ایجاد کنید و کد زیر را در آن قرار دهید:

```js
// npm i @ai-sdk/openai@^1 ai@^4 dotenv zod 

import { generateObject } from 'ai';
import { createOpenAI } from '@ai-sdk/openai';
import { config } from 'dotenv';
import { z } from 'zod';

config();

const my_model = createOpenAI({
  baseURL: process.env.BASE_URL,
  apiKey: process.env.LIARA_API_KEY,
});


const result = await generateObject({
  model: my_model('openai/gpt-4o-mini'),
  schema: z.object({
    recipe: z.object({
      name: z.string(),
      ingredients: z.array(
        z.object({
          name: z.string(),
          amount: z.string(),
        }),
      ),
      steps: z.array(z.string()),
    }),
  }),
  prompt: 'Generate a lasagna recipe.',
});

console.log(JSON.stringify(result.object.recipe, null, 2));
```

> متغیرهای محیطی `BASE_URL` و `LIARA_API_KEY` همان baseUrl [سرویس هوش مصنوعی لیارا](https://liara.ir/products/ai/) و [کلید API لیارا](https://docs.liara.ir/references/api/about/#api-access-key) هستند که باید در بخش متغیرهای محیطی برنامه خود، آن‌ها را تنظیم کنید.  
> پروژه فوق را می‌توانید به‌صورت کامل در [گیت‌هاب لیارا](https://github.com/liara-cloud/ai-sdk-examples/tree/master/NodeJS/generate-object)، مشاهده کنید.

## all links

[All links of docs](https://docs.liara.ir/all-links-llms.txt)
