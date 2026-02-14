Original link: https://docs.liara.ir/ai/foundations/overview/

# هوش مصنوعی لیارا، در یک نگاه

## چگونه از سرویس هوش مصنوعی لیارا استفاده کنیم؟

سرویس هوش مصنوعی لیارا، 
به شما سه پارامتر اصلی برای کار با هوش مصنوعی‌ها ارائه می‌دهد:

- **کلید API**، که برای احراز هویت، استفاده می‌شود.
- **مدل**، که مشخص می‌کند کدام مدل هوش مصنوعی استفاده شود.
- **baseUrl**، که آدرس API هوش مصنوعی اختصاصی شما است.

با استفاده از این سه پارامتر، شما می‌توانید به راحتی با هوش مصنوعی‌های مختلف ارتباط برقرار کنید و از قابلیت‌های آن‌ها استفاده کنید.

یکی از راه‌های اتصال به مدل هوش مصنوعی، استفاده از SDKها است. 
استفاده از SDK به توسعه‌دهندگان این امکان را می‌دهد که تمرکز خود را بر روی ساخت برنامه‌های خود بگذارند و زمان خود را صرف جزئیات فنی نکنند. 

به‌عنوان مثال، شما می‌توانید برای برقراری ارتباط با مدل‌های هوش مصنوعی، مانند شکل زیر از `AI SDK` که یکی از فوق‌العاده‌ترین SDKهای ساخته شده برای هوش مصنوعی است؛ استفاده کنید (این SDK تنها برای زبان جاوااسکریپت و تایپ‌اسکریپت در دسترس است):

## openAI

```javascript
// npm i @ai-sdk/openai-compatible
import { createOpenAICompatible } from '@ai-sdk/openai-compatible';
import { generateText } from 'ai';

const { text } = await generateText({
  model: createOpenAICompatible({
    baseURL: process.env.MY_BASE_URL,
    name: 'example',
    apiKey: process.env.MY_API_KEY,
  }).chatModel("openai/gpt-4o-mini"),
  prompt: 'hey.',
});

console.log('Generated Text:', text);
```

## xAI

```javascript
// npm i @ai-sdk/openai-compatible
import { createOpenAICompatible } from '@ai-sdk/openai-compatible';
import { generateText } from 'ai';

const { text } = await generateText({
  model: createOpenAICompatible({
    baseURL: process.env.MY_BASE_URL,
    name: 'example',
    apiKey: process.env.MY_API_KEY,
  }).chatModel("x-ai/grok-3-mini-beta"),
  prompt: 'hey.',
});

console.log('Generated Text:', text);
```

## Claude

```javascript
// npm i @ai-sdk/openai-compatible
import { createOpenAICompatible } from '@ai-sdk/openai-compatible';
import { generateText } from 'ai';

const { text } = await generateText({
  model: createOpenAICompatible({
    baseURL: process.env.MY_BASE_URL,
    name: 'example',
    apiKey: process.env.MY_API_KEY,
  }).chatModel("anthropic/claude-3.7-sonnet"),
  prompt: 'hey.',
});

console.log('Generated Text:', text);
```

## Google

```javascript
// npm i @ai-sdk/openai-compatible
import { createOpenAICompatible } from '@ai-sdk/openai-compatible';
import { generateText } from 'ai';

const { text } = await generateText({
  model: createOpenAICompatible({
    baseURL: process.env.MY_BASE_URL,
    name: 'example',
    apiKey: process.env.MY_API_KEY,
  }).chatModel("google/gemini-2.0-flash-001"),
  prompt: 'hey.',
});

console.log('Generated Text:', text);
```

## هوش مصنوعی مولد چیست؟

هوش مصنوعی مولد به مدل‌هایی گفته می‌شود که 
بهترین خروجی را با توجه به ورودی‌های دریافتی، تولید می‌کنند.
این مدل‌ها می‌توانند متن، تصویر، صدا و یا هر نوع داده دیگری را تولید کنند. 
در واقع، این مدل‌ها از الگوهایی که در داده‌های آموزشی خود داشته‌اند، استفاده می‌کنند. 

> در نظر داشته باشید که در حال حاضر، تنها خروجی مدل‌های ارائه‌شده توسط لیارا، به‌صورت متنی است.

## مدل زبانی بزرگ (LLM) چیست؟

مدل زبانی بزرگ، زیرمجموعه‌ای از مدل‌های مولد است که تمرکز اصلی آن بر **تولید متن** می‌باشد. یک LLM یک متن را به عنوان ورودی دریافت کرده و سعی می‌کند محتمل‌ترین متن بعدی را پیش‌بینی کند.

مدل‌های زبانی بزرگ از روی مجموعه‌های عظیمی از متون نوشتاری، آموزش می‌بینند. این بدان معناست که عملکرد آن‌ها در برخی حوزه‌ها بهتر از سایر موارد خواهد بود. برای مثال، مدلی که بر روی داده‌های GitHub آموزش دیده باشد، سوالات مربوط به برنامه‌نویسی را بهتر از سوالات عمومی پاسخ می‌دهد.

با این حال، درک محدودیت‌های LLMها بسیار مهم است. زمانی که از آن‌ها درباره اطلاعات نادر سوال شود — مانند تاریخ تولد یکی از بستگان شخصی‌ — ممکن است مدل دچار «توهم» شود و اطلاعاتی ساختگی ارائه دهد. بنابراین، ضروری است که در نظر داشته باشید اطلاعات موردنیاز شما تا چه اندازه در داده‌های آموزشی مدل وجود دارد.

## مدل تعبیه‌سازی چیست؟

مدل تعبیه‌سازی (Embedding Model) به مدل‌هایی گفته می‌شود که وظیفه آن‌ها تبدیل داده‌های پیچیده به یک فضای برداری است. این مدل‌ها 
بر خلاف مدل‌های مولد، داده یا متن جدید تولید نمی‌کنند؛ بلکه 
نمایشی از روابط معنادار بین موجودیت‌ها، به شما ارائه می‌دهند.
خروجی مدل‌های تعبیه‌سازی؛ می‌تواند به‌عنوان ورودی مدل‌های زبان طبیعی (NLP) استفاده شود.

## all links

[All links of docs](https://docs.liara.ir/all-links-llms.txt)
