Original link: https://docs.liara.ir/ai/cookbook/nextjs/stream-text-multistep/

# استریم متن Multi-Step با AI

ممکن است که در استریم خود، نیاز به مراحل متفاوتی داشته باشید، به‌طوری که هر مرحله، تنظیمات خاص خود را دارد؛ یعنی  
ممکن است از مدل‌ها، Toolها و یا system promptهای متفاوتی، استفاده کند.  
با استفاده از `createDataStreamResponse` و گزینه‌های `sendStart` / `sendFinish` هنگام ادغام داده‌ها در استریم، می‌توانید کنترل کنید که رویدادهای شروع و پایان (start و finish) در چه زمانی به کلاینت ارسال شوند و این امکان فراهم می‌شود تا در یک پیام واحد از رابط کاربری دستیار، مراحل مختلفی را پیاده‌سازی کنید.

## سرور

قطعه کد زیر را در مسیر `app/api/chat/route.ts`، قرار دهید:  

```js
// npm i @ai-sdk/openai@^1 ai@^4 zod

import { createOpenAI } from '@ai-sdk/openai';
import { createDataStreamResponse, streamText, tool, convertToCoreMessages } from 'ai';
import { z } from 'zod';

const my_model = createOpenAI({
  baseURL: process.env.BASE_URL!,
  apiKey: process.env.LIARA_API_KEY!,
});

export async function POST(req: Request) {
  const { messages } = await req.json();

  return createDataStreamResponse({
    execute: async dataStream => {
      // step 1 example: forced tool call
      const result1 = streamText({
        model: my_model('openai/gpt-4o-mini', { structuredOutputs: true }),
        system: 'Extract the user goal from the conversation.',
        messages,
        toolChoice: 'required', // force the model to call a tool
        tools: {
          extractGoal: tool({
            parameters: z.object({ goal: z.string() }),
            execute: async ({ goal }) => goal, // no-op extract tool
          }),
        },
      });

      // forward the initial result to the client without the finish event:
      result1.mergeIntoDataStream(dataStream, {
        experimental_sendFinish: false, // omit the finish event
      });

      // note: you can use any programming construct here, e.g. if-else, loops, etc.
      // workflow programming is normal programming with this approach.

      // example: continue stream with forced tool call from previous step
      const result2 = streamText({
        // different system prompt, different model, no tools:
        model: my_model('openai/gpt-4.1'),
        system:
          'You are a helpful assistant with a different system prompt. Repeat the extract user goal in your answer.',
        // continue the workflow stream with the messages from the previous step:
        messages: [
          ...convertToCoreMessages(messages),
          ...(await result1.response).messages,
        ],
      });

      // forward the 2nd result to the client (incl. the finish event):
      result2.mergeIntoDataStream(dataStream, {
        experimental_sendStart: false, // omit the start event
      });
    },
  });
}
```
> متغیرهای محیطی `BASE_URL` و `LIARA_API_KEY` همان baseUrl [سرویس هوش مصنوعی لیارا](https://docs.liara.ir/products/ai/) و [کلید API لیارا](https://docs.liara.ir/references/api/about/#api-access-key) هستند که باید در بخش متغیرهای محیطی برنامه خود، آن‌ها را تنظیم کنید.

## کلاینت

در فایل `app/page.tsx` قطعه کد زیر را قرار دهید:  

```js
// npm i @ai-sdk/react@^1.2.12
'use client';

import { useChat } from '@ai-sdk/react';

export default function Chat() {
  const { messages, input, handleInputChange, handleSubmit } = useChat();

  return (
    <div>
      {messages?.map(message => (
        <div key={message.id}>
          <strong>{`${message.role}: `}</strong>
          {message.parts.map((part, index) => {
            switch (part.type) {
              case 'text':
                return <span key={index}>{part.text}</span>;
              case 'tool-invocation': {
                return (
                  {JSON.stringify(part.toolInvocation, null, 2)}
                  </pre>
                );
              }
            }
          })}
        </div>
      ))}
      <form onSubmit={handleSubmit}>
        <input value={input} onChange={handleInputChange} />
      </form>
    </div>
  );
}
```

خروجی برنامه فوق:  

![example of multi-step streaming text in nextjs app router](https://media.liara.ir/ai/ai-sdk/cookbook/nextjs/stream-text-multistep.png)

> پروژه فوق را می‌توانید به‌صورت کامل در [گیت‌هاب لیارا](https://github.com/liara-cloud/ai-sdk-examples/tree/master/NextJS/stream-text-multistep)، مشاهده کنید.

## all links

[All links of docs](https://docs.liara.ir/all-links-llms.txt)
