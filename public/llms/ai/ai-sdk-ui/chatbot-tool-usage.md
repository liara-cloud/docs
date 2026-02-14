Original link: https://docs.liara.ir/ai/ai-sdk-ui/chatbot-tool-usage/

# استفاده از toolها در چت بات هوش مصنوعی

با استفاده از `useChat` و `streamText`، می‌توانید در چت‌بات خود از toolها استفاده کنید. AI SDK در این زمینه سه نوع tool را پشتیبانی می‌کند:

- toolهایی که به صورت خودکار در سمت سرور اجرا می‌شوند
- toolهایی که به صورت خودکار در سمت کاربر (کلاینت) اجرا می‌شوند
- toolهایی که به تعامل کاربر نیاز دارند، مانند دیالوگ‌های تایید

جریان کار به صورت زیر است:

۱. کاربر پیامی را در رابط کاربری چت وارد می‌کند.

۲. پیام به API route ارسال می‌شود.

۳. در سمت سرور، مدل در طی فراخوانی `streamText`، tool callها را تولید می‌کند. 

۴. تمامی tool callها به سمت کلاینت، فوروارد می‌شوند.

۵. toolهای سمت سرور، با استفاده از متد `execute` خود، اجرا می‌شوند و نتایج آن‌ها به کلاینت فوروارد می‌شود.

۶. toolهای سمت کلاینت که باید به صورت خودکار اجرا شوند توسط یک callback به نام `onToolCall` مدیریت می‌شوند. شما می‌توانید نتایج tool را از کال‌بک return کنید. 

۷. آن دسته از toolهای سمت کلاینت که به تعامل کاربر نیاز دارند، می‌توانند در UI نمایش داده شوند. tool callها و نتایج آن‌ها به عنوان tool invocation parts در فیلد `parts` آخرین پیام مدل، در دسترس هستند. 

۸. وقتی که تعامل کاربر تمام شد، `addToolResult` می‌تواند به کار رود تا نتایج tool به صفحه چت اضافه شود. 

۹. هنگامی که tool callها در آخرین پیام مدل قرار دارند و تمامی نتایج toolها در دسترس هستند، کلاینت، پیام‌های به روزرسانی شده را به سمت سرور بازارسال می‌کند. این کار، باعث می‌شود همین چرخه ۹ مرحله‌ای، دوباره تکرار شود.  

tool call و tool executionها در پیام مدل تحت عنوان tool invocation parts، ادغام می‌شوند. یک tool invocation در ابتدا یک tool call است و سپس هنگامی که tool اجرا می‌شود، یک tool result می‌شود.  
یک tool result شامل تمامی اطلاعات در مورد tool call و نتایج اجرای tool است.  

> برای اینکه هنگام استفاده از toolهای سمت سرور، به‌صورت خودکار یک درخواست دیگر به سرور ارسال شود، لازم است در `useChat` مقدار `maxSteps` بزرگ‌تر از `1` تنظیم شود. این ویژگی به‌طور پیش‌فرض برای سازگاری با نسخه‌های قبلی غیرفعال است.

## مثال

در این مثال، از سه tool استفاده خواهیم کرد:  

- `getWeatherInformation`: یک tool سمت سرور که به صورت خودکار اجرا می‌شود و وضعیت آب‌وهوای شهر خواسته شده را return می‌کند
- `askForConfirmation`: یک tool سمت کلاینت نیازمند تعامل با کاربر که از کاربر درخواست تایید دارد
- `getLocation`: یک tool سمت سرور که به صورت خودکار اجرا می‌شود و یک شهر تصادفی را return می‌کند

در مسیر `app/api/chat/route.ts`، قطعه کد زیر را قرار دهید:  

```js
// npm add @ai-sdk/openai@^1 ai@^4

import { createOpenAI } from '@ai-sdk/openai';
import { streamText } from 'ai';
import { z } from 'zod';

const my_model = createOpenAI({
  baseURL: process.env.BASE_URL!,
  apiKey: process.env.LIARA_API_KEY!,
});

// Allow streaming responses up to 30 seconds
export const maxDuration = 30;

export async function POST(req: Request) {
  const { messages } = await req.json();

  const result = streamText({
    model: my_model('openai/gpt-4o-mini'),
    messages,
    tools: {
      // server-side tool with execute function:
      getWeatherInformation: {
        description: 'show the weather in a given city to the user',
        parameters: z.object({ city: z.string() }),
        execute: async ({}: { city: string }) => {
          const weatherOptions = ['sunny', 'cloudy', 'rainy', 'snowy', 'windy'];
          return weatherOptions[
            Math.floor(Math.random() * weatherOptions.length)
          ];
        },
      },
      // client-side tool that starts user interaction:
      askForConfirmation: {
        description: 'Ask the user for confirmation.',
        parameters: z.object({
          message: z.string().describe('The message to ask for confirmation.'),
        }),
      },
      // client-side tool that is automatically executed on the client:
      getLocation: {
        description:
          'Get the user location. Always ask for confirmation before using this tool.',
        parameters: z.object({}),
      },
    },
  });

  return result.toDataStreamResponse();
}
```

## صفحه طرف کلاینت

صفحه طرف کلاینت از هوک `useChat` استفاده خواهد کرد  
تا یک برنامه چت‌بات با استریم پیام بلادرنگ بسازد. tool invocationها در رابط کاربری چت  
به عنوان tool invocation parts نمایش داده خواهند شد. لطفاً اطمینان حاصل کنید  
که پیام‌ها با استفاده از فیلد `parts` موجود در پیام، رندر کنید

سه نکته قابل ذکر وجود دارد:

۱. کال‌بک `onToolCall` برای مدیریت toolهای سمت سرور که باید به صورت خودکار اجرا شوند به کار می‌رود. در این مثال، `getLocation` یک tool سمت سرور است که یک شهر تصادفی را return می‌کند.

۲. فیلد `toolInvocations` موجود در آخرین پیام مدل، شامل تمامی tool callها و نتایج آن‌ها است. `askForConfirmation` که یک tool سمت کلاینت است، در رابط کاربری نمایش داده می‌شود. این tool از کاربر درخواست تایید دارد و نتایج را پس از آنکه کاربر، اجرا را تایید یا لغو می‌کند، نمایش می‌دهد. نتایج tool call با استفاده از `addToolResult` به چت اضافه می‌شود. 

۳. گزینه `maxSteps` بر روی `5` تنظیم شده است. این گزینه، اجازه می‌دهد که کلاینت و سرور چندین بار از toolها استفاده کنند.  

در مسیر `app/page.tsx` قطعه کد زیر را قرار دهید:  

```js
'use client';

import { ToolInvocation } from 'ai';
import { useChat } from '@ai-sdk/react';

export default function Chat() {
  const { messages, input, handleInputChange, handleSubmit, addToolResult } =
    useChat({
      maxSteps: 5,

      // run client-side tools that are automatically executed:
      async onToolCall({ toolCall }) {
        if (toolCall.toolName === 'getLocation') {
          const cities = [
            'New York',
            'Los Angeles',
            'Chicago',
            'San Francisco',
          ];
          return cities[Math.floor(Math.random() * cities.length)];
        }
      },
    });

  return (
    <>
      {messages?.map(message => (
        <div key={message.id}>
          <strong>{`${message.role}: `}</strong>
          {message.parts.map(part => {
            switch (part.type) {
              // render text parts as simple text:
              case 'text':
                return part.text;

              // for tool invocations, distinguish between the tools and the state:
              case 'tool-invocation': {
                const callId = part.toolInvocation.toolCallId;

                switch (part.toolInvocation.toolName) {
                  case 'askForConfirmation': {
                    switch (part.toolInvocation.state) {
                      case 'call':
                        return (
                          <div key={callId}>
                            {part.toolInvocation.args.message}
                            <div>
                              <button
                                onClick={() =>
                                  addToolResult({
                                    toolCallId: callId,
                                    result: 'Yes, confirmed.',
                                  })
                                }
                              >
                                Yes
                              </button>
                              <button
                                onClick={() =>
                                  addToolResult({
                                    toolCallId: callId,
                                    result: 'No, denied',
                                  })
                                }
                              >
                                No
                              </button>
                            </div>
                          </div>
                        );
                      case 'result':
                        return (
                          <div key={callId}>
                            Location access allowed:{' '}
                            {part.toolInvocation.result}
                          </div>
                        );
                    }
                    break;
                  }

                  case 'getLocation': {
                    switch (part.toolInvocation.state) {
                      case 'call':
                        return <div key={callId}>Getting location...</div>;
                      case 'result':
                        return (
                          <div key={callId}>
                            Location: {part.toolInvocation.result}
                          </div>
                        );
                    }
                    break;
                  }

                  case 'getWeatherInformation': {
                    switch (part.toolInvocation.state) {
                      // example of pre-rendering streaming tool calls:
                      case 'partial-call':
                        return (
                          <pre key={callId}>
                            {JSON.stringify(part.toolInvocation, null, 2)}
                          </pre>
                        );
                      case 'call':
                        return (
                          <div key={callId}>
                            Getting weather information for{' '}
                            {part.toolInvocation.args.city}...
                          </div>
                        );
                      case 'result':
                        return (
                          <div key={callId}>
                            Weather in {part.toolInvocation.args.city}:{' '}
                            {part.toolInvocation.result}
                          </div>
                        );
                    }
                    break;
                  }
                }
              }
            }
          })}
          
        </div>
      ))}

      <form onSubmit={handleSubmit}>
        <input value={input} onChange={handleInputChange} />
      </form>
    </>
  );
}
```

## استریم tool call

شما می‌توانید tool callها را هنگامی که در حال تولید شدن هستند، استریم کنید؛ با فعال‌سازی گزینه `toolCallStreaming` در `streamText`.
در مسیر `app/api/chat/route.ts` قطعه کد زیر را قرار دهید:  

```js
// npm add @ai-sdk/openai@^1 ai@^4

import { createOpenAI } from '@ai-sdk/openai';
import { streamText } from 'ai';
import { z } from 'zod';

const my_model = createOpenAI({
  baseURL: process.env.BASE_URL!,
  apiKey: process.env.LIARA_API_KEY!,
});

// Allow streaming responses up to 30 seconds
export const maxDuration = 30;

export async function POST(req: Request) {
  const { messages } = await req.json();

  const result = streamText({
    toolCallStreaming: true,
    model: my_model('openai/gpt-4o-mini'),
    messages,
    tools: {
      // server-side tool with execute function:
      getWeatherInformation: {
        description: 'show the weather in a given city to the user',
        parameters: z.object({ city: z.string() }),
        execute: async ({}: { city: string }) => {
          const weatherOptions = ['sunny', 'cloudy', 'rainy', 'snowy', 'windy'];
          return weatherOptions[
            Math.floor(Math.random() * weatherOptions.length)
          ];
        },
      },
      // client-side tool that starts user interaction:
      askForConfirmation: {
        description: 'Ask the user for confirmation.',
        parameters: z.object({
          message: z.string().describe('The message to ask for confirmation.'),
        }),
      },
      // client-side tool that is automatically executed on the client:
      getLocation: {
        description:
          'Get the user location. Always ask for confirmation before using this tool.',
        parameters: z.object({}),
      },
    },
  });

  return result.toDataStreamResponse();
}
```

هنگامی که flag مذکور فعال شود، tool callها به صورت بخش به بخش، به عنوان بخشی از استریم داده، استریم خواهند شد.  
آن‌ها از طریق هوک `useChat` در دسترس خواهند بود. tool invocation parts موجود در پیام مدل نیز، شامل بخش‌های tool callها هستند. شما می‌توانید از فیلد `state` موجود در tool invocation استفاده کنید تا رابط کاربری درستی را رندر بگیرید.  

در مسیر `app/page.tsx` قطعه کد زیر را قرار دهید:  

```js
'use client';

import { ToolInvocation } from 'ai';
import { useChat } from '@ai-sdk/react';

export default function Chat() {
  const { messages, input, handleInputChange, handleSubmit, addToolResult } =
    useChat({
      maxSteps: 5,

      // run client-side tools that are automatically executed:
      async onToolCall({ toolCall }) {
        if (toolCall.toolName === 'getLocation') {
          const cities = [
            'New York',
            'Los Angeles',
            'Chicago',
            'San Francisco',
          ];
          return cities[Math.floor(Math.random() * cities.length)];
        }
      },
    });

  return (
    <>
      {messages?.map(message => (
        <div key={message.id}>
          <strong>{`${message.role}: `}</strong>
          {message.parts.map(part => {
            switch (part.type) {
              case 'text':
                return part.text;

              case 'tool-invocation': {
                const callId = part.toolInvocation.toolCallId;

                if (part.toolInvocation.state === 'partial-call') {
                  return <pre key={callId}>{JSON.stringify(part.toolInvocation, null, 2)}</pre>;
                }

                switch (part.toolInvocation.toolName) {
                  case 'askForConfirmation': {
                    switch (part.toolInvocation.state) {
                      case 'call':
                        return (
                          <div key={callId}>
                            {part.toolInvocation.args.message}
                            <div>
                              <button
                                onClick={() =>
                                  addToolResult({
                                    toolCallId: callId,
                                    result: 'Yes, confirmed.',
                                  })
                                }
                              >
                                Yes
                              </button>
                              <button
                                onClick={() =>
                                  addToolResult({
                                    toolCallId: callId,
                                    result: 'No, denied',
                                  })
                                }
                              >
                                No
                              </button>
                            </div>
                          </div>
                        );
                      case 'result':
                        return (
                          <div key={callId}>
                            Location access allowed: {part.toolInvocation.result}
                          </div>
                        );
                    }
                    break;
                  }

                  case 'getLocation': {
                    switch (part.toolInvocation.state) {
                      case 'call':
                        return <div key={callId}>Getting location...</div>;
                      case 'result':
                        return <div key={callId}>Location: {part.toolInvocation.result}</div>;
                    }
                    break;
                  }

                  case 'getWeatherInformation': {
                    switch (part.toolInvocation.state) {
                      case 'call':
                        return (
                          <div key={callId}>
                            Getting weather information for {part.toolInvocation.args.city}...
                          </div>
                        );
                      case 'result':
                        return (
                          <div key={callId}>
                            Weather in {part.toolInvocation.args.city}: {part.toolInvocation.result}
                          </div>
                        );
                    }
                  }

                  default:
                    return null;
                }
              }
            }
          })}
          
        </div>
      ))}

      <form onSubmit={handleSubmit}>
        <input value={input} onChange={handleInputChange} />
      </form>
    </>
  );
}
```

## Step start parts

هنگامی که از tool callهای multi-step استفاده می‌کنید، step start partها به پیام مدل، اضافه خواهند شد. اگر  
که قصد دارید مرزهای بین tool invocationها را نمایش دهید، می‌توانید از partهای `step-start` مانند زیر، استفاده کنید:  

```js
'use client';

import { ToolInvocation } from 'ai';
import { useChat } from '@ai-sdk/react';

export default function Chat() {
  const { messages, input, handleInputChange, handleSubmit, addToolResult } =
    useChat({
      maxSteps: 5,

      async onToolCall({ toolCall }) {
        if (toolCall.toolName === 'getLocation') {
          const cities = [
            'New York',
            'Los Angeles',
            'Chicago',
            'San Francisco',
          ];
          return cities[Math.floor(Math.random() * cities.length)];
        }
      },
    });

  return (
    <>
      {messages?.map(message => (
        <div key={message.id}>
          <strong>{`${message.role}: `}</strong>
          {message.parts.map((part, index) => {
            switch (part.type) {
              case 'step-start':
                // show step boundaries as horizontal lines:
                return index > 0 ? (
                  <div key={index} className="text-gray-500">
                    
                  </div>
                ) : null;

              case 'text':
                return part.text;

              case 'tool-invocation': {
                const callId = part.toolInvocation.toolCallId;

                if (part.toolInvocation.state === 'partial-call') {
                  return <pre key={callId}>{JSON.stringify(part.toolInvocation, null, 2)}</pre>;
                }

                switch (part.toolInvocation.toolName) {
                  case 'askForConfirmation': {
                    switch (part.toolInvocation.state) {
                      case 'call':
                        return (
                          <div key={callId}>
                            {part.toolInvocation.args.message}
                            <div>
                              <button
                                onClick={() =>
                                  addToolResult({
                                    toolCallId: callId,
                                    result: 'Yes, confirmed.',
                                  })
                                }
                              >
                                Yes
                              </button>
                              <button
                                onClick={() =>
                                  addToolResult({
                                    toolCallId: callId,
                                    result: 'No, denied',
                                  })
                                }
                              >
                                No
                              </button>
                            </div>
                          </div>
                        );
                      case 'result':
                        return (
                          <div key={callId}>
                            Location access allowed: {part.toolInvocation.result}
                          </div>
                        );
                    }
                    break;
                  }

                  case 'getLocation': {
                    switch (part.toolInvocation.state) {
                      case 'call':
                        return <div key={callId}>Getting location...</div>;
                      case 'result':
                        return <div key={callId}>Location: {part.toolInvocation.result}</div>;
                    }
                    break;
                  }

                  case 'getWeatherInformation': {
                    switch (part.toolInvocation.state) {
                      case 'call':
                        return (
                          <div key={callId}>
                            Getting weather information for {part.toolInvocation.args.city}...
                          </div>
                        );
                      case 'result':
                        return (
                          <div key={callId}>
                            Weather in {part.toolInvocation.args.city}: {part.toolInvocation.result}
                          </div>
                        );
                    }
                    break;
                  }

                  default:
                    return null;
                }
              }
            }
          })}
          
        </div>
      ))}

      <form onSubmit={handleSubmit}>
        <input value={input} onChange={handleInputChange} />
      </form>
    </>
  );
}
```

## فراخوانی‌های multi-step سمت سرور

شما می‌توانید از فراخوانی‌های multi-step سمت سرور با `streamText` نیز، استفاده کنید. این حالت زمانی کار می‌کند که تمامی  
toolهای فراخوانی شده، یک تابع `execute` سمت سرور داشته باشند.  

```js
// npm add @ai-sdk/openai@^1 ai@^4

import { createOpenAI } from '@ai-sdk/openai';
import { streamText } from 'ai';
import { z } from 'zod';

const my_model = createOpenAI({
  baseURL: process.env.BASE_URL!,
  apiKey: process.env.LIARA_API_KEY!,
});

// Allow streaming responses up to 30 seconds
export const maxDuration = 30;

export async function POST(req: Request) {
  const { messages } = await req.json();

  const result = streamText({
    toolCallStreaming: true,
    model: my_model('openai/gpt-4o-mini'),
    messages,
    tools: {
      // server-side tool with execute function:
      getWeatherInformation: {
        description: 'show the weather in a given city to the user',
        parameters: z.object({ city: z.string() }),
        // tool has execute function:
        execute: async ({}: { city: string }) => {
          const weatherOptions = ['sunny', 'cloudy', 'rainy', 'snowy', 'windy'];
          return weatherOptions[
            Math.floor(Math.random() * weatherOptions.length)
          ];
        },
      },
      // client-side tool that starts user interaction:
      askForConfirmation: {
        description: 'Ask the user for confirmation.',
        parameters: z.object({
          message: z.string().describe('The message to ask for confirmation.'),
        }),
      },
      // client-side tool that is automatically executed on the client:
      getLocation: {
        description:
          'Get the user location. Always ask for confirmation before using this tool.',
        parameters: z.object({}),
      },
    },
    maxSteps: 5,

  });

  return result.toDataStreamResponse();
}
```

## خطاها

مدل‌ها هنگام فراخوانی toolها می‌توانند دچار خطا شوند. به صورت پیش‌فرض، این خطاها  
به دلایل امنیتی، پنهان می‌شوند و در رابط کاربری تحت عنوان "An error occurred" نمایش داده می‌شوند.

برای نمایش خطاها، شما می‌توانید از تابع `getErrorMessage` در هنگام فراخوانی `toDataStreamResponse` استفاده کنید.  

```js
// npm add @ai-sdk/openai@^1 ai@^4

import { createOpenAI } from '@ai-sdk/openai';
import { streamText } from 'ai';
import { z } from 'zod';

const my_model = createOpenAI({
  baseURL: process.env.BASE_URL!,
  apiKey: process.env.LIARA_API_KEY!,
});

// Allow streaming responses up to 30 seconds
export const maxDuration = 30;

export function errorHandler(error: unknown) {
  if (error == null) {
    return 'unknown error';
  }

  if (typeof error === 'string') {
    return error;
  }

  if (error instanceof Error) {
    return error.message;
  }

  return JSON.stringify(error);
}

export async function POST(req: Request) {
  const { messages } = await req.json();

  const result = streamText({
    toolCallStreaming: true,
    model: my_model('openai/gpt-4o-mini'),
    messages,
    tools: {
      // server-side tool with execute function:
      getWeatherInformation: {
        description: 'show the weather in a given city to the user',
        parameters: z.object({ city: z.string() }),
        // tool has execute function:
        execute: async ({}: { city: string }) => {
          const weatherOptions = ['sunny', 'cloudy', 'rainy', 'snowy', 'windy'];
          return weatherOptions[
            Math.floor(Math.random() * weatherOptions.length)
          ];
        },
      },
      // client-side tool that starts user interaction:
      askForConfirmation: {
        description: 'Ask the user for confirmation.',
        parameters: z.object({
          message: z.string().describe('The message to ask for confirmation.'),
        }),
      },
      // client-side tool that is automatically executed on the client:
      getLocation: {
        description:
          'Get the user location. Always ask for confirmation before using this tool.',
        parameters: z.object({}),
      },
    },
    maxSteps: 5,

  });

  return result.toDataStreamResponse({
    getErrorMessage: errorHandler,
  });
}
```

در صورتی که از `createDataStreamResponse` استفاده می‌کنید، می‌توانید تابع `onError` را هنگام فراخوانی `toDataStreamResponse` استفاده کنید.  

```js
const response = createDataStreamResponse({
  // ...
  async execute(dataStream) {
    // ...
  },
  onError: error => `Custom error: ${error.message}`,
});
```

## all links

[All links of docs](https://docs.liara.ir/all-links-llms.txt)
