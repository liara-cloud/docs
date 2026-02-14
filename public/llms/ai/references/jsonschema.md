Original link: https://docs.liara.ir/ai/references/jsonschema/

# آشنایی با JSON Schema

`jsonSchema` یک تابع کمکی است که یک آبجکت اسکیمای JSON سازگار با AI SDK تولید می‌کند. این تابع اسکیمای JSON و در صورت نیاز، یک تابع اعتبارسنجی اختیاری را به عنوان ورودی دریافت می‌کند و قابلیت تایپ‌پذیری نیز دارد.  
شما می‌توانید از این تابع، برای تولید داده‌های ساختار یافته استفاده کنید. همچنین می‌توانید در [toolها](https://docs.liara.ir)، از این تابع، بهره ببرید.  

`jsonSchema` جایگزینی برای `Zod Schema` نیز، است و در شرایط پویاتر یا هنگام استفاده از کتابخانه‌های اعتبارسنجی، انعطاف‌پذیری بیشتری دارد.

## مثال استفاده

در ابتدا، برای کار با `jsonSchema` باید آن را وارد برنامه کنید:

```ts
import { jsonSchema } from 'ai';
```

سپس، می‌توانید مانند قطعه کد زیر، یک اسکیمای ساده با سه ویژگی `name`، `ingredients` و `steps` ایجاد کنید:

```js
const mySchema = jsonSchema<{
  recipe: {
    name: string;
    ingredients: { name: string; amount: string }[];
    steps: string[];
  };
}>
```

در ادامه، می‌توانید مانند قطعه کد زیر، بدنه اسکیمای JSON را تعریف کنید:

```js
({
  type: 'object',
  properties: {
    recipe: {
      type: 'object',
      properties: {
        name: { type: 'string' },
        ingredients: {
          type: 'array',
          items: {
            type: 'object',
            properties: {
              name: { type: 'string' },
              amount: { type: 'string' },
            },
            required: ['name', 'amount'],
          },
        },
        steps: {
          type: 'array',
          items: { type: 'string' },
        },
      },
      required: ['name', 'ingredients', 'steps'],
    },
  },
  required: ['recipe'],
});
```

قطعه کد کامل مثال استفاده از `jsonSchema`، در ادامه، قرار گرفته است:

```js
import { jsonSchema } from 'ai';

const mySchema = jsonSchema<{
  recipe: {
    name: string;
    ingredients: { name: string; amount: string }[];
    steps: string[];
  };
}>({
  type: 'object',
  properties: {
    recipe: {
      type: 'object',
      properties: {
        name: { type: 'string' },
        ingredients: {
          type: 'array',
          items: {
            type: 'object',
            properties: {
              name: { type: 'string' },
              amount: { type: 'string' },
            },
            required: ['name', 'amount'],
          },
        },
        steps: {
          type: 'array',
          items: { type: 'string' },
        },
      },
      required: ['name', 'ingredients', 'steps'],
    },
  },
  required: ['recipe'],
});

console.log(JSON.stringify(mySchema, null, 2))
```

خروجی کد فوق، مانند زیر است:

```json
{
  "jsonSchema": {
    "type": "object",
    "properties": {
      "recipe": {
        "type": "object",
        "properties": {
          "name": {
            "type": "string"
          },
          "ingredients": {
            "type": "array",
            "items": {
              "type": "object",
              "properties": {
                "name": {
                  "type": "string"
                },
                "amount": {
                  "type": "string"
                }
              },
              "required": [
                "name",
                "amount"
              ]
            }
          },
          "steps": {
            "type": "array",
            "items": {
              "type": "string"
            }
          }
        },
        "required": [
          "name",
          "ingredients",
          "steps"
        ]
      }
    },
    "required": [
      "recipe"
    ]
  }
}
```

نمودار قطعه کد JSON فوق، به شکل زیر است (برای وضوح بیشتر، بر روی تصویر کلیک کنید):

![completion output](https://media.liara.ir/ai/ai-sdk/json-schema.svg)

## all links

[All links of docs](https://docs.liara.ir/all-links-llms.txt)
