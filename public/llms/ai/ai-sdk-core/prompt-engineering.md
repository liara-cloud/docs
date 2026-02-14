Original link: https://docs.liara.ir/ai/ai-sdk-core/prompt-engineering/

# مهندسی پرامپت در هوش مصنوعی

## نکات قابل توجه

## پرامپت‌‌هایی برای toolها

وقتی پرامپت‌هایی را ایجاد می‌کنید که شامل toolها هستند، با افزایش تعداد و پیچیدگی toolها، دریافت نتایج خوب ممکن است کمی دشوار باشد.  
در ادامه، نکاتی آمده است که به شما  
کمک می‌کند بهترین نتایج را دریافت کنید:  

۱. از مدلی استفاده کنید که در فراخوانی tool قوی باشد؛ مثل مدل `openai/gpt-4o-mini` یا `openai/gpt-4.1`. مدل‌های ضعیف‌تر غالباً در فراخوانی tool به صورت بهینه و بدون خطا، دچار مشکل می‌شوند.  

۲. از toolهای کمی استفاده کنید. مثلاً حداکثر 5 تا یا کمتر.

۳. پیچیدگی پارامترهای tool را پایین نگه دارید، zod schemaهای پیچیده با المنت‌های زیاد و تو در تو و اختیاری زیاد و ... می‌تواند برای مدل چالش برانگیز باشد.  

۴. از نام‌های معنادار برای toolها، پارامترها و ویژگی‌های پارامتر و ... استفاده کنید.  
هرچقدر اطلاعات بیشتری به مدل بدهید، بهتر می‌فهمد که شما چه چیزی می‌خواهید.

۵.  متد `("...")describe` را به propertyهای zod schema خود اضافه کنید تا به مدل  
سرنخ‌هایی را در مورد هدف هر property دریافت کند.

۶. وقتی که خروجی یک tool ممکن است برای  
مدل نامشخص باشد و بین toolها وابستگی وجود دارد، از فیلد `description` در یک tool استفاده کنید  
تا اطلاعاتی  را در مورد خروجی اجرای tool فراهم کرده باشید.  

۷. می‌توانید مثال‌های ورودی/خروجی فراخوانی toolها را در پرامپت خود قرار دهید تا به مدل کمک کنید نحوه‌ی استفاده از toolها را درک کند. به یاد داشته باشید که toolها با آبجکت‌های JSON کار می‌کنند، بنابراین نمونه‌ها باید به فرمت JSON باشند.

به صورت کلی، هدف باید این باشد که تمام اطلاعات موردنیاز مدل را به شکلی شفاف و واضح در اختیار آن قرار دهید.  

## toolها و schemaهای داده‌های ساختاریافته

نگاشت اسکیماهای zod به ورودی‌های LLMها (که اغلب اسکیمای JSON می‌پذیرند)، همواره کار ساده‌ای نیست؛ زیرا این نگاشت یک به یک نیست.  

## تاریخ‌ها در zod

zod از آبجکت‌های JavaScript Date استفاده می‌کند، در حالی که مدل‌ها، تاریخ‌ها را به صورت string (رشته) بر می‌گردانند.  
شما می‌توانید فرمت تاریخ را با استفاده از `()z.string().datetime` یا `()z.string().date` مشخص و اعتبار سنجی کنید.  
و سپس با استفاده از یک Zod transformer رشته را به یک آبجکت Date تبدیل نمایید.

```js
import { generateObject } from 'ai';
import { createOpenAI } from '@ai-sdk/openai';
import { config } from 'dotenv';
import { z } from 'zod';

config();
const my_model = createOpenAI({
  baseURL: process.env.BASE_URL!,
  apiKey: process.env.LIARA_API_KEY!,
});

const result = await generateObject({
  model: my_model('openai/gpt-4o-mini'),
  schema: z.object({
    events: z.array(
      z.object({
        event: z.string(),
        date: z
          .string()
          .date()
          .transform(value => new Date(value)),
      }),
    ),
  }),
  prompt: 'List 5 important events from the year 2000.',
});

console.log(result.object)
```

## اشکال‌زدایی (Debugging)

## بررسی هشدارها

تمام ارائه‌دهندگان (Providerها) از تمامی قابلیت‌های AI SDK پشتیبانی نمی‌کنند. در مواردی که یک قابلیت پشتیبانی نمی‌شود، ارائه‌دهندگان یا exceptionهایی را throw می‌کنند یا warning بازمی‌گردانند. برای اطمینان از این‌که پرامپت، toolها و تنظیمات شما به درستی توسط ارائه‌دهنده پردازش می‌شوند، می‌توانید call warningها را بررسی کنید.

```js
import { generateText } from 'ai';
import { createOpenAI } from '@ai-sdk/openai';
import { config } from 'dotenv';

config();
const my_model = createOpenAI({
  baseURL: process.env.BASE_URL!,
  apiKey: process.env.LIARA_API_KEY!,
});

const result = await generateText({
  model: my_model('openai/gpt-4o-mini'),
  prompt: 'Hello, world!',
});

console.log(result.warnings);

```

## بدنه‌های درخواست HTTP

می‌توانید بدنه‌های خام درخواست‌های HTTP را در مدل‌هایی که آن‌ها را در دسترس قرار می‌دهند (برای مثال OpenAI) بررسی کنید. این قابلیت به شما اجازه می‌دهد بار ارسالی (payload) دقیق را که به ارائه‌دهنده‌ی مدل فرستاده می‌شود، به‌صورت خاص بر اساس روش همان ارائه‌دهنده، مشاهده کنید.

```js
import { generateText } from 'ai';
import { createOpenAI } from '@ai-sdk/openai';
import { config } from 'dotenv';

config();
const my_model = createOpenAI({
  baseURL: process.env.BASE_URL!,
  apiKey: process.env.LIARA_API_KEY!,
});

const result = await generateText({
  model: my_model('openai/gpt-4o-mini'),
  prompt: 'Hello, world!',
});

console.log(result.request.body);
```

## all links

[All links of docs](https://docs.liara.ir/all-links-llms.txt)
