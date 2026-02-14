Original link: https://docs.liara.ir/ai/cookbook/nodejs/generate-object-reasoning/

# تولید آبجکت با مدل استدلالی در NodeJS با هوش مصنوعی

مدل‌های استدلالی مانند R1 از DeepSeek به دلیل توانایی‌شان در درک بهتر و تولید پاسخ‌های دقیق‌تر به پرسش‌های پیچیده، محبوبیت زیادی پیدا کرده‌اند. ممکن است بخواهید از این مدل‌ها برای تولید داده‌های ساختارمند استفاده کنید. با این حال، بیشتر این مدل‌ها (مانند R1) از tool-calling یا خروجی‌های ساختارمند پشتیبانی نمی‌کنند.

یک راه‌حل این است که خروجی مدل استدلالی را از طریق یک مدل کوچک‌تر عبور دهید که قادر به تولید خروجی ساختارمند باشد (مانند gpt-4o-mini). این مدل‌های سبک‌وزن می‌توانند داده‌های ساختارمند را به‌طور کارآمد استخراج کنند و در عین حال هزینه و تأخیر پردازش بسیار کمی داشته باشند.

یک فایل به نام `main.js` در پوشه پروژه خود ایجاد کنید و کد زیر را در آن قرار دهید:

```js
// npm i @ai-sdk/openai@^1 ai@^4 dotenv zod @ai-sdk/deepseek

import { generateObject, generateText } from 'ai';
import { createOpenAI } from '@ai-sdk/openai';
import { createDeepSeek } from '@ai-sdk/deepseek';
import { config } from 'dotenv';
import { z } from 'zod';

config();

const openai_model = createOpenAI({
  baseURL: process.env.BASE_URL,
  apiKey: process.env.LIARA_API_KEY,
});

const deepseek_model = createDeepSeek({
  baseURL: process.env.BASE_URL,
  apiKey: process.env.LIARA_API_KEY,
});

async function main() {
  const { text: rawOutput } = await generateText({
    model: deepseek_model('deepseek/deepseek-r1-distill-llama-70b'),
    prompt:
      'Predict the top 3 largest city by 2050. For each, return the name, the country, the reason why it will on the list, and the estimated population in millions.',
  });

  const { object } = await generateObject({
    model: openai_model('openai/gpt-4o-mini'),
    prompt: 'Extract the desired information from this text: \n' + rawOutput,
    schema: z.object({
      name: z.string().describe('the name of the city'),
      country: z.string().describe('the name of the country'),
      reason: z
        .string()
        .describe(
          'the reason why the city will be one of the largest cities by 2050',
        ),
      estimatedPopulation: z.number(),
    }),
    output: 'array',
  });

  console.log(object);
}

main().catch(console.error);
```

> متغیرهای محیطی `BASE_URL` و `LIARA_API_KEY` همان baseUrl [سرویس هوش مصنوعی لیارا](https://docs.liara.ir/products/ai/) و [کلید API لیارا](https://docs.liara.ir/references/api/about/#api-access-key) هستند که باید در بخش متغیرهای محیطی برنامه خود، آن‌ها را تنظیم کنید.  
> پروژه فوق را می‌توانید به‌صورت کامل در [گیت‌هاب لیارا](https://github.com/liara-cloud/ai-sdk-examples/tree/master/NodeJS/generate-object-reasoning)، مشاهده کنید.

## all links

[All links of docs](https://docs.liara.ir/all-links-llms.txt)
