Original link: https://docs.liara.ir/ai/cookbook/nextjs/human-in-the-loop/

# اضافه کردن Human-in-the-Loop به NextJS در AI

Human-in-the-Loop یعنی دخالت انسان در چرخه تصمیم‌گیری یا یادگیری یک سیستم هوشمند، برای اصلاح، هدایت یا تأیید نتایج آن.  
هنگام ساخت agentic systemها، افزودن قابلیت "انسان در حلقه"  یا همان "Human-in-the-Loop - HITL" بسیار اهمیت دارد تا اطمینان حاصل شود که کاربران می‌توانند پیش از اجرای اقدامات توسط سیستم، آن‌ها را تأیید یا رد کنند.

در این دستورالعمل، ابتدا یک راه‌حل سطح پایین برای پیاده‌سازی HITL ارائه می‌شود و سپس یک مثال abstraction معرفی خواهد شد که می‌توانید آن را بر اساس نیازهای خود پیاده‌سازی و سفارشی‌سازی کنید.

## بک‌گراند

برای درک نحوه‌ی پیاده‌سازی این قابلیت، بیایید ببینیم که tool calling در یک برنامه‌ی چت‌بات ساده‌ی NextJS با استفاده از AI SDK چگونه عمل می‌کند.  
در سمت فرانت‌اند، از هوک `useChat` برای مدیریت state پیام‌ها و تعامل کاربر (از جمله کنترل ارسال ورودی و فرم) استفاده می‌شود.

قطعه کد زیر را در مسیر `app/page.tsx`، قرار دهید.  

```js
// npm i @ai-sdk/react@^1.2.12
'use client';

import { useChat } from '@ai-sdk/react';

export default function Chat() {
  const { messages, input, handleInputChange, handleSubmit } = useChat();

  return (
    <div>
      <div>
        {messages?.map(m => (
          <div key={m.id}>
            <strong>{`${m.role}: `}</strong>
            {m.parts?.map((part, i) => {
              switch (part.type) {
                case 'text':
                  return <div key={i}>{part.text}</div>;
              }
            })}
            
          </div>
        ))}
      </div>

      <form onSubmit={handleSubmit}>
        <input
          value={input}
          placeholder="Say something..."
          onChange={handleInputChange}
        />
      </form>
    </div>
  );
}
```

در سمت بک‌اند، یک API Route ایجاد کنید که یک `DataStreamResponse` را برمی‌گرداند.  
درون تابع `execute`، تابع `streamText` را فراخوانی کرده و پیام‌هایی را که از کلاینت ارسال شده‌اند به آن پاس دهید.  
در نهایت، خروجی حاصل از generation را در استریم داده‌ها، ادغام کنید.

قطعه کد زیر را در مسیر `api/chat/route.ts`، قرار دهید:  

```js
// npm i @ai-sdk/openai@^1 ai@^4 zod

import { createOpenAI } from '@ai-sdk/openai'
import { createDataStreamResponse, streamText, tool } from 'ai';
import { z } from 'zod';

const my_model = createOpenAI({
  baseURL: process.env.BASE_URL!,
  apiKey: process.env.LIARA_API_KEY!,
});

export async function POST(req: Request) {
  const { messages } = await req.json();

  return createDataStreamResponse({
    execute: async dataStream => {
      const result = streamText({
        model: my_model('openai/gpt-4o-mini'),
        messages,
        tools: {
          getWeatherInformation: tool({
            description: 'show the weather in a given city to the user',
            parameters: z.object({ city: z.string() }),
            execute: async ({}: { city: string }) => {
              const weatherOptions = ['sunny', 'cloudy', 'rainy', 'snowy'];
              return weatherOptions[
                Math.floor(Math.random() * weatherOptions.length)
              ];
            },
          }),
        },
      });

      result.mergeIntoDataStream(dataStream);
    },
  });
}
```

> متغیرهای محیطی `BASE_URL` و `LIARA_API_KEY` همان baseUrl [سرویس هوش مصنوعی لیارا](https://liara.ir/products/ai/) و [کلید API لیارا](https://docs.liara.ir/references/api/about/#api-access-key) هستند که باید در بخش متغیرهای محیطی برنامه خود، آن‌ها را تنظیم کنید.

*چه اتفاقی می‌افتد اگر از LLM درباره‌ی وضعیت آب‌وهوای تهران بپرسید؟*

LLM، تنها یک tool به نام `weather` در اختیار دارد که برای اجرا نیاز به یک پارامتر `location` دارد.  
بر اساس توضیح tool، این ابزار قرار است "وضعیت آب‌وهوا را در یک شهر مشخص به کاربر نمایش دهد".  
اگر LLM تشخیص دهد که `weather` می‌تواند به پرسش کاربر پاسخ دهد، یک `ToolCall` تولید می‌کند و `location` موردنظر را از متن ورودی استخراج می‌نماید.  
سپس، AI SDK تابع `execute` مربوط به آن tool را اجرا می‌کند و پارامتر `location` را به آن می‌دهد. در نهایت، نتیجه‌ی اجرا به‌صورت یک `ToolResult` بازگردانده می‌شود.

برای افزودن مرحله‌ی HITL، باید یک مرحله‌ی confirmation بین `ToolCall` و `ToolResult` قرار دهید.  
در این مرحله، پیش از اجرای tool، از کاربر تأیید گرفته می‌شود که آیا اجازه اجرای tool صادر شود یا خیر.

## افزودن مرحله Confirmation

در یک نگاه کلی، شما باید مراحل زیر را انجام دهید:

- یک رابط کاربری confirmation با دکمه‌های Yes/No نمایش دهید
- یک نتیجه موقت از tool ارسال کنید که نشان دهد آیا کاربر تأیید کرده یا رد کرده
- سمت سرور، confirmation state را در نتیجه tool بررسی کنید. اگر مورد تایید بود، tool اجرا و نتیجه به‌روزرسانی شود؛ در غیر این‌صورت، نتیجه با یک پیام خطا به‌روز شود
- نتیجه به‌روزرسانی‌شده tool را به کلاینت ارسال کنید تا state حفظ شود

## ارسال Tool Call به کلاینت

برای پیاده‌سازی عملکرد HITL، ابتدا باید تابع `execute` را در تعریف tool حذف کنید. این کار اجازه می‌دهد که کلاینت، Tool Call را دریافت کرده و مسئولیت افزودن نتیجه نهایی tool به Tool Call را بر عهده بگیرد.  
مسیر `api/chat/route.ts` را با قطعه کد زیر، آپدیت کنید:  

```js
// npm i @ai-sdk/openai@^1 ai@^4 zod

import { createOpenAI } from '@ai-sdk/openai'
import { createDataStreamResponse, streamText, tool } from 'ai';
import { z } from 'zod';

const my_model = createOpenAI({
  baseURL: process.env.BASE_URL!,
  apiKey: process.env.LIARA_API_KEY!,
});

export async function POST(req: Request) {
  const { messages } = await req.json();

  return createDataStreamResponse({
    execute: async dataStream => {
      const result = streamText({
        model: my_model('openai/gpt-4o-mini'),
        messages,
        tools: {
          getWeatherInformation: tool({
            description: 'show the weather in a given city to the user',
            parameters: z.object({ city: z.string() }),
            // execute function removed to stop automatic execution
          }),
        },
      });

      result.mergeIntoDataStream(dataStream);
    },
  });
}
```

> هر Tool Call باید یک Tool Result داشته باشد. اگر نتیجه‌ای برای Tool اضافه نکنید، تمام Generationهای بعدی، با خطا مواجه خواهند شد.

## قطع Tool Call

در Frontend، شما  
می‌توانید با بررسی messages، محتوای آن را نمایش دهید، یا بررسی کنید که آیا tool فراخوانی شده و نیاز به تأیید دارد یا خیر.  
شما می‌توانید بررسی کنید که آیا یک Tool که نیاز به تأیید دارد فراخوانی شده است یا خیر؛ و در صورت رخ دادن چنین فراخوانی، گزینه‌هایی برای تأیید یا رد آن در اختیار کاربر قرار دهید. این فرآیند تأیید با استفاده از تابع `addToolResult` انجام می‌شود؛ به این صورت که یک tool result تولید کرده و آن را به فراخوانی Tool مربوطه پیوست می‌کند.

مسیر `app/page.tsx` را با قطعه کد زیر، آپدیت کنید:

```js
// npm i @ai-sdk/react@^1.2.12
'use client';

import { useChat } from '@ai-sdk/react';

export default function Chat() {
  const { messages, input, handleInputChange, handleSubmit, addToolResult } =
    useChat();

  return (
    <div>
      <div>
        {messages?.map(m => (
          <div key={m.id}>
            <strong>{`${m.role}: `}</strong>
            {m.parts?.map((part, i) => {
              switch (part.type) {
                case 'text':
                  return <div key={i}>{part.text}</div>;
                case 'tool-invocation':
                  const toolInvocation = part.toolInvocation;
                  const toolCallId = toolInvocation.toolCallId;

                  // render confirmation tool (client-side tool with user interaction)
                  if (
                    toolInvocation.toolName === 'getWeatherInformation' &&
                    toolInvocation.state === 'call'
                  ) {
                    return (
                      <div key={toolCallId}>
                        Get weather information for {toolInvocation.args.city}?
                        <div>
                          <button
                            onClick={() =>
                              addToolResult({
                                toolCallId,
                                result: 'Yes, confirmed.',
                              })
                            }
                          >
                            Yes
                          </button>
                          <button
                            onClick={() =>
                              addToolResult({
                                toolCallId,
                                result: 'No, denied.',
                              })
                            }
                          >
                            No
                          </button>
                        </div>
                      </div>
                    );
                  }
              }
            })}
            
          </div>
        ))}
      </div>

      <form onSubmit={handleSubmit}>
        <input
          value={input}
          placeholder="Say something..."
          onChange={handleInputChange}
        />
      </form>
    </div>
  );
}
```
> تابع `addToolResult` باعث فراخوانی Route Handler شما خواهد شد

## مدیریت Confirmation Response

افزودن Tool Result باعث می‌شود که یک بار دیگر route handler شما فراخوانی شود. پیش از ارسال پیام‌های جدید به LLM، آخرین پیام استخراج می‌شود و اجزای آن با استفاده از تابع map بررسی می‌گردند تا مشخص شود آیا آن Tool که نیاز به تأیید دارد، فراخوانی شده و در وضعیت result قرار دارد یا خیر. اگر این شرایط برقرار باشند، state تأیید بررسی می‌شود؛ یعنی همان state که با استفاده از تابع `addToolResult` در فرانت‌اند تعیین شده است.

مسیر `api/chat/route.ts` را با قطعه کد زیر، آپدیت کنید:

```js
// npm i @ai-sdk/openai@^1 ai@^4 zod

import { createOpenAI } from '@ai-sdk/openai'
import {
  createDataStreamResponse,
  formatDataStreamPart,
  Message,
  streamText,
  tool,
} from 'ai';
import { z } from 'zod';

const my_model = createOpenAI({
  baseURL: process.env.BASE_URL!,
  apiKey: process.env.LIARA_API_KEY!,
});

export async function POST(req: Request) {
  const { messages }: { messages: Message[] } = await req.json();

  return createDataStreamResponse({
    execute: async dataStream => {
      // pull out last message
      const lastMessage = messages[messages.length - 1];

      lastMessage.parts = await Promise.all(
        // map through all message parts
        lastMessage.parts?.map(async part => {
          if (part.type !== 'tool-invocation') {
            return part;
          }
          const toolInvocation = part.toolInvocation;
          // return if tool isn't weather tool or in a result state
          if (
            toolInvocation.toolName !== 'getWeatherInformation' ||
            toolInvocation.state !== 'result'
          ) {
            return part;
          }

          // switch through tool result states (set on the frontend)
          switch (toolInvocation.result) {
            case 'Yes, confirmed.': {
              const result = await executeWeatherTool(toolInvocation.args);

              // forward updated tool result to the client:
              dataStream.write(
                formatDataStreamPart('tool_result', {
                  toolCallId: toolInvocation.toolCallId,
                  result,
                }),
              );

              // update the message part:
              return { ...part, toolInvocation: { ...toolInvocation, result } };
            }
            case 'No, denied.': {
              const result = 'Error: User denied access to weather information';

              // forward updated tool result to the client:
              dataStream.write(
                formatDataStreamPart('tool_result', {
                  toolCallId: toolInvocation.toolCallId,
                  result,
                }),
              );

              // update the message part:
              return { ...part, toolInvocation: { ...toolInvocation, result } };
            }
            default:
              return part;
          }
        }) ?? [],
      );

      const result = streamText({
        model: my_model('openai/gpt-4o-mini'),
        messages,
        tools: {
          getWeatherInformation: tool({
            description: 'show the weather in a given city to the user',
            parameters: z.object({ city: z.string() }),
          }),
        },
      });

      result.mergeIntoDataStream(dataStream);
    },
  });
}

async function executeWeatherTool({}: { city: string }) {
  const weatherOptions = ['sunny', 'cloudy', 'rainy', 'snowy'];
  return weatherOptions[Math.floor(Math.random() * weatherOptions.length)];
}
```

در قطعه کد فوق، از stringهای ساده‌ای مانند "Yes, the user confirmed" یا "No, the user declined" به‌عنوان state استفاده شده است.  
اگر تأیید انجام شده باشد، Tool اجرا می‌شود. در غیر این صورت، Tool اجرا نمی‌شود.  
در هر دو حالت، Tool Result به‌روزرسانی می‌شود؛  
این به‌روزرسانی با استفاده از تابع `addToolResult`، انجام می‌شود.  
و خروجی نهایی، یا اجرای تابع execute است یا پیام "Execution declined".  
در نهایت، Tool Result به‌روز شده، به فرانت‌اند ارسال می‌شود تا state synchronization حفظ شود.

پس از مدیریت Tool Result، مسیر API ادامه می‌یابد. این باعث ایجاد یک مرحله تولید جدید با استفاده از Tool Result به‌روزشده می‌شود، که به LLM امکان می‌دهد تلاش خود را برای حل query ادامه دهد.

## ساخت Abstraction اختصاصی

راه‌حل ارائه‌شده در بخش قبل در سطح پایین قرار دارد و برای استفاده در محیط‌های عملیاتی (Production) چندان کاربرپسند و مناسب نیست.  
شما می‌توانید با استفاده از مفاهیم مطرح‌شده، یک لایه‌ی abstraction اختصاصی و سطح‌بالا طراحی کنید.

## ایجاد توابع Utility

در مسیر `utils.ts`، قطعه کد زیر را قرار دهید:

```js
import { formatDataStreamPart, Message } from '@ai-sdk/ui-utils';
import {
  convertToCoreMessages,
  DataStreamWriter,
  ToolExecutionOptions,
  ToolSet,
} from 'ai';
import { z } from 'zod';

// Approval string to be shared across frontend and backend
export const APPROVAL = {
  YES: 'Yes, confirmed.',
  NO: 'No, denied.',
} as const;

function isValidToolName<K extends PropertyKey, T extends object>(
  key: K,
  obj: T,
): key is K & keyof T {
  return key in obj;
}

/**
 * Processes tool invocations where human input is required, executing tools when authorized.
 *
 * @param options - The function options
 * @param options.tools - Map of tool names to Tool instances that may expose execute functions
 * @param options.dataStream - Data stream for sending results back to the client
 * @param options.messages - Array of messages to process
 * @param executionFunctions - Map of tool names to execute functions
 * @returns Promise resolving to the processed messages
 */
export async function processToolCalls<
  Tools extends ToolSet,
  ExecutableTools extends {
    [Tool in keyof Tools as Tools[Tool] extends { execute: Function }
      ? never
      : Tool]: Tools[Tool];
  },
>(
  {
    dataStream,
    messages,
  }: {
    tools: Tools; // used for type inference
    dataStream: DataStreamWriter;
    messages: Message[];
  },
  executeFunctions: {
    [K in keyof Tools & keyof ExecutableTools]?: (
      args: z.infer<ExecutableTools[K]['parameters']>,
      context: ToolExecutionOptions,
    ) => Promise<any>;
  },
): Promise<Message[]> {
  const lastMessage = messages[messages.length - 1];
  const parts = lastMessage.parts;
  if (!parts) return messages;

  const processedParts = await Promise.all(
    parts.map(async part => {
      // Only process tool invocations parts
      if (part.type !== 'tool-invocation') return part;

      const { toolInvocation } = part;
      const toolName = toolInvocation.toolName;

      // Only continue if we have an execute function for the tool (meaning it requires confirmation) and it's in a 'result' state
      if (!(toolName in executeFunctions) || toolInvocation.state !== 'result')
        return part;

      let result;

      if (toolInvocation.result === APPROVAL.YES) {
        // Get the tool and check if the tool has an execute function.
        if (
          !isValidToolName(toolName, executeFunctions) ||
          toolInvocation.state !== 'result'
        ) {
          return part;
        }

        const toolInstance = executeFunctions[toolName];
        if (toolInstance) {
          result = await toolInstance(toolInvocation.args, {
            messages: convertToCoreMessages(messages),
            toolCallId: toolInvocation.toolCallId,
          });
        } else {
          result = 'Error: No execute function found on tool';
        }
      } else if (toolInvocation.result === APPROVAL.NO) {
        result = 'Error: User denied access to tool execution';
      } else {
        // For any unhandled responses, return the original part.
        return part;
      }

      // Forward updated tool result to the client.
      dataStream.write(
        formatDataStreamPart('tool_result', {
          toolCallId: toolInvocation.toolCallId,
          result,
        }),
      );

      // Return updated toolInvocation with the actual result.
      return {
        ...part,
        toolInvocation: {
          ...toolInvocation,
          result,
        },
      };
    }),
  );

  // Finally return the processed messages
  return [...messages.slice(0, -1), { ...lastMessage, parts: processedParts }];
}

export function getToolsRequiringConfirmation<T extends ToolSet>(
  tools: T,
): string[] {
  return (Object.keys(tools) as (keyof T)[]).filter(key => {
    const maybeTool = tools[key];
    return typeof maybeTool.execute !== 'function';
  }) as string[];
}
```

در این فایل، ابتدا stringهای مربوط به confirmation به‌صورت constants تعریف شده است تا بتوان آن‌ها را هم در فرانت‌اند و هم در بک‌اند به‌صورت مشترک استفاده کرد؛ این کار احتمال بروز خطا را کاهش می‌دهد.  
سپس تابعی به نام `processToolCalls` ایجاد شده است که ورودی‌های آن شامل `messages`، `tools` و `datastream` است. همچنین این تابع یک پارامتر دوم به نام `executeFunction` دریافت می‌کند که یک Object شامل نگاشتی از `toolName` به توابعی است که قرار است پس از تأیید انسانی اجرا شوند.  
این تابع به‌صورت Strongly Typed پیاده‌سازی شده است، بنابراین:

- برای executableTools که فاقد تابع `execute` هستند، قابلیت autocompletion فراهم شده است
- Type-Safety برای آرگومان‌ها و گزینه‌هایی که در تابع `execute` قابل دسترسی هستند، تضمین می‌شود

برخلاف نمونه‌ی سطح‌پایین قبلی، این پیاده‌سازی یک آرایه‌ی تغییر‌یافته از پیام‌ها را بازمی‌گرداند که می‌تواند مستقیماً به LLM ارسال شود.  
در نهایت، تابعی به نام `getToolsRequiringConfirmation` تعریف شده است که Toolها را به‌عنوان آرگومان دریافت کرده و نام Toolهایی که فاقد تابع `execute` هستند را به‌صورت یک آرایه از رشته‌ها بازمی‌گرداند. این کار موجب می‌شود که نیازی به نوشتن دستی و بررسی نام Toolها در فرانت‌اند نباشد.

برای استفاده از این توابع utility، لازم است که تعریف Toolها را به فایل جداگانه‌ای منتقل کنید:  
در مسیر `tools.ts`، قطعه کد زیر را قرار دهید:

```js
import { tool } from 'ai';
import { z } from 'zod';

const getWeatherInformation = tool({
  description: 'show the weather in a given city to the user',
  parameters: z.object({ city: z.string() }),
  // no execute function, we want human in the loop
});

const getLocalTime = tool({
  description: 'get the local time for a specified location',
  parameters: z.object({ location: z.string() }),
  // including execute function -> no confirmation required
  execute: async ({ location }) => {
    console.log(`Getting local time for ${location}`);
    return '10am';
  },
});

export const tools = {
  getWeatherInformation,
  getLocalTime,
};
```

در فایل فوق، دو Tool به نام‌های `getWeatherInformation` و `getLocalTime` تعریف شده است.  
`getWeatherInformation` نیاز به تأیید انسانی دارد، در  
حالی که `getLocalTime` به‌صورت خودکار اجرا می‌شود و نیازی به تأیید ندارد.

## به‌روزرسانی Route Handler

Route Handler خود را به‌روزرسانی کنید تا از تابع `processToolCalls` استفاده کند.  
قطعه کد زیر را در مسیر `api/chat/route.ts` قرار دهید:

```js
// npm i @ai-sdk/openai@^1 ai@^4 zod

import { createOpenAI } from '@ai-sdk/openai'
import { createDataStreamResponse, Message, streamText } from 'ai';
import { processToolCalls } from '@/utils';
import { tools } from '@/tools';

const my_model = createOpenAI({
  baseURL: process.env.BASE_URL!,
  apiKey: process.env.LIARA_API_KEY!,
});

// Allow streaming responses up to 30 seconds
export const maxDuration = 30;
export async function POST(req: Request) {
  const { messages }: { messages: Message[] } = await req.json();

  return createDataStreamResponse({
    execute: async dataStream => {
      // Utility function to handle tools that require human confirmation
      // Checks for confirmation in last message and then runs associated tool
      const processedMessages = await processToolCalls(
        {
          messages,
          dataStream,
          tools,
        },
        {
          // type-safe object for tools without an execute function
          getWeatherInformation: async ({ city }) => {
            const conditions = ['sunny', 'cloudy', 'rainy', 'snowy'];
            return `The weather in ${city} is ${
              conditions[Math.floor(Math.random() * conditions.length)]
            }.`;
          },
        },
      );

      const result = streamText({
        model: my_model('openai/gpt-4o-mini'),
        messages: processedMessages,
        tools,
      });

      result.mergeIntoDataStream(dataStream);
    },
  });
}
```

## به‌روزرسانی فرانت‌اند

در نهایت، فرانت‌اند را به‌روزرسانی کنید تا از تابع جدید `getToolsRequiringConfirmation` و مقادیر `APPROVAL` استفاده کند.  
قطعه کد زیر را در مسیر `app/page.tsx` قرار دهید:

```js
// npm i @ai-sdk/react@^1.2.12
'use client';

import { Message, useChat } from '@ai-sdk/react';
import {
  APPROVAL,
  getToolsRequiringConfirmation,
} from '@/utils';
import { tools } from '@/tools';

export default function Chat() {
  const { messages, input, handleInputChange, handleSubmit, addToolResult } =
    useChat({
      maxSteps: 5,
    });

  const toolsRequiringConfirmation = getToolsRequiringConfirmation(tools);

  // used to disable input while confirmation is pending
  const pendingToolCallConfirmation = messages.some((m: Message) =>
    m.parts?.some(
      part =>
        part.type === 'tool-invocation' &&
        part.toolInvocation.state === 'call' &&
        toolsRequiringConfirmation.includes(part.toolInvocation.toolName),
    ),
  );

  return (
    <div className="flex flex-col w-full max-w-md py-24 mx-auto stretch">
      {messages?.map((m: Message) => (
        <div key={m.id} className="whitespace-pre-wrap">
          <strong>{`${m.role}: `}</strong>
          {m.parts?.map((part, i) => {
            switch (part.type) {
              case 'text':
                return <div key={i}>{part.text}</div>;
              case 'tool-invocation':
                const toolInvocation = part.toolInvocation;
                const toolCallId = toolInvocation.toolCallId;
                const dynamicInfoStyles = 'font-mono bg-gray-100 p-1 text-sm';

                // render confirmation tool (client-side tool with user interaction)
                if (
                  toolsRequiringConfirmation.includes(
                    toolInvocation.toolName,
                  ) &&
                  toolInvocation.state === 'call'
                ) {
                  return (
                    <div key={toolCallId} className="text-gray-500">
                      Run{' '}
                      <span className={dynamicInfoStyles}>
                        {toolInvocation.toolName}
                      </span>{' '}
                      with args:{' '}
                      <span className={dynamicInfoStyles}>
                        {JSON.stringify(toolInvocation.args)}
                      </span>
                      <div className="flex gap-2 pt-2">
                        <button
                          className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700"
                          onClick={() =>
                            addToolResult({
                              toolCallId,
                              result: APPROVAL.YES,
                            })
                          }
                        >
                          Yes
                        </button>
                        <button
                          className="px-4 py-2 font-bold text-white bg-red-500 rounded hover:bg-red-700"
                          onClick={() =>
                            addToolResult({
                              toolCallId,
                              result: APPROVAL.NO,
                            })
                          }
                        >
                          No
                        </button>
                      </div>
                    </div>
                  );
                }
            }
          })}
          
        </div>
      ))}

      <form onSubmit={handleSubmit}>
        <input
          disabled={pendingToolCallConfirmation}
          className="fixed bottom-0 w-full max-w-md p-2 mb-8 border border-gray-300 rounded shadow-xl"
          value={input}
          placeholder="Say something..."
          onChange={handleInputChange}
        />
      </form>
    </div>
  );
}
```

خروجی برنامه فوق، مشابه زیر است:  

[Video link](https://media.liara.ir/ai/ai-sdk/cookbook/nextjs/human-in-the-loop-example.mp4)

> پروژه فوق را می‌توانید به‌صورت کامل در [گیت‌هاب لیارا](https://github.com/liara-cloud/ai-sdk-examples/tree/master/NextJS/human-in-the-loop)، مشاهده کنید.

## all links

[All links of docs](https://docs.liara.ir/all-links-llms.txt)
