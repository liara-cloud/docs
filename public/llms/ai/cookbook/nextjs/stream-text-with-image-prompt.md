Original link: https://docs.liara.ir/ai/cookbook/nextjs/stream-text-with-image-prompt/

# استریم متن با ورودی عکس با AI

برخی از LLMها مانند `openai/gpt-4o-mini` قادر به پردازش هم‌زمان متن و تصویر هستند.
در این مثال، نشان خواهیم داد که چگونه می‌توان یک URL تصویر را همراه با پیام کاربر به مدل ارسال کرد.

## سرور

ما پیام کاربر را به دو بخش تقسیم می‌کنیم: متن و آدرس URL تصویر.
سپس هر دو بخش را به مدل ارسال می‌کنیم.
آخرین پیام، پیام متنی کاربر است و ما آدرس تصویر را به آن اضافه می‌کنیم.
قطعه کد زیر را در مسیر `app/api/chat/route.ts`، قرار دهید: 

```js
// npm i @ai-sdk/openai@^1 ai@^4

import { createOpenAI } from '@ai-sdk/openai';
import { streamText } from 'ai';

const my_model = createOpenAI({
  baseURL: process.env.BASE_URL!,
  apiKey: process.env.LIARA_API_KEY!,
});

export const maxDuration = 60;

export async function POST(req: Request) {
  // 'data' contains the additional data that you have sent:
  const { messages, data } = await req.json();

  const initialMessages = messages.slice(0, -1);
  const currentMessage = messages[messages.length - 1];

  // Call the language model
  const result = streamText({
    model: my_model('openai/gpt-4o-mini'),
    messages: [
      ...initialMessages,
      {
        role: 'user',
        content: [
          { type: 'text', text: currentMessage.content },
          { type: 'image', image: new URL(data.imageUrl) },
        ],
      },
    ],
  });

  // Respond with the stream
  return result.toDataStreamResponse();
}
```
> متغیرهای محیطی `BASE_URL` و `LIARA_API_KEY` همان baseUrl [سرویس هوش مصنوعی لیارا](https://docs.liara.ir/products/ai/) و [کلید API لیارا](https://docs.liara.ir/references/api/about/#api-access-key) هستند که باید در بخش متغیرهای محیطی برنامه خود، آن‌ها را تنظیم کنید.

## کلاینت

در سمت کلاینت، می‌توانیم آدرس URL تصویر را همراه با پیام کاربر با افزودن یک object به اسم `data` به تابع `handleSubmit` ارسال کنیم.
شما می‌توانید مقدار `imageUrl` را با آدرس واقعی تصویری که می‌خواهید ارسال کنید جایگزین نمایید.
در فایل `app/page.tsx` قطعه کد زیر را قرار دهید: 

```js
// npm i @ai-sdk/react@^1.2.12
'use client';

import { useChat } from '@ai-sdk/react';

// Allow streaming responses up to 30 seconds
export const maxDuration = 30;

export default function Chat() {
  const { messages, input, handleInputChange, handleSubmit } = useChat();
  return (
    <div>
      {messages.map(m => (
        <div key={m.id}>
          {m.role === 'user' ? 'User: ' : 'AI: '}
          {m.content}
        </div>
      ))}

      <form
        onSubmit={e => {
          handleSubmit(e, {
            data: { imageUrl: 'https://media.liara.ir/ai/dog.png' },
          });
        }}
      >
        <input
          value={input}
          placeholder="What does the image show..."
          onChange={handleInputChange}
        />
      </form>
    </div>
  );
}
```

خروجی برنامه فوق: 

![example of streaming text with image prompt in nextjs app router](https://media.liara.ir/ai/ai-sdk/cookbook/nextjs/stream-text-with-image-prompt.png)

> پروژه فوق را می‌توانید به‌صورت کامل در [گیت‌هاب لیارا](https://github.com/liara-cloud/ai-sdk-examples/tree/master/NextJS/stream-text-with-image-prompt)، مشاهده کنید.

## all links

[All links of docs](https://docs.liara.ir/all-links-llms.txt)
