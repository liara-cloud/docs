Original link: https://docs.liara.ir/ai/references/zodschema/

# آشنایی با Zod Schema

`zodSchema` یک تابع کمکی است که یک اسکیمای Zod را به یک آبجکت اسکیمای JSON تبدیل می‌کند و این آبجکت، با AI SDK سازگار است.  
تابع `zodSchema` یک اسکیمای Zod و در صورت نیاز، یک پیکربندی را به عنوان ورودی دریافت می‌کند و در نهایت، یک `typed schema` را بازمی‌گرداند.  
شما می‌توانید از این تابع، برای تولید داده‌های ساختار یافته استفاده کنید. همچنین می‌توانید در [toolها](https://docs.liara.ir)، از این تابع، بهره ببرید.  

> در نظر داشته باشید که امکان ارسال مستقیم آبجکت‌های Zod به توابع AI SDK نیز، وجود دارد.  
> در این حالت، SDK، اسکیمای Zod را با استفاده از تابع `zodSchema`، به اسکیمای `JSON`، تبدیل می‌کند.  
> با این حال، اگر بخواهید گزینه‌هایی مانند `useReferences` را تنظیم کنید؛ می‌توانید به جای ارسال مستقیم اسکیمای Zod، از تابع `zodSchema`، استفاده کنید.

## مثال استفاده

در ابتدا برای کار با zod، باید آن را با استفاده از `npm` نصب کنید  
(امکان نصب با `yarn` و `pnpm` نیز، وجود دارد):

```bash
npm install zod
```

پس از نصب zod، بایستی توابع و ماژول‌های مورد نیاز را، مانند شکل زیر، وارد برنامه کنید:

```js
import { zodSchema } from 'ai';
import { z } from 'zod';
```

سپس، می‌توانید مانند قطعه کد زیر، یک اسکیمای ساده با فقط یک ویژگی به اسم `name`، ایجاد کنید:

```js
const baseCategorySchema = z.object({
  name: z.string(),
});
```

در ادامه، می‌توانید مانند قطعه کد زیر، یک Category از نوع بازگشتی (Recursive)، تعریف کنید:

```js
type Category = z.infer<typeof baseCategorySchema> & {
  subcategories: Category[];
};
```

در قطعه کد فوق، `subcategories`، آرایه‌ای از همان نوع `Category` است و این، به‌منزله بازگشتی بودن اسکیما است.  
در نهایت، می‌توانید مانند قطعه کد زیر، اسکیمای بازگشتی را با `z.lazy` تعریف کنید:  

```js
const categorySchema: z.ZodType<Category> = baseCategorySchema.extend({
  subcategories: z.lazy(() => categorySchema.array()),
});
```

در قطعه کد فوق، `categorySchema`، دارای همه ویژگی‌های `baseCategorySchema` و یک ویژگی جدید به نام `subcategories` است.  
در نظر داشته باشید که استفاده از `z.lazy` برای ساختارهای بازگشتی و جلوگیری از خطای ارجاع ناموجود، ضروری است.

حال، برای ساخت یک آبجکت جدید با یک ویژگی به اسم `category` (که از `categorySchema` استفاده می‌کند)، می‌توانید مانند قطعه کد زیر، عمل کنید:  

```js
const mySchema = zodSchema(
  z.object({
    category: categorySchema,
  }),
  { useReferences: true },
);
```

در قطعه کد فوق، با استفاده از تابع `zodSchema`، آبجکت به `JSON Schema`، تبدیل می‌شود.  
همچنین، گزینه `useReferences` فعال شده است چرا که برای پشتیبانی از ساختارهای بازگشتی حیاتی است  
و در `JSON Schema` از حلقه (loop) بی‌نهایت، جلوگیری می‌کند.

قطعه کد کامل مثال استفاده از `zodSchema`، در ادامه، قرار گرفته است:  

```js
import { zodSchema } from 'ai';
import { z } from 'zod';

// Define a base category schema
const baseCategorySchema = z.object({
  name: z.string(),
});

// Define the recursive Category type
type Category = z.infer<typeof baseCategorySchema> & {
  subcategories: Category[];
};

// Create the recursive schema using z.lazy
const categorySchema: z.ZodType<Category> = baseCategorySchema.extend({
  subcategories: z.lazy(() => categorySchema.array()),
});

// Create the final schema with useReferences enabled for recursive support
const mySchema = zodSchema(
  z.object({
    category: categorySchema,
  }),
  { useReferences: true },
);

console.log(JSON.stringify(mySchema, null, 2));
```

خروجی کد فوق، مانند زیر است:  

```json
{
  "jsonSchema": {
    "type": "object",
    "properties": {
      "category": {
        "type": "object",
        "properties": {
          "name": {
            "type": "string"
          },
          "subcategories": {
            "type": "array",
            "items": {
              "$ref": "#/properties/category"
            }
          }
        },
        "required": [
          "name",
          "subcategories"
        ],
        "additionalProperties": false
      }
    },
    "required": [
      "category"
    ],
    "additionalProperties": false,
    "$schema": "http://json-schema.org/draft-07/schema#"
  }
}
```

نمودار قطعه کد JSON فوق، به شکل زیر است (برای وضوح بیشتر، بر روی تصویر کلیک کنید):

![completion output](https://media.liara.ir/ai/ai-sdk/zodschema-converted-to-jsonschema.svg)

## all links

[All links of docs](https://docs.liara.ir/all-links-llms.txt)
