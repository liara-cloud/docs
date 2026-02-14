Original link: https://docs.liara.ir/ai/cookbook/nodejs/stream-text-with-chat-prompt/

# استریم متن با ورودی در NodeJS با هوش مصنوعی

تولید متن گاهی ممکن است زمان‌بر باشد، مخصوصاً زمانی که پاسخ طولانی است. در چنین مواردی، استریم chat completion به‌صورت بلادرنگ به سمت کلاینت بسیار مفید است. این کار به کلاینت اجازه می‌دهد که پیام جدید را هم‌زمان با تولید آن توسط LLM نمایش دهد، به‌جای اینکه کاربران منتظر بمانند تا پاسخ به‌طور کامل تولید شده و سپس نمایش داده شود.

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
  maxTokens: 1024,
  system: 'You are a helpful chatbot.',
  messages: [
    {
      role: 'user',
      content: 'Hello!',
    },
    {
      role: 'assistant',
      content: 'Hello! How can I help you today?',
    },
    {
      role: 'user',
      content: 'I need help with my computer.',
    },
  ],
});

for await (const textPart of result.textStream) {
  console.log(textPart);
}
```

- متغیرهای محیطی `BASE_URL` و `LIARA_API_KEY` همان baseUrl [سرویس هوش مصنوعی لیارا](https://liara.ir/products/ai/) و [کلید API لیارا](https://docs.liara.ir/references/api/about/#api-access-key) هستند که باید در بخش متغیرهای محیطی برنامه خود، آن‌ها را تنظیم کنید.
- پروژه فوق را می‌توانید به‌صورت کامل در [گیت‌هاب لیارا](https://github.com/liara-cloud/ai-sdk-examples/tree/master/NodeJS/stream-text-with-chat-prompt)، مشاهده کنید.

## all links

[All links of docs](https://docs.liara.ir/all-links-llms.txt)
