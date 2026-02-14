Original link: https://docs.liara.ir/ai/cookbook/nodejs/stream-object/

# استریم آبجکت در NodeJS با هوش مصنوعی

تولید آبجکت گاهی ممکن است زمان‌بر باشد، مخصوصاً زمانی که در حال تولید یک اسکیما بزرگ هستید.
در Generative UI، استریم کردن آبجکت به‌صورت بلادرنگ به سمت کلاینت، بسیار مفید است، زیرا می‌توان رابط کاربری را هم‌زمان با تولید آبجکت رندر کرد.
برای این منظور می‌توانید از تابع `streamObject` استفاده کنید تا استریم‌های جزئی از آبجکت را به‌صورت مرحله‌به‌مرحله تولید نمایید.

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


const { partialObjectStream } = streamObject({
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

for await (const partialObject of partialObjectStream) {
  console.clear();
  console.log(partialObject);
}
```

> متغیرهای محیطی `BASE_URL` و `LIARA_API_KEY` همان baseUrl [سرویس هوش مصنوعی لیارا](https://docs.liara.ir/products/ai/) و [کلید API لیارا](https://docs.liara.ir/references/api/about/#api-access-key) هستند که باید در بخش متغیرهای محیطی برنامه خود، آن‌ها را تنظیم کنید.

> پروژه فوق را می‌توانید به‌صورت کامل در [گیت‌هاب لیارا](https://github.com/liara-cloud/ai-sdk-examples/tree/master/NodeJS/stream-object)، مشاهده کنید.

## all links

[All links of docs](https://docs.liara.ir/all-links-llms.txt)
