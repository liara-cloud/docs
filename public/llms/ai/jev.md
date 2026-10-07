Original link: https://docs.liara.ir/ai/jev/

# شروع به کار با هوش مصنوعی Jev

[Jev](https://typesafe.ai/blog/introducing-system-one-models-and-jev)، یک مدل تصمیم‌گیری (Decision Model) است که یک وضعیت (state) را به همراه مجموعه‌ای از سوالات ساختاریافته دریافت می‌کند و برای هر سوال، بر اساس معیارهای (criteria) تعریف‌شده، یک پاسخ مشخص برمی‌گرداند. این مدل برای کاربردهایی مانند دسته‌بندی ورودی‌ها، مسیریابی درخواست‌ها و تصمیم‌گیری خودکار در برنامه‌ها مناسب است.

در حال حاضر، لیارا، مدل‌های زیر از TypeSafe را در API خود پشتیبانی می‌کند:

- مدل `jev-1.13`  
- مدل `jev-1.14`  
- مدل `jev-fathi`  
- مدل `jev-idf`  

پس از [ایجاد سرویس هوش مصنوعی](https://docs.liara.ir/ai/quick-start) و دریافت `baseUrl` و [ساخت کلید](https://docs.liara.ir/ai/details/keys/#create)، می‌توانید از مدل Jev استفاده کنید.

## اتصال به مدل

برای استفاده از مدل Jev، باید یک درخواست `POST` به مسیر `decisions/` سرویس هوش مصنوعی خود ارسال کنید. در ابتدا، یک فایل `env.` با محتوای زیر، در مسیر اصلی پروژه خود ایجاد کنید:

```dotenv
BASE_URL=https://docs.liara.ir
LIARA_API_KEY=<LIARA_API_KEY>
JEV_MODEL_NAME=typesafe/jev-1.13
```

سپس، می‌توانید مانند قطعه کدهای زیر، به مدل متصل شوید:

## JavaScript

```js
require('dotenv').config();

const OpenAI = require('openai');

const openai = new OpenAI({
  baseURL: process.env.BASE_URL,
  apiKey: process.env.LIARA_API_KEY,
});

async function main() {
  const decision = await openai.post('/decisions', {
    body: {
      model: process.env.JEV_MODEL_NAME,

      state: 'I was charged twice. Please refund the duplicate charge.',

      questions: {
        refund_requested: {
          type: 'noul',
          instructions: 'Is the customer asking for a refund?',
          criteria: {
            true: 'The customer is asking for a refund.',
            false: 'The customer is not asking for a refund.',
          },
        },

        category: {
          type: 'choice',
          instructions: 'Which category does this customer request belong to?',
          criteria: {
            billing: 'Payments, charges, invoices, or refunds.',
            technical: 'Bugs, errors, outages, or technical issues.',
            sales: 'Purchasing, pricing, or product questions.',
          },
        },
      },
    },
  });

  console.log(decision);
}

main();
```

## PHP

```php

```

## Python

```py

```

## .NET

```cs

```

## Go

```bash

```

## cURL

```bash

```

در قطعه کدهای فوق، به‌جای `BASE_URL`، آدرس سرویس هوش مصنوعی خود را قرار دهید و به‌جای `LIARA_API_KEY`، کلید API خود را وارد کنید. همچنین، به‌جای `JEV_MODEL_NAME`، نام یکی از مدل‌های فوق را قرار دهید.

## پارامترهای درخواست

- `model`: نام مدل موردنظر.
- `state`: متن یا وضعیتی که مدل باید درباره آن تصمیم‌گیری کند.
- `questions`: مجموعه‌ای از سوالات، که کلید هر سوال، نام آن در پاسخ خواهد بود.

هر سوال، شامل فیلدهای زیر است:

- `type`: نوع سوال (به‌عنوان مثال، `choice` برای انتخاب یک گزینه از بین چند گزینه).
- `instructions`: توضیح سوالی که مدل باید به آن پاسخ دهد.
- `criteria`: گزینه‌های ممکن برای پاسخ، به‌همراه توضیح معیار هر گزینه.

## all links

[All links of docs](https://docs.liara.ir/all-links-llms.txt)
