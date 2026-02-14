Original link: https://docs.liara.ir/ai/cookbook/nodejs/intercept-fetch-requests/

# رهگیری درخواست‌های Fetch در NodeJS با هوش مصنوعی

بسیاری از LLMها امکان تنظیم تابع `fetch` سفارشی را از طریق آرگومان `fetch` در factory function خود فراهم می‌کنند.  
تابع `fetch` سفارشی می‌تواند برای رهگیری و اصلاح درخواست‌ها پیش از ارسال به API مدل، و همچنین برای رهگیری و اصلاح پاسخ‌ها پیش از بازگشت آن‌ها به caller مورد استفاده قرار گیرد.

برخی از کاربردهای رهگیری درخواست‌ها عبارت‌اند از:

- ثبت لاگ (Logging) درخواست‌ها و پاسخ‌ها
- افزودن هدرهای احراز هویت
- اصلاح بدنهٔ درخواست‌ها
- کش کردن (Caching) پاسخ‌ها
- استفاده از یک کلاینت HTTP سفارشی

## مثال

یک فایل به نام `main.js` در پوشه پروژه خود ایجاد کنید و کد زیر را در آن قرار دهید:

```js
// npm i @ai-sdk/openai@^1 ai@^4 dotenv zod 

import { generateText } from 'ai';
import { createOpenAI } from '@ai-sdk/openai';
import { config } from 'dotenv';

config();
const my_model = createOpenAI({
  baseURL: process.env.BASE_URL,
  apiKey: process.env.LIARA_API_KEY,

  // example fetch wrapper that logs the input to the API call:
  fetch: async (url, options) => {
    console.log('URL', url);
    console.log('Headers', JSON.stringify(options?.headers ?? {}, null, 2));
    console.log(
      `Body ${JSON.stringify(
        options?.body ? JSON.parse(options.body) : {},
        null,
        2
      )}`,
    );
    return await fetch(url, options);
  },
});


const { text } = await generateText({
  model: my_model('openai/gpt-4o-mini'),
  prompt: 'Why is the sky blue?',
});

console.log(text);
```

> متغیرهای محیطی `BASE_URL` و `LIARA_API_KEY` همان baseUrl [سرویس هوش مصنوعی لیارا](https://liara.ir/products/ai/) و [کلید API لیارا](https://docs.liara.ir/references/api/about/#api-access-key) هستند که باید در بخش متغیرهای محیطی برنامه خود، آن‌ها را تنظیم کنید.  
> پروژه فوق را می‌توانید به‌صورت کامل در [گیت‌هاب لیارا](https://github.com/liara-cloud/ai-sdk-examples/tree/master/NodeJS/intercept-fetch-requests)، مشاهده کنید.

## all links

[All links of docs](https://docs.liara.ir/all-links-llms.txt)
