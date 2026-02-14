Original link: https://docs.liara.ir/ai/cookbook/rsc/call-tools-in-parallel/

# فراخوانی Toolها با هوش مصنوعی با ساخت RSC

> این مثال از React Server Components (یا همان RSC)، استفاده می‌کند. اگر که قصد دارید از
> client side rendering و هوک‌ها استفاده کنید؛ می‌توانید به [این مستندات](https://docs.liara.ir/ai/cookbook/nextjs/call-tools-in-parallel) مراجعه کنید.

برخی از LLMها از فراخوانی Toolها به‌صورت موازی (parallel) پشتیبانی می‌کنند. این قابلیت زمانی مفید است که چندین Tool، مستقل از یکدیگر باشند و بتوانند در همان مرحله از تولید محتوا، به‌طور هم‌زمان اجرا شوند.

## کلاینت

- بیایید یک Tool به نام `getWeather` را برای چندین شهر، به‌صورت موازی، فراخوانی کنیم.
- در مسیر `app/page.tsx`، قطعه کد زیر را قرار دهید:

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

- اکنون، بیایید تابع `getWeather` را تعریف کنیم.
- در مسیر `app/actions.ts`، قطعه کد زیر را قرار دهید:

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

function getWeather({ city, unit }: { city: string; unit: 'C' | 'F' }) {
  // This function would normally make an
  // API request to get the weather.

  void city;
  void unit;

  return { value: 25, description: 'Sunny' };
}

export async function continueConversation(history: Message[]) {
  'use server';

  const { text, toolResults } = await generateText({
    model: my_model('openai/gpt-4o-mini'),
    system: 'You are a friendly weather assistant!',
    messages: history,
    tools: {
      getWeather: {
        description: 'Get the weather for a location',
        parameters: z.object({
          city: z.string().describe('The city to get the weather for'),
          unit: z
            .enum(['C', 'F'])
            .describe('The unit to display the temperature in'),
        }),
        execute: async ({ city, unit }) => {
          const weather = getWeather({ city, unit });
          return `It is currently ${weather.value}°${unit} and ${weather.description} in ${city}!`;
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

> پروژه فوق را می‌توانید به‌صورت کامل در [گیت‌هاب لیارا](https://github.com/liara-cloud/ai-sdk-examples/tree/master/RSC/call-tools-in-parallel)، مشاهده کنید.

## all links

[All links of docs](https://docs.liara.ir/all-links-llms.txt)
