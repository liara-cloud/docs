Original link: https://docs.liara.ir/ai/cookbook/nextjs/markdown-chatbot-with-memoization/

# ساخت چت بات Markdown با بهینه سازی حافظه

هنگام ساخت یک چت‌بات با استفاده از NextJS و AI SDK، معمولاً می‌خواهید پاسخ‌های مدل را با فرمت Markdown نمایش دهید؛ برای این کار می‌توان از کتابخانه‌ای مانند `react-markdown` استفاده کرد.  
با این حال، این روش می‌تواند تأثیر منفی بر عملکرد داشته باشد، زیرا Markdown با دریافت هر توکن جدید از پاسخ استریمی، مجدداً رندر می‌شود.

با طولانی‌تر و پیچیده‌تر شدن مکالمه‌ها، این مشکل به‌صورت نمایی افزایش می‌یابد، چرا که کل تاریخچه‌ی گفتگو با دریافت هر توکن جدید مجدداً رندر می‌شود.

در این راهکار از memoization استفاده شده است؛ یک تکنیک بهینه‌سازی عملکرد که در آن، نتایج توابع پرهزینه ذخیره (cache) شده و در دفعات بعدی مجدداً استفاده می‌شوند تا از محاسبات غیرضروری جلوگیری شود.  
در این مورد خاص، بلوک‌های Markdown که پردازش شده‌اند، ذخیره می‌شوند تا هنگام دریافت توکن‌های جدید، نیازی به پردازش و رندر مجدد آن‌ها نباشد.  
این بدان معناست که وقتی یک بلوک به‌طور کامل پردازش شد، به‌جای بازتولید شدن، از نسخه‌ی ذخیره‌شده‌ی آن استفاده می‌شود.  
این رویکرد با حذف عملیات تکراریِ پردازش و رندر، به‌طور چشمگیری عملکرد رندر در مکالمات طولانی را بهبود می‌بخشد.

## سرور

در سمت سرور، از یک route handler ساده استفاده کنید که پاسخ LLM را به‌صورت استریم به کلاینت ارسال می‌کند.  
قطعه کد زیر را در مسیر `app/api/chat/route.ts`، قرار دهید:  

```js
// npm i @ai-sdk/openai@^1 ai@^4 zod

import { createOpenAI } from '@ai-sdk/openai';
import { streamText } from 'ai';

const my_model = createOpenAI({
  baseURL: process.env.BASE_URL!,
  apiKey: process.env.LIARA_API_KEY!,
});

export const maxDuration = 60;

export async function POST(req: Request) {
  const { messages } = await req.json();

  const result = streamText({
    system:
      'You are a helpful assistant. Respond to the user in Markdown format.',
    model: my_model('openai/gpt-4o-mini', { structuredOutputs: true }),
    messages,
  });

  return result.toDataStreamResponse();
}
```

> متغیرهای محیطی `BASE_URL` و `LIARA_API_KEY` همان baseUrl [سرویس هوش مصنوعی لیارا](https://docs.liara.ir/products/ai/) و [کلید API لیارا](https://docs.liara.ir/references/api/about/#api-access-key) هستند که باید در بخش متغیرهای محیطی برنامه خود، آن‌ها را تنظیم کنید.

## کامپوننت Markdown با بهینه‌سازی حافظه

در گام بعد، یک کامپوننت Markdown با قابلیت memoization ایجاد کنید که متن خام Markdown را به بلوک‌هایی تقسیم کرده و تنها زمانی به‌روزرسانی می‌شود که محتوای آن واقعاً تغییر کرده باشد.  
این کامپوننت، محتوای Markdown را با استفاده از کتابخانه marked به بلوک‌هایی مجزا تقسیم می‌کند (برای شناسایی عناصر مستقل Markdown)، سپس از ویژگی‌های memoization در React استفاده می‌کند تا فرآیند رندر تنها برای بلوک‌هایی که واقعاً تغییر کرده‌اند انجام شود.  
این روش باعث می‌شود از رندر مجدد کل محتوا در هنگام دریافت توکن‌های جدید جلوگیری شود و تنها بخش‌های تغییر‌یافته بروزرسانی شوند، که این کار به‌طور قابل توجهی عملکرد را در گفتگوهای طولانی بهبود می‌بخشد.

در فایل `components/memoized-markdown.tsx` قطعه کد زیر را قرار دهید:  

```js
// npm i @ai-sdk/react@^1.2.12
'use client';

import { useChat } from '@ai-sdk/react';

// Allow streaming responses up to 30 seconds
export const maxDuration = 30;

export default function Chat() {
  const { messages, input, handleInputChange, handleSubmit } = useChat();
  return (
    <div>
      {messages.map(m => (
        <div key={m.id}>
          {m.role === 'user' ? 'User: ' : 'AI: '}
          {m.content}
        </div>
      ))}

      <form
        onSubmit={e => {
          handleSubmit(e, {
            data: { imageUrl: 'https://media.liara.ir/ai/dog.png' },
          });
        }}
      >
        <input
          value={input}
          placeholder="What does the image show..."
          onChange={handleInputChange}
        />
      </form>
    </div>
  );
}
```

## کلاینت

در نهایت، در سمت کلاینت، از هوک `useChat` برای مدیریت chat state و نمایش رابط کاربری چت استفاده کنید.  
برای نمایش محتوای پیام‌ها با فرمت Markdown بدون کاهش عملکرد، می‌توانید از کامپوننت `MemoizedMarkdown` بهره بگیرید.  
همچنین می‌توانید فرم ارسال پیام را در یک کامپوننت جداگانه پیاده‌سازی کنید تا از رندرهای غیرضروری پیام‌های چت جلوگیری شود.  
علاوه بر این، می‌توانید از گزینه‌ی آزمایشی `experimental_throttle` استفاده کنید تا به‌روزرسانی داده‌ها را در بازه‌های زمانی مشخص محدود (throttle) کرده و بدین‌ترتیب عملکرد رندرینگ را بهتر کنترل و بهینه‌سازی نمایید.

در فایل `app/page.tsx` قطعه کد زیر را قرار دهید:  

```js
// npm i @ai-sdk/react@^1.2.12
'use client';

import { useChat } from '@ai-sdk/react';
import { MemoizedMarkdown } from '@/components/memoized-markdown';

export default function Page() {
  const { messages } = useChat({
    id: 'chat',
    // Throttle the messages and data updates to 50ms:
    experimental_throttle: 50,
  });

  return (
    <div className="flex flex-col w-full max-w-xl py-24 mx-auto stretch">
      <div className="space-y-8 mb-4">
        {messages.map(message => (
          <div key={message.id}>
            <div className="font-bold mb-2">
              {message.role === 'user' ? 'You' : 'Assistant'}
            </div>
            <div className="prose space-y-2">
              <MemoizedMarkdown id={message.id} content={message.content} />
            </div>
          </div>
        ))}
      </div>
      <MessageInput />
    </div>
  );
}

const MessageInput = () => {
  const { input, handleSubmit, handleInputChange } = useChat({ id: 'chat' });
  return (
    <form onSubmit={handleSubmit}>
      <input
        className="fixed bottom-0 w-full max-w-xl p-2 mb-8 dark:bg-zinc-900 border border-zinc-300 dark:border-zinc-800 rounded shadow-xl"
        placeholder="Say something..."
        value={input}
        onChange={handleInputChange}
      />
    </form>
  );
};
```

> chat state از طریق استفاده از یک مقدار id بین هر دو کامپوننت به‌اشتراک گذاشته می‌شود.  
> این کار امکان تفکیک فرم ارسال پیام و پیام‌های چت به دو کامپوننت مجزا را فراهم می‌کند، در حالی‌که state بین آن‌ها کاملاً همگام و هماهنگ باقی می‌ماند.

خروجی برنامه فوق:  

![example of markdown chatbot with memoization in nextjs app router](https://media.liara.ir/ai/ai-sdk/cookbook/nextjs/markdown-chatbot-with-memoization.png)

> پروژه فوق را می‌توانید به‌صورت کامل در [گیت‌هاب لیارا](https://github.com/liara-cloud/ai-sdk-examples/tree/master/NextJS/markdown-chatbot-with-memoization)، مشاهده کنید.

## all links

[All links of docs](https://docs.liara.ir/all-links-llms.txt)
