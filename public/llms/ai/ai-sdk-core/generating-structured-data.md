Original link: https://docs.liara.ir/ai/ai-sdk-core/generating-structured-data/

# تولید داده‌های دارای ساختار با AI

در حالی که تولید متن می‌تواند مفید باشد، use case شما احتمالاً نیازمند تولید داده‌های ساختارمند، خواهد بود. برای مثال، ممکن است بخواهید اطلاعاتی را از متن استخراج کنید، داده‌ها را طبقه‌بندی نمایید یا داده‌های ترکیبی ایجاد کنید.

بسیاری از LLMها توانایی تولید داده‌های دارای ساختار را دارند که اغلب به‌عنوان "JSON modes" یا "tools" شناخته می‌شود. با این حال، شما باید به‌صورت دستی schemaها را ارائه دهید و سپس داده‌ی تولید شده را اعتبارسنجی کنید، زیرا LLMها می‌توانند داده‌های نادرست یا ناقص تولید کنند.

AI SDK فرآیند تولید آبجکت‌های دارای ساختار را برای LLMها استانداردسازی کرده است و توابع `generateObject` و `streamObject` را به این منظور، ارائه می‌دهد. شما می‌توانید از هر دو تابع با استراتژی‌های خروجی متفاوت مانند آرایه، object، یا no-schema استفاده کنید، و همچنین از حالت‌های تولید متفاوت مانند `auto`، `tool` یا `json` بهره ببرید. برای مشخص کردن ساختار داده‌ای که می‌خواهید، می‌توانید از Zod Schema یا Valibot یا JSON استفاده کنید و LLM داده‌هایی تولید خواهد کرد که با آن ساختار مطابقت دارند.

> شما می‌توانید آبجکت‌های Zod را مستقیماً درون توابع AI SDK قرار دهید و یا اینکه از تابع کمکی `zodSchema` استفاده کنید.

> AI SDK v4 فقط از Zod v3 پشتیبانی می‌کند. اگر که از Zod v4 استفاده کنید ممکن است خطاهای اعتبارسنجی
> برای اسکیما، دریافت کنید.

## تولید آبجکت

تابع `generateObject` داده‌های ساختارمند را بر اساس یک پرامپت تولید می‌کند. schema همچنین برای اعتبارسنجی داده‌های تولید شده استفاده می‌شود تا از type safety و درستی آن اطمینان حاصل شود.

```js
// npm i @ai-sdk/openai@^1 ai@^4 dotenv zod@^3

import { generateObject } from 'ai';
import { createOpenAI } from '@ai-sdk/openai';
import { config } from 'dotenv';
import { z } from 'zod';

config();
const my_model = createOpenAI({
  baseURL: process.env.BASE_URL!,
  apiKey: process.env.LIARA_API_KEY!,
});

const { object } = await generateObject({
  model: my_model('openai/gpt-4o-mini'),
  schema: z.object({
    recipe: z.object({
      name: z.string(),
      ingredients: z.array(z.object({ name: z.string(), amount: z.string() })),
      steps: z.array(z.string()),
    }),
  }),
  prompt: 'Generate a lasagna recipe.',
});

console.log(object.recipe.steps);
```

## استریم آبجکت

با توجه به پیچیدگی return داده‌های دارای ساختار، زمان پاسخ مدل ممکن است برای use caseهای تعاملی شما، غیرقابل‌قبول باشد.  
با استفاده از تابع `streamObject`، می‌توانید پاسخ مدل را در حین تولید شدنش، استریم و دریافت کنید.  

```js
// npm i @ai-sdk/openai@^1 ai@^4 dotenv zod@^3

import { streamObject } from 'ai';
import { createOpenAI } from '@ai-sdk/openai';
import { config } from 'dotenv';
import { z } from 'zod';

config();
const my_model = createOpenAI({
  baseURL: process.env.BASE_URL!,
  apiKey: process.env.LIARA_API_KEY!,
});

const { partialObjectStream } = await streamObject({
  model: my_model('openai/gpt-4o-mini'),
  schema: z.object({
    recipe: z.object({
      name: z.string(),
      ingredients: z.array(z.object({ name: z.string(), amount: z.string() })),
      steps: z.array(z.string()),
    }),
  }),
  prompt: 'Generate a lasagna recipe.',
});

// use partialObjectStream as an async iterable
for await (const partialObject of partialObjectStream) {
  console.log(partialObject);
}
```

می‌توانید از تابع `streamObject` برای استریم UIهای تولیدشده در ترکیب با React Server Componentها یا هوک `useObject` استفاده کنید.

## onError callback

تابع `streamObject` بلافاصله شروع به استریم می‌کند. در این حین، خطاها نیز بخشی از استریم
می‌شوند و با throw نشدن، از کرش‌کردن سرورها و اتفاقات دیگر، جلوگیری می‌کنند. 
برای لاگ‌کردن خطاها، شما باید از یک callback به نام `onError` استفاده کنید که وقتی یک ارور رخ می‌دهد، فراخوانی می‌شود.

```js
// npm i @ai-sdk/openai@^1 ai@^4 dotenv zod@^3

import { streamObject } from 'ai';
import { createOpenAI } from '@ai-sdk/openai';
import { config } from 'dotenv';
import { z } from 'zod';

config();
const my_model = createOpenAI({
  baseURL: process.env.BASE_URL!,
  apiKey: process.env.LIARA_API_KEY!,
});

const result = await streamObject({
  model: my_model('openai/gpt-4o-mini'),
  schema: z.object({
    recipe: z.object({
      name: z.string(),
    }),
  }),
  prompt: 'Generate a lasagna recipe.',

  onError({ error }) {
    console.error(error); // your error logging logic here
  },
});
```

## استراتژی‌های خروجی گرفتن

هر دو تابع ذکر شده، به شما این امکان را می‌دهند که  
استراتژی‌های خروجی گرفتن متفاوتی را مانند `array`، `object` یا `no-schema` پیاده‌سازی کنید.  

### Object

استراتژی پیش‌فرض خروجی، `object` است. که داده‌های تولید شده را تحت عنوان یک آبجکت برمی‌گرداند.  
اگر که قصد دارید از این حالت پیش‌فرض استفاده کنید؛ نیازی نیست که استراتژی خروجی را مشخص کنید.  

### Array

اگر می‌خواهید که یک آرایه از objectها ایجاد کنید، می‌توانید استراتژی خروجی  را به  
`array` تنظیم کنید. وقتی که از این استراتژی خروجی، استفاده می‌کنید؛ اسکیما  
به شکل عنصر آرایه، تعریف می‌شود. با استفاده از `streamObject`، شما می‌توانید اعضای آرایه تولید شده را با استفاده از `elementStream`، استریم کنید.  

```js
// npm i @ai-sdk/openai@^1 ai@^4 dotenv zod@^3

import { streamObject } from 'ai';
import { createOpenAI } from '@ai-sdk/openai';
import { config } from 'dotenv';
import { z } from 'zod';

config();
const my_model = createOpenAI({
  baseURL: process.env.BASE_URL!,
  apiKey: process.env.LIARA_API_KEY!,
});

const { elementStream } = streamObject({
  model: my_model('openai/gpt-4o-mini'),
  output: 'array',
  schema: z.object({
    name: z.string(),
    class: z
      .string()
      .describe('Character class, e.g. warrior, mage, or thief.'),
    description: z.string(),
  }),
  prompt: 'Generate 3 hero descriptions for a fantasy role playing game.',
});

for await (const hero of elementStream) {
  console.log(hero);
}
```

### Enum

اگر که می‌خواهید یک enum مشخص تولید کنید (مثلاً در تسک‌های مربوط به طبقه‌بندی)، می‌توانید استراتژی خروجی را بر روی `enum` تنظیم کنید و یک لیست از مقادیر ممکن را در فیلدی به نام `enum` قرار دهید.  

> خروجی Enum فقط در تابع `generateObject`، در دسترس است.
```js
// npm i @ai-sdk/openai@^1 ai@^4 dotenv

import { generateObject } from 'ai';
import { createOpenAI } from '@ai-sdk/openai';
import { config } from 'dotenv';

config();
const my_model = createOpenAI({
  baseURL: process.env.BASE_URL!,
  apiKey: process.env.LIARA_API_KEY!,
});

const { object } = await generateObject({
  model: my_model('openai/gpt-4o-mini'),
  output: 'enum',
  enum: ['action', 'comedy', 'drama', 'horror', 'sci-fi'],
  prompt:
    'Classify the genre of this movie plot: ' +
    '"A group of astronauts travel through a wormhole in search of a ' +
    'new habitable planet for humanity."',
});

console.log(object) // sci-fi
```

### No Schema

در برخی از موارد، ممکن است که نخواهید از اسکیما استفاده کنید؛ به‌عنوان مثال، وقتی که  
داده‌های ورودی، درخواست کاربر هستند که ممکن است داینامیک و متفاوت از قبلی، باشد.  
در این مواقع، شما می‌توانید از خروجی `no-schema` استفاده کنید و فیلد مربوط به اسکیما را از تابع، حذف کنید.  

```js
// npm i @ai-sdk/openai@^1 ai@^4 dotenv

import { generateObject } from 'ai';
import { createOpenAI } from '@ai-sdk/openai';
import { config } from 'dotenv';

config();
const my_model = createOpenAI({
  baseURL: process.env.BASE_URL!,
  apiKey: process.env.LIARA_API_KEY!,
});

const { object } = await generateObject({
  model: my_model('openai/gpt-4o-mini'),
  output: 'no-schema',
  prompt: 'Generate a lasagna recipe.',
});

console.log(object) 
```

## نام و توضیحات اسکیما

شما می‌توانید به‌صورت اختیاری، برای اسکیمای خود، یک نام و یک توضیحات مشخص کنید.  
این اطلاعات توسط برخی از مدل‌های برای دریافت اطلاعات و راهنمایی‌های بیشتر،  
مورد استفاده قرار می‌گیرد.  

```js
// npm i @ai-sdk/openai@^1 ai@^4 dotenv zod@^3

import { generateObject } from 'ai';
import { createOpenAI } from '@ai-sdk/openai';
import { config } from 'dotenv';
import { z } from 'zod';

config();
const my_model = createOpenAI({
  baseURL: process.env.BASE_URL!,
  apiKey: process.env.LIARA_API_KEY!,
});

const { object } = await generateObject({
  model: my_model("openai/gpt-4o-mini"),
  schemaName: 'Recipe',
  schemaDescription: 'A recipe for a dish.',
  schema: z.object({
    name: z.string(),
    ingredients: z.array(z.object({ name: z.string(), amount: z.string() })),
    steps: z.array(z.string()),
  }),
  prompt: 'Generate a lasagna recipe.',
});

console.log(object);
```

## مدیریت خطاها

وقتی که تابع `generateObject` نمی‌تواند یک آبجکت معتبر تولید کند،  
یک `AI_NoObjectGeneratedError` را throw می‌کند.  
این ارور وقتی رخ می‌دهد که مدل در تولید یک آبجکت قابل تجزیه که مطابق با اسکیما است، شکست می‌خورد.  
از جمله دلایل رخ دادن این خطا، عبارتند از:  

- مدل در تولید یک پاسخ، شکست خورده است
- مدل یک پاسخ تولید کرده است که قابل تجزیه نیست
- مدل یک پاسخ تولید کرده است که توسط اسکیما، قابل اعتبارسنجی نیست

خطای فوق، اطلاعات زیر را در جهت لاگ‌کردن خطا، حفظ می‌کند:  

- `text`: متنی که توسط مدل تولید شده است که می‌تواند بسته به حالت تولید object، متن خام یا متن فراخوانی tool باشد
- `response`: متادیتا در مورد پاسخ مدل، نظیر id پاسخ، timestamp و مدل
- `usage`: میزان مصرف توکن درخواست
- `caues`: دلیل خطا (مثلاً خطای تجزیه JSON). شما می‌توانید از این فیلد برای مدیریت خطا با جزئیات بیشتر، استفاده کنید

```js
// npm i @ai-sdk/openai@^1 ai@^4 dotenv zod@^3

import { generateObject, NoObjectGeneratedError } from 'ai';
import { createOpenAI } from '@ai-sdk/openai';
import { config } from 'dotenv';
import { z } from 'zod';

config();
const my_model = createOpenAI({
  baseURL: process.env.BASE_URL!,
  apiKey: process.env.LIARA_API_KEY!,
});

const model  = my_model("openai/gpt-4o-mini");

const schema = z.object({
    name: z.string(),
    ingredients: z.array(z.object({ name: z.string(), amount: z.string() })),
    steps: z.array(z.string()),
  });

const prompt = 'Generate a lasagna recipe.';

try {
  await generateObject({ model, schema, prompt });
} catch (error) {
  if (NoObjectGeneratedError.isInstance(error)) {
    console.log('NoObjectGeneratedError');
    console.log('Cause:', error.cause);
    console.log('Text:', error.text);
    console.log('Response:', error.response);
    console.log('Usage:', error.usage);
  }
}
```

## اصلاح JSON نامعتبر یا معیوب

> تابع `repairText`، آزمایشی است و ممکن است در آینده، تغییر کند.

بعضی وقت‌ها، ممکن است که مدل، JSON نامعتبر یا معیوب، تولید کند.  
شما می‌توانید از تابع `repairText` در جهت تلاش برای اصلاح JSON، استفاده کنید.  

این تابع، ارور (از نوع `JSONParseError` یا `TypeValidationError`) و متنی که توسط مدل تولید شده است را، دریافت می‌کند.  
شما می‌توانید در جهت اصلاح متن اقدام کرده و متن اصلاح‌شده را، return کنید.  

```js
// npm i @ai-sdk/openai@^1 ai@^4 dotenv zod@^3

import { generateObject } from 'ai';
import { createOpenAI } from '@ai-sdk/openai';
import { config } from 'dotenv';
import { z } from 'zod';

config();
const my_model = createOpenAI({
  baseURL: process.env.BASE_URL!,
  apiKey: process.env.LIARA_API_KEY!,
});

const model  = my_model("openai/gpt-4o-mini");

const schema = z.object({
    name: z.string(),
    ingredients: z.array(z.object({ name: z.string(), amount: z.string() })),
    steps: z.array(z.string()),
  });

const prompt = 'Generate a lasagna recipe.';

const { object } = await generateObject({
  model,
  schema,
  prompt,
  experimental_repairText: async ({ text, error }) => {
    // example: add a closing brace to the text
    return text + '}';
  },
});
```

## خروجی‌های دارای ساختار با generateText و streamText

شما می‌توانید داده‌های دارای ساختار را با `generateText` و `streamText` با تنظیم `experimental_output` تولید کنید.  

> برخی از مدل‌ها مانند مدل‌های OpenAI همزمان از خروجی دارای ساختار و فراخوانی tool پشتیبانی می‌کنند. این قابلیت فقط
> در توابع `generateText` و `streamText` در دسترس است.
> تولید خروجی دارای ساختار با استفاده از توابع `generateText` و `streamText` یک قابلیت آزمایشی است و ممکن است در آینده تغییر کند.

## generateText

```js
// npm i @ai-sdk/openai@^1 ai@^4 dotenv zod@^3

import { generateText, Output } from 'ai';
import { createOpenAI } from '@ai-sdk/openai';
import { config } from 'dotenv';
import { z } from 'zod';

config();
const my_model = createOpenAI({
  baseURL: process.env.BASE_URL!,
  apiKey: process.env.LIARA_API_KEY!,
});

const { experimental_output } = await generateText({
  model: my_model('openai/gpt-4o-mini'),
  experimental_output: Output.object({
    schema: z.object({
      name: z.string(),
      age: z.number().nullable().describe('Age of the person.'),
      contact: z.object({
        type: z.literal('email'),
        value: z.string(),
      }),
      occupation: z.object({
        type: z.literal('employed'),
        company: z.string(),
        position: z.string(),
      }),
    }),
  }),
  prompt: 'Generate an example person for testing.',
});

console.log(experimental_output)
```

## streamText

```js
// npm i @ai-sdk/openai@^1 ai@^4 dotenv zod@^3

import { streamText, Output } from 'ai';
import { createOpenAI } from '@ai-sdk/openai';
import { config } from 'dotenv';
import { z } from 'zod';

config();
const my_model = createOpenAI({
  baseURL: process.env.BASE_URL!,
  apiKey: process.env.LIARA_API_KEY!,
});

const { experimental_partialOutputStream  } = streamText({
  model: my_model('openai/gpt-4o-mini'),
  experimental_output: Output.object({
    schema: z.object({
      name: z.string(),
      age: z.number().nullable().describe('Age of the person.'),
      contact: z.object({
        type: z.literal('email'),
        value: z.string(),
      }),
      occupation: z.object({
        type: z.literal('employed'),
        company: z.string(),
        position: z.string(),
      }),
    }),
  }),
  prompt: 'Generate an example person for testing.',
});

for await (const part of experimental_partialOutputStream) {
  console.log(part);
}
```

## مثال‌های بیشتر

شما می‌توانید از توابع `generateObject` و `streamObject` در فریم‌ورک‌های مختلفی که مستندات آن‌ها در ادامه قرار گرفته است، استفاده کنید:  

## generateObject

- [تولید آبجکت در NodeJS](https://docs.liara.ir/ai/cookbook/nodejs/generate-object)
- [تولید آبجکت در NextJS App Router](https://docs.liara.ir/ai/cookbook/nextjs/generate-object)
- [تولید آبجکت در RSC](https://docs.liara.ir/ai/cookbook/rsc/generate-object)

## streamObject

- [استریم آبجکت در NodeJS](https://docs.liara.ir/ai/cookbook/nodejs/stream-object)
- [استریم آبجکت در NextJS App Router](https://docs.liara.ir/ai/cookbook/nextjs/stream-object)
- [استریم آبجکت در RSC](https://docs.liara.ir/ai/cookbook/rsc/stream-object)

## all links

[All links of docs](https://docs.liara.ir/all-links-llms.txt)
