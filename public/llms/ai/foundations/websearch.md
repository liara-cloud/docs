Original link: https://docs.liara.ir/ai/foundations/websearch/

# قابلیت جستجو در وب با هوش مصنوعی

قابلیت جستجو در وب به مدل‌های هوش مصنوعی این امکان را می‌دهد که فراتر از داده‌های از پیش آموزش‌دیده عمل کرده و به اطلاعات به‌روز، دقیق و معتبر دسترسی پیدا کنند. این ویژگی باعث می‌شود پاسخ‌ها بر اساس آخرین منابع موجود در اینترنت ارائه شوند و دقت و کارآمدی مدل در حوزه‌های پویا مانند اخبار، فناوری یا قوانین افزایش یابد. همچنین جستجوی وب می‌تواند مکمل دانش پایه مدل باشد و محدودیت‌های ناشی از تاریخ آموزش را تا حد زیادی برطرف کند.

## فعال‌سازی قابلیت جستجو در وب در مدل

برای استفاده از قابلیت جستجو در وب، تنها کافی است تا پس از به کار بردن نام مدل، عبارت `online:` را نیز به انتهای نام، اضافه کنید. به عنوان مثال، اگر قصد دارید از مدل `openai/gpt-4o-mini` با قابلیت جستجو در وب استفاده کنید، باید برای اتصال به مدل، از نام `openai/gpt-4o-mini:online` استفاده کنید.

در ادامه، مقایسه‌ای بین پاسخ‌های مدل `openai/gpt-4o-mini` و `gpt-4o-mini:online` ارائه شده است که تفاوت عملکرد این دو مدل را در پاسخ به یک سوال نشان می‌دهد:

## پاسخ مدل بدون استفاده از قابلیت وب‌سرچ

برای دریافت پاسخ از مدل `openai/gpt-4o-mini`، می‌توانید از کد زیر استفاده کنید:

```js
// npm i @ai-sdk/openai@^1 ai@^4 dotenv

import { generateText } from 'ai';
import { createOpenAI } from '@ai-sdk/openai';
import { config } from 'dotenv';

config();
const my_model = createOpenAI({
  baseURL: process.env.BASE_URL!,
  apiKey: process.env.LIARA_API_KEY!,
});

const { text } = await generateText({
    model: my_model("openai/gpt-4o-mini"),
    prompt: 'What is the latest iPhone model available now? no explaination \\
    just the name and the release date.',
});

console.log(text);
```

برای پرامپت فوق، مدل، تنها با دانش خود، پاسخ می‌دهد:

```txt
iPhone 15 Pro Max - September 22, 2023.
```

## پاسخ مدل با استفاده از قابلیت وب‌سرچ

برای دریافت پاسخ از مدل `openai/gpt-4o-mini:online`, می‌توانید از کد زیر استفاده کنید:

```js
// npm i @ai-sdk/openai@^1 ai@^4 dotenv

import { generateText } from 'ai';
import { createOpenAI } from '@ai-sdk/openai';
import { config } from 'dotenv';

config();
const my_model = createOpenAI({
  baseURL: process.env.BASE_URL!,
  apiKey: process.env.LIARA_API_KEY!,
});

const { text } = await generateText({
    model: my_model("openai/gpt-4o-mini:online"),
    prompt: 'What is the latest iPhone model available now? no explaination \\
    just the name and the release date.',
});

console.log(text);
```

برای پرامپت فوق، مدل، پس از جستجوی وب (در صورت نیاز)، پاسخ می‌دهد:

```text
The latest iPhone model available now is the iPhone 17, released on September 9, 2025.
```

## مدل‌های شامل قابلیت جستجو در وب

در حال حاضر، مدل‌های زیر در سرویس هوش مصنوعی لیارا، از قابلیت جستجو در وب، پشتیبانی می‌کنند:

- `qwen/qwen3-coder`
- `qwen/qwen3-235b-a22b-thinking-2507`
- `qwen/qwen3-32b`
- `openai/gpt-5-chat`
- `openai/gpt-5-mini`
- `openai/gpt-5-nano`
- `x-ai/grok-4`
- `openai/o4-mini-high`
- `openai/o4-mini`
- `anthropic/claude-sonnet-4`
- `anthropic/claude-opus-4`
- `openai/gpt-4o-mini`
- `anthropic/claude-3.7-sonnet`
- `google/gemini-2.0-flash-001`
- `google/gemini-2.5-pro-preview`
- `anthropic/claude-3.7-sonnet:thinking`
- `google/gemini-flash-1.5-8b`
- `mistralai/mistral-nemo`
- `anthropic/claude-3.7-sonnet:beta`
- `google/gemini-2.0-flash-lite-001`
- `anthropic/claude-3.5-sonnet`
- `openai/gpt-4.1`
- `openai/gpt-4.1-mini`
- `deepseek/deepseek-r1-distill-llama-70b`
- `google/gemini-flash-1.5`
- `x-ai/grok-3-beta`
- `x-ai/grok-3-mini-beta`
- `google/gemini-2.5-flash`
- `x-ai/grok-code-fast-1`

تنها کافیست به مدل‌های فوق، عبارت `online:` را اضافه کنید تا قابلیت جستجو در وب، فعال شود.

## all links

[All links of docs](https://docs.liara.ir/all-links-llms.txt)
