Original link: https://docs.liara.ir/ai/getting-started/svelte/

# کار با AI SDK در برنامه‌های Svelte

AI SDK یک کتابخانه‌ی قدرتمند TypeScript است که برای کمک به توسعه‌دهندگان در ساخت برنامه‌های مبتنی بر هوش مصنوعی طراحی شده است.
در این آموزش، یک چت‌بات ساده‌ی مبتنی بر هوش مصنوعی با رابط کاربری استریمی ایجاد خواهید کرد. در این مسیر، با مفاهیم کلیدی و تکنیک‌های اساسی آشنا می‌شوید که برای استفاده از این SDK ضروری هستند.

## پیش‌نیازها (Prerequisites)

برای دنبال‌کردن این آموزش، به موارد زیر نیاز دارید:

- نصب داشتن NodeJS نسخه ۱۸ یا بالاتر و `pnpm` بر روی سیستم local
- یک `baseUrl` از محصول [هوش مصنوعی لیارا](https://liara.ir/products/ai/) و کلید API کنسول

## ساخت برنامه

> این راهنما قابل استفاده در نسخه ۴ و نسخه‌های پایین‌تر SvelteKit می‌باشد.

برای شروع، یک برنامه‌ی جدید [Svelte](https://docs.liara.ir/paas/nodejs/related-apps/svelte/)، ایجاد کنید. دستور زیر یک دایرکتوری جدید به نام `my-ai-app` ایجاد می‌کند و درون آن، یک پروژه پایه Svelte می‌سازد:

```bash
npx sv create my-ai-app
```

![set up svelte](https://media.liara.ir/ai/ai-sdk/svelte/set-up-svelte.png)

وارد دایرکتوری پروژه شوید:

```bash
cd my-ai-app
```

## نصب وابستگی‌ها
با اجرای دستور قرار گرفته در ادامه، پکیج‌های زیر را نصب کنید:

- `ai`: پکیج اصلی AI SDK
- `ai-sdk/svelte@`: توابع مربوط به Svelte برای کار با SDK
- `ai-sdk/openai@`: ارائه‌دهنده‌ی OpenAI برای SDK (سازگار با تمامی مدل‌های ارائه‌شده توسط لیارا)
- `zod`: برای بهبود ساختار خروجی

```bash
pnpm add -D ai @ai-sdk/openai @ai-sdk/svelte zod
```
> اطمینان حاصل کنید که نسخه‌ی `ai` حداقل ۳.۱ یا بالاتر باشد.

## تنظیم اطلاعات AI
با اجرای دستور زیر (در لینوکس)، یک فایل `env.local.` در مسیر اصلی پروژه ایجاد کنید تا درون آن `baseUrl` هوش مصنوعی و [کلید API لیارا](https://docs.liara.ir/references/api/about/#api-access-key) را، قرار دهید:

```bash
touch .env.local
```

درون فایل ایجاد شده، قطعه کد زیر را، قرار دهید: 

```bash
BASE_URL=xxxxxxxxx
LIARA_API_KEY=xxxxxxxxx
```

در قطعه کد فوق، به‌جای `xxxxxxxxx`، مقادیر واقعی خود را، قرار دهید. 

> Vite به‌صورت خودکار، متغیرهای محیطی را با `process.env` بارگذاری نمی‌کند، بنابراین لازم است که متغیرها را از مسیر `env/static/private$` در کد خود، وارد کنید.

## ایجاد یک API Route

در مسیر `src/routes/api/chat/+server.ts`، یک اندپوینت SvelteKit بسازید و قطعه کد زیر را درون آن، قرار دهید:

```ts
import { createOpenAI } from '@ai-sdk/openai';
import { streamText } from 'ai';

import { LIARA_API_KEY , BASE_URL } from '$env/static/private';

const my_model = createOpenAI({
    baseURL: BASE_URL,
    apiKey: LIARA_API_KEY,
});

export async function POST({ request }) {
  const { messages } = await request.json();

  const result = streamText({
    model: my_model('openai/gpt-4o-mini'),
    messages,
  });

  return result.toDataStreamResponse();
}
```

> اگر خطای `Module '"$env/static/private"' has no exported member` را مشاهده کردید؛ تنها کافیست تا دستور `pnpm run check` را، اجرا کنید.

در قطعه کد فوق: 

۱. یک تابع برای مدیریت درخواست‌های POST تعریف شده که به‌صورت asynchronous اجرا می‌شود. این تابع ابتدا پیام‌ها (messages) را از بدنه‌ی درخواست استخراج می‌کند.
مقدار `messages` شامل تاریخچه‌ی مکالمه بین کاربر و چت‌بات است و زمینه (context) مورد نیاز برای تولید پاسخ بعدی را در اختیار مدل قرار می‌دهد.

۲. سپس، تابع `streamText` فراخوانی می‌شود. این تابع از پکیج `ai` می‌باشد و یک پیکربندی دریافت می‌کند که شامل `model`
و `messages` است. 
شما می‌توانید تنظیمات اضافی دیگری را نیز، برای سفارشی‌سازی رفتار مدل به `streamText` اضافه کنید.

> در نظر داشته باشید که برای اتصال به مدل‌های هوش مصنوعی لیارا، باید از `createOpenAI` استفاده کنید و در آن، `baseURL` و `apiKey` را تنظیم کنید.

۳. در ادامه، تابع `streamText` یک object از نوع `StreamTextResult` برمی‌گرداند. این object دارای متدی به نام `toDataStreamResponse` است که نتیجه را به یک پاسخ استریمی برای کلاینت، تبدیل می‌کند.

۴. در انتها، نتیجه به‌صورت یک پاسخ استریمی، به کلاینت بازگردانده می‌شود.

## اتصال رابط کاربری

حالا که یک API route دارید که می‌تواند با یک LLM ارتباط برقرار کند، زمان آن رسیده که رابط کاربری (frontend) خود را راه‌اندازی کنید. پکیج UI در AI SDK، پیچیدگی‌های مربوط به رابط چت را در یک کلاس به نام `Chat` ساده کرده است.
در فایل  `src/routes/+page.svelte`، قطعه کد زیر را قرار دهید تا یک لیست از پیام‌های چت، نمایش داده شود و امکان ارسال پیام کاربر، فراهم گردد:

```js
<script>
  import { Chat } from '@ai-sdk/svelte';

  const chat = new Chat();
</script>

<main>
  - <div>{message.role}</div>
        <div>
          {#each message.parts as part, partIndex (partIndex)}
            {#if part.type === 'text'}
              <div>{part.text}</div>
            {/if}
          {/each}
        </div>
  <form onsubmit={chat.handleSubmit}>
    <input bind:value={chat.input} />
    <button type="submit">Send</button>
  </form>
</main>
```

این صفحه از کلاس `Chat` استفاده می‌کند که به‌صورت پیش‌فرض، از مسیر POST که قبل‌تر ایجاد کرده بودید، استفاده خواهد کرد.
. کلاس `Chat` چندین تابع و متغیر ارائه می‌دهد:

- `messages`: پیام‌های فعلی چت (آرایه‌ای از آبجکت‌ها با ویژگی‌های `id` , `role` و `parts`).
- `input`: مقدار فعلی فیلد ورودی کاربر.
- `handleSubmit`: تابعی برای مدیریت تعاملات کاربر (تایپ در فیلد ورودی و ارسال فرم).

پاسخ LLM از طریق آرایه‌ی `parts` در هر پیام، قابل دسترسی است. هر پیام شامل یک آرایه‌ی مرتب‌شده از `parts` است که نشان‌دهنده‌ی تمام چیزی است که مدل در پاسخ خود تولید کرده. `parts`ها می‌توانند شامل متن ساده، reasoning tokenها و موارد دیگر، باشند که در ادامه با آن‌ها آشنا خواهید شد.
آرایه‌ی `parts` ترتیب خروجی‌های مدل را حفظ می‌کند، و این امکان را فراهم می‌آورد تا بتوانید هر بخش را دقیقاً به همان ترتیبی که مدل تولید کرده، نمایش داده یا پردازش کنید.

## اجرای برنامه

با انجام مراحل فوق، اکنون تمام اجزای لازم برای چت‌بات خود را ساخته‌اید. برای اجرای برنامه، از دستور زیر استفاده کنید:

```js
pnpm run dev
```

سپس مرورگر خود را باز کرده و به آدرس `http://localhost:5173` بروید. باید یک فیلد ورودی مشاهده کنید. یک پیام وارد کنید تا آن را امتحان کنید و ببینید چت‌بات هوش مصنوعی چگونه به‌صورت بلادرنگ پاسخ می‌دهد:

![work with chatbot in svelte](https://media.liara.ir/ai/ai-sdk/svelte/working-with-chatbot.png)

## بهبود چت‌بات با Toolها

در حالی که LLMها توانایی فوق‌العاده‌ای در تولید متن دارند، اما در انجام Taskهای گسسته (مانند ریاضیات) و تعامل با دنیای خارج (مانند دریافت وضعیت آب‌وهوا) با چالش‌هایی مواجه هستند. اینجاست که Toolها وارد عمل می‌شوند.

Toolها، Actionهایی هستند که یک LLM می‌تواند آن‌ها را فراخوانی کند. نتایج حاصل از اجرای این Toolها می‌توانند به مدل بازگردانده شوند تا در تولید پاسخ بعدی در نظر گرفته شوند.
برای مثال، اگر کاربری درباره‌ی وضعیت فعلی آب‌وهوا سؤال کند، بدون استفاده از ابزارها، مدل تنها می‌تواند اطلاعات عمومی بر پایه‌ی داده‌های آموزشی‌اش ارائه دهد. اما با استفاده از یک ابزار آب‌وهوا، می‌تواند اطلاعات به‌روز و مختص مکان مشخص کاربر را دریافت کرده و ارائه دهد.

در ادامه، خواهید آموخت که چگونه می‌توانید با اضافه کردن یک Tool ساده مربوط به وضعیت آب‌وهوا، چت‌بات خود را بهبود دهید. 

### به‌روزرسانی API Route

مانند قطعه کد زیر، به فایل `src/routes/api/chat/+server.ts` خود، Tool مربوط به وضعیت آب‌وهوا را اضافه کنید:

```js
import { createOpenAI } from '@ai-sdk/openai';
import { streamText, tool } from 'ai';
import { z } from 'zod';

import { LIARA_API_KEY , BASE_URL } from '$env/static/private';

const my_model = createOpenAI({
    baseURL: BASE_URL,
    apiKey: LIARA_API_KEY,
});

export async function POST({ request }) {
  const { messages } = await request.json();

  const result = streamText({
    model: my_model('openai/gpt-4o-mini'),
    messages,
    tools: {
      weather: tool({
        description: 'Get the weather in a location (fahrenheit)',
        parameters: z.object({
          location: z.string().describe('The location to get the weather for'),
        }),
        execute: async ({ location }) => {
          const temperature = Math.round(Math.random() * (90 - 32) + 32);
          return {
            location,
            temperature,
          };
        },
      }),
    },
  });

  return result.toDataStreamResponse();
}
```

در قطعه کد به‌روزرسانی‌شده فوق:

۱. تابع `tool` از پکیج `ai` و نیز `z` از کتابخانه‌ی `zod` برای اعتبارسنجی schema، وارد شده است.

۲. یک object به نام `tools` تعریف شده است که شامل یک tool آب‌وهوا (weather) است. این Tool:

- دارای یک توضیح (description) است که به مدل کمک می‌کند بفهمد چه زمانی باید از آن استفاده کند.
- پارامترهایی را با استفاده از Zod Schema تعریف می‌کند و مشخص می‌کند که برای اجرای این Tool، یک string به‌عنوان `location` مورد نیاز است. مدل تلاش می‌کند این پارامتر را از متن مکالمه استخراج کند. اگر نتواند، از کاربر برای دریافت اطلاعات موردنیاز، سؤال خواهد کرد.
- دارای یک تابع execute است که عملیات فرضی دریافت داده‌های آب‌وهوا را انجام می‌دهد (در این مثال، دمایی تصادفی بازمی‌گردد). این تابع به‌صورت asynchronous روی سرور اجرا می‌شود، بنابراین می‌توانید از APIهای خارجی داده‌های واقعی را واکشی کنید.

اکنون چت‌بات شما می‌تواند اطلاعات آب‌وهوا را برای هر مکانی که کاربر مشخص کند، واکشی کند. زمانی که مدل تشخیص دهد باید از Tool آب‌وهوا استفاده کند، یک tool call با پارامترهای لازم تولید می‌کند. سپس تابع execute به‌صورت خودکار اجرا می‌شود و نتیجه‌ی آن از طریق بخش `tool-invocations` موجود در آرایه‌ی `message.parts` قابل دسترسی خواهد بود.

### به‌روزرسانی رابط کاربری

برای به‌روزرسانی رابط کاربری و نمایش `tool invocation`، باید فایل `src/routes/+page.svelte` را تغییر دهید تا پیام‌هایی که شامل Tool هستند نیز، به درستی نمایش داده شوند.
در ادامه، نمونه کدی آورده شده که این قابلیت را اضافه می‌کند:

```js
<script>
  import { Chat } from '@ai-sdk/svelte';

  const chat = new Chat();
</script>

<main>
  - <div>{message.role}</div>
        <div>
          {#each message.parts as part, partIndex (partIndex)}
            {#if part.type === 'text'}
              <div>{part.text}</div>
            {:else if part.type === 'tool-invocation'}
              {JSON.stringify(part.toolInvocation, null, 2)}</pre>
            {/if}
          {/each}
        </div>
  <form onsubmit={chat.handleSubmit}>
    <input bind:value={chat.input} />
    <button type="submit">Send</button>
  </form>
</main>
```

با این تغییر، رابط کاربری به‌گونه‌ای به‌روزرسانی می‌شود که بتواند بخش‌های مختلف پیام را مدیریت کند. برای بخش‌های متنی، همانند گذشته، محتوای متن نمایش داده می‌شود. برای tool callها، یک JSON از tool calling و نتیجه آن نشان داده خواهد شد.
اکنون، زمانی که درباره‌ی وضعیت هوا سوال می‌پرسید، tool calling و نتیجه‌ی آن در رابط چت شما، نمایش داده می‌شود:

![work with chatbot in svelte with tools](https://media.liara.ir/ai/ai-sdk/svelte/working-with-tools-and-chatbot.png)

## فعال‌سازی فراخوانی چندمرحله‌ای Toolها

ممکن است متوجه شده باشید که با وجود نمایش نتایج Toolها در رابط چت، مدل از این اطلاعات برای پاسخ به پرسش اصلی شما، استفاده نمی‌کند. دلیل آن این است که به‌محض اینکه مدل یک tool call تولید می‌کند، از نظر فنی، فرآیند تولید متن را کامل کرده است.

برای حل این مسئله، می‌توانید با استفاده از گزینه‌ی `maxSteps` در کلاس `Chat`، فراخوانی چندمرحله‌ای Toolها را فعال کنید. این قابلیت، به‌طور خودکار، نتایج Tool را دوباره به مدل ارسال می‌کند تا یک مرحله‌ی تولید اضافی را آغاز کند. در این حالت، شما می‌خواهید مدل با استفاده از نتیجه‌ی Tool هواشناسی، به سوال شما پاسخ دهد.

### به‌روزرسانی کد سمت کلاینت

فایل `src/routes/+page.svelte` خود را ویرایش کرده تا گزینه‌ی `maxSteps` را به آن، اضافه کنید:

```js
<script>
  import { Chat } from '@ai-sdk/svelte';

  const chat = new Chat({ maxSteps: 5 });
</script>

<!-- ... rest of your component code -->
```

به مرورگر بازگردید و درباره‌ی وضعیت هوای یک مکان سوال بپرسید. حالا باید ببینید که مدل از نتایج Tool هواشناسی برای پاسخ به سوال شما استفاده می‌کند:

![work with chatbot in svelte with tools and maxsteps](https://media.liara.ir/ai/ai-sdk/svelte/chatbot-using-tools-and-maxsteps.png)

با تنظیم مقدار `maxSteps` روی ۵، این امکان را فراهم می‌کنید که مدل حداکثر تا ۵ مرحله، پاسخ جدیدی را تولید کند. این قابلیت، تعاملات پیچیده‌تر را ممکن می‌سازد و به مدل اجازه می‌دهد اطلاعات را طی چند مرحله جمع‌آوری و پردازش کند (در صورت نیاز). می‌توانید این قابلیت را در عمل مشاهده کنید؛ کافیست Tool دیگری اضافه کنید که دما را از فارنهایت به سلسیوس تبدیل کند.

### به‌روزرسانی API Route

Tool جدید برای تبدیل دما از فارنهایت به سلسیوس را به فایل `src/routes/api/chat/+server.ts` خود، مانند شکل زیر، اضافه کنید:

```js
import { createOpenAI } from '@ai-sdk/openai';
import { streamText, tool } from 'ai';
import { z } from 'zod';

import { LIARA_API_KEY , BASE_URL } from '$env/static/private';

const my_model = createOpenAI({
    baseURL: BASE_URL,
    apiKey: LIARA_API_KEY,
});

export async function POST({ request }) {
  const { messages } = await request.json();

  const result = streamText({
    model: my_model('openai/gpt-4o-mini'),
    messages,
    tools: {
      weather: tool({
        description: 'Get the weather in a location (fahrenheit)',
        parameters: z.object({
          location: z.string().describe('The location to get the weather for'),
        }),
        execute: async ({ location }) => {
          const temperature = Math.round(Math.random() * (90 - 32) + 32);
          return {
            location,
            temperature,
          };
        },
      }),
      convertFahrenheitToCelsius: tool({
        description: 'Convert a temperature in fahrenheit to celsius',
        parameters: z.object({
          temperature: z
            .number()
            .describe('The temperature in fahrenheit to convert'),
        }),
        execute: async ({ temperature }) => {
          const celsius = Math.round((temperature - 32) * (5 / 9));
          return {
            celsius,
          };
        },
      }),
    },
  });

  return result.toDataStreamResponse();
}
```

اکنون، وقتی می‌پرسید: «هوای تهران چند درجه سلسیوس است؟»، باید یک پاسخ کامل‌تر را مشاهده کنید:

![work with chatbot in svelte with two tools and maxsteps on 5](https://media.liara.ir/ai/ai-sdk/svelte/chatbot-using-two-tools-and-maxsteps.png)

در برنامه فوق: 

- مدل، Tool هواشناسی را برای دریافت وضعیت هوای تهران، فراخوانی می‌کند.
- نتیجه‌ی Tool نمایش داده می‌شود.
- سپس، مدل، Tool تبدیل دما را فراخوانی می‌کند تا دما را از فارنهایت به سلسیوس تبدیل کند.
- در نهایت، مدل از این اطلاعات استفاده می‌کند تا پاسخی طبیعی و قابل فهم درباره‌ی وضعیت هوای تهران، ارائه دهد.

این رویکرد چندمرحله‌ای به مدل اجازه می‌دهد تا اطلاعات را جمع‌آوری کرده و از آن‌ها برای ارائه‌ی پاسخ‌هایی دقیق‌تر و مرتبط‌تر استفاده کند؛ در نتیجه، چت‌بات شما به‌طور قابل توجهی کاربردی‌تر خواهد شد.

این مثال ساده نشان می‌دهد که Toolها چگونه می‌توانند قابلیت‌های مدل را گسترش دهند. شما می‌توانید Toolهای پیچیده‌تری ایجاد کنید که با APIهای واقعی، پایگاه‌های داده یا سایر سیستم‌های خارجی ادغام شوند. این کار به مدل این امکان را می‌دهد تا به داده‌های واقعی و به‌روز دسترسی پیدا کرده و آن‌ها را در زمان واقعی، پردازش کند. Toolها پلی هستند میان محدودیت دانش مدل و اطلاعات جاری دنیا.

> پروژه نهایی مورد بررسی در این آموزش، در [گیت‌هاب لیارا](https://github.com/liara-cloud/ai-sdk-examples/tree/master/Svelte-ChatBot) موجود است که می‌توانید از آن، استفاده کنید.

## تفاوت ai-sdk/svelte@ با ai-sdk/react@ چیست؟

تفاوت در سطح ظاهری این است که Svelte از کلاس‌ها برای مدیریت state استفاده می‌کند، در حالی که React از هوک‌ها استفاده می‌کند. بنابراین، `useChat` در React معادل `Chat` در Svelte است. به‌جز این مورد، چند نکته دیگر وجود دارد که باید در نظر داشته باشید:

### ۱. آرگومان‌های کلاس‌ها به‌صورت پیش‌فرض، reactive نیستند

بر خلاف React که در آن، هوک‌ها هر بار که کامپوننت دوباره اجرا شود، بازخوانی می‌شوند، در Svelte کدی که در بلوک `<script>` نوشته شده، فقط یک‌بار هنگام ساخته‌شدن کامپوننت، اجرا می‌شود. این یعنی که اگر می‌خواهید آرگومان‌هایی که به کلاس داده می‌شوند، reactive باشند، باید به جای `value`، یک `reference` را به کلاس بدهید:

```js
<script>
  import { Chat } from '@ai-sdk/svelte';

  let { id } = $props();

  // won't work; the class instance will be created once, `id` will be copied by value, and won't update when $props.id changes
  let chat = new Chat({ id });

  // will work; passes `id` by reference, so `Chat` always has the latest value
  let chat = new Chat({
    get id() {
      return id;
    },
  });
</script>
```

به خاطر داشته باشید که این موضوع معمولاً اهمیت زیادی ندارد؛ بیشتر پارامترهایی که به کلاس Chat می‌دهید، ایستا (static) هستند (برای مثال، معمولاً انتظار نمی‌رود که `onError Handler` در طول زمان تغییر کند).

### ۲. نمی‌توانید propertyهای کلاس را Destructure کنید

در Vanilla JavaScript، زمانی که propertyهای یک کلاس را destructure می‌کنید، این propertyها به‌صورت value کپی می‌شوند و اتصالشان با instance کلاس، قطع می‌شود:

```js
const classInstance = new Whatever();
classInstance.foo = 'bar';
const { foo } = classInstance;
classInstance.foo = 'baz';

console.log(foo); // 'bar'
```

همین مسئله در مورد کلاس‌ها در Svelte نیز صادق است:

```js
<script>
  import { Chat } from '@ai-sdk/svelte';

  const chat = new Chat();
  let { messages } = chat;

  chat.append({ content: 'Hello, world!', role: 'user' }).then(() => {
    console.log(messages); // []
    console.log(chat.messages); // [{ content: 'Hello, world!', role: 'user' }] (plus some other stuff)
  });
</script>
```

### ۳. همگام‌سازی instance نیازمند context است

در React، نمونه‌های (instanceها) هوک با یک id یکسان، همگام‌سازی می‌شوند؛ بنابراین اگر دو instance از `useChat` آیدی مشابه داشته باشند، مقدار `messages` , `status` و ... آن‌ها یکسان خواهد بود. در اکثر موارد استفاده، احتمالاً به این رفتار نیازی ندارید. اما اگر لازم باشد، می‌توانید در فایل `layout` خود با استفاده از `createAIContext`، یک context ایجاد کنید:

```js
<script>
  import { createAIContext } from '@ai-sdk/svelte';

  let { children } = $props();

  createAIContext();
  // all hooks created after this or in components that are children of this component
  // will have synchronized state
</script>

{@render children()}
```

## all links

[All links of docs](https://docs.liara.ir/all-links-llms.txt)
