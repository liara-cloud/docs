Original link: https://docs.liara.ir/ai/cookbook/nextjs/generate-text-with-chat-prompt/

#  تولید متن با ورودی با AI در NextJS

ممکن است مواقعی وجود داشته باشد که بخواهید متنی را بر اساس مجموعه‌ای از پیام‌ها تولید نمایید.  
قابلیت `chat completion` این امکان را فراهم می‌کند که متن را بر اساس یک رشته از پیام‌ها تولید کنید.

این مجموعه پیام‌ها می‌تواند شامل هرگونه تعامل بین چندین سیستم مختلف باشد، اما متداول‌ترین و قابل‌درک‌ترین کاربرد آن، نمایش گفت‌وگویی میان یک کاربر و یک مدل است.


## کلاینت

بیایید ابتدا یک رابط چت ساده ایجاد کنیم که شامل یک فیلد ورودی برای ارسال پیام کاربر و نمایش تاریخچه‌ی گفتگو باشد.  
در این رابط، هنگام ارسال پیام توسط کاربر، درخواست به endpoint در `api/chat/` ارسال می‌شود تا پاسخ دستیار (assistant) تولید و نمایش داده شود.  
در فایل `app/page.tsx` قطعه کد زیر را قرار دهید:  


```js
'use client';

import { useState } from 'react';

type Part = { type: string; text: string };
type ModelMessage = { role: string; content: string | Part[] };

export default function Page() {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<ModelMessage[]>([]);

  return (
    <div>
      <input
        value={input}
        onChange={event => {
          setInput(event.target.value);
        }}
        onKeyDown={async event => {
          if (event.key === 'Enter') {
            setMessages(currentMessages => [
              ...currentMessages,
              { role: 'user', content: input },
            ]);

            const response = await fetch('/api/chat', {
              method: 'POST',
              body: JSON.stringify({
                messages: [...messages, { role: 'user', content: input }],
              }),
            });

            const { messages: newMessages } = await response.json();

            setMessages(currentMessages => [
              ...currentMessages,
              ...newMessages,
            ]);
          }
        }}
      />

      {messages.map((message, index) => (
        <div key={`${message.role}-${index}`}>
          {typeof message.content === 'string'
            ? message.content
            : message.content
                .filter((part: Part) => part.type === 'text')
                .map((part: Part, partIndex: number) => (
                  <div key={partIndex}>{part.text}</div>
                ))}
        </div>
      ))}
    </div>
  );
}
```

## سرور

در گام بعد، بیایید یک endpoint به نام `api/chat/` ایجاد کنیم که وظیفه دارد پاسخ دستیار را بر اساس تاریخچه‌ی گفتگو تولید کند.  
در مسیر `app/api/chat/route.ts`، قطعه کد زیر را قرار دهید:  


```js
// npm i @ai-sdk/openai@^1 ai@^4

import { createOpenAI } from '@ai-sdk/openai';
import { generateText } from 'ai';


interface ModelMessage {
  role: 'user' | 'assistant' | 'system';
  content: string;
}

const my_model = createOpenAI({
  baseURL: process.env.BASE_URL!,
  apiKey: process.env.LIARA_API_KEY!,
});


export async function POST(req: Request) {
  const { messages }: { messages: ModelMessage[] } = await req.json();

  const { response } = await generateText({
    model: my_model('openai/gpt-4o-mini'),
    system: 'You are a helpful assistant.',
    messages,
  });

  return Response.json({ messages: response.messages });
}
```

> متغیرهای محیطی `BASE_URL` و `LIARA_API_KEY` همان baseUrl [سرویس هوش مصنوعی لیارا](https://docs.liara.ir/products/ai/) و [کلید API لیارا](https://docs.liara.ir/references/api/about/#api-access-key) هستند که باید در بخش متغیرهای محیطی برنامه خود، آن‌ها را تنظیم کنید.

خروجی برنامه فوق:  


![example of generating text with chat prompt in nextjs app router](https://media.liara.ir/ai/ai-sdk/cookbook/nextjs/generate-text-with-chat-prompt.png)

> پروژه فوق را می‌توانید به‌صورت کامل در [گیت‌هاب لیارا](https://github.com/liara-cloud/ai-sdk-examples/tree/master/NextJS/generate-text-with-chat-prompt)، مشاهده کنید.

## all links

[All links of docs](https://docs.liara.ir/all-links-llms.txt)
