Original link: https://docs.liara.ir/ai/cookbook/multi-modal-chatbot/

# ساخت چت بات چندمنظوره

در این راهنما، شما یک چت‌بات چندمنظوره مبتنی بر هوش مصنوعی خواهید ساخت که می‌تواند افزون بر متن، ورودی عکس را نیز، درک کند.

عبارت چندمنظوره (Multi-modal) به قابلیت چت‌بات اشاره دارد که می‌تواند در قالب‌های مختلفی نظیر متن، تصویر، PDF و ویدئو ورودی بگیرد یا خروجی تولید کند. در این مثال، تمرکز ما بر ارسال تصاویر و دریافت پاسخ‌هایی مبتنی بر متن خواهد بود.  
سطح پشتیبانی از ورودی‌های چندمنظوره در مدل‌های مختلف هوش مصنوعی متفاوت است. به‌عنوان مثال:

- مدل `OpenAI: GPT-4o-mini` از ورودی متن و عکس، پشتیبانی می‌کند
- مدل `DeepSeek: DeepSeek V3 0324` فقط از ورودی متن، پشتیبانی می‌کند
- مدل `Google: Gemini 1.5 Flash 8B` از ورودی متن و عکس، پشتیبانی می‌کند

در ابتدا، یک چت‌بات طراحی خواهیم کرد که بتواند با استفاده از یکی از مدل‌های DeepSeek، ورودی متنی بپذیرد. سپس، قابلیت تغییر مدل برای پشتیبانی از ورودی عکس را نیز به برنامه، اضافه خواهیم کرد.

## پیش‌نیازها

برای دنبال‌کردن این راهنما، به موارد زیر نیاز دارید:

- نصب داشتن [NodeJS نسخه 18](https://nodejs.org/en/download) و یا بالاتر و pnpm بر روی سیستم local
- [سرویس هوش مصنوعی لیارا](https://liara.ir/products/ai/) و [کلید API کنسول لیارا](https://docs.liara.ir/references/api/about/#api-access-key)

پس از تهیه سرویس هوش مصنوعی لیارا، یک `baseUrl` به شما تعلق می‌گیرد که با استفاده از آن، می‌توانید به مدل‌های هوش مصنوعی مختلف و متنوع، متصل بشوید.

> در نظر داشته باشید که شما می‌توانید از ارائه‌دهنده‌های دیگر نیز (مانند کمپانی رسمی OpenAI) برای اتصال به مدل، استفاده کنید.  
> اما برای افزایش سرعت و دسترسی به مدل‌های متنوع، پیشنهاد می‌شود که از سرویس هوش مصنوعی لیارا استفاده کنید.

## ایجاد برنامه

ابتدا، یک برنامه‌ی جدید مبتنی بر [NextJS](https://docs.liara.ir/paas/nextjs/getting-started/) ایجاد کنید. با اجرای دستور زیر، یک دایرکتوری جدید به نام `multi-modal-chatbot` ایجاد می‌شود و یک برنامه‌ی پایه‌ی NextJS درون آن قرار خواهد گرفت:

> هنگامی که از شما درباره‌ی استفاده از App Router سؤال می‌شود، حتماً گزینه‌ی Yes را انتخاب کنید.  
> اگر به دنبال راهنما برای استفاده از Pages Router در NextJS هستید، می‌توانید بر روی این [لینک](https://docs.liara.ir/ai/getting-started/nextjs-page-router/)، کلیک کنید.

```js
pnpm create next-app@latest multi-modal-chatbot
```

![create-nextjs-app instructions](https://media.liara.ir/ai/ai-sdk/cookbook/multi-modal-chatbot/create-next-js-app.png)

اکنون با دستور زیر، وارد پوشه ساخته شده شوید:

```js
cd multi-modal-chatbot
```

## نصب وابستگی‌ها
پکیج‌های `ai` و `@ai-sdk/openai` را با اجرای دستور زیر نصب کنید (پکیج `ai` مربوط به Vercel و پکیج `@ai-sdk/openai` برای اتصال به مدل‌های مختلف در AI SDK است):

```js
pnpm add @ai-sdk/openai@^1 ai@^4
```

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

## نقشه پیاده‌سازی

برای ساخت یک چت‌بات چندمنظوره، مراحل زیر را دنبال خواهید کرد:

- ایجاد یک Route Handler برای پردازش پیام‌های ورودی چت و تولید پاسخ
- اتصال رابط کاربری (UI) برای نمایش پیام‌های چت، دریافت ورودی از کاربر و ارسال پیام‌های جدید
- افزودن قابلیت آپلود تصویر و اتصال آن به پیام‌های چت

## ایجاد Route Handler

یک فایل در مسیر `app/api/chat/route.ts` ایجاد کرده و کد زیر را در آن قرار دهید:

```js
import { createOpenAI } from '@ai-sdk/openai';
import { streamText } from 'ai';


const my_model = createOpenAI({
  baseURL: process.env.BASE_URL,
  apiKey: process.env.LIARA_API_KEY,
});

// Allow streaming responses up to 30 seconds
export const maxDuration = 30;

export async function POST(req: Request) {
  const { messages } = await req.json();

  const result = streamText({
    model: my_model('deepseek/deepseek-chat-v3-0324'),
    messages,
  });

  return result.toDataStreamResponse();
}
```

در قطعه کد فوق: 

۱. با استفاده از تابع `createOpenAI` از پکیج `@ai-sdk/openai`، یک object مدل هوش مصنوعی ایجاد شده است. این object با استفاده از `baseURL` و `apiKey` که در فایل `env.local.` تنظیم کرده‌اید، پیکربندی می‌شود.

۲. یک asynchronous handler برای درخواست‌های `POST` و استخراج پیام‌ها از بدنه‌ی request تعریف شده است.  
متغیر `messages` شامل تاریخچه‌ی گفت‌وگو بین کاربر و چت‌بات است و context لازم را برای مدل فراهم می‌کند تا بتواند پاسخ بعدی را به‌درستی تولید کند.

۳. پیام‌های رابط کاربری (UI)، با استفاده از تابع `convertToCoreMessages`، به پیام‌های قابل فهم برای مدل تبدیل می‌شود. این تابع فرمت پیام‌های رابط کاربری را به فرمتی که مدل زبانی انتظار دارد، تبدیل می‌کند.

۴. تابع `streamText` که از پکیج `ai` ایمپورت شده است، فراخوانی می‌شود.  
این تابع یک object پیکربندی شده دریافت می‌کند که شامل مدل هوش مصنوعی و پیام‌های تبدیل‌شده است.  
همچنین، می‌توانید تنظیمات اضافی را نیز جهت سفارشی‌سازی رفتار مدل به آن، اضافه کنید.

۵. تابع `streamText` یک object از نوع `StreamTextResult` بازمی‌گرداند. این object شامل تابع `toDataStreamResponse` است که نتیجه را به یک پاسخ استریمی قابل استفاده در رابط کاربری، تبدیل می‌کند.

۶. در نهایت، نتیجه‌ی تولیدشده به کلاینت بازگردانده می‌شود تا پاسخ به‌صورت استریم ارسال گردد.

این Route Handler یک endpoint برای درخواست‌های `POST` در مسیر `api/chat/` ایجاد می‌کند.

## ایجاد رابط کاربری

اکنون که یک Route Handler برای ارسال درخواست به یک LLM پیاده‌سازی کرده‌اید، زمان آن رسیده است که فرانت‌اند را تنظیم کنید.  
AI SDK پیچیدگی‌های مربوط به پیاده‌سازی رابط چت را در قالب یک هوک ساده به نام `useChat` برطرف کرده است.

برای نمایش لیستی از پیام‌های چت و اضافه‌کردن قابلیت وارد کردن پیام توسط کاربر، فایل `app/page.tsx` را با کد زیر به‌روزرسانی کنید:

```js
// npm i @ai-sdk/react@^1.2.12
'use client';

import { useChat } from '@ai-sdk/react';

export default function Chat() {
  const { messages, input, handleInputChange, handleSubmit } = useChat();
  return (
    <div className="flex flex-col w-full max-w-md py-24 mx-auto stretch">
      {messages.map(m => (
        <div key={m.id} className="whitespace-pre-wrap">
          {m.role === 'user' ? 'User: ' : 'AI: '}
          {m.content}
        </div>
      ))}

      <form
        onSubmit={handleSubmit}
        className="fixed bottom-0 w-full max-w-md mb-8 border border-gray-300 rounded shadow-xl"
      >
        <input
          className="w-full p-2"
          value={input}
          placeholder="Say something..."
          onChange={handleInputChange}
        />
      </form>
    </div>
  );
}
```

> حتماً دستور `'use client'` را به ابتدای فایل خود اضافه کنید.  
> این دستور به شما اجازه می‌دهد تا از قابلیت‌های تعاملی JavaScript استفاده کنید.

صفحه فوق از هوک `useChat` استفاده می‌کند. این هوک، به‌صورت پیش‌فرض، از مسیر `POST` که قبل‌تر ایجاد کردید استفاده می‌کند (`api/chat/`).  
هوک `useChat` یک‌سری توابع و state را برای مدیریت ورودی کاربر و ارسال فرم، فراهم می‌کند:

- `messages`:  پیام‌های فعلی چت؛ یک آرایه از objectهایی که دارای ویژگی‌های `id`، `role` و `content` هستند  
- `input`:  مقدار فعلی فیلد ورودی کاربر  
- `handleInputChange` و `handleSubmit`: توابعی برای مدیریت تعاملات کاربر؛ به ترتیب، برای زمانی که کاربر در فیلد متنی تایپ می‌کند یا فرم را ارسال می‌کند  
- `status`: وضعیت درخواست API

## افزودن قابلیت بارگذاری تصویر

برای اضافه‌کردن قابلیت ارسال تصویر در برنامه، در ابتدا، در فایل `app/api/chat/route.ts`، باید منطقی را اضافه کنید که  
بررسی کند ورودی شما شامل عکس هست یا خیر. در صورتی که در تاریخچه‌ی پیام‌های ارسالی، عکس نیز وجود داشته باشد؛ متغیری به‌نام `messagesHaveImage`، مقدار `true` می‌گیرد و در حین تعیین LLM برای پاسخ، این متغیر  
بررسی خواهد شد.

در صورت `true` بودن متغیر مذکور، مدل `openai/gpt-4.1` به کار گرفته خواهد شد و در غیراین‌صورت، از مدل `deepseek/deepseek-chat-v3-0324` برای پاسخ، استفاده می‌شود.  
برای اضافه‌کردن این منطق به برنامه‌تان، کد زیر را درون فایل `app/api/chat/route.ts`، قرار دهید:

```js
import { createOpenAI } from '@ai-sdk/openai';
import { streamText } from 'ai';


const my_model = createOpenAI({
  baseURL: process.env.BASE_URL,
  apiKey: process.env.LIARA_API_KEY,
});

// Allow streaming responses up to 30 seconds
export const maxDuration = 30;

export async function POST(req: Request) {
  const { messages } = await req.json();

  const messagesHaveImage = messages.some(
    (message: { experimental_attachments?: any[] }) =>
      message.experimental_attachments?.some(
        (a) =>
          typeof a.contentType === 'string' &&
          a.contentType.startsWith('image/')
      )
  );

  console.log('Messages have image:', messagesHaveImage);

  const result = streamText({
    model: messagesHaveImage
      ? my_model('openai/gpt-4.1')
      : my_model('deepseek/deepseek-chat-v3-0324'),
    messages,
  });

  return result.toDataStreamResponse();
}
```

همچنین، برای چندمنظوره کردن چت‌بات خود، باید قابلیت بارگذاری و ارسال تصویر به مدل را به رابط کاربری، اضافه کنید.  
هوک `useChat` دو روش را برای ارسال فایل‌های پیوست‌شده همراه با یک پیام ارائه می‌دهد:

- استفاده از یک آبجکت `FileList`
- استفاده از یک لیست از URLها در تابع `handleSubmit`

در این راهنما، از روش `FileList` استفاده خواهید کرد، زیرا نیازی به پیکربندی یا راه‌اندازی اضافی ندارد.

برای این کار، فایل `app/page.tsx` را با کد زیر به‌روزرسانی کنید:

```js
// npm i @ai-sdk/react@^1.2.12
'use client';

import { useChat } from '@ai-sdk/react';
import { useRef, useState } from 'react';
import Image from 'next/image';

export default function Chat() {
  const { messages, input, handleInputChange, handleSubmit } = useChat();

  const [files, setFiles] = useState<FileList | undefined>(undefined);
  const fileInputRef = useRef<HTMLInputElement>(null);

  return (
    <div className="flex flex-col w-full max-w-md py-24 mx-auto stretch">
      {messages.map(m => (
        <div key={m.id} className="whitespace-pre-wrap">
          {m.role === 'user' ? 'User: ' : 'AI: '}
          {m.content}
          <div>
          {m.experimental_attachments
            ?.filter(
              attachment =>
                typeof attachment.contentType === 'string' &&
                attachment.contentType.startsWith('image/')
                )
                .map((attachment, index) => (
                    <Image
                      src={attachment.url}
                      width={500}
                      height={500}
                      key={`${m.id}-${index}`}
                      alt={attachment.name ?? `attachment-${index}`}
                    />
                  ))}
              </div>
        </div>
      ))}

      <form 
        className="fixed bottom-0 w-full max-w-md p-2 mb-8 border border-gray-300 rounded shadow-xl space-y-2"
        onSubmit={event => {
          handleSubmit(event, {
            experimental_attachments: files,
          });

          setFiles(undefined);

          if (fileInputRef.current) {
            fileInputRef.current.value = '';
          }
        }}
      >
        <input
          type="file"
          className=""
          onChange={event => {
            if (event.target.files) {
              setFiles(event.target.files);
            }
          }}
          multiple
          ref={fileInputRef}
        />
        <input
          className="w-full p-2"
          value={input}
          placeholder="Say something..."
          onChange={handleInputChange}
        />
      </form>
    </div>
  );
}
```

در قطعه کد فوق، کارهای زیر، انجام می‌شود:

- ایجاد یک `state` برای نگه‌داری فایل‌ها و همچنین ایجاد یک `ref` برای فیلد بارگذاری فایل (file input)  
- نمایش فایل‌های بارگذاری‌شده در رابط کاربری (UI) برای اطلاع کاربر از فایل‌های انتخاب‌شده  
- به‌روزرسانی تابع `onSubmit` به‌طوری که `handleSubmit` را فراخوانی کرده و فایل‌ها را از طریق `experimental_attachments` به‌عنوان گزینه، ارسال می‌کند  
- افزودن یک فیلد بارگذاری فایل (file input) به فرم، به‌همراه یک تابع `onChange` برای مدیریت به‌روزرسانی `state` مربوط به فایل‌ها

## اجرای برنامه

با انجام مراحل فوق، تمام اجزای موردنیاز برای ساخت چت‌بات چندمنظوره خود را پیاده‌سازی کرده‌اید!  
برای اجرای برنامه، از دستور زیر استفاده کنید:

```js
pnpm run dev
```

سپس مرورگر خود را باز کرده و به آدرس `http://localhost:3000` مراجعه کنید. در این صفحه باید یک فیلد ورودی متنی و یک دکمه برای بارگذاری تصویر مشاهده کنید.  
اکنون یک تصویر بارگذاری کرده و از مدل بخواهید آنچه در تصویر می‌بیند را توصیف کند.  
پاسخ مدل به‌صورت استریمی برای شما ارسال خواهد شد و می‌توانید به‌صورت زنده آن را مشاهده کنید.

![work with multi modal chatbot in nextjs](https://media.liara.ir/ai/ai-sdk/cookbook/multi-modal-chatbot/working-with-multi-modal-chatbot.png)

تا اینجا، شما یک چت‌بات هوش مصنوعی چندمنظوره با استفاده از AI SDK ساختید.  
اکنون می‌توانید با آزمایش و گسترش قابلیت‌های این برنامه (مثلاً استفاده از [قابلیت tool calling](https://docs.liara.ir/ai/ai-sdk-core/tool-calling/))، آن را توسعه دهید.

> پروژه نهایی مورد بررسی در این آموزش، در [گیت‌هاب لیارا](https://github.com/liara-cloud/ai-sdk-examples/tree/master/multi-modal-chatbot) موجود است که می‌توانید از آن، استفاده کنید.

## all links

[All links of docs](https://docs.liara.ir/all-links-llms.txt)
