Original link: https://docs.liara.ir/ai/cookbook/nextjs/stream-text-with-chat-prompt/

#  استریم متن با ورودی با AI در NextJS

chat completion گاهی ممکن است زمان‌بر باشد، مخصوصاً وقتی که پاسخ بزرگ باشد.  
در چنین مواردی، استریم پاسخ گفتگو به‌صورت بلادرنگ به سمت کلاینت بسیار مفید است و این امکان را فراهم می‌کند که کلاینت پیام جدید را هم‌زمان حین تولید توسط مدل، نمایش دهد، به‌جای اینکه کاربران منتظر بمانند تا تولید به‌طور کامل به پایان برسد.

## کلاینت

بیایید یک کامپوننت React ایجاد کنیم که در آن از هوک `useChat` از ماژول `ai-sdk/react@` استفاده شده است.  
هوک `useChat` هنگام ارسال پیام توسط کاربر، یک endpoint به نام  `https://docs.liara.ir/api/chat/` را فراخوانی می‌کند.  
این endpoint، پاسخ دستیار را بر اساس تاریخچه‌ی گفتگو تولید کرده و آن را به‌صورت استریم به کلاینت ارسال می‌نماید.  
در فایل `app/page.tsx` قطعه کد زیر را قرار دهید:  

```js
// npm i @ai-sdk/react@^1.2.12
'use client';

import { useChat } from '@ai-sdk/react';
import { useState } from 'react';

export default function Page() {
  const [input, setInput] = useState('');

  const { messages, append } = useChat({
    api: '/api/chat',
  });

  return (
    <div>
      <input
        value={input}
        onChange={event => {
          setInput(event.target.value);
        }}
        onKeyDown={async event => {
          if (event.key === 'Enter') {
            append({
              content: input,
              role: 'user',
            });
          }
        }}
      />

      {messages.map((message, index) => (
        <div key={index}>
          {message.parts.map(part => {
            if (part.type === 'text') {
              return <div key={`${message.id}-text`}>{part.text}</div>;
            }
            return null;
          })}
        </div>
      ))}
    </div>
  );
}
```

## سرور

در مرحله بعد، بیایید endpoint `https://docs.liara.ir/api/chat/` را ایجاد کنیم که وظیفه دارد پاسخ دستیار را بر اساس تاریخچه‌ی گفتگو تولید کند.  
قطعه کد زیر را در مسیر `app/api/chat/route.ts`، قرار دهید:  

```js
// npm i @ai-sdk/openai@^1 ai@^4

import { createOpenAI } from '@ai-sdk/openai';
import { convertToCoreMessages, streamText, type UIMessage } from 'ai';

const my_model = createOpenAI({
  baseURL: process.env.BASE_URL!,
  apiKey: process.env.LIARA_API_KEY!,
});


export async function POST(req: Request) {
  const { messages }: { messages: UIMessage[] } = await req.json();

  const result = streamText({
    model: my_model('openai/gpt-4o-mini'),
    system: 'You are a helpful assistant.',
    messages: convertToCoreMessages(messages),
  });

  return result.toDataStreamResponse();
}
```

> متغیرهای محیطی `BASE_URL` و `LIARA_API_KEY` همان baseUrl [سرویس هوش مصنوعی لیارا](https://liara.ir/products/ai/) و [کلید API لیارا](https://docs.liara.ir/references/api/about/#api-access-key) هستند که باید در بخش متغیرهای محیطی برنامه خود، آن‌ها را تنظیم کنید.

خروجی برنامه فوق:  

![example of streaming text with chat prompt in nextjs app router](https://media.liara.ir/ai/ai-sdk/cookbook/nextjs/generate-text-with-chat-prompt.png)

> پروژه فوق را می‌توانید به‌صورت کامل در [گیت‌هاب لیارا](https://github.com/liara-cloud/ai-sdk-examples/tree/master/NextJS/stream-text-with-chat-prompt)، مشاهده کنید.

## all links

[All links of docs](https://docs.liara.ir/all-links-llms.txt)
