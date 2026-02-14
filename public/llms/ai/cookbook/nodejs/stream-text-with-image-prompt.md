Original link: https://docs.liara.ir/ai/cookbook/nodejs/stream-text-with-image-prompt/

# استریم متن با ورودی عکس در NodeJS با هوش مصنوعی

برخی از LLMها می‌توانند تصاویر را همراه با پرامپت‌های متنی تحلیل کنند تا پاسخ‌هایی در مورد محتوای بصری تولید نمایند. این رویکرد Multimodal امکان تعاملات بهتری را فراهم می‌کند؛ جایی که می‌توانید درباره‌ی تصاویر سؤال بپرسید، توصیف آن‌ها را درخواست کنید یا جزئیات بصری را تحلیل نمایید. ترکیب ورودی‌های تصویری و متنی، زمینه را برای کاربردهای پیشرفته‌تر هوش مصنوعی مانند پاسخ‌گویی به سؤالات بصری و تحلیل تصویر فراهم می‌سازد.

یک فایل به نام `main.js` در پوشه پروژه خود ایجاد کنید و کد زیر را در آن قرار دهید:

```js
// npm i @ai-sdk/openai@^1 ai@^4 dotenv

import { streamText } from 'ai';
import { createOpenAI } from '@ai-sdk/openai';
import { config } from 'dotenv';
import fs from 'node:fs';

config();
const my_model = createOpenAI({
  baseURL: process.env.BASE_URL,
  apiKey: process.env.LIARA_API_KEY,
});
 
async function main() {
  const result = streamText({
    model: my_model('openai/gpt-4o-mini'),
    messages: [
      {
        role: 'user',
        content: [
          { type: 'text', text: 'Describe the image in detail.' },
          { type: 'image', image: fs.readFileSync('./data/cool-dog.jpg') },
        ],
      },
    ],
  });

  for await (const textPart of result.textStream) {
    process.stdout.write(textPart);
  }
}

main().catch(console.error);
```

> متغیرهای محیطی `BASE_URL` و `LIARA_API_KEY` همان baseUrl [سرویس هوش مصنوعی لیارا](https://liara.ir/products/ai/) و [کلید API لیارا](https://docs.liara.ir/references/api/about/#api-access-key) هستند که باید در بخش متغیرهای محیطی برنامه خود، آن‌ها را تنظیم کنید.  
> پروژه فوق را می‌توانید به‌صورت کامل در [گیت‌هاب لیارا](https://github.com/liara-cloud/ai-sdk-examples/tree/master/NodeJS/stream-text-with-image-prompt)، مشاهده کنید.

## all links

[All links of docs](https://docs.liara.ir/all-links-llms.txt)
