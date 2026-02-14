Original link: https://docs.liara.ir/ai/getting-started/expo/

# کار با AI SDK در برنامه‌های Expo

AI SDK یک کتابخانه‌ی قدرتمند TypeScript است که برای کمک به توسعه‌دهندگان در ساخت برنامه‌های مبتنی بر هوش مصنوعی طراحی شده است.  
در این آموزش، یک چت‌بات ساده‌ی مبتنی بر هوش مصنوعی با رابط کاربری استریمی ایجاد خواهید کرد. در این مسیر، با مفاهیم کلیدی و تکنیک‌های اساسی آشنا می‌شوید که برای استفاده از این SDK ضروری هستند.

## پیش‌نیازها (Prerequisites)

برای دنبال‌کردن این آموزش، به موارد زیر نیاز دارید:

- نصب داشتن NodeJS نسخه ۱۸ یا بالاتر و `pnpm` بر روی سیستم local
- یک `baseUrl` از محصول [هوش مصنوعی لیارا](https://liara.ir/products/ai/) و کلید API کنسول

## ساخت برنامه

> این راهنما قابل استفاده در نسخه ۵۲ و نسخه‌های بالاتر Expo می‌باشد.

برای شروع، یک برنامه‌ی جدید Expo، ایجاد کنید. دستور زیر یک دایرکتوری جدید به نام `my-ai-app` ایجاد می‌کند و درون آن، یک پروژه پایه Expo می‌سازد:

```bash
pnpm create expo-app@latest my-ai-app
```

وارد دایرکتوری پروژه شوید:

```bash
cd my-ai-app
```

## نصب وابستگی‌ها  
با اجرای دستور قرار گرفته در ادامه، پکیج‌های زیر را نصب کنید:

- `ai`: پکیج اصلی AI SDK
- `ai-sdk/react@`: توابع مربوط به React برای کار با SDK
- `ai-sdk/openai@`: ارائه‌دهنده‌ی OpenAI برای SDK (سازگار با تمامی مدل‌های ارائه‌شده توسط لیارا)
- `zod`: برای بهبود ساختار خروجی

```bash
pnpm add @ai-sdk/openai@^1 ai@^4 @ai-sdk/react@^1.2.12 zod
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

## ایجاد یک API Route

در مسیر `app/api/chat+api.ts`، یک route handler بسازید و قطعه کد زیر را درون آن، قرار دهید:

```ts
import { createOpenAI } from '@ai-sdk/openai';
import { streamText } from 'ai';

const my_model = createOpenAI({
  baseURL: process.env.BASE_URL,
  apiKey: process.env.LIARA_API_KEY,
});

export async function POST(req: Request) {
  const { messages } = await req.json();

  const result = streamText({
    model: my_model('openai/gpt-4o-mini'),
    messages,
  });

  return result.toDataStreamResponse({
    headers: {
      'Content-Type': 'application/octet-stream',
      'Content-Encoding': 'none',
    },
  });
}
```

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

اکنون که یک API دارید که می‌تواند به یک LLM درخواست بزند، وقت آن است که رابط کاربری (frontend) خود را پیاده‌سازی کنید.  
پکیج رابط کاربری (UI) در AI SDK پیچیدگی‌های یک رابط چت را در یک هوک به نام `useChat` ساده کرده است.

صفحه‌ی اصلی برنامه خود را (در مسیر `app/(tabs)/index.tsx`) با کد زیر به‌روزرسانی کنید تا فهرستی از پیام‌های چت نمایش داده شود و امکان وارد کردن پیام توسط کاربر وجود داشته باشد:

```js
import { generateAPIUrl } from '@/utils';
import { useChat } from '@ai-sdk/react';
import { fetch as expoFetch } from 'expo/fetch';
import { View, TextInput, ScrollView, Text, SafeAreaView } from 'react-native';

export default function App() {
  const { messages, error, handleInputChange, input, handleSubmit } = useChat({
    fetch: expoFetch as unknown as typeof globalThis.fetch,
    api: generateAPIUrl('/api/chat'),
    onError: error => console.error(error, 'ERROR'),
  });

  if (error) return <Text>{error.message}</Text>;

  return (
    <SafeAreaView style={{ height: '100%' }}>
      <View
        style={{
          height: '95%',
          display: 'flex',
          flexDirection: 'column',
          paddingHorizontal: 8,
        }}
      >
        <ScrollView style={{ flex: 1 }}>
          {messages.map(m => (
            <View key={m.id} style={{ marginVertical: 8 }}>
              <View>
                <Text style={{ fontWeight: 700 }}>{m.role}</Text>
                <Text>{m.content}</Text>
              </View>
            </View>
          ))}
        </ScrollView>

        <View style={{ marginTop: 8 }}>
          <TextInput
            style={{ backgroundColor: 'white', padding: 8 }}
            placeholder="Say something..."
            value={input}
            onChange={e =>
              handleInputChange({
                ...e,
                target: {
                  ...e.target,
                  value: e.nativeEvent.text,
                },
              } as unknown as React.ChangeEvent<HTMLInputElement>)
            }
            onSubmitEditing={e => {
              handleSubmit(e);
              e.preventDefault();
            }}
            autoFocus={true}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}
```

این صفحه از هوک `useChat` استفاده می‌کند که به‌صورت پیش‌فرض، از مسیر POST که قبل‌تر ایجاد کرده بودید، استفاده خواهد کرد.  
. هوک `useChat` چندین تابع و متغیر ارائه می‌دهد:

- `messages`: پیام‌های فعلی چت (آرایه‌ای از آبجکت‌ها با ویژگی‌های `id` , `role` و `parts`).  
- `input`: مقدار فعلی فیلد ورودی کاربر.  
- `handleInputChange` و `handleSubmit`: توابعی برای مدیریت تعاملات کاربر (تایپ در فیلد ورودی و ارسال فرم).

> در قطعه کدهای فوق، به جای `fetch` سنتی در Node از تابع `expo/fetch` استفاده شده است تا امکان استریم‌ پاسخ‌های چت فراهم شود.  
> برای این کار، به Expo نسخه‌ی ۵۲ یا بالاتر نیاز دارید.

### ایجاد API URL Generator

از آنجایی که برای دریافت پاسخ‌های استریمی، به جای تابع `fetch` از `expo/fetch` استفاده می‌شود، نیاز است تا در فایل `utils.ts` یک API URL Generator ایجاد شود تا بسته به محیط کلاینت (مثلاً وب یا موبایل) مطمئن شوید که از پایه URL و فرمت صحیح استفاده می‌شود:

```js
import Constants from 'expo-constants';

export const generateAPIUrl = (relativePath: string) => {
  const origin = Constants.experienceUrl.replace('exp://', 'http://');

  const path = relativePath.startsWith('/') ? relativePath : `/${relativePath}`;

  if (process.env.NODE_ENV === 'development') {
    return origin.concat(path);
  }

  if (!process.env.EXPO_PUBLIC_API_BASE_URL) {
    throw new Error(
      'EXPO_PUBLIC_API_BASE_URL environment variable is not defined',
    );
  }

  return process.env.EXPO_PUBLIC_API_BASE_URL.concat(path);
};
```

utility function فوق، وظیفه‌ی تولید URL را هم در محیط development و هم در محیط production بر عهده دارد و اطمینان حاصل می‌کند که فراخوانی‌های API شما در دستگاه‌ها و پیکربندی‌های مختلف به‌درستی کار می‌کنند.

> پیش از استقرار پروژه در محیط production، باید متغیر محیطی `EXPO_PUBLIC_API_BASE_URL` را در محیط production تنظیم کنید.  
> این متغیر باید به Base URL سرور API شما اشاره داشته باشد.

## اجرای برنامه

با انجام مراحل فوق، اکنون تمام اجزای لازم برای چت‌بات خود را ساخته‌اید. برای اجرای برنامه، از دستور زیر استفاده کنید:

```js
pnpm expo
```

سپس مرورگر خود را باز کرده و به آدرس `http://localhost:8081` بروید. باید یک فیلد ورودی مشاهده کنید. یک پیام وارد کنید تا آن را امتحان کنید و ببینید چت‌بات هوش مصنوعی چگونه به‌صورت بلادرنگ پاسخ می‌دهد:

![work with chatbot in expo](https://media.liara.ir/ai/ai-sdk/expo/work-with-chatbot.png)

## بهبود چت‌بات با Toolها

در حالی که LLMها توانایی فوق‌العاده‌ای در تولید متن دارند، اما در انجام Taskهای گسسته (مانند ریاضیات) و تعامل با دنیای خارج (مانند دریافت وضعیت آب‌وهوا) با چالش‌هایی مواجه هستند. اینجاست که Toolها وارد عمل می‌شوند.

Toolها، Actionهایی هستند که یک LLM می‌تواند آن‌ها را فراخوانی کند. نتایج حاصل از اجرای این Toolها می‌توانند به مدل بازگردانده شوند تا در تولید پاسخ بعدی در نظر گرفته شوند.  
برای مثال، اگر کاربری درباره‌ی وضعیت فعلی آب‌وهوا سؤال کند، بدون استفاده از ابزارها، مدل تنها می‌تواند اطلاعات عمومی بر پایه‌ی داده‌های آموزشی‌اش ارائه دهد. اما با استفاده از یک ابزار آب‌وهوا، می‌تواند اطلاعات به‌روز و مختص مکان مشخص کاربر را دریافت کرده و ارائه دهد.

در ادامه، خواهید آموخت که چگونه می‌توانید با اضافه کردن یک Tool ساده مربوط به وضعیت آب‌وهوا، چت‌بات خود را بهبود دهید. 

### به‌روزرسانی API Route

مانند قطعه کد زیر، به فایل `app/api/chat+api.ts` خود، Tool مربوط به وضعیت آب‌وهوا را اضافه کنید:

```js
import { createOpenAI } from '@ai-sdk/openai';
import { streamText, tool } from 'ai';
import { z } from 'zod';

const my_model = createOpenAI({
  baseURL: process.env.BASE_URL,
  apiKey: process.env.LIARA_API_KEY,
});

export async function POST(req: Request) {
  const { messages } = await req.json();

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

  return result.toDataStreamResponse({
    headers: {
      'Content-Type': 'application/octet-stream',
      'Content-Encoding': 'none',
    },
  });
}
```

در قطعه کد به‌روزرسانی‌شده فوق:

۱. تابع `tool` از پکیج `ai` و نیز `z` از کتابخانه‌ی `zod` برای اعتبارسنجی schema، وارد شده است.

۲. یک object به نام `tools` تعریف شده است که شامل یک tool آب‌وهوا (weather) است. این Tool:

- دارای یک توضیح (description) است که به مدل کمک می‌کند بفهمد چه زمانی باید از آن استفاده کند.  
- پارامترهایی را با استفاده از Zod Schema تعریف می‌کند و مشخص می‌کند که برای اجرای این Tool، یک string به‌عنوان `location` مورد نیاز است. مدل تلاش می‌کند این پارامتر را از متن مکالمه استخراج کند. اگر نتواند، از کاربر برای دریافت اطلاعات موردنیاز، سؤال خواهد کرد.  
- دارای یک تابع execute است که عملیات فرضی دریافت داده‌های آب‌وهوا را انجام می‌دهد (در این مثال، دمایی تصادفی بازمی‌گردد). این تابع به‌صورت asynchronous روی سرور اجرا می‌شود، بنابراین می‌توانید از APIهای خارجی داده‌های واقعی را واکشی کنید.

اکنون چت‌بات شما می‌تواند اطلاعات آب‌وهوا را برای هر مکانی که کاربر مشخص کند، واکشی کند. زمانی که مدل تشخیص دهد باید از Tool آب‌وهوا استفاده کند، یک tool call با پارامترهای لازم تولید می‌کند. سپس تابع execute به‌صورت خودکار اجرا می‌شود و نتیجه‌ی آن از طریق بخش `tool-invocations` موجود در آرایه‌ی `message.parts` قابل دسترسی خواهد بود.

> ممکن است لازم باشد سرور development خود را ری‌استارت کنید تا تغییرات اعمال شوند.

### به‌روزرسانی رابط کاربری

برای به‌روزرسانی رابط کاربری و نمایش `tool invocation`، باید فایل `app/(tabs)/index.tsx` را تغییر دهید تا پیام‌هایی که شامل Tool هستند نیز، به درستی نمایش داده شوند.  
در ادامه، نمونه کدی آورده شده که این قابلیت را اضافه می‌کند:

```js
import { generateAPIUrl } from '@/utils';
import { useChat } from '@ai-sdk/react';
import { fetch as expoFetch } from 'expo/fetch';
import { View, TextInput, ScrollView, Text, SafeAreaView } from 'react-native';

export default function App() {
  const { messages, error, handleInputChange, input, handleSubmit } = useChat({
    fetch: expoFetch as unknown as typeof globalThis.fetch,
    api: generateAPIUrl('/api/chat'),
    onError: error => console.error(error, 'ERROR'),
  });

  if (error) return <Text>{error.message}</Text>;

  return (
    <SafeAreaView style={{ height: '100vh' }}>
      <View
        style={{
          height: '95%',
          display: 'flex',
          flexDirection: 'column',
          paddingHorizontal: 8,
        }}
      >
        <ScrollView style={{ flex: 1 }}>
          {messages.map(m => (
            <View key={m.id} style={{ marginVertical: 8 }}>
              <View>
                <Text style={{ fontWeight: 700 }}>{m.role}</Text>
                {m.toolInvocations ? (
                  <Text>{JSON.stringify(m.toolInvocations, null, 2)}</Text>
                ) : (
                  <Text>{m.content}</Text>
                )}
              </View>
            </View>
          ))}
        </ScrollView>

        <View style={{ marginTop: 8 }}>
          <TextInput
            style={{ backgroundColor: 'white', padding: 8 }}
            placeholder="Say something..."
            value={input}
            onChange={e =>
              handleInputChange({
                ...e,
                target: {
                  ...e.target,
                  value: e.nativeEvent.text,
                },
              } as unknown as React.ChangeEvent<HTMLInputElement>)
            }
            onSubmitEditing={e => {
              handleSubmit(e);
              e.preventDefault();
            }}
            autoFocus={true}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}
```

> ممکن است لازم باشد سرور development خود را ری‌استارت کنید تا تغییرات اعمال شوند.

با این تغییر، رابط کاربری به‌گونه‌ای به‌روزرسانی می‌شود که بتواند بخش‌های مختلف پیام را مدیریت کند. برای بخش‌های متنی، همانند گذشته، محتوای متن نمایش داده می‌شود. برای tool callها، یک JSON از tool calling و نتیجه آن نشان داده خواهد شد.  
اکنون، زمانی که درباره‌ی وضعیت هوا سوال می‌پرسید، tool calling و نتیجه‌ی آن در رابط چت شما، نمایش داده می‌شود:

![work with chatbot in expo with tools](https://media.liara.ir/ai/ai-sdk/expo/working-with-chatbot-using-tools.png)

## فعال‌سازی فراخوانی چندمرحله‌ای Toolها

ممکن است متوجه شده باشید که با وجود نمایش نتایج Toolها در رابط چت، مدل از این اطلاعات برای پاسخ به پرسش اصلی شما، استفاده نمی‌کند. دلیل آن این است که به‌محض اینکه مدل یک tool call تولید می‌کند، از نظر فنی، فرآیند تولید متن را کامل کرده است.

برای حل این مسئله، می‌توانید با استفاده از گزینه‌ی `maxSteps` در هوک `useChat`، فراخوانی چندمرحله‌ای Toolها را فعال کنید. این قابلیت، به‌طور خودکار، نتایج Tool را دوباره به مدل ارسال می‌کند تا یک مرحله‌ی تولید اضافی را آغاز کند. در این حالت، شما می‌خواهید مدل با استفاده از نتیجه‌ی Tool هواشناسی، به سوال شما پاسخ دهد.

### به‌روزرسانی کد سمت کلاینت

فایل `app/(tabs)/index.tsx` خود را ویرایش کرده تا گزینه‌ی `maxSteps` را به آن، اضافه کنید:

```js
import { useChat } from '@ai-sdk/react';
// ... rest of your imports

export default function App() {
  const { messages, error, handleInputChange, input, handleSubmit } = useChat({
    fetch: expoFetch as unknown as typeof globalThis.fetch,
    api: generateAPIUrl('/api/chat'),
    onError: error => console.error(error, 'ERROR'),
    maxSteps: 5,
  });

  // ... rest of your component code
}
```

به مرورگر بازگردید و درباره‌ی وضعیت هوای یک مکان سوال بپرسید. حالا باید ببینید که مدل از نتایج Tool هواشناسی برای پاسخ به سوال شما استفاده می‌کند.  
با تنظیم مقدار `maxSteps` روی ۵، این امکان را فراهم می‌کنید که مدل حداکثر تا ۵ مرحله، پاسخ جدیدی را تولید کند. این قابلیت، تعاملات پیچیده‌تر را ممکن می‌سازد و به مدل اجازه می‌دهد اطلاعات را طی چند مرحله جمع‌آوری و پردازش کند (در صورت نیاز). می‌توانید این قابلیت را در عمل مشاهده کنید؛ کافیست Tool دیگری اضافه کنید که دما را از فارنهایت به سلسیوس تبدیل کند.

### به‌روزرسانی API Route

Tool جدید برای تبدیل دما از فارنهایت به سلسیوس را به فایل `app/api/chat+api.ts` خود، مانند شکل زیر، اضافه کنید:

```js
import { createOpenAI } from '@ai-sdk/openai';
import { streamText, tool } from 'ai';
import { z } from 'zod';

const my_model = createOpenAI({
  baseURL: process.env.BASE_URL,
  apiKey: process.env.LIARA_API_KEY,
});

export async function POST(req: Request) {
  const { messages } = await req.json();

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

  return result.toDataStreamResponse({
    headers: {
      'Content-Type': 'application/octet-stream',
      'Content-Encoding': 'none',
    },
  });
}
```

اکنون، وقتی می‌پرسید: «هوای تهران چند درجه سلسیوس است؟»، باید یک پاسخ کامل‌تر را مشاهده کنید.

در برنامه فوق: 

- مدل، Tool هواشناسی را برای دریافت وضعیت هوای تهران، فراخوانی می‌کند.  
- نتیجه‌ی Tool نمایش داده می‌شود.  
- سپس، مدل، Tool تبدیل دما را فراخوانی می‌کند تا دما را از فارنهایت به سلسیوس تبدیل کند.  
- در نهایت، مدل از این اطلاعات استفاده می‌کند تا پاسخی طبیعی و قابل فهم درباره‌ی وضعیت هوای تهران، ارائه دهد.

این رویکرد چندمرحله‌ای به مدل اجازه می‌دهد تا اطلاعات را جمع‌آوری کرده و از آن‌ها برای ارائه‌ی پاسخ‌هایی دقیق‌تر و مرتبط‌تر استفاده کند؛ در نتیجه، چت‌بات شما به‌طور قابل توجهی کاربردی‌تر خواهد شد.

این مثال ساده نشان می‌دهد که Toolها چگونه می‌توانند قابلیت‌های مدل را گسترش دهند. شما می‌توانید Toolهای پیچیده‌تری ایجاد کنید که با APIهای واقعی، پایگاه‌های داده یا سایر سیستم‌های خارجی ادغام شوند. این کار به مدل این امکان را می‌دهد تا به داده‌های واقعی و به‌روز دسترسی پیدا کرده و آن‌ها را در زمان واقعی، پردازش کند. Toolها پلی هستند میان محدودیت دانش مدل و اطلاعات جاری دنیا.

> پروژه نهایی مورد بررسی در این آموزش، در [گیت‌هاب لیارا](https://github.com/liara-cloud/ai-sdk-examples/tree/master/Expo-ChatBot) موجود است که می‌توانید از آن، استفاده کنید.

## Polyfillها

برخی از توابعی که به‌صورت داخلی توسط AI SDK استفاده می‌شوند، ممکن است بسته به پیکربندی شما و پلتفرم هدف، در محیط اجرایی Expo در دسترس نباشند.  
برای رفع این مشکل، در ابتدا، پکیج‌های زیر موردنیاز را با اجرای دستور زیر، نصب کنید: 

```js
pnpm add @ungap/structured-clone @stardazed/streams-text-encoding
```

سپس یک فایل جدید به اسم `polyfills.js` در مسیر اصلی پروژه‌ی خود ایجاد کرده و Polyfillهای زیر را در آن قرار دهید:

```js
import { Platform } from 'react-native';
import structuredClone from '@ungap/structured-clone';

if (Platform.OS !== 'web') {
  const setupPolyfills = async () => {
    const { polyfillGlobal } = await import(
      'react-native/Libraries/Utilities/PolyfillFunctions'
    );

    const { TextEncoderStream, TextDecoderStream } = await import(
      '@stardazed/streams-text-encoding'
    );

    if (!('structuredClone' in global)) {
      polyfillGlobal('structuredClone', () => structuredClone);
    }

    polyfillGlobal('TextEncoderStream', () => TextEncoderStream);
    polyfillGlobal('TextDecoderStream', () => TextDecoderStream);
  };

  setupPolyfills();
}

export {};
```

در نهایت، polyfillها را در فایل `layout.tsx_` خود، وارد کنید :

```js
import '@/polyfills';
```

## all links

[All links of docs](https://docs.liara.ir/all-links-llms.txt)
