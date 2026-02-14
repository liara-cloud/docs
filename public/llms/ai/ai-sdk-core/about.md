Original link: https://docs.liara.ir/ai/ai-sdk-core/about/

# آشنایی با قابلیت‌های AI SDK

مدل‌های زبانی بزرگ (Large Language Modelها یا LLMها) برنامه‌های پیشرفته‌ای هستند که قادرند زبان انسانی را در مقیاس وسیع درک و تولید کرده و با آن تعامل برقرار کنند. این مدل‌ها با استفاده از حجم عظیمی از متون، آموزش داده می‌شوند تا الگوهای موجود در زبان را تشخیص داده و پیش‌بینی کنند که در یک قطعه‌ی متنی، کلمه یا عبارت بعدی چه خواهد بود.

هسته‌ی AI SDK، کار با LLMها را با فراهم‌کردن یک روش استاندارد برای یکپارچه‌سازی آن‌ها در اپلیکیشن شما ساده‌تر می‌کند؛ به این ترتیب، می‌توانید تمرکز خود را بر ساخت برنامه‌های هوش مصنوعی برای کاربران‌تان بگذارید و نه برای جزئیات فنی.

برای مثال، در ادامه نحوه‌ی تولید متن با استفاده از مدل‌های مختلف از طریق AI SDK آورده شده است:

## openAI

```javascript
// npm i @ai-sdk/openai@^1 ai@^4

import { createOpenAI } from '@ai-sdk/openai';
import { generateText } from 'ai';
import { config } from 'dotenv';

config();
const my_model = createOpenAI({
baseURL: process.env.BASE_URL,
apiKey:  process.env.LIARA_API_KEY,
});

const { text } = await generateText({
model: my_model("openai/gpt-5-chat"),
prompt: 'Why is the sky blue?',
});

console.log('Generated Text:', text);
```

## xAI

```javascript
// npm i @ai-sdk/openai@^1 ai@^4

import { createOpenAI } from '@ai-sdk/openai';
import { generateText } from 'ai';
import { config } from 'dotenv';

config();
const my_model = createOpenAI({
baseURL: process.env.BASE_URL,
apiKey:  process.env.LIARA_API_KEY,
});

const { text } = await generateText({
model: my_model("x-ai/grok-3-mini-beta"),
prompt: 'Why is the sky blue?',
});

console.log('Generated Text:', text);
```

## Claude

```javascript
// npm i @ai-sdk/openai@^1 ai@^4

import { createOpenAI } from '@ai-sdk/openai';
import { generateText } from 'ai';
import { config } from 'dotenv';

config();
const my_model = createOpenAI({
baseURL: process.env.BASE_URL,
apiKey:  process.env.LIARA_API_KEY,
});

const { text } = await generateText({
model: my_model("anthropic/claude-3.7-sonnet"),
prompt: 'Why is the sky blue?',
});

console.log('Generated Text:', text);
```

## Google

```javascript
// npm i @ai-sdk/openai@^1 ai@^4

import { createOpenAI } from '@ai-sdk/openai';
import { generateText } from 'ai';
import { config } from 'dotenv';

config();
const my_model = createOpenAI({
baseURL: process.env.BASE_URL,
apiKey:  process.env.LIARA_API_KEY,
});

const { text } = await generateText({
model: my_model("google/gemini-2.0-flash-001"),
prompt: 'Why is the sky blue?',
});

console.log('Generated Text:', text);
```

## توابع اصلی AI SDK

هسته‌ی AI SDK شامل مجموعه‌ای از توابع است که برای تولید متن، تولید داده‌ی ساختارمند و استفاده از Toolها طراحی شده‌اند. این توابع از یک روش استاندارد برای تنظیم پرامپت‌ها (prompts) و پیکربندی‌ها استفاده می‌کنند تا کار با مدل‌های مختلف را ساده‌تر کنند.

- تابع `generateText`: این تابع متن و tool call تولید می‌کند و برای موارد استفاده غیرتعاملی نظیر اتوماسیون تسک‌ها (جایی که شما نیاز به نوشتن متن دارید، مانند پیش‌نویس ایمیل یا خلاصه‌سازی صفحات وب) و برای agentهایی که از toolها استفاده می‌کنند، ایده‌آل است.
- تابع `streamText`: این تابع متن و tool callها را استریم می‌کند. شما می‌توانید از این تابع، برای موارد استفاده تعاملی نظیر چت‌بات‌ها و استریم محتوا، استفاده کنید
- تابع `generateObject`: این تابع، یک آبجکت دارای ساختار و تایپ مشخص، تولید می‌کند که با اسکیمای Zod، همخوانی دارد. شما می‌‌توانید از این تابع استفاده کنید تا مدل را مجبور کنید که داده‌های ساختارمند را return کند
- تابع `streamObject`: این تابع، آبجکت دارای ساختاری که با اسکیمای Zod همخوانی دارد را، استریم می‌کند.

در ادامه، به توضیح هر یک از قابلیت‌های AI SDK به تفصیل، پرداخته شده است: 

- ### تولید و استریم متن  
  [https://docs.liara.ir/ai/ai-sdk-core/generating-text](https://docs.liara.ir/ai/ai-sdk-core/generating-text)

- ### تولید داده‌های ساختارمند  
  [https://docs.liara.ir/ai/ai-sdk-core/generating-structured-data](https://docs.liara.ir/ai/ai-sdk-core/generating-structured-data)

- ### Tool Calling  
  [https://docs.liara.ir/ai/ai-sdk-core/tool-calling](https://docs.liara.ir/ai/ai-sdk-core/tool-calling)

- ### مهندسی پرامپت  
  [https://docs.liara.ir/ai/ai-sdk-core/prompt-engineering](https://docs.liara.ir/ai/ai-sdk-core/prompt-engineering)

- ### تنظیمات  
  [https://docs.liara.ir/ai/ai-sdk-core/settings](https://docs.liara.ir/ai/ai-sdk-core/settings)

- ### Embeddings  
  [https://docs.liara.ir/ai/ai-sdk-core/embeddings](https://docs.liara.ir/ai/ai-sdk-core/embeddings)

- ### Middleware مدل‌های زبانی  
  [https://docs.liara.ir/ai/ai-sdk-core/middleware](https://docs.liara.ir/ai/ai-sdk-core/middleware)

- ### مدیریت مدل و ارائه‌دهنده  
  [https://docs.liara.ir/ai/ai-sdk-core/provider-management](https://docs.liara.ir/ai/ai-sdk-core/provider-management)

- ### مدیریت خطاها  
  [https://docs.liara.ir/ai/ai-sdk-core/error-handling](https://docs.liara.ir/ai/ai-sdk-core/error-handling)

- ### آزمایش و تست  
  [https://docs.liara.ir/ai/ai-sdk-core/testing](https://docs.liara.ir/ai/ai-sdk-core/testing)

- ### تله‌متری (Telemetry)  
  [https://docs.liara.ir/ai/ai-sdk-core/telemetry](https://docs.liara.ir/ai/ai-sdk-core/telemetry)

## all links

[All links of docs](https://docs.liara.ir/all-links-llms.txt)
