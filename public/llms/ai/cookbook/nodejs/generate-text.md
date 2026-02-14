Original link: https://docs.liara.ir/ai/cookbook/nodejs/generate-text/

# تولید متن در NodeJS با هوش مصنوعی

ساده‌ترین کاربرد LLMها، تولید متن بر اساس یک پرامپت (prompt) ورودی است. برای مثال، ممکن است بخواهید پاسخی به یک سؤال تولید کنید یا متنی را خلاصه نمایید. تابع `generateText` برای تولید متن بر اساس پرامپت ورودی مورد استفاده قرار می‌گیرد.

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
  prompt: 'Why is the sky blue?',
});

console.log(result);
```

> متغیرهای محیطی `BASE_URL` و `LIARA_API_KEY` همان baseUrl [سرویس هوش مصنوعی لیارا](https://liara.ir/products/ai/) و [کلید API لیارا](https://docs.liara.ir/references/api/about/#api-access-key) هستند که باید در بخش متغیرهای محیطی برنامه خود، آن‌ها را تنظیم کنید.  
> پروژه فوق را می‌توانید به‌صورت کامل در [گیت‌هاب لیارا](https://github.com/liara-cloud/ai-sdk-examples/tree/master/NodeJS/generate-text)، مشاهده کنید.

# اتصال به هوش مصنوعی در فلان

یک فایل به نام `some` در پوشه پروژه خود ایجاد کنید و کد زیر را در آن قرار دهید:

```js

```

> متغیرهای محیطی `BASE_URL` و `LIARA_API_KEY` همان baseUrl [سرویس هوش مصنوعی لیارا](https://liara.ir/products/ai/) و [کلید API لیارا](https://docs.liara.ir/references/api/about/#api-access-key) هستند که باید در بخش متغیرهای محیطی برنامه خود، آن‌ها را تنظیم کنید.  
> پروژه فوق را می‌توانید به‌صورت کامل در [گیت‌هاب لیارا](#)، مشاهده کنید.

- 

```js

```

![Image](https://media.liara.ir/)

[Video link](https://media.liara.ir/)

## all links

[All links of docs](https://docs.liara.ir/all-links-llms.txt)
