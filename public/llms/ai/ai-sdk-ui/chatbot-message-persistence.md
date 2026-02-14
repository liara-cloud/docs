Original link: https://docs.liara.ir/ai/ai-sdk-ui/chatbot-message-persistence/

# ماندگاری پیام در چت‌بات هوش مصنوعی

توانایی ذخیره‌سازی و بارگذاری پیام‌های چت برای اکثر چت‌بات‌های هوش مصنوعی یک قابلیت ضروری محسوب می‌شود. در این راهنما، نشان خواهیم داد که چگونه می‌توان پایداری پیام (message persistence) را با استفاده از `useChat` و `streamText` پیاده‌سازی کرد.

> این راهنما شامل مباحث احراز هویت (Authorization)، مدیریت خطا (Error Handling) یا سایر ملاحظات دنیای واقعی نیست. هدف اصلی آن ارائه یک مثال ساده از نحوه پیاده‌سازی قابلیت ماندگاری پیام است.

## شروع یک گفت‌وگوی جدید

هنگامی که کاربر بدون ارائه chat ID وارد صفحه چت می‌شود، لازم است که ما یک گفت‌وگوی جدید ایجاد کنیم  
و سپس کاربر را به همان صفحه چت با chat ID جدید هدایت کنیم. می‌توانید در مسیر `app/chat/page.tsx` قطعه کد زیر را قرار دهید: 

```js
import { redirect } from 'next/navigation';
import { createChat } from '@/tools/chat-store';

export default async function Page() {
  const id = await createChat(); // create a new chat
  redirect(`https://docs.liara.ir/chat/${id}`); // redirect to chat page, see below
}

```

در پیاده‌سازی فوق، پیام‌های چت در فایل‌ها ذخیره می‌شوند. اما در یک برنامه واقعی، معمولاً بهتر است از یک دیتابیس یا یک سرویس ذخیره‌سازی ابری، مانند [فضای ذخیره‌سازی ابری لیارا](https://liara.ir/products/object-storage/) استفاده کنید و chat ID را از پایگاه داده دریافت کنید.  
با این حال، function interfaceها به گونه‌ای طراحی شده‌اند که بتوان آن‌ها را به‌راحتی با پیاده‌سازی‌های دیگر جایگزین کرد.  
در مسیر `tools/chat-store.ts`، می‌توانید قطعه کد زیر را قرار دهید:

```js
// npm add ai@^4

import { generateId } from 'ai';
import { existsSync, mkdirSync } from 'fs';
import { writeFile } from 'fs/promises';
import path from 'path';

export async function createChat(): Promise<string> {
  const id = generateId(); // generate a unique chat ID
  await writeFile(getChatFile(id), '[]'); // create an empty chat file
  return id;
}

function getChatFile(id: string): string {
  const chatDir = path.join(process.cwd(), '.chats');
  if (!existsSync(chatDir)) mkdirSync(chatDir, { recursive: true });
  return path.join(chatDir, `${id}.json`);
}

```

## بارگذاری یک گفت‌وگوی موجود

زمانی که کاربر با یک chat ID وارد یک صفحه چت می‌شود، لازم است پیام‌های آن چت، بارگذاری شده و نمایش داده شوند.  
در مسیر `app/chat/[id]/page.tsx`، می‌توانید قطعه کد زیر را قرار دهید:

```js
import { loadChat } from '@/tools/chat-store';
import Chat from '@/ui/chat';

export default async function Page(props: { params: Promise<{ id: string }> }) {
  const { id } = await props.params; // get the chat ID from the URL
  const messages = await loadChat(id); // load the chat messages
  return <Chat id={id} initialMessages={messages} />; // display the chat
}
```

تابع `loadChat` را در مسیر `tools/chat-store.ts` می‌توانید به صورت زیر پیاده‌سازی کنید:

```js
// npm add ai@^4

import { generateId } from 'ai';
import { existsSync, mkdirSync } from 'fs';
import { writeFile } from 'fs/promises';
import path from 'path';
import { Message } from 'ai';
import { readFile } from 'fs/promises';

export async function loadChat(id: string): Promise<Message[]> {
  return JSON.parse(await readFile(getChatFile(id), 'utf8'));
}

export async function createChat(): Promise<string> {
  const id = generateId(); // generate a unique chat ID
  await writeFile(getChatFile(id), '[]'); // create an empty chat file
  return id;
}

function getChatFile(id: string): string {
  const chatDir = path.join(process.cwd(), '.chats');
  if (!existsSync(chatDir)) mkdirSync(chatDir, { recursive: true });
  return path.join(chatDir, `${id}.json`);
}
```

Display Component یک کامپوننت ساده‌ی چت است که از هوک `useChat` برای ارسال و دریافت پیام‌ها استفاده می‌کند.  
در مسیر `ui/chat.tsx`، می‌توانید قطعه کد زیر را قرار دهید:

```js
'use client';

import { Message, useChat } from '@ai-sdk/react';

export default function Chat({
  id,
  initialMessages,
}: { id?: string | undefined; initialMessages?: Message[] } = {}) {
  const { input, handleInputChange, handleSubmit, messages } = useChat({
    id, // use the provided chat ID
    initialMessages, // initial messages if provided
    sendExtraMessageFields: true, // send id and createdAt for each message
  });

  // simplified rendering code, extend as needed:
  return (
    <div>
      {messages.map(m => (
        <div key={m.id}>
          {m.role === 'user' ? 'User: ' : 'AI: '}
          {m.content}
        </div>
      ))}

      <form onSubmit={handleSubmit}>
        <input value={input} onChange={handleInputChange} />
      </form>
    </div>
  );
}
```

## ذخیره‌سازی پیام‌ها

هوک `useChat` مقدار chat ID و پیام‌ها را به سمت بک‌اند ارسال می‌کند. ما گزینه‌ی `sendExtraMessageFields` را فعال کردیم تا فیلدهای `id` و `createdAt` نیز ارسال شوند؛ در نظر داشته باشید که پیام‌ها، در قالب پیام‌های `useChat` ذخیره خواهند شد.

> قالب پیام‌های `useChat` با قالب پیام‌های `CoreMessage` متفاوت است. قالب پیام‌های `useChat` برای نمایش در فرانت‌اند طراحی شده و شامل فیلدهای اضافی نظیر `id` و `createdAt` است. پیشنهاد ما این است که پیام‌ها را در قالب پیام‌های `useChat` ذخیره کنید.

فرآیند ذخیره‌سازی پیام‌ها در callback مربوط به `onFinish` در تابع `streamText` انجام می‌شود. `onFinish` پیام‌های پاسخ هوش مصنوعی را به صورت یک آرایه‌ی `[]CoreMessage` دریافت می‌کند و ما با استفاده از یک helper به نام `appendResponseMessages`، پیام‌های پاسخ را به مجموعه‌ی پیام‌های چت اضافه می‌کنیم.  
در مسیر `app/api/chat/route.ts`، می‌توانید قطعه کد زیر را قرار دهید:

```js
// npm add @ai-sdk/openai@^1 ai@^4

import { createOpenAI } from '@ai-sdk/openai';
import { appendResponseMessages, streamText } from 'ai';
import { saveChat } from '@/tools/chat-store';

const my_model = createOpenAI({
  baseURL: process.env.BASE_URL!,
  apiKey: process.env.LIARA_API_KEY!,
});

export async function POST(req: Request) {
  const { messages, id } = await req.json();

  const result = streamText({
    model: my_model('openai/gpt-4o-mini'),
    messages,
    async onFinish({ response }) {
      await saveChat({
        id,
        messages: appendResponseMessages({
          messages,
          responseMessages: response.messages,
        }),
      });
    },
  });

  return result.toDataStreamResponse();
}
```

ذخیره‌سازی واقعی پیام‌ها در تابع `saveChat` انجام می‌شود.  
در مسیر `tools/chat-store.ts`، می‌توانید قطعه کد زیر را قرار دهید:

```js
// npm add ai@^4

import { generateId } from 'ai';
import { existsSync, mkdirSync } from 'fs';
import { writeFile } from 'fs/promises';
import path from 'path';
import { Message } from 'ai';
import { readFile } from 'fs/promises';

export async function saveChat({
  id,
  messages,
}: {
  id: string;
  messages: Message[];
}): Promise<void> {
  const content = JSON.stringify(messages, null, 2);
  await writeFile(getChatFile(id), content);
}

export async function loadChat(id: string): Promise<Message[]> {
  return JSON.parse(await readFile(getChatFile(id), 'utf8'));
}

export async function createChat(): Promise<string> {
  const id = generateId(); // generate a unique chat ID
  await writeFile(getChatFile(id), '[]'); // create an empty chat file
  return id;
}

function getChatFile(id: string): string {
  const chatDir = path.join(process.cwd(), '.chats');
  if (!existsSync(chatDir)) mkdirSync(chatDir, { recursive: true });
  return path.join(chatDir, `${id}.json`);
}
```

## IDهای پیام

علاوه بر chat ID، هر پیام دارای یک ID نیز است. از این ID می‌توان برای کارهایی مانند مدیریت هر پیام، استفاده کرد.  
IDهای مربوط به پیام‌های کاربر توسط هوک `useChat` در سمت کلاینت تولید می‌شوند، در حالی که IDهای پیام‌های پاسخ هوش مصنوعی توسط `streamText` ساخته می‌شوند.  
شما می‌توانید قالب IDها را با ارائه‌ی ID generatorها کنترل کنید. می‌توانید در مسیر `ui/chat.tsx`، قطعه کد زیر را قرار دهید:

```js
// npm add ai@^4

'use client';

import { Message, useChat } from '@ai-sdk/react';
import { createIdGenerator } from 'ai';

export default function Chat({
  id,
  initialMessages,
}: { id?: string | undefined; initialMessages?: Message[] } = {}) {
  const { input, handleInputChange, handleSubmit, messages } = useChat({
    id, 
    initialMessages, 
    sendExtraMessageFields: true, 

    // id format for client-side messages:
    generateId: createIdGenerator({
    prefix: 'msgc',
    size: 16,
    }),
  });

  return (
    <div>
      {messages.map(m => (
        <div key={m.id}>
          {m.role === 'user' ? 'User: ' : 'AI: '}
          {m.content}
        </div>
      ))}

      <form onSubmit={handleSubmit}>
        <input value={input} onChange={handleInputChange} />
      </form>
    </div>
  );
}
```

در مسیر `app/api/chat/route.ts`، می‌توانید قطعه کد زیر را قرار دهید:

```js
// npm add @ai-sdk/openai@^1 ai@^4

import { createOpenAI } from '@ai-sdk/openai';
import { appendResponseMessages, streamText, createIdGenerator } from 'ai';
import { saveChat } from '@/tools/chat-store';

const my_model = createOpenAI({
  baseURL: process.env.BASE_URL!,
  apiKey: process.env.LIARA_API_KEY!,
});

export async function POST(req: Request) {
  const { messages, id } = await req.json();

  const result = streamText({
    model: my_model('openai/gpt-4o-mini'),
    messages,
    async onFinish({ response }) {
      await saveChat({
        id,
        messages: appendResponseMessages({
          messages,
          responseMessages: response.messages,
        }),
      });
    },
    experimental_generateMessageId: createIdGenerator({
      prefix: 'msgs',
      size: 16,
    }),

  });

  return result.toDataStreamResponse();
}
```

> پروژه آماده استفاده مطابق با آموزش فوق، در [گیت‌هاب لیارا](https://github.com/liara-cloud/ai-sdk-examples/tree/master/AI-SDK-UI/chatbot-message-persistence-part-1) موجود است که می‌توانید از آن، استفاده کنید.

## ارسال فقط آخرین پیام

پس از پیاده‌سازی قابلیت ماندگاری پیام، ممکن است بخواهید تنها آخرین پیام را به سرور ارسال کنید. این کار میزان داده‌های ارسالی به سرور در هر درخواست را کاهش داده و می‌تواند عملکرد سیستم را بهبود بخشد.  
در مسیر `ui/chat.tsx`، می‌توانید قطعه کد زیر را قرار دهید:

```js
// npm add ai@^4

'use client';

import { Message, useChat } from '@ai-sdk/react';
import { createIdGenerator } from 'ai';

export default function Chat({
  id,
  initialMessages,
}: { id?: string | undefined; initialMessages?: Message[] } = {}) {
  const { input, handleInputChange, handleSubmit, messages } = useChat({
    id, 
    initialMessages, 
    sendExtraMessageFields: true, 

    generateId: createIdGenerator({
    prefix: 'msgc',
    size: 16,
    }),
    
    // only send the last message to the server:
    experimental_prepareRequestBody({ messages, id }) {
    return { message: messages[messages.length - 1], id };
    },
  });

  return (
    <div>
      {messages.map(m => (
        <div key={m.id}>
          {m.role === 'user' ? 'User: ' : 'AI: '}
          {m.content}
        </div>
      ))}

      <form onSubmit={handleSubmit}>
        <input value={input} onChange={handleInputChange} />
      </form>
    </div>
  );
}
```

سپس، در سمت سرور، شما می‌توانید پیام‌های قبلی را بارگذاری کرده و پیام جدید را به پیام‌های قبلی اضافه کنید.  
در مسیر `app/api/chat/route.ts`، می‌توانید قطعه کد زیر را قرار دهید:

```js
// npm add @ai-sdk/openai@^1 ai@^4

import { createOpenAI } from '@ai-sdk/openai';
import { appendResponseMessages, streamText, createIdGenerator, appendClientMessage } from 'ai';
import { saveChat, loadChat } from '@/tools/chat-store';

const my_model = createOpenAI({
  baseURL: process.env.BASE_URL!,
  apiKey: process.env.LIARA_API_KEY!,
});

export async function POST(req: Request) {
  const { message, id } = await req.json();

  const previousMessages = await loadChat(id);

  const messages = appendClientMessage({
    messages: previousMessages,
    message,
  });


  const result = streamText({
    model: my_model('openai/gpt-4o-mini'),
    messages,
    async onFinish({ response }) {
      await saveChat({
        id,
        messages: appendResponseMessages({
          messages,
          responseMessages: response.messages,
        }),
      });
    },
    experimental_generateMessageId: createIdGenerator({
      prefix: 'msgs',
      size: 16,
    }),

  });

  return result.toDataStreamResponse();
}
```

## مدیریت قطع اتصال کلاینت

به‌طور پیش‌فرض، تابع `streamText` در AI SDK از مکانیزم backpressure برای ارائه‌دهنده‌ی مدل استفاده می‌کند تا از مصرف توکن‌هایی که هنوز درخواست نشده‌اند جلوگیری کند.  
در واقع، اگر کلاینت اتصال خود را قطع کند (مثلاً  با بستن تب مرورگر یا به دلیل یک مشکل در شبکه)، استریم از LLM متوقف شده و مکالمه ممکن است در وضعیت ناقص قرار بگیرد.  

با فرض اینکه یک [راهکار ذخیره‌سازی](https://https://docs.liara.ir/ai/ai-sdk-ui/chatbot-message-persistence/#storing-messages) در اختیار دارید، می‌توانید از متد `consumeStream` برای مصرف استریم در بک‌اند استفاده کرده و سپس نتیجه را مانند حالت عادی ذخیره کنید. استفاده از `consumeStream` در عمل، backpressure را حذف می‌کند و نتیجه حتی زمانی که کلاینت از قبل قطع اتصال کرده باشد نیز ذخیره می‌شود.  

در مسیر `app/api/chat/route.ts`، می‌توانید قطعه کد زیر را قرار دهید:

```js
// npm add @ai-sdk/openai@^1 ai@^4

import { createOpenAI } from '@ai-sdk/openai';
import { appendResponseMessages, streamText, createIdGenerator, appendClientMessage } from 'ai';
import { saveChat, loadChat } from '@/tools/chat-store';

const my_model = createOpenAI({
  baseURL: process.env.BASE_URL!,
  apiKey: process.env.LIARA_API_KEY!,
});

export async function POST(req: Request) {
  const { message, id } = await req.json();

  const previousMessages = await loadChat(id);

  const messages = appendClientMessage({
    messages: previousMessages,
    message,
  });

  const result = streamText({
    model: my_model('openai/gpt-4o-mini'),
    messages,
    async onFinish({ response }) {
      await saveChat({
        id,
        messages: appendResponseMessages({
          messages,
          responseMessages: response.messages,
        }),
      });
    },
    experimental_generateMessageId: createIdGenerator({
      prefix: 'msgs',
      size: 16,
    }),

  });

  // consume the stream to ensure it runs to completion & triggers onFinish
  // even when the client response is aborted:
  result.consumeStream(); // no await

  return result.toDataStreamResponse();
}
```

هنگامی که کاربر صفحه را بعد از قطع اتصال، مجدداً بارگذاری می‌کند، چت از راهکار ذخیره‌سازی بازیابی خواهد شد.  

> در برنامه‌های واقعی، بهتر است که وضعیت درخواست را در پیام‌های ذخیره‌شده‌تان نیز رهگیری کرده و در کلاینت از آن استفاده کنید تا  
> حالتی را که در آن، کلاینت صفحه را بعد از قطع اتصال مجدداً بارگذاری می‌کند، اما استریم هنوز کامل نشده است، پوشش دهد.

## ادامه دادن استریم‌های در حال اجرا

> این قابلیت آزمایشی است و ممکن است در آینده تغییر کند.

تفاوتی  
نمی‌کند که کلاینت بخاطر قطع شبکه یا بارگذاری مجدد صفحه، استریم را از دست داده باشد؛  
هوک `useChat` از قابلیت ادامه دادن استریم در حال اجرا در صفحه چت برای هر کلاینتی، به صورت آزمایشی، پشتیبانی می‌کند.  
این قابلیت برای ساخت اپلیکیشن‌هایی که درگیر مکالمه‌های طولانی هستند مفید است. همچنین این قابلیت، اطمینان حاصل می‌کند که در شرایط رخ دادن مشکلات شبکه، پیام‌ها از دست نمی‌روند.

در ادامه، پیش‌نیازها برای چت‌اپلیکیشن شما برای پشتیبانی از این قابلیت قرار گرفته است.  

- نصب پکیج [resumable-stream](https://www.npmjs.com/package/resumable-stream) که به شما کمک می‌کند مکانیزم publisher/subscriber را در استریم‌‌ها ایجاد و مدیریت کنید
- ایجاد یک [دیتابیس Redis](https://liara.ir/landing/هست-ابری-redis/) برای ذخیره وضعیت (state) استریم
- ساخت یک جدول که IDهای استریم مرتبط با یک چت را رهگیری می‌کند

برای ادامه دادن یک استریم، شما از تابع `experimental_resume` موجود در هوک `useChat` استفاده خواهید کرد. شما باید این تابع را در زمان mount اولیه‌ی هوک، داخل کامپوننت اصلی چت، فراخوانی کنید.  
در مسیر `app/components/chat.tsx`، قطعه کد زیر را قرار دهید:

```js
'use client';

import { useChat } from '@ai-sdk/react';
import type { UIMessage } from 'ai';
import { Input } from '@/app/components/input';
import { Messages } from '@/app/components/messages';
import { useAutoResume } from '@/app/hooks/use-auto-resume';

export function Chat({ id, initialMessages = [] }: { id: string; initialMessages?: UIMessage[] }) {
  const { experimental_resume, data, setMessages } = useChat({ id });

  useAutoResume({
    autoResume: true,
    initialMessages,
    experimental_resume,
    data,
    setMessages,
  });

  return (
    <div>
      <Messages />
      <Input />
    </div>
  );
}
```

برای یک پیاده‌سازی مقاوم‌تر که شرایط رقابتی احتمالی در هنگام اجرای درخواست ادامه دادن (resume request) را مدیریت کند، می‌توانید از هوک `useAutoResume` زیر استفاده کنید.  
این هوک به‌صورت خودکار بخش داده‌ی SSE مربوط به `append-message` را که توسط سرور استریم می‌شود، پردازش می‌کند.  
در مسیر `app/hooks/use-auto-resume.tsx`، قطعه کد زیر را قرار دهید:

```js
'use client';

import { useEffect } from 'react';
import type { UIMessage } from 'ai';
import type { UseChatHelpers } from '@ai-sdk/react';

export type DataPart = { type: 'append-message'; message: string };

export interface Props {
  autoResume: boolean;
  initialMessages: UIMessage[];
  experimental_resume: UseChatHelpers['experimental_resume'];
  data: UseChatHelpers['data'];
  setMessages: UseChatHelpers['setMessages'];
}

export function useAutoResume({
  autoResume,
  initialMessages,
  experimental_resume,
  data,
  setMessages,
}: Props) {
  useEffect(() => {
    if (!autoResume) return;

    const mostRecentMessage = initialMessages.at(-1);

    if (mostRecentMessage?.role === 'user') {
      experimental_resume();
    }

    // we intentionally run this once
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (!data || data.length === 0) return;

    const dataPart = data[0] as DataPart;

    if (dataPart.type === 'append-message') {
      const message = JSON.parse(dataPart.message) as UIMessage;
      setMessages([...initialMessages, message]);
    }
  }, [data, initialMessages, setMessages]);
}
```

سپس، می‌توانید از این هوک، مانند قطعه کد زیر در کامپوننت چت خود استفاده کنید.  
در مسیر `app/components/chat.tsx`، قطعه کد زیر را قرار دهید:

```js
'use client';

import { useChat } from '@ai-sdk/react';
import { Input } from '@/app/components/input';
import { Messages } from '@/app/components/messages';
import { useAutoResume } from '@/app/hooks/use-auto-resume';

export function Chat() {
  const { experimental_resume, data, setMessages } = useChat({ id });

  useAutoResume({
    autoResume: true,
    initialMessages: [],
    experimental_resume,
    data,
    setMessages,
  });

  return (
    <div>
      <Messages />
      <Input />
    </div>
  );
}
```

هر بار که تابع  `experimental_resume` فراخوانی می‌شود، یک درخواست `GET` به endpoint پیکربندی شده چت ارسال می‌کند (به صورت پیش‌فرض، `api/chat/`)  
اگر استریمی فعال باشد، این تابع، ادامه‌ی آن را، از همان نقطه‌ی قبلی دنبال می‌کند، در غیر این صورت بدون خطا خاتمه می‌یابد.

درخواست GET به‌صورت خودکار پارامتر کوئری `chatId` را به URL اضافه می‌کند تا بتوان چتی که درخواست به آن تعلق دارد را شناسایی کرد. با استفاده از `chatId`, می‌توانید آخرین stream ID را از پایگاه داده بازیابی کرده و استریم را ادامه دهید.

```js
GET /api/chat?chatId=<your-chat-id>
```

قبل‌تر، فقط کافی بود که یک `POST` handler برای مسیر `api/chat/` پیاده‌سازی کنید تا بتوان چت‌های جدید ایجاد کرد.  
هنگام استفاده از `experimental_resume`، شما باید همچنین یک `GET` handler برای مسیر `api/chat/` پیاده‌سازی کنید تا بتوان استریم را ادامه داد.

```js
GET /api/chat?chatId=<your-chat-id>
```

## ۱. پیاده‌سازی GET handler

یک متد `GET` به `api/chat/` اضافه کنید که:  

- `chatId` را از query string بخواند  
- بررسی کند که `chatId` آماده است یا نه  
- تمامی stream IDهای ذخیره‌ شده برای آن چت را بارگذاری کند  
- آخرین stream ID را به عنوان آرگومان به `streamContext.resumableStream()` بدهد  
- در صورتی که استریم از قبل بسته شده بود، به یک استریم خالی (empty stream) برگردد  

در مسیر `app/api/chat/route.ts`، می‌توانید قطعه کد زیر را قرار دهید:

```js
import { loadStreams } from '@/util/chat-store';
import { createDataStream, getMessagesByChatId } from 'ai';
import { after } from 'next/server';
import { createResumableStreamContext } from 'resumable-stream';

const streamContext = createResumableStreamContext({
  waitUntil: after,
});

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const chatId = searchParams.get('chatId');

  if (!chatId) {
    return new Response('id is required', { status: 400 });
  }

  const streamIds = await loadStreams(chatId);

  if (!streamIds.length) {
    return new Response('No streams found', { status: 404 });
  }

  const recentStreamId = streamIds.at(-1);

  if (!recentStreamId) {
    return new Response('No recent stream found', { status: 404 });
  }

  const emptyDataStream = createDataStream({
    execute: () => {},
  });

  const stream = await streamContext.resumableStream(
    recentStreamId,
    () => emptyDataStream,
  );

  if (stream) {
    return new Response(stream, { status: 200 });
  }

  /*
   * For when the generation is "active" during SSR but the
   * resumable stream has concluded after reaching this point.
   */

  const messages = await getMessagesByChatId({ id: chatId });
  const mostRecentMessage = messages.at(-1);

  if (!mostRecentMessage || mostRecentMessage.role !== 'assistant') {
    return new Response(emptyDataStream, { status: 200 });
  }

  const messageCreatedAt = new Date(mostRecentMessage.createdAt);

  const streamWithMessage = createDataStream({
    execute: buffer => {
      buffer.writeData({
        type: 'append-message',
        message: JSON.stringify(mostRecentMessage),
      });
    },
  });

  return new Response(streamWithMessage, { status: 200 });
}
```

بعد از پیاده‌سازی GET handler، می‌توانید POST handler را به‌روزرسانی کنید تا ساخت استریم‌های قابل ادامه دادن را مدیریت کند.

## ۲. به‌روزرسانی POST handler

هنگام ایجاد یک chat completion جدید، باید مراحل زیر را انجام دهید:  

- یک `streamId` جدید ایجاد کنید  
- آن را همراه با `chatId` ذخیره کنید  
- یک `createDataStream` آغاز کنید که توکن‌ها را هنگام ورود، پردازش و منتقل کند  
- استریم جدید را به `streamContext.resumableStream` تحویل دهید  

در مسیر `app/api/chat/route.ts`، می‌توانید قطعه کد زیر را قرار دهید:

```js
import { loadStreams, loadChat } from '@/util/chat-store';
import {
  appendResponseMessages,
  createDataStream,
  generateId,
  streamText,
} from 'ai';
import { appendStreamId } from '@/util/chat-store';
import { saveChat } from '@/tools/chat-store';
import { after } from 'next/server';
import { createResumableStreamContext } from 'resumable-stream/ioredis';
import { createOpenAI } from '@ai-sdk/openai';


const my_model = createOpenAI({
  baseURL: process.env.BASE_URL!,
  apiKey: process.env.LIARA_API_KEY!,
});

const streamContext = createResumableStreamContext({
  waitUntil: after,
});

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const chatId = searchParams.get('chatId');

  if (!chatId) {
    return new Response('id is required', { status: 400 });
  }

  const streamIds = await loadStreams(chatId);

  if (!streamIds.length) {
    return new Response('No streams found', { status: 404 });
  }

  const recentStreamId = streamIds.at(-1);

  if (!recentStreamId) {
    return new Response('No recent stream found', { status: 404 });
  }

  const emptyDataStream = createDataStream({
    execute: () => {},
  });

  const stream = await streamContext.resumableStream(
    recentStreamId,
    () => emptyDataStream,
  );

  if (stream) {
    return new Response(stream, { status: 200 });
  }

  /*
   * For when the generation is "active" during SSR but the
   * resumable stream has concluded after reaching this point.
   */

  const messages = await loadChat(chatId);
  const mostRecentMessage = messages.at(-1);

  if (!mostRecentMessage || mostRecentMessage.role !== 'assistant') {
    return new Response(emptyDataStream, { status: 200 });
  }

  const messageCreatedAt = mostRecentMessage.createdAt
    ? new Date(mostRecentMessage.createdAt)
    : new Date();

  const streamWithMessage = createDataStream({
    execute: buffer => {
      buffer.writeData({
        type: 'append-message',
        message: JSON.stringify(mostRecentMessage),
      });
    },
  });

  return new Response(streamWithMessage, { status: 200 });
}

export async function POST(request: Request) {
  const { id, messages } = await request.json();
  const streamId = generateId();

  // Record this new stream so we can resume later
  await appendStreamId({ chatId: id, streamId });

  // Build the data stream that will emit tokens
  const stream = createDataStream({
    execute: dataStream => {
      const result = streamText({
        model: my_model('openai/gpt-4o-mini'),
        messages,
        onFinish: async ({ response }) => {
          await saveChat({
            id,
            messages: appendResponseMessages({
              messages,
              responseMessages: response.messages,
            }),
          });
        },
      });

      // Return a resumable stream to the client
      result.mergeIntoDataStream(dataStream);
    },
  });

  return new Response(
    await streamContext.resumableStream(streamId, () => stream),
  );
}
```

با پیاده‌سازی هر دو handler، کلاینت‌های شما اکنون می‌توانند استریم‌های در حال اجرا را به‌صورت مطمئن و بدون مشکل ازسر بگیرند.

## all links

[All links of docs](https://docs.liara.ir/all-links-llms.txt)
