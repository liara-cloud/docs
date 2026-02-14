Original link: https://docs.liara.ir/ai/getting-started/nodejs/

# کار با AI SDK در برنامه‌های NodeJS

AI SDK یک کتابخانه‌ی قدرتمند TypeScript است که برای کمک به توسعه‌دهندگان در ساخت برنامه‌های مبتنی بر هوش مصنوعی طراحی شده است.
در این آموزش، یک چت‌بات ساده‌ی مبتنی بر هوش مصنوعی با رابط کاربری استریمی ایجاد خواهید کرد. در این مسیر، با مفاهیم کلیدی و تکنیک‌های اساسی آشنا می‌شوید که برای استفاده از این SDK ضروری هستند.

## پیش‌نیازها (Prerequisites)

برای دنبال‌کردن این آموزش، به موارد زیر نیاز دارید:

- نصب داشتن NodeJS نسخه ۱۸ یا بالاتر و `pnpm` بر روی سیستم local
- یک `baseUrl` از محصول [هوش مصنوعی لیارا](https://liara.ir/products/ai/) و کلید API کنسول

## ساخت برنامه

برای شروع، با استفاده از دستور `mkdir`، یک دایرکتوری جدید خالی ایجاد کنید.  
وارد آن شوید و سپس دستور `pnpm init` را درون آن، اجرا کنید. این دستور، یک فایل `package.json` درون دایرکتوری شما، ایجاد می‌کند.

```bash
mkdir my-ai-app
cd my-ai-app
pnpm init
```

## نصب وابستگی‌ها  
با اجرای دستورات قرار گرفته در ادامه، پکیج‌های مورد نیاز برنامه را نصب کنید:

- `ai`: پکیج اصلی AI SDK
- `ai-sdk/openai@`: ارائه‌دهنده‌ی OpenAI برای SDK (سازگار با تمامی مدل‌های ارائه‌شده توسط لیارا)
- `zod`: برای بهبود ساختار خروجی
- `dotenv`: برای دسترسی به متغیرهای محیطی
- `types/node@`: برای افزودن تایپ‌های TypeScript به ماژول‌های Node.js
- `tsx`: برای اجرای فایل‌های TypeScript/TSX به‌صورت مستقیم بدون نیاز به کامپایل
- `typescript`: برای افزودن پشتیبانی از TypeScript به پروژه

```bash
pnpm add @ai-sdk/openai@^1 ai@^4 zod dotenv
pnpm add -D @types/node tsx typescript
```
> اطمینان حاصل کنید که نسخه‌ی `ai` حداقل ۳.۱ یا بالاتر باشد.

## تنظیم اطلاعات AI  
با اجرای دستور زیر (در لینوکس)، یک فایل `env.` در مسیر اصلی پروژه ایجاد کنید تا درون آن `baseUrl` هوش مصنوعی و [کلید API لیارا](https://docs.liara.ir/references/api/about/#api-access-key) را، قرار دهید:

```bash
touch .env
```

درون فایل ایجاد شده، قطعه کد زیر را، قرار دهید:  

```bash
BASE_URL=xxxxxxxxx
LIARA_API_KEY=xxxxxxxxx
```

در قطعه کد فوق، به‌جای `xxxxxxxxx`، مقادیر واقعی خود را، قرار دهید.  

## ایجاد برنامه

در مسیر اصلی پروژه، یک فایل به نام `index.ts` ایجاد کنید و قطعه کد زیر را درون آن قرار دهید:

```ts
import { createOpenAI } from '@ai-sdk/openai';
import { CoreMessage, streamText } from 'ai';
import dotenv from 'dotenv';
import * as readline from 'node:readline/promises';

dotenv.config();

const my_model = createOpenAI({
  baseURL: process.env.BASE_URL,
  apiKey: process.env.LIARA_API_KEY,
});

const terminal = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const messages: CoreMessage[] = [];

async function main() {
  while (true) {
    const userInput = await terminal.question('You: ');

    messages.push({ role: 'user', content: userInput });

    const result = streamText({
      model: my_model('openai/gpt-4o-mini'),
      messages,
    });

    let fullResponse = '';
    process.stdout.write('\nAssistant: ');
    for await (const delta of result.textStream) {
      fullResponse += delta;
      process.stdout.write(delta);
    }
    process.stdout.write('\n\n');

    messages.push({ role: 'assistant', content: fullResponse });
  }
}

main().catch(console.error);
```

در قطعه کد فوق:  

در ابتدا، برای اتصال به مدل‌های هوش مصنوعی لیارا، از `createOpenAI` استفاده شده است و در آن، `baseURL` و `apiKey` تنظیم شده است.  
در ادامه، یک رابط `readline` راه‌اندازی شده است تا بتوانید ورودی را از ترمینال دریافت کرده و ارتباط تعاملی را مستقیماً از طریق خط فرمان، برقرار کنید.  
یک آرایه به نام `messages` نیز تعریف شده است تا تاریخچه‌ی مکالمه را ذخیره کند. این تاریخچه به مدل کمک می‌کند تا در گفتگوهای طولانی، context را حفظ کند.

در تابع اصلی:

- از کاربر ورودی دریافت می‌شود و آن ورودی، در متغیری به نام `userInput` ذخیره می‌شود.
- ورودی کاربر، به‌عنوان `user message` به آرایه‌ی `messages` اضافه می‌شود.
- تابع `streamText` که از پکیج `ai` ایمپورت شده، فراخوانی، و مدل و پیام ارسالی به آن، مشخص می‌شود.
- یک حلقه‌ی `for await` برای دریافت پاسخ استریمی از مدل، استفاده می‌شود. این حلقه به‌صورت بلادرنگ، پاسخ را از مدل دریافت کرده و در ترمینال چاپ می‌کند.
- پاسخ مدل، به آرایه‌ی `messages` اضافه می‌شود.

## اجرای برنامه

با انجام مراحل فوق، اکنون تمام اجزای لازم برای چت‌بات خود را ساخته‌اید. برای اجرای برنامه، از دستور زیر استفاده کنید:

```js
pnpm tsx index.ts
```

با اجرای دستور فوق، باید یک ورودی پرامپت (prompt) در ترمینال خود مشاهده کنید. آن را امتحان کنید؛ یک پیام وارد کنید و ببینید که چت‌بات هوش مصنوعی به‌صورت بلادرنگ (real-time) پاسخ می‌دهد!

![work with terminal chatbot in nodejs](https://media.liara.ir/ai/ai-sdk/nodejs/working-with-terminal-chatbot.png)

## بهبود چت‌بات با Toolها

در حالی که LLMها توانایی فوق‌العاده‌ای در تولید متن دارند، اما در انجام Taskهای گسسته (مانند ریاضیات) و تعامل با دنیای خارج (مانند دریافت وضعیت آب‌وهوا) با چالش‌هایی مواجه هستند. اینجاست که Toolها وارد عمل می‌شوند.

Toolها، Actionهایی هستند که یک LLM می‌تواند آن‌ها را فراخوانی کند. نتایج حاصل از اجرای این Toolها می‌توانند به مدل بازگردانده شوند تا در تولید پاسخ بعدی در نظر گرفته شوند.  
برای مثال، اگر کاربری درباره‌ی وضعیت فعلی آب‌وهوا سؤال کند، بدون استفاده از ابزارها، مدل تنها می‌تواند اطلاعات عمومی بر پایه‌ی داده‌های آموزشی‌اش ارائه دهد. اما با استفاده از یک ابزار آب‌وهوا، می‌تواند اطلاعات به‌روز و مختص مکان مشخص کاربر را دریافت کرده و ارائه دهد.

در ادامه، خواهید آموخت که چگونه می‌توانید با اضافه کردن یک Tool ساده مربوط به وضعیت آب‌وهوا، چت‌بات خود را بهبود دهید.  

### اضافه‌کردن Tool

مانند قطعه کد زیر، به فایل `index.ts` خود، Tool مربوط به وضعیت آب‌وهوا را اضافه کنید:

```js
import { createOpenAI } from '@ai-sdk/openai';
import { CoreMessage, streamText, tool } from 'ai';
import dotenv from 'dotenv';
import { z } from 'zod';
import * as readline from 'node:readline/promises';

dotenv.config();

const my_model = createOpenAI({
  baseURL: process.env.BASE_URL,
  apiKey: process.env.LIARA_API_KEY,
});

const terminal = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const messages: CoreMessage[] = [];

async function main() {
  while (true) {
    const userInput = await terminal.question('You: ');

    messages.push({ role: 'user', content: userInput });

    const result = streamText({
      model: my_model('openai/gpt-4o-mini'),
      messages,
      tools: {
        weather: tool({
          description: 'Get the weather in a location (in Celsius)',
          parameters: z.object({
            location: z
              .string()
              .describe('The location to get the weather for'),
          }),
          execute: async ({ location }) => ({
            location,
            temperature: Math.round((Math.random() * 30 + 5) * 10) / 10, // Random temp between 5°C and 35°C
          }),
        }),
      },
    });

    let fullResponse = '';
    process.stdout.write('\nAssistant: ');
    for await (const delta of result.textStream) {
      fullResponse += delta;
      process.stdout.write(delta);
    }
    process.stdout.write('\n\n');

    messages.push({ role: 'assistant', content: fullResponse });
  }
}

main().catch(console.error);
```

در قطعه کد به‌روزرسانی‌شده فوق:  

تابع `tool` از پکیج `ai` ایمپورت شده است.  
سپس یک object به نام `tools` تعریف شده است که شامل یک Tool هواشناسی است. این Tool:

- دارای یک description است که به مدل کمک می‌کند بفهمد چه زمانی باید از این Tool استفاده کند.
- پارامترها را با استفاده از Zod Schema تعریف می‌کند و مشخص می‌کند که برای اجرای این Tool، یک رشته‌ی location نیاز است.
- یک تابع execute تعریف می‌کند که یک دمای تصادفی باز می‌گرداند. این تابع asynchronous است و می‌تواند یک API خارجی نیز باشد.

اکنون چت‌بات شما می‌تواند اطلاعات آب‌وهوا را برای هر مکانی که کاربر مشخص کند، واکشی کند. زمانی که مدل تشخیص دهد باید از Tool آب‌وهوا استفاده کند، یک tool call با پارامترهای لازم تولید می‌کند. سپس تابع execute به‌صورت خودکار اجرا می‌شود و نتیجه‌ی آن از طریق بخش `tool-invocations` موجود در آرایه‌ی `message.parts` قابل دسترسی خواهد بود.

### به‌روزرسانی رابط کاربری

شما می‌توانید مانند شکل زیر، به tool call و نتیجه‌ی Tool از طریق  `toolCall` و `toolResult` در `result`، دسترسی داشته باشید:

```js
import { createOpenAI } from '@ai-sdk/openai';
import { CoreMessage, streamText, tool } from 'ai';
import dotenv from 'dotenv';
import { z } from 'zod';
import * as readline from 'node:readline/promises';

dotenv.config();

const my_model = createOpenAI({
  baseURL: process.env.BASE_URL,
  apiKey: process.env.LIARA_API_KEY,
});

const terminal = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const messages: CoreMessage[] = [];

async function main() {
  while (true) {
    const userInput = await terminal.question('You: ');

    messages.push({ role: 'user', content: userInput });

    const result = streamText({
      model: my_model('openai/gpt-4o-mini'),
      messages,
      tools: {
        weather: tool({
          description: 'Get the weather in a location (in Celsius)',
          parameters: z.object({
            location: z
              .string()
              .describe('The location to get the weather for'),
          }),
          execute: async ({ location }) => ({
            location,
            temperature: Math.round((Math.random() * 30 + 5) * 10) / 10, // Random temp between 5°C and 35°C
          }),
        }),
      },
    });

    let fullResponse = '';
    process.stdout.write('\nAssistant: ');
    for await (const delta of result.textStream) {
      fullResponse += delta;
      process.stdout.write(delta);
    }
    process.stdout.write('\n\n');

    console.log(await result.toolCalls);
    console.log(await result.toolResults);
    messages.push({ role: 'assistant', content: fullResponse });
  }
}

main().catch(console.error);
```

با این تغییر، رابط کاربری به‌گونه‌ای به‌روزرسانی می‌شود که بتواند بخش‌های مختلف پیام را مدیریت کند. برای بخش‌های متنی، همانند گذشته، محتوای متن نمایش داده می‌شود. برای tool callها، یک JSON از tool calling و نتیجه آن نشان داده خواهد شد.  
اکنون، زمانی که درباره‌ی وضعیت هوا سوال می‌پرسید، tool calling و نتیجه‌ی آن در رابط چت شما، نمایش داده می‌شود:

![working with chatbot in nodejs with tools](https://media.liara.ir/ai/ai-sdk/nodejs/working-with-tools-in-chatbot.png)

## فعال‌سازی فراخوانی چندمرحله‌ای Toolها

ممکن است متوجه شده باشید که با وجود نمایش نتایج Toolها در رابط چت، مدل از این اطلاعات برای پاسخ به پرسش اصلی شما، استفاده نمی‌کند. دلیل آن این است که به‌محض اینکه مدل یک tool call تولید می‌کند، از نظر فنی، فرآیند تولید متن را کامل کرده است.

برای حل این مسئله، می‌توانید با استفاده از گزینه‌ی `maxSteps` در کلاس `Chat`، فراخوانی چندمرحله‌ای Toolها را فعال کنید. این قابلیت، به‌طور خودکار، نتایج Tool را دوباره به مدل ارسال می‌کند تا یک مرحله‌ی تولید اضافی را آغاز کند. در این حالت، شما می‌خواهید مدل با استفاده از نتیجه‌ی Tool هواشناسی، به سوال شما پاسخ دهد.

### به‌روزرسانی کد سمت کلاینت

فایل `index.ts` خود را ویرایش کرده تا گزینه‌ی `maxSteps` را به آن، اضافه کنید:

```js
import { createOpenAI } from '@ai-sdk/openai';
import { CoreMessage, streamText, tool } from 'ai';
import dotenv from 'dotenv';
import { z } from 'zod';
import * as readline from 'node:readline/promises';

dotenv.config();

const my_model = createOpenAI({
  baseURL: process.env.BASE_URL,
  apiKey: process.env.LIARA_API_KEY,
});

const terminal = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const messages: CoreMessage[] = [];

async function main() {
  while (true) {
    const userInput = await terminal.question('You: ');

    messages.push({ role: 'user', content: userInput });

    const result = streamText({
      model: my_model('openai/gpt-4o-mini'),
      messages,
      tools: {
        weather: tool({
          description: 'Get the weather in a location (in Celsius)',
          parameters: z.object({
            location: z
              .string()
              .describe('The location to get the weather for'),
          }),
          execute: async ({ location }) => ({
            location,
            temperature: Math.round((Math.random() * 30 + 5) * 10) / 10, // Random temp between 5°C and 35°C
          }),
        }),
      },
      maxSteps: 5,
      onStepFinish: step => {
        console.log(JSON.stringify(step, null, 2));
      },
    });

    let fullResponse = '';
    process.stdout.write('\nAssistant: ');
    for await (const delta of result.textStream) {
      fullResponse += delta;
      process.stdout.write(delta);
    }
    process.stdout.write('\n\n');

    console.log(await result.toolCalls);
    console.log(await result.toolResults);
    messages.push({ role: 'assistant', content: fullResponse });
  }
}

main().catch(console.error);
```

به ترمینال بازگردید و درباره‌ی وضعیت هوای یک مکان سوال بپرسید. حالا باید ببینید که مدل از نتایج Tool هواشناسی برای پاسخ به سوال شما استفاده می‌کند:  
با تنظیم مقدار `maxSteps` روی ۵، این امکان را فراهم می‌کنید که مدل حداکثر تا ۵ مرحله، پاسخ جدیدی را تولید کند. این قابلیت، تعاملات پیچیده‌تر را ممکن می‌سازد و به مدل اجازه می‌دهد اطلاعات را طی چند مرحله جمع‌آوری و پردازش کند (در صورت نیاز). می‌توانید این قابلیت را در عمل مشاهده کنید؛ کافیست Tool دیگری اضافه کنید که دما را از فارنهایت به سلسیوس تبدیل کند.

### افزودن Tool دوم

Tool جدید برای تبدیل دما از فارنهایت به سلسیوس را به فایل `index.ts` خود، مانند شکل زیر، اضافه کنید:

```js
import { createOpenAI } from '@ai-sdk/openai';
import { CoreMessage, streamText, tool } from 'ai';
import dotenv from 'dotenv';
import { z } from 'zod';
import * as readline from 'node:readline/promises';

dotenv.config();

const my_model = createOpenAI({
  baseURL: process.env.BASE_URL,
  apiKey: process.env.LIARA_API_KEY,
});

const terminal = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const messages: CoreMessage[] = [];

async function main() {
  while (true) {
    const userInput = await terminal.question('You: ');

    messages.push({ role: 'user', content: userInput });

    const result = streamText({
      model: my_model('openai/gpt-4o-mini'),
      messages,
      tools: {
        weather: tool({
          description: 'Get the weather in a location (in Celsius)',
          parameters: z.object({
            location: z
              .string()
              .describe('The location to get the weather for'),
          }),
          execute: async ({ location }) => ({
            location,
            temperature: Math.round((Math.random() * 30 + 5) * 10) / 10, // Random temp between 5°C and 35°C
          }),
        }),
        
        convertCelsiusToFahrenheit: tool({
          description: 'Convert a temperature from Celsius to Fahrenheit',
          parameters: z.object({
            celsius: z
              .number()
              .describe('The temperature in Celsius to convert'),
          }),
          execute: async ({ celsius }) => {
            const fahrenheit = (celsius * 9) / 5 + 32;
            return { fahrenheit: Math.round(fahrenheit * 100) / 100 };
          },
        }),
      },

      maxSteps: 5,
      onStepFinish: step => {
        console.log(JSON.stringify(step, null, 2));
      },
    });

    let fullResponse = '';
    process.stdout.write('\nAssistant: ');
    for await (const delta of result.textStream) {
      fullResponse += delta;
      process.stdout.write(delta);
    }
    process.stdout.write('\n\n');

    console.log(await result.toolCalls);
    console.log(await result.toolResults);
    messages.push({ role: 'assistant', content: fullResponse });
  }
}

main().catch(console.error);
```

اکنون، وقتی می‌پرسید: «هوای تهران چند درجه سلسیوس است؟»، باید یک پاسخ کامل‌تر را مشاهده کنید.

در برنامه فوق:  

- مدل، Tool هواشناسی را برای دریافت وضعیت هوای تهران، فراخوانی می‌کند.
- نتیجه‌ی Tool نمایش داده می‌شود.
- سپس، مدل، Tool تبدیل دما را فراخوانی می‌کند تا دما را از فارنهایت به سلسیوس تبدیل کند.
- در نهایت، مدل از این اطلاعات استفاده می‌کند تا پاسخی طبیعی و قابل فهم درباره‌ی وضعیت هوای تهران، ارائه دهد.

این رویکرد چندمرحله‌ای به مدل اجازه می‌دهد تا اطلاعات را جمع‌آوری کرده و از آن‌ها برای ارائه‌ی پاسخ‌هایی دقیق‌تر و مرتبط‌تر استفاده کند؛ در نتیجه، چت‌بات شما به‌طور قابل توجهی کاربردی‌تر خواهد شد.

این مثال ساده نشان می‌دهد که Toolها چگونه می‌توانند قابلیت‌های مدل را گسترش دهند. شما می‌توانید Toolهای پیچیده‌تری ایجاد کنید که با APIهای واقعی، پایگاه‌های داده یا سایر سیستم‌های خارجی ادغام شوند. این کار به مدل این امکان را می‌دهد تا به داده‌های واقعی و به‌روز دسترسی پیدا کرده و آن‌ها را در زمان واقعی، پردازش کند. Toolها پلی هستند میان محدودیت دانش مدل و اطلاعات جاری دنیا.

> پروژه نهایی مورد بررسی در این آموزش، در [گیت‌هاب لیارا](https://github.com/liara-cloud/ai-sdk-examples/tree/master/NodeJS-Terminal-ChatBot) موجود است که می‌توانید از آن، استفاده کنید.

## all links

[All links of docs](https://docs.liara.ir/all-links-llms.txt)
