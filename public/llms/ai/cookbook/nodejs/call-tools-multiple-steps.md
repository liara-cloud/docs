Original link: https://docs.liara.ir/ai/cookbook/nodejs/call-tools-multiple-steps/

# فراخوانی Toolها در چند مرحله در NodeJS با هوش مصنوعی

مدل‌ها برای جمع‌آوری اطلاعات یا انجام کارهایی که مستقیماً در دسترس آن‌ها نیست، اقدام به فراخوانی Toolها می‌کنند. زمانی که نتایج Toolها در دسترس قرار می‌گیرند، مدل می‌تواند از آن‌ها برای تولید پاسخ دیگری استفاده کند.  
شما می‌توانید قابلیت فراخوانی چندمرحله‌ای Toolها را در تابع `generateText` با تنظیم گزینه‌ی `maxSteps` روی عددی بزرگ‌تر از `1` فعال کنید. این گزینه، حداکثر تعداد مراحل (یعنی فراخوانی‌های LLM) را مشخص می‌کند تا از وقوع حلقه‌های بی‌پایان جلوگیری شود.

یک فایل به نام `main.js` در پوشه پروژه خود ایجاد کنید و کد زیر را در آن قرار دهید:

```js
// npm i @ai-sdk/openai@^1 ai@^4 dotenv zod 

import { generateText, tool } from 'ai';
import { createOpenAI } from '@ai-sdk/openai';
import { config } from 'dotenv';
import { z } from 'zod';

config();
const my_model = createOpenAI({
  baseURL: process.env.BASE_URL,
  apiKey: process.env.LIARA_API_KEY,
});

const { text } = await generateText({
  model: my_model('openai/gpt-4o-mini'),
  maxSteps: 5,
  tools: {
    weather: tool({
      description: 'Get the weather in a location',
      parameters: z.object({
        location: z.string().describe('The location to get the weather for'),
      }),
      execute: async ({ location }) => ({
        location,
        temperature: 72 + Math.floor(Math.random() * 21) - 10,
      }),
    }),
  },
  prompt: 'What is the weather in San Francisco?',
});

console.log(text);
```

> متغیرهای محیطی `BASE_URL` و `LIARA_API_KEY` همان baseUrl [سرویس هوش مصنوعی لیارا](https://liara.ir/products/ai/) و [کلید API لیارا](https://docs.liara.ir/references/api/about/#api-access-key) هستند که باید در بخش متغیرهای محیطی برنامه خود، آن‌ها را تنظیم کنید.  
> پروژه فوق را می‌توانید به‌صورت کامل در [گیت‌هاب لیارا](https://github.com/liara-cloud/ai-sdk-examples/tree/master/NodeJS/call-tools-multiple-steps)، مشاهده کنید.

## all links

[All links of docs](https://docs.liara.ir/all-links-llms.txt)
