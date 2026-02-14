Original link: https://docs.liara.ir/ai/cookbook/nextjs/stream-object/

#  استریم آبجکت با AI در NextJS

تولید object گاهی ممکن است زمان زیادی طول بکشد، مخصوصاً زمانی که در حال تولید یک schema بزرگ باشید.  
در چنین مواردی، استریم فرآیند تولید آبجکت به‌صورت بلادرنگ به سمت کلاینت، بسیار مفید است.  
این کار به کلاینت اجازه می‌دهد که آبجکت تولیدشده را هم‌زمان با تولید آن نمایش دهد، به‌جای اینکه کاربران منتظر بمانند تا کل فرآیند به پایان برسد و سپس نتیجه نمایش داده شود.

## حالت آبجکت

تابع `streamObject` این امکان را فراهم می‌کند که با استفاده از پارامتر `output`، استراتژی‌های مختلفی برای خروجی تعیین کنید.  
به‌صورت پیش‌فرض، حالت خروجی روی `object` تنظیم شده است، که در این حالت دقیقاً همان آبجکت ساختاریافته‌ای تولید می‌شود که در فیلد `schema` تعریف کرده‌اید.

## اسکیما

برای مدیریت بهتر، توصیه می‌شود که schema را در یک فایل جداگانه تعریف کرده و آن را هم در سمت کلاینت، و هم در سمت سرور، ایمپورت کنید.  
این کار موجب افزایش قابلیت maintainability و اطمینان از سازگاری بین کلاینت و سرور می‌شود.

در مسیر `app/api/use-object/schema.ts`، قطعه کد زیر را قرار دهید:  

```js
import { z } from 'zod';

// define a schema for the notifications
export const notificationSchema = z.object({
  notifications: z.array(
    z.object({
      name: z.string().describe('Name of a fictional person.'),
      message: z.string().describe('Message. Do not use emojis or links.'),
    }),
  ),
});
```

## کلاینت

در سمت کلاینت، از هوک `useObject` برای استریم فرآیند تولید object استفاده می‌شود.  
نتایج به‌صورت partial دریافت و نمایش داده می‌شوند؛ یعنی هر بخش از object به‌محض تولید، بلافاصله به رابط کاربری ارسال و نمایش داده می‌شود.  
توجه داشته باشید که در کد JSX باید مقادیر `undefined` را به‌درستی مدیریت کنید، زیرا برخی از قسمت‌های آبجکت ممکن است هنوز به‌طور کامل تولید نشده باشند.

در مسیر `app/page.tsx`، قطعه کد زیر را قرار دهید:  

```js
// npm i @ai-sdk/react@^1.2.12
'use client';

import { experimental_useObject as useObject } from '@ai-sdk/react';
import { notificationSchema } from './api/use-object/schema';

export default function Page() {
  const { object, submit } = useObject({
    api: 'https://docs.liara.ir/api/use-object',
    schema: notificationSchema,
  });

  return (
    <div>
      <button onClick={() => submit('Messages during finals week.')}>
        Generate notifications
      </button>

      {object?.notifications?.map((notification, index) => (
        <div key={index}>
          {notification?.name}
          {notification?.message}
        </div>
      ))}
    </div>
  );
}
```

## سرور

در سمت سرور، از `streamObject` برای استریم فرآیند تولید object استفاده می‌کنیم.  
در مسیر `app/api/use-object/route.ts`، قطعه کد زیر را قرار دهید:

```js
// npm i @ai-sdk/openai@^1 ai@^4 zod

import { createOpenAI } from '@ai-sdk/openai';
import { streamObject } from 'ai';
import { notificationSchema } from './schema';

const my_model = createOpenAI({
  baseURL: process.env.BASE_URL!,
  apiKey: process.env.LIARA_API_KEY!,
});

export const maxDuration = 30;

export async function POST(req: Request) {
  const context = await req.json();

  const result = streamObject({
    model: my_model('openai/gpt-4o-mini'),
    schema: notificationSchema,
    prompt:
      `Generate 3 notifications for a messages app in this context:` + context,
  });

  return result.toTextStreamResponse();
}
```

> متغیرهای محیطی `BASE_URL` و `LIARA_API_KEY` همان baseUrl [سرویس هوش مصنوعی لیارا](https://docs.liara.ir/products/ai/) و [کلید API لیارا](https://docs.liara.ir/references/api/about/#api-access-key) هستند که باید در بخش متغیرهای محیطی برنامه خود، آن‌ها را تنظیم کنید.  
> پروژه فوق را می‌توانید به‌صورت کامل در [گیت‌هاب لیارا](https://github.com/liara-cloud/ai-sdk-examples/tree/master/NextJS/stream-object-(object-mode))، مشاهده کنید.

## state بارگذاری و توقف استریم

می‌توانید از loading state برای نمایش یک loading indicator در حین تولید آبجکت، استفاده کنید.  
همچنین می‌توانید از تابع `stop` برای متوقف کردن فرآیند تولید آبجکت استفاده کنید.

برای اضافه‌کردن این دو قابلیت به برنامه، قطعه کد زیر را در مسیر `app/page.tsx` قرار دهید:

```js
// npm i @ai-sdk/react@^1.2.12
'use client';

import { experimental_useObject as useObject } from '@ai-sdk/react';
import { notificationSchema } from './api/use-object/schema';

export default function Page() {
  const { object, submit, isLoading, stop } = useObject({
    api: 'https://docs.liara.ir/api/use-object',
    schema: notificationSchema,
  });

  return (
    <div>
      <button
        onClick={() => submit('Messages during finals week.')}
        disabled={isLoading}
      >
        Generate notifications
      </button>

      {isLoading && (
        <div>
          <div>Loading...</div>
          <button type="button" onClick={() => stop()}>
            Stop
          </button>
        </div>
      )}

      {object?.notifications?.map((notification, index) => (
        <div key={index}>
          {notification?.name}
          {notification?.message}
        </div>
      ))}
    </div>
  );
}
```

## حالت Array

حالت خروجی `array` این امکان را فراهم می‌کند که یک آرایه‌ای از آبجکت‌ها را به‌صورت عنصر به عنصر (one element at a time) استریم کنید.  
این حالت هنگام تولید فهرست‌هایی از آیتم‌ها بسیار کاربردی است.

## اسکیما

ابتدا، اسکیما را به‌روزرسانی کنید تا فقط یک object را تولید کند (یعنی `()z.array` را حذف کنید).  
قطعه کد زیر را در مسیر `app/api/use-object/schema.ts` قرار دهید:

```js
import { z } from 'zod';

// define a schema for a single notification
export const notificationSchema = z.object({
  name: z.string().describe('Name of a fictional person.'),
  message: z.string().describe('Message. Do not use emojis or links.'),
});
```

## کلاینت

در سمت کلاینت، schema را در `()z.array` قرار دهید تا یک آرایه‌ای از آبجکت‌ها تولید شود.  
در فایل `app/page.tsx` قطعه کد زیر را قرار دهید:  

```js
// npm i @ai-sdk/react@^1.2.12
'use client';

import { experimental_useObject as useObject } from '@ai-sdk/react';
import { notificationSchema } from './api/use-object/schema';
import { z } from 'zod';

export default function Page() {
  const { object, submit, isLoading, stop } = useObject({
    api: 'https://docs.liara.ir/api/use-object',
    schema: z.array(notificationSchema),
  });

  return (
    <div>
      <button
        onClick={() => submit('Messages during finals week.')}
        disabled={isLoading}
      >
        Generate notifications
      </button>

      {isLoading && (
        <div>
          <div>Loading...</div>
          <button type="button" onClick={() => stop()}>
            Stop
          </button>
        </div>
      )}

      {object?.map((notification, index) => (
        <div key={index}>
          {notification.name}
          {notification.message}
        </div>
      ))}
    </div>
  );
}
```

## سرور

در سمت سرور، با تنظیم گزینه‌ی `'output: 'array`، می‌توانید یک آرایه از objectها را تولید کنید.  
در مسیر `app/api/use-object/route.ts`، قطعه کد زیر را قرار دهید:  

```js
// npm i @ai-sdk/openai@^1 ai@^4 zod

import { createOpenAI } from '@ai-sdk/openai';
import { streamObject } from 'ai';
import { notificationSchema } from './schema';

const my_model = createOpenAI({
  baseURL: process.env.BASE_URL!,
  apiKey: process.env.LIARA_API_KEY!,
});

export const maxDuration = 30;

export async function POST(req: Request) {
  const context = await req.json();

  const result = streamObject({
    model: my_model('openai/gpt-4o-mini'),
    output: 'array',
    schema: notificationSchema,
    prompt:
      `Generate 3 notifications for a messages app in this context:` + context,
  });

  return result.toTextStreamResponse();
}
```

> پروژه فوق را می‌توانید به‌صورت کامل در [گیت‌هاب لیارا](https://github.com/liara-cloud/ai-sdk-examples/tree/master/NextJS/stream-object-(array-mode))، مشاهده کنید.

## all links

[All links of docs](https://docs.liara.ir/all-links-llms.txt)
