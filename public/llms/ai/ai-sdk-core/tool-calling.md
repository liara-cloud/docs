Original link: https://docs.liara.ir/ai/ai-sdk-core/tool-calling/

# قابلیت Tool Calling در AI SDK 

در `AI SDK`، یک `tool` می‌تواند هم در `generateText` استفاده شود، هم در `streamText`. این کار با قرار دادن یک یا چند Tool در پارامتری به نام `tools`، انجام می‌شود.  
یک `tool`، شامل سه خصیصه (property)، می‌باشد:

- `description`: توضیحات اختیاری در مورد tool که هنگام استفاده مدل از tool، می‌تواند تاثیرگذار باشد.
- `parameters`: یک [Zod Schema](https://docs.liara.ir/ai/references/zodschema/) یا یک [JSON Schema](https://docs.liara.ir/ai/references/jsonschema/) که پارامترهای مورد نیاز tool را تعریف می‌کند. این اسکیما توسط مدل استفاده می‌شود.
- `execute`: یک تابع async اختیاری که با آرگومان‌های داده شده در فراخوانی tool، صدا زده می‌شود. این خصیصه، یک مقدار از نوع `RESULT` ایجاد می‌کند.

پارامتر `tools` در `generateText` و `streamText`، یک آبجکت است که باید در آن، اسم toolها را به عنوان کلید تعریف کرده و خود toolها را به‌عنوان مقدار، به کلید تعریف شده، بدهید:

```js
// npm i @ai-sdk/openai-compatible
import { createOpenAICompatible } from '@ai-sdk/openai-compatible';
import { generateText, tool } from 'ai';
import { z } from 'zod';

const result = await generateText({
model: createOpenAICompatible({
baseURL: "https://docs.liara.ir/baseUrl",
name: 'example',
apiKey: "<LIARA_API_KEY>",
}).chatModel("openai/gpt-4o-mini"),

tools: {
weather: tool({
description: 'Get the weather in a location',
parameters: z.object({
location: z.string().describe('The location to get the weather for'),
}),
execute: async ({ location }) => ({
location,
temperature: 72 + Math.floor(Math.random() * 21) - 10,
}),
}),
},

prompt: 'What is the weather in San Francisco?',
});
```

در قطعه کد فوق، در فیلد `tools`، یک tool به نام `weather` تعریف شده است که در آن، پارامتر `location` با  
استفاده از ماژول `zod` مشخص شده است.  
وقتی که این tool فراخوانی شود. تابع تعریف شده در بخش `execute` فراخوانی می‌شود  
و خروجی که بر اساس `location` است، یک دما را به‌صورت تصادفی (بین 62 تا 82 درجه فارنهایت)، تولید می‌کند.

وقتی که مدل تصمیم می‌گیرد از یک tool استفاده کند؛ یک `tool call` ایجاد می‌کند.  
در صورتی که فیلد `execute`، در یک tool تعریف شده باشد،  
در حین `tool calling`، تابع آن فیلد، اجرا می‌شود.  
در نهایت، خروجی تابع اجرا شده توسط `tool calling`، با استفاده از `tool result object`، برگردانده می‌شود.

شما می‌توانید با استفاده از قابلیت فراخوانی چند مرحله‌ای (multi-step calls)، خروجی یک tool را مجدداً به LLM برگردانید.

## فراخوانی چندمرحله‌ای (با استفاده از maxSteps)

با `maxSteps`، می‌توانید فراخوانی چندمرحله‌ای را در `generateText` و `streamText`، فعال کنید. زمانی که مقدار `maxSteps` عددی بزرگ‌تر از `1` باشد و مدل، یک `tool call` ایجاد کند؛ `AI SDK`، با ارسال نتیجه Tool به مدل، یک پاسخ جدید ایجاد می‌کند و این کار تا زمانی که دیگر هیچ `tool call` جدیدی ایجاد نشود یا حد مقدار `maxSteps` زده نشود؛ ادامه پیدا می‌کند.

> برای تنظیم مقدار `maxSteps`, به‌جای در نظر گرفتن تعداد Toolهای موجود، تعداد مراحل پاسخ دادن به پیچیده‌ترین تسکی که قرار است به مدل، ارسال شود را، در نظر بگیرید.

به‌صورت پیش‌فرض، وقتی که از `generateText` یا `streamText` استفاده می‌کنید؛ مدل یک پاسخ برای شما،  
تولید می‌کند (که به آن `generation` گفته می‌شود). در این حالت، مقدار پیش‌فرض `maxSteps`، برابر با `1` است. این حالت، در زمانی که شما به داده‌های  
خود مدل اکتفا می‌کنید، در بسیاری از موارد، قابل‌قبول است. با این حال، وقتی که  
از Toolها استفاده می‌کنید، مدل تصمیم می‌گیرد که  
یک پیام متنی معمولی تولید کند یا یک `tool call`. اگر که برای مدل، پارامتر `maxSteps` را تنظیم کرده باشید و مدل، یک `tool call` ایجاد کند؛ مرحله اول آن به‌صورت کامل انجام شده  
و وارد مرحله دوم می‌شود.  

ممکن است که بخواهید مدل، پس از اجرای یک Tool، یک متن تولید کند یا حتی،  
نتایج Tool استفاده شده را خلاصه کند و در شکلی خوانا، به شما، تحویل دهد. در  
بسیاری از موارد، ممکن است شما بخواهید که مدل، در یک پاسخ، از چند تا Tool مختلف، استفاده کند.  
این، همانجایی است که مرحله دوم (و به مراتب، مراحل بعدی) در `maxSteps`، معنا پیدا می‌کند و نیاز به فراخوانی چندمرحله‌ای، احساس می‌شود.  

### مثالی از فراخوانی چند مرحله‌ای با `maxSteps`

مثال دو مرحله‌ای زیر را، در نظر بگیرید:

۱. مرحله اول  
پرامپتِ `'What is the weather in San Francisco'`، به‌ مدل، ارسال می‌شود.  
مدل، یک `tool call`، ایجاد می‌کند. در نهایت، `tool call`، اجرا می‌شود.

۲. مرحله دوم  
نتایج Tool، به مدل، ارسال می‌شود. مدل، با در نظر گرفتن نتایج Tool، یک پاسخ ایجاد می‌کند.

قطعه کد دو مرحله فوق، در ادامه، قرار گرفته است:  

```js
import { generateText, tool  } from 'ai';
import { createOpenAI } from '@ai-sdk/openai';
import { z } from 'zod';

const model = createOpenAI({
  baseURL: "https://docs.liara.ir/baseUrl",
  apiKey: "<LIARA_API_KEY>",
  compatibility: "strict",
});

const { text, steps } = await generateText({
  model: model('<model_name>'),
 tools: {
    weather: tool({
      description: 'Get the weather in a location',
      parameters: z.object({
        location: z.string().describe('The location to get the weather for'),
      }),
      execute: async ({ location }) => ({
        location,
        temperature: 72 + Math.floor(Math.random() * 21) - 10,
      }),
    }),
  },
  maxSteps: 2, // allow up to 2 steps
  prompt: 'What is the weather in San Francisco',
});
```

> در قطعه کد فوق، می‌توانید به‌طور مشابه، از `streamText` استفاده کنید.

## Stepها

برای دسترسی به `tool call`های میانی و نتایج آن‌ها،  
می‌توانید از ویژگی `steps` یا یک callback به‌نام `onFinish`، استفاده کنید. این ویژگی، شامل تمامی متن‌ها، `tool call`ها، نتایج Tool و ... در هر مرحله، می‌باشد

در مثال زیر، نتایج Toolها، از تمامی مراحل، استخراج می‌شود:  

```js
import { generateText, tool  } from 'ai';
import { createOpenAI } from '@ai-sdk/openai';
import { z } from 'zod';

const model = createOpenAI({
  baseURL: "https://docs.liara.ir/baseUrl",
  apiKey: "<LIARA_API_KEY>",
  compatibility: "strict",
});

const { steps } = await generateText({
  model: model('<model_name>'),
 tools: {
    weather: tool({
      description: 'Get the weather in a location',
      parameters: z.object({
        location: z.string().describe('The location to get the weather for'),
      }),
      execute: async ({ location }) => ({
        location,
        temperature: 72 + Math.floor(Math.random() * 21) - 10,
      }),
    }),
  },
  maxSteps: 5, 
  prompt: 'What is the weather in San Francisco?',
});

const allToolCalls = steps.flatMap(step => step.toolCalls);
console.log(allToolCalls)
```

## کال‌بک onStepFinish  
زمانی که از `generateText` یا `streamText` استفاده می‌کنید؛ می‌توانید یک `callback` از نوع `onStepFinish` تعریف کنید. این `callback` پس از پایان هر مرحله، فراخوانی می‌شود؛ یعنی  
زمانی که تمام موارد (از جمله متن، `tool call`ها و نتایج tool) برای مرحله بعدی، آماده هستند.  
در صورت وجود چند مرحله، این `callback`، برای هر مرحله، به‌صورت جداگانه، اجرا می‌شود.

به شکل زیر، می‌توانید از این `callback` استفاده کنید:  

```js
import { generateText, tool  } from 'ai';
import { createOpenAI } from '@ai-sdk/openai';
import { z } from 'zod';

const model = createOpenAI({
  baseURL: "https://docs.liara.ir/baseUrl",
  apiKey: "<LIARA_API_KEY>",
  compatibility: "strict",
});

const result = await generateText({
 model: model('<model_name>'),
 tools: {
    weather: tool({
      description: 'Get the weather in a location',
      parameters: z.object({
        location: z.string().describe('The location to get the weather for'),
      }),
      execute: async ({ location }) => ({
        location,
        temperature: 72 + Math.floor(Math.random() * 21) - 10,
      }),
    }),
  },
  maxSteps: 5, 
  prompt: 'What is the weather in San Francisco?',
  onStepFinish({ text, toolCalls, toolResults, finishReason, usage }) {
  // your own logic, e.g. for saving the chat history or recording usage
  console.log(text, toolCalls, toolResults, finishReason, usage)
  },
});
```

## کال‌بک experimental_prepareStep

> `experimental_prepareStep` در `AI SDK`، آزمایشی است و ممکن است در آینده، تغییر کند. این `callback`، فقط در `generateText`، موجود است.

کال‌بک `experimental_prepareStep`، قبل از اجرای یک مرحله (step)، صدا زده می‌شود.  
این `callback`، با پارامترهای زیر، فراخوانی می‌شود:

- `model`: مشابه همان مدل تعریف شده در `generateText`
- `maxSteps`: مشابه همان `maxSteps` تعریف شده در `generateText`
- `stepNumber`: شماره مرحله‌ای که در حال اجراست
- `steps`: شماره نشان‌دهنده مراحلی که تا الان، اجرا شده‌اند

می‌توانید مانند قطعه کد زیر، از این `callback` استفاده کنید تا برای یک مرحله، تنظیمات مختلفی، درج کنید:

```js
import { generateText, tool  } from 'ai';
import { createOpenAI } from '@ai-sdk/openai';
import { z } from 'zod';

const model = createOpenAI({
  baseURL: "https://docs.liara.ir/baseUrl",
  apiKey: "<LIARA_API_KEY>",
  name: 'my-provider',
  compatibility: "strict",
});

const result = await generateText({
 model: model('<model_name>'),
 tools: {
    weather: tool({
      description: 'Get the weather in a location',
      parameters: z.object({
        location: z.string().describe('The location to get the weather for'),
      }),
      execute: async ({ location }) => ({
        location,
        temperature: 72 + Math.floor(Math.random() * 21) - 10,
      }),
    }),
  },
  maxSteps: 5, 
  prompt: 'What is the weather in San Francisco?',
  
  experimental_prepareStep: async ({ model, stepNumber, maxSteps, steps }) => {
    if (stepNumber === 0) {
      return {
        model,
        stepNumber,
        maxSteps,
        steps
      };
    }

    // when nothing is returned, the default settings are used
  },
});
```

## پیام‌های Response

اضافه‌کردن پیام‌های تولید‌شده‌ی assistant و toolها به تاریخچه‌ی مکالمه‌تان، یک کار رایج است؛ مخصوصاً زمانی که از فراخوانی‌های چندمرحله‌ای toolها استفاده می‌کنید.  
هر دو تابع `generateText` و `streamText` دارای یک property به نام `response.messages` هستند که می‌توانید از آن برای افزودن پیام‌های assistant و tool به تاریخچه‌ی مکالمه، استفاده کنید. این ویژگی همچنین در کال‌بک `onFinish` مربوط به `streamText` نیز در دسترس است.

`response.messages` شامل یک آرایه از آبجکت‌ها از نوع `CoreMessage` است که می‌توانید آن‌ها را به تاریخچه‌ی مکالمه اضافه کنید.

```js
// npm i @ai-sdk/openai@^1 ai@^4 dotenv

import { CoreMessage, generateText } from 'ai';
import { createOpenAI } from '@ai-sdk/openai';
import { config } from 'dotenv';

config();
const my_model = createOpenAI({
  baseURL: process.env.BASE_URL!,
  apiKey: process.env.LIARA_API_KEY!,
});

const messages: CoreMessage[] = [
  {
    role: 'system',
    content: 'You are a helpful assistant.',
  },
  {
    role: 'user',
    content: 'Hello! Can you tell me a fun fact about space?',
  },
];

const { response } = await generateText({
  model: my_model('openai/gpt-4o-mini'),
  messages,
});

messages.push(...response.messages); // streamText: ...((await response).messages)
console.log(messages)
```

## انتخاب Tool

شما می‌توانید با تنظیم `toolChoice` بر زمان انتخاب یک tool تاثیر بگذارید. این تنظیم از مقادیر زیر، پشتیبانی می‌کند:  

- `auto` (پیش‌فرض): مدل می‌تواند تصمیم بگیرد که آیا یک tool فراخوانی شود یا نه و اینکه کدام tool فراخوانی شود
- `required`: تابع باید یک tool را فراخوانی کند، انتخاب اینکه کدام tool فراخوانی شود، به عهده‌ی مدل است
- `none`: مدل نباید فراخوانی tool داشته باشد
- `{ type: 'tool', toolName: string (typed) }`: مدل باید tool مشخص‌شده را فراخوانی کند

```js
// npm i @ai-sdk/openai@^1 ai@^4 dotenv zod

import { generateText, tool } from 'ai';
import { createOpenAI } from '@ai-sdk/openai';
import { config } from 'dotenv';
import { z } from 'zod';

config();
const my_model = createOpenAI({
  baseURL: process.env.BASE_URL!,
  apiKey: process.env.LIARA_API_KEY!,
});

const result = await generateText({
  model: my_model('openai/gpt-4o-mini'),
  tools: {
    weather: tool({
      description: 'Get the weather in a location',
      parameters: z.object({
        location: z.string().describe('The location to get the weather for'),
      }),
      execute: async ({ location }) => ({
        location,
        temperature: 72 + Math.floor(Math.random() * 21) - 10,
      }),
    }),
  },
  toolChoice: 'required', // force the model to call a tool
  prompt: 'What is the weather in Tehran?',
});
```

## گزینه‌های اجرایی Tool

زمانی که toolها فراخوانی می‌شوند، یک سری گزینه‌های اضافی تحت عنوان پارامتر دوم دریافت می‌کنند.

## Tool Call ID

آیدی فراخوانی tool به tool execution فوروارد می‌شود.  
شما می‌توانید از این آیدی استفاده کنید؛ مثلاً هنگام ارسال اطلاعات مرتبط با tool-call در استریم داده‌ها.

```js
// npm i @ai-sdk/openai@^1 ai@^4 dotenv zod

import { generateText, tool } from 'ai';
import { createOpenAI } from '@ai-sdk/openai';
import { config } from 'dotenv';
import { z } from 'zod';

config();
const my_model = createOpenAI({
  baseURL: process.env.BASE_URL!,
  apiKey: process.env.LIARA_API_KEY!,
});

const result = await generateText({
  model: my_model('openai/gpt-4o-mini'),
  tools: {
    weather: tool({
      description: 'Get the weather in a location',
      parameters: z.object({
        location: z.string().describe('The location to get the weather for'),
      }),
      execute: async ({ location }, { toolCallId }) => {
        console.log("Weather tool invoked with ID:", toolCallId, "for location:", location);
        return {
          location,
          temperature: 72 + Math.floor(Math.random() * 21) - 10,
          toolCallId
        };
      },
    }),
  },
  toolChoice: 'required', // force the model to call a tool
  prompt: 'What is the weather in Tehran?',
});
```

## Messages

پیام‌هایی که مدل ارسال می‌شوند تا پاسخی از سمت مدل دریافت کنند که شامل فراخوانی tool است، به tool execution فوروارد می‌شوند.  
شما می‌توانید به این پیام‌ها از طریق پارامتر دوم تابع `execute` دسترسی داشته باشید.  
در فراخوانی‌های چندمرحله‌ای، این پیام‌ها شامل متن، فراخوانی toolها و نتایج toolها از تمام مراحل قبلی هستند.

```js
// npm i @ai-sdk/openai@^1 ai@^4 dotenv zod

import { generateText, tool } from 'ai';
import { createOpenAI } from '@ai-sdk/openai';
import { config } from 'dotenv';
import { z } from 'zod';

config();
const my_model = createOpenAI({
  baseURL: process.env.BASE_URL!,
  apiKey: process.env.LIARA_API_KEY!,
});

const result = await generateText({
  model: my_model('openai/gpt-4o-mini'),
  tools: {
    weather: tool({
      description: 'Get the weather in a location',
      parameters: z.object({
        location: z.string().describe('The location to get the weather for'),
      }),
      execute: async ({ location }, { messages }) => {
        console.log("the user message:", messages);
        return {
          location,
          temperature: 72 + Math.floor(Math.random() * 21) - 10,
          messages
        };
      },
    }),
  },
  toolChoice: 'required', // force the model to call a tool
  prompt: 'What is the weather in Tehran?',
});
```

## Typeها

ماژولارسازی کد معمولاً نیازمند تعریف typeها برای اطمینان از type safety و قابلیت استفاده‌ مجدد (reusability) است. برای پشتیبانی از این موضوع، AI SDK چندین helper type برای toolها، فراخوانی toolها و نتایج toolها فراهم می‌کند.

شما می‌توانید از این قابلیت برای تعریف دقیق type متغیرها، پارامترهای توابع و typeهای بازگشتی در بخش‌هایی از کد که مستقیماً با `streamText` یا `generateText` در ارتباط نیستند، استفاده کنید.

هر فراخوانی tool با ساختار `<ToolCall<NAME extends string, ARGS` تعریف type می‌شود.  
این تعریف به tool فراخوانی‌شده نیز بستگی دارد. به‌طور مشابه، نتایج tool با ساختار `<ToolResult<NAME extends string, ARGS, RESULT` تعریف می‌شوند:

toolها در `streamText` و `generateText` به صورت یک `ToolSet` تعریف می‌شوند. برای استنتاج typeها، از helperهای `<ToolCallUnion<TOOLS extends ToolSet` و `<ToolResultUnion<TOOLS extends ToolSet`استفاده می‌شود که این دو، برای استخراج typeهای مربوط به فراخوانی tool و نتایج tool از درون toolها کاربرد دارند.

```js
// npm i @ai-sdk/openai@^1 ai@^4 dotenv zod

import { ToolCallUnion, ToolResultUnion, generateText, tool } from 'ai';
import { createOpenAI } from '@ai-sdk/openai';
import { config } from 'dotenv';
import { z } from 'zod';

config();
const my_model = createOpenAI({
  baseURL: process.env.BASE_URL!,
  apiKey: process.env.LIARA_API_KEY!,
});

const myToolSet = {
  firstTool: tool({
    description: 'Greets the user',
    parameters: z.object({ name: z.string() }),
    execute: async ({ name }) => `Hello, ${name}!`,
  }),
  secondTool: tool({
    description: 'Tells the user their age',
    parameters: z.object({ age: z.number() }),
    execute: async ({ age }) => `You are ${age} years old!`,
  }),
};

type MyToolCall = ToolCallUnion<typeof myToolSet>;
type MyToolResult = ToolResultUnion<typeof myToolSet>;

async function generateSomething(prompt: string): Promise<{
  text: string;
  toolCalls: Array<MyToolCall>; // typed tool calls
  toolResults: Array<MyToolResult>; // typed tool results
}> {
  return generateText({
    model: my_model('openai/gpt-4o-mini'),
    tools: myToolSet,
    prompt,
    maxSteps: 2
  });
}

const res = await generateSomething('Hello I am Arash and 24 years old.');
console.log(res);
```

## مدیریت خطاها

AI SDK سه خطای مرتبط با فراخوانی tool دارد:  

- `NoSuchToolError`: مدل سعی می‌کند یک tool را فراخوانی کند که در آبجکت toolها اصلاً تعریف نشده است
- `InvalidToolArgumentsError`: مدل یک tool را با آرگومان‌هایی فراخوانی می‌کند که با پارامترهای tool مطابقت ندارند
- `ToolExecutionError`: یک خطا که در حین tool execution رخ می‌دهد
- `ToolCallRepairError`: یک خطا که در حین tool call repair رخ می‌دهد

## generateText

تابع `generateText` خطاها را throw می‌کند و می‌توان آن‌ها را با استفاده از بلوک `catch`/`try` مدیریت کرد.

```js
// npm i @ai-sdk/openai@^1 ai@^4 dotenv zod

import { generateText, tool, NoSuchToolError, InvalidToolArgumentsError, ToolExecutionError } from 'ai';
import { createOpenAI } from '@ai-sdk/openai';
import { config } from 'dotenv';
import { z } from 'zod';

config();
const my_model = createOpenAI({
  baseURL: process.env.BASE_URL!,
  apiKey: process.env.LIARA_API_KEY!,
});

try {
  const result = await generateText({
    model: my_model('openai/gpt-4o-mini'),
    tools: {
      weather: tool({
        description: 'Get the weather in a location',
        parameters: z.object({
          location: z.string().describe('The location to get the weather for'),
        }),
        execute: async ({ location }) => {
          return {
            location,
            temperature: 72 + Math.floor(Math.random() * 21) - 10,
          };
        },
      }),
    },
    prompt: 'What is the weather in Tehran?',
  });
} catch (error) {
  if (NoSuchToolError.isInstance(error)) {
    // handle the no such tool error
  } else if (InvalidToolArgumentsError.isInstance(error)) {
    // handle the invalid tool arguments error
  } else if (ToolExecutionError.isInstance(error)) {
    // handle the tool execution error
  } else {
    // handle other errors
  }
}
```

## streamText

تابع `streamText` خطاها را به عنوان بخشی از استریم کامل ارسال می‌کند. بخش‌های خطا شامل object خطا هستند.

هنگام استفاده از `toDataStreamResponse`، می‌توانید یک تابع `getErrorMessage` تعریف کنید تا پیام خطا را از بخش خطا استخراج کرده و به عنوان بخشی از پاسخ استریم داده منتقل کند.

```js
// npm i @ai-sdk/openai@^1 ai@^4 dotenv zod

import { streamText, tool, NoSuchToolError, InvalidToolArgumentsError, ToolExecutionError } from 'ai';
import { createOpenAI } from '@ai-sdk/openai';
import { config } from 'dotenv';
import { z } from 'zod';

config();
const my_model = createOpenAI({
  baseURL: process.env.BASE_URL!,
  apiKey: process.env.LIARA_API_KEY!,
});

async function main() {
  const result = await streamText({
    model: my_model('openai/gpt-4o-mini'),
    tools: {
      weather: tool({
        description: 'Get the weather in a location',
        parameters: z.object({
          location: z.string().describe('The location to get the weather for'),
        }),
        execute: async ({ location }) => {
          return {
            location,
            temperature: 72 + Math.floor(Math.random() * 21) - 10,
          };
        },
      }),
    },
    prompt: 'What is the weather in Tehran?',
  });

  const response = result.toDataStreamResponse({
    getErrorMessage: error => {
      if (NoSuchToolError.isInstance(error)) {
        return 'The model tried to call an unknown tool.';
      } else if (InvalidToolArgumentsError.isInstance(error)) {
        return 'The model called a tool with invalid arguments.';
      } else if (ToolExecutionError.isInstance(error)) {
        return 'An error occurred during tool execution.';
      } else {
        return 'An unknown error occurred.';
      }
    },
  });
}
```

## Tool Call Repair

> قابلیت tool call repair آزمایشی است و ممکن است در آینده تغییر کند.

مدل‌ها گاهی اوقات در تولید فراخوانی معتبر tool با مشکل مواجه می‌شوند، مخصوصاً وقتی که  
پارامترها پیچیده هستند یا مدل کوچک‌تر است.  
شما می‌توانید از تابع `experimental_repairToolCall` برای تلاش در جهت اصلاح فراخوانی تابع با یک تابع شخصی‌سازی شده، اقدام کنید.  

شما می‌توانید از استراتژی‌های متفاوتی برای اصلاح فراخوانی tool استفاده کنید:  

- از یک مدل با خروجی‌های ساختاریافته برای تولید آرگومان‌ها، استفاده کنید
- پیام‌ها، پرامپت‌های سیستمی و اسکیمای tool را به یک مدل قوی‌تر بفرستید تا آرگومان‌ها را تولید کند
- دستورالعمل‌های اصلاح خاص‌تری بر اساس اینکه چه toolای فراخوانی شده است، تهیه کنید

## مثال: استفاده از یک مدل با خروجی‌های ساختاریافته برای اصلاح

```js
// npm i @ai-sdk/openai@^1 ai@^4 dotenv zod

import { generateObject, generateText, NoSuchToolError, tool } from 'ai';
import { createOpenAI } from '@ai-sdk/openai';
import { config } from 'dotenv';
import { z } from 'zod';

config();
const my_model = createOpenAI({
  baseURL: process.env.BASE_URL!,
  apiKey: process.env.LIARA_API_KEY!,
});


const result = await generateText({
  model: my_model('openai/gpt-4o-mini'),
  tools: {
    weather: tool({
      description: 'Get the weather in a location',
      parameters: z.object({
        location: z.string().describe('The location to get the weather for'),
      }),
      execute: async ({ location }) => {
        return {
          location,
          temperature: 72 + Math.floor(Math.random() * 21) - 10,
        };
      },
    }),
  },
  prompt: 'What is the weather in Tehran?',

   experimental_repairToolCall: async ({
    toolCall,
    tools,
    parameterSchema,
    error,
  }) => {
    if (NoSuchToolError.isInstance(error)) {
      return null; // do not attempt to fix invalid tool names
    }

    const tool = tools[toolCall.toolName as keyof typeof tools];

    const { object: repairedArgs } = await generateObject({
      model: my_model('openai/gpt-4.1', { structuredOutputs: true }),
      schema: tool.parameters,

      prompt: [
        `The model tried to call the tool "${toolCall.toolName}"` +
          ` with the following arguments:`,
        JSON.stringify(toolCall.args),
        `The tool accepts the following schema:`,
        JSON.stringify(parameterSchema(toolCall)),
        'Please fix the arguments.',
      ].join('\n'),
    });

    return { ...toolCall, args: JSON.stringify(repairedArgs) };
  },
});
```

## مثال: استفاده از استراتژی re-ask برای اصلاح

```js
// npm i @ai-sdk/openai@^1 ai@^4 dotenv zod

import { generateText, tool } from 'ai';
import { createOpenAI } from '@ai-sdk/openai';
import { config } from 'dotenv';
import { z } from 'zod';

config();
const my_model = createOpenAI({
  baseURL: process.env.BASE_URL!,
  apiKey: process.env.LIARA_API_KEY!,
});


const result = await generateText({
  model: my_model('openai/gpt-4o-mini'),
  tools: {
    weather: tool({
      description: 'Get the weather in a location',
      parameters: z.object({
        location: z.string().describe('The location to get the weather for'),
      }),
      execute: async ({ location }) => {
        return {
          location,
          temperature: 72 + Math.floor(Math.random() * 21) - 10,
        };
      },
    }),
  },
  prompt: 'What is the weather in Tehran?',

 experimental_repairToolCall: async ({
    toolCall,
    tools,
    error,
    messages,
    system,
  }) => {
    const result = await generateText({
      model: my_model('openai/gpt-4o-mini'),
      system,
      messages: [
        ...messages,
        {
          role: 'assistant',
          content: [
            {
              type: 'tool-call',
              toolCallId: toolCall.toolCallId,
              toolName: toolCall.toolName,
              args: toolCall.args,
            },
          ],
        },
        {
          role: 'tool' as const,
          content: [
            {
              type: 'tool-result',
              toolCallId: toolCall.toolCallId,
              toolName: toolCall.toolName,
              result: error.message,
            },
          ],
        },
      ],
      tools,
    });

    const newToolCall = result.toolCalls.find(
      newToolCall => newToolCall.toolName === toolCall.toolName,
    );

    return newToolCall != null
      ? {
          toolCallType: 'function' as const,
          toolCallId: toolCall.toolCallId,
          toolName: toolCall.toolName,
          args: JSON.stringify(newToolCall.args),
        }
      : null;
  },
});
```

## Active Tools

> قابلیت `activeTools` آزمایشی است و ممکن است در آینده تغییر کند.

مدل‌ها بسته به نوع‌شان، فقط می‌توانند تعداد محدودی از toolها را در یک زمان، مدیریت کنند.  
AI SDK برای مجاز کردن static typing در هنگام استفاده از تعداد زیادی tool و در عین حال محدود کردن toolهای در دسترس برای مدل، قابلیتی به نام `experimental_activeTools` را ارائه می‌دهد.  

این ویژگی یک آرایه از نام toolهایی است که در حال حاضر فعال هستند. به‌صورت پیش‌فرض، مقدار آن `undefined` است و در این حالت تمام toolها فعال خواهند بود.

```js
// npm i @ai-sdk/openai@^1 ai@^4 dotenv zod

import { generateText, tool } from 'ai';
import { createOpenAI } from '@ai-sdk/openai';
import { config } from 'dotenv';
import { z } from 'zod';

config();
const my_model = createOpenAI({
  baseURL: process.env.BASE_URL!,
  apiKey: process.env.LIARA_API_KEY!,
});

const myToolSet = {
  firstTool: tool({
    description: 'Greets the user',
    parameters: z.object({ name: z.string() }),
    execute: async ({ name }) => `Hello, ${name}!`,
  }),
  secondTool: tool({
    description: 'Tells the user their age',
    parameters: z.object({ age: z.number() }),
    execute: async ({ age }) => `You are ${age} years old!`,
  }),
};

const result = await generateText({
  model: my_model('openai/gpt-4o-mini'),
  tools: myToolSet,
  experimental_activeTools: ['firstTool'],
  prompt: "I am Ali and 24 years old"
  
});

console.log(result)
```

## استخراج Toolها

هنگامی که تعداد Toolهای شما زیاد می‌شود، ممکن است بخواهید آن‌ها را در فایل‌های جداگانه قرار دهید. تابع tool helper در این زمینه بسیار مهم است، زیرا این اطمینان را به شما می‌دهد که type inference به‌درستی انجام شده است.

به عنوان مثال، فرض کنید که قصد دارید  
یک Tool برای اعلام وضعیت آب و هوا در برنامه خود تعریف کنید.  
تنها کافیست تا یک دایرکتوری برای toolهای خود به نام `tools` ایجاد کنید، درون آن یک فایل به نام  
`weather-tool.ts` بسازید و کدی مشابه قطعه کد زیر را، درون آن  
قرار دهید:  

```js
import { tool } from 'ai';
import { z } from 'zod';

// the `tool` helper function ensures correct type inference:
export const weatherTool = tool({
  description: 'Get the weather in a location',
  parameters: z.object({
    location: z.string().describe('The location to get the weather for'),
  }),
  execute: async ({ location }) => ({
    location,
    temperature: 72 + Math.floor(Math.random() * 21) - 10,
  }),
});
```

## all links

[All links of docs](https://docs.liara.ir/all-links-llms.txt)
