Original link: https://docs.liara.ir/ai/ai-sdk-core/embeddings/

# قابلیت Embeddings (بردارسازی)

Embedding روشی برای نمایش کلمات، عبارات یا تصاویر به‌صورت بردارها (vectors) در یک فضای با ابعاد بالا (high-dimensional) است. در این فضا، کلمات مشابه به یکدیگر نزدیک‌اند و فاصله بین کلمات می‌تواند برای اندازه‌گیری میزان شباهت آن‌ها به کار رود.

## بردارسازی یک مقدار واحد

AI SDK تابع `embed` را برای ساخت بردار مقادیر منفرد ارائه می‌دهد که برای کارهایی مانند یافتن کلمات یا عبارات مشابه و یا خوشه‌بندی متن مفید است.
می‌توانید از این تابع به شکل زیر به همراه مدل‌های Embedding استفاده کنید:

```js
import { embed } from 'ai';
import { createOpenAI } from '@ai-sdk/openai';
import { config } from 'dotenv';

config();
const my_model = createOpenAI({
  baseURL: process.env.BASE_URL!,
  apiKey: process.env.LIARA_API_KEY!,
});

// 'embedding' is a single embedding object (number[])
const { embedding } = await embed({
  model: my_model.embedding('https://docs.liara.ir/openai/text-embedding-3-small'),
  value: 'sunny day at the beach',
});

console.log(embedding);
```

## بردارسازی چندین مقدار

هنگام بارگذاری داده‌ها، مثلاً هنگام آماده‌سازی یک data store برای retrieval-augmented generation (RAG)، اغلب مفید است که از چندین مقدار به‌صورت همزمان، بردار ساخته شود (batch embedding).
AI SDK برای این منظور تابع `embedMany` را ارائه می‌دهد که مشابه تابع `embed` می‌توانید از آن همراه با مدل‌های embeddings استفاده کنید.

```js
import { embedMany } from 'ai';
import { createOpenAI } from '@ai-sdk/openai';
import { config } from 'dotenv';

config();
const my_model = createOpenAI({
  baseURL: process.env.BASE_URL!,
  apiKey: process.env.LIARA_API_KEY!,
});

// 'embeddings' is an array of embedding objects (number[][]).
// It is sorted in the same order as the input values.
const { embeddings } = await embedMany({
  model: my_model.embedding('https://docs.liara.ir/openai/text-embedding-3-small'),
  values: [
    'sunny day at the beach',
    'rainy afternoon in the city',
    'snowy night in the mountains',
  ],
});

console.log(embeddings);
```

## شباهت بردارها

پس از ساخت بردار از مقادیر، می‌توانید با استفاده از تابع `cosineSimilarity` میزان شباهت بین آن‌ها را محاسبه کنید. این روش برای یافتن کلمات یا عبارات مشابه در یک مجموعه داده مفید است. همچنین می‌توانید آیتم‌های مرتبط را بر اساس میزان شباهت آن‌ها رتبه‌بندی و فیلتر کنید.

```js
import { cosineSimilarity, embedMany } from 'ai';
import { createOpenAI } from '@ai-sdk/openai';
import { config } from 'dotenv';

config();
const my_model = createOpenAI({
  baseURL: process.env.BASE_URL!,
  apiKey: process.env.LIARA_API_KEY!,
});

const { embeddings } = await embedMany({
  model: my_model.embedding('https://docs.liara.ir/openai/text-embedding-3-small'),
  values: ['sunny day at the beach', 'rainy afternoon in the city'],
});

console.log(
  `cosine similarity: ${cosineSimilarity(embeddings[0], embeddings[1])}`,
);
```

## میزان مصرف توکن‌ها

بسیاری از ارائه‌دهندگان هزینه را بر اساس تعداد توکن‌های استفاده‌شده برای تولید embeddingها محاسبه می‌کنند.
توابع `embed` و `embedMany` اطلاعات مربوط به مصرف توکن‌ها را در `usage` از `result object` ارائه می‌دهند:

```js
import { embed } from 'ai';
import { createOpenAI } from '@ai-sdk/openai';
import { config } from 'dotenv';

config();
const my_model = createOpenAI({
  baseURL: process.env.BASE_URL!,
  apiKey: process.env.LIARA_API_KEY!,
});

const { embedding, usage } = await embed({
  model: my_model.embedding('https://docs.liara.ir/openai/text-embedding-3-small'),
  value: 'sunny day at the beach',
});

console.log(usage);
```

## تنظیمات

## Retries

هر دو تابع `embed` و `embedMany` یک پارامتر اختیاری به نام `maxRetries` از نوع `number` می‌پذیرند که می‌توانید از آن برای تعیین حداکثر تعداد تلاش‌های مجدد در فرایند بردارسازی استفاده کنید.
به‌طور پیش‌فرض، مقدار آن `2` بار تلاش مجدد (در مجموع `3` تلاش) است.
برای غیرفعال کردن تلاش‌های مجدد، می‌توانید مقدار آن را روی `0` تنظیم کنید.

```js
import { embed } from 'ai';
import { createOpenAI } from '@ai-sdk/openai';
import { config } from 'dotenv';

config();
const my_model = createOpenAI({
  baseURL: process.env.BASE_URL!,
  apiKey: process.env.LIARA_API_KEY!,
});

const { embedding } = await embed({
  model: my_model.embedding('https://docs.liara.ir/openai/text-embedding-3-small'),
  value: 'sunny day at the beach',
  maxRetries: 0, // Disable retries
});
```

## سیگنال‌های توقف و Timeoutها

هر دو تابع `embed` و `embedMany` یک پارامتر اختیاری به نام `abortSignal` می‌پذیرند که می‌توانید از آن برای متوقف کردن فرایند بردارسازی یا تعیین یک timeout استفاده کنید.

```js
import { embed } from 'ai';
import { createOpenAI } from '@ai-sdk/openai';
import { config } from 'dotenv';

config();
const my_model = createOpenAI({
  baseURL: process.env.BASE_URL!,
  apiKey: process.env.LIARA_API_KEY!,
});

const { embedding } = await embed({
  model: my_model.embedding('https://docs.liara.ir/openai/text-embedding-3-small'),
  value: 'sunny day at the beach',
  abortSignal: AbortSignal.timeout(1000), // Abort after 1 second
});
```

## هدرهای سفارشی

هر دو تابع `embed` و `embedMany` یک پارامتر اختیاری به نام `headers` از نوع `<Record<string, string>` می‌پذیرند که می‌توانید از آن برای افزودن هدرهای سفارشی به درخواست بردارسازی (embedding request) استفاده کنید.

```js
import { embed } from 'ai';
import { createOpenAI } from '@ai-sdk/openai';
import { config } from 'dotenv';

config();
const my_model = createOpenAI({
  baseURL: process.env.BASE_URL!,
  apiKey: process.env.LIARA_API_KEY!,
});

const { embedding } = await embed({
  model: my_model.embedding('https://docs.liara.ir/openai/text-embedding-3-small'),
  value: 'sunny day at the beach',
  headers: { 'X-Custom-Header': 'custom-value' },
});
```

## all links

[All links of docs](https://docs.liara.ir/all-links-llms.txt)
