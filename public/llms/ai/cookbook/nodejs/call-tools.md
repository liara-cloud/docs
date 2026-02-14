Original link: https://docs.liara.ir/ai/cookbook/nodejs/call-tools/

# فراخوانی Toolها در NodeJS با هوش مصنوعی

برخی از مدل‌ها به توسعه‌دهندگان اجازه می‌دهند که فهرستی از Toolها را فراهم کنند که در هر زمان از فرآیند تولید، قابل فراخوانی باشند. این قابلیت برای گسترش توانایی‌های LLM بسیار مفید است، زیرا مدل می‌تواند برای انجام منطق یا دسترسی به داده‌ها، با سیستم‌های خارجی تعامل برقرار کند.

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
    }),
  },
  prompt:
    'What is the weather in San Francisco and what attractions should I visit?',
});

console.log(result.toolResults);
```

> متغیرهای محیطی `BASE_URL` و `LIARA_API_KEY` همان baseUrl [https://docs.liara.ir/products/ai/](https://docs.liara.ir/products/ai/) و [https://docs.liara.ir/references/api/about/#api-access-key](https://docs.liara.ir/references/api/about/#api-access-key) هستند که باید در بخش متغیرهای محیطی برنامه خود، آن‌ها را تنظیم کنید.

## دسترسی به Tool Callها و Tool Resultها

اگر مدل تصمیم بگیرد که یک Tool را فراخوانی کند، یک tool call تولید خواهد کرد. شما می‌توانید با بررسی پارامتر `toolCalls` در خروجی مدل، به این فراخوانی دسترسی پیدا کنید.
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

async function main() {
  const result = await generateText({
    model: my_model('openai/gpt-4o-mini'),
    maxTokens: 512,
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
      }),
    },
    prompt:
      'What is the weather in San Francisco and what attractions should I visit?',
  });

  // typed tool calls:
  for (const toolCall of result.toolCalls) {
    switch (toolCall.toolName) {
      case 'cityAttractions': {
        toolCall.args.city; // string
        break;
      }

      case 'weather': {
        toolCall.args.location; // string
        break;
      }
    }
  }

  console.log(JSON.stringify(result, null, 2));
}

main().catch(console.error);
```

## دسترسی به Tool Results

شما می‌توانید با بررسی پارامتر `toolResults` در خروجی، به نتیجه‌ی فراخوانی Tool دسترسی پیدا کنید.
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

async function main() {
  const result = await generateText({
    model: my_model('openai/gpt-4o-mini'),
    maxTokens: 512,
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
      }),
    },
    prompt:
      'What is the weather in San Francisco and what attractions should I visit?',
  });

  // typed tool results for tools with execute method:
  for (const toolResult of result.toolResults) {
    switch (toolResult.toolName) {
      case 'weather': {
        toolResult.args.location; // string
        toolResult.result.location; // string
        toolResult.result.temperature; // number
        break;
      }
    }
  }

  console.log(JSON.stringify(result, null, 2));
}

main().catch(console.error);
```

> `toolResults`ها تنها در صورتی در دسترس خواهند بود که Tool، دارای یک تابع `execute` باشد.

> پروژه فوق را می‌توانید به‌صورت کامل در [https://docs.liara.ir/github.com/liara-cloud/ai-sdk-examples/tree/master/NodeJS/call-tools](https://github.com/liara-cloud/ai-sdk-examples/tree/master/NodeJS/call-tools)، مشاهده کنید.

## پاسخ مدل

هنگام استفاده از Toolها، توجه به این نکته مهم است که مدل به‌صورت پیش‌فرض پاسخی با نتایج Tool ارائه نمی‌دهد. دلیل این موضوع آن است که مدل، از نظر فنی، پاسخ خود به پرامپت را در قالب یک tool call تولید کرده است.
در بسیاری از کاربردها، لازم است که مدل نتایج حاصل از tool call را خلاصه کرده و آن را در زمینه‌ی پرامپت اصلی ارائه دهد. برای دستیابی به این هدف، می‌توانید از فیلد `maxSteps` استفاده کنید؛ این پارامتر به‌طور خودکار toolResultها را به مدل بازمی‌گرداند تا یک مرحله‌ی تولید دیگر را فعال کند.

## all links

[All links of docs](https://docs.liara.ir/all-links-llms.txt)
