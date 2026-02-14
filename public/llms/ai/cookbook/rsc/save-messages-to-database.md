Original link: https://docs.liara.ir/ai/cookbook/rsc/save-messages-to-database/

# ذخیره پیام‌های مکالمه با هوش مصنوعی در دیتابیس با ساخت RSC

گاهی اوقات، گفت‌وگو با LLMها می‌تواند جالب و ارزشمند باشد و ممکن است بخواهید وضعیت فعلی گفت‌وگو را ذخیره کنید تا بعداً بتوانید به آن بازگردید یا ادامه‌اش دهید.  
تابع `createAI` یک تابع callback آزمایشی به نام `onSetAIState` دارد که هر زمان AI state تغییر کند، فراخوانی می‌شود.  
می‌توانید از این تابع استفاده کنید تا AI state را در یک فایل یا پایگاه داده ذخیره نمایید.

## کلاینت

در مسیر `app/layout.tsx`، قطعه کد زیر را قرار دهید: 

```js
import { ServerMessage } from '@/app/actions';
import { AI } from '@/app/ai';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // get chat history from database
  const history: ServerMessage[] = getChat();

  return (
    <html lang="en">
      <body>
        <AI initialAIState={history} initialUIState={[]}>
          {children}
        </AI>
      </body>
    </html>
  );
}
```

در مسیر `app/page.tsx`، قطعه کد زیر را قرار دهید: 

```js
// npm i @ai-sdk/rsc

'use client';

import { useState } from 'react';
import { ClientMessage } from '@/app/actions';
import { useActions, useUIState } from '@ai-sdk/rsc';
import { generateId } from 'ai';

// Allow streaming responses up to 30 seconds
export const maxDuration = 30;

export default function Home() {
  const [input, setInput] = useState<string>('');
  const [conversation, setConversation] = useUIState();
  const { continueConversation } = useActions();

  return (
    <div>
      <div>
        {conversation.map((message: ClientMessage) => (
          <div key={message.id}>
            {message.role}: {message.display}
          </div>
        ))}
      </div>

      <div>
        <input
          type="text"
          value={input}
          onChange={event => {
            setInput(event.target.value);
          }}
        />
        <button
          onClick={async () => {
            setConversation((currentConversation: ClientMessage[]) => [
              ...currentConversation,
              { id: generateId(), role: 'user', display: input },
            ]);

            const message = await continueConversation(input);

            setConversation((currentConversation: ClientMessage[]) => [
              ...currentConversation,
              message,
            ]);
          }}
        >
          Send Message
        </button>
      </div>
    </div>
  );
}
```

## سرور

ما از تابع callback برای گوش‌دادن به تغییرات وضعیت استفاده خواهیم کرد و زمانی که یک رویداد done دریافت کنیم، گفت‌وگو را ذخیره خواهیم کرد.

در مسیر `app/actions.ts`، قطعه کد زیر را قرار دهید:

```js
// npm i @ai-sdk/openai@^1 ai@^4
```

در مسیر `app/actions.ts`، قطعه کد زیر را قرار دهید:

```js
// npm i @ai-sdk/openai@^1 ai@^4
```

> متغیرهای محیطی `BASE_URL` و `LIARA_API_KEY` همان baseUrl [سرویس هوش مصنوعی لیارا](https://docs.liara.ir/products/ai/) و [کلید API لیارا](https://docs.liara.ir/references/api/about/#api-access-key) هستند که باید در بخش متغیرهای محیطی برنامه خود، آن‌ها را تنظیم کنید.

> پروژه فوق را می‌توانید به‌صورت کامل در [گیت‌هاب لیارا](https://github.com/liara-cloud/ai-sdk-examples/tree/master/RSC/generate-text)، مشاهده کنید.

## all links

[All links of docs](https://docs.liara.ir/all-links-llms.txt)
