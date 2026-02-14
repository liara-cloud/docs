Original link: https://docs.liara.ir/ai/cookbook/nodejs/generate-text-with-chat-prompt/

# تولید متن با ورودی در NodeJS با هوش مصنوعی

گاهی اوقات ممکن است بخواهید متنی را بر اساس یک سلسله پیام تولید کنید.  
Chat Completion این امکان را فراهم می‌سازد که بر پایه‌ی یک رشته از پیام‌ها، متن تولید شود. این رشته پیام‌ها می‌تواند هر نوع تعاملی میان چندین سیستم مختلف باشد، اما رایج‌ترین و قابل درک‌ترین کاربرد آن، یک گفت‌وگو بین کاربر و LLM است.

یک فایل به نام `main.js` در پوشه پروژه خود ایجاد کنید و کد زیر را در آن قرار دهید:

```js
// npm i @ai-sdk/openai@^1 ai@^4 dotenv

import { generateText } from 'ai';
import { createOpenAI } from '@ai-sdk/openai';
import { config } from 'dotenv';

config();
const my_model = createOpenAI({
  baseURL: process.env.BASE_URL,
  apiKey: process.env.LIARA_API_KEY,
});

const result = await generateText({
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

console.log(result.text);
```

> متغیرهای محیطی `BASE_URL` و `LIARA_API_KEY` همان baseUrl [سرویس هوش مصنوعی لیارا](https://liara.ir/products/ai/) و [کلید API لیارا](https://docs.liara.ir/references/api/about/#api-access-key) هستند که باید در بخش متغیرهای محیطی برنامه خود، آن‌ها را تنظیم کنید.  
> پروژه فوق را می‌توانید به‌صورت کامل در [گیت‌هاب لیارا](https://github.com/liara-cloud/ai-sdk-examples/tree/master/NodeJS/generate-text-with-chat-prompt)، مشاهده کنید.

## all links

[All links of docs](https://docs.liara.ir/all-links-llms.txt)
