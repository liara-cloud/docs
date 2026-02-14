Original link: https://docs.liara.ir/ai/ai-sdk-core/middleware/

# Middleware مدل‌های زبانی سرویس AI

Middleware مدل زبانی راهی است برای بهینه‌سازی رفتار مدل‌های هوش مصنوعی با  
اصلاح فراخوانی‌های مدل.  
Middleware می‌تواند برای افزودن قابلیت‌هایی مثل guardrailها، RAG، کشینگ و لاگ‌گیری در مدل زبانی، به شکلی مستقل، به کار رود.  
چنین میان‌افزاری می‌تواند به‌صورت جداگانه توسعه یافته و توزیع شود، بدون آن‌که وابستگی مستقیمی به مدل‌های زبانی که روی آن‌ها اعمال می‌شود داشته باشد.

## استفاده از middleware مدل زبانی

شما می‌توانید از middleware مدل زبانی از طریق تابع `wrapLanguageModel` استفاده کنید.  
این تابع یک مدل زبان و یک middleware مدل زبانی را می‌گیرد و یک مدل زبانی که با middleware ادغام شده است، برمی‌گرداند.

```js
import { wrapLanguageModel } from 'ai';
import { createOpenAI } from '@ai-sdk/openai';
import { config } from 'dotenv';

config();
const my_model = createOpenAI({
  baseURL: process.env.BASE_URL!,
  apiKey: process.env.LIARA_API_KEY!,
});

const wrappedLanguageModel = wrapLanguageModel({
  model: my_model("openai/gpt-4o-mini"),
  middleware: yourLanguageModelMiddleware,
});
```

مدل زبانیِ بسته‌بندی‌شده (Wrapped Language Model) می‌تواند درست مانند هر مدل زبانی دیگر مورد استفاده قرار گیرد؛ برای مثال، در `streamText`:

```js
const result = streamText({
  model: wrappedLanguageModel,
  prompt: 'What cities are in the United States?',
});
```

## middlewareهای متعدد

می‌توان چندین  middleware را به تابع `wrapLanguageModel` ارائه کرد. این  middlewareها به همان ترتیبی اعمال خواهند شد که ارائه شده‌اند.

```js
const wrappedLanguageModel = wrapLanguageModel({
  model: yourModel,
  middleware: [firstMiddleware, secondMiddleware],
});

// applied as: firstMiddleware(secondMiddleware(yourModel))
```

## middlewareهای داخلی

AI SDK شامل چندین middleware داخلی (built-in) است که می‌توان از آن‌ها برای پیکربندی مدل‌ها استفاده کرد:

- `extractReasoningMiddleware`: اطلاعات استدلالی را از متن تولیدشده استخراج کرده و آن را به‌عنوان یک property به نتیجه اضافه می‌کند
- `simulateStreamingMiddleware`: رفتار استریمی را برای پاسخ‌های مدل‌های زبانی غیر‌استریمی شبیه‌سازی می‌کند
- `defaultSettingsMiddleware`: تنظیمات پیش‌فرض را روی یک مدل اعمال می‌کند

## استخراج استدلال

برخی از مدل‌ها، اطلاعات استدلال را در متن تولیدشده با استفاده از برچسب‌های خاص (مانند `<think>` و `<think/>`) ارائه می‌دهند.

```js
import { wrapLanguageModel, extractReasoningMiddleware } from 'ai';
import { createOpenAI } from '@ai-sdk/openai';
import { config } from 'dotenv';

config();
const my_model = createOpenAI({
  baseURL: process.env.BASE_URL!,
  apiKey: process.env.LIARA_API_KEY!,
});


const model = wrapLanguageModel({
  model: my_model("openai/gpt-4o-mini"),
  middleware: extractReasoningMiddleware({ tagName: 'think' }),
});
```

سپس، می‌توانید از مدل ارتقایافته در توابعی مانند `generateText` و `streamText` استفاده کنید.

تابع `extractReasoningMiddleware` همچنین شامل گزینه‌ای به نام `startWithReasoning` است. هنگامی که این گزینه روی مقدار `true` تنظیم شود، برچسب استدلال (Reasoning Tag) به ابتدای متن تولیدشده اضافه خواهد شد. این ویژگی برای مدل‌هایی مفید است که در آغاز پاسخ خود برچسب استدلال را قرار نمی‌دهند.  

## شبیه سازی استریم

تابع `simulateStreamingMiddleware` می‌تواند برای شبیه‌سازی رفتار استریمی در پاسخ‌های مدل‌های غیر‌استریمی مورد استفاده قرار گیرد. این قابلیت زمانی مفید است که بخواهید یک رابط استریمی یکپارچه داشته باشید، حتی زمانی که از مدل‌هایی استفاده می‌کنید که تنها پاسخ‌های کامل ارائه می‌دهند.

```js
import { wrapLanguageModel, simulateStreamingMiddleware } from 'ai';
import { createOpenAI } from '@ai-sdk/openai';
import { config } from 'dotenv';

config();
const my_model = createOpenAI({
  baseURL: process.env.BASE_URL!,
  apiKey: process.env.LIARA_API_KEY!,
});

const model = wrapLanguageModel({
  model: my_model("openai/gpt-4o-mini"),
  middleware: simulateStreamingMiddleware(),
});
```

## تنظیمات پیش فرض

تابع `defaultSettingsMiddleware` می‌تواند برای اعمال تنظیمات پیش‌فرض روی یک مدل مورد استفاده قرار گیرد.

```js
import { wrapLanguageModel, defaultSettingsMiddleware, generateText } from 'ai';
import { createOpenAI } from '@ai-sdk/openai';
import { config } from 'dotenv';

config();
const my_model = createOpenAI({
  baseURL: process.env.BASE_URL!,
  apiKey: process.env.LIARA_API_KEY!,
});

const model = wrapLanguageModel({
  model: my_model("openai/gpt-4o-mini"),
 middleware: defaultSettingsMiddleware({
    settings: {
      temperature: 0.5,
      maxTokens: 800,
      // note: use providerMetadata instead of providerOptions here:
      providerMetadata: { openai: { store: false } },
    },
  }),
});
```

## پیاده‌سازی middleware مدل

> پیاده‌سازی middleware مدل زبانی یک قابلیت پیشرفته است و نیازمند درک کامل از مشخصات مدل زبانی می‌باشد.

می‌توانید هر یک از سه تابع زیر را برای تغییر رفتار مدل، پیاده‌سازی کنید:

- `transformParams`: پارامترها را پیش از ارسال به مدل برای هر دو متد `doGenerate` و `doStream` تغییر می‌دهد
- `wrapGenerate`: متد `doGenerate` مدل را بسته‌بندی می‌کند. می‌توانید پارامترها را تغییر داده، مدل را فراخوانی کرده و نتیجه را اصلاح کنید
- `wrapStream`: متد `doStream` مدل را بسته‌بندی می‌کند. می‌توانید پارامترها را تغییر داده، مدل را فراخوانی کرده و نتیجه را اصلاح کنید

در ادامه، مثال‌هایی از نحوه‌ی پیاده‌سازی middleware مدل ارائه شده است:

## مثال‌ها

> این مثال‌ها برای استفاده در محیط Production طراحی نشده‌اند و تنها برای نشان دادن نحوه استفاده از middleware برای بهبود رفتار مدل‌ها ارائه شده‌اند.

### - لاگ‌گیری

این مثال نشان می‌دهد چگونه می‌توان پارامترها و متن تولیدشده توسط یک فراخوانی مدل را لاگ کرد.

- [yourLogMiddleware](https://docs.liara.ir)

```js
import type { LanguageModelV1Middleware, LanguageModelV1StreamPart } from 'ai';

export const yourLogMiddleware: LanguageModelV1Middleware = {
  wrapGenerate: async ({ doGenerate, params }) => {
    console.log('doGenerate called');
    console.log(`params: ${JSON.stringify(params, null, 2)}`);

    const result = await doGenerate();

    console.log('doGenerate finished');
    console.log(`generated text: ${result.text}`);

    return result;
  },

  wrapStream: async ({ doStream, params }) => {
    console.log('doStream called');
    console.log(`params: ${JSON.stringify(params, null, 2)}`);

    const { stream, ...rest } = await doStream();

    let generatedText = '';

    const transformStream = new TransformStream<
      LanguageModelV1StreamPart,
      LanguageModelV1StreamPart
    >({
      transform(chunk, controller) {
        if (chunk.type === 'text-delta') {
          generatedText += chunk.textDelta;
        }

        controller.enqueue(chunk);
      },

      flush() {
        console.log('doStream finished');
        console.log(`generated text: ${generatedText}`);
      },
    });

    return {
      stream: stream.pipeThrough(transformStream),
      ...rest,
    };
  },
};
```

### - کشینگ

این مثال نشان می‌دهد چگونه می‌توان یک کش ساده برای متن تولیدشده توسط یک فراخوانی مدل ساخت.

- [yourCacheMiddleware](https://docs.liara.ir)

```js
import type { LanguageModelV1Middleware } from 'ai';

const cache = new Map<string, any>();

export const yourCacheMiddleware: LanguageModelV1Middleware = {
  wrapGenerate: async ({ doGenerate, params }) => {
    const cacheKey = JSON.stringify(params);

    if (cache.has(cacheKey)) {
      return cache.get(cacheKey);
    }

    const result = await doGenerate();

    cache.set(cacheKey, result);

    return result;
  },

  // here you would implement the caching logic for streaming
};
```

### - Retrieval Augmented Generation (RAG)

این مثال نشان می‌دهد چگونه می‌توان از RAG به‌عنوان middleware استفاده کرد.

> توابع کمکی مانند `getLastUserMessageText` و `findSources` جزو AI SDK نیستند و تنها در این مثال برای توضیح مفهوم RAG به‌کار رفته‌اند.

- [yourRagMiddleware](https://docs.liara.ir)

```js
import type { LanguageModelV1Middleware } from 'ai';

export const yourRagMiddleware: LanguageModelV1Middleware = {
  transformParams: async ({ params }) => {
    const lastUserMessageText = getLastUserMessageText({
      prompt: params.prompt,
    });

    if (lastUserMessageText == null) {
      return params; // do not use RAG (send unmodified parameters)
    }

    const instruction =
      'Use the following information to answer the question:\\n' +
      findSources({ text: lastUserMessageText })
        .map(chunk => JSON.stringify(chunk))
        .join('\\n');

    return addToLastUserMessage({ params, text: instruction });
  },
};
```

### - Guardrails

Guardrailها روشی برای اطمینان از ایمنی و مناسب بودن متن تولیدشده توسط یک فراخوانی مدل  هستند. این مثال نشان می‌دهد چگونه می‌توان از محافظ‌ها به‌عنوان middleware استفاده کرد.

- [yourGuardrailMiddleware](https://docs.liara.ir)

```js
import type { LanguageModelV1Middleware } from 'ai';

export const yourGuardrailMiddleware: LanguageModelV1Middleware = {
  wrapGenerate: async ({ doGenerate }) => {
    const { text, ...rest } = await doGenerate();

    // filtering approach, e.g. for PII or other sensitive information:
    const cleanedText = text?.replace(/badword/g, '<REDACTED>');

    return { text: cleanedText, ...rest };
  },

  // here you would implement the guardrail logic for streaming
  // Note: streaming guardrails are difficult to implement, because
  // you do not know the full content of the stream until it's finished.
};
```

## پیکربندی متادیتای سفارشی برای هر درخواست

برای ارسال و دسترسی به متادیتای سفارشی در middleware، می‌توان از `providerOptions` استفاده کرد. این قابلیت هنگام ساخت middleware لاگ‌گیری مفید است، زمانی که می‌خواهید contextهای اضافی مانند شناسه کاربر (User ID)، Timestamp یا سایر داده‌های زمینه‌ای را منتقل کنید که می‌تواند به ردیابی و اشکال‌زدایی کمک کند.

```js
import { generateText, wrapLanguageModel, LanguageModelV1Middleware } from 'ai';
import { createOpenAI } from '@ai-sdk/openai';
import { config } from 'dotenv';

export const yourLogMiddleware: LanguageModelV1Middleware = {
  wrapGenerate: async ({ doGenerate, params }) => {
    console.log('METADATA', params?.providerMetadata?.yourLogMiddleware);
    const result = await doGenerate();
    return result;
  },
};

config();
const my_model = createOpenAI({
  baseURL: process.env.BASE_URL!,
  apiKey: process.env.LIARA_API_KEY!,
});

const { text } = await generateText({
  model: wrapLanguageModel({
    model: my_model("openai/gpt-4o-mini"),
    middleware: yourLogMiddleware,
  }),
  prompt: 'Invent a new holiday and describe its traditions.',
  providerOptions: {
    yourLogMiddleware: {
      hello: 'world',
    },
  },
});
```

## all links

[All links of docs](https://docs.liara.ir/all-links-llms.txt)
