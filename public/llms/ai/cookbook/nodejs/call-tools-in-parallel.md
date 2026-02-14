Original link: https://docs.liara.ir/ai/cookbook/nodejs/call-tools-in-parallel/

# فراخوانی Toolها به صورت موازی در NodeJS با هوش مصنوعی

برخی از LLMها از فراخوانی Toolها به‌صورت موازی پشتیبانی می‌کنند. این قابلیت زمانی مفید است که چندین Tool مستقل از یکدیگر باشند و بتوانند در یک گام تولید، به‌صورت هم‌زمان اجرا شوند.

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

const result = await generateText({
  model: my_model('openai/gpt-4o-mini'),
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
    cityAttractions: tool({
      parameters: z.object({ city: z.string() }),
      execute: async ({ city }) => {
        if (city === 'San Francisco') {
          return {
            attractions: [
              'Golden Gate Bridge',
              'Alcatraz Island',
              "Fisherman's Wharf",
            ],
          };
        } else {
          return { attractions: [] };
        }
      },
    }),
  },
  prompt:
    'What is the weather in San Francisco and what attractions should I visit?',
});

console.log(result);
```

> متغیرهای محیطی `BASE_URL` و `LIARA_API_KEY` همان baseUrl [سرویس هوش مصنوعی لیارا](https://docs.liara.ir/products/ai/) و [کلید API لیارا](https://docs.liara.ir/references/api/about/#api-access-key) هستند که باید در بخش متغیرهای محیطی برنامه خود، آن‌ها را تنظیم کنید.
> پروژه فوق را می‌توانید به‌صورت کامل در [گیت‌هاب لیارا](https://github.com/liara-cloud/ai-sdk-examples/tree/master/NodeJS/call-tools-in-parallel)، مشاهده کنید.

## all links

[All links of docs](https://docs.liara.ir/all-links-llms.txt)
