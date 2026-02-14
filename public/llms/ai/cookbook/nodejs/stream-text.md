Original link: https://docs.liara.ir/ai/cookbook/nodejs/stream-text/

# استریم متن در NodeJS با هوش مصنوعی

تولید متن ممکن است گاهی زمان‌بر باشد، مخصوصاً زمانی که چند پاراگراف تولید می‌شود. در چنین مواردی، استریم متن به سمت کلاینت مفید است. این روش به کلاینت اجازه می‌دهد که متن تولیدشده را هم‌زمان در حین تولید ادامه آن، نمایش دهد، به‌جای اینکه کاربر منتظر بماند تا کل متن تولید شده و سپس نمایش داده شود.

## بدون reader

یک فایل به نام `main.js` در پوشه پروژه خود ایجاد کنید و کد زیر را در آن قرار دهید:

```js
// npm i @ai-sdk/openai@^1 ai@^4 dotenv

import { streamText } from 'ai';
import { createOpenAI } from '@ai-sdk/openai';
import { config } from 'dotenv';

config();
const my_model = createOpenAI({
  baseURL: process.env.BASE_URL,
  apiKey: process.env.LIARA_API_KEY,
});
 
const result = streamText({
  model: my_model('openai/gpt-4o-mini'),
  maxTokens: 512,
  temperature: 0.3,
  maxRetries: 5,
  prompt: 'Invent a new holiday and describe its traditions.',
});

for await (const textPart of result.textStream) {
  console.log(textPart);
}
```

## با استفاده از reader

یک فایل به نام `main.js` در پوشه پروژه خود ایجاد کنید و کد زیر را در آن قرار دهید:

```js
// npm i @ai-sdk/openai@^1 ai@^4 dotenv

import { streamText } from 'ai';
import { createOpenAI } from '@ai-sdk/openai';
import { config } from 'dotenv';

config();
const my_model = createOpenAI({
  baseURL: process.env.BASE_URL,
  apiKey: process.env.LIARA_API_KEY,
});
 
const result = streamText({
  model: my_model('openai/gpt-4o-mini'),
  maxTokens: 512,
  temperature: 0.3,
  maxRetries: 5,
  prompt: 'Invent a new holiday and describe its traditions.',
});

const reader = result.textStream.getReader();

while (true) {
  const { done, value } = await reader.read();
  if (done) {
    break;
  }
  console.log(value);
}
```

> متغیرهای محیطی `BASE_URL` و `LIARA_API_KEY` همان baseUrl [سرویس هوش مصنوعی لیارا](https://docs.liara.ir/products/ai/) و [کلید API لیارا](https://docs.liara.ir/references/api/about/#api-access-key) هستند که باید در بخش متغیرهای محیطی برنامه خود، آن‌ها را تنظیم کنید.  
> پروژه فوق را می‌توانید به‌صورت کامل در [گیت‌هاب لیارا](https://github.com/liara-cloud/ai-sdk-examples/tree/master/NodeJS/stream-text)، مشاهده کنید.

## all links

[All links of docs](https://docs.liara.ir/all-links-llms.txt)
