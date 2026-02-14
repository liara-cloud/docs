Original link: https://docs.liara.ir/ai/ai-sdk-core/provider-management/

# مدیریت مدل و ارائه‌دهنده در سرویس AI

هنگامی که با ارائه‌دهنده‌ها و مدل‌های متعدد کار می‌کنید،  
اغلب مفید است که آن‌ها را در یک مکان مرکزی مدیریت کنید و از طریق رشته‌های متنی ساده به آن‌ها دسترسی داشته باشید.

AI SDK برای این منظور دو قابلیت custom providers و provider registry را ارائه می‌دهد:  

- با custom providers می‌توانید تنظیمات مدل را از پیش پیکربندی کرده، نام‌های مستعار (Aliases) برای مدل‌ها ارائه دهید و مدل‌های در دسترس را محدود کنید
- provider registry به شما این امکان را می‌دهد که چندین ارائه‌دهنده را ترکیب کرده و از طریق رشته‌های متنی ساده به آن‌ها دسترسی پیدا کنید

شما می‌توانید custom providers , provider registry و middleware را در برنامه خود با هم ترکیب و استفاده کنید.

## Custom Providers

شما می‌توانید ارائه‌دهنده شخصی خود را با استفاده از `customProvider` ایجاد کنید.  

## مثال: تنظیمات سفارشی مدل

ممکن است بخواهید تنظیمات پیش‌فرض مدل را برای یک ارائه‌دهنده بازنویسی کنید  
یا برای مدل، یک نام مستعار (Alias) با تنظیمات از پیش‌تعریف‌شده ایجاد کنید.

```js
import { customProvider, generateText } from 'ai';
import { createOpenAI as originalOpenAI } from '@ai-sdk/openai';
import { config } from 'dotenv';

config();
const my_model = originalOpenAI({
  baseURL: process.env.BASE_URL!,
  apiKey: process.env.LIARA_API_KEY!,
});

// custom provider with different model settings:
export const openai = customProvider({
  languageModels: {
    // replacement model with custom settings:
    'gpt-4.1': my_model('openai/gpt-4.1', { structuredOutputs: true }),
    // alias model with custom settings:
    'gpt-4o-mini-structured': my_model('gpt-4o-mini', {
      structuredOutputs: true,
    }),
  },
  fallbackProvider: my_model,
});

const { text } = await generateText({
  model: openai.languageModel('gpt-4.1'),
  prompt: 'Hey buddy, how are you?',
});

console.log(text);
```

## مثال: نام مستعار برای مدل

شما می‌توانید نام‌های مستعار برای مدل‌ها تعریف کنید، تا در آینده بتوانید نسخه‌ی مدل را تنها در یک مکان به‌روزرسانی کنید:

```js
import { customProvider, generateText } from 'ai';
import { createOpenAI as originalOpenAI } from '@ai-sdk/openai';
import { config } from 'dotenv';

config();
const my_model = originalOpenAI({
  baseURL: process.env.BASE_URL!,
  apiKey: process.env.LIARA_API_KEY!,
});

export const anthropic = customProvider({
  languageModels: {
    opus: my_model('anthropic/claude-opus-4'),
    sonnet: my_model('anthropic/claude-sonnet-4'),
    thinking_sonnet: my_model('anthropic/claude-3.7-sonnet:thinking'),
  },
  fallbackProvider: my_model,
});

const { text } = await generateText({
  model: anthropic.languageModel('thinking_sonnet'),
  prompt: 'Hey buddy, how are you?',
});

console.log(text);
```

## محدودسازی مدل‌های در دسترس

می‌توانید مدل‌های در دسترس در سیستم را محدود کنید.

```js
import { customProvider } from 'ai';
import { createOpenAI } from '@ai-sdk/openai';
import { config } from 'dotenv';

config();
const openai = createOpenAI({
  baseURL: process.env.BASE_URL!,
  apiKey: process.env.LIARA_API_KEY!,
});

export const myProvider = customProvider({
  languageModels: {
    'text-medium': openai('deepseek/deepseek-r1-distill-llama-70b'),
    'text-small': openai('openai/gpt-4o-mini'),
    'structure-medium': openai('openai/gpt-4.1', { structuredOutputs: true }),
    'structure-fast': openai('openai/o4-mini-high', { structuredOutputs: true }),
  },
  textEmbeddingModels: {
    embedding: openai.embedding('openai/text-embedding-3-large'),
  },
  // no fallback provider
});
```

## Provider Registry

می‌توانید با استفاده از تابع `createProviderRegistry` یک رجیستری ایجاد کنید که شامل چندین مدل است.

## راه اندازی

می‌توانید یک فایل به نام `registry.ts` ایجاد کنید و قطعه کد  
زیر را درون آن، قرار دهید:  

```js
import { createProviderRegistry } from 'ai';
import { createOpenAI } from '@ai-sdk/openai';
import { config } from 'dotenv';
import { anthropic } from '@ai-sdk/anthropic';

config();

export const registry = createProviderRegistry({
  // register provider with prefix and custom setup:
  anthropic,
  
  openai: createOpenAI({
    apiKey: process.env.LIARA_API_KEY,
    baseURL: process.env.BASE_URL,
  }),
});
```

## راه‌اندازی با Custom Separator

به‌صورت پیش‌فرض، رجیستری از `:` به‌عنوان جداکننده بین شناسه‌های ارائه‌دهنده و مدل استفاده می‌کند. می‌توانید این جداکننده را سفارشی‌سازی کنید:

```js
import { createProviderRegistry } from 'ai';
import { createOpenAI } from '@ai-sdk/openai';
import { config } from 'dotenv';

config();

export const registry = createProviderRegistry(
  // register provider with prefix and custom setup:
  {
    openai: createOpenAI({
        apiKey: process.env.LIARA_API_KEY,
        baseURL: process.env.BASE_URL,
    }),
  },
  { separator: ' > ' },
);
```

## مثال: استفاده از مدل‌ها

می‌توانید از طریق متد `languageModel` در رجیستری، به مدل‌ها دسترسی پیدا کنید. در این حالت، شناسه ارائه‌دهنده (Provider ID) به‌عنوان پیشوند شناسه مدل قرار می‌گیرد:

```js
import { generateText } from 'ai';
import { registry } from 'https://docs.liara.ir/registry';

const { text } = await generateText({
  model: registry.languageModel('openai:openai/gpt-4o-mini'), // default separator
  // or with custom separator:
  // model: customSeparatorRegistry.languageModel('openai > openai/gpt-4o-mini'),
  prompt: 'Invent a new holiday and describe its traditions.',
});
```

## استفاده از مدل‌های embedding

می‌توانید از طریق متد `textEmbeddingModel` در رجیستری به مدل‌های Text Embedding دسترسی پیدا کنید. در این حالت، شناسه ارائه‌دهنده (Provider ID) به‌عنوان پیشوند شناسه مدل قرار می‌گیرد:

```js
import { embed } from 'ai';
import { registry } from 'https://docs.liara.ir/registry';

const { embedding } = await embed({
  model: registry.textEmbeddingModel('openai:openai:text-embedding-3-small'),
  value: 'sunny day at the beach',
});
```

## all links

[All links of docs](https://docs.liara.ir/all-links-llms.txt)
