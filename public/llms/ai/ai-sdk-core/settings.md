Original link: https://docs.liara.ir/ai/ai-sdk-core/settings/

# تنظیمات مربوط به AI SDK 

LLMها معمولاً تنظیماتی را برای بهبود یا تقویت خروجی خود فراهم می‌کنند.
تمامی توابع AI SDK علاوه بر مدل، [پرامپت](https://docs.liara.ir/ai/foundations/prompts/) و تنظیمات اختصاصی OpenAI، از تنظیمات عمومی زیر نیز پشتیبانی می‌کنند:

```js
import { generateText } from 'ai';
import { createOpenAI } from '@ai-sdk/openai';
import { config } from 'dotenv';

config();
const my_model = createOpenAI({
  baseURL: process.env.BASE_URL!,
  apiKey: process.env.LIARA_API_KEY!,
});

const { text } = await generateText({
  model: my_model('openai/gpt-4o-mini'),
  maxTokens: 512,
  temperature: 0.3,
  maxRetries: 5,
  prompt: 'Invent a new holiday and describe its traditions.',
});

console.log(text)
```

> برخی از مدل‌ها ممکن است از همه تنظیمات عمومی پشتیبانی نکنند.
> اگر شما برای یک مدل، یک حالت خاص را تعریف کنید و
> از آن حالت، پشتیبانی نکند. عدم تاثیر آن حالت
> را می‌توانید در خروجی مدل مشاهده کنید (برای بررسی بیشتر هم، می‌توانید از یک مدل متفاوت استفاده کنید و خروجی‌ها را مقایسه کنید).

## maxTokens

بیشترین مقدار توکن‌هایی که قرار است تولید شوند. 

## temperature
این پارامتر برای تنظیم خلاقیت مدل است.
مقدار این تنظیم به ارائه‌دهنده منتقل می‌شود و بازه‌ی آن به ارائه‌دهنده و مدل بستگی دارد. در بیشتر ارائه‌دهندگان، مقدار `0` به معنای نتایج تقریباً قطعی (deterministic) است و مقادیر بالاتر به معنای افزایش میزان تصادفی بودن (randomness) نتایج می‌باشد.

توصیه می‌شود که فقط یا `temperature` را تنظیم کنید یا `topP`، اما نه هر دو را به‌طور همزمان.

## topP

پارامتر `topP` (که nucleus sampling نیز نامیده می‌شود) یکی از روش‌های کنترل نمونه‌گیری تصادفی است. 
وقتی مدل می‌خواهد کلمه بعدی را تولید کند، به هر کلمه ممکن، یک احتمال اختصاص می‌دهد. برای انتخاب، دو استراتژی وجود دارد:

- `topK`: مدل، فقط بین محتمل‌ترین `k` تا گزینه انتخاب می‌کند
- `topP`: به جای یک عدد ثابت (مثل `k=50`)، یک آستانهٔ تجمعی (`p`) در نظر گرفته می‌شود

مقدار تنظیم `topP` به ارائه‌دهنده منتقل می‌شود و بازه‌ی آن به ارائه‌دهنده و مدل بستگی دارد. در بیشتر ارائه‌دهندگان، nucleus sampling عددی بین `0` تا `1` است. به‌عنوان مثال، مقدار `0.1` به این معناست که تنها توکن‌هایی با ۱۰٪ بالاترین جرم احتمالی (probability mass) در نظر گرفته می‌شوند.

توصیه می‌شود که فقط یا `temperature` را تنظیم کنید یا `topP`، اما نه هر دو را به‌طور همزمان.

## topK

نمونه‌گیری تنها از میان `k` گزینه‌ی برتر برای هر توکن بعدی.

این روش برای حذف پاسخ‌های با احتمال پایین و موجود در long tail استفاده می‌شود. استفاده از این تنظیم تنها برای موارد پیشرفته توصیه می‌شود، زیرا معمولاً کافی است که صرفاً از `temperature` استفاده کنید.

## presencePenalty

Presence penalty بر احتمال تکرار اطلاعاتی که از قبل در پرامپت وجود دارد تأثیر می‌گذارد.

مقدار این تنظیم به ارائه‌دهنده منتقل می‌شود و بازه‌ی آن به ارائه‌دهنده و مدل بستگی دارد. در بیشتر ارائه‌دهندگان، مقدار `0` به معنای no penalty است.

## frequencyPenalty

Frequency penalty بر احتمال استفاده‌ی مکرر از کلمات یا عبارات یکسان، تأثیر می‌گذارد.

مقدار این تنظیم به ارائه‌دهنده منتقل می‌شود و بازه‌ی آن به ارائه‌دهنده و مدل بستگی دارد. در بیشتر ارائه‌دهندگان، مقدار `0` به معنای no penalty است.

## stopSequences

دنباله‌های توقف (stop sequences) برای متوقف کردن تولید متن استفاده می‌شوند.

اگر این مقدار تنظیم شود، مدل هنگام تولید یکی از دنباله‌های توقف، تولید متن را متوقف خواهد کرد. برخی از ارائه‌دهندگان ممکن است محدودیتی در تعداد دنباله‌های توقف داشته باشند.

## seed

عددی صحیح (integer) که به‌عنوان seed برای نمونه‌گیری تصادفی استفاده می‌شود.

اگر این مقدار تنظیم شده و توسط مدل پشتیبانی شود، فراخوانی‌ها نتایج قطعی (deterministic) تولید خواهند کرد.

## maxRetries

حداکثر تعداد تلاش‌های مجدد (retries).
برای غیرفعال کردن تلاش مجدد، مقدار آن را روی `0` تنظیم کنید. مقدار پیش‌فرض آن، `2` است.

## abortSignal

یک سیگنال اختیاری برای توقف (abort signal) که می‌تواند جهت لغو فراخوانی استفاده شود.

برای مثال، این سیگنال می‌تواند از رابط کاربری به فراخوانی منتقل شود تا آن را لغو کند، یا برای تعریف یک مهلت زمانی (timeout) به کار رود.

## مثال: Timeout
```js
import { generateText } from 'ai';
import { createOpenAI } from '@ai-sdk/openai';
import { config } from 'dotenv';

config();
const my_model = createOpenAI({
  baseURL: process.env.BASE_URL!,
  apiKey: process.env.LIARA_API_KEY!,
});

const { text } = await generateText({
  model: my_model('openai/gpt-4o-mini'),
  prompt: 'Invent a new holiday and describe its traditions.',
  abortSignal: AbortSignal.timeout(60000), // 60 seconds 
});

console.log(text)
```

## headers

هدرهای اضافی HTTP که همراه با درخواست ارسال می‌شوند. 

می‌توانید از هدرهای درخواست (request headers) برای ارائه‌ی اطلاعات اضافی به ارائه‌دهنده استفاده کنید، بسته به این‌که ارائه‌دهنده چه قابلیت‌هایی را پشتیبانی کند. برای مثال، برخی از ارائه‌دهندگان حوزه‌ی observability از هدرهایی مانند Prompt-Id پشتیبانی می‌کنند.

```js
import { generateText } from 'ai';
import { createOpenAI } from '@ai-sdk/openai';
import { config } from 'dotenv';

config();
const my_model = createOpenAI({
  baseURL: process.env.BASE_URL!,
  apiKey: process.env.LIARA_API_KEY!,
});

const { text } = await generateText({
  model: my_model('openai/gpt-4o-mini'),
  prompt: 'Invent a new holiday and describe its traditions.',
  headers: {
    'Prompt-Id': 'my-prompt-id',
  },
});

console.log(text)
```

> این هدرها با هر درخواستی که توسط ارائه‌دهنده ایجاد می‌شود، ارسال می‌شوند.

## all links

[All links of docs](https://docs.liara.ir/all-links-llms.txt)
