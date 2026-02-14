Original link: https://docs.liara.ir/ai/cookbook/nodejs/local-caching-middleware/

# کش Middleware به صورت محلی در NodeJS با هوش مصنوعی

در زمان توسعهٔ برنامه‌های مبتنی بر هوش مصنوعی، اغلب متوجه خواهید شد که یک سری فراخوانی‌ یکسان به API را به‌صورت مکرر انجام می‌دهید. این کار می‌تواند منجر به افزایش هزینه‌ها و کندی چرخه توسعه شود. یک caching middleware به شما امکان می‌دهد پاسخ‌ها را به‌صورت local ذخیره کرده و هنگام ارائه ورودی‌های مشابه، از آن‌ها مجدداً استفاده کنید.  
این رویکرد در دو سناریو بسیار مفید است:

- تکرار در طراحی UI/UX: زمانی که تمرکز شما بر طراحی و تجربه کاربری است، نمی‌خواهید برای هر تغییر در کد، پاسخ‌های هوش مصنوعی مجدداً تولید شوند
- کار بر روی ارزیابی‌ها: هنگام توسعهٔ ارزیابی‌ها، نیاز است بارها یک پرامپت (prompt) مشابه را آزمایش کنید، اما در هر بار نیازی به تولید پاسخ جدید نیست

## پیاده‌سازی

در این پیاده‌سازی، شما یک فایل JSON برای ذخیره‌سازی پاسخ‌ها ایجاد می‌کنید. هنگام دریافت یک درخواست، ابتدا بررسی می‌کنید که آیا دقیقاً همین درخواست قبلاً مشاهده شده است یا خیر. اگر چنین باشد، پاسخ کش‌شده بلافاصله بازگردانده می‌شود (چه به صورت یک پاسخ کامل، و چه به صورت بخش‌بخش از توکن‌ها). در غیر این صورت، فرآیند تولید (generation) اجرا می‌شود، پاسخ ذخیره می‌گردد، و سپس بازگردانده می‌شود.

> حتماً مسیر کش local خود را به فایل `gitignore.` اضافه کنید تا به‌اشتباه در ریپازیتوری commit نشود.

## نحوه عملکرد

در تولیدهای معمولی، پاسخ‌ها به‌صورت کامل ذخیره و بازیابی می‌شوند. در مقابل، پیاده‌سازی streaming، هر توکن را به‌محض رسیدن دریافت می‌کند، کل دنباله را ذخیره کرده و در صورت وجود کش، با استفاده از تابع `simulateReadableStream` از SDK، تجربه استریم توکن‌به‌توکن را با سرعت کنترل‌شده (پیش‌فرض: ۱۰ میلی‌ثانیه بین هر بخش) بازتولید می‌کند.  
این رویکرد، بهترین عملکرد را دارد:

- پاسخ‌های آنی برای پرسش‌های تکراری
- حفظ رفتار استریم برای توسعه رابط کاربری (UI)

middleware تمام تبدیل‌های لازم را برای غیرقابل تشخیص بودن پاسخ‌های کش‌شده از پاسخ‌های جدید انجام می‌دهد؛ از جمله نرمال‌سازی فراخوانی Toolها و اصلاح فرمت timestampها.  
در مسیر `middleware/my-cache-middleware.js` قطعه کد زیر را قرار دهید:

```js
import {
  simulateReadableStream,
  wrapLanguageModel,
} from 'ai';
import 'dotenv/config';
import fs from 'fs';
import path from 'path';
import { TransformStream } from 'stream/web';

const CACHE_FILE = path.join(process.cwd(), '.cache/ai-cache.json');

export const cached = (model) =>
  wrapLanguageModel({
    middleware: cacheMiddleware,
    model,
  });

const ensureCacheFile = () => {
  const cacheDir = path.dirname(CACHE_FILE);
  if (!fs.existsSync(cacheDir)) {
    fs.mkdirSync(cacheDir, { recursive: true });
  }
  if (!fs.existsSync(CACHE_FILE)) {
    fs.writeFileSync(CACHE_FILE, '{}');
  }
};

const getCachedResult = (key) => {
  ensureCacheFile();
  const cacheKey = typeof key === 'object' ? JSON.stringify(key) : key;
  try {
    const cacheContent = fs.readFileSync(CACHE_FILE, 'utf-8');

    const cache = JSON.parse(cacheContent);

    const result = cache[cacheKey];

    return result ?? null;
  } catch (error) {
    console.error('Cache error:', error);
    return null;
  }
};

const updateCache = (key, value) => {
  ensureCacheFile();
  try {
    const cache = JSON.parse(fs.readFileSync(CACHE_FILE, 'utf-8'));
    const updatedCache = { ...cache, [key]: value };
    fs.writeFileSync(CACHE_FILE, JSON.stringify(updatedCache, null, 2));
    console.log('Cache updated for key:', key);
  } catch (error) {
    console.error('Failed to update cache:', error);
  }
};
const cleanPrompt = (prompt) => {
  return prompt.map(m => {
    if (m.role === 'assistant') {
      return m.content.map(part =>
        part.type === 'tool-call' ? { ...part, toolCallId: 'cached' } : part,
      );
    }
    if (m.role === 'tool') {
      return m.content.map(tc => ({
        ...tc,
        toolCallId: 'cached',
        result: {},
      }));
    }

    return m;
  });
};

export const cacheMiddleware = {
  wrapGenerate: async ({ doGenerate, params }) => {
    const cacheKey = JSON.stringify({
      ...cleanPrompt(params.prompt),
      _function: 'generate',
    });
    console.log('Cache Key:', cacheKey);

    const cached = getCachedResult(cacheKey);

    if (cached && cached !== null) {
      console.log('Cache Hit');
      return {
        ...cached,
        response: {
          ...cached.response,
          timestamp: cached?.response?.timestamp
            ? new Date(cached?.response?.timestamp)
            : undefined,
        },
      };
    }

    console.log('Cache Miss');
    const result = await doGenerate();

    updateCache(cacheKey, result);

    return result;
  },
  wrapStream: async ({ doStream, params }) => {
    const cacheKey = JSON.stringify({
      ...cleanPrompt(params.prompt),
      _function: 'stream',
    });
    console.log('Cache Key:', cacheKey);

    // Check if the result is in the cache
    const cached = getCachedResult(cacheKey);

    // If cached, return a simulated ReadableStream that yields the cached result
    if (cached && cached !== null) {
      console.log('Cache Hit');
      // Format the timestamps in the cached response
      const formattedChunks = cached.map(p => {
        if (p.type === 'response-metadata' && p.timestamp) {
          return { ...p, timestamp: new Date(p.timestamp) };
        } else return p;
      });
      return {
        stream: simulateReadableStream({
          initialDelayInMs: 0,
          chunkDelayInMs: 10,
          chunks: formattedChunks,
        }),
        rawCall: { rawPrompt: null, rawSettings: {} },
      };
    }

    console.log('Cache Miss');
    // If not cached, proceed with streaming
    const { stream, ...rest } = await doStream();

    const fullResponse = [];

    const transformStream = new TransformStream({
      transform(chunk, controller) {
        fullResponse.push(chunk);
        controller.enqueue(chunk);
      },
      flush() {
        // Store the full response in the cache after streaming is complete
        updateCache(cacheKey, fullResponse);
      },
    });

    return {
      stream: stream.pipeThrough(transformStream),
      ...rest,
    };
  },
};
```

## استفاده از Middleware
Middleware را می‌توان به‌سادگی در تنظیمات قبلی SDK هوش مصنوعی ادغام کرد.  
در مسیر `index.js` قطعه کد زیر را قرار دهید:

```js
// npm i @ai-sdk/openai@^1 ai@^4 dotenv zod 

import { streamText } from 'ai';
import { createOpenAI } from '@ai-sdk/openai';
import { config } from 'dotenv';
import { cached } from './middleware/my-cache-middleware.js';

config();
const my_model = createOpenAI({
  baseURL: process.env.BASE_URL,
  apiKey: process.env.LIARA_API_KEY,
});

async function main() {
  const result = streamText({
    model: cached(my_model('openai/gpt-4o-mini'),),
    maxTokens: 512,
    temperature: 0.3,
    maxRetries: 5,
    prompt: 'Invent a new holiday and describe its traditions.',
  });

  for await (const textPart of result.textStream) {
    process.stdout.write(textPart);
  }

  console.log();
  console.log('Token usage:', await result.usage);
  console.log('Finish reason:', await result.finishReason);
}

main().catch(console.error);
```

> متغیرهای محیطی `BASE_URL` و `LIARA_API_KEY` همان baseUrl [سرویس هوش مصنوعی لیارا](https://docs.liara.ir/products/ai/) و [کلید API لیارا](https://docs.liara.ir/references/api/about/#api-access-key) هستند که باید در بخش متغیرهای محیطی برنامه خود، آن‌ها را تنظیم کنید.  
> پروژه فوق را می‌توانید به‌صورت کامل در [گیت‌هاب لیارا](https://github.com/liara-cloud/ai-sdk-examples/tree/master/NodeJS/local-caching-middleware)، مشاهده کنید.

## all links

[All links of docs](https://docs.liara.ir/all-links-llms.txt)
