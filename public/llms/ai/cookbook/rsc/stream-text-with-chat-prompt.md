Original link: https://docs.liara.ir/ai/cookbook/rsc/stream-text-with-chat-prompt/

# استریم متن با ورودی با هوش مصنوعی با ساخت RSC

> این مثال از React Server Components (یا همان RSC)، استفاده می‌کند. اگر که قصد دارید از  
> client side rendering و هوک‌ها استفاده کنید؛ می‌توانید به [https://docs.liara.ir/ai/cookbook/nextjs/stream-text-with-chat-prompt](https://docs.liara.ir/ai/cookbook/nextjs/stream-text-with-chat-prompt) مراجعه کنید.

chat completion گاهی ممکن است زمان‌بر باشد، مخصوصاً زمانی که پاسخ بزرگ و طولانی است.  
در چنین مواردی، استریم chat completion به‌صورت بلادرنگ به سمت کلاینت می‌تواند مفید باشد.  
این کار به کلاینت اجازه می‌دهد که پیام جدید را در حین تولید توسط مدل، دریافت کند، به‌جای اینکه کاربر منتظر بماند تا تولید پاسخ، به پایان برسد.

## کلاینت

بیایید یک فضای مکالمه‌ای ساده میان یک کاربر  
و LLM ایجاد کنیم و یک دکمه کار بذاریم که `continueConversation` را فراخوانی خواهد کرد.  

در مسیر `app/page.tsx`، قطعه کد زیر را قرار دهید:  

```js
// npm i @ai-sdk/rsc

'use client';

import { useState } from 'react';
import { Message, continueConversation } from '@/app/actions';
import { readStreamableValue } from '@ai-sdk/rsc';

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
            const { messages, newMessage } = await continueConversation([
              ...conversation,
              { role: 'user', content: input },
            ]);

            let textContent = '';

            for await (const delta of readStreamableValue(newMessage)) {
              textContent = `${textContent}${delta}`;

              setConversation([
                ...messages,
                { role: 'assistant', content: textContent },
              ]);
            }
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

اکنون، بیایید تابع `continueConversation` را پیاده‌سازی کنیم که پیام کاربر را درون فضای مکالمه، قرار می‌دهد  
و جواب مدل را به کاربر به‌صورت استریمی، برمی‌گرداند.

در مسیر `app/actions.ts`، قطعه کد زیر را قرار دهید:

```js
// npm i @ai-sdk/openai@^1 ai@^4
'use server';

import { streamText } from 'ai';
import { createOpenAI } from '@ai-sdk/openai';
import { createStreamableValue } from '@ai-sdk/rsc';

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

  const stream = createStreamableValue();

  (async () => {
    const { textStream } = streamText({
      model: my_model('openai/gpt-4o-mini'),
      system:
        "You are a dude that doesn't drop character until the DVD commentary.",
      messages: history,
    });

    for await (const text of textStream) {
      stream.update(text);
    }

    stream.done();
  })();

  return {
    messages: history,
    newMessage: stream.value,
  };
}
```

> متغیرهای محیطی `BASE_URL` و `LIARA_API_KEY` همان baseUrl [https://liara.ir/products/ai/](https://liara.ir/products/ai/) و [https://docs.liara.ir/references/api/about/#api-access-key](https://docs.liara.ir/references/api/about/#api-access-key) هستند که باید در بخش متغیرهای محیطی برنامه خود، آن‌ها را تنظیم کنید.

> پروژه فوق را می‌توانید به‌صورت کامل در [https://github.com/liara-cloud/ai-sdk-examples/tree/master/RSC/stream-text-with-chat-prompt](https://github.com/liara-cloud/ai-sdk-examples/tree/master/RSC/stream-text-with-chat-prompt)، مشاهده کنید.

## all links

[All links of docs](https://docs.liara.ir/all-links-llms.txt)
