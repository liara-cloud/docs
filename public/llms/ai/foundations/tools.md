Original link: https://docs.liara.ir/ai/foundations/tools/

# Toolها (ابزارها) در هوش مصنوعی

مدل‌های زبانی بزرگ (LLMها) توانایی چشم‌گیری در تولید محتوا دارند، اما در انجام وظایف گسسته (مانند ریاضیات) و تعامل با دنیای بیرونی (مانند دریافت اطلاعات آب‌وهوا) با چالش‌هایی مواجه‌اند.
Toolها یا ابزارها، توابعی هستند که یک مدل زبانی می‌تواند آن‌ها را فراخوانی کند. نتایج این توابع، می‌تواند به مدل بازگردانده شود تا در پاسخ بعدی مورد استفاده قرار گیرد.

به عنوان مثال، وقتی از یک مدل می‌پرسید: «هوای تهران چطور است؟» و ابزاری برای دریافت وضعیت آب‌وهوا در دسترس باشد، مدل می‌تواند این ابزار را با آرگومان «تهران» فراخوانی کند. ابزار، داده‌های مربوط به وضعیت آب‌وهوا را واکشی (fetch) کرده و به مدل بازمی‌گرداند. سپس مدل می‌تواند از این اطلاعات در پاسخ خود استفاده کند.

## Tool در برنامه‌نویسی چیست؟

Tool، یک object قابل فراخوانی توسط مدل است که یک کار خاص را انجام می‌دهد.
در حال حاضر، API لیارا، از یک نوع Tool، پشتیبانی می‌کند:
- Function calling
- Web search

در ادامه، به توضیح این نوع Tool پرداخته شده است.

## فراخوانی تابع (Function calling)

با استفاده از قابلیت Function calling، شما می‌توانید به داده‌ها یا قابلیت‌هایی دسترسی پیدا کنید که به‌صورت مستقیم درون مدل در دسترس نیستند.
در واقع، شما می‌توانید تابع مدنظر خودتان را در قالب یک Tool تعریف کنید و مدل می‌تواند این تابع را با پارامترهای مشخص شده فراخوانی کند.

وقتی که در برنامه خود، یک Function Calling تعریف می‌کنید؛ در حقیقت، به مدل این اجازه را می‌دهید که وقتی در دریافت ورودی (Prompt)، متوجه شود که سؤال کاربر مربوط به یک تابع مشخص است، به‌صورت خودکار پارامترهای موردنیاز آن تابع را استخراج کند و برای اجرای آن تابع پیشنهاد دهد.

## OpenAI SDK

در ادامه، نحوه استفاده از Function calling با استفاده از OpenAI SDK در زبان‌های برنامه‌نویسی مختلف، توضیح داده شده است.

### JavaScript

در ابتدا، فرض کنید که تمام کارهای اتصال به مدل را با استفاده از ماژول `openai` انجام داده‌اید:

```js
import { OpenAI } from "openai";

const openai = new OpenAI({
  baseURL: 'https://docs.liara.ir/baseUrl',
  apiKey: '<LIARA_API_KEY>',
});
```

اکنون، فرض کنید که در برنامه خود، یک تابع تعریف کرده‌اید که با گرفتن دو ورودی **نام شهر** و **واحد دما**، دمای هوای شهر مذکور را در خروجی، بر می‌گرداند:

```js
function getCurrentWeather(location, unit = "celsius") {
  return {
    location: location,
    temperature: unit === "celsius" ? 35 : 68, // Celsius or Fahrenheit
    unit: unit,
    condition: "Sunny"
  };
}
```

> در نظر داشته باشید که تابع فوق، یک تابع شبیه‌سازی‌شده (mocked) است. در اصل، این تابع، هیچ‌گونه داده واقعی را واکشی نمی‌کند و فقط یک پاسخ ثابت را برمی‌گرداند.
> در صورتی که، واحد دما، **celsius** باشد، دمای ۳۵ درجه سانتی‌گراد و در غیر این صورت، دمای ۶۸ درجه فارنهایت را برمی‌گرداند.

پس از ساخت `openai` برای اتصال به مدل و یک تابع برای دریافت وضعیت آب‌وهوا، اکنون باید یک Tool برای مدل تعریف کنید 
که تابع `getCurrentWeather` را به مدل معرفی کند. برای این‌کار یک آرایه یک عضوی به نام `tools` مشابه قطعه کد زیر، ایجاد کنید:

```js
const tools = [{
    "type": "function",
    "function": {
        "name": "getCurrentWeather",
        "description": "Get current temperature for a given location.",
        "parameters": {
            "type": "object",
            "properties": {
                "location": {
                    "type": "string",
                    "description": "City and country e.g. Bogotá, Colombia"
                },
                "unit": {"type": "string", "enum": ["celsius", "fahrenheit"]},
            },
            "required": [
                "location"
            ],  
        },
    }
}];
```

> مدل، می‌تواند بیش از یک Tool داشته باشد؛ به‌همین خاطر، در این مثال، Toolها در قالب یک لیست تعریف شده‌اند.

در قطعه کد فوق، با استفاده از `"type": "function"`، نوع Tool، تابع تعریف شده است و با انجام این کار،
مدل متوجه می‌شود که این Tool، عملیات پردازشی با ورودی/خروجی، انجام می‌دهد.

در ادامه، تابع، به شکل زیر تعریف شده است:

```json
"function": {
  "name": "getCurrentWeather",
  "description": "Get current temperature for a given location.",
  "parameters": {
      "type": "object",
      "properties": {
          "location": {
              "type": "string",
              "description": "City and country e.g. Bogotá, Colombia"
          },
          "unit": {"type": "string", "enum": ["celsius", "fahrenheit"]},
      },
      "required": [
          "location"
      ],  
  },
}
```

فیلد `name` اسم تابع است و باید با نام تابعی که در برنامه خود تعریف کرده‌اید، یکسان باشد.
فیلد `description`، توضیحاتی درباره تابع است که به مدل کمک می‌کند تا متوجه شود این تابع چه کاری انجام می‌دهد و چه زمانی باید از آن استفاده کند.

فیلد `parameters`، ورودی‌های تابع، نوع آن‌ها و اجباری بودن یا اختیاری بودن استفاده از آن‌ها را مشخص می‌کند:

```json
"parameters": {
  "type": "object",
  "properties": {
    "location": {
      "type": "string",
      "description": "The city and state, e.g. San Francisco, CA",
    },
    "unit": {"type": "string", "enum": ["celsius", "fahrenheit"]},
  },
  "required": ["location"],
  }
```

مقدار فیلد `properties`، یک Object است که شامل ورودی‌های تابع می‌باشد.
در این مثال، تابع `getCurrentWeather`، دو ورودی به نام‌های `location` و `unit` دارد.

ورودی `location`، یک رشته است که نام شهر و ایالت را دریافت می‌کند و ورودی `unit`، یک رشته است که می‌تواند یکی از دو مقدار `celsius` یا `fahrenheit` باشد.
فیلد `enum`، می‌گوید که این ورودی، محدود به یکی از مقادیر مشخص شده است.

فیلد `required`، مشخص می‌کند که ورودی `location`، اجباری است و مدل باید حتماً این ورودی را دریافت کند.
ورودی‌های دیگر، اختیاری هستند و مدل می‌تواند آن‌ها را دریافت نکند.  

پس از تعریف Tool، کافیست تا propmt نهایی که قرار است به مدل ارسال شود را، ایجاد کنید:

```js
const messages = [{ role: "user", content: "What is the weather like in Paris today?" }];
```

حال، شما می‌توانید با استفاده از متد `chat.completions.create` و مانند شکل زیر، پرامپت را به مدل ارسال کنید:

```js
const completion = await openai.chat.completions.create({
    model: "openai/gpt-4.1",
    messages: messages,
    tools,
    tool_choice: "auto",
});
```

در قطعه کد فوق، با استفاده از `model`، مدل مورد نظر برای پردازش پرامپت مشخص شده است.
با استفاده از `messages`، پرامپت به مدل ارسال می‌شود و با استفاده از `tools`، Toolهایی که مدل می‌تواند از آن‌ها استفاده کند، مشخص شده است.
وقتی که مقدار فیلد `tool_choice`، بر روی `auto` تنظیم شده باشد، خود مدل تصمیم می‌گیرد که آیا لازم است از توابع تعریف‌شده استفاده کند یا خیر.

خروجی `completion`، شامل اطلاعات مربوط به پاسخ مدل است. برای 
مشاهده خروجی خواناتر، می‌توان مانند قطعه کد زیر، عمل کرد:

```js
console.log(JSON.stringify(completion, null, 2));
```

خروجی، به شکل زیر خواهد بود:

```json
{
  "id": "6834381c546e1efa313fa872",
  "model": "openai/gpt-4.1",
  "object": "chat.completion",
  "created": 1748252700,
  "choices": [
    {
      "logprobs": null,
      "finish_reason": "tool_calls",
      "native_finish_reason": "tool_calls",
      "index": 0,
      "message": {
        "role": "assistant",
        "content": "",
        "refusal": null,
        "reasoning": null,
        "tool_calls": [
          {
            "index": 0,
            "id": "call_DzeyygbKgYRe6gYvk73fv152",
            "type": "function",
            "function": {
              "name": "getCurrentWeather",
              "arguments": "{\"location\":\"Paris, France\"}"
            }
          }
        ]
      }
    }
  ],
  "usage": {
    "prompt_tokens": 77,
    "completion_tokens": 17,
    "total_tokens": 94,
    "prompt_tokens_details": {
      "cached_tokens": 0
    },
    "completion_tokens_details": {
      "reasoning_tokens": 0
    }
  }
}
```

نمودار قطعه کد JSON فوق، به شکل زیر است (برای وضوح بیشتر، بر روی تصویر کلیک کنید):

![completion output](https://media.liara.ir/ai/completion/javascript/completion-weather-output.svg)    

در ادامه، فیلدهای خروجی فوق، به‌صورت سطح به سطح، توضیح داده شده است:

### سطح اول

- `id`: شناسه یکتای درخواست ایجاد شده
- `model`: نام مدل مورد استفاده
- `object`: نوع شیء بازگشتی (همیشه `chat.completion`)
- `created`: زمان ایجاد پاسخ (Unix Timestamp)
- `choices`: لیست پاسخ‌های مدل (معمولاً فقط یکی)
- `usage`:  اطلاعات مربوط به تعداد توکن‌های استفاده‌شده

### داخل `choices[0]`

- `logprobs`: احتمال کلمات تولیدی (در حالت عادی `null`)
- `finish_reason`: دلیل توقف تولید مدل (اینجا بخاطر فراخوانی ابزار)
- `native_finish_reason`: مشابه `finish_reason` برای سازگاری با API جدید
- `index`: شماره پاسخ در لیست (`0` یعنی اولین)
- `message`: پاسخ تولیدشده شامل محتوا و اطلاعات فراخوانی تابع

### داخل `choices[0].message`

- `role`: نقش گوینده (در اینجا `assistant`)
- `content`: محتوای متنی پاسخ (در حالت فراخوانی ابزار، خالی است)
- `refusal` , `reasoning`: قابلیت‌های جدیدتر (در اینجا همه `null` هستند)
- `tool_calls`: لیست توابعی که مدل پیشنهاد اجرای آن‌ها را می‌دهد

### داخل `tool_calls[0]`

- `index`: شماره ترتیب این فراخوان در لیست `tool_calls`
- `id`: شناسه فراخوان تابع توسط مدل
- `type`: نوع فراخوان (اینجا همیشه `function`)
- `function.name`: نام تابعی که مدل تصمیم می‌گیرد صدا بزند
- `function.arguments`:  پارامترهای استخراج‌شده از prompt به‌شکل رشته JSON

### داخل `usage`

- `prompt_tokens`: تعداد توکن‌های استفاده‌شده برای پیام‌های ورودی
- `completion_tokens`:  تعداد توکن‌های استفاده‌شده برای تولید پاسخ مدل
- `total_tokens`: مجموع توکن‌ها  (prompt + completion)
- `prompt_tokens_details`: اطلاعات جزئی‌تر برای ورودی
- `cached_tokens`: تعداد توکن‌هایی از ورودی که با استفاده از حافظه‌ی کش مدل، بدون پردازش مجدد مورد استفاده قرار گرفته‌اند (`0` یعنی هیچی)
- `completion_tokens_details`: جزئیات پیشرفته برای آنالیز مدل
- `reasoning_tokens`: تعداد توکن‌هایی که مدل برای تحلیل، استدلال یا تصمیم‌گیری در فرآیند تولید پاسخ صرف کرده است

پس از دریافت خروجی، برای یافتن پارامترهایی که مدل برای فراخوانی تابع پیشنهاد داده است، می‌توان از کد زیر استفاده کرد:

```js
const argsRaw = completion.choices[0].message.tool_calls[0].function.arguments;
const args = JSON.parse(argsRaw);
console.log(args);
```

خروجی کد فوق، مانند شکل زیر، خواهد بود:

```json
{ location: 'Paris, France' }
```

خروجی فوق، نشان می‌دهد که مدل، با موفقیت، رابطه Tool با پرامپت را تشخیص داده و پارامترهای لازم برای فراخوانی تابع `getCurrentWeather` را استخراج کرده است.
اکنون؛ می‌توان این پارامترها را به تابع `getCurrentWeather` ارسال کرد:

```js
const weather = getCurrentWeather(
  args["location"],
  args["unit"] || "celsius"
);
```

در نهایت، می‌توان از خروجی تابع `getCurrentWeather`، برای پاسخ به کاربر استفاده کرد:

```js
console.log(`The current weather in ${args.location} is ${weather.temperature}°${weather.unit === "celsius" ? "C" : "F"} and ${weather.condition}.`);
```

خروجی نهایی، به شکل زیر خواهد بود:

```bash
The current weather in Paris, France is 35°C and Sunny.
```

قطعه کد کامل برنامه، به شکل زیر است:  

```js
import { OpenAI } from "openai";

const openai = new OpenAI({
  baseURL: 'https://docs.liara.ir/baseUrl',
  apiKey: '<LIARA_API_KEY>',
});

function getCurrentWeather(location, unit = "celsius") {
  return {
    location: location,
    temperature: unit === "celsius" ? 35 : 68, // Celsius or Fahrenheit
    unit: unit,
    condition: "Sunny"
  };
}

const tools = [{
    "type": "function",
    "function": {
        "name": "getCurrentWeather",
        "description": "Get current temperature for a given location.",
        "parameters": {
            "type": "object",
            "properties": {
                "location": {
                    "type": "string",
                    "description": "City and country e.g. Bogotá, Colombia"
                },
                "unit": {"type": "string", "enum": ["celsius", "fahrenheit"]},
            },
            "required": [
                "location"
            ],  
        },
    }
}];


const messages = [{ role: "user", content: "What is the weather like in Paris today?" }];

const completion = await openai.chat.completions.create({
    model: "openai/gpt-4.1",
    messages: messages,
    tools,
    tool_choice: "auto",
});

const argsRaw = completion.choices[0].message.tool_calls[0].function.arguments;
const args = JSON.parse(argsRaw);

const weather = getCurrentWeather(
  args["location"],
  args["unit"] || "celsius"
);

console.log(`The current weather in ${args.location} is ${weather.temperature}°${weather.unit === "celsius" ? "C" : "F"} and ${weather.condition}.`);
```

بدین صورت، شما می‌توانید با استفاده از قابلیت Function calling، توابع خود را به مدل معرفی کنید و از مدل، در پاسخ به سؤالات کاربران خود، استفاده کنید.

> شما می‌توانید برنامه واقعی مثال فوق را در [گیت‌هاب لیارا](https://github.com/liara-cloud/nodejs-getting-started/tree/ai) مشاهده و استفاده کنید.

---

## PHP

در ابتدا، فرض کنید که تمام کارهای اتصال به مدل را با استفاده از ماژول `openai` انجام داده‌اید:

```php
<?php

require 'vendor/autoload.php';

use OpenAI\Laravel\Facades\OpenAI;

// Your API setup
$yourApiKey = '<LIARA_API_KEY>'; 
$baseUrl = 'https://docs.liara.ir/baseUrl'; 
$model = 'openai/gpt-4.1';

// Initialize OpenAI client
$client = \OpenAI::factory()
    ->withApiKey($yourApiKey)
    ->withBaseUri($baseUrl)
    ->make();
```

اکنون، فرض کنید که در برنامه خود، یک تابع تعریف کرده‌اید که با گرفتن دو ورودی **نام شهر** و **واحد دما**، دمای هوای شهر مذکور را در خروجی، برمی‌گرداند:

```php
function get_current_weather($location, $unit = 'celsius') {
    return [
        'location' => $location,
        'temperature' => $unit === 'celsius' ? 35 : 68,
        'unit' => $unit,
        'condition' => 'Sunny',
    ];
}
```

> در نظر داشته باشید که تابع فوق، یک تابع شبیه‌سازی‌شده (mocked) است. در اصل، این تابع، هیچ‌گونه داده واقعی را واکشی نمی‌کند و فقط یک پاسخ ثابت را برمی‌گرداند.
> در صورتی که، واحد دما، **celsius** باشد، دمای ۳۵ درجه سانتی‌گراد و در غیر این صورت، دمای ۶۸ درجه فارنهایت را برمی‌گرداند.

پس از ساخت `client` برای اتصال به مدل و یک تابع برای دریافت وضعیت آب‌وهوا، اکنون باید یک Tool برای مدل تعریف کنید 
که تابع `get_current_weather` را به مدل معرفی کند. برای این‌کار یک آرایه یک عضوی به نام `tools` مشابه قطعه کد زیر، ایجاد کنید:

```php
$tools = [
    [
    'type' => 'function',
    'function' => [
        'name' => 'get_current_weather',
        'description' => 'Get the current weather in a given location',
        'parameters' => [
            'type' => 'object',
            'properties' => [
                'location' => [
                    'type' => 'string',
                    'description' => 'The city and state, e.g. San Francisco, CA',
                ],
                'unit' => [
                    'type' => 'string',
                    'enum' => ['celsius', 'fahrenheit']
                ],
            ],
            'required' => ['location'],
        ],
    ],
    ]
];
```

> مدل، می‌تواند بیش از یک Tool داشته باشد؛ به‌همین خاطر، در این مثال، Toolها در قالب یک لیست تعریف شده‌اند.

در قطعه کد فوق، با استفاده از `"type": "function"`، نوع Tool، تابع تعریف شده است و با انجام این کار،
مدل متوجه می‌شود که این Tool، عملیات پردازشی با ورودی/خروجی، انجام می‌دهد.

در ادامه، تابع، به شکل زیر تعریف شده است:

```php
'function' => [
  'name' => 'get_current_weather',
  'description' => 'Get the current weather in a given location',
  'parameters' => [
      'type' => 'object',
      'properties' => [
          'location' => [
              'type' => 'string',
              'description' => 'The city and state, e.g. San Francisco, CA',
          ],
          'unit' => [
              'type' => 'string',
              'enum' => ['celsius', 'fahrenheit']
          ],
      ],
      'required' => ['location'],
  ],
],
```

فیلد `name` اسم تابع است و باید با نام تابعی که در برنامه خود تعریف کرده‌اید، یکسان باشد.
فیلد `description`، توضیحاتی درباره تابع است که به مدل کمک می‌کند تا متوجه شود این تابع چه کاری انجام می‌دهد و چه زمانی باید از آن استفاده کند.

فیلد `parameters`، ورودی‌های تابع، نوع آن‌ها و اجباری بودن یا اختیاری بودن استفاده از آن‌ها را مشخص می‌کند:

```php
'parameters' => [
    'type' => 'object',
    'properties' => [
        'location' => [
            'type' => 'string',
            'description' => 'The city and state, e.g. San Francisco, CA',
        ],
        'unit' => [
            'type' => 'string',
            'enum' => ['celsius', 'fahrenheit']
        ],
    ],
    'required' => ['location'],
],
```

مقدار فیلد `properties`، یک آرایه است که شامل ورودی‌های تابع می‌باشد.
در این مثال، تابع `get_current_weather`، دو ورودی به نام‌های `location` و `unit` دارد.

ورودی `location`، یک رشته است که نام شهر و ایالت را دریافت می‌کند و ورودی `unit`، یک رشته است که می‌تواند یکی از دو مقدار `celsius` یا `fahrenheit` باشد.
فیلد `enum`، می‌گوید که این ورودی، محدود به یکی از مقادیر مشخص شده است.

فیلد `required`، مشخص می‌کند که ورودی `location`، اجباری است و مدل باید حتماً این ورودی را دریافت کند.
ورودی‌های دیگر، اختیاری هستند و مدل می‌تواند آن‌ها را دریافت نکند.  

پس از تعریف Tool، کافیست تا propmt نهایی که قرار است به مدل ارسال شود را، ایجاد کنید:

```php
$messages = [
    ['role' => 'user', 'content' => "What's the weather like in Tehran today?"]
];
```

حال، شما می‌توانید با استفاده از متد `client->chat()->create` و مانند شکل زیر، پرامپت را به مدل ارسال کنید:

```php
$response = $client->chat()->create([
    'model' => $model,
    'messages' => $messages,
    'tools' => $tools,
    'tool_choice' => 'auto',
]);
```

در قطعه کد فوق، با استفاده از `model`، مدل مورد نظر برای پردازش پرامپت مشخص شده است.
با استفاده از `messages`، پرامپت به مدل ارسال می‌شود و با استفاده از `tools`، Toolهایی که مدل می‌تواند از آن‌ها استفاده کند، مشخص شده است.
وقتی که مقدار فیلد `tool_choice`، بر روی `auto` تنظیم شده باشد، خود مدل تصمیم می‌گیرد که آیا لازم است از توابع تعریف‌شده استفاده کند یا خیر.

خروجی `response`، یک شیء خواهد بود که شامل اطلاعات مربوط به پاسخ مدل است. برای 
خوانایی بهتر خروجی آن، می‌توان مانند قطعه کد زیر، عمل کرد:

```php
echo json_encode($response->toArray(), JSON_PRETTY_PRINT) . "\n";
```

خروجی، به شکل زیر خواهد بود:

```json
{
  "id": "68359ca09a98cc66d17bc882",
  "object": "chat.completion",
  "created": 1748343967,
  "model": "openai/gpt-4.1",
  "choices": [
    {
      "index": 0,
      "message": {
        "role": "assistant",
        "content": "",
        "tool_calls": [
          {
            "id": "call_jIn62y3nyFa6z9AskOoskFmC",
            "type": "function",
            "function": {
              "name": "get_current_weather",
              "arguments": "{\"location\":\"Tehran\"}"
            }
          }
        ]
      },
      "logprobs": null,
      "finish_reason": "tool_calls"
    }
  ],
  "usage": {
    "prompt_tokens": 80,
    "completion_tokens": 16,
    "total_tokens": 96,
    "prompt_tokens_details": {
      "cached_tokens": 0
    },
    "completion_tokens_details": {
      "reasoning_tokens": 0
    }
  }
}
```

نمودار قطعه کد JSON فوق، به شکل زیر است (برای وضوح بیشتر، بر روی تصویر کلیک کنید):

![completion output](https://media.liara.ir/ai/completion/php/completion-output.svg)    

در ادامه، فیلدهای خروجی فوق، به‌صورت سطح به سطح، توضیح داده شده است:

### سطح اول

- `id`: شناسه یکتای درخواست ایجاد شده
- `object`: نوع شیء بازگشتی (همیشه `chat.completion`)
- `created`: زمان ایجاد پاسخ (Unix Timestamp)
- `model`: نام مدل مورد استفاده
- `choices`: لیست پاسخ‌های مدل (معمولاً فقط یکی)
- `usage`:  اطلاعات مربوط به تعداد توکن‌های استفاده‌شده

### داخل `choices[0]`

- `index`: شماره پاسخ در لیست (`0` یعنی اولین)
- `message`: پاسخ تولیدشده شامل محتوا و اطلاعات فراخوانی تابع
- `logprobs`: احتمال کلمات تولیدی (در حالت عادی `null`)
- `finish_reason`: دلیل توقف تولید مدل (اینجا بخاطر فراخوانی ابزار)

### داخل `choices[0].message`

- `role`: نقش گوینده (در اینجا `assistant`)
- `content`: محتوای متنی پاسخ (در حالت فراخوانی ابزار، خالی است)
- `tool_calls`: لیست توابعی که مدل پیشنهاد اجرای آن‌ها را می‌دهد

### داخل `tool_calls[0]`

- `id`: شناسه فراخوان تابع توسط مدل
- `type`: نوع فراخوان (اینجا همیشه `function`)
- `function.name`: نام تابعی که مدل تصمیم می‌گیرد صدا بزند
- `function.arguments`:  پارامترهای استخراج‌شده از prompt به‌شکل رشته JSON

### داخل `usage`

- `prompt_tokens`: تعداد توکن‌های استفاده‌شده برای پیام‌های ورودی
- `completion_tokens`:  تعداد توکن‌های استفاده‌شده برای تولید پاسخ مدل
- `total_tokens`: مجموع توکن‌ها  (prompt + completion)
- `prompt_tokens_details`: اطلاعات جزئی‌تر برای ورودی
- `cached_tokens`: تعداد توکن‌هایی از ورودی که با استفاده از حافظه‌ی کش مدل، بدون پردازش مجدد مورد استفاده قرار گرفته‌اند (`0` یعنی هیچی)
- `completion_tokens_details`: جزئیات پیشرفته برای آنالیز مدل
- `reasoning_tokens`: تعداد توکن‌هایی که مدل برای تحلیل، استدلال یا تصمیم‌گیری در فرآیند تولید پاسخ صرف کرده است

پس از دریافت خروجی، برای یافتن پارامترهایی که مدل برای فراخوانی تابع پیشنهاد داده است، می‌توان از کد زیر استفاده کرد:

```php
$args = json_decode($response->choices[0]->message->toolCalls[0]->function->arguments, true);
print_r($args);
```

خروجی کد فوق، مانند شکل زیر، خواهد بود:

```php
Array ( [location] => Tehran )
```

خروجی فوق، نشان می‌دهد که مدل، با موفقیت، رابطه Tool با پرامپت را تشخیص داده و پارامترهای لازم برای فراخوانی تابع `get_current_weather` را استخراج کرده است.
اکنون؛ می‌توان این پارامترها را به تابع `get_current_weather` ارسال کرد:

```php
$weather = get_current_weather(
    $args['location'],
    $args['unit'] ?? 'celsius'
);
```

در نهایت، می‌توان از خروجی تابع `get_current_weather`، برای پاسخ به کاربر استفاده کرد:

```php
echo "The weather in {$weather['location']} is {$weather['temperature']}°" .
    strtoupper(substr($weather['unit'], 0, 1)) . " and {$weather['condition']}.";
```

خروجی نهایی، به شکل زیر خواهد بود:

```bash
The weather in Tehran is 35°C and Sunny.
```

قطعه کد کامل برنامه، به شکل زیر است:  

```php
<?php

require 'vendor/autoload.php';

use OpenAI\Laravel\Facades\OpenAI;

$yourApiKey = '<LIARA_API_KEY>'; 
$baseUrl = 'https://docs.liara.ir/baseUrl';
$model = 'openai/gpt-4.1';

$client = \OpenAI::factory()
    ->withApiKey($yourApiKey)
    ->withBaseUri($baseUrl)
    ->make();

function get_current_weather($location, $unit = 'celsius') {
    return [
        'location' => $location,
        'temperature' => $unit === 'celsius' ? 35 : 68,
        'unit' => $unit,
        'condition' => 'Sunny',
    ];
}

$tools = [
    [
    'type' => 'function',
    'function' => [
        'name' => 'get_current_weather',
        'description' => 'Get the current weather in a given location',
        'parameters' => [
            'type' => 'object',
            'properties' => [
                'location' => [
                    'type' => 'string',
                    'description' => 'The city and state, e.g. San Francisco, CA',
                ],
                'unit' => [
                    'type' => 'string',
                    'enum' => ['celsius', 'fahrenheit']
                ],
            ],
            'required' => ['location'],
        ],
    ],
    ]
];

$messages = [
    ['role' => 'user', 'content' => "What's the weather like in Tehran today?"]
];

$response = $client->chat()->create([
    'model' => $model,
    'messages' => $messages,
    'tools' => $tools,
    'tool_choice' => 'auto',
]);


$args = json_decode($response->choices[0]->message->toolCalls[0]->function->arguments, true);

$weather = get_current_weather(
    $args['location'],
    $args['unit'] ?? 'celsius'
);

echo "The weather in {$weather['location']} is {$weather['temperature']}°" .
    strtoupper(substr($weather['unit'], 0, 1)) . " and {$weather['condition']}.";
```

بدین صورت، شما می‌توانید با استفاده از قابلیت Function calling، توابع خود را به مدل معرفی کنید و از مدل، در پاسخ به سؤالات کاربران خود، استفاده کنید.

> شما می‌توانید برنامه واقعی مثال فوق را در [گیت‌هاب لیارا](https://github.com/liara-cloud/php-getting-started/tree/ai) مشاهده و استفاده کنید.

---

## Python

در ابتدا، فرض کنید که تمام کارهای اتصال به مدل را با استفاده از ماژول `openai` انجام داده‌اید:

```python
from openai import OpenAI

client = OpenAI(
  base_url="https://docs.liara.ir/baseUrl",
  api_key="<LIARA_API_KEY>",
)
```

اکنون، فرض کنید که در برنامه خود، یک تابع تعریف کرده‌اید که با گرفتن دو ورودی **نام شهر** و **واحد دما**، دمای هوای شهر مذکور را در خروجی، برمی‌گرداند:

```python
def get_current_weather(location, unit="celsius"):
    
  return {
      "location": location,
      "temperature": unit == "celsius" and 35 or 68,  # Celsius or Fahrenheit
      "unit": unit,
      "condition": "Sunny"
    }
```

> در نظر داشته باشید که تابع فوق، یک تابع شبیه‌سازی‌شده (mocked) است. در اصل، این تابع، هیچ‌گونه داده واقعی را واکشی نمی‌کند و فقط یک پاسخ ثابت را برمی‌گرداند.
> در صورتی که، واحد دما، **celsius** باشد، دمای ۳۵ درجه سانتی‌گراد و در غیر این صورت، دمای ۶۸ درجه فارنهایت را برمی‌گرداند.

پس از ساخت `client` برای اتصال به مدل و یک تابع برای دریافت وضعیت آب‌وهوا، اکنون باید یک Tool برای مدل تعریف کنید 
که تابع `get_current_weather` را به مدل معرفی کند. برای این‌کار یک آرایه یک عضوی به نام `tools` مشابه قطعه کد زیر، ایجاد کنید:

```python
tools = [
  {
    "type": "function",
    "function": {
      "name": "get_current_weather",
      "description": "Get the current weather in a given location",
      "parameters": {
        "type": "object",
        "properties": {
          "location": {
            "type": "string",
            "description": "The city and state, e.g. San Francisco, CA",
          },
          "unit": {"type": "string", "enum": ["celsius", "fahrenheit"]},
        },
        "required": ["location"],
      },
    }
  }
]
```

> مدل، می‌تواند بیش از یک Tool داشته باشد؛ به‌همین خاطر، در این مثال، Toolها در قالب یک لیست تعریف شده‌اند.

در قطعه کد فوق، با استفاده از `"type": "function"`، نوع Tool، تابع تعریف شده است و با انجام این کار،
مدل متوجه می‌شود که این Tool، عملیات پردازشی با ورودی/خروجی، انجام می‌دهد.

در ادامه، تابع، به شکل زیر تعریف شده است:

```json
"function": {
    "name": "get_current_weather",
    "description": "Get the current weather in a given location",
    "parameters": {
    "type": "object",
    "properties": {
        "location": {
        "type": "string",
        "description": "The city and state, e.g. San Francisco, CA",
        },
        "unit": {"type": "string", "enum": ["celsius", "fahrenheit"]},
    },
    "required": ["location"],
    },
}
```

فیلد `name` اسم تابع است و باید با نام تابعی که در برنامه خود تعریف کرده‌اید، یکسان باشد.
فیلد `description`، توضیحاتی درباره تابع است که به مدل کمک می‌کند تا متوجه شود این تابع چه کاری انجام می‌دهد و چه زمانی باید از آن استفاده کند.

فیلد `parameters`، ورودی‌های تابع، نوع آن‌ها و اجباری بودن یا اختیاری بودن استفاده از آن‌ها را مشخص می‌کند:

```json
"parameters": {
  "type": "object",
  "properties": {
    "location": {
      "type": "string",
      "description": "The city and state, e.g. San Francisco, CA",
    },
    "unit": {"type": "string", "enum": ["celsius", "fahrenheit"]},
  },
  "required": ["location"],
  }
```

مقدار فیلد `properties`، یک Object است که شامل ورودی‌های تابع می‌باشد.
در این مثال، تابع `get_current_weather`، دو ورودی به نام‌های `location` و `unit` دارد.

ورودی `location`، یک رشته است که نام شهر و ایالت را دریافت می‌کند و ورودی `unit`، یک رشته است که می‌تواند یکی از دو مقدار `celsius` یا `fahrenheit` باشد.
فیلد `enum`، می‌گوید که این ورودی، محدود به یکی از مقادیر مشخص شده است.

فیلد `required`، مشخص می‌کند که ورودی `location`، اجباری است و مدل باید حتماً این ورودی را دریافت کند.
ورودی‌های دیگر، اختیاری هستند و مدل می‌تواند آن‌ها را دریافت نکند.  

پس از تعریف Tool، کافیست تا propmt نهایی که قرار است به مدل ارسال شود را، ایجاد کنید:

```python
messages = [{"role": "user", "content": "What's the weather in fahrenheit in Tehran today?"}]
```

حال، شما می‌توانید با استفاده از متد `chat.completions.create` و مانند شکل زیر، پرامپت را به مدل ارسال کنید:

```python
completion = client.chat.completions.create(
  model="openai/gpt-4.1",
  messages=messages,
  tools=tools,
  tool_choice="auto"
)
```

در قطعه کد فوق، با استفاده از `model`، مدل مورد نظر برای پردازش پرامپت مشخص شده است.
با استفاده از `messages`, پرامپت به مدل ارسال می‌شود و با استفاده از `tools`, Toolهایی که مدل می‌تواند از آن‌ها استفاده کند، مشخص شده است.
وقتی که مقدار فیلد `tool_choice`، بر روی `auto` تنظیم شده باشد، خود مدل تصمیم می‌گیرد که آیا لازم است از توابع تعریف‌شده استفاده کند یا خیر.

خروجی `completion`، یک شیء خواهد بود که شامل اطلاعات مربوط به پاسخ مدل است. برای 
خوانایی بهتر خروجی آن، می‌توان مانند قطعه کد زیر، عمل کرد:

```python
import json

print(json.dumps(completion.model_dump(), indent=2))
```

خروجی، به شکل زیر خواهد بود:

```json
{
  "id": "68340a90546e1efa313fa724",
  "choices": [
    {
      "finish_reason": "tool_calls",
      "index": 0,
      "logprobs": null,
      "message": {
        "content": "",
        "refusal": null,
        "role": "assistant",
        "annotations": null,
        "audio": null,
        "function_call": null,
        "tool_calls": [
          {
            "id": "call_IGlizOLwLJWLUT4uXv60pW9P",
            "function": {
              "arguments": "{\"location\":\"Tehran\",\"unit\":\"fahrenheit\"}",
              "name": "get_current_weather"
            },
            "type": "function",
            "index": 0
          }
        ],
        "reasoning": null
      },
      "native_finish_reason": "tool_calls"
    }
  ],
  "created": 1748241039,
  "model": "openai/gpt-4.1",
  "object": "chat.completion",
  "service_tier": null,
  "system_fingerprint": null,
  "usage": {
    "completion_tokens": 21,
    "prompt_tokens": 83,
    "total_tokens": 104,
    "completion_tokens_details": {
      "accepted_prediction_tokens": null,
      "audio_tokens": null,
      "reasoning_tokens": 0,
      "rejected_prediction_tokens": null
    },
    "prompt_tokens_details": {
      "audio_tokens": null,
      "cached_tokens": 0
    }
  }
}
```

نمودار قطعه کد JSON فوق، به شکل زیر است (برای وضوح بیشتر، بر روی تصویر کلیک کنید):

![completion output](https://media.liara.ir/ai/chat-completion-output-json.svg)    

در ادامه، فیلدهای خروجی فوق، به‌صورت سطح به سطح، توضیح داده شده است:

### سطح اول

- `id`: شناسه یکتای درخواست ایجاد شده
- `choices`: لیست پاسخ‌های مدل (معمولاً فقط یکی)
- `created`: زمان ایجاد پاسخ (Unix Timestamp)
- `model`: نام مدل مورد استفاده
- `object`: نوع شیء بازگشتی (همیشه `chat.completion`)
- `service_tier`: سطح دسترسی به سرویس (در اینجا `null`)
- `system_fingerprint`: هش یا شناسه‌ سیستمی مدل (در اینجا `null`)
- `usage`:  اطلاعات مربوط به تعداد توکن‌های استفاده‌شده

### داخل `choices[0]`

- `finish_reason`: دلیل توقف تولید مدل (اینجا بخاطر فراخوانی ابزار)
- `index`: شماره پاسخ در لیست (`0` یعنی اولین)
- `logprobs`: احتمال کلمات تولیدی (در حالت عادی `null`)
- `message`: پاسخ تولیدشده شامل محتوا و اطلاعات فراخوانی تابع
- `native_finish_reason`: مشابه `finish_reason` برای سازگاری با API جدید

### داخل `choices[0].message`

- `content`: محتوای متنی پاسخ (در حالت فراخوانی ابزار، خالی است)
- `role`: نقش گوینده (در اینجا `assistant`)
- `tool_calls`: لیست توابعی که مدل پیشنهاد اجرای آن‌ها را می‌دهد
- `function_call`: اگر از API قدیمی function calling استفاده شود؛ این فیلد، پر خواهد شد (در اینجا `null`)
- `audio` , `reasoning` , `annotations` , `refusal`: قابلیت‌های جدیدتر (در اینجا همه `null` هستند)

### داخل `tool_calls[0]`

- `id`: شناسه فراخوان تابع توسط مدل
- `type`: نوع فراخوان (اینجا همیشه `function`)
- `function.name`: نام تابعی که مدل تصمیم می‌گیرد صدا بزند
- `function.arguments`:  پارامترهای استخراج‌شده از prompt به‌شکل رشته JSON
- `index`: شماره ترتیب این فراخوان در لیست `tool_calls`

### داخل `usage`

- `completion_tokens`:  تعداد توکن‌های استفاده‌شده برای تولید پاسخ مدل
- `prompt_tokens`: تعداد توکن‌های استفاده‌شده برای پیام‌های ورودی
- `total_tokens`: مجموع توکن‌ها  (prompt + completion)
- `completion_tokens_details`: جزئیات پیشرفته برای آنالیز مدل (معمولاً خالی یا `null`)
- `prompt_tokens_details`: اطلاعات جزئی‌تر برای ورودی

پس از دریافت خروجی، برای یافتن پارامترهایی که مدل برای فراخوانی تابع پیشنهاد داده است، می‌توان از کد زیر استفاده کرد:

```python
args = json.loads(completion.choices[0].message.tool_calls[0].function.arguments)
print(args)
```

خروجی کد فوق، مانند شکل زیر، خواهد بود:

```json
{'location': 'Tehran', 'unit': 'fahrenheit'}
```

خروجی فوق، نشان می‌دهد که مدل، با موفقیت، رابطه Tool با پرامپت را تشخیص داده و پارامترهای لازم برای فراخوانی تابع `get_current_weather` را استخراج کرده است.
اکنون؛ می‌توان این پارامترها را به تابع `get_current_weather` ارسال کرد:

```python
weather = get_current_weather(
    location=args["location"],
    unit=args.get("unit", "celsius")
)
```

در نهایت، می‌توان از خروجی تابع `get_current_weather`، برای پاسخ به کاربر استفاده کرد:

```python
print(f"The weather in {weather['location']} is {weather['temperature']}°{weather['unit'][0].upper()} and {weather['condition']}.")
```

خروجی نهایی، به شکل زیر خواهد بود:

```bash
The weather in Tehran is 68°F and Sunny.
```

قطعه کد کامل برنامه، به شکل زیر است:  

```python
from openai import OpenAI
import json

client = OpenAI(
  base_url="https://docs.liara.ir/baseUrl",
  api_key="<LIARA_API_KEY>",
)

def get_current_weather(location, unit="celsius"):
    return {
        "location": location,
        "temperature": unit == "celsius" and 35 or 68,  # Celsius or Fahrenheit
        "unit": unit,
        "condition": "Sunny"
    }

tools = [
  {
    "type": "function",
    "function": {
      "name": "get_current_weather",
      "description": "Get the current weather in a given location",
      "parameters": {
        "type": "object",
        "properties": {
          "location": {
            "type": "string",
            "description": "The city and state, e.g. San Francisco, CA",
          },
          "unit": {"type": "string", "enum": ["celsius", "fahrenheit"]},
        },
        "required": ["location"],
      },
    }
  }
]

messages = [{"role": "user", "content": "What's the weather in fahrenheit like in Tehran today?"}]

completion = client.chat.completions.create(
  model="openai/gpt-4.1",
  messages=messages,
  tools=tools,
  tool_choice="auto"
)

args = json.loads(completion.choices[0].message.tool_calls[0].function.arguments)
print(args)

weather = get_current_weather(
    location=args["location"],
    unit=args.get("unit", "celsius")
)

print(f"The weather in {weather['location']} is {weather['temperature']}°{weather['unit'][0].upper()} and {weather['condition']}.")
```

بدین صورت، شما می‌توانید با استفاده از قابلیت Function calling، توابع خود را به مدل معرفی کنید و از مدل، در پاسخ به سؤالات کاربران خود، استفاده کنید.

> شما می‌توانید برنامه واقعی مثال فوق را در [گیت‌هاب لیارا](https://github.com/liara-cloud/python-getting-started/tree/ai) مشاهده و استفاده کنید.

---

## dotNET

در ابتدا، فرض کنید که تمام کارهای اتصال به مدل را با استفاده از ماژول `openai` انجام داده‌اید:

```dotnet
string apiKey = "<LIARA_API_KEY>"; 
string baseUrl = "https://docs.liara.ir/baseUrl";
OpenAIClientOptions open_options = new OpenAIClientOptions
{
    Endpoint = new Uri(baseUrl)
};
ChatClient client = new(model: "openai/gpt-4.1-mini", credential: new ApiKeyCredential(apiKey), options: open_options);
```

اکنون، فرض کنید که در برنامه خود، یک تابع تعریف کرده‌اید که با گرفتن دو ورودی **نام شهر** و **واحد دما**، دمای هوای شهر مذکور را در خروجی، بر می‌گرداند:

```dotnet
public class WeatherInfo
{
    public required string Location { get; set; }
    public int Temperature { get; set; }
    public required string Unit { get; set; }
    public required string Condition { get; set; }
}

public WeatherInfo GetCurrentWeather(string location, string unit = "celsius")
{
    int temperature = unit.ToLower() == "celsius" ? 35 : 68;

    return new WeatherInfo
    {
        Location = location,
        Temperature = temperature,
        Unit = unit,
        Condition = "Sunny"
    };
}
```

> در نظر داشته باشید که تابع فوق، یک تابع شبیه‌سازی‌شده (mocked) است. در اصل، این تابع، هیچ‌گونه داده واقعی را واکشی نمی‌کند و فقط یک پاسخ ثابت را برمی‌گرداند.
> در صورتی که، واحد دما، **celsius** باشد، دمای ۳۵ درجه سانتی‌گراد و در غیر این صورت، دمای ۶۸ درجه فارنهایت را برمی‌گرداند.

پس از ساخت `client` برای اتصال به مدل و یک تابع برای دریافت وضعیت آب‌وهوا، اکنون باید یک Tool برای مدل تعریف کنید 
که تابع `GetCurrentWeather` را به مدل معرفی کند. برای این‌کار، مشابه قطعه کد زیر، عمل کنید:

```dotnet
private static readonly ChatTool getCurrentWeatherTool = ChatTool.CreateFunctionTool(
  functionName: nameof(GetCurrentWeather),
  functionDescription: "Get the current weather in a given location",
  functionParameters: BinaryData.FromBytes("""
      {
          "type": "object",
          "properties": {
              "location": {
                  "type": "string",
                  "description": "The city and state, e.g. Boston, MA"
              },
              "unit": {
                  "type": "string",
                  "enum": [ "celsius", "fahrenheit" ],
                  "description": "The temperature unit to use. Infer this from the specified location."
              }
          },
          "required": [ "location" ]
      }
      """u8.ToArray())
);
```

> در نظر داشته باشید که مدل، می‌تواند بیش از یک Tool داشته باشد.

در قطعه کد فوق، با استفاده از `ChatTool.CreateFunctionTool`، نوع Tool، تابع تعریف شده است و با انجام این کار،
مدل متوجه می‌شود که این Tool، عملیات پردازشی با ورودی/خروجی، انجام می‌دهد.

در ادامه، تابع، به شکل زیر تعریف شده است:

```dotnet
functionName: nameof(GetCurrentWeather),
functionDescription: "Get the current weather in a given location",
functionParameters: BinaryData.FromBytes("""
    {
        "type": "object",
        "properties": {
            "location": {
                "type": "string",
                "description": "The city and state, e.g. Boston, MA"
            },
            "unit": {
                "type": "string",
                "enum": [ "celsius", "fahrenheit" ],
                "description": "The temperature unit to use. Infer this from the specified location."
            }
        },
        "required": [ "location" ]
    }
    """u8.ToArray())
```

فیلد `functionName` اسم تابع است و باید با نام تابعی که در برنامه خود تعریف کرده‌اید، یکسان باشد (برای حفظ ساختار پویای کد، از `nameof()` استفاده شده است).
فیلد `functionDescription`، توضیحاتی درباره تابع است که به مدل کمک می‌کند تا متوجه شود این تابع چه کاری انجام می‌دهد و چه زمانی باید از آن استفاده کند.

بخش `functionParameters`، ورودی‌های تابع، نوع آن‌ها و اجباری بودن یا اختیاری بودن استفاده از آن‌ها را مشخص می‌کند:

```dotnet
functionParameters: BinaryData.FromBytes("""
    {
        "type": "object",
        "properties": {
            "location": {
                "type": "string",
                "description": "The city and state, e.g. Boston, MA"
            },
            "unit": {
                "type": "string",
                "enum": [ "celsius", "fahrenheit" ],
                "description": "The temperature unit to use. Infer this from the specified location."
            }
        },
        "required": [ "location" ]
    }
    """u8.ToArray())
```

مقدار فیلد `properties`، شامل ورودی‌های تابع می‌باشد.
در این مثال، تابع `GetCurrentWeather`، دو ورودی به نام‌های `location` و `unit` دارد.

ورودی `location`، یک رشته است که نام شهر و ایالت را دریافت می‌کند و ورودی `unit`، یک رشته است که می‌تواند یکی از دو مقدار `celsius` یا `fahrenheit` باشد.
فیلد `enum`، می‌گوید که این ورودی، محدود به یکی از مقادیر مشخص شده است.

فیلد `required`، مشخص می‌کند که ورودی `location`، اجباری است و مدل باید حتماً این ورودی را دریافت کند.
ورودی‌های دیگر، اختیاری هستند و مدل می‌تواند آن‌ها را دریافت نکند.  

دستور `u8.ToArray()`، رشته‌ی UTF-8 را به‌صورت `[]byte` و نه یک string معمولی، ذخیره می‌کند.  

پس از تعریف Tool، کافیست تا propmt نهایی که قرار است به مدل ارسال شود را، ایجاد کنید:

```dotnet
List<ChatMessage> messages = new()
{
    new UserChatMessage("What's weather like in Tehran")
};
```

اکنون، کافیست تا با ایجاد یک `ChatCompletionOptions`، ابزار (Tool) تعریف شده را برای مدل، مشخص کنید:

```js
ChatCompletionOptions options = new()
{
    Tools = { getCurrentWeatherTool },       
};
```

حال، شما می‌توانید با استفاده از متد `client.CompleteChat` و مانند شکل زیر، پرامپت را به مدل ارسال کنید:

```dotnet
ChatCompletion completion = client.CompleteChat(messages, options);
```

در قطعه کد فوق، با استفاده از `messages`، پرامپت مورد پردازش مشخص شده است.
با استفاده از `options`، ابزارهای مورد استفاده مدل نیز، مشخص شده‌اند.

خروجی `completion`، شامل اطلاعات مربوط به پاسخ مدل است. برای 
مشاهده خروجی خواناتر، می‌توان مانند قطعه کد زیر، عمل کرد:

```js
Console.WriteLine(JsonSerializer.Serialize(completion, new JsonSerializerOptions { WriteIndented = true }));
```

خروجی، به شکل زیر خواهد بود:

```json
{
  "CreatedAt": "2025-05-28T10:20:11+00:00",
  "FinishReason": 3,
  "ContentTokenLogProbabilities": [],
  "RefusalTokenLogProbabilities": [],
  "Role": 2,
  "Content": [
    {
      "Kind": 0,
      "Text": "",
      "ImageUri": null,
      "ImageBytes": null,
      "ImageBytesMediaType": null,
      "ImageDetailLevel": null,
      "Refusal": null
    }
  ],
  "ToolCalls": [
    {
      "Kind": 0,
      "FunctionName": "GetCurrentWeather",
      "FunctionArguments": {},
      "Id": "call_wGFfwR2FWACyMDM4rJMoKyiv"
    }
  ],
  "Refusal": null,
  "FunctionCall": null,
  "Id": "6836e35c3a1fce8fd74032c4",
  "Model": "openai/gpt-4.1-mini",
  "SystemFingerprint": null,
  "Usage": {
    "OutputTokenCount": 16,
    "InputTokenCount": 89,
    "TotalTokenCount": 105,
    "OutputTokenDetails": {
      "ReasoningTokenCount": 0,
      "AudioTokenCount": 0
    },
    "InputTokenDetails": {
      "AudioTokenCount": 0,
      "CachedTokenCount": 0
    }
  }
}
```

نمودار قطعه کد JSON فوق، به شکل زیر است (برای وضوح بیشتر، بر روی تصویر کلیک کنید):

![completion output](https://media.liara.ir/ai/completion/dotnet/output.svg)    

در ادامه، فیلدهای خروجی فوق، به‌صورت سطح به سطح، توضیح داده شده است:

### سطح اول

- `CreatedAt`: زمان UTC که در آن، completion تولید شده است
- `FinishReason`: دلیل توقف تولید مدل (`0` پاسخ کامل، `1` رسیدن به حد توکن، `2` پاسخ فیلتر شده و `3` فراخوانی ابزار توسط مدل)
- `ContentTokenLogProbabilities`: احتمال لگاریتمی هر توکن تولیدشده توسط مدل
- `RefusalTokenLogProbabilities`: احتمال لگاریتمی خودداری مدل از پاسخ دادن
- `Role`: نقش فرستنده پیام (`0` یعنی سیستم، `1` یعنی User و `2` یعنی Assistant)
- `Content`: محتوای تولید شده توسط مدل (در اینجا، خالی به علت فراخوانی Tool)
- `ToolCalls`: لیستی از Toolها که مدل قصد دارد آن‌ها را اجرا کند
- `Refusal`: دلیل پاسخ ندادن مدل به پرامپت (در صورتی که مدل، پاسخ پرامپت را ندهد)
- `FunctionCall`: ساختار قدیمی OpenAI برای فراخوانی توابع (اینجا استفاده نشده است)
- `Id`: شناسه یکتای پاسخ (completion)
- `Model`:  نام مدلی که پاسخ را تولید کرده است
- `SystemFingerprint`: هش داخلی یا شناسه سیستم برای مدل یا سرور استفاده‌شده (معمولاً null)
- `Usage`: آمار مصرف توکن‌ها

### داخل `Content[0]`

- `logprobs`:

### داخل `Content[0]`

- `Kind`: نوع محتوای تولید شده (`0` متن، `1` تصویر، `2` صوت و ...)
- `Text`: محتوای متنی تولیدشده توسط مدل (خالی به دلیل فراخوانی ابزار)
- `ImageUri`: آدرس URL تصویر در صورتی که مدل، تصویر تولید کند
- `ImageBytes`: بایت‌های مستقیم تصویر تولید شده توسط مدل (برای مواردی که URL در دسترس نباشد).
- `ImageBytesMediaType`: فرمت تصویر تولید شده توسط مدل
- `ImageDetailLevel`: سطح جزئیات تصویر تولید شده توسط مدل (مثلاً مقدار `high` یعنی با کیفیت)
- `Refusal`: علت پاسخ‌ندادن مدل در صورت خودداری مدل از ارائه پاسخ

### داخل `ToolCalls`

- `Kind`: نوع ابزار فراخوانی‌شده (`0` یعنی فراخوانی یک تابع معمولی)
- `FunctionName`: اسم تابعی که مدل تشخیص داده باید اجرا شود
- `FunctionArguments`: ورودی‌هایی که مدل قصد دارد به تابع بدهد
- `Id`: شناسه یکتای فراخوانی تابع.

### داخل `Usage`

- `InputTokenCount`: تعداد توکن‌های استفاده‌شده برای پیام‌های ورودی
- `OutputTokenCount`:  تعداد توکن‌های استفاده‌شده برای تولید پاسخ مدل
- `TotalTokenCount`: مجموع توکن‌ها (InputTokenCount + OutputTokenCount)
- `OutputTokenDetails`: جزئیات بیشتر پیام تولید شده توسط مدل
- `ReasoningTokenCount`:  تعداد توکن‌هایی که مدل صرف استدلال و منطق کرده است (در صورت پشتیبانی مدل از این قابلیت)
- `AudioTokenCount`: توکن‌های مربوط به صوت (مثلاً در تبدیل گفتار به متن یا بالعکس)
- `InputTokenDetails`: جزئیات بیشتر پرامپت ارائه شده به مدل
- `AudioTokenCount`: توکن‌های صوتی ورودی
- `CachedTokenCount`:  تعداد توکن‌هایی از ورودی که با استفاده از حافظه‌ی کش مدل، بدون پردازش مجدد مورد استفاده قرار گرفته‌اند

پس از دریافت خروجی
از مدل، نوبت پردازش آن است. یکی از حالات پاسخ مدل، پاسخ مستقیم و 
بدون فراخوانی ابزار است که می‌توان این پاسخ را مانند قطعه کد زیر، در ابتدا بررسی، و سپس چاپ کرد:

```dotnet
if (completion.FinishReason == ChatFinishReason.Stop)
{
  messages.Add(new AssistantChatMessage(completion));
  Console.WriteLine("Final response: " + completion.Content[0].Text);
}
```

به دلیل اینکه در پرامپت ارسالی به مدل، آب و هوا پرسیده شده است و مدل، 
از فراخوانی تابع استفاده کرده است؛ پس بلوک قطعه کد فوق، 
اجرا نخواهد شد، چرا که شرط آن، برقرار نیست.

یکی از حالات دیگر، زمانی است که مدل، ابزار فراخوانی می‌کند. 
برای بررسی اینکه، کدام Tool توسط مدل، فراخوانی شده است؛ می‌توان از قطعه کد زیر استفاده کرد:

```dotnet
else if (completion.FinishReason == ChatFinishReason.ToolCalls)
{

    messages.Add(new AssistantChatMessage(completion.ToolCalls));
    foreach (ChatToolCall toolCall in completion.ToolCalls)
    {
        
    }
}
```

برای مدیریت خطاهای ناشناخته نیز، می‌توان قطعه کد زیر را به قطعه کد فوق، اضافه کرد:

```dotnet
else
{
    throw new NotImplementedException($"Unhandled finish reason: {completion.FinishReason}");
}
```

اکنون، برای بررسی اینکه آیا تابع `GetCurrentWeather` فراخوانی شده است یا خیر؛ می‌توان قطعه کد زیر را 
درون حلقه `foreach`، قرار داد:

```dotnet
if (toolCall.FunctionName == nameof(GetCurrentWeather))
{

    using JsonDocument argsJson = JsonDocument.Parse(toolCall.FunctionArguments);
    if (!argsJson.RootElement.TryGetProperty("location", out JsonElement location))
        throw new ArgumentNullException(nameof(location), "location is required");

    bool hasUnit = argsJson.RootElement.TryGetProperty("unit", out JsonElement unit);

    string locationStr = location.GetString() ?? "Unknown";
    string unitStr = hasUnit ? unit.GetString() ?? "celsius" : "celsius";

    Program p = new Program();
    WeatherInfo info = p.GetCurrentWeather(locationStr, unitStr);

    Console.WriteLine($"The weather in {info.Location} is {info.Temperature}° {info.Unit}, {info.Condition}.");
    return;

}
```

قطعه کد فوق، بررسی می‌کند که آیا اسم تابع خواسته‌شده همان `GetCurrentWeather` است یا خیر.
در صورت یکی بودن تابع، ورودی‌هایی که مدل در `FunctionArguments` قرار داده است (مثل location و unit) با استفاده از `JsonDocument` از حالت JSON به متغیرهای قابل استفاده در dotNET تبدیل می‌شوند.

در ادامه، برنامه بررسی می‌کند که حتماً مقدار `location` موجود باشد (چون در بخش required قرار داشت). 
در نهایت، مقادیر `location` و `unit` استخراج می‌شوند 
و خروجی تابع، به شکل قابل خواندن در Console، چاپ می‌شود:

```bash
The weather in Tehran is 35° celsius, Sunny.
```

قطعه کد کامل برنامه، به شکل زیر است:

```dotnet
using System.Text.Json;
using System.ClientModel;

using OpenAI;
using OpenAI.Chat;

class Program
{

    public class WeatherInfo
    {
        public required string Location { get; set; }
        public int Temperature { get; set; }
        public required string Unit { get; set; }
        public required string Condition { get; set; }
    }

    public WeatherInfo GetCurrentWeather(string location, string unit = "celsius")
    {
        int temperature = unit.ToLower() == "celsius" ? 35 : 68;

        return new WeatherInfo
        {
            Location = location,
            Temperature = temperature,
            Unit = unit,
            Condition = "Sunny"
        };
    }
    

    private static readonly ChatTool getCurrentWeatherTool = ChatTool.CreateFunctionTool(
        functionName: nameof(GetCurrentWeather),
        functionDescription: "Get the current weather in a given location",
        functionParameters: BinaryData.FromBytes("""
            {
                "type": "object",
                "properties": {
                    "location": {
                        "type": "string",
                        "description": "The city and state, e.g. Boston, MA"
                    },
                    "unit": {
                        "type": "string",
                        "enum": [ "celsius", "fahrenheit" ],
                        "description": "The temperature unit to use. Infer this from the specified location."
                    }
                },
                "required": [ "location" ]
            }
            """u8.ToArray())
    );

    static void Main()
    {
        string apiKey = "<LIARA_API_KEY>";
        string baseUrl = "https://docs.liara.ir/baseUrl";

        OpenAIClientOptions open_options = new OpenAIClientOptions
        {
            Endpoint = new Uri(baseUrl)
        };
```


```csharp
        ChatClient client = new(model: "openai/gpt-4.1-mini", credential: new ApiKeyCredential(apiKey), options: open_options);

        List<ChatMessage> messages = new()
        {
            new UserChatMessage("What's weather like in Tehran")
        };


        ChatCompletionOptions options = new()
        {
            Tools = { getCurrentWeatherTool },       
        };

        ChatCompletion completion = client.CompleteChat(messages, options);

        // Console.WriteLine(JsonSerializer.Serialize(completion, new JsonSerializerOptions { WriteIndented = true }));


        if (completion.FinishReason == ChatFinishReason.Stop)
        {
            messages.Add(new AssistantChatMessage(completion));
            Console.WriteLine("Final response: " + completion.Content[0].Text);
        }
        
        else if (completion.FinishReason == ChatFinishReason.ToolCalls)
        {

            messages.Add(new AssistantChatMessage(completion.ToolCalls));
            foreach (ChatToolCall toolCall in completion.ToolCalls)
            {
                if (toolCall.FunctionName == nameof(GetCurrentWeather))
                {

                    using JsonDocument argsJson = JsonDocument.Parse(toolCall.FunctionArguments);
                    if (!argsJson.RootElement.TryGetProperty("location", out JsonElement location))
                        throw new ArgumentNullException(nameof(location), "location is required");

                    bool hasUnit = argsJson.RootElement.TryGetProperty("unit", out JsonElement unit);

                    string locationStr = location.GetString() ?? "Unknown";
                    string unitStr = hasUnit ? unit.GetString() ?? "celsius" : "celsius";

                    Program p = new Program();
                    WeatherInfo info = p.GetCurrentWeather(locationStr, unitStr);

                    Console.WriteLine($"The weather in {info.Location} is {info.Temperature}° {info.Unit}, {info.Condition}.");
                    return;

                }
            }
        }

        else
        {
            throw new NotImplementedException($"Unhandled finish reason: {completion.FinishReason}");
        }
    }
}

```

بدین صورت، شما می‌توانید با استفاده از قابلیت Function calling، توابع خود را به مدل معرفی کنید و از مدل، در پاسخ به سؤالات کاربران خود، استفاده کنید.


در ابتدا، فرض کنید که تمام کارهای اتصال به مدل را با استفاده از ماژول `openai` انجام داده‌اید:

```go
client := openai.NewClient(
  option.WithAPIKey("<LIARA_API_KEY>"),
  option.WithBaseURL("<baseUrl>"),
)
```

اکنون، فرض کنید که در برنامه خود، یک تابع تعریف کرده‌اید که با گرفتن دو ورودی **نام شهر** و **واحد دما**، دمای هوای شهر مذکور را در خروجی، بر‌می‌گرداند:

```go
type WeatherData struct {
	Location    string `json:"location"`
	Temperature int    `json:"temperature"`
	Unit        string `json:"unit"`
	Condition   string `json:"condition"`
}

func getWeather(location, unit string) WeatherData {
	if unit == "" {
		unit = "celsius"
	}

	temp := 35
	if unit == "fahrenheit" {
		temp = 68
	}

	return WeatherData{
		Location:    location,
		Temperature: temp,
		Unit:        unit,
		Condition:   "Sunny",
	}
}
```

> در نظر داشته باشید که تابع فوق، یک تابع شبیه‌سازی‌شده (mocked) است. در اصل، این تابع، هیچ‌گونه داده واقعی را واکشی نمی‌کند و فقط یک پاسخ ثابت را برمی‌گرداند.
> در صورتی که، واحد دما، **celsius** باشد، دمای ۳۵ درجه سانتی‌گراد و در غیر این صورت، دمای ۶۸ درجه فارنهایت را برمی‌گرداند.

پس از ساخت `client` برای اتصال به مدل و یک تابع برای دریافت وضعیت آب‌وهوا، 
اکنون نوبت تعریف پیام (پرامپت) اولیه، برای مدل است که این کار، مانند شکل زیر انجام می‌شود:

```go
question := "What's the weather like in Tehran today?"
```

اکنون باید یک Tool برای مدل تعریف کنید 
که تابع `getWeather` را به مدل معرفی کند. برای این‌کار مشابه قطعه کد زیر، عمل کنید:

```go
weatherTool := openai.ChatCompletionToolParam{
	Function: openai.FunctionDefinitionParam{
		Name:        "getWeather",
		Description: openai.String("Get the current weather in a given location"),
		Parameters: openai.FunctionParameters{
			"type": "object",
			"properties": map[string]interface{}{
				"location": map[string]string{
					"type":        "string",
					"description": "The city and state, e.g. San Francisco, CA",
				},
				"unit": map[string]interface{}{
					"type": "string",
					"enum": []string{"celsius", "fahrenheit"},
				},
			},
			"required": []string{"location"},
		},
	},
}
```

> در نظر داشته باشید که مدل، می‌تواند بیش از یک Tool داشته باشد.

در قطعه کد فوق، با استفاده از `openai.FunctionDefinitionParam`، نوع Tool، تابع تعریف شده است و با انجام این کار،
مدل متوجه می‌شود که این Tool، عملیات پردازشی با ورودی/خروجی، انجام می‌دهد.

در ادامه، تابع، به شکل زیر تعریف شده است:

```go
Function: openai.FunctionDefinitionParam{
  Name:        "getWeather",
  Description: openai.String("Get the current weather in a given location"),
  Parameters: openai.FunctionParameters{
    "type": "object",
    "properties": map[string]interface{}{
      "location": map[string]string{
        "type":        "string",
        "description": "The city and state, e.g. San Francisco, CA",
      },
      "unit": map[string]interface{}{
        "type": "string",
        "enum": []string{"celsius", "fahrenheit"},
      },
    },
    "required": []string{"location"},
  },
},
```

فیلد `Name` اسم تابع است و باید با نام تابعی که در برنامه خود تعریف کرده‌اید، یکسان باشد.
فیلد `Description`، توضیحاتی درباره تابع است که به مدل کمک می‌کند تا متوجه شود این تابع چه کاری انجام می‌دهد و چه زمانی باید از آن استفاده کند.

فیلد `Parameters`، ورودی‌های تابع، نوع آن‌ها و اجباری بودن یا اختیاری بودن استفاده از آن‌ها را مشخص می‌کند:

```json
Parameters: openai.FunctionParameters{
  "type": "object",
  "properties": map[string]interface{}{
    "location": map[string]string{
      "type":        "string",
      "description": "The city and state, e.g. San Francisco, CA",
    },
    "unit": map[string]interface{}{
      "type": "string",
      "enum": []string{"celsius", "fahrenheit"},
    },
  },
  "required": []string{"location"},
},
```

مقدار فیلد `properties`، شامل ورودی‌های تابع می‌باشد.
در این مثال، تابع `getWeather`، دو ورودی به نام‌های `location` و `unit` دارد.

ورودی `location`، یک رشته است که نام شهر و ایالت را دریافت می‌کند و ورودی `unit`، یک رشته است که می‌تواند یکی از دو مقدار `celsius` یا `fahrenheit` باشد.
فیلد `enum`، می‌گوید که این ورودی، محدود به یکی از مقادیر مشخص شده است.

فیلد `required`، مشخص می‌کند که ورودی `location`، اجباری است و مدل باید حتماً این ورودی را دریافت کند.
ورودی‌های دیگر، اختیاری هستند و مدل می‌تواند آن‌ها را دریافت نکند.  

پس از تعریف Tool، کافیست تا ورودی‌هایی ارسالی به مدل، مانند قطعه کد زیر، مشخص شود:

```go
const model = "openai/gpt-4.1"
params := openai.ChatCompletionNewParams{
  Model: model,
  Messages: []openai.ChatCompletionMessageParamUnion{
    openai.UserMessage(question),
  },
  Tools: []openai.ChatCompletionToolParam{
    weatherTool, 
  },
  ToolChoice: openai.ChatCompletionToolChoiceOptionUnionParam{
    OfAuto: openai.String("auto"),
  },
}
```

در قطعه کد فوق، با استفاده از `model`، مدل مورد نظر برای پردازش پرامپت مشخص شده است.
با استفاده از `Messages`، پرامپت برای ارسال به مدل مشخص می‌شود و با استفاده از `Tools`، Toolهایی که مدل می‌تواند از آن‌ها استفاده کند، مشخص شده است.
وقتی که مقدار فیلد `ToolChoice`، بر روی `auto` تنظیم شده باشد، خود مدل تصمیم می‌گیرد که آیا لازم است از توابع تعریف‌شده استفاده کند یا خیر.

در نهایت و پس از تعریف پارامترها، می‌توان با استفاده از `client.Chat.Completions.New` و مانند شکل زیر، درخواست را به مدل، ارسال کرد:

```go
ctx := context.Background()
completion, err := client.Chat.Completions.New(ctx, params)
	if err != nil {
		log.Fatal(err)
	}
```

خروجی `completion`، شامل اطلاعات مربوط به پاسخ مدل است. برای 
مشاهده خروجی خواناتر، می‌توان مانند قطعه کد زیر، عمل کرد:

```go
prettyJSON, err := json.MarshalIndent(completion, "", "  ")
if err != nil {
  log.Fatal("Failed to generate JSON:", err)
}
fmt.Println(string(prettyJSON))
```

خروجی، به شکل زیر خواهد بود:

```json
{
  "id": "68381af41a5970e5b082e94c",
  "choices": [
    {
      "finish_reason": "tool_calls",
      "index": 0,
      "logprobs": {
        "content": null,
        "refusal": null
      },
      "message": {
        "content": "",
        "refusal": "",
        "role": "assistant",
        "annotations": null,
        "audio": {
          "id": "",
          "data": "",
          "expires_at": 0,
          "transcript": ""
        },
        "function_call": {
          "arguments": "",
          "name": ""
        },
        "tool_calls": [
          {
            "id": "call_2Cqfe9YMVNSP0QFRBoxglI7n",
            "function": {
              "arguments": "{\"location\":\"Tehran\"}",
              "name": "getWeather"
            },
            "type": "function"
          }
        ]
      }
    }
  ],
  "created": 1748507379,
  "model": "openai/gpt-4.1",
  "object": "chat.completion",
  "service_tier": "",
  "system_fingerprint": "",
  "usage": {
    "completion_tokens": 15,
    "prompt_tokens": 79,
    "total_tokens": 94,
    "completion_tokens_details": {
      "accepted_prediction_tokens": 0,
      "audio_tokens": 0,
      "reasoning_tokens": 0,
      "rejected_prediction_tokens": 0
    },
    "prompt_tokens_details": {
      "audio_tokens": 0,
      "cached_tokens": 0
    }
  }
}
```

نمودار قطعه کد JSON فوق، به شکل زیر است (برای وضوح بیشتر، بر روی تصویر کلیک کنید):

![completion output](https://docs.liara.ir/ai/completion/go/output.svg)    

در ادامه، فیلدهای خروجی فوق، به‌صورت سطح به سطح، توضیح داده شده است:

## سطح اول

- `id`: شناسه یکتای درخواست ایجاد شده
- `choices`: لیست پاسخ‌های مدل (معمولاً فقط یکی)
- `created`: زمان ایجاد پاسخ (Unix Timestamp)
- `model`: نام مدل مورد استفاده
- `object`: نوع شیء بازگشتی (همیشه `chat.completion`)
- `service_tier`: سطح دسترسی به سرویس
- `system_fingerprint`: هش یا شناسه‌ سیستمی مدل
- `usage`:  اطلاعات مربوط به تعداد توکن‌های استفاده‌شده

## داخل `choices[0]`

- `finish_reason`: دلیل توقف تولید مدل (اینجا بخاطر فراخوانی ابزار)
- `index`: شماره پاسخ در لیست (`0` یعنی اولین)
- `logprobs`: احتمال کلمات تولیدی
- `logprobs.content`: احتمال لگاریتمی برای محتوایی که مدل واقعاً تولید کرده است
- `logprobs.refusal`: احتمال لگاریتمی رد کردن سؤال یا عدم پاسخ دادن مدل به پرامپت
- `message`: پاسخ تولیدشده شامل محتوا و اطلاعات فراخوانی تابع

## داخل `choices[0].message`

- `content`: محتوای متنی پاسخ (در حالت فراخوانی ابزار، خالی است)
- `refusal`: دلیل امتناع مدل از پاسخ (در صورت پاسخ ندادن)
- `role`: نقش گوینده (در اینجا `assistant`)
- `annotations`:
- `audio`: اطلاعاتی در مورد خروجی صوتی مدل (در صورت ارائه خروجی صوتی)
- `function_call`: لیست توابعی که مدل پیشنهاد اجرای آن‌ها را می‌دهد (به خاطر فرمت قدیمی این فیلد، در API جدید از `tool_call` استفاده می‌شود.)
- `function_call.arguments`: ورودی‌هایی که مدل استخراج کرده و به تابع ارسال می‌کند
- `function_call.name`: اسم تابعی که مدل تصمیم گرفته فراخوانی کند
- `tool_calls`: لیست Toolهایی که مدل پیشنهاد اجرای آن‌ها را می‌دهد

## داخل `tool_calls[0]`

- `id`: شناسه فراخوان تابع توسط مدل
- `function.arguments`:  پارامترهای استخراج‌شده از prompt به‌شکل رشته JSON
- `function.name`: نام تابعی که مدل تصمیم می‌گیرد صدا بزند
- `type`: نوع فراخوان (اینجا همیشه `function`)

## داخل `usage`

- `completion_tokens`:  تعداد توکن‌های استفاده‌شده برای تولید پاسخ مدل
- `prompt_tokens`: تعداد توکن‌های استفاده‌شده برای پیام‌های ورودی
- `total_tokens`: مجموع توکن‌ها  (prompt + completion)
- `completion_tokens_details`: جزئیات پیشرفته برای آنالیز مدل
- `accepted_prediction_tokens`: توکن‌هایی که مدل تولید کرده و در پاسخ نهایی پذیرفته شده‌اند
- `audio_tokens`: توکن‌های مربوط به تولید یا تجزیه صوت (در صورت پشتیبانی مدل)
- `reasoning_tokens`: توکن‌هایی که صرفاً برای تحلیل داخلی مدل استفاده شده‌اند
- `rejected_prediction_tokens`: توکن‌هایی که مدل تولید کرده ولی بنا به دلایلی رد شده‌اند
- `prompt_tokens_details`: اطلاعات جزئی‌تر برای ورودی
- `audio_tokens`: تعداد توکن‌های مورد استفاده برای ورودی صوتی (در صورت پشتیبانی مدل)
- `cached_tokens`: تعداد توکن‌هایی از ورودی که با استفاده از حافظه‌ی کش مدل، بدون پردازش مجدد مورد استفاده قرار گرفته‌اند (`0` یعنی هیچی)

پس از دریافت خروجی، برای یافتن ابزارهایی که مدل از آن‌ها استفاده کرده است، می‌توان از کد زیر استفاده کرد:

```go
toolCalls := completion.Choices[0].Message.ToolCalls
if len(toolCalls) == 0 {
  fmt.Println("No function call made.")
  return
}

prettyJSON, err := json.MarshalIndent(toolCalls, "", "  ")
if err != nil {
  log.Fatal("Failed to generate JSON:", err)
}
fmt.Println(string(prettyJSON))
```

خروجی کد فوق، مانند شکل زیر، خواهد بود:

```json
[
  {
    "id": "call_5ZSh2tTARuletbd9sRinPTTL",
    "function": {
      "arguments": "{\"location\":\"Tehran\"}",
      "name": "getWeather"
    },
    "type": "function"
  }
]
```

در نهایت، برای استخراج ورودی‌های تابع `getWeather` از پاسخ مدل و فراخوانی تابع مذکور، می‌توان مانند قطعه کد زیر، عمل کرد:

```go
for _, toolCall := range toolCalls {
  if toolCall.Function.Name == "getWeather" {
    var args map[string]interface{}
    err := json.Unmarshal([]byte(toolCall.Function.Arguments), &args)
    if err != nil {
      log.Fatal(err)
    }

    location := args["location"].(string)
    unit := "celsius" 
    if u, ok := args["unit"].(string); ok && u != "" {
      unit = u
    }

    weather := getWeather(location, unit)

    fmt.Printf("The weather in %s is %d°%s and %s.\n",
      weather.Location,
      weather.Temperature,
      string(weather.Unit[0]-32), 
      weather.Condition,
    )

    data, _ := json.Marshal(weather)
    params.Messages = append(params.Messages, openai.ToolMessage(string(data), toolCall.ID))
  }
}
```

قطعه کد فوق، در یک حلقه `for`، تمامی ابزارهای استفاده شده توسط تابع را بررسی می‌کند. 
از آنجایی که تنها یک ابزار در این برنامه تعریف شده است؛ بنابراین، فقط یک شرط در حلقه وجود دارد که 
بررسی استفاده از تابع `getWeather` است.

در نهایت، ورودی‌های مورد نیاز تابع `getWeather` استخراج شده و به تابع داده می‌شود و بعد از آن، نتایج 
چاپ خواهد شد. خروجی، مانند شکل زیر، خواهد بود:

```go
The weather in Tehran is 35°C and Sunny.
```

قطعه کد کامل برنامه، به شکل زیر است:  

```go
package main

import (
	"context"
	"encoding/json"
	"fmt"
	"log"

	"github.com/openai/openai-go"
	"github.com/openai/openai-go/option"
)

type WeatherData struct {
	Location    string `json:"location"`
	Temperature int    `json:"temperature"`
	Unit        string `json:"unit"`
	Condition   string `json:"condition"`
}

func getWeather(location, unit string) WeatherData {
	if unit == "" {
		unit = "celsius"
	}

	temp := 35
	if unit == "fahrenheit" {
		temp = 68
	}

	return WeatherData{
		Location:    location,
		Temperature: temp,
		Unit:        unit,
		Condition:   "Sunny",
	}
}

func main() {
	

	client := openai.NewClient(
		option.WithAPIKey("<LIARA_API_KEY>"),
		option.WithBaseURL("<baseUrl>"),
	)

	ctx := context.Background()

	question := "What's the weather like in Tehran today?"

	weatherTool := openai.ChatCompletionToolParam{
		Function: openai.FunctionDefinitionParam{
			Name:        "getWeather",
			Description: openai.String("Get the current weather in a given location"),
			Parameters: openai.FunctionParameters{
				"type": "object",
				"properties": map[string]interface{}{
					"location": map[string]string{
						"type":        "string",
						"description": "The city and state, e.g. San Francisco, CA",
					},
					"unit": map[string]interface{}{
						"type": "string",
						"enum": []string{"celsius", "fahrenheit"},
					},
				},
				"required": []string{"location"},
			},
		},
	}

	const model = "openai/gpt-4.1"

	params := openai.ChatCompletionNewParams{
		Model: model,
		Messages: []openai.ChatCompletionMessageParamUnion{
			openai.UserMessage(question),
		},
		Tools: []openai.ChatCompletionToolParam{
			weatherTool, 
		},
		ToolChoice: openai.ChatCompletionToolChoiceOptionUnionParam{
			OfAuto: openai.String("auto"),
		},
	}

	completion, err := client.Chat.Completions.New(ctx, params)
	if err != nil {
		log.Fatal(err)
	}

	toolCalls := completion.Choices[0].Message.ToolCalls
	if len(toolCalls) == 0 {
		fmt.Println("No function call made.")
		return
	}

	for _, toolCall := range toolCalls {
		if toolCall.Function.Name == "getWeather" {
			var args map[string]interface{}
			err := json.Unmarshal([]byte(toolCall.Function.Arguments), &args)
			if err != nil {
				log.Fatal(err)
			}

			location := args["location"].(string)
			unit := "celsius" 
			if u, ok := args["unit"].(string); ok && u != "" {
				unit = u
			}

			weather := getWeather(location, unit)

			fmt.Printf("The weather in %s is %d°%s and %s.\n",
				weather.Location,
				weather.Temperature,
				string(weather.Unit[0]-32), 
				weather.Condition,
			)

			data, _ := json.Marshal(weather)
			params.Messages = append(params.Messages, openai.ToolMessage(string(data), toolCall.ID))
		}
	}
}
```

بدین صورت، شما می‌توانید با استفاده از قابلیت Function calling، توابع خود را به مدل معرفی کنید و از مدل، در پاسخ به سؤالات کاربران خود، استفاده کنید.

## 

در ابتدا، بایستی ماژول‌های مورد نیاز برنامه را مانند قطعه کد زیر، وارد کنید:

```js
import { createOpenAICompatible } from '@ai-sdk/openai-compatible';
import { generateText, tool } from 'ai';
import { z } from 'zod';
```

در برنامه، `createOpenAICompatible` برای اتصال به مدل، از `generateText` برای تعامل با مدل، از `tool` برای تعیین toolهای مورد استفاده مدل و از `z` برای تعریف ساختار داده‌ها استفاده شده است.

در ادامه، بایستی tool خود را مانند قطعه کد زیر، تعریف کنید:

```js
const getCurrentWeatherTool = tool({
  description: "Get current temperature for a given location.",
  parameters: z.object({
    location: z.string().describe("City and country e.g. Bogotá, Colombia"),
    unit: z.enum(["celsius", "fahrenheit"]).default("celsius"),
  }),
  execute: async ({ location, unit }) => {
    const temperature = unit === "celsius" ? 35 : 68;
    const condition = "Sunny";
    return {
      location,
      temperature,
      unit,
      condition,
    };
  },
});
```

در قطعه کد فوق، یک ابزار به نام `getCurrentWeatherTool` تعریف شده است. هر tool در AI SDK سه فیلد `description` برای توضیح عملکرد tool، `parameters` برای تعریف پارامترهای مورد نیاز tool و `execute` برای اجرای تابع اختیار در زمان فراخوانی tool، دارد.

Tool تعریف شده، دو ورودی دارد. یکی `location` که بیانگر موقعیت است و دیگری `unit` که واحد اندازه‌گیری دما است. دستور `enum` تعیین می‌کند که ورودی `unit`، یکی از دو حالت مشخص شده، است و مقدار پیش‌فرض آن، `celsius` می‌باشد.

تابع تعریف شده در Tool، هنگامی که اجرا شود، افزون بر موقعیت و واحد اندازه‌گیری دمای هوا، دمای فرضی `35` درجه سلسیوس یا `68` درجه فارنهایت و وضعیت هوای `Sunny` را برمی‌گرداند.

در ادامه، می‌توان مشابه قطعه کد زیر، از مدل استفاده کرد:

```js
const { steps } = await generateText({
  model: createOpenAICompatible({
    baseURL: "<baseUrl>",
    name: 'example',
    apiKey: "<LIARA_API_KEY>",
  }).chatModel("openai/gpt-4o-mini"),

  tools: {
    getCurrentWeather: getCurrentWeatherTool,
  },

  prompt: 'What is the weather like in Qom today?',
});

console.log(JSON.stringify(steps, null, 2))
```

خروجی `steps`، مشابه شکل زیر خواهد بود:

```json
[
  {
    "stepType": "initial",
    "text": "",
    "reasoningDetails": [],
    "files": [],
    "sources": [],
    "toolCalls": [
      {
        "type": "tool-call",
        "toolCallId": "call_UeIuN73svDACfETxAk0UEyqB",
        "toolName": "getCurrentWeather",
        "args": {
          "location": "Qom, Iran",
          "unit": "celsius"
        }
      }
    ],
    "toolResults": [
      {
        "type": "tool-result",
        "toolCallId": "call_UeIuN73svDACfETxAk0UEyqB",
        "toolName": "getCurrentWeather",
        "args": {
          "location": "Qom, Iran",
          "unit": "celsius"
        },
        "result": {
          "location": "Qom, Iran",
          "temperature": 35,
          "unit": "celsius",
          "condition": "Sunny"
        }
      }
    ],
    "finishReason": "tool-calls",
    "usage": {
      "promptTokens": 85,
      "completionTokens": 18,
      "totalTokens": 103
    },
    "warnings": [],
    "request": {
      "body": "{\"model\":\"openai/gpt-4o-mini\",\"temperature\":0,\"messages\":[{\"role\":\"user\",\"content\":\"What is the weather like in Qom today?\"}],\"tools\":[{\"type\":\"function\",\"function\":{\"name\":\"getCurrentWeather\",\"description\":\"Get current temperature for a given location.\",\"parameters\":{\"type\":\"object\",\"properties\":{\"location\":{\"type\":\"string\",\"description\":\"City and country e.g. Bogotá, Colombia\"},\"unit\":{\"type\":\"string\",\"enum\":[\"celsius\",\"fahrenheit\"],\"default\":\"celsius\"}},\"required\":[\"location\"],\"additionalProperties\":false,\"$schema\":\"http://json-schema.org/draft-07/schema#\"}}}],\"tool_choice\":\"auto\"}"
    },
    "response": {
      "id": "6846d57bf1adf322202df13f",
      "timestamp": "2025-06-09T12:37:15.000Z",
      "modelId": "openai/gpt-4o-mini",
      "headers": {
        "access-control-allow-origin": "*",
        "connection": "keep-alive",
        "content-length": "622",
        "content-type": "application/json; charset=utf-8",
        "date": "Mon, 09 Jun 2025 12:37:16 GMT",
        "server": "nginx"
      },
      "body": {
        "id": "6846d57bf1adf322202df13f",
        "model": "openai/gpt-4o-mini",
        "object": "chat.completion",
        "created": 1749472635,
        "choices": [
          {
            "logprobs": null,
            "finish_reason": "tool_calls",
            "native_finish_reason": "tool_calls",
            "index": 0,
            "message": {
              "role": "assistant",
              "content": "",
              "refusal": null,
              "reasoning": null,
              "tool_calls": [
                {
                  "index": 0,
                  "id": "call_UeIuN73svDACfETxAk0UEyqB",
                  "type": "function",
                  "function": {
                    "name": "getCurrentWeather",
                    "arguments": "{\"location\":\"Qom, Iran\"}"
                  }
                }
              ]
            }
          }
        ],
        "usage": {
          "prompt_tokens": 85,
          "completion_tokens": 18,
          "total_tokens": 103,
          "prompt_tokens_details": {
            "cached_tokens": 0
          },
          "completion_tokens_details": {
            "reasoning_tokens": 0
          }
        }
      },
      "messages": [
        {
          "role": "assistant",
          "content": [
            {
              "type": "tool-call",
              "toolCallId": "call_UeIuN73svDACfETxAk0UEyqB",
              "toolName": "getCurrentWeather",
              "args": {
                "location": "Qom, Iran",
                "unit": "celsius"
              }
            }
          ],
          "id": "msg-CMJ9aGwENrJNU8rPluib2CPS"
        },
        {
          "role": "tool",
          "id": "msg-xyXd1P7C4CjBPXmNcwcxJjGH",
          "content": [
            {
              "type": "tool-result",
              "toolCallId": "call_UeIuN73svDACfETxAk0UEyqB",
              "toolName": "getCurrentWeather",
              "result": {
                "location": "Qom, Iran",
                "temperature": 35,
                "unit": "celsius",
                "condition": "Sunny"
              }
            }
          ]
        }
      ]
    },
    "providerMetadata": {
      "example": {
        "reasoningTokens": 0,
        "cachedPromptTokens": 0
      }
    },
    "experimental_providerMetadata": {
      "example": {
        "reasoningTokens": 0,
        "cachedPromptTokens": 0
      }
    },
    "isContinued": false
  }
]
```

نمودار قطعه کد JSON فوق، به شکل زیر است (برای وضوح بیشتر، بر روی تصویر کلیک کنید):

![model output](https://docs.liara.ir/ai/ai-sdk/model-tool-calling-output.svg)    

در ادامه، فیلدهای خروجی فوق، به‌صورت سطح به سطح، توضیح داده شده است:

## سطح اول

- `stepType`: مرحله فعلی در فرآیند پاسخ‌دهی مدل
- `text`: متن مستقیم تولید شده توسط مدل (در اینجا خالی است چون از Tool استفاده شده)
- `finishReason`: دلیلی که مدل را متوقف کرده (اینجا "tool-calls" یعنی به‌خاطر فراخوانی Tool)
- `isContinued`: مشخص می‌کند آیا پاسخ در پیام‌های بعدی ادامه دارد یا خیر
- `toolCalls`: لیستی از Toolهای فراخوانی شده توسط مدل
- `toolResults`: پاسخ‌هایی که Tool های فراخوانی‌شده به مدل داده‌اند
- `usage`: میزان استفاده از توکن‌ها
- `request`: اطلاعات مربوط به درخواستی که به API ارسال شده
- `response`: پاسخ کامل دریافت‌شده از API
- `providerMetadata`: متادیتای مرتبط با ارائه‌دهنده مدل
- `experimental_providerMetadata`: مشابه providerMetadata، شامل اطلاعات اضافی آزمایشی مدل

## داخل `toolCalls[0]`

- `type`: نوع فراخوانی Tool را مشخص می‌کند (در اینجا "tool-call")
- `toolCallId`: شناسه یکتای فراخوانی Tool
- `toolName`: نام Tool فراخوانی شده (اینجا: getCurrentWeather)
- `args`: آرگومان‌های ارسال شده به Tool

## داخل `toolCalls[0].args`

- `location`: شهری که برای آن وضعیت آب‌وهوا درخواست شده
- `unit`: واحد دمایی مورد نظر برای نمایش (سانتی‌گراد یا فارنهایت)

## داخل `toolResults[0]`

- `type`: نوع نتیجه Tool را مشخص می‌کند (اینجا "tool-result")
- `toolCallId`: شناسه مربوط به toolCall که نتیجه‌اش این است
- `toolName`: نام Tool که این نتیجه را برگردانده
- `args`: آرگومان‌هایی که به ابزار داده شده بود
- `result`: داده‌های برگشتی از ابزار شامل اطلاعات آب‌وهوا

## داخل `toolResults[0].args`

- `location`: شهر و کشور مقصد درخواست وضعیت آب‌وهوا
- `unit`: واحد اندازه‌گیری دما

## داخل `toolResults[0].result`

- `location`: شهر و کشور گزارش شده توسط ابزار
- `temperature`: دمای فعلی ثبت شده
- `unit`: واحد اندازه‌گیری دما (سانتی‌گراد)
- `condition`: وضعیت آب‌وهوا مثل آفتابی یا ابری

## داخل `usage`

- `promptTokens`: تعداد توکن‌های استفاده شده در پیام ورودی
- `completionsTokens`: تعداد توکن‌های استفاده شده در پاسخ مدل
- `totalTokens`: مجموع کل توکن‌های مصرف‌شده

## داخل `request`

- `body`: محتوای کامل درخواست ارسال‌شده به API به صورت رشته JSON

## داخل `response`

- `id`: شناسه یکتای پاسخ API
- `timestamp`: زمان دریافت پاسخ
- `modelId`: نام مدل زبانی استفاده‌شده در پاسخ
- `headers`: اطلاعات هدر HTTP مربوط به پاسخ
- `body`: بدنه پاسخ شامل پیام‌ها و داده‌های تولید شده
- `messages`: فهرست پیام‌هایی که در طول تعامل رد و بدل شده‌اند

## داخل `response.headers`

- `access-control-allow-origin`: مجوز دسترسی برای مرورگرها جهت اشتراک‌گذاری بین دامنه‌ای
- `connection`: وضعیت اتصال HTTP
- `content-length`: طول محتویات پاسخ به بایت
- `content-type`: نوع محتوای پاسخ (JSON)
- `date`: تاریخ و زمان ارسال پاسخ
- `server`: اطلاعات درباره سرور پاسخ‌دهنده

## داخل `response.body`

- `id`: شناسه یکتای گفتگوی تولید شده توسط API
- `model`: مدل استفاده‌شده برای تولید پاسخ
- `object`: نوع شیء پاسخ (مثلاً chat.completion)
- `created`: زمان ایجاد پاسخ به صورت timestamp
- `choices`: خروجی‌های مختلف مدل که یکی انتخاب شده
- `usage`: آماری از توکن‌های مصرف‌شده در این تعامل

## داخل `response.body.choices`

- `logprobs`: احتمال‌های لگاریتمی برای توکن‌ها (در اینجا null)
- `finish_reason`: دلیل پایان پاسخ مدل
- `native_finish_reason`: نسخه داخلی finish_reason
- `index`: ایندکس این خروجی بین گزینه‌های ممکن
- `message`: پیام نهایی مدل در این پاسخ

## داخل `response.body.choices.message`

- `role`: نقش پیام (مثلاً assistant)
- `content`: محتوای متن پاسخ یا فراخوان ابزار
- `refusal`: دلیل امتناع از پاسخ در صورت عدم پاسخ‌دهی
- `reasoning`: توضیح منطق پشت تصمیم (در اینجا null)
- `tool_calls`: لیست فراخوانی‌های Tool انجام شده توسط مدل

## داخل `response.body.choices.tool_calls[0]`

- `index`: ایندکس این tool_call در لیست
- `id`: شناسه یکتای این فراخوان Tool
- `type`: نوع فراخوانی (function)
- `function`: آبجکت شامل نام تابع و آرگومان‌ها
- `function.name`: نام تابع فراخوانی‌شده
- `function.arguments`: آرگومان‌های تابع به صورت رشته JSON

## داخل `response.body.usage`

- `prompt_tokens`: توکن‌های مصرف‌شده برای ورودی کاربر
- `completion_tokens`: توکن‌های مصرف‌شده برای پاسخ مدل
- `total_tokens`: جمع کل توکن‌های مصرف‌شده
- `prompt_tokens_details`: جزئیات بیشتر درباره prompt tokens
- `prompt_tokens_details.cached_tokens`: تعداد توکن‌های واکشی‌شده از cache (در اینجا صفر)
- `completion_tokens_details`: جزئیات بیشتر درباره completion tokens
- `completion_tokens_details.reasoning_tokens`: تعداد توکن‌هایی که صرف reasoning شده‌اند (در اینجا صفر)

## داخل `response.messages[0] و response.messages[1]`

- `role`: نقش پیام در گفتگو (assistant یا tool)
- `id`: شناسه یکتای هر پیام
- `content`: محتوای پیام شامل فراخوان ابزار یا نتیجه آن

## داخل `response.messages[0].content[0] و response.messages[1].content[0]`

- `type`: نوع محتوا (tool-call یا tool-result)
- `toolCallId`: شناسه‌ای که دو پیام را به هم مرتبط می‌کند
- `toolName`: نام ابزاری که استفاده شده
- `args`: آرگومان‌های استفاده‌شده برای ابزار
- `args.location`: شهر و کشور درخواستی
- `args.unit`: واحد دمایی

## داخل `providerMetadata`

- `example`: نمونه‌ای از داده‌های متادیتا برای تحلیل
- `reasoningTokens`: تعداد توکن‌هایی که صرف reasoning شده‌اند
- `cachedPromptTokens`: تعداد توکن‌هایی که از کش مدل خوانده شده‌اند

## داخل `experimental_providerMetadata`

- `example`: مشابه providerMetadata اما در بخش آزمایشی
- `reasoningTokens`: تعداد توکن‌های مرتبط با منطق مدل
- `cachedPromptTokens`: توکن‌هایی که از کش واکشی شده‌اند


پس از دریافت خروجی، برای یافتن پارامترهایی که مدل برای فراخوانی تابع پیشنهاد داده است، می‌توان از کد زیر استفاده کرد:

```js
const toolResults = steps.flatMap(step => step.toolResults);
console.log(toolResults[0].args)
```

خروجی کد فوق، مانند شکل زیر، خواهد بود:

```json
{ location: 'Qom, Iran', unit: 'celsius' }
```

خروجی فوق، نشان می‌دهد که مدل، با موفقیت، رابطه Tool با پرامپت را تشخیص داده و پارامترهای لازم برای فراخوانی تابع `getCurrentWeather` را استخراج کرده است.
از آنجایی که با فراخوانی Tool، فیلد `execute` آن نیز، اجرا می‌شود. بنابراین؛ می‌توان مانند شکل زیر، از خروجی تابع تعریف شده در 
فیلد `execute` استفاده کرد. برای مدیریت خطاهای احتمالی، می‌توان از قطعه کد زیر استفاده کرد:

```js
if (toolResults.length > 0) {
  for (const tool of toolResults) {
    if (tool.toolName === "getCurrentWeather") {
      const args = tool.result;
      console.log(`The current weather in ${args.location} is ${args.temperature}°${args.unit === "celsius" ? "C" : "F"} and ${args.condition}.`);
    } else {
      console.log(`Tool "${tool.toolName}" was called, but no handler is defined for it.`);
    }
  }
} else {
  console.log("No tool call was triggered.");
}
```

خروجی قطعه کد فوق، در صورتی که Tool تعریف شد فراخوانی شود؛ مشابه زیر خواهد بود:

```js
The current weather in Qom, Iran is 35°C and Sunny.
```

قطعه کد کامل برنامه، به شکل زیر است:  

```js
import { createOpenAICompatible } from '@ai-sdk/openai-compatible';
import { generateText, tool } from 'ai';
import { z } from 'zod';

const getCurrentWeatherTool = tool({
  description: "Get current temperature for a given location.",
  parameters: z.object({
    location: z.string().describe("City and country e.g. Bogotá, Colombia"),
    unit: z.enum(["celsius", "fahrenheit"]).default("celsius"),
  }),
  execute: async ({ location, unit }) => {
    const temperature = unit === "celsius" ? 35 : 68;
    const condition = "Sunny";
    return {
      location,
      temperature,
      unit,
      condition,
    };
  },
});

const { steps } = await generateText({
  model: createOpenAICompatible({
    baseURL: "<baseUrl>",
    name: 'example',
    apiKey: "<LIARA_API_KEY>",
  }).chatModel("openai/gpt-4o-mini"),
  
  tools: {
    getCurrentWeather: getCurrentWeatherTool,
  },
  
  prompt: 'What is the weather like in Qom today?',
});

const toolResults = steps.flatMap(step => step.toolResults);
if (toolResults.length > 0) {
  for (const tool of toolResults) {
    if (tool.toolName === "getCurrentWeather") {
      const args = tool.result;
      console.log(`The current weather in ${args.location} is ${args.temperature}°${args.unit === "celsius" ? "C" : "F"} and ${args.condition}.`);
    } else {
      console.log(`Tool "${tool.toolName}" was called, but no handler is defined for it.`);
    }
  }
} else {
  console.log("No tool call was triggered.");
}
```

بدین صورت، شما می‌توانید با استفاده از قابلیت Function calling، توابع خود را به مدل معرفی کنید و از مدل، در پاسخ به سؤالات کاربران خود، استفاده کنید.

> شما می‌توانید برنامه واقعی مثال فوق را در [گیت‌هاب لیارا](https://github.com/liara-cloud/ai-sdk-examples/tree/master/Tool-Calling-Weather-API) مشاهده و استفاده کنید.
```

## all links

[All links of docs](https://docs.liara.ir/all-links-llms.txt)
