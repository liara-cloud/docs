Original link: https://docs.liara.ir/ai/cookbook/deepseek-r1/

# شروع به کار با DeepSeek R1

`DeepSeek R1` مجموعه‌ای از مدل‌های پیشرفته هوش مصنوعی است که برای انجام Taskهای پیچیده استدلالی در حوزه‌های علم، برنامه‌نویسی، و ریاضیات طراحی شده‌اند. این مدل‌ها به‌گونه‌ای بهینه‌سازی شده‌اند که «پیش از پاسخ‌گویی فکر کنند»، به این معنا که زنجیره‌ای از تفکر درونی دقیق را برای حل مسائل دشوار تولید می‌کنند.

## مهندسی پرامپت در DeepSeek R1
مدل‌ `DeepSeek R1` در مواجهه با دستورات ساختارمند و صریح، عملکرد بسیار خوبی دارد. برای دستیابی به بهترین نتایج، رعایت نکات زیر توصیه می‌شود:

- از تگ‌های `&lt;think&gt;` برای استدلال و `&lt;answer&gt;` برای ارائه‌ی نتیجه‌ی نهایی استفاده کنید
- از ارائه‌ی نمونه‌های متعدد (few-shot prompting) پرهیز کنید، زیرا ممکن است باعث کاهش عملکرد مدل شود. در عوض، مسئله را به‌صورت مستقیم بیان کنید
- با تعریف فرمت خروجی مورد نظر (مانند markdown یا تگ‌های شبیه به XML)، مدل را در جهت ارائه‌ی پاسخ دقیق راهنمایی کنید

## شروع به کار با AI SDK

قبل از هرچیزی، با اجرای دستور زیر در دایرکتوری مدنظرتان، ماژول‌های مورد نیاز را نصب کنید: 

```js
npm install @ai-sdk/deepseek@^1 ai@^4 zod
```

اکنون، تمامی کارها انجام شده است و
قطعه کد زیر تمام چیزی است که برای اتصال به `DeepSeek R1` با استفاده از AI SDK نیاز دارید:

```js
import { generateText  } from 'ai';
import { createDeepSeek } from '@ai-sdk/deepseek';


const my_model = createDeepSeek({
    baseURL: "<baseUrl>",
    apiKey: "<LIARA_API_KEY>",
});

const { text } = await generateText ({
  model: my_model('deepseek/deepseek-r1-distill-llama-70b'),
  prompt: 'Explain the concept of quantum entanglement.',
});

console.log(text);

```

در قطعه کد‌ فوق، به‌جای `&lt;baseUrl&gt;`، آدرس سرویس هوش مصنوعی خود را قرار دهید و به‌جای `&lt;LIARA_API_TOKEN&gt;`، کلید API کنسول خود را وارد کنید.

## تولید داده‌های ساختاریافته

اگرچه تولید متن خالی، کاربردهای زیادی دارد، اما در بسیاری از موارد ممکن است نیاز داشته باشید داده‌ی ساختاریافته‌ی JSON تولید کنید. به عنوان مثال، ممکن است بخواهید اطلاعاتی را از یک متن استخراج کنید، داده‌ها را دسته‌بندی نمایید، یا داده‌های مصنوعی بسازید.

AI SDK دو تابع به نام‌های `generateObject` و `streamObject` ارائه می‌دهد که برای تولید داده‌ی ساختاریافته به کار می‌روند و امکان محدود کردن خروجی مدل به یک shcema مشخص را فراهم می‌کنند.

```js
import { generateObject } from 'ai';
import { createDeepSeek } from '@ai-sdk/deepseek';
import { z } from 'zod';

const my_model = createDeepSeek({
    baseURL: "<baseUrl>",
    apiKey: "<LIARA_API_KEY>",
});

const { object } = await generateObject({
  model: my_model('deepseek/deepseek-r1-distill-llama-70b'),
  prompt: 'Generate a lasagna recipe.',
   schema: z.object({
    recipe: z.object({
      name: z.string(),
      ingredients: z.array(z.object({ name: z.string(), amount: z.string() })),
      steps: z.array(z.string()),
    }),
  }),
});

console.log(object);
```

## استفاده از Toolها با AI SDK

DeepSeek R1 به‌صورت پیش‌فرض از قابلیت Tool Calling پشتیبانی می‌کند، که به آن اجازه می‌دهد با سیستم‌های خارجی تعامل داشته و Taskهای مستقل را اجرا کند. در ادامه، مثالی از استفاده از Tool Calling با AI SDK آمده است:

```js
import { generateText, tool } from 'ai';
import { createDeepSeek } from '@ai-sdk/deepseek';
import { z } from 'zod';

const my_model = createDeepSeek({
    baseURL: "<baseUrl>",
    apiKey: "<LIARA_API_KEY>",
});

const { text } = await generateText({
  model: my_model('deepseek/deepseek-r1-distill-llama-70b'),
  prompt: 'What is the weather like today in San Francisco?',
  maxSteps: 3,
  tools: {
    getWeather: tool({
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
});

console.log(text);
```

در مثال فوق، یک Tool به نام `getWeather` تعریف شده است که به مدل اجازه می‌دهد تا داده‌های آب‌و‌هوای لحظه‌ای (که برای سادگی به‌صورت شبیه‌سازی‌شده ارائه شده‌اند) را بازیابی کند. این قابلیت، توانایی مدل را برای ارائه اطلاعات دقیق و به‌روز افزایش می‌دهد.

## ساخت رابط‌های interactive

AI SDK Core می‌تواند در کنار AI SDK UI، که یکی دیگر از ماژول‌های قدرتمند AI SDK است، مورد استفاده قرار گیرد تا فرآیند ساخت رابط‌های چت، تکمیل متن، و دستیارهای interactive را در فریم‌ورک‌های محبوبی مانند NextJS , Nuxt و Svelte ساده کند.

با استفاده از سه هوک اصلی `useChat`، `useCompletion`، و `useObject` می‌توانید قابلیت‌های چت لحظه‌ای، تکمیل متن و ویژگی‌های interactive دستیار هوشمند را در برنامه‌ی خود، پیاده‌سازی کنید.

راهنمای ساخت چت‌بات در فریم‌ورک‌های مختلف، با استفاده از AI SDK، در ادامه، آمده است: 

- [NextJS App Router](https://docs.liara.ir/ai/getting-started/nextjs-app-router)
- [NextJS Pages Router](https://docs.liara.ir/ai/getting-started/nextjs-page-router)
- [Svelte](https://docs.liara.ir/ai/getting-started/svelte)
- [VueJS (Nuxt)](https://docs.liara.ir/ai/getting-started/nuxt)
- [NodeJS](https://docs.liara.ir/ai/getting-started/nodejs)
- [Expo](https://docs.liara.ir/ai/getting-started/expo)

## all links

[All links of docs](https://docs.liara.ir/all-links-llms.txt)
