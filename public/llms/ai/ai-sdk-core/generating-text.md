Original link: https://docs.liara.ir/ai/ai-sdk-core/generating-text/

# تولید و استریم متن با AI SDK

مدل‌های زبانی بزرگ (LLMها) قادرند در پاسخ به یک prompt، متن تولید کنند؛ این پرامپت می‌تواند شامل دستورالعمل‌ها و اطلاعاتی برای پردازش باشد.  
به عنوان مثال، می‌توان از یک مدل خواست که یک دستور پخت ارائه دهد، پیش‌نویس یک ایمیل را تهیه کند، یا یک داکیومنت را خلاصه نماید.

هسته‌ی AI SDK دو تابع برای تولید متن و استریم آن از LLMها فراهم می‌کند:

- `generateText`: متنی را با توجه به پرامپت و مدل، تولید می‌کند
- `streamText`: متن را با یک پرامپت و مدل مشخص، به‌صورت stream ارائه می‌دهد

قابلیت‌های پیشرفته‌ی LLMها، مانند فراخوانی toolها و تولید داده‌های ساختارمند، بر پایه‌ی همین قابلیت تولید متن ساخته شده‌اند.

## تابع generateText

شما می‌توانید با استفاده از تابع `generateText` متن تولید کنید. برای موارد غیرتعاملی ایده‌آل است؛ مانند زمانی که نیاز به تولید متن دارید (برای مثال: تهیه‌ی پیش‌نویس یک ایمیل یا خلاصه‌سازی صفحات وب) و همچنین برای agentهایی که از toolها استفاده می‌کنند.

```js
// npm i @ai-sdk/openai@^1 ai@^4
import { generateText } from 'ai';
import { createOpenAI } from '@ai-sdk/openai';
import { config } from 'dotenv';

config();
const my_model = createOpenAI({
  baseURL: process.env.BASE_URL!,
  apiKey: process.env.LIARA_API_KEY!,
});

const { text } = await generateText({
  model: my_model('openai/gpt-4o-mini'),
  prompt: 'Write a vegetarian lasagna recipe for 4 people.',
});

console.log(text)
```

می‌توانید از پرامپت‌های پیشرفته‌تر نیز، برای تولید متنی با دستورالعمل‌ها و محتوای پیچیده‌تر، استفاده کنید.

```js
// npm i @ai-sdk/openai@^1 ai@^4
import { generateText } from 'ai';
import { createOpenAI } from '@ai-sdk/openai';
import { config } from 'dotenv';

config();
const my_model = createOpenAI({
  baseURL: process.env.BASE_URL!,
  apiKey: process.env.LIARA_API_KEY!,
});

const article = 
`Octopus Brains Are Even Weirder Than We Thought
A new study has revealed that octopuses may process information using their arms
independently from their central brain, adding to their reputation as some of
the most intelligent and alien-like creatures on Earth.

Researchers from the University of Naples used electrodes to monitor neural activity
in Octopus vulgaris. They found that not only do octopus arms have their
own neural circuits, but they can also make decisions without input from
the central brain. This means each arm has a semi-autonomous "mini-brain,"
allowing the animal to multitask in complex ways—like opening a shell with
one arm while exploring its surroundings with another.

What’s more fascinating is the discovery of neurotransmitters in octopus arms
that are more commonly associated with learning and memory in mammals. 
This hints at convergent evolution—where different species independently
evolve similar traits.

Understanding how octopuses process information could offer clues for building
more adaptive robots or even new models of decentralized AI. As neuroscientist
Dr. Francesca Ferrante puts it: "If intelligence evolved this way in
an invertebrate, we have a lot to learn about the nature of cognition."
`

const { text } = await generateText({
  model: my_model('openai/gpt-4o-mini'),
  system:
    'You are a professional writer. ' +
    'You write simple, clear, and concise content.',
  prompt: `Summarize the following article in 3-5 sentences: ${article}`,
});

console.log(text)
```

آبجکت result که از تابع `generateText` بازگردانده می‌شود، شامل چندین promise است و زمانی که تمامی داده‌های مورد نیاز در دسترس قرار گیرند، مقداردهی می‌شوند:  

- `result.text`: متن تولید شده
- `result.reasoning`: استدلال کاملی که مدل در مرحله آخر، تولید کرده است
- `result.sources`: منابعی که به عنوان مرجع در مرحله آخر، استفاده شده‌اند (موجود فقط برای برخی مدل‌ها)
- `result.finishReason`: دلیلی که مدل تولید متن را متوقف کرده است
- `result.usage`: میزان مصرف مدل طی مرحله آخر تولید متن

## دسترسی به هدرهای response و body

در برخی موارد، نیاز است به پاسخ کامل ارائه‌شده از سوی ارائه‌دهنده مدل دسترسی داشته باشید؛ برای مثال، جهت مشاهده‌ی برخی هدرها یا محتوای بدنه که به‌صورت خاص توسط ارائه‌دهنده ارسال می‌شوند.  
می‌توانید با استفاده از ویژگی `response` به هدرها و بدنه‌ی خام پاسخ دسترسی پیدا کنید.

```js
// npm i @ai-sdk/openai@^1 ai@^4
import { generateText } from 'ai';
import { createOpenAI } from '@ai-sdk/openai';
import { config } from 'dotenv';

config();
const my_model = createOpenAI({
  baseURL: process.env.BASE_URL!,
  apiKey: process.env.LIARA_API_KEY!,
});

const result = await generateText({
  model: my_model('openai/gpt-4o-mini'),
  prompt: 'Who is Arthur Schopenhauer?',
});

console.log(JSON.stringify(result.response.headers, null, 2));
console.log(JSON.stringify(result.response.body, null, 2));
```

## تابع streamText

بسته به مدل مورد استفاده و نوع prompt، ممکن است تولید پاسخ توسط یک LLM تا یک دقیقه طول بکشد.  
این تأخیر در موارد استفاده‌ی تعاملی، مانند چت‌بات‌ها یا برنامه‌های بلادرنگ (real-time)، جایی که کاربران انتظار پاسخ‌های فوری دارند، غیرقابل‌قبول است.

هسته‌ی AI SDK تابعی به نام `streamText` دارد که stream متن از LLM را ساده می‌سازد.

```js
// npm i @ai-sdk/openai@^1 ai@^4
import { streamText } from 'ai';
import { createOpenAI } from '@ai-sdk/openai';
import { config } from 'dotenv';

config();
const my_model = createOpenAI({
  baseURL: process.env.BASE_URL!,
  apiKey: process.env.LIARA_API_KEY!,
});

const result = streamText({
  model: my_model('openai/gpt-4.1'),
  prompt: 'Invent a new holiday and describe its traditions.',
});

// example: use textStream as an async iterable
for await (const textPart of result.textStream) {
  console.log(textPart);
}
```

> `result.textStream` هم `ReadableStream` و هم `AsyncIterable` است.  
> تابع `streamText` بلافاصله استریم متن را آغاز می‌کند و برای جلوگیری از کرش کردن سرور، خطاها را نادیده می‌گیرد.  
> برای لاگ‌گرفتن از خطاها، از یک callback به نام `onError` استفاده کنید.

می‌توانید از `streamText` به‌صورت مستقل یا در ترکیب با AI SDK UI و AI SDK RSC استفاده کنید.  
آبجکت result شامل چندین تابع کمکی است که ادغام با AI SDK UI را ساده‌تر می‌سازند:

- `()result.toDataStreamResponse`: یک HTTP respone (با فراخوانی tool و ...)، تولید می‌کند که می‌تواند در API Route برنامه‌های NextJS مورد استفاده قرار بگیرد
- `()result.pipeDataStreamToResponse`: delta output را در یک آبجکت مشابه response در NodeJS قرار می‌دهد
- `()result.toTextStreamResponse`:  یک پاسخ HTTP ساده برای استریم متن ایجاد می‌کند
- `()result.pipeTextStreamToResponse`: delta output متنی را در یک آبجکت مشابه respone در NodeJS قرار می‌دهد

> تابع `streamText` از backpressure استفاده می‌کند و تنها زمانی توکن‌ها را تولید می‌کند که مورد درخواست قرار گیرند.  
> برای پایان یافتن فرآیند، لازم است که stream را مصرف (consume) کنید

تابع `streamText` شامل چندین promise است که زمانی که استریم پایان می‌یابد، مقداردهی می‌شوند:

- `result.text`: متن تولیدشده
- `result.reasoning`: متن استدلالی مدل (موجود، فقط برای برخی مدل‌ها)
- `result.sources`: منابعی که به‌عنوان ورودی، برای تولید پاسخ، استفاده شده‌اند (موجود، فقط برای برخی مدل‌ها)
- `result.finishReason`: دلیلی که مدل تولید متن را متوقف کرده است
- `result.usage`: میزان مصرف توکن مدل در طی تولید متن

## onError callback

تابع `streamText` بلافاصله فرآیند streaming را آغاز می‌کند تا امکان ارسال داده بدون انتظار فراهم شود.  
در این روش، خطاها به‌صورت بخشی از استریم در نظر گرفته می‌شوند و throw نمی‌شوند، تا از بروز مشکلاتی مانند کرش کردن سرور جلوگیری شود.

برای log کردن خطاها، می‌توانید یک callback به نام `onError` تعریف کنید که در زمان وقوع خطا فعال (trigger) می‌شود.

```js
// npm i @ai-sdk/openai@^1 ai@^4

import { streamText } from 'ai';
import { createOpenAI } from '@ai-sdk/openai';
import { config } from 'dotenv';

config();
const my_model = createOpenAI({
  baseURL: process.env.BASE_URL!,
  apiKey: process.env.LIARA_API_KEY!,
});

const result = streamText({
  model: my_model('openai/gpt-4.1'),
  prompt: 'Invent a new holiday and describe its traditions.',
  onError({ error }) {
    console.error(error); // your error logging logic here
  },
});

for await (const textPart of result.textStream) {
  console.log(textPart);
}
```

## onChunk callback

هنگام استفاده از تابع `streamText`، می‌توانید یک callback به نام `onChunk` تعریف کنید که برای هر بخش (chunk) از استریم فراخوانی می‌شود.  
این callback، انواع chunkهای زیر را دریافت می‌کند:

- `text-delta`
- `reasoning`
- `source`
- `tool-call`
- `tool-result`
- `tool-call-streaming-start` (وقتی که `toolCallStreaming` فعال است)
- `tool-call-delta` (وقتی که `toolCallStreaming` فعال است)

```js
// npm i @ai-sdk/openai@^1 ai@^4
        
import { streamText } from 'ai';
import { createOpenAI } from '@ai-sdk/openai';
import { config } from 'dotenv';

config();
const my_model = createOpenAI({
  baseURL: process.env.BASE_URL!,
  apiKey: process.env.LIARA_API_KEY!,
});

const result = streamText({
  model: my_model('openai/gpt-4.1'),
  prompt: 'Invent a new holiday and describe its traditions.',
  onChunk({ chunk }) {

    // implement your own logic here, e.g.:
    if (chunk.type === 'text-delta') {
      console.log(chunk.textDelta);
    }
  },
});

for await (const textPart of result.textStream) {}
```

## onFinish callback

هنگام استفاده از تابع `streamText`، می‌توانید یک callback به نام `onFinish` تعریف کنید که زمانی که استریم به پایان می‌رسد، فراخوانی می‌شود.  
این callback شامل اطلاعات جامعی از فرآیند تولید متن است، از جمله متن، اطلاعات مصرف توکن، علت توقف، پیام‌ها، مراحل، مصرف کلی توکن‌ها و ...

```js
// npm i @ai-sdk/openai@^1 ai@^4

import { streamText } from 'ai';
import { createOpenAI } from '@ai-sdk/openai';
import { config } from 'dotenv';

config();
const my_model = createOpenAI({
  baseURL: process.env.BASE_URL!,
  apiKey: process.env.LIARA_API_KEY!,
});

const result = streamText({
  model: my_model('openai/gpt-4.1'),
  prompt: 'hey',
  onFinish({ text, finishReason, usage, response, steps }) {

    // your own logic, e.g. for saving the chat history or recording usage
    console.log("finish reason:", finishReason)
  },
});

for await (const textPart of result.textStream) {
}
```

## ویژگی fullStream

می‌توانید با استفاده از ویژگی `fullStream` به استریم کامل، شامل تمامی رویدادها دسترسی داشته باشید.  
این ویژگی زمانی مفید است که بخواهید رابط کاربری اختصاصی خود را پیاده‌سازی کنید یا استریم را به روشی متفاوت مدیریت نمایید.  
در ادامه، یک مثال از نحوه‌ی استفاده از ویژگی `fullStream` آورده شده است:

```js
// npm i @ai-sdk/openai@^1 ai@^4 zod dotenv

import { streamText } from 'ai';
import { createOpenAI } from '@ai-sdk/openai';
import { config } from 'dotenv';
import { z } from 'zod';

config();
const my_model = createOpenAI({
  baseURL: process.env.BASE_URL!,
  apiKey: process.env.LIARA_API_KEY!,
});

const result = streamText({
  model: my_model("openai/gpt-4o-mini"),
  tools: {
    cityAttractions: {
      parameters: z.object({ city: z.string() }),
      execute: async ({ city }) => ({
        attractions: ['attraction1', 'attraction2', 'attraction3'],
      }),
    },
  },
  prompt: 'What are some San Francisco tourist attractions?',
});

for await (const part of result.fullStream) {
  switch (part.type) {
    case 'text-delta': {
      // handle text delta here
      break;
    }
    case 'reasoning': {
      // handle reasoning here
      break;
    }
    case 'source': {
      // handle source here
      break;
    }
    case 'tool-call': {
      switch (part.toolName) {
        case 'cityAttractions': {
          // handle tool call here
          break;
        }
      }
      break;
    }
    case 'tool-result': {
      switch (part.toolName) {
        case 'cityAttractions': {
          // handle tool result here
          break;
        }
      }
      break;
    }
    case 'finish': {
      // handle finish here
      break;
    }
    case 'error': {
      // handle error here
      break;
    }
  }
}
```

## تبدیل (تغییر) استریم

شما می‌توانید از `experimental_transform` برای تبدیل (transform) استریم استفاده کنید. این قابلیت، برای مواردی مانند فیلتر کردن، تغییر دادن یا روان‌سازی (smoothing) استریم متنی مفید است.

تبدیل‌ها پیش از فراخوانی callbackها و مقداردهی شدن پرامیس‌ها، اعمال می‌شوند. به عنوان مثال، اگر تبدیل شما، تمام متن را به حروف بزرگ تبدیل کند، تابع `onFinish` متن تبدیل‌شده را دریافت خواهد کرد.

## روان‌سازی استریم

AI SDK Core تابعی به نام `smoothStream` ارائه می‌دهد که می‌توان از آن برای روان‌سازی جریان متنی استفاده کرد.

```js
// npm i @ai-sdk/openai@^1 ai@^4 dotenv

import { smoothStream, streamText } from 'ai';
import { createOpenAI } from '@ai-sdk/openai';
import { config } from 'dotenv';

config();
const my_model = createOpenAI({
  baseURL: process.env.BASE_URL!,
  apiKey: process.env.LIARA_API_KEY!,
});

const result = streamText({
  model: my_model("openai/gpt-4o-mini"),
  prompt: "Is Kafka German?",
  experimental_transform: smoothStream(),
});
```

## تبدیل‌های سفارشی

شما همچنین می‌توانید تبدیل‌های سفارشی خود را پیاده‌سازی کنید. تابع transformation، toolهایی که در اختیار مدل قرار دارند را دریافت می‌کند و تابعی را بازمی‌گرداند که برای تبدیل استریم استفاده می‌شود. toolها می‌توانند عمومی باشند یا محدود به toolهایی که شما استفاده می‌کنید.

در ادامه مثالی از نحوه پیاده‌سازی یک تبدیل سفارشی آورده شده است که تمام متن را به حروف بزرگ تبدیل می‌کند:

```js
// npm i @ai-sdk/openai@^1 ai@^4 dotenv

import { streamText, TextStreamPart, ToolSet } from 'ai';
import { createOpenAI } from '@ai-sdk/openai';
import { config } from 'dotenv';

config();
const my_model = createOpenAI({
  baseURL: process.env.BASE_URL!,
  apiKey: process.env.LIARA_API_KEY!,
});

const upperCaseTransform =
  <TOOLS extends ToolSet>() =>
  (options: { tools: TOOLS; stopStream: () => void }) =>
    new TransformStream<TextStreamPart<TOOLS>, TextStreamPart<TOOLS>>({
      transform(chunk, controller) {
        controller.enqueue(
          // for text-delta chunks, convert the text to uppercase:
          chunk.type === 'text-delta'
            ? { ...chunk, textDelta: chunk.textDelta.toUpperCase() }
            : chunk,
        );
      },
    });

const result = streamText({
  model: my_model("openai/gpt-4o-mini"),
  prompt: "Is Kafka German?",
  experimental_transform: upperCaseTransform(),
});

for await (const textPart of result.textStream) {
  console.log(textPart);
}
```

همچنین می‌توانید استریم را با استفاده از تابع `stopStream` متوقف کنید. این کار زمانی مفید است که بخواهید استریم را در صورت نقض محدودیت‌های مدل، مانند تولید محتوای نامناسب، متوقف نمایید.

هنگامی که تابع `stopStream` را فراخوانی می‌کنید، مهم است که رویدادهای `step-finish` و `finish` را شبیه‌سازی کنید تا تضمین شود استریم به‌درستی خاتمه می‌یابد و تمامی توابع callback فراخوانی می‌شوند.

```js
// npm i @ai-sdk/openai@^1 ai@^4 dotenv

import { streamText, TextStreamPart, ToolSet } from 'ai';
import { createOpenAI } from '@ai-sdk/openai';
import { config } from 'dotenv';

config();
const my_model = createOpenAI({
  baseURL: process.env.BASE_URL!,
  apiKey: process.env.LIARA_API_KEY!,
});

const stopWordTransform =
  <TOOLS extends ToolSet>() =>
  ({ stopStream }: { stopStream: () => void }) =>
    new TransformStream<TextStreamPart<TOOLS>, TextStreamPart<TOOLS>>({
      // note: this is a simplified transformation for testing;
      // in a real-world version more there would need to be
      // stream buffering and scanning to correctly emit prior text
      // and to detect all STOP occurrences.
      transform(chunk, controller) {
        if (chunk.type !== 'text-delta') {
          controller.enqueue(chunk);
          return;
        }

        if (chunk.textDelta.includes('STOP')) {
          // stop the stream
          stopStream();

          // simulate the step-finish event
          controller.enqueue({
            type: 'step-finish',
            messageId: 'mock-message-id',
            finishReason: 'stop',
            logprobs: undefined,
            usage: {
              completionTokens: NaN,
              promptTokens: NaN,
              totalTokens: NaN,
            },
            request: {} as any,
            response: {
              id: 'response-id',
              modelId: 'mock-model-id',
              timestamp: new Date(0),
            },
            providerMetadata: {} as any,
            warnings: [],
            isContinued: false,
          });

          // simulate the finish event
          controller.enqueue({
            type: 'finish',
            finishReason: 'stop',
            logprobs: undefined,
            usage: {
              completionTokens: NaN,
              promptTokens: NaN,
              totalTokens: NaN,
            },
            response: {
              id: 'response-id',
              modelId: 'mock-model-id',
              timestamp: new Date(0),
            },
            providerMetadata: {} as any,
          });

          return;
        }

        controller.enqueue(chunk);
      },
});

const result = streamText({
  model: my_model("openai/gpt-4o-mini"),
  prompt: "Is ",
  experimental_transform: stopWordTransform(),
});

for await (const textPart of result.textStream) {
  console.log(textPart);
}
```

## تبدیل‌های چندگانه

شما همچنین می‌توانید چندین تبدیل را به‌صورت همزمان ارائه دهید. این تبدیل‌ها به ترتیبی که ارائه شده‌اند، اعمال می‌شوند.

```js
const result = streamText({
  model,
  prompt,
  experimental_transform: [firstTransform, secondTransform],
});
```

## تولید متن طولانی

بیشتر LLMها دارای محدودیت طول خروجی هستند که معمولاً بسیار کوتاه‌تر از پنجره‌ی متنی (context window) آن‌هاست. این بدان معناست که نمی‌توان متن‌های طولانی را در یک مرحله تولید کرد، اما امکان اضافه کردن پاسخ‌های تولید شده به ورودی و ادامه‌ی تولید متن برای ایجاد متن‌های بلندتر وجود دارد.

توابع `generateText` و `streamText` از چنین قابلیتی برای تولید متن‌های طولانی (با تنظیم `experimental_continueSteps`) پشتیبانی می‌کنند:

```js
// npm i @ai-sdk/openai@^1 ai@^4 dotenv

import { generateText } from 'ai';
import { config } from 'dotenv';
import { createOpenAI } from '@ai-sdk/OpenAI';

config();
const my_model = createOpenAI({
  baseURL: process.env.BASE_URL!,
  apiKey: process.env.LIARA_API_KEY!,
});

const {
  text, // combined text
  usage, // combined usage of all steps
} = await generateText({
  model: my_model('openai/gpt-4o-mini'), // 4096 output tokens
  maxSteps: 5, // enable multi-step calls
  experimental_continueSteps: true,
  prompt:
    'Write a book about Roman history, ' +
    'from the founding of the city of Rome ' +
    'to the fall of the Western Roman Empire. ' +
    'Each chapter MUST HAVE at least 1000 words.',
});

console.log(text)
console.log(usage)
```

> زمانی که گزینه `experimental_continueSteps` فعال باشد، در تابع `streamText` تنها کلمات کامل، استریم می‌شوند و هر دو تابع `generateText` و `streamText` ممکن است برای جلوگیری از مشکلات فاصله‌گذاری، توکن‌های انتهایی برخی فراخوانی‌ها را حذف کنند.  
> برخی مدل‌ها ممکن است همیشه به درستی به‌صورت خودکار، متوقف نشوند و تا رسیدن به مقدار `maxSteps` به تولید ادامه دهند. شما می‌توانید با استفاده از پیام‌های سیستمی، مانند "زمانی که اطلاعات کافی ارائه شد، متوقف شو!" به مدل اشاره کنید که فرآیند تولید را متوقف کند.

## مثال‌ها

شما می‌توانید از توابع `generateText` و `streamText` در فریم‌ورک‌های مختلفی که مستندات آن‌ها در ادامه قرار گرفته است، استفاده کنید:  

## generateText

- [تولید متن در NodeJS](https://docs.liara.ir/ai/cookbook/nodejs/generate-text)
- [تولید متن در NextJS App Router](https://docs.liara.ir/ai/cookbook/nextjs/generate-text)
- [تولید متن در RSC](https://docs.liara.ir/ai/cookbook/rsc/generate-text)

## streamText

- [استریم متن در NodeJS](https://docs.liara.ir/ai/cookbook/nodejs/stream-text)
- [استریم متن در NextJS App Router](https://docs.liara.ir/ai/cookbook/nextjs/stream-text)
- [استریم متن در RSC](https://docs.liara.ir/ai/cookbook/rsc/stream-text)

## all links

[All links of docs](https://docs.liara.ir/all-links-llms.txt)
