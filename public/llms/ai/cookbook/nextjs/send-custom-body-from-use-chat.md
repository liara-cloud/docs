Original link: https://docs.liara.ir/ai/cookbook/nextjs/send-custom-body-from-use-chat/

# ارسال بدنه‌ی سفارشی از useChat 

> در حال حاضر، `experimental_prepareRequestBody` یک قابلیت آزمایشی است و تنها در فریم‌ورک‌های React و Solid و Vue در دسترس است.

به‌صورت پیش‌فرض، `useChat` تمام پیام‌ها و اطلاعات مربوط به درخواست را به سرور ارسال می‌کند. با این حال، معمولاً نیاز است که محتوای بدنه‌ی ارسال‌شده به سرور کنترل شود، برای مثال:

- فقط آخرین پیام ارسال شود
- داده‌های اضافی همراه با پیام ارسال شوند
- ساختار بدنه‌ی درخواست تغییر کند

گزینه‌ی `experimental_prepareRequestBody` به شما امکان می‌دهد محتوای بدنه‌ی ارسالی به سرور را سفارشی‌سازی کنید.  
این تابع لیست پیام‌ها، داده‌های درخواست و بدنه‌ی درخواست دریافتی از append call را به عنوان ورودی دریافت می‌کند و محتوایی که قرار است به سرور ارسال شود را بازمی‌گرداند.

مثال زیر نشان می‌دهد که چگونه فقط متن آخرین پیام را به سرور ارسال کنید.  
این کار می‌تواند زمانی که بخواهید حجم داده‌های ارسالی به سرور را کاهش دهید، مفید باشد.

## کلاینت

قطعه کد زیر را در فایل `app/page.tsx` قرار دهید:

```js
// npm i @ai-sdk/react@^1.2.12
'use client';

import { useChat } from '@ai-sdk/react';

export default function Chat() {
  const { messages, input, handleInputChange, handleSubmit } = useChat({
    experimental_prepareRequestBody: ({ messages }) => {
      // e.g. only the text of the last message:
      return messages[messages.length - 1].content;
    },
  });

  return (
    <div>
      {messages.map(m => (
        <div key={m.id}>
          {m.role === 'user' ? 'User: ' : 'AI: '}
          {m.content}
        </div>
      ))}

      <form onSubmit={handleSubmit}>
        <input value={input} onChange={handleInputChange} />
      </form>
    </div>
  );
}
```

## سرور

ما باید سرور را طوری تنظیم کنیم که تنها متن آخرین پیام را دریافت کند. باقی تاریخچه‌ی پیام‌ها می‌تواند از فضای ذخیره‌سازی (storage) بارگذاری شود.  
قطعه کد زیر را در مسیر `app/api/chat/route.ts` قرار دهید:

```js
// npm i @ai-sdk/openai@^1 ai@^4 zod

import { createOpenAI } from '@ai-sdk/openai'
import { Message, streamText } from 'ai';

const my_model = createOpenAI({
  baseURL: process.env.BASE_URL!,
  apiKey: process.env.LIARA_API_KEY!,
});

export const maxDuration = 30

// Stub for loading message history
async function loadHistory(): Promise<Message[]> {
  // TODO: Implement actual history loading from storage
  return [];
}

export async function POST(req: Request) {
  // we receive only the text from the last message
  const text = await req.json()

  // e.g. load message history from storage
  const history = await loadHistory()

  // Call the language model
  const result = streamText({
    model: my_model('openai/gpt-4o-mini'),
    messages: [...history, { role: 'user', content: text }],
    onFinish({ text }) {
      // e.g. save the message and the response to storage
    }
  })

  // Respond with the stream
  return result.toDataStreamResponse()
}
```

> متغیرهای محیطی `BASE_URL` و `LIARA_API_KEY` همان baseUrl [سرویس هوش مصنوعی لیارا](https://liara.ir/products/ai/) و [کلید API لیارا](https://docs.liara.ir/references/api/about/#api-access-key) هستند که باید در بخش متغیرهای محیطی برنامه خود، آن‌ها را تنظیم کنید.

> پروژه فوق را می‌توانید به‌صورت کامل در [گیت‌هاب لیارا](https://github.com/liara-cloud/ai-sdk-examples/tree/master/NextJS/send-custom-body-from-use-chat)، مشاهده کنید.

## all links

[All links of docs](https://docs.liara.ir/all-links-llms.txt)
