Original link: https://docs.liara.ir/ai/getting-started/nextjs-page-router/

# کار با AI SDK در برنامه‌های NextJS Pages Router

AI SDK یک کتابخانه‌ی قدرتمند TypeScript است که برای کمک به توسعه‌دهندگان در ساخت برنامه‌های مبتنی بر هوش مصنوعی طراحی شده است.
در این آموزش، یک چت‌بات ساده‌ی مبتنی بر هوش مصنوعی با رابط کاربری استریمی ایجاد خواهید کرد. در این مسیر، با مفاهیم کلیدی و تکنیک‌های اساسی آشنا می‌شوید که برای استفاده از این SDK ضروری هستند.

## پیش‌نیازها (Prerequisites)

برای دنبال‌کردن این آموزش، به موارد زیر نیاز دارید:

- نصب داشتن NodeJS نسخه ۱۸ یا بالاتر و `npm` و `pnpm` بر روی سیستم local
- یک `baseUrl` از محصول [هوش مصنوعی لیارا](https://liara.ir/products/ai/) و کلید API کنسول

## ساخت برنامه

برای شروع، یک برنامه‌ی جدید [NextJS](https://docs.liara.ir/paas/nextjs/getting-started/)، ایجاد کنید. دستور زیر یک دایرکتوری جدید به نام `my-ai-app` ایجاد می‌کند و درون آن، یک پروژه پایه NextJS می‌سازد:

```bash
npx create-next-app@latest my-ai-app
```

> هنگامی که از شما سوال شد، حتماً گزینه `App Router` را بر روی `no` و گزینه‌های `TypeScript` و `Tailwind CSS` را روی `yes` تنظیم کنید.

وارد دایرکتوری پروژه شوید:

```bash
cd my-ai-app
```

## نصب وابستگی‌ها

با اجرای دستور قرار گرفته در ادامه، پکیج‌های زیر را نصب کنید:

- `ai`: پکیج اصلی AI SDK
- `ai-sdk/react@`: هوک‌های React
- `ai-sdk/openai@`: ارائه‌دهنده‌ی OpenAI برای SDK (سازگار با تمامی مدل‌های ارائه‌شده توسط لیارا)
- `zod`: برای بهبود ساختار خروجی

```bash
npm install @ai-sdk/openai@^1 ai@^4 @ai-sdk/react@^1.2.12 zod
```
> اطمینان حاصل کنید که نسخه‌ی `ai` حداقل ۳.۱ یا بالاتر باشد.

## تنظیم اطلاعات AI

با اجرای دستور زیر (در لینوکس)، یک فایل `env.local.` در مسیر اصلی پروژه ایجاد کنید تا درون آن `baseUrl` هوش مصنوعی و [کلید API لیارا](https://docs.liara.ir/references/api/about/#api-access-key) را، قرار دهید:

```bash
touch .env.local
```

درون فایل ایجاد شده، قطعه کد زیر را، قرار دهید: 

```bash
BASE_URL=xxxxxxxxx
LIARA_API_KEY=xxxxxxxxx
```

در قطعه کد فوق، به‌جای `xxxxxxxxx`، مقادیر واقعی خود را، قرار دهید. 

## ایجاد یک Route Handler

> تا زمانی که از نسخه ۱۳ یا بالاتر NextJS استفاده می‌کنید، می‌توانید از Route Handlerها (با استفاده از App Router) در کنار Pages Router استفاده کنید. این روش توصیه می‌شود، زیرا به شما این امکان را می‌دهد که از رابط Web APIها استفاده کنید و همچنین پشتیبانی بهتری از قابلیت استریم فراهم می‌سازد.

در مسیر `app/api/chat`، یک فایل به نام `route.ts` ایجاد کنید؛ این فایل همان route handler خواهد بود. قطعه کد زیر را، درون آن، قرار دهید:

```ts
import { createOpenAI } from '@ai-sdk/openai';
import { streamText } from 'ai';

const my_model = createOpenAI({
  baseURL: process.env.BASE_URL,
  apiKey: process.env.LIARA_API_KEY,
});

export const maxDuration = 30;

export async function POST(req: Request) {
  const { messages } = await req.json();

  const result = streamText({
    model: my_model('openai/gpt-4o-mini'),
    messages,
  });

  return result.toDataStreamResponse();
}
```

در قطعه کد فوق: 

1. یک تابع برای مدیریت درخواست‌های POST تعریف شده که به‌صورت asynchronous اجرا می‌شود. این تابع ابتدا پیام‌ها (messages) را از بدنه‌ی درخواست استخراج می‌کند.
مقدار `messages` شامل تاریخچه‌ی مکالمه بین کاربر و چت‌بات است و زمینه (context) مورد نیاز برای تولید پاسخ بعدی را در اختیار مدل قرار می‌دهد.

2. سپس، تابع `streamText` فراخوانی می‌شود. این تابع از پکیج `ai` می‌باشد و یک پیکربندی دریافت می‌کند که شامل `model`
و `messages` است. 
شما می‌توانید تنظیمات اضافی دیگری را نیز، برای سفارشی‌سازی رفتار مدل به `streamText` اضافه کنید.

> در نظر داشته باشید که برای اتصال به مدل‌های هوش مصنوعی لیارا، باید از `createOpenAI` استفاده کنید و در آن، `baseURL` و `apiKey` را تنظیم کنید.

3. در ادامه، تابع `streamText` یک object از نوع `StreamTextResult` برمی‌گرداند. این object دارای متدی به نام `toDataStreamResponse` است که نتیجه را به یک پاسخ استریمی برای کلاینت، تبدیل می‌کند.

4. در انتها، نتیجه به‌صورت یک پاسخ HTTP استریمی، به کلاینت بازگردانده می‌شود.

Route Handler فوق یک endpoint از نوع POST در مسیر `api/chat/` ایجاد می‌کند. این endpoint می‌تواند توسط رابط کاربری برای ارسال پیام و دریافت پاسخ استریمی از مدل، استفاده شود.

## اتصال رابط کاربری

حالا که یک Route Handler دارید که می‌تواند با یک LLM ارتباط برقرار کند، زمان آن رسیده که رابط کاربری (frontend) خود را راه‌اندازی کنید. پکیج UI در AI SDK، پیچیدگی‌های مربوط به رابط چت را در یک هوک به نام `useChat` ساده کرده است.
در فایل  `pages/index.tsx`، قطعه کد زیر را قرار دهید تا یک لیست از پیام‌های چت، نمایش داده شود و امکان ارسال پیام کاربر، فراهم گردد:

```js
import { useChat } from '@ai-sdk/react';

export default function Chat() {
  const { messages, input, handleInputChange, handleSubmit } = useChat();
  return (
    <div className="flex flex-col w-full max-w-md py-24 mx-auto stretch">
      {messages.map(message => (
        <div key={message.id} className="whitespace-pre-wrap">
          {message.role === 'user' ? 'User: ' : 'AI: '}
          {message.parts.map((part, i) => {
            switch (part.type) {
              case 'text':
                return <div key={`${message.id}-${i}`}>{part.text}</div>;
            }
          })}
        </div>
      ))}

      <form onSubmit={handleSubmit}>
        <input
          className="fixed dark:bg-zinc-900 bottom-0 w-full max-w-md p-2 mb-8 border border-zinc-300 dark:border-zinc-800 rounded shadow-xl"
          value={input}
          placeholder="Say something..."
          onChange={handleInputChange}
        />
      </form>
    </div>
  );
}
```

این صفحه از هوک `useChat` استفاده می‌کند که به‌صورت پیش‌فرض، از مسیر POST که قبل‌تر ایجاد کرده بودید (همان `api/chat`)، استفاده خواهد کرد.
این هوک توابع لازم برای مدیریت ورودی کاربر و ارسال فرم را فراهم می‌کند. هوک `useChat` چندین تابع و متغیر ارائه می‌دهد:

- `messages`: پیام‌های فعلی چت (آرایه‌ای از آبجکت‌ها با ویژگی‌های `id` , `role` و `parts`).
- `input`: مقدار فعلی فیلد ورودی کاربر.
- `handleInputChange` و `handleSubmit`: توابعی برای مدیریت تعاملات کاربر (تایپ در فیلد ورودی و ارسال فرم).

پاسخ LLM از طریق آرایه‌ی `parts` در هر پیام، قابل دسترسی است. هر پیام شامل یک آرایه‌ی مرتب‌شده از `parts` است که نشان‌دهنده‌ی تمام چیزی است که مدل در پاسخ خود تولید کرده. `parts`ها می‌توانند شامل متن ساده، reasoning tokenها و موارد دیگر، باشند که در ادامه با آن‌ها آشنا خواهید شد.
آرایه‌ی `parts` ترتیب خروجی‌های مدل را حفظ می‌کند، و این امکان را فراهم می‌آورد تا بتوانید هر بخش را دقیقاً به همان ترتیبی که مدل تولید کرده، نمایش داده یا پردازش کنید.

## اجرای برنامه

با انجام مراحل فوق، اکنون تمام اجزای لازم برای چت‌بات خود را ساخته‌اید. برای اجرای برنامه، از دستور زیر استفاده کنید:

```js
pnpm run dev
```

سپس مرورگر خود را باز کرده و به آدرس `http://localhost:3000` بروید. باید یک فیلد ورودی مشاهده کنید. یک پیام وارد کنید تا آن را امتحان کنید و ببینید چت‌بات هوش مصنوعی چگونه به‌صورت بلادرنگ پاسخ می‌دهد:

![work with chatbot in nextjs](https://media.liara.ir/ai/ai-sdk/nextjs/wotking-with-chatbot.png)

## بهبود چت‌بات با Toolها

در حالی که LLMها توانایی فوق‌العاده‌ای در تولید متن دارند، اما در انجام Taskهای گسسته (مانند ریاضیات) و تعامل با دنیای خارج (مانند دریافت وضعیت آب‌وهوا) با چالش‌هایی مواجه هستند. اینجاست که Toolها وارد عمل می‌شوند.

Toolها، Actionهایی هستند که یک LLM می‌تواند آن‌ها را فراخوانی کند. نتایج حاصل از اجرای این Toolها می‌توانند به مدل بازگردانده شوند تا در تولید پاسخ بعدی در نظر گرفته شوند.
برای مثال، اگر کاربری درباره‌ی وضعیت فعلی آب‌وهوا سؤال کند، بدون استفاده از ابزارها، مدل تنها می‌تواند اطلاعات عمومی بر پایه‌ی داده‌های آموزشی‌اش ارائه دهد. اما با استفاده از یک ابزار آب‌وهوا، می‌تواند اطلاعات به‌روز و مختص مکان مشخص کاربر را دریافت کرده و ارائه دهد.

در ادامه، خواهید آموخت که چگونه می‌توانید با اضافه کردن یک Tool ساده مربوط به وضعیت آب‌وهوا، چت‌بات خود را بهبود دهید. 

### به‌روزرسانی Route Handler

مانند قطعه کد زیر، به فایل `app/api/chat/route.ts` خود، Tool مربوط به وضعیت آب‌وهوا را اضافه کنید:

```js
import { createOpenAI } from '@ai-sdk/openai';
import { streamText, tool } from 'ai';
import { z } from 'zod';

const my_model = createOpenAI({
  baseURL: process.env.BASE_URL,
  apiKey: process.env.LIARA_API_KEY,
});

export const maxDuration = 30;

export async function POST(req: Request) {
  const { messages } = await req.json();

  const result = streamText({
    model: my_model('openai/gpt-4o-mini'),
    messages,
    tools: {
      weather: tool({
        description: 'Get the weather in a location (fahrenheit)',
        parameters: z.object({
          location: z.string().describe('The location to get the weather for'),
        }),
        execute: async ({ location }) => {
          const temperature = Math.round(Math.random() * (90 - 32) + 32);
          return {
            location,
            temperature,
          };
        },
      }),
    },
  });

  return result.toDataStreamResponse();
}
```

در قطعه کد به‌روزرسانی‌شده فوق:

1. تابع `tool` از پکیج `ai` و نیز `z` از کتابخانه‌ی `zod` برای اعتبارسنجی schema، وارد شده است.

2. یک object به نام `tools` تعریف شده است که شامل یک tool آب‌وهوا (weather) است. این Tool:

- دارای یک توضیح (description) است که به مدل کمک می‌کند بفهمد چه زمانی باید از آن استفاده کند.
- پارامترهایی را با استفاده از Zod Schema تعریف می‌کند و مشخص می‌کند که برای اجرای این Tool، یک string به‌عنوان `location` مورد نیاز است. مدل تلاش می‌کند این پارامتر را از متن مکالمه استخراج کند. اگر نتواند، از کاربر برای دریافت اطلاعات موردنیاز، سؤال خواهد کرد.
- دارای یک تابع execute است که عملیات فرضی دریافت داده‌های آب‌وهوا را انجام می‌دهد (در این مثال، دمایی تصادفی بازمی‌گردد). این تابع به‌صورت asynchronous روی سرور اجرا می‌شود، بنابراین می‌توانید از APIهای خارجی داده‌های واقعی را واکشی کنید.

اکنون چت‌بات شما می‌تواند اطلاعات آب‌وهوا را برای هر مکانی که کاربر مشخص کند، واکشی کند. زمانی که مدل تشخیص دهد باید از Tool آب‌وهوا استفاده کند، یک tool call با پارامترهای لازم تولید می‌کند. سپس تابع execute به‌صورت خودکار اجرا می‌شود و نتیجه‌ی آن از طریق بخش `tool-invocations` موجود در آرایه‌ی `message.parts` قابل دسترسی خواهد بود.

### به‌روزرسانی رابط کاربری

برای به‌روزرسانی رابط کاربری و نمایش `tool invocation`، باید فایل `pages/index.tsx` را تغییر دهید تا پیام‌هایی که شامل Tool هستند نیز، به درستی نمایش داده شوند.
در ادامه، نمونه کدی آورده شده که این قابلیت را اضافه می‌کند:

```js
import { useChat } from '@ai-sdk/react';

export default function Chat() {
  const { messages, input, handleInputChange, handleSubmit } = useChat();
  return (
    <div className="flex flex-col w-full max-w-md py-24 mx-auto stretch">
      {messages.map(message => (
        <div key={message.id} className="whitespace-pre-wrap">
          {message.role === 'user' ? 'User: ' : 'AI: '}
          {message.parts.map((part, i) => {
            switch (part.type) {
              case 'text':
                return <div key={`${message.id}-${i}`}>{part.text}</div>;
              case 'tool-invocation':
                return (
                  {JSON.stringify(part.toolInvocation, null, 2)}
                  </pre>
                );
            }
          })}
        </div>
      ))}

      <form onSubmit={handleSubmit}>
        <input
          className="fixed dark:bg-zinc-900 bottom-0 w-full max-w-md p-2 mb-8 border border-zinc-300 dark:border-zinc-800 rounded shadow-xl"
          value={input}
          placeholder="Say something..."
          onChange={handleInputChange}
        />
      </form>
    </div>
  );
}
```

با این تغییر، رابط کاربری به‌گونه‌ای به‌روزرسانی می‌شود که بتواند بخش‌های مختلف پیام را مدیریت کند. برای بخش‌های متنی، همانند گذشته، محتوای متن نمایش داده می‌شود. برای tool callها، یک JSON از tool calling و نتیجه آن نشان داده خواهد شد.
اکنون، زمانی که درباره‌ی وضعیت هوا سوال می‌پرسید، tool calling و نتیجه‌ی آن در رابط چت شما، نمایش داده می‌شود:

![work with chatbot in nextjs with tools](https://media.liara.ir/ai/ai-sdk/nextjs/chatbot-using-tools.png)

## فعال‌سازی فراخوانی چندمرحله‌ای Toolها

ممکن است متوجه شده باشید که با وجود نمایش نتایج Toolها در رابط چت، مدل از این اطلاعات برای پاسخ به پرسش اصلی شما، استفاده نمی‌کند. دلیل آن این است که به‌محض اینکه مدل یک tool call تولید می‌کند، از نظر فنی، فرآیند تولید متن را کامل کرده است.

برای حل این مسئله، می‌توانید با استفاده از گزینه‌ی `maxSteps` در هوک `useChat`، فراخوانی چندمرحله‌ای Toolها را فعال کنید. این قابلیت، به‌طور خودکار، نتایج Tool را دوباره به مدل ارسال می‌کند تا یک مرحله‌ی تولید اضافی را آغاز کند. در این حالت، شما می‌خواهید مدل با استفاده از نتیجه‌ی Tool هواشناسی، به سوال شما پاسخ دهد.

### به‌روزرسانی کد سمت کلاینت

فایل `pages/index.tsx` خود را ویرایش کرده تا گزینه‌ی `maxSteps` را به آن، اضافه کنید:

```js
import { useChat } from '@ai-sdk/react';

export default function Chat() {
  const { messages, input, handleInputChange, handleSubmit } = useChat({
    maxSteps: 5,
  });

  // ... rest of your component code
}
```

به مرورگر بازگردید و درباره‌ی وضعیت هوای یک مکان سوال بپرسید. حالا باید ببینید که مدل از نتایج Tool هواشناسی برای پاسخ به سوال شما استفاده می‌کند:

![work with chatbot in nextjs with tools and maxsteps](https://media.liara.ir/ai/ai-sdk/nextjs/chatbot-with-maxsteps.png)

با تنظیم مقدار `maxSteps` روی ۵، این امکان را فراهم می‌کنید که مدل حداکثر تا ۵ مرحله، پاسخ جدیدی را تولید کند. این قابلیت، تعاملات پیچیده‌تر را ممکن می‌سازد و به مدل اجازه می‌دهد اطلاعات را طی چند مرحله جمع‌آوری و پردازش کند (در صورت نیاز). می‌توانید این قابلیت را در عمل مشاهده کنید؛ کافیست Tool دیگری اضافه کنید که دما را از فارنهایت به سلسیوس تبدیل کند.

### به‌روزرسانی Route Handler

Tool جدید برای تبدیل دما از فارنهایت به سلسیوس را به فایل `app/api/chat/route.ts` خود، مانند شکل زیر، اضافه کنید:

```js
import { createOpenAI } from '@ai-sdk/openai';
import { streamText, tool } from 'ai';
import { z } from 'zod';

const my_model = createOpenAI({
  baseURL: process.env.BASE_URL,
  apiKey: process.env.LIARA_API_KEY,
});

// Allow streaming responses up to 30 seconds
export const maxDuration = 30;

export async function POST(req: Request) {
  const { messages } = await req.json();

  const result = streamText({
    model: my_model('openai/gpt-4o-mini'),
    messages,
    tools: {
      weather: tool({
        description: 'Get the weather in a location (fahrenheit)',
        parameters: z.object({
          location: z.string().describe('The location to get the weather for'),
        }),
        execute: async ({ location }) => {
          const temperature = Math.round(Math.random() * (90 - 32) + 32);
          return {
            location,
            temperature,
          };
        },
      }),
      convertFahrenheitToCelsius: tool({
        description: 'Convert a temperature in fahrenheit to celsius',
        parameters: z.object({
          temperature: z
            .number()
            .describe('The temperature in fahrenheit to convert'),
        }),
        execute: async ({ temperature }) => {
          const celsius = Math.round((temperature - 32) * (5 / 9));
          return {
            celsius,
          };
        },
      }),
    },
  });
  
  return result.toDataStreamResponse();
}
```

اکنون، وقتی می‌پرسید: «هوای تهران چند درجه سلسیوس است؟»، باید یک پاسخ کامل‌تر را مشاهده کنید:

![work with chatbot in nextjs with two tools and maxsteps on 5](https://media.liara.ir/ai/ai-sdk/nextjs/chatbot-with-two-tools.png)

در برنامه فوق: 

- مدل، Tool هواشناسی را برای دریافت وضعیت هوای تهران، فراخوانی می‌کند.
- نتیجه‌ی Tool نمایش داده می‌شود.
- سپس، مدل، Tool تبدیل دما را فراخوانی می‌کند تا دما را از فارنهایت به سلسیوس تبدیل کند.
- در نهایت، مدل از این اطلاعات استفاده می‌کند تا پاسخی طبیعی و قابل فهم درباره‌ی وضعیت هوای تهران، ارائه دهد.

این رویکرد چندمرحله‌ای به مدل اجازه می‌دهد تا اطلاعات را جمع‌آوری کرده و از آن‌ها برای ارائه‌ی پاسخ‌هایی دقیق‌تر و مرتبط‌تر استفاده کند؛ در نتیجه، چت‌بات شما به‌طور قابل توجهی کاربردی‌تر خواهد شد.

این مثال ساده نشان می‌دهد که Toolها چگونه می‌توانند قابلیت‌های مدل را گسترش دهند. شما می‌توانید Toolهای پیچیده‌تری ایجاد کنید که با APIهای واقعی، پایگاه‌های داده یا سایر سیستم‌های خارجی ادغام شوند. این کار به مدل این امکان را می‌دهد تا به داده‌های واقعی و به‌روز دسترسی پیدا کرده و آن‌ها را در زمان واقعی، پردازش کند. Toolها پلی هستند میان محدودیت دانش مدل و اطلاعات جاری دنیا.

- پروژه نهایی مورد بررسی در این آموزش، در [گیت‌هاب لیارا](https://github.com/liara-cloud/ai-sdk-examples/tree/master/NextJS-Pages-Router-ChatBot) موجود است که می‌توانید از آن، استفاده کنید.

## all links

[All links of docs](https://docs.liara.ir/all-links-llms.txt)
