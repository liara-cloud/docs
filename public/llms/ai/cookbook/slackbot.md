Original link: https://docs.liara.ir/ai/cookbook/slackbot/

# ساخت ربات Slack با AI SDK

در این راهنما، می‌آموزید که چگونه یک ربات Slack با استفاده از AI SDK بسازید. این ربات قادر خواهد بود به پیام‌های مستقیم و منشن‌های داخل کانال‌ها پاسخ دهد، آن هم با توجه به context موجود در رشته‌گفتگو (thread).

## راه‌اندازی Slack app

قبل از شروع به ساخت، شما باید یک Slack app بسازید و آن را پیکربندی کنید:

۱. وارد [api.slack.com/apps](https://api.slack.com/apps) شوید

۲. بر روی گزینه **Create New App** کلیک کنید و گزینه **From scratch** را انتخاب کنید

۳. یک نام برای اپلیکیشن خود وارد کرده و workspace مورد نظر را انتخاب کنید؛ در نهایت بر روی گزینه **Create App** کلیک کنید

۴. در قسمت **OAuth & Permissions** در بخش **Scopes**، محدوده‌های دسترسی زیر را به ربات اضافه کنید:

- `app_mentions:read`
- `chat:write`
- `im:history`
- `im:write`
- `assistant:write`

۵. در بخش **OAuth Tokens**، برنامه را در workspace خود، نصب کنید 

۶. مقدار **Bot User OAuth Token** در بخش **OAuth Tokens** و مقدار **Signing Secret** در قسمت **Basic Information** را برای استفاده در مراحل بعدی، ذخیره کنید 

۷. در قسمت **App Home** در بخش **Show Tabs** در زیر بخش **Chat Tab**، تیک گزینه **Allow users to send Slash commands and messages from the chat tab** را بزنید

[Video link](https://media.liara.ir/ai/ai-sdk/cookbook/slackbot/create-slack-ai-bot.mp4)

## راه‌اندازی پروژه

این پروژه، از فناوری‌های زیر استفاده خواهد کرد: 

- [AI SDK](https://ai-sdk.dev/docs/introduction)
- [Slack Web API](https://api.slack.com/web)
- [Express.js](https://expressjs.com/)
- [سرویس هوش مصنوعی لیارا](https://liara.ir/products/ai/)
- [هاست NodeJS لیارا](https://liara.ir/landing/%D9%87%D8%A7%D8%B3%D8%AA-%D9%86%D9%88%D8%AF-%D8%AC%DB%8C-%D8%A7%D8%B3-node/)

## شروع به کار

۱. یک کلون از [ریپازیتوری AI SDK Examples](https://github.com/liara-cloud/ai-sdk-examples) تهیه کنید و وارد دایرکتوری `Slack-Bot` شوید:

```js
git clone https://github.com/liara-cloud/ai-sdk-examples.git
cd ai-sdk-examples/Slack-Bot
```

۲. وابستگی‌های برنامه را با اجرای دستور زیر نصب کنید: 

```js
npm install
```

## ساختار پروژه

ساختار پروژه مذکور، به شکل زیر است: 

- ابزارهای مربوط به Slack (در مسیر `lib/slack-utils.ts`) که شامل توابعی برای اعتبارسنجی درخواست‌های ورودی، تبدیل threadهای گفت‌وگو Slack به قالب سازگار با AI SDK، و دریافت شناسه‌ی کاربری Slackbot می‌باشد
- فایل‌هایی برای مدیریت انواع مختلف رویدادهای Slack (در مسیرهای `lib/handle-messages.ts` و `lib/handle-app-mention.ts`)
- یک API endpoint (از نوع `POST`) برای رویدادهای Slack (در مسیر `api/events.ts`)
- یک entry point برای اجرای سرور NodeJS با استفاده از فریم‌ورک Express (مسیر `server.ts`)
- یک فایل برای تولید پاسخ توسط مدل هوش مصنوعی از طریق AI SDK (در مسیر `lib/generate-response.ts`)

## Event Handler

ابتدا بیایید نگاهی به مسیر API تعریف‌شده در فایل `api/events.ts` بیندازیم: 

```js
import type { SlackEvent } from "@slack/web-api";
import {
  assistantThreadMessage,
  handleNewAssistantMessage,
} from "../lib/handle-messages";
import { handleNewAppMention } from "../lib/handle-app-mention";
import { verifyRequest, getBotId } from "../lib/slack-utils";
import type { Request, Response } from "express";

// Express handler for POST /api/events
export async function eventsHandler(req: Request, res: Response) {
  // Express provides parsed body if express.json() middleware is used
  const rawBody = JSON.stringify(req.body);
  const payload = req.body;
  const requestType = payload.type as "url_verification" | "event_callback";

  // See https://api.slack.com/events/url_verification
  if (requestType === "url_verification") {
    return res.status(200).send(payload.challenge);
  }

  // For Slack signature verification, we need the raw body and headers
  // The verifyRequest function may need to be updated to work with Express
  const valid = await verifyRequest({
    requestType,
    request: req,
    rawBody,
  });
  if (!valid) {
    return res.status(400).send("Invalid request");
  }

  try {
    const botUserId = await getBotId();

    const event = payload.event as SlackEvent;

    if (event.type === "app_mention") {
      void handleNewAppMention(event, botUserId);
    }

    if (event.type === "assistant_thread_started") {
      void assistantThreadMessage(event);
    }

    if (
      event.type === "message" &&
      !event.subtype &&
      event.channel_type === "im" &&
      !event.bot_id &&
      !event.bot_profile &&
      event.bot_id !== botUserId
    ) {
      void handleNewAssistantMessage(event, botUserId);
    }

    return res.status(200).send("Success!");
  } catch (error) {
    console.error("Error generating response", error);
    return res.status(500).send("Error generating response");
  }
}
```

در قطعه کد فوق: 

- ابتدا بررسی می‌شود که آیا درخواست برای تایید URL است یا شامل یک رویداد واقعی از Slack
- اگر Slack درخواست تأیید URL فرستاده باشد، پاسخ مناسب برای تأیید ارسال می‌شود
- اعتبار درخواست بررسی می‌شود تا از معتبر بودن آن اطمینان حاصل گردد
- اگر درخواست معتبر باشد، داده‌ی مربوط به رویداد از آن استخراج می‌شود
- بر اساس نوع رویداد (مثل منشن شدن ربات، شروع یک رشته گفتگو یا پیام مستقیم)، تابع مربوط به آن اجرا می‌شود
- در پایان، پاسخ موفق یا خطا به Slack برگردانده می‌شود

## Event Handlers

اکنون بیایید ببینیم هر نوع رویداد چگونه مدیریت می‌شود.

## منشن‌های برنامه

زمانی که یک کاربر ربات شما را در یک کانال منشن می‌کند، رویداد `app_mention` فعال می‌شود. تابع `handleNewAppMention` در فایل `handle-app-mention.ts` مسئول پردازش این نوع منشن‌ها است.  
عملکرد این تابع به صورت زیر است:

۱. ابتدا بررسی می‌شود که آیا پیام از سوی یک ربات ارسال شده یا خیر، تا از ایجاد حلقه‌های بی‌پایان پاسخ‌دهی جلوگیری شود

۲. یک تابع به‌روزرسانی وضعیت ساخته می‌شود تا نشان دهد ربات در حال «فکر کردن» است.

3. اگر منشن در قالب یک thread باشد، تاریخچه‌ی آن thread واکشی می‌شود.

۴. با استفاده از تابع `generateResponse`، محتوای پیام برای LLM ارسال می‌شود.

۵. پیام اولیه‌ای که نشان‌دهنده‌ی «thinking» بود، با پاسخ تولیدشده توسط هوش مصنوعی به‌روزرسانی می‌شود.

در ادامه کد مربوطه در فایل `handle-app-mention.ts` قرار گرفته است:

```js
import { AppMentionEvent } from "@slack/web-api";
import { client, getThread } from "./slack-utils";
import { generateResponse } from "./generate-response";

const updateStatusUtil = async (
  initialStatus: string,
  event: AppMentionEvent,
) => {
  const initialMessage = await client.chat.postMessage({
    channel: event.channel,
    thread_ts: event.thread_ts ?? event.ts,
    text: initialStatus,
  });

  if (!initialMessage || !initialMessage.ts)
    throw new Error("Failed to post initial message");

  const updateMessage = async (status: string) => {
    await client.chat.update({
      channel: event.channel,
      ts: initialMessage.ts as string,
      text: status,
    });
  };
  return updateMessage;
};

export async function handleNewAppMention(
  event: AppMentionEvent,
  botUserId: string,
) {
  console.log("Handling app mention");
  if (event.bot_id || event.bot_id === botUserId || event.bot_profile) {
    console.log("Skipping app mention");
    return;
  }

  const { thread_ts, channel } = event;
  const updateMessage = await updateStatusUtil("is thinking...", event);

  if (thread_ts) {
    const messages = await getThread(channel, thread_ts, botUserId);
    const result = await generateResponse(messages, updateMessage);
    updateMessage(result);
  } else {
    const result = await generateResponse(
      [{ role: "user", content: event.text }],
      updateMessage,
    );
    updateMessage(result);
  }
}
```

## پیام‌های thread دستیار

زمانی که یک کاربر یک thread را با دستیار شما آغاز می‌کند، رویداد `assistant_thread_started` فعال می‌شود. تابع `assistantThreadMessage` در فایل `handle-messages.ts` مسئول مدیریت این نوع رویداد است.  
عملکرد این تابع به صورت زیر است:

- ارسال پیام خوش‌آمدگویی در ابتدای رشته
- ایجاد پیشنهادهای آماده (Suggested Prompts) برای کمک به کاربران جهت شروع تعامل با دستیار

در ادامه کد مربوط به تابع `assistantThreadMessage` آمده است:

```js
export async function assistantThreadMessage(
  event: AssistantThreadStartedEvent,
) {
  const { channel_id, thread_ts } = event.assistant_thread;
  console.log(`Thread started: ${channel_id} ${thread_ts}`);
  console.log(JSON.stringify(event));

  await client.chat.postMessage({
    channel: channel_id,
    thread_ts: thread_ts,
    text: "Hello, I'm an AI assistant built with the AI SDK by Vercel!",
  });

  await client.assistant.threads.setSuggestedPrompts({
    channel_id: channel_id,
    thread_ts: thread_ts,
    prompts: [
      {
        title: "Get the weather",
        message: "What is the current weather in London?",
      },
      {
        title: "Get the news",
        message: "What is the latest Premier League news from the BBC?",
      },
    ],
  });
}
```

## پیام‌های مستقیم (Direct Messages)

برای ارسال پیام‌های مستقیم (DM) به ربات، رویداد `message` فعال می‌شود. این رویداد توسط تابع `handleNewAssistantMessage` در فایل `handle-messages.ts` مدیریت می‌شود.  
عملکرد این تابع به صورت زیر است:

- بررسی اینکه پیام از یک ربات نیست تا از پاسخ‌دهی غیرضروری جلوگیری شود
- به‌روزرسانی وضعیت، برای نمایش اینکه پاسخ در حال تولید است
- بازیابی تاریخچه‌ی گفت‌وگو جهت ارائه‌ی Context به مدل
- فراخوانی LLM با استفاده از محتوای گفت‌وگو
- ارسال پاسخ LLM در thread مرتبط با پیام کاربر

در ادامه کد مربوط به تابع `handleNewAssistantMessage` آمده است:

```js
export async function handleNewAssistantMessage(
  event: GenericMessageEvent,
  botUserId: string,
) {
  if (
    event.bot_id ||
    event.bot_id === botUserId ||
    event.bot_profile ||
    !event.thread_ts
  )
    return;

  const { thread_ts, channel } = event;
  const updateStatus = updateStatusUtil(channel, thread_ts);
  updateStatus("is thinking...");

  const messages = await getThread(channel, thread_ts, botUserId);
  const result = await generateResponse(messages, updateStatus);

  await client.chat.postMessage({
    channel: channel,
    thread_ts: thread_ts,
    text: result,
    unfurl_links: false,
    blocks: [
      {
        type: "section",
        text: {
          type: "mrkdwn",
          text: result,
        },
      },
    ],
  });

  updateStatus("");
}
```

## منطق AI

هسته‌ی اصلی برنامه‌ی ما تابع `generateResponse` است که در فایل `lib/generate-response.ts` قرار گرفته است. این تابع وظیفه دارد پیام‌های دریافتی را پردازش کرده و با استفاده از AI SDK پاسخ مناسب تولید کند.  
نحوه‌ی پیاده‌سازی تابع `generateResponse` به شرح زیر است:

```js
import { createOpenAI } from '@ai-sdk/openai';
import { generateText } from 'ai';
import type { CoreMessage } from 'ai';

const my_model = createOpenAI({
  baseURL: process.env.BASE_URL,
  apiKey: process.env.LIARA_API_KEY,
});

export const generateResponse = async (
  messages: CoreMessage[],
  updateStatus?: (status: string) => void,
) => {
  const { text } = await generateText({
    model: my_model('openai/gpt-4o-mini'),
    system: `You are a Slack bot assistant. Keep your responses concise and to the point.
    - Do not tag users.
    - Current date is: ${new Date().toISOString().split('T')[0]}`,
    messages,
  });

  // Convert markdown to Slack mrkdwn format
  return text.replace(/\[(.*?)\]\((.*?)\)/g, '<$2|$1>').replace(/\*\*/g, '*');
};
```

در قطعه کد فوق، `BASE_URL` آدرس سرویس هوش مصنوعی است که از لیارا، تهیه کرده‌اید و  
مقدار `LIARA_API_KEY`، [کلید API کنسول](https://docs.liara.ir/references/api/about/#api-access-key) است.  
در قطعه کد فوق: 

- از تابع `generateText` در AI SDK برای فراخوانی مدل `openai/gpt-4o-mini` استفاده می‌شود
- یک system prompt ارائه شده است تا رفتار مدل را هدایت کند
- پاسخ نهایی به فرمت markdown سازگار با Slack قالب‌بندی شده است

## ارتقا LLM با Toolها

قدرت واقعی AI SDK در Toolهایی نهفته است که به ربات شما امکان انجام عملیات را می‌دهند. بیایید دو ابزار کاربردی به آن اضافه کنیم:

```js
import { createOpenAI } from '@ai-sdk/openai';
import { generateText, tool } from 'ai';
import { z } from 'zod';
import type { CoreMessage } from 'ai';

const my_model = createOpenAI({
  baseURL: process.env.BASE_URL,
  apiKey: process.env.LIARA_API_KEY,
});

export const generateResponse = async (
  messages: CoreMessage[],
  updateStatus?: (status: string) => void,
) => {
  const { text } = await generateText({
    model: my_model('openai/gpt-4o-mini:online'),
    system: `You are a Slack bot assistant. Keep your responses concise and to the point.
    - Do not tag users.
    - Current date is: ${new Date().toISOString().split('T')[0]}
    - Always include sources in your final response if you use web search.`,
    messages,
    maxSteps: 10,
    tools: {
      getWeather: tool({
        description: 'Get the current weather at a location',
        parameters: z.object({
          latitude: z.number(),
          longitude: z.number(),
          city: z.string(),
        }),
        execute: async ({ latitude, longitude, city }) => {
          updateStatus?.(`is getting weather for ${city}...`);

          const response = await fetch(
            `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,weathercode,relativehumidity_2m&timezone=auto`,
          );

          const weatherData = await response.json();
          return {
            temperature: weatherData.current.temperature_2m,
            weatherCode: weatherData.current.weathercode,
            humidity: weatherData.current.relativehumidity_2m,
            city,
          };
        },
      }),
    },
  });

  // Convert markdown to Slack mrkdwn format
  return text.replace(/\[(.*?)\]\((.*?)\)/g, '<$2|$1>').replace(/\*\*/g, '*');
};
```

در پیاده‌سازی به‌روزشده فوق، یک Tool به نام `getWeather` اضافه شده است که داده‌های هواشناسی را برای یک مکان مشخص واکشی می‌کند  
همچنین، برای اینکه مدل در صورت نیاز، عملیات جستجو در وب را انجام دهد، تگ `online` در تعریف مدل، اضافه شده است. در سرویس هوش مصنوعی لیارا، با اضافه کردن این تگ به مدل، می‌توانید از سرویس Exa موجود در مدل، استفاده کنید.  

همچنین مقدار `maxSteps: 10` تنظیم شده است تا امکان گفت‌وگوهای چندمرحله‌ای (multi-step conversations) فراهم گردد. این ویژگی به‌طور خودکار نتایج اToolها را به مدل بازمی‌گرداند تا در صورت نیاز، فراخوانی Toolهای بیشتری انجام گیرد یا پاسخ نهایی تولید شود.

## نحوه‌ی عملکرد

زمانی که یک کاربر با ربات شما تعامل برقرار می‌کند:

۱. رویداد Slack دریافت و توسط API endpoint شما پردازش می‌شود.

۲. پیام کاربر و تاریخچه‌ی Thread به تابع `generateResponse` ارسال می‌شود.

۳. AI SDK پیام را پردازش می‌کند و در صورت نیاز ممکن است Toolهایی را فراخوانی کند.

۴. پاسخ تولیدشده قالب‌بندی می‌شود تا با فرمت مورد استفاده در Slack سازگار باشد، سپس برای کاربر ارسال می‌شود.

Toolها به‌صورت خودکار و بر اساس نیت کاربر فعال می‌شوند. برای مثال، اگر کاربر بپرسد: "هوای تهران چطور است؟"، مدل مراحل زیر را انجام می‌دهد: 

۱. درخواست را به‌عنوان یک query هواشناسی تشخیص می‌دهد.

۲. ابزار `getWeather` را با مختصات تهران، فراخوانی می‌کند.

۳. داده‌های هواشناسی را پردازش می‌کند.

۴. یک پاسخ نهایی تولید می‌کند و به سؤال کاربر پاسخ می‌دهد.

## ساخت و استقرار برنامه

اکنون، نوبت استقرار برنامه در لیارا است. مراحل زیر را دنبال کنید: 

۱. نصب Liara CLI  
ترمینال را باز کنید و با اجرای دستور زیر، ابزار Liara CLI را بر روی سیستم خود نصب کنید:

```bash
npm install -g @liara/cli
```

۲. لاگین به حساب کاربری  
با اجرای دستور زیر، وارد حساب کاربری خود در لیارا، شوید:

```bash
liara login
```

۳. ایجاد برنامه  
با اجرای دستور زیر، برنامه NodeJS خود را ایجاد کنید:

```bash
liara create
```

۴. تنظیم متغیرهای محیطی  
طبق [مستندات تنظیم متغیرهای محیطی](https://docs.liara.ir/paas/details/envs/#add-envs)، متغیرهای زیر را با مقدار واقعی‌شان، به برنامه خود اضافه کنید:

```json
SLACK_BOT_TOKEN=xxxxxxxxx
SLACK_SIGNING_SECRET=xxxxxxxxx
BASE_URL=xxxxxxxxx
LIARA_API_KEY=xxxxxxxxx
```

۵. استقرار برنامه  
با اجرای دستور زیر در مسیر اصلی پروژه، برنامه خود را  در لیارا مستقر کنید:

```bash
liara deploy --platform=node --port=3000
```

۶. اتصال مدل به Slack App  
مجدداً وارد [api.slack.com/apps](https://api.slack.com/apps) شوید و به قسمت **Event Subscriptions** بروید. **Enable Events** را بزنید و URL برنامه NodeJS خود را به همراه `api/events/` در فیلد باز شده، قرار دهید. مثلاً اگر URL برنامه NodeJS شما `https://noda.liara.run` باشد، باید URL زیر را در فیلد باز شده، قرار دهید:

```bash
https://noda.liara.run/api/events
```

در نهایت، بر روی گزینه **Save Changes** کلیک کنید تا تغییرات، ذخیره شوند.  

![enable events in slack app](https://media.liara.ir/ai/ai-sdk/cookbook/slackbot/enable-events.png)

۷. تنظیم پارامترها  
در همان صفحه **Events Subscription**، بر روی بخش **Subscribe to bot events** کلیک کنید و رویدادهای زیر را، فعال کنید:

- `app_mention`
- `assistant_thread_started`
- `message:im`

در نهایت، وارد workspace خود در Slack شوید و app را با ارسال یک پیام به ربات، تست کنید.  

![talking with bot in slack](https://media.liara.ir/ai/ai-sdk/cookbook/slackbot/talking-with-bot-in-slack.png)

## گام‌های بعدی

شما یک چت‌بات Slack ساخته‌اید که توسط AI SDK پشتیبانی می‌شود! در ادامه برخی راه‌های توسعه‌ی آن آورده شده است:

- افزودن حافظه برای کاربران خاص به‌منظور ارائه‌ی context تعاملات قبلی به LLM
- پیاده‌سازی Toolهای بیشتر مانند پرس‌وجوی دیتابیس یا جستجو در پایگاه دانش
- افزودن پشتیبانی از قالب‌بندی پیشرفته‌ی پیام با استفاده از Blockها
- افزودن تحلیل‌گر برای ردیابی الگوهای استفاده

> در محیط Production، توصیه می‌شود یک سیستم queueing پیشرفته پیاده‌سازی شود تا از پردازش صحیح پیام‌ها اطمینان حاصل شود.

## all links

[All links of docs](https://docs.liara.ir/all-links-llms.txt)
