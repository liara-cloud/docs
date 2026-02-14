Original link: https://docs.liara.ir/ai/cookbook/rsc/call-tools/

# فراخوانی Toolها با هوش مصنوعی با ساخت RSC

> این مثال از React Server Components (یا همان RSC)، استفاده می‌کند. اگر که قصد دارید از  
> client side rendering و هوک‌ها استفاده کنید؛ می‌توانید به [این مستندات](https://docs.liara.ir/ai/cookbook/nextjs/call-tools) مراجعه کنید.

برخی از مدل‌ها به توسعه‌دهندگان اجازه می‌دهند فهرستی از Toolها را ارائه دهند که بتوان در هر زمان طی فرآیند تولید محتوا آن‌ها را فراخوانی کرد. این قابلیت برای گسترش توانایی‌های LLM بسیار مفید است، زیرا در این صورت، امکان تعامل با سیستم‌های خارج از مدل، فراهم می‌شود.

## کلاینت

بیایید یک فضای مکالمه‌‌ای ساده میان یک کاربر و یک LLM ایجاد کنیم و یک دکمه در آن قرار دهیم که `continueConversation` را فراخوانی می‌کند.  
در مسیر `app/page.tsx`، قطعه کد زیر را قرار دهید:  

```js
// npm i @ai-sdk/rsc

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

اکنون بیایید تابع `continueConversation` را پیاده‌سازی کنیم که درون خود، تابع `generateText` را برای تولید پاسخ به سوال کاربر، فراخوانی می‌کند. ما از پارامتر `tools` استفاده خواهیم کرد تا تابع خودمان را به اسم `celsiusToFahrenheit` مشخص کنیم که در آن، مقدار داده شده در سلسیوس، به فارنهایت تبدیل می‌شود.  
برای تعیین اسکیمای پارامترهای تابع `celsiusToFahrenheit`، از کتابخانه‌ی Zod استفاده خواهیم کرد.

در مسیر `app/actions.ts`، قطعه کد زیر را قرار دهید:

```js
// npm i @ai-sdk/openai@^1 ai@^4 zod
'use server';

import { generateText } from 'ai';
import { createOpenAI } from '@ai-sdk/openai';
import { z } from 'zod';

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

  const { text, toolResults } = await generateText({
    model: my_model('openai/gpt-4o-mini'),
    system: 'You are a friendly assistant!',
    messages: history,
    tools: {
      celsiusToFahrenheit: {
        description: 'Converts celsius to fahrenheit',
        parameters: z.object({
          value: z.string().describe('The value in celsius'),
        }),
        execute: async ({ value }) => {
          const celsius = parseFloat(value);
          const fahrenheit = celsius * (9 / 5) + 32;
          return `${celsius}°C is ${fahrenheit.toFixed(2)}°F`;
        },
      },
    },
  });

  return {
    messages: [
      ...history,
      {
        role: 'assistant' as const,
        content:
          text || toolResults.map(toolResult => toolResult.result).join('\n'),
      },
    ],
  };
}
```

> متغیرهای محیطی `BASE_URL` و `LIARA_API_KEY` همان baseUrl [سرویس هوش مصنوعی لیارا](https://liara.ir/products/ai/) و [کلید API لیارا](https://docs.liara.ir/references/api/about/#api-access-key) هستند که باید در بخش متغیرهای محیطی برنامه خود، آن‌ها را تنظیم کنید.

> پروژه فوق را می‌توانید به‌صورت کامل در [گیت‌هاب لیارا](https://github.com/liara-cloud/ai-sdk-examples/tree/master/RSC/call-tools)، مشاهده کنید.

## all links

[All links of docs](https://docs.liara.ir/all-links-llms.txt)
