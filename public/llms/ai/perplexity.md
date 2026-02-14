Original link: https://docs.liara.ir/ai/perplexity/

# شروع به کار با هوش مصنوعی Perplexity

[Perplexity](https://perplexity.ai) یک سامانه پیشرفته مبتنی بر زبان طبیعی است که با استفاده از مدل‌های قدرتمند یادگیری ماشینی، امکان جستجوی هوشمند، پاسخ‌گویی دقیق و تحلیل عمیق اطلاعات را فراهم می‌کند. این AI با ترکیب قابلیت‌های جستجوی زنده و پردازش زبان طبیعی، تجربه‌ای سریع و قابل اعتماد برای کاربران فراهم می‌سازد؛ به‌طوری‌که هم می‌تواند مانند یک موتور جستجو عمل کند و هم مانند یک دستیار هوشمند، پاسخ‌های قابل فهم و کاربردی ارائه دهد. Perplexity در تحلیل متون پیچیده و ارائه نتایج همراه با منابع معتبر، در میان ابزارهای مشابه برجسته شده است.

در حال حاضر، لیارا، مدل‌های زیر از Perplexity را در API خود پشتیبانی می‌کند:

- مدل `{item}`

پس از [ایجاد سرویس هوش مصنوعی](https://docs.liara.ir/ai/quick-start) و دریافت `baseUrl` و [ساخت کلید](https://docs.liara.ir/ai/details/keys/#create)، می‌توانید از مدل‌های Perplexity استفاده کنید.

> در قطعه کدهای ارائه‌شده توسط لیارا برای اتصال به مدل، از OpenAI SDK استفاده می‌شود. تمامی مدل‌هایی که لیارا ارائه می‌دهد؛ سازگار با OpenAI SDK هستند.

## اتصال به مدل

برای اتصال به مدل در سطح کد، می‌توانید از دو ابزار استفاده کنید: 

- `OpenAI SDK`: ابزار رسمی ارائه‌شده توسط [OpenAI](https://openai.com/). تمامی مدل‌های ارائه‌شده در لیارا، با این SDK سازگار هستند.
- `AI SDK`: ابزار ارائه‌شده توسط [Vercel](https://ai-sdk.dev/). این SDK، تنها برای جاوااسکریپت و تایپ‌اسکریپت در دسترس است.

در ادامه، نحوه اتصال به مدل، هم با `OpenAI SDK` و هم با `AI SDK`، بررسی شده است.

## OpenAI SDK

برای اتصال به مدل با OpenAI SDK، می‌توانید از قطعه کدهای زیر، استفاده کنید.

### JavaScript

در ابتدا، برای استفاده از مدل هوش مصنوعی مدنظر خود در جاوااسکریپت، باید پکیج `openai` را نصب کنید. برای این کار، می‌توانید از npm یا yarn استفاده کنید:

```bash
npm install openai # or yarn add openai
```

سپس، می‌توانید مانند قطعه کد زیر، به مدل هوش مصنوعی خود متصل شوید:

```js
const OpenAI = require('openai');

const openai = new OpenAI({
  baseURL: '<baseUrl>',
  apiKey: '<LIARA_API_KEY>',
});

async function main() {
  const completion = await openai.chat.completions.create({
    model: '<model_name>',
    messages: [
      {
        role: 'user',
        content: 'Hello!',
      },
    ],
  });

  console.log(completion.choices[0].message);
}

main();
```

### PHP

در ابتدا، برای استفاده از مدل هوش مصنوعی مدنظر خود در PHP، باید پکیج‌های مورد نیاز را با اجرای دستور زیر، نصب کنید:

```bash
composer require openai-php/client guzzlehttp/guzzle
```

سپس، می‌توانید مانند قطعه کد زیر، به مدل هوش مصنوعی خود متصل شوید:

```php
<?php

require 'vendor/autoload.php';

use OpenAI\Client;
use OpenAI\Laravel\Facades\OpenAI;
use OpenAI\Contracts\ResponseContracts\Chat\CreateResponse;

$yourApiKey = '<LIARA_API_KEY>'; 
$baseUrl = '<baseUrl>'; 
$model = '<model_name>'; 

// Create the OpenAI client
$client = \OpenAI::factory()
    ->withApiKey($yourApiKey)
    ->withBaseUri($baseUrl)
    ->make();

// Send a chat completion request
$result = $client->chat()->create([
    'model' => $model,
    'messages' => [
        ['role' => 'user', 'content' => 'I love U Bro!'],
    ],
]);

// Print the response
echo $result->choices[0]->message->content;

```

### Python

در ابتدا، برای استفاده از مدل هوش مصنوعی مدنظر خود در Python، باید پکیج مورد نیاز را با اجرای دستور زیر، نصب کنید:

```bash
pip install openai
```

سپس، می‌توانید مانند قطعه کد زیر، به مدل هوش مصنوعی خود متصل شوید:

```py
from openai import OpenAI

client = OpenAI(
  base_url="<baseUrl>",
  api_key="<LIARA_API_KEY>",
)

completion = client.chat.completions.create(
  model="<model_name>",
  messages=[
    {
      "role": "user",
      "content": 'Hello!'
    }
  ]
)

print(completion.choices[0].message.content)
```

### NET.

در ابتدا، برای استفاده از مدل هوش مصنوعی مدنظر خود در dotNET (CSharp)، باید پکیج مورد نیاز را با اجرای دستور زیر، نصب کنید:

```bash
dotnet add package OpenAI
```

سپس، می‌توانید مانند قطعه کد زیر، به مدل هوش مصنوعی خود متصل شوید:

```cs
using System.ClientModel;
using OpenAI;
using OpenAI.Chat;

class Program
{
    static void Main()
    {
        string apiKey = "<LIARA_API_KEY>";
        
        string baseUrl = "<baseUrl>";
        
        OpenAIClientOptions options = new OpenAIClientOptions
        {
            Endpoint = new Uri(baseUrl)
        };

        ChatClient client = new(model: "<model_name>", credential: new ApiKeyCredential(apiKey), options: options);

        ChatCompletion completion = client.CompleteChat("Hello!");

        Console.WriteLine($"[ASSISTANT]: {completion.Content[0].Text}");
    }
}
```

### Go

در ابتدا، برای استفاده از مدل هوش مصنوعی مدنظر خود در Go، باید پکیج‌های مورد نیاز را با اجرای دستورات زیر، نصب کنید:

```bash
go get package github.com/openai/openai-go
go get package github.com/openai/openai-go/option
```

سپس، می‌توانید مانند قطعه کد زیر، به مدل هوش مصنوعی خود متصل شوید:

```bash
package main

import (
	"context"
	"fmt"

	"github.com/openai/openai-go"
	"github.com/openai/openai-go/option"
)

func main() {
	const model = "<model_name>" 

	
	client := openai.NewClient(
		option.WithAPIKey("<LIARA_API_KEY>"),
		option.WithBaseURL("<baseUrl>"),       
	)

	chatCompletion, err := client.Chat.Completions.New(context.TODO(), openai.ChatCompletionNewParams{
		Messages: []openai.ChatCompletionMessageParamUnion{
			openai.UserMessage("Hello!"),          
		},
		Model: model,                                           
	})
	if err != nil {
		panic(err.Error())          
	}

	fmt.Println("Model Response:", chatCompletion.Choices[0].Message.Content)
}
```

### cURL

```bash
curl <baseUrl>\chat\completions \\
  -H "Content-Type: application/json" \\
  -H "Authorization: Bearer <LIARA_API_KEY>" \\
  -d '{
  "model": "<model_name>",
  "messages": [
    {"role": "system", "content": "You are a helpful assistant."},
    {"role": "user", "content": "Hello!"}
  ]
}'
```

## AI SDK

برای اتصال به مدل با AI SDK، در ابتدا باید با اجرای دستور زیر، ماژول‌های مورد نیاز را نصب کنید:

```bash
npm i @ai-sdk/openai@^1 ai@^4
```

در ادامه، می‌توانید مانند قطعه کد زیر، به مدل متصل شوید:

```js
import { createOpenAI } from '@ai-sdk/openai';
import { generateText } from 'ai';

const my_model = createOpenAI({
  baseURL: "<baseUrl>",
  apiKey: "<LIARA_API_TOKEN>",
});

const { text } = await generateText({
    model: my_model("<model_name>"),
    prompt: 'Why is the sky blue?',
});

console.log('Generated Text:', text);
```

در قطعه کد‌های فوق، به‌جای `<baseUrl>،` آدرس سرویس هوش مصنوعی خود را قرار دهید و به‌جای `<LIARA_API_TOKEN>`، کلید API خود را وارد کنید. همچنین، به‌جای `<model_name>`، نام یکی از مدل‌های فوق را قرار دهید.

## پارامترهای قابل تنظیم

در OpenAI SDK، شما می‌توانید پارامترهای زیر را تنظیم کنید.

> در نظر داشته باشید که پارامترهای زیر، ممکن است در برخی از مدل‌ها، پشتیبانی نشوند.

- `frequency_penalty`:  عددی بین `-2` تا `2`. کاهش یا افزایش احتمال تکرار کلمات پرتکرار در پاسخ. هرچه بالاتر باشد؛ تنوع بیشتر است
- `logit_bias`:  تغییر احتمال ظاهر شدن توکن‌های خاص
- `n`: تعداد پاسخ‌هایی که قرار است مدل همزمان تولید کند.
- `response_format`: مدل را مجبور می‌کند خروجی را به فرمت خاصی برگرداند
- `seed`: مقدار عددی ثابت برای شروع تولید تصادفی، در صورت نیاز، به خروجی‌های قابل تکرار
- `stop`: آرایه‌ای از رشته‌ها برای اینکه مدل هنگام رسیدن به آن‌ها پاسخ را متوقف کند
- `stream`: اگر `true` باشد، پاسخ مدل به صورت استریم ارسال می‌شود. برای پیاده‌سازی‌های real-time یا رابط کاربری، این حالت مفید است
- `stream_options`: تنظیمات مربوط به حالت `stream`. فقط وقتی استفاده می‌شود که `stream: true` باشد
- `temperature`: عددی بین `0` تا `2`. کنترل میزان تصادفی بودن خروجی؛ عدد کمتر، واقع‌گرایی بیشتر و عدد بیشتر، خلاقیت بیشتر
- `tool_choice`: تعیین کردن اینکه مدل چه زمانی Tool را فراخوانی کند (به‌صورت هوشمند یا همیشه)
- `tools`: مشخص کردن یک‌سری Tool که مدل در صورت نیاز، آن‌ها را فراخوانی کند
- `user`: شناسه‌ی کاربر نهایی. برای دسته‌بندی بهتر درخواست‌ها و جلوگیری از سوءاستفاده، به‌کار می‌رود

در ادامه، مثال استفاده از این پارامترها، در زبان‌های مختلف، قرار گرفته است:

### Python

```bash
from openai import OpenAI

client = OpenAI(
  base_url='<baseUrl>',
  api_key='<LIARA_API_KEY>',
)

response = client.chat.completions.create(
    model="<model_name>",
    messages=[
        {"role": "system", "content": "You are a helpful assistant."},
        {"role": "user", "content": "write a short article about Machine Learning in json"}
    ],
    frequency_penalty=1.2,
    presence_penalty=1.0,
    temperature=0.8,
    top_p=0.9,
    n=2,
    seed=42,
    stop=["\nUser:", "\nSystem:"],
    logit_bias={"50256": -100}, 
    stream=False,
    stream_options=None,
    response_format={"type": "json_object"},
    tool_choice="auto",
    tools=[
        {
            "type": "function",
            "function": {
                "name": "summarize_text",
                "description": "summarizing a long text",
                "parameters": {
                    "type": "object",
                    "properties": {
                        "text": {"type": "string", "description": "the text should be summarized"}
                    },
                    "required": ["text"]
                }
            }
        }
    ],
)

print(response)
```

در قطعه کد‌ فوق، به‌جای `<baseUrl>`، آدرس سرویس هوش مصنوعی خود را قرار دهید و به‌جای `<LIARA_API_TOKEN>`، کلید API خود را وارد کنید. همچنین، به‌جای `<model_name>`، نام یکی از مدل‌های فوق را قرار دهید.

## all links

[All links of docs](https://docs.liara.ir/all-links-llms.txt)
