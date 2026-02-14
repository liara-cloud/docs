Original link: https://docs.liara.ir/ai/cookbook/rsc/generate-text-with-chat-prompt/

# تولید متن با ورودی با هوش مصنوعی با ساخت RSC

> این مثال از React Server Components (یا همان RSC)، استفاده می‌کند. اگر که قصد دارید از  
> client side rendering و هوک‌ها استفاده کنید؛ می‌توانید به [این مستندات](https://docs.liara.ir/ai/cookbook/nextjs/generate-text-with-chat-prompt/) مراجعه کنید.

ما می‌توانیم با استفاده از یک پرامپت ورودی یا یک پرامپت سیستمی، یا ترکیبی از هر دوی آن‌ها، متن و آبجکت تولید کنیم.  
با این حال، گاهی ممکن است بخواهید متنی را بر اساس مجموعه‌ای از پیام‌ها تولید کنید.

قابلیت chat completion این امکان را فراهم می‌کند که متنی را بر پایه‌ی دنباله‌ای از پیام‌ها تولید کنید.  
این دنباله از پیام‌ها می‌تواند هر نوع تعاملی میان چند سیستم مختلف باشد، اما رایج‌ترین و قابل‌درک‌ترین کاربرد آن، مکالمه‌ای میان یک کاربر و یک LLM است.

## کلاینت

بیایید یک فضای مکالمه‌‌ای ساده میان یک کاربر و یک LLM ایجاد کنیم و یک دکمه در آن قرار دهیم که `continueConversation` را فراخوانی می‌کند.  
در مسیر `app/page.tsx`، قطعه کد زیر را قرار دهید:

```js
'use client';

import { useState } from 'react';
import { Message, continueConversation } from '@/app/actions';

// Allow streaming responses up to 30 seconds
export const maxDuration = 30;

export default function Home() {
  const [conversation, setConversation] = useState<Message[]>([]);
  const [input, setInput] = useState<string>('');

  return (
    <div>
      <div>
        {conversation.map((message, index) => (
          <div key={index}>
            {message.role}: {message.content}
          </div>
        ))}
      </div>

      <div>
        <input
          type="text"
          value={input}
          onChange={event => {
            setInput(event.target.value);
          }}
        />
        <button
          onClick={async () => {
            const { messages } = await continueConversation([
              ...conversation,
              { role: 'user', content: input },
            ]);

            setConversation(messages);
          }}
        >
          Send Message
        </button>
      </div>
    </div>
  );
}
```

## سرور

اکنون، بیایید تابع `continueConversation` را پیاده‌سازی کنیم که پیام کاربر را درون مکالمه‌، قرار می‌دهد  
و یک پاسخ تولید می‌کند.  
در مسیر `app/actions.ts`، قطعه کد زیر را قرار دهید:

```js
// npm i @ai-sdk/openai@^1 ai@^4

'use server';

import { generateText } from 'ai';
import { createOpenAI } from '@ai-sdk/openai';

const my_model = createOpenAI({
  baseURL: process.env.BASE_URL!,
  apiKey: process.env.LIARA_API_KEY!,
});

export interface Message {
  role: 'user' | 'assistant';
  content: string;
}

export async function continueConversation(history: Message[]) {
  'use server';

  const { text } = await generateText({
    model: my_model('openai/gpt-4o-mini'),
    system: 'You are a friendly assistant!',
    messages: history,
  });

  return {
    messages: [
      ...history,
      {
        role: 'assistant' as const,
        content: text,
      },
    ],
  };
}
```

> متغیرهای محیطی `BASE_URL` و `LIARA_API_KEY` همان baseUrl [سرویس هوش مصنوعی لیارا](https://liara.ir/products/ai/) و [کلید API لیارا](https://docs.liara.ir/references/api/about/#api-access-key) هستند که باید در بخش متغیرهای محیطی برنامه خود، آن‌ها را تنظیم کنید.

> پروژه فوق را می‌توانید به‌صورت کامل در [گیت‌هاب لیارا](https://github.com/liara-cloud/ai-sdk-examples/tree/master/RSC/generate-text-with-chat-prompt)، مشاهده کنید.

## all links

[All links of docs](https://docs.liara.ir/all-links-llms.txt)
