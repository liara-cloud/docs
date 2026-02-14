Original link: https://docs.liara.ir/ai/cookbook/nodejs/call-tools-with-image-prompt/

# فراخوانی Toolها با ورودی عکس در NodeJS با هوش مصنوعی

برخی از LLMها که از قابلیت‌های بینایی (vision) پشتیبانی می‌کنند، تصاویر را به‌عنوان بخشی از پرامپت می‌پذیرند. در ادامه، یک نمونه از فرمتی که می‌توانید برای وارد کردن تصاویر به‌عنوان ورودی استفاده کنید، آورده شده است.

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
  messages: [
    {
      role: 'user',
      content: [
        { type: 'text', text: 'can you log this meal for me?' },
        {
          type: 'image',
          image: new URL(
            'https://media.liara.ir/ai/ai-sdk/nodejs/Cheeseburger_%2817237580619%29.jpg',
          ),
        },
      ],
    },
  ],
  tools: {
    logFood: tool({
      description: 'Log a food item',
      parameters: z.object({
        name: z.string(),
        calories: z.number(),
      }),
      execute({ name, calories }) {
        console.log(`Logged food: ${name}, Calories: ${calories}`);
      },
    }),
  },
});

```

> متغیرهای محیطی `BASE_URL` و `LIARA_API_KEY` همان baseUrl [سرویس هوش مصنوعی لیارا](https://liara.ir/products/ai/) و [کلید API لیارا](https://docs.liara.ir/references/api/about/#api-access-key) هستند که باید در بخش متغیرهای محیطی برنامه خود، آن‌ها را تنظیم کنید.  
> پروژه فوق را می‌توانید به‌صورت کامل در [گیت‌هاب لیارا](https://github.com/liara-cloud/ai-sdk-examples/tree/master/NodeJS/call-tools-with-image-prompt)، مشاهده کنید.

## all links

[All links of docs](https://docs.liara.ir/all-links-llms.txt)
