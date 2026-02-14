Original link: https://docs.liara.ir/ai/cookbook/translator-telegrambot/

# ساخت ربات مترجم تلگرام با AI SDK

در این راهنما، می‌آموزید که چگونه یک ربات تلگرام بالا بیاورید که با استفاده از AI SDK و سرویس هوش مصنوعی لیارا، عملیات ترجمه متن را انجام می‌دهد. این ربات به واسطه استفاده از الگوی ارزیابی 
می‌تواند بهترین جواب ممکن را برای ترجمه، برگرداند. همچنین، ممکن است توضیحاتی در مورد متن ترجمه شده، داشته باشد.

## راه‌اندازی ربات تلگرام

قبل از شروع به ساخت پروژه، شما باید یک ربات تلگرام بسازید و آن را پیکربندی کنید:

۱. وارد اکانت مدنظرتان در تلگرام شوید، در بخش **search**، عبارت `botfather@` را جستجو کنید. نتیجه اصلی را انتخاب و آن را `start` کنید.

۲. عبارت `newbot/` را به ربات ارسال کنید، سپس یک نام برای ربات خود انتخاب کنید و آن را ارسال کنید.

۳. پس از انتخاب نام برای ربات تلگرام خود، باید شناسه ربات را انتخاب کنید؛ در نظر داشته باشید که انتهای شناسه ربات، باید به `bot` ختم شود، به‌عنوان مثال: `myGoodBot` یا `my_good_bot`. پس از انتخاب شناسه، آن را به ربات، ارسال کنید.

۴. با انجام گام‌های فوق، ربات‌تان ساخته می‌شود و یک `token` به شما تعلق می‌گیرد. توکن را برای مراحل بعدی، ذخیره کنید.

[Video link](https://media.liara.ir/ai/ai-sdk/cookbook/translator-telegrambot/create-telegram-bot.mp4)

## راه‌اندازی پروژه
این پروژه، از فناوری‌های زیر استفاده خواهد کرد: 

- [AI SDK](https://ai-sdk.dev/docs/introduction)
- [Telegram API](https://api.slack.com/web)
- [سرویس هوش مصنوعی لیارا](https://liara.ir/products/ai/)
- [هاست NodeJS لیارا](https://liara.ir/landing/%D9%87%D8%A7%D8%B3%D8%AA-%D9%86%D9%88%D8%AF-%D8%AC%DB%8C-%D8%A7%D8%B3-node/)

## شروع به کار

۱. یک کلون از [ریپازیتوری AI SDK Examples](https://github.com/liara-cloud/ai-sdk-examples) تهیه کنید و وارد دایرکتوری `Telegram-Bot` شوید:

```js
git clone https://github.com/liara-cloud/ai-sdk-examples.git
cd ai-sdk-examples/Telegram-Bot
```

۲. وابستگی‌های برنامه را با اجرای دستور زیر نصب کنید: 

```js
npm install
```

## ساختار پروژه
ساختار پروژه مذکور، به شکل زیر است: 

- فایل اصلی `index.ts` که نقطه شروع برنامه است و تعاملات کاربر با ربات را مدیریت می‌کند
- ماژول ترجمه در مسیر `translator.ts` که مسئول ارسال درخواست به LLM، بررسی کیفیت ترجمه، و بازگرداندن نتیجه نهایی است

## مدیریت تعاملات ربات با کاربر

همانطور که قبل‌تر گفته شد؛ فایل `index.ts` تعاملات ربات تلگرام با کاربران را مدیریت می‌کند. در این فایل، از کتابخانه `node-telegram-bot-api` برای ارتباط با API تلگرام استفاده شده است.
قطعه کد این فایل، در ادامه قرار گرفته است: 

```js
import TelegramBot from 'node-telegram-bot-api';
import dotenv from 'dotenv';
import { translateWithFeedback } from './translator';

dotenv.config();

const bot = new TelegramBot(process.env.TELEGRAM_BOT_TOKEN!, { polling: true });

type UserState = {
  step: 'idle' | 'awaitingText' | 'awaitingTargetLanguage';
  sourceText?: string;
};

const userStates = new Map<number, UserState>();

bot.onText(/\/start/, (msg) => {
  const chatId = msg.chat.id;
  bot.sendMessage(
    chatId,
    `سلام ${msg.from?.first_name || ''} 👋\nبه ربات مترجم خوش اومدی!\nاز منو یکی از دستورات رو انتخاب کن.`,
    {
      reply_markup: {
        keyboard: [
          [{ text: '/translate' }, { text: '/help' }],
        ],
        resize_keyboard: true,
      },
    }
  );
  userStates.set(chatId, { step: 'idle' });
});

bot.onText(/\/translate/, (msg) => {
  const chatId = msg.chat.id;
  bot.sendMessage(chatId, '📝 لطفاً متنی که می‌خوای ترجمه بشه رو وارد کن');
  userStates.set(chatId, { step: 'awaitingText' });
});

bot.onText(/\/help/, (msg) => {
  const chatId = msg.chat.id;

  const helpMessage = `
🤖 راهنمای ربات:

✅ /start - شروع و نمایش منوی اصلی
🌐 /translate - ترجمه متن به زبان دلخواه
ℹ️ /help - نمایش این راهنما
  `.trim();

  bot.sendMessage(chatId, helpMessage);
});

bot.on('message', async (msg) => {
  const chatId = msg.chat.id;
  const text = msg.text?.trim();

  if (!text || text.startsWith('/')) return;

  const state = userStates.get(chatId) || { step: 'idle' };

  if (state.step === 'awaitingText') {
    userStates.set(chatId, { step: 'awaitingTargetLanguage', sourceText: text });
    bot.sendMessage(chatId, '🌐 حالا زبان مقصد رو وارد کن (مثلاً: فارسی، انگلیسی و...)');
    return;
  }

  if (state.step === 'awaitingTargetLanguage' && state.sourceText) {
    bot.sendMessage(chatId, '⏳ در حال ترجمه...');

    try {
      const result = await translateWithFeedback(state.sourceText, text);
      const t = result.currentObjectTranslation.translation;

      const message = `
✅ ترجمه نهایی:

📝 ${t.accurate_translated_text}

------------------------
🌐 زبان متن اصلی: ${t.text_language}
🔁 زبان مقصد: ${t.target_language}
🔤 متن اصلی:
${t.text_to_translate}

💡 توضیحات (به زبان مقصد):
${t.explanations_related_to_translation_in_target_language}
      `.trim();

      bot.sendMessage(chatId, message);
    } catch (err) {
      bot.sendMessage(chatId, '❌ خطایی در ترجمه رخ داد.');
      console.error(err);
    }

    userStates.set(chatId, { step: 'idle' });
  }
});
```

در قطعه کد فوق: 

۱. متغیرهای محیطی فراخوانی می‌شوند و توکن ربات تلگرام با استفاده از متغیرهای محیطی، مقداردهی می‌شود. سپس یک instance از کلاس ربات با حالت `polling` ساخته می‌شود تا بتواند به‌صورت لحظه‌ای پیام‌های ارسال شده توسط کاربر را، دریافت کند.

۲. بخش بعدی مربوط به دستور `start/` است؛ هرگاه کاربر این دستور را ارسال کند، ربات با یک پیام خوش‌آمدگویی شامل نام کاربر (در صورت موجود بودن) پاسخ می‌دهد. در همین پیام، منوی سفارشی به کاربر نشان داده می‌شود تا دستورات `translate/` و `help/` به‌صورت دکمه‌ای در دسترس باشند. پس از ارسال پیام خوش‌آمد، با استفاده از `chatId` کاربر، برای او، وضعیتی با مرحله `idle` تنظیم می‌گردد تا ربات بداند کاربر هنوز در هیچ مرحله‌ای از فرایند ترجمه نیست.

۳. وقتی کاربر دستور `translate/` را ارسال کند، ربات با یک پیام از او می‌خواهد متنی را که می‌خواهد ترجمه شود، وارد نماید. در این نقطه، وضعیت کاربر به `awaitingText` تغییر پیدا می‌کند. این تغییر وضعیت باعث می‌شود که پیام بعدی کاربر به‌عنوان متن برای ترجمه در نظر گرفته شده و به‌جای برخورد با دیگر دستورات، وارد فرایند ترجمه شود.

۴. دستور `help/` نیز هر زمان فراخوانی شود، پیامی شامل راهنمای استفاده از ربات ارسال می‌کند. در این راهنما، توضیح مختصری درباره‌ی هر یک از دستورات آمده است تا کاربر به‌راحتی با منطق کار ربات آشنا شود. این بخش بدون تغییر وضعیت کاربر اجرا می‌شود.

۵.پس از ارسال متن برای ترجمه، ربات از کاربر می‌خواهد زبان مقصد را مشخص کند. با مشخص کردن زبان مقصد، اگر وضعیت `awaitingTargetLanguage` باشد و متن مورد نیاز برای ترجمه هم، موجود باشد، ربات ابتدا پیغام `⏳ در حال ترجمه...` را می‌فرستد، سپس با فراخوانی تابع خارجی `translateWithFeedback` متن را به زبان دلخواه کاربر ترجمه می‌کند. پس از دریافت نتیجه، ربات پیام نهایی را شامل ترجمه، زبان مبدا و مقصد، خود متن و توضیحات اضافی، برای کاربر ارسال می‌کند. در صورت هرگونه خطا، پیام خطا به کاربر داده می‌شود و این خطا، در کنسول ثبت می‌شود. 

۶. در پایان هر فرایند ترجمه، وضعیت کاربر مجدداً به `idle` تغییر پیدا‌ می‌کند تا کاربر بتواند دوباره از دستورات ربات استفاده کند.

## ربات مترجم
اکنون بیایید ببینیم 
در هر ارسال درخواست ربات تلگرام به مدل، چه اتفاقی می‌افتد. فایل `translator.ts` مسئول ارتباط با LLM است. قطعه کد این فایل، در ادامه، قرار گرفته است: 

```js
import { generateText, generateObject } from 'ai';
import { createOpenAI } from '@ai-sdk/openai';
import { z } from 'zod';
import dotenv from 'dotenv';

dotenv.config();

const my_model = createOpenAI({
  baseURL: process.env.BASE_URL!,
  apiKey: process.env.LIARA_API_KEY!,
});

const translationSchema = z.object({
  translation: z.object({
    text_language: z.string(),
    text_to_translate: z.string(),
    target_language: z.string(),
    accurate_translated_text: z.string(),
    explanations_related_to_translation_in_target_language: z.string(),
  }),
});

export async function translateWithFeedback(text: string, targetLanguage: string) {
  let currentTranslation = '';
  let currentObjectTranslation = { translation: {
    text_language: '',
    text_to_translate: text,
    target_language: targetLanguage,
    accurate_translated_text: '',
    explanations_related_to_translation_in_target_language: '',
  }};
  let iterations = 0;
  const MAX_ITERATIONS = 3;

  const { object: firstTranslation } = await generateObject({
    model: my_model('openai/gpt-4o-mini'),
    system: `You are an expert literary translator.
    You Do not censor any content in the translation and provide the correct and accurate text.`,
      prompt: `Translate this text to ${targetLanguage}, preserving tone and cultural nuances:\n\n${text}`,
    schema: translationSchema,
  });

  currentTranslation = firstTranslation.translation.accurate_translated_text;
  currentObjectTranslation = firstTranslation as {
    translation: {
      text_language: string;
      text_to_translate: string;
      target_language: string;
      accurate_translated_text: string;
      explanations_related_to_translation_in_target_language: string;
    };
  };

  while (iterations < MAX_ITERATIONS) {
    const { object: evaluation } = await generateObject({
      model: my_model('openai/gpt-4.1-mini'),
      schema: z.object({
        qualityScore: z.number().min(1).max(10),
        preservesTone: z.boolean(),
        preservesNuance: z.boolean(),
        culturallyAccurate: z.boolean(),
        specificIssues: z.array(z.string()),
        improvementSuggestions: z.array(z.string()),
      }),
      system: 'You are an expert in evaluating literary translations.',
      prompt: `Evaluate this translation:\n\nOriginal: ${text}\nTranslation: ${currentTranslation}\n\nConsider:\n1. Overall quality\n2. Preservation of tone\n3. Preservation of nuance\n4. Cultural accuracy`,
    });

    if (
      evaluation.qualityScore >= 8 &&
      evaluation.preservesTone &&
      evaluation.preservesNuance &&
      evaluation.culturallyAccurate
    ) {
      break;
    }

    const { object: improvedTranslation } = await generateObject({
      model: my_model('openai/gpt-4.1'),
      system: 'You are an expert literary translator.',
      prompt: `Improve this translation based on the following feedback:\n\n${evaluation.specificIssues.join('\n')}\n\n${evaluation.improvementSuggestions.join('\n')}\n\nOriginal: ${text}\nCurrent Translation: ${currentTranslation}`,
      schema: translationSchema,
    });

    currentTranslation = improvedTranslation.translation.accurate_translated_text;
    currentObjectTranslation = improvedTranslation as {
      translation: {
        text_language: string;
        text_to_translate: string;
        target_language: string;
        accurate_translated_text: string;
        explanations_related_to_translation_in_target_language: string;
      };
    };
    iterations++;
  }

  return {
    currentObjectTranslation,
    iterations,
  };
}
```

در قطعه کد فوق: 

۱. یک instance از `createOpenAI` برای اتصال به مدل، ساخته شده است. در این instance، از `baseUrl` سرویس هوش مصنوعی لیارا و کلید API کنسول لیارا استفاده شده است.

۲. در تابع اصلی، متن اصلی به همراه زبان مقصد به مدل `openai/gpt-4o-mini` داده می‌شود و از مدل خواسته می‌شود تا در Schema مشخص شده، خروجی را برگرداند. 

۳. خروجی مدل، به مدل قوی‌تر از خودش، یعنی `openai/gpt-4.1-mini` داده می‌شود و از این LLM، درخواست می‌شود تا با توجه به معیارهای ارزیابی تعریف شده در Schema، خروجی LLM قبلی را ارزیابی کند.

۴. در صورتی که مقادیر ارزیابی LLM دوم قابل قبول باشند، مقدار خروجی، به برنامه اصلی، `return` می‌شود. در غیر این‌صورت، مجدداً از مدل قوی‌تر نسبت به LLM اول (مثلاً `openai/gpt-4.1`)، درخواست می‌شود که عملیات ترجمه را انجام دهد.

۵. عملیات ارزیابی LLM سوم، مجدداً توسط LLM دوم، انجام می‌شود و این چرخه ترجمه و ارزیابی آن، تا زمانی که مقادیر ارزیابی مورد قبول واقع نشوند یا مقدار متغیر `iteration`، از مقدار `MAX_ITERATIONS` کمتر باشد، ادامه خواهد داشت. 

## نحوه‌ی عملکرد

زمانی که یک کاربر با ربات تلگرام شما تعامل برقرار می‌کند:

۱. با ارسال `start/`، ربات ضمن خوش‌آمدگویی، گزینه‌های ممکن کار با ربات را ارائه می‌دهد.

۲. کاربر می‌تواند یکی از گزینه‌های `translate/` یا `help/` را انتخاب کند. در غیر این‌صورت، ربات جوابی نخواهد فرستاد.

۳. با انتخاب `help/` راهنمای استفاده از ربات به کاربر نمایش داده می‌شود.

۴. با انتخاب `translate/`، ربات از کاربر می‌خواهد که متن خود را ارسال کند.

۵. پس از ارسال متن، ربات از کاربر می‌خواهد زبان مقصد را ارسال کند.

۶. پس از ارسال زبان مقصد، ربات پیام انتظار را به کاربر ارسال می‌کند و بعد از مدتی، متن ترجمه را به همراه توضیحات دیگر، به کاربر ارسال می‌کند.

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
TELEGRAM_BOT_TOKEN=xxxxxxxxx
LIARA_API_KEY=xxxxxxxxx
BASE_URL=xxxxxxxxx
```

۵. استقرار برنامه  
با اجرای دستور زیر در مسیر اصلی پروژه، برنامه خود را  در لیارا مستقر کنید (مقدار port اهمیتی ندارد):

```bash
liara deploy --platform=node --port=3000
```

در نهایت، وارد ربات تلگرام خود شوید و ربات را با ارسال یک پیام، تست کنید. 

![use translator bot in telegram](https://media.liara.ir/ai/ai-sdk/cookbook/translator-telegrambot/use-translator-bot.png)

## گام‌های بعدی

شما یک ربات تلگرام ساخته‌اید که توسط AI SDK پشتیبانی می‌شود! در ادامه برخی راه‌های توسعه‌ی آن آورده شده است:

- پیاده‌سازی مدیریت تعامل در صورت ارسال دستور نامرتبط
- پیاده‌سازی قابلیت ارسال عکس و مطالعه محتوای آن و ترجمه محتوا
- اضافه‌کردن مدل‌های بیشتر به منطق AI برنامه برای ترجمه و ارزیابی دقیق‌تر

## all links

[All links of docs](https://docs.liara.ir/all-links-llms.txt)
