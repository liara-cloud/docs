Original link: https://docs.liara.ir/ai/cookbook/openai-gpt-4-1/

# شروع به کار با OpenAI GPT 4.1

مدل GPT-4.1 ارائه شده توسط OpenAI یکی از بزرگ‌ترین و پیشرفته‌ترین مدل‌های این شرکت است. GPT‑4.1 گامی رو به جلو در مقیاس‌پذیری pretraining و post-training به شمار می‌آید. با گسترش یادگیری بدون نظارت، GPT‑4.1 توانایی بهتری در شناسایی الگوها، ایجاد ارتباط میان مفاهیم و تولید خلاقانه دارد (بدون اینکه الزاماً استدلال کند).

بر اساس آزمایش‌های اولیه، ممکن است توسعه‌دهندگان، GPT‑4.1 را در کارهایی مفید بیابند که نیاز به هوش هیجانی بالا و خلاقیت وجود دارد؛ مانند کمک در نوشتن، ارتباطات، یادگیری، مربی‌گری و ایده‌پردازی. این مدل همچنین توانایی‌های چشمگیری در برنامه‌ریزی از خود نشان داده است.

## مهندسی پرامپت در GPT-4.1
GPT-4.1 با رویکرد زیر بهترین عملکرد را از خود نشان می‌دهد:

- شفاف و دقیق باشید: GPT-4.1 به پرامپت‌های مستقیم و با ساختار مشخص، پاسخ بهتری می‌دهد
- از جداکننده‌ها برای افزایش خوانایی استفاده کنید: برای مشخص‌کردن بخش‌های مختلف ورودی، از جداکننده‌هایی مانند `"""`، تگ‌های XML، یا عنوان‌ها استفاده کنید

## شروع به کار با AI SDK

قبل از هرچیزی، با اجرای دستور زیر در دایرکتوری مدنظرتان، ماژول‌های مورد نیاز را نصب کنید: 

```js
npm install @ai-sdk/openai@^1 ai@^4 zod
```

اکنون، تمامی کارها انجام شده است و
قطعه کد زیر تمام چیزی است که برای اتصال به OpenAI GPT-4.1 با استفاده از AI SDK نیاز دارید:

```js
import { generateText  } from 'ai';
import { createOpenAI } from '@ai-sdk/openai';


const my_model = createOpenAI({
    baseURL: "https://docs.liara.ir",
    apiKey: "<LIARA_API_KEY>",
});

const { text } = await generateText ({
  model: my_model('openai/gpt-4.1'),
  prompt: 'Explain the concept of quantum entanglement.',
});

console.log(text);

```

در قطعه کد‌ فوق، به‌جای `<baseUrl>`، آدرس سرویس هوش مصنوعی خود را قرار دهید و به‌جای `<LIARA_API_TOKEN>`، کلید API کنسول خود را وارد کنید.

## تولید داده‌های ساختاریافته

اگرچه تولید متن خالی، کاربردهای زیادی دارد، اما در بسیاری از موارد ممکن است نیاز داشته باشید داده‌ی ساختاریافته‌ی JSON تولید کنید. به عنوان مثال، ممکن است بخواهید اطلاعاتی را از یک متن استخراج کنید، داده‌ها را دسته‌بندی نمایید، یا داده‌های مصنوعی بسازید.

AI SDK دو تابع به نام‌های `generateObject` و `streamObject` ارائه می‌دهد که برای تولید داده‌ی ساختاریافته به کار می‌روند و امکان محدود کردن خروجی مدل به یک shcema مشخص را فراهم می‌کنند.

```js
import { generateObject } from 'ai';
import { createOpenAI } from '@ai-sdk/openai';
import { z } from 'zod';

const my_model = createOpenAI({
    baseURL: "https://docs.liara.ir",
    apiKey: "<LIARA_API_KEY>",
});

const { object } = await generateObject({
  model: my_model('openai/gpt-4.1'),
  prompt: 'Generate a Ghorme Sabzi recipe.',
   schema: z.object({
    recipe: z.object({
      name: z.string(),
      ingredients: z.array(z.object({ name: z.string(), amount: z.string() })),
      steps: z.array(z.string()),
    }),
  }),
});

console.log(object);
console.log(object.recipe.ingredients);

```

قطعه کد فوق، دستور پخت type-safe تولید می‌کند که با schema مشخص‌شده‌ی Zod مطابقت دارد. خروجی قطعه کد فوق، می‌تواند مشابه زیر باشد:

```json
{
  recipe: {
    name: 'Ghormeh Sabzi',
    ingredients: [
      [Object], [Object],
      [Object], [Object],
      [Object], [Object],
      [Object], [Object],
      [Object], [Object],
      [Object], [Object],
      [Object], [Object]
    ],
    steps: [
      'Rinse the dried kidney beans and soak them in water overnight. Drain before use. (Skip this step if using canned beans.)',
      'Heat 2 tablespoons of oil in a large pot. Add the chopped onions and sauté until golden.',
      'Add the cubed meat to the onions, then sprinkle in turmeric, salt, and pepper. Sauté for a few minutes until the meat is browned.',
      'In a separate pan, heat the rest of the oil. Add the chopped parsley, cilantro, chives (or green onions), and fenugreek leaves. Sauté the greens over medium heat for about 10-15 minutes, stirring occasionally, until fragrant and darker in color. (Add chopped spinach if using.)',
      'Add the sautéed herbs to the meat. Pour in about 4 cups of water, add the soaked beans, and bring to a boil.',
      'Reduce the heat, cover partially, and let it simmer gently for about an hour.',
      'Pierce the dried limes with a fork or knife several times and add them to the stew. Simmer for another 1-2 hours, stirring occasionally, until the meat is very tender and the stew is thickened. (Add water if it gets too dry.)',
      'Adjust salt and pepper to taste. Remove the dried limes before serving if you wish.',
      'Serve Ghormeh Sabzi hot, traditionally accompanied by steamed basmati rice.'
    ]
  }
}
[
  { name: 'Lamb or beef stew meat', amount: '500g, cubed' },
  { name: 'Dried kidney beans', amount: '1/2 cup (or 1 can, drained)' },
  { name: 'Fresh parsley', amount: '2 cups, finely chopped' },
  { name: 'Fresh cilantro', amount: '1 cup, finely chopped' },
  {
    name: 'Fresh chives or green onions',
    amount: '1 cup, finely chopped'
  },
  {
    name: 'Dried fenugreek leaves (or fresh, if available)',
    amount: '2 tablespoons'
  },

  { name: 'Onion', amount: '1 large, finely chopped' },
  {
    name: 'Dried limes (limoo amani)',
    amount: '2-3, pierced with a fork'
  },
  { name: 'Turmeric powder', amount: '1 teaspoon' },
  { name: 'Salt', amount: 'to taste' },
  { name: 'Black pepper', amount: 'to taste' },
  { name: 'Vegetable oil', amount: '3-4 tablespoons' },
  { name: 'Water', amount: '4 cups' }
]
```

## استفاده از Toolها با AI SDK

GPT-4.1 به‌صورت پیش‌فرض از قابلیت Tool Calling پشتیبانی می‌کند، که به آن اجازه می‌دهد با سیستم‌های خارجی تعامل داشته و Taskهای مستقل را اجرا کند. در ادامه، مثالی از استفاده از Tool Calling با AI SDK آمده است:

```js
import { generateText, tool } from 'ai';
import { createOpenAI } from '@ai-sdk/openai';
import { z } from 'zod';

const my_model = createOpenAI({
    baseURL: "https://docs.liara.ir",
    apiKey: "<LIARA_API_KEY>",
});

const { text } = await generateText({
  model: my_model('openai/gpt-4.1'),
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
