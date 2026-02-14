Original link: https://docs.liara.ir/ai/ai-sdk-ui/chatbot/

# چت بات هوش مصنوعی با AI SDK UI

هوک `useChat` ایجاد رابط کاربری مکالمه‌ای برای برنامه‌ی چت‌بات شما را بسیار آسان می‌کند. این هوک امکان استریم پیام‌های چت از ارائه‌دهنده هوش مصنوعی را فراهم می‌کند، وضعیت چت (chat state) را مدیریت می‌نماید و با رسیدن پیام‌های جدید، رابط کاربری را به‌صورت خودکار به‌روزرسانی می‌کند.

به‌طور خلاصه، هوک useChat امکانات زیر را ارائه می‌دهد:

- **استریم پیام‌ها**: تمامی پیام‌ها از ارائه‌دهنده هوش مصنوعی به صورت بلادرنگ به رابط کاربری چت ارسال می‌شوند
- **مدیریت stateها**: این هوک stateهای مربوط به ورودی، پیام‌ها، وضعیت کلی، خطا و موارد دیگر را برای شما مدیریت می‌کند
- **یکپارچه‌سازی**: به‌سادگی می‌توانید هوش مصنوعی چت خود را در هر طراحی یا چیدمان رابط کاربری با کمترین تلاش ادغام کنید

در این راهنما، شما خواهید آموخت چگونه از هوک `useChat` برای ساخت یک برنامه چت‌بات با استریم پیام‌های بلادرنگ (real-time) استفاده کنید. 

## مثال

در پروژه NextJS خود در مسیر `app/page.tsx`، قطعه کد زیر را قرار دهید:

```js
// npm i @ai-sdk/react@^1.2.12

'use client';

import { useChat } from '@ai-sdk/react';

export default function Page() {
  const { messages, input, handleInputChange, handleSubmit } = useChat({});

  return (
    <>
      {messages.map(message => (
        <div key={message.id}>
          {message.role === 'user' ? 'User: ' : 'AI: '}
          {message.content}
        </div>
      ))}

      <form onSubmit={handleSubmit}>
        <input name="prompt" value={input} onChange={handleInputChange} />
        <button type="submit">Submit</button>
      </form>
    </>
  );
}
```

در مسیر `app/api/chat/route.ts`، قطعه کد زیر را قرار دهید:

```js
// npm add @ai-sdk/openai@^1 ai@^4

import { createOpenAI } from '@ai-sdk/openai';
import { streamText } from 'ai';

const my_model = createOpenAI({
  baseURL: process.env.BASE_URL!,
  apiKey: process.env.LIARA_API_KEY!,
});

// Allow streaming responses up to 30 seconds
export const maxDuration = 30;

export async function POST(req: Request) {
  const { messages } = await req.json();

  const result = streamText({
    model: my_model('openai/gpt-4o-mini'),
    system: 'You are a helpful assistant.',
    messages,
  });

  return result.toDataStreamResponse();
}
```

> متغیرهای محیطی `BASE_URL` و `LIARA_API_KEY` همان baseUrl [سرویس هوش مصنوعی لیارا](https://liara.ir/products/ai/) و [کلید API لیارا](https://docs.liara.ir/references/api/about/#api-access-key) هستند که باید در بخش متغیرهای محیطی برنامه خود، آن‌ها را تنظیم کنید.

پیام‌های رابط کاربری اکنون دارای ویژگی جدیدی به نام `parts` هستند که شامل بخش‌های مختلف پیام می‌باشد. پیشنهاد می‌شود برای نمایش پیام‌ها از ویژگی `parts` به جای `content` استفاده کنید.
ویژگی `parts` از انواع مختلف پیام پشتیبانی می‌کند، از جمله متن (text)، فراخوانی tool و نتیجه tool، و امکان ایجاد رابط‌های کاربری چت پیچیده‌تر و انعطاف‌پذیرتر را فراهم می‌آورد.

در کامپوننت `Page`، هوک `useChat` هر بار که کاربر پیامی ارسال می‌کند، درخواست را به endpoint ارائه‌دهنده هوش مصنوعی شما می‌فرستد. پیام‌ها سپس به‌صورت بلادرنگ (real-time) استریم شده و در رابط کاربری چت نمایش داده می‌شوند.
این ویژگی تجربه چتی را فراهم می‌کند که در آن کاربر می‌تواند پاسخ هوش مصنوعی را به محض آماده شدن مشاهده کند، بدون آنکه نیاز باشد منتظر دریافت کامل پاسخ بماند.

## رابط کاربری سفارشی

هوک `useChat` همچنین روش‌هایی برای مدیریت وضعیت پیام‌های چت و ورودی‌ها از طریق کدنویسی فراهم می‌کند، امکان نمایش وضعیت (status) را می‌دهد و قابلیت به‌روزرسانی پیام‌ها را بدون نیاز به تعامل مستقیم کاربر ارائه می‌دهد.

## Status

هوک `useChat` یک status بازمی‌گرداند که می‌تواند مقادیر زیر را داشته باشد:

- `submitted`: پیام به API ارسال شده و در انتظار شروع استریم پاسخ هستیم
- `streaming`: پاسخ به‌صورت فعال از API استریم می‌شود و chunkهای داده دریافت می‌شوند
- `ready`: پاسخ کامل دریافت و پردازش شده است؛ کاربر می‌تواند پیام جدیدی ارسال کند
- `error`: در طول درخواست API خطایی رخ داده و درخواست به صورت کامل انجام نشده است

می‌توانید از `status` برای اهداف زیر استفاده کنید:

- نمایش یک spinner بارگذاری هنگام پردازش پیام کاربر توسط چت‌بات
- نمایش یک دکمه Stop برای متوقف کردن پیام جاری
- غیرفعال کردن دکمه ارسال (submit button)

در مسیر `app/page.tsx`، قطعه کد زیر را قرار دهید:

```js
// npm i @ai-sdk/react@^1.2.12
'use client';

import { useChat } from '@ai-sdk/react';

export default function Page() {
  const { messages, input, handleInputChange, handleSubmit, status, stop } =
    useChat({});

  return (
    <>
      {messages.map(message => (
        <div key={message.id}>
          {message.role === 'user' ? 'User: ' : 'AI: '}
          {message.content}
        </div>
      ))}

      {(status === 'submitted' || status === 'streaming') && (
        <div>
          {status === 'submitted' && <Spinner />}
          <button type="button" onClick={() => stop()}>
            Stop
          </button>
        </div>
      )}

      <form onSubmit={handleSubmit}>
        <input
          name="prompt"
          value={input}
          onChange={handleInputChange}
          disabled={status !== 'ready'}
        />
        <button type="submit">Submit</button>
      </form>
    </>
  );
}
```

می‌توانید کامپوننت `Spinner` را با کامپوننت دلخواه خود جایگزین کنید؛ یا اینکه در مسیر `components/Spinner.tsx`، قطعه کد زیر را قرار دهید:

```js
export default function Spinner() {
  return (
    <div className="inline-block h-4 w-4 animate-spin rounded-full border-2 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]">
      <span className="sr-only">Loading...</span>
    </div>
  );
}
```

## Error State

به‌طور مشابه، error state نمایانگر آبجکت خطایی است که هنگام درخواست fetch ایجاد شده است. این state می‌تواند برای نمایش پیام خطا، غیرفعال کردن دکمه ارسال یا نمایش دکمه تلاش مجدد (retry) استفاده شود.

> توصیه می‌شود پیام خطای عمومی به کاربر نمایش داده شود، مانند: "مشکلی پیش آمد". این یک شیوه‌ی مناسب برای جلوگیری از افشای اطلاعات داخلی سرور محسوب می‌شود.

```js
// npm i @ai-sdk/react@^1.2.12
'use client';

import { useChat } from '@ai-sdk/react';

export default function Chat() {
  const { messages, input, handleInputChange, handleSubmit, error, reload } =
    useChat({});

  return (
    <div>
      {messages.map(m => (
        <div key={m.id}>
          {m.role}: {m.content}
        </div>
      ))}

      {error && (
        <>
          <div>An error occurred.</div>
          <button type="button" onClick={() => reload()}>
            Retry
          </button>
        </>
      )}

      <form onSubmit={handleSubmit}>
        <input
          value={input}
          onChange={handleInputChange}
          disabled={error != null}
        />
      </form>
    </div>
  );
}
```

## ویرایش پیام‌ها

گاهی ممکن است بخواهید برخی از پیام‌های موجود را به‌صورت مستقیم ویرایش کنید. به‌عنوان مثال، می‌توان یک دکمه حذف به هر پیام اضافه کرد تا کاربران بتوانند آن‌ها را از تاریخچه چت حذف کنند.

تابع `setMessages` می‌تواند به شما در انجام این کارها کمک کند:

```js
const { messages, setMessages, ... } = useChat()

const handleDelete = (id) => {
  setMessages(messages.filter(message => message.id !== id))
}

return <>
  {messages.map(message => (
    <div key={message.id}>
      {message.role === 'user' ? 'User: ' : 'AI: '}
      {message.content}
      <button onClick={() => handleDelete(message.id)}>Delete</button>
    </div>
  ))}
  ...
```

می‌توانید `messages` و `setMessages` را مانند یک جفت `state` و `setState` در React در نظر بگیرید.

## ورودی کنترل شده

در مثال اولیه، ما از callbackهای `handleSubmit` و `handleInputChange` برای مدیریت تغییرات ورودی و ارسال فرم استفاده کرده‌ایم. این روش برای موارد رایج کاربردی است، اما شما می‌توانید از APIهای کنترل‌نشده (uncontrolled) برای سناریوهای پیشرفته‌تر مانند اعتبارسنجی فرم یا ایجاد کامپوننت‌های سفارشی نیز، استفاده کنید.

مثال زیر نشان می‌دهد چگونه می‌توان از APIهای دقیق‌تر مانند `setInput` و `append` همراه با کامپوننت‌های ورودی و دکمه ارسال سفارشی استفاده کرد:

```js
const { input, setInput, append } = useChat()

return <>
  <MyCustomInput value={input} onChange={value => setInput(value)} />
  <MySubmitButton onClick={() => {
    // Send a new message to the AI provider
    append({
      role: 'user',
      content: input,
    })
  }}/>
  ...
```

## لغو و بازتولید

یکی دیگر از سناریوهای رایج، متوقف کردن پاسخی است که هنوز از ارائه‌دهنده هوش مصنوعی در حال استریم شدن است. شما می‌توانید این کار را با فراخوانی تابع `stop` که توسط هوک `useChat` بازگردانده می‌شود، انجام دهید.

```js
const { stop, status, ... } = useChat()

return <>
  <button onClick={stop} disabled={!(status === 'streaming' || status === 'submitted')}>Stop</button>
  ...
```

زمانی که کاربر روی دکمه Stop کلیک می‌کند، درخواست fetch متوقف می‌شود. این کار از مصرف غیرضروری منابع جلوگیری کرده و تجربه کاربری برنامه چت‌بات شما را بهبود می‌بخشد.

به‌طور مشابه، شما می‌توانید از ارائه‌دهنده هوش مصنوعی بخواهید پیام آخر را دوباره پردازش کند، با فراخوانی تابع `reload` که توسط هوک `useChat` بازگردانده می‌شود:

```js
const { reload, status, ... } = useChat()

return <>
  <button onClick={reload} disabled={!(status === 'ready' || status === 'error')}>Regenerate</button>
  ...
</>
```

زمانی که کاربر روی دکمه Regenerate کلیک می‌کند، ارائه‌دهنده هوش مصنوعی پیام آخر را دوباره تولید کرده و پیام فعلی را به‌طور متقابل جایگزین می‌کند.

## محدودسازی به‌روزرسانی‌های رابط کاربری

> این ویژگی در حال حاضر فقط برای React در دسترس است.

به‌صورت پیش‌فرض، هر بار که یک chunk جدید دریافت می‌شود، هوک `useChat` باعث رندر مجدد رابط کاربری می‌شود. شما می‌توانید با استفاده از `experimental_throttle` به محدودسازی (throttle) به‌روزرسانی‌های UI بپردازید.

```js
const { messages, ... } = useChat({
  // Throttle the messages and data updates to 50ms:
  experimental_throttle: 50
})
```

## Event Callbacks

هوک `useChat` event callbackهای اختیاری ارائه می‌دهد که می‌توانید با استفاده از آن‌ها، مراحل مختلف چرخه عمر چت‌بات را مدیریت کنید:

- `onFinish`: زمانی فراخوانی می‌شود که پیام دستیار به پایان برسد
- `onError`: زمانی فراخوانی می‌شود که در طول درخواست fetch خطایی رخ دهد
- `onResponse`: زمانی فراخوانی می‌شود که پاسخ از API دریافت شود

از این callbackها می‌توان برای پیاده‌سازی بخش‌های اضافی مانند ثبت گزارش (logging)، تحلیل‌ها (analytics) یا به‌روزرسانی‌های سفارشی رابط کاربری استفاده کرد.

```js
// npm i @ai-sdk/react@^1.2.12
'use client';

import { useChat } from '@ai-sdk/react';

export default function Chat() {
  const { messages, input, handleInputChange, handleSubmit, error, reload } =
    useChat({
  onFinish: (message, { usage, finishReason }) => {
    console.log('Finished streaming message:', message);
    console.log('Token usage:', usage);
    console.log('Finish reason:', finishReason);
  },
  onError: error => {
    console.error('An error occurred:', error);
  },
  onResponse: response => {
    console.log('Received HTTP response from server:', response);
  },
});

  return (
    <div>
      {messages.map(m => (
        <div key={m.id}>
          {m.role}: {m.content}
        </div>
      ))}

      {error && (
        <>
          <div>An error occurred.</div>
          <button type="button" onClick={() => reload()}>
            Retry
          </button>
        </>
      )}

      <form onSubmit={handleSubmit}>
        <input
          value={input}
          onChange={handleInputChange}
          disabled={error != null}
        />
      </form>
    </div>
  );
}
```

شما می‌توانید با throw کردن یک خطا در callback مربوط به `onResponse` پردازش را متوقف کنید. این کار باعث می‌شود که callback مربوط به `onError` فراخوانی شده و پیام بیشتری به رابط کاربری چت اضافه نشود.
این قابلیت برای مدیریت پاسخ‌های غیرمنتظره از سوی ارائه‌دهنده هوش مصنوعی بسیار مفید است.

## پیکربندی درخواست

## هدر، بدنه و credential سفارشی

به‌طور پیش‌فرض، هوک `useChat` یک درخواست HTTP POST به `api/chat/` ارسال می‌کند و فهرست پیام‌ها را به‌عنوان بدنه درخواست قرار می‌دهد. شما می‌توانید با ارسال گزینه‌های اضافی به هوک `useChat` این درخواست را سفارشی‌سازی کنید.

```js
const { messages, input, handleInputChange, handleSubmit } = useChat({
  api: '/api/custom-chat',
  headers: {
    Authorization: 'your_token',
  },
  body: {
    user_id: '123',
  },
  credentials: 'same-origin',
});
```

در مثال فوق، هوک `useChat` یک درخواست POST به `api/custom-chat/` ارسال می‌کند که شامل هدرهای مشخص‌شده، فیلدهای اضافی در بدنه، و credentialها برای همان درخواست fetch است.
در سمت سرور، شما می‌توانید این درخواست را همراه با این اطلاعات اضافه، مدیریت کنید.

## تنظیم فیلد‌های سفارشی در بدنه برای هر درخواست

شما می‌توانید با استفاده از گزینه `body` در تابع `handleSubmit` فیلدهای سفارشی در بدنه درخواست را برای هر درخواست، به‌طور جداگانه، پیکربندی کنید. این قابلیت زمانی مفید است که بخواهید اطلاعات اضافی به بک‌اند خود ارسال کنید که بخشی از فهرست پیام‌ها نیست.

```js
// npm i @ai-sdk/react@^1.2.12
'use client';

import { useChat } from '@ai-sdk/react';

export default function Chat() {
  const { messages, input, handleInputChange, handleSubmit } = useChat();
  return (
    <div>
      {messages.map(m => (
        <div key={m.id}>
          {m.role}: {m.content}
        </div>
      ))}

      <form
        onSubmit={event => {
          handleSubmit(event, {
            body: {
              customKey: 'customValue',
            },
          });
        }}
      >
        <input value={input} onChange={handleInputChange} />
      </form>
    </div>
  );
}
```

در سمت سرور، می‌توانید این فیلدهای سفارشی را با تجزیه و destructuring، از بدنه درخواست بازیابی کنید؛ به عنوان مثال، 
در مسیر `app/api/chat/route.ts`:

```js
export async function POST(req: Request) {
  // Extract addition information ("customKey") from the body of the request:
  const { messages, customKey } = await req.json();
  //...
}
```

## کنترل استریم پاسخ

با استفاده از `streamText`، می‌توانید کنترل کنید که چگونه پیام‌های خطا و اطلاعات مصرف توکن‌ها به کلاینت بازارسال شود. 

## پیام‌های خطا

به صورت پیش‌فرض، پیام خطا به دلایل امنیتی پنهان (mask) می‌شود. پیام خطای پیش‌فرض عبارت است از: "An error occurred".
شما می‌توانید پیام‌های خطا را مستقیم ارسال کنید یا پیام خطای دلخواه خود را با ارائه‌ی یک تابع `getErrorMessage` ارسال نمایید
به عنوان مثال، می‌توانید در مسیر `app/api/chat/route.ts`، قطعه کد زیر را قرار دهید:

```js
// npm add @ai-sdk/openai@^1 ai@^4

import { createOpenAI } from '@ai-sdk/openai';
import { streamText } from 'ai';

const my_model = createOpenAI({
  baseURL: process.env.BASE_URL!,
  apiKey: process.env.LIARA_API_KEY!,
});

export async function POST(req: Request) {
  const { messages } = await req.json();

  const result = streamText({
    model: my_model('openai/gpt-4o-mini'),
    messages,
  });

  return result.toDataStreamResponse({
    getErrorMessage: error => {
      if (error == null) {
        return 'unknown error';
      }

      if (typeof error === 'string') {
        return error;
      }

      if (error instanceof Error) {
        return error.message;
      }

      return JSON.stringify(error);
    },
  });
}
```

## اطلاعات میزان مصرف token

به صورت پیش‌فرض، اطلاعات میزان مصرف توکن به کلاینت بازارسال می‌شود. شما می‌توانید با تنظیم گزینه `sendUsage` به `false`، آن را غیرفعال کنید.

```js
// npm add @ai-sdk/openai@^1 ai@^4

import { createOpenAI } from '@ai-sdk/openai';
import { streamText } from 'ai';

const my_model = createOpenAI({
  baseURL: process.env.BASE_URL!,
  apiKey: process.env.LIARA_API_KEY!,
});

export async function POST(req: Request) {
  const { messages } = await req.json();

  const result = streamText({
    model: my_model('openai/gpt-4o-mini'),
    messages,
  });

  return result.toDataStreamResponse({
    sendUsage: false,
  });
}
```

## استریم‌های متنی

`useChat` می‌تواند استریم‌های متن ساده را با تنظیم گزینه `streamProtocol` به `text`، مدیریت کند. 

```js
// npm i @ai-sdk/react@^1.2.12
'use client';

import { useChat } from '@ai-sdk/react';

export default function Chat() {
  const { messages } = useChat({
    streamProtocol: 'text',
  });

  return <>...</>;
}
```

این پیکربندی همچنین با سایر سرورهای بک‌اند که متن ساده را استریم می‌کنند نیز کار می‌کند.

> زمانی که از `'streamProtocol: 'text` استفاده می‌کنید، اطلاعات مربوط به tool callها، اطلاعات مصرف توکن و دلایل پایان (finish reasons) در دسترس نخواهند بود.

## ارسال‌های خالی

شما می‌توانید با تنظیم گزینه `allowEmptySubmit` روی مقدار `true`، هوک `useChat` را طوری پیکربندی کنید که ارسال‌های خالی را مجاز بداند.

```js
// npm i @ai-sdk/react@^1.2.12


'use client';

import { useChat } from '@ai-sdk/react';

export default function Chat() {
  const { messages, input, handleInputChange, handleSubmit } = useChat();
  return (
    <div>
      {messages.map(m => (
        <div key={m.id}>
          {m.role}: {m.content}
        </div>
      ))}

      <form
        onSubmit={event => {
          handleSubmit(event, {
            allowEmptySubmit: true,
          });
        }}
      >
        <input value={input} onChange={handleInputChange} />
      </form>
    </div>
  );
}
```

## پیوست‌ها (آزمایشی)

هوک `useChat` امکان ارسال پیوست همراه با پیام و همچنین نمایش آن‌ها در سمت کلاینت را فراهم می‌کند. این قابلیت برای ساخت برنامه‌هایی که شامل ارسال تصاویر، فایل‌ها یا سایر محتوای رسانه‌ای به ارائه‌دهنده هوش مصنوعی هستند، مفید است.
دو روش برای ارسال پیوست همراه با پیام وجود دارد: یا ارائه یک آبجکت FileList یا یک لیست از URLها به تابع `handleSubmit`:

## FileList

با استفاده از `FileList`، می‌توانید چندین فایل را تحت عنوان پیوست همراه با پیام از طریق المنت ورودی فایل ارسال کنید. هوک `useChat` به‌صورت خودکار آن‌ها را به data URL تبدیل کرده و برای ارائه‌دهنده هوش مصنوعی ارسال می‌کند.

> در حال حاضر، تنها محتوای `*/image` و `*/text` به‌صورت خودکار به بخش محتوای چندرسانه‌ای (multi-modal content) تبدیل می‌شوند. سایر content typeها باید به‌صورت دستی مدیریت شوند.

```js
// npm i @ai-sdk/react@^1.2.12

'use client';

import { useChat } from '@ai-sdk/react';
import { useRef, useState } from 'react';

export default function Page() {
  const { messages, input, handleSubmit, handleInputChange, status } =
    useChat();

  const [files, setFiles] = useState<FileList | undefined>(undefined);
  const fileInputRef = useRef<HTMLInputElement>(null);

  return (
    <div>
      <div>
        {messages.map(message => (
          <div key={message.id}>
            <div>{`${message.role}: `}</div>

            <div>
              {message.content}

              <div>
                {message.experimental_attachments
                  ?.filter(attachment =>
                    attachment.contentType.startsWith('image/'),
                  )
                  .map((attachment, index) => (
                    <img
                      key={`${message.id}-${index}`}
                      src={attachment.url}
                      alt={attachment.name}
                    />
                  ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      <form
        onSubmit={event => {
          handleSubmit(event, {
            experimental_attachments: files,
          });

          setFiles(undefined);

          if (fileInputRef.current) {
            fileInputRef.current.value = '';
          }
        }}
      >
        <input
          type="file"
          onChange={event => {
            if (event.target.files) {
              setFiles(event.target.files);
            }
          }}
          multiple
          ref={fileInputRef}
        />
        <input
          value={input}
          placeholder="Send message..."
          onChange={handleInputChange}
          disabled={status !== 'ready'}
        />
      </form>
    </div>
  );
}
```

## URLها

شما همچنین می‌توانید URLها را به‌عنوان پیوست همراه با پیام ارسال کنید. این قابلیت برای ارسال لینک به منابع خارجی یا محتوای رسانه‌ای مفید است.

*نکته*: URL می‌تواند یک data URL نیز باشد، که یک رشته کدگذاری‌شده به صورت Base64 است و محتوای یک فایل را نمایش می‌دهد. در حال حاضر تنها `*/image` به‌صورت خودکار به multi-modal content part تبدیل می‌شود و سایر content typeها باید به‌صورت دستی مدیریت شوند.

```js
// npm i @ai-sdk/react@^1.2.12

'use client';

import { useChat } from '@ai-sdk/react';
import { useState } from 'react';
import { Attachment } from '@ai-sdk/ui-utils';

export default function Page() {
  const { messages, input, handleSubmit, handleInputChange, status } =
    useChat();

  const [attachments] = useState<Attachment[]>([
    {
      name: 'earth.png',
      contentType: 'image/png',
      url: 'https://media.liara.ir/ai/dog.png',
    },
    {
      name: 'moon.png',
      contentType: 'image/png',
```

url: 'data:image/png;base64,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

```jsx
},
]);

return (
  <div>
    <div>
      {messages.map(message => (
        <div key={message.id}>
          <div>{`${message.role}: `}</div>

          <div>
            {message.content}

            <div>
              {message.experimental_attachments
                ?.filter(attachment =>
                  attachment.contentType?.startsWith('image/'),
                )
                .map((attachment, index) => (
                  <img
                    key={`${message.id}-${index}`}
                    src={attachment.url}
                    alt={attachment.name}
                  />
                ))}
            </div>
          </div>
        </div>
      ))}
    </div>

    <form
      onSubmit={event => {
        handleSubmit(event, {
          experimental_attachments: attachments,
        });
      }}
    >
      <input
        value={input}
        placeholder="Send message..."
        onChange={handleInputChange}
        disabled={status !== 'ready'}
      />
    </form>
  </div>
);
}
```

## all links

[All links of docs](https://docs.liara.ir/all-links-llms.txt)
