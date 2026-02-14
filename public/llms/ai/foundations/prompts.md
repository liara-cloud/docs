Original link: https://docs.liara.ir/ai/foundations/prompts/

# ورودی‌ها (پرامپت‌ها) در هوش مصنوعی

پرامپت‌ها دستوراتی هستند که شما به یک مدل زبانی بزرگ (LLM) می‌دهید تا به آن بگویید چه کاری انجام دهد. این فرآیند شبیه زمانی است که از کسی سوالی می‌پرسید؛ هرچه سؤال شما واضح‌تر باشد، پاسخ دقیق‌تری دریافت خواهید کرد.

بسیاری از ارائه‌دهندگان مدل‌های هوش مصنوعی، از جمله OpenAI، یک‌سری راه‌‌حل برای تعریف پرامپت‌ها به شما ارائه 
می‌دهند. این واسط‌ها، شامل نقش‌های مختلف و پیام‌های متفاوت هستند. در ادامه، نحوه تعریف و کار با پرامپت‌ها در سرویس هوش مصنوعی لیارا، هم با `OpenAI SDK` و هم با `AI SDK` بررسی شده است.


## پرامپت متنی (Text Prompt)

پرامپت‌های متنی، رشته‌های متنی هستند. این نوع پرامپت‌ها، برای تولید محتوای ساده، مورد استفاده قرار می‌گیرند.

## OpenAI SDK

برای استفاده از پرامپت‌های متنی با OpenAI SDK، می‌توانید از کدها و دستورات زیر استفاده کنید:

- cURL

```bash
curl https://docs.liara.ir/chat/completions \
-H "Content-Type: application/json" \
-H "Authorization: Bearer <LIARA_API_KEY>" \
-d '{
"model": "<modelName>",
"messages": [
{"role": "user", "content": "Hello!"}
]
}'
```

در دستور فوق، مقدار فیلد `content`، پرامپت متنی شما است که می‌توانید بنا به نیاز خود، آن را تغییر دهید.

- JavaScript

```javascript
// npm install openai

const OpenAI = require('openai');

const openai = new OpenAI({
baseURL: 'https://docs.liara.ir',
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

در کد فوق، مقدار فیلد `content`، پرامپت متنی شما است که می‌توانید بنا به نیاز خود، آن را تغییر دهید.

- PHP

```php
<!-- composer require openai-php/client guzzlehttp/guzzle -->

<?php

require 'vendor/autoload.php';

use OpenAI\Client;
use OpenAI\Laravel\Facades\OpenAI;
use OpenAI\Contracts\ResponseContracts\Chat\CreateResponse;

$yourApiKey = '<LIARA_API_KEY>'; 
$baseUrl = 'https://docs.liara.ir'; 
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

در قطعه کد فوق، مقدار فیلد `content`، پرامپت متنی شما است که می‌توانید بنا به نیاز خود، آن را تغییر دهید.

- Python

```python
# pip install openai

from openai import OpenAI

client = OpenAI(
base_url="https://docs.liara.ir",
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

- NET.

```csharp
// dotnet add package OpenAI

using System.ClientModel;
using OpenAI;
using OpenAI.Chat;

class Program
{
static void Main()
{
string apiKey = "<LIARA_API_KEY>";

string baseUrl = "https://docs.liara.ir";

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

در کد فوق، ورودی متد `client.CompleteChat`، پرامپت متنی شما است که می‌توانید بنا به نیاز خود، آن را تغییر دهید.

- Go

```go
// go get github.com/openai/openai-go
// go get github.com/openai/openai-go/option

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
option.WithBaseURL("https://docs.liara.ir"),       
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

در دستور فوق، ورودی متد `openai.UserMessage`، پرامپت متنی شما است که می‌توانید بنا به نیاز خود، آن را تغییر دهید.

در قطعه کد‌های فوق، به‌جای `<baseUrl>`، آدرس سرویس هوش مصنوعی خود را قرار دهید و به‌جای `<LIARA_API_KEY>`, [کلید API خود](https://docs.liara.ir/ai/details/keys) را وارد کنید. همچنین، به‌جای `<model_name>`, نام یکی از مدل‌های خود را قرار دهید.

## AI SDK

برای استفاده از پرامپت‌های متنی با استفاده از AI SDK، می‌توانید از کدهای جاوااسکریپت زیر، استفاده کنید.
فیلد `prompt`، فیلدی است که پرامپت متنی شما را مشخص می‌کند:

- JavaScript

```javascript
// npm i @ai-sdk/openai-compatible
import { createOpenAICompatible } from '@ai-sdk/openai-compatible';
import { generateText } from 'ai';

const { text } = await generateText({
model: createOpenAICompatible({
baseURL: process.env.MY_BASE_URL,
name: 'example',
apiKey: process.env.MY_API_KEY,
}).chatModel("openai/gpt-4o-mini"),

prompt: 'hey.',

});

console.log('Generated Text:', text);
```

- TypeScript

```typescript
// npm i @ai-sdk/openai-compatible
import { createOpenAICompatible } from '@ai-sdk/openai-compatible';
import { generateText } from 'ai';

async function main() {
const model = createOpenAICompatible({
baseURL: process.env.MY_BASE_URL as string,
name: 'example',
apiKey: process.env.MY_API_KEY as string,
}).chatModel("openai/gpt-4o-mini");

const { text } = await generateText({
model,

prompt: 'hey.',

});

console.log('Generated Text:', text);
}

main().catch(console.error);
```

همچنین، می‌توانید از template literalها برای تعریف پرامپت‌های متنی استفاده کنید تا امکان استفاده از متغیرها و رشته‌های چندخطی را داشته باشید. به‌عنوان مثال:

- JavaScript

```javascript
import { createOpenAICompatible } from '@ai-sdk/openai-compatible';
import { generateText } from 'ai';

const destination = "Paris";
const lengthOfStay = 5;


const { text } = await generateText({
model: createOpenAICompatible({
baseURL: process.env.MY_BASE_URL,
name: 'example',
apiKey: process.env.MY_API_KEY,
}).chatModel("openai/gpt-4o-mini"),


prompt: `I am planning a trip to ${destination} for ${lengthOfStay} days. ` +
`Please suggest the best tourist activities for me to do.`,

});

console.log('Generated Text:', text);
```

- TypeScript

```typescript
import { createOpenAICompatible } from '@ai-sdk/openai-compatible';
import { generateText } from 'ai';

const destination = "Paris";
const lengthOfStay = 5;

async function main() {
const model = createOpenAICompatible({
baseURL: process.env.MY_BASE_URL as string,
name: 'example',
apiKey: process.env.MY_API_KEY as string,
}).chatModel("openai/gpt-4o-mini");

const { text } = await generateText({
model,
prompt:
`I am planning a trip to ${destination} for ${lengthOfStay} days. ` +
`Please suggest the best tourist activities for me to do.`,
});

console.log('Generated Text:', text);
}

main().catch(console.error);
```

## پرامپت سیستمی

پرامپت‌های سیستمی مجموعه‌ای از دستورالعمل‌های اولیه هستند که به مدل‌ها داده می‌شوند تا رفتارها و پاسخ‌های آن‌ها را هدایت و محدود کنند. این نوع از پرامپت‌ها به مدل کمک می‌کنند تا در یک چارچوب خاص عمل کند یا لحن و نقش مشخصی را ایفا نماید.

## AI SDK

شما می‌توانید به شکل زیر، پرامپت‌های سیستمی را در برنامه خود تعریف کنید.

- JavaScript

```javascript
// npm i @ai-sdk/openai-compatible
import { createOpenAICompatible } from '@ai-sdk/openai-compatible';
import { generateText } from 'ai';

const destination = "Paris";
const lengthOfStay = 5;


const { text } = await generateText({
model: createOpenAICompatible({
baseURL: process.env.MY_BASE_URL,
name: 'example',
apiKey: process.env.MY_API_KEY,
}).chatModel("openai/gpt-4o-mini"),

system:
`You help planning travel itineraries. ` +
`Respond to the users' request with a list ` +
`of the best stops to make in their destination.`,

prompt: `I am planning a trip to ${destination} for ${lengthOfStay} days. ` +
`Please suggest the best tourist activities for me to do.`,

});

console.log('Generated Text:', text);
```

- TypeScript

```typescript
import { createOpenAICompatible } from '@ai-sdk/openai-compatible';
import { generateText } from 'ai';
// import { config } from 'dotenv';
// config();

const destination = "Paris";
const lengthOfStay = 5;

async function main() {
const model = createOpenAICompatible({
baseURL: process.env.MY_BASE_URL as string,
name: 'example',
apiKey: process.env.MY_API_KEY as string,
}).chatModel("openai/gpt-4o-mini");

const { text } = await generateText({
model,

system:
`You help planning travel itineraries. ` +
`Respond to the users' request with a list ` +
`of the best stops to make in their destination.`,

prompt:
`I am planning a trip to ${destination} for ${lengthOfStay} days. ` +
`Please suggest the best tourist activities for me to do.`,
});

console.log('Generated Text:', text);
}

main().catch(console.error);
```

در قطعه کدهای فوق، مقدار فیلد `system`، پرامپت سیستمی شما است که می‌توانید بنا به نیاز خود، آن را تغییر دهید.

## پرامپت‌های پیام‌محور

پرامپت پیام‌محور، آرایه‌ای از پیام‌ها است 
که هر پیام دارای نقش مشخصی مانند `user` (کاربر)، `assistant` (دستیار)، یا `tool` (ابزار) است. این نوع پرامپت‌ها برای چت‌بات‌ها و پرامپت‌های پیچیده‌تر و چندوجهی (multi-modal) بسیار مناسب‌اند.

## OpenAI SDK

برای استفاده از پرامپت‌های پیام‌محور با OpenAI SDK، می‌توانید از کدها و دستورات زیر استفاده کنید:

- cURL

```bash
curl https://docs.liara.ir/chat/completions \
-H "Content-Type: application/json" \
-H "Authorization: Bearer <LIARA_API_KEY>" \
-d '{
"model": "<modelName>",
"messages": [
{
"role": "developer",
"content": "Talk like a pirate."
},
{
"role": "user",
"content": "Are semicolons optional in JavaScript?"
}

]
}'
```

در دستور فوق، مقدار فیلد `role`، می‌تواند یکی از مقادیر زیر باشد (به ترتیب اولویت، نقش‌ها قرار گرفته‌اند):

- `developer` (توسعه‌دهنده): دستورالعمل‌هایی که توسط توسعه‌دهنده‌ی اپلیکیشن ارائه می‌شود.
- `system` (سیستم): تنظیم کلی رفتار مدل. لحن، سبک، دستورالعمل‌های کلی و نقش‌آفرینی.
- `user` (کاربر): ورودی که از سمت کاربر نهایی به مدل داده می‌شود.
- `assistant` (دستیار): نقش پاسخ‌دهنده مدل را دارد؛ یعنی پیام‌هایی که مدل تولید کرده با این نقش ذخیره می‌شوند.
- `tool` (ابزار): یک ابزار ثالت که باعث بهبود پاسخگویی مدل، می‌شود.

- JavaScript

```javascript
// npm install openai

const OpenAI = require('openai');
const { config } = require('dotenv');
config();

const openai = new OpenAI({
baseURL: "https://docs.liara.ir",
apiKey: process.env.MY_API_KEY,
});

async function main() {
const completion = await openai.chat.completions.create({
model: "openai/gpt-4o-mini",
messages: [
{
role: "developer",
content: "Talk like a pirate."
},
{
role: "user",
content: "Are semicolons optional in JavaScript?",
},
],
});

console.log(completion.choices[0].message);
}

main();
```

در دستور فوق، مقدار فیلد `role`، می‌تواند یکی از مقادیر زیر باشد (به ترتیب اولویت، نقش‌ها قرار گرفته‌اند):

- PHP

```php
<!-- composer require openai-php/client guzzlehttp/guzzle -->

<?php

require 'vendor/autoload.php';

use OpenAI\Client;
use OpenAI\Laravel\Facades\OpenAI;
use OpenAI\Contracts\ResponseContracts\Chat\CreateResponse;

$yourApiKey = '<LIARA_API_KEY>'; 
$baseUrl = 'https://docs.liara.ir'; 
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
['role' => 'developer', 'content' => 'Talk like a pirate.'],
['role' => 'user', 'content' => 'Are semicolons optional in JavaScript?'],
],
]);

// Print the response
echo $result->choices[0]->message->content;

```

در دستور فوق، مقدار فیلد `role`، می‌تواند یکی از مقادیر زیر باشد (به ترتیب اولویت، نقش‌ها قرار گرفته‌اند):

- Python

```python
from openai import OpenAI

client = OpenAI(
base_url="https://docs.liara.ir",
api_key="<LIARA_API_KEY>",
)

completion = client.chat.completions.create(
model="openai/gpt-4o-mini",
messages=[
{
"role": "developer",
"content": "Talk like a pirate."
},
{
"role": "user",
"content": "Are semicolons optional in JavaScript?"
}
]
)

print(completion.choices[0].message.content)
```

در دستور فوق، مقدار فیلد `role`، می‌تواند یکی از مقادیر زیر باشد (به ترتیب اولویت، نقش‌ها قرار گرفته‌اند):

- NET.

```csharp
// dotnet add package OpenAI

using System.ClientModel;
using OpenAI;
using OpenAI.Chat;

class Program
{
static void Main()
{

string apiKey = "<LIARA_API_KEY>";
string baseUrl = "https://docs.liara.ir";  
OpenAIClientOptions options = new OpenAIClientOptions
{
Endpoint = new Uri(baseUrl)
};

ChatClient client = new(model: "<model_name>", credential: new ApiKeyCredential(apiKey), options: options);

ChatCompletion completion = client.CompleteChat(
[
// System messages represent instructions or other guidance about how the assistant should behave
new SystemChatMessage("You are a helpful assistant that talks like a pirate."),

// User messages represent user input, whether historical or the most recent input
new UserChatMessage("Hi, can you help me?"),

// Assistant messages in a request represent conversation history for responses
new AssistantChatMessage("Arrr! Of course, me hearty! What can I do for ye?"),

new UserChatMessage("What's the best way to train a parrot?"),
]);

Console.WriteLine($"{completion.Role}: {completion.Content[0].Text}");        
}
}
```

در دستور فوق، سه متد `ChatClient` تعریف شده است (به ترتیب اولویت، نقش‌ها قرار گرفته‌اند):

- Go

```go
// go get github.com/openai/openai-go
// go get github.com/openai/openai-go/option

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
option.WithBaseURL("https://docs.liara.ir"),       
)

chatCompletion, err := client.Chat.Completions.New(context.TODO(), openai.ChatCompletionNewParams{
Messages: []openai.ChatCompletionMessageParamUnion{
openai.DeveloperMessage("Talk like a pirate!"),
openai.UserMessage("Are semicolons optional in JavaScript?"),          
},
Model: model,                                           
})
if err != nil {
panic(err.Error())          
}

fmt.Println("Model Response:", chatCompletion.Choices[0].Message.Content)
}
```

در دستور فوق، پنج متد برای نقش می‌توان تعریف کرد (به ترتیب اولویت، نقش‌ها قرار گرفته‌اند):

## AI SDK

برای استفاده از پرامپت‌های متنی با استفاده از AI SDK، می‌توانید از کدهای جاوااسکریپت زیر، استفاده کنید:

- JavaScript

```javascript
// npm i @ai-sdk/openai-compatible

import { createOpenAICompatible } from '@ai-sdk/openai-compatible';
import { generateText } from 'ai';

const { text } = await generateText({
model: createOpenAICompatible({
baseURL: process.env.MY_BASE_URL,
name: 'example',
apiKey: process.env.MY_API_KEY,
}).chatModel("openai/gpt-4o-mini"),

messages: [
{ role: 'user', content: 'Hi!' },
{ role: 'assistant', content: 'Hello, how can I help?' },
{ role: 'user', content: 'Where can I buy the best Ghormeh Sabzi in Iran?' },
],
});

console.log('Generated Text:', text);
```

- TypeScript

```typescript
import { createOpenAICompatible } from '@ai-sdk/openai-compatible';
import { generateText } from 'ai';
// import { config } from 'dotenv';
// config();


async function main() {
const model = createOpenAICompatible({
baseURL: process.env.MY_BASE_URL as string,
name: 'example',
apiKey: process.env.MY_API_KEY as string,
}).chatModel("openai/gpt-4o-mini");

const { text } = await generateText({
model,

messages: [
{ role: 'user', content: 'Hi!' },
{ role: 'assistant', content: 'Hello, how can I help?' },
{ role: 'user', content: 'Where can I buy the best Ghormeh Sabzi in Iran?' },
],

});

console.log('Generated Text:', text);
}

main().catch(console.error);
```

در قطعه کد فوق، مقدار فیلد `role`، می‌تواند یکی از مقادیر زیر باشد (به ترتیب اولویت، نقش‌ها قرار گرفته‌اند):

- `system` (سیستم): تعیین رفتار، شخصیت، سبک و محدودیت‌های مدل در طول پاسخ‌دهی.
- `data` (اطلاعات زمینه‌ای): ارائه اطلاعات کمکی یا پایه‌ای به مدل، مثلاً نتایج یک API یا محتوای یک سند.
- `user` (کاربر): ورودی که از سمت کاربر نهایی به مدل داده می‌شود.
- `assistant` (دستیار): نقش پاسخ‌دهنده مدل را دارد؛ یعنی پیام‌هایی که مدل تولید کرده با این نقش ذخیره می‌شوند.

> در نظر داشته باشید که در دستورات فوق، بیش از یک پیام در یک زمان، به مدل ارسال می‌شود و ممکن است که همه مدل‌های زبانی از roleهای مختلف و چند محتوایی، پشتیبانی نکنند.

## انواع پرامپت‌ها با نقش کاربر (user)

در ادامه، تمامی پرامپت‌هایی که یک مدل با نقش `user` می‌تواند دریافت کند، توضیح داده شده است.

### ۱. پرامپت متنی ساده

رایج ترین پرامپت با نقش `user` که یک رشته متنی ساده است که 
در بخش [پرامپت متنی](https://docs.liara.ir/ai/foundations/prompts/#text-prompt) توضیح داده شده است.

## ۲. پرامپت متنی به همراه عکس

شما می‌توانید در یک ورودی به مدل، همزمان از متن و عکس استفاده کنید. به عنوان مثال، می‌توانید از یک عکس به عنوان ورودی استفاده کنید و از مدل بخواهید که در مورد آن عکس توضیح دهد یا سوالاتی را پاسخ دهد.

## OpenAI SDK

برای استفاده از پرامپت‌های متنی همراه با عکس در OpenAI SDK، می‌توانید از کدها و دستورات زیر استفاده کنید:

- cURL

```bash
curl https://docs.liara.ir/chat/completions \
-H "Content-Type: application/json" \
-H "Authorization: Bearer <LIARA_API_KEY>" \
-d '{
"model": "<modelName>",
"messages": [
{
"role": "user",
"content": [
{
"type": "text",
"text": "Describe the image in detail."
},
{
"type": "image_url",
"image_url": {
"url": "https://media.liara.ir/ai/dog.png"
}
}
]
}

]
}'
```

در قطعه کد فوق، فیلد `image_url.url`، آدرس عکس ورودی است که می‌خواهید به مدل ارسال کنید.
این آدرس، می‌تواند یک لینک به عکس باشد یا می‌تواند بر پایه فرمت Base64 باشد.

- JavaScript

```javascript
// npm install openai

const OpenAI = require('openai');
// const { config } = require('dotenv');
// config();

const openai = new OpenAI({
baseURL: "https://docs.liara.ir",
apiKey: process.env.MY_API_KEY,
});

async function main() {
const completion = await openai.chat.completions.create({
model: "openai/gpt-4o-mini",
messages: [
{
"role": "user",
"content": [
{
"type": "text",
"text": "Describe the images in detail."
},
{
"type": "image_url",
"image_url": {"url": "https://media.liara.ir/ai/dog.png"}
}
]
}
],
});

console.log(completion.choices[0].message);
}

main();
```

در قطعه کد فوق، فیلد `image_url.url`، آدرس عکس ورودی است که می‌خواهید به مدل ارسال کنید.
این آدرس، می‌تواند یک لینک به عکس باشد یا می‌تواند بر پایه فرمت Base64 باشد.

- PHP

```php
<!-- composer require openai-php/client guzzlehttp/guzzle -->

<?php

require 'vendor/autoload.php';

use OpenAI\Client;
use OpenAI\Laravel\Facades\OpenAI;
use OpenAI\Contracts\ResponseContracts\Chat\CreateResponse;


$yourApiKey = '<LIARA_API_KEY>'; 
$baseUrl = 'https://docs.liara.ir'; 
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
['role' => 'user', 'content' => [
[
"type" => "text",
"text" => "Describe the image in detail."
],
[
"type" => "image_url",
"image_url" => ["url" => "https://media.liara.ir/ai/dog.png"]
]
]],
],
]);

// Print the response
echo $result->choices[0]->message->content;

```

در قطعه کد فوق، فیلد `image_url.url`، آدرس عکس ورودی است که می‌خواهید به مدل ارسال کنید.
این آدرس، می‌تواند یک لینک به عکس باشد یا می‌تواند بر پایه فرمت Base64 باشد.

- Python

```python
from openai import OpenAI

client = OpenAI(
base_url="https://docs.liara.ir",
api_key="<LIARA_API_KEY>",
)

completion = client.chat.completions.create(
model="openai/gpt-4o-mini",
messages= [
{
"role": "user",
"content": [
{
"type": "text",
"text": "Describe the image in detail."
},
{
"type": "image_url",
"image_url": {"url": "https://media.liara.ir/ai/dog.png"}
}
]
}
],
)

print(completion.choices[0].message.content)
```

در قطعه کد فوق، فیلد `image_url.url`، آدرس عکس ورودی است که می‌خواهید به مدل ارسال کنید.
این آدرس، می‌تواند یک لینک به عکس باشد یا می‌تواند بر پایه فرمت Base64 باشد.

- NET.

```csharp
using System.ClientModel;
using OpenAI;
using OpenAI.Chat;

string apiKey = "<LIARA_API_KEY>";
string baseUrl = "https://docs.liara.ir";

OpenAIClientOptions options = new OpenAIClientOptions
{
Endpoint = new Uri(baseUrl)
};

ChatClient client = new(
model: "<model_name>",
credential: new ApiKeyCredential(apiKey),
options: options
);

// Use a public image URL
Uri imageUri = new Uri("https://media.liara.ir/ai/dog.png");

var messages = new List<ChatMessage>
{
new UserChatMessage(
ChatMessageContentPart.CreateTextPart("Describe this image."),
ChatMessageContentPart.CreateImagePart(imageUri)
)
};

ClientResult<ChatCompletion> result = await client.CompleteChatAsync(messages);
string response = result.Value.Content[0].Text;
Console.WriteLine(response);
```

در قطعه کد فوق، ورودی متد `ChatMessageContentPart.CreateImagePart`، آدرس عکس ورودی است که می‌خواهید به مدل ارسال کنید.
این آدرس، می‌تواند یک لینک به عکس باشد.

- Go

```go
// go get github.com/sashabaranov/go-openai

package main

import (
"context"
"fmt"

"github.com/sashabaranov/go-openai"
)

func main() {


config := openai.DefaultConfig("<LIARA_API_KEY>")
config.BaseURL = "https://docs.liara.ir"
client := openai.NewClientWithConfig(config)


model := "openai/gpt-4o-mini" 
imageURL := "https://media.liara.ir/ai/dog.png"

req := openai.ChatCompletionRequest{
Model: model,
Messages: []openai.ChatCompletionMessage{
{
Role: openai.ChatMessageRoleUser,

MultiContent: []openai.ChatMessagePart{
{Type: openai.ChatMessagePartTypeText, Text: "Describe the image."},
{Type: openai.ChatMessagePartTypeImageURL, ImageURL: &openai.ChatMessageImageURL{URL: imageURL}},
},
},
},
}

resp, err := client.CreateChatCompletion(context.Background(), req)
if err != nil {
panic(err)
}

fmt.Println("Model Response:", resp.Choices[0].Message.Content)
}
```

در قطعه کد فوق، فیلد `ImageURL`، آدرس عکس ورودی است که می‌خواهید به مدل ارسال کنید.
این آدرس، می‌تواند یک لینک به عکس باشد یا می‌تواند بر پایه فرمت Base64 باشد.

در نظر داشته باشید که برای ارسال عکس به عنوان ورودی، به‌جای استفاده از کتابخانه اصلی OpenAI، از کتابخانه `sashabaranov/go-openai` استفاده شده است که می‌توانید با اجرای دستور زیر، آن را نصب کنید:

```bash
go get github.com/sashabaranov/go-openai
```

## AI SDK

برای استفاده از پرامپت‌های متنی با استفاده از AI SDK، می‌توانید از کدهای جاوااسکریپت زیر، استفاده کنید:

- JavaScript

```javascript
// npm i @ai-sdk/openai-compatible

import { createOpenAICompatible } from '@ai-sdk/openai-compatible';
import { generateText } from 'ai';
import { config } from 'dotenv';
import fs from 'fs';
config();

const { text } = await generateText({
model: createOpenAICompatible({
baseURL: process.env.MY_BASE_URL,
name: 'example',
apiKey: process.env.MY_API_KEY,
}).chatModel("openai/gpt-4o-mini"),

messages: [
{
role: 'user',
content: [
{ type: 'text', text: 'Describe the image in detail.' },
{
type: 'image',
image: fs.readFileSync('dog.png'),
},
],
},
],
});

console.log('Generated Text:', text);
```

در قطعه کد فوق، فیلد `image`، آدرس عکس ورودی است که می‌خواهید به مدل ارسال کنید.
این آدرس، می‌تواند یک لینک به عکس باشد، همچنین، می‌تواند بر پایه فرمت Base64 باشد. به عنوان مثال:

```js
{
  type: 'image',
  image: fs.readFileSync('./data/cat.png').toString('base64'),
}
```

یا اینکه یک لینک باشد:

```bash
{
type: 'image',
image:
  'https://media.liara.ir/ai/dog.png',
},
```

- TypeScript

```typescript
import { createOpenAICompatible } from '@ai-sdk/openai-compatible';
import { generateText } from 'ai';
import { config } from 'dotenv';
import fs from 'fs';
config();

async function main() {
const model = createOpenAICompatible({
baseURL: process.env.MY_BASE_URL as string,
name: 'example',
apiKey: process.env.MY_API_KEY as string,
}).chatModel("openai/gpt-4.1");

const { text } = await generateText({
model,

messages: [
{
role: 'user',
content: [
{ type: 'text', text: 'Describe the image in detail.' },
{
type: 'image',
image: fs.readFileSync('dog.png'),
},
],
},
],

});

console.log('Generated Text:', text);
}

main().catch(console.error);
```

در قطعه کد فوق، فیلد `image`، آدرس عکس ورودی است که می‌خواهید به مدل ارسال کنید.
این آدرس، می‌تواند یک لینک به عکس باشد، همچنین، می‌تواند بر پایه فرمت Base64 باشد. به عنوان مثال:

```js
{
  type: 'image',
  image: fs.readFileSync('./data/cat.png').toString('base64'),
}
```

یا اینکه یک لینک باشد:

```bash
{
type: 'image',
image:
  'https://media.liara.ir/ai/dog.png',
},
```

> یک عکس Base64، به جای فرمت‌های معمولی تصویری (مانند `jpg` یا `png`)، یک رشته متنی طولانی کدگذاری شده است که می‌تواند به عنوان ورودی به مدل ارسال شود.
> شما می‌توانید برای تبدیل عکس‌های خود به فرمت Base64، از وب‌سایت [base64-image](https://www.base64-image.de) استفاده کنید.

## ۳. پرامپت متنی به همراه ورودی صوتی

شما می‌توانید در یک ورودی به مدل، همزمان از متن و فایل صوتی استفاده کنید. به عنوان مثال، می‌توانید از یک فایل صوتی به عنوان ورودی استفاده کنید و از مدل بخواهید که در مورد آن فایل توضیح دهد یا سوالاتی را پاسخ دهد.

> در نظر داشته باشید که تنها راه ارائه فایل صوتی به مدل، استفاده از Buffer یا قرار دادن فایل به صورت محلی کنار کد است و امکان استفاده از لینک مستقیم وجود ندارد.

> API هوش مصنوعی لیارا، ورودی صوتی با فرمت `mp3` و `wav` را پشتیبانی می‌کند.

## OpenAI SDK

برای استفاده از پرامپت‌های متنی همراه با ورودی صوتی در OpenAI SDK، می‌توانید از کدها و دستورات زیر استفاده کنید: 

- JavaScript

```javascript
// npm install openai

import OpenAI from "openai";
import fs from "fs";

const openai = new OpenAI({
baseURL: "https://docs.liara.ir",
apiKey: "<LIARA_API_KEY>",
});

async function main() {

// Read and base64 encode the audio file
const audioFile = fs.readFileSync("liara-song.mp3");
const audioBase64 = audioFile.toString("base64");

const completion = await openai.chat.completions.create({
model: "google/gemini-2.5-flash", 
messages: [
{
role: "user",
content: [
{
type: "text",
text: "What is the audio saying?",
},
{
type: "input_audio",
input_audio: {
data: audioBase64,
format: "mp3",
},
},
],
},
],
});

console.log(completion.choices[0].message.content);
}

main();
```

- PHP

```php
<!-- composer require openai-php/client guzzlehttp/guzzle -->

<?php
require 'vendor/autoload.php';

use OpenAI\Client;

$client = OpenAI::factory()
->withApiKey('<LIARA_API_KEY>')
->withBaseUri('https://docs.liara.ir') 
->make();

// Read and base64 encode the audio file
$audioData = base64_encode(file_get_contents("liara-song.mp3"));

$response = $client->chat()->create([
"model" => "google/gemini-2.5-flash",
"messages" => [
[
"role" => "user",
"content" => [
[
"type" => "text",
"text" => "What is the audio saying?"
],
[
"type" => "input_audio",
"input_audio" => [
"data" => $audioData,
"format" => "mp3"
]
]
]
]
],
]);

echo $response->choices[0]->message->content;
```

- Python

```python
# pip install openai

from openai import OpenAI
import base64

client = OpenAI(
base_url="https://docs.liara.ir",
api_key="<LIARA_API_KEY>",
)

with open("liara-song.mp3", "rb") as audio_file:
audio_data = base64.b64encode(audio_file.read()).decode('utf-8')

completion = client.chat.completions.create(
model="google/gemini-2.5-flash",
messages=[
{
"role": "user",
"content": [
{
"type": "text",
"text": "What is the audio saying?"
},
{
"type": "input_audio",
"input_audio": {
"data": audio_data,
"format": "mp3"
}
}
]
}
],
)

print(completion.choices[0].message.content)
```

- NET.

```csharp
// dotnet add package OpenAI

using System;
using System.IO;
using System.Threading.Tasks;
using System.ClientModel;
using OpenAI;
using OpenAI.Chat;

class Program
{
static async Task Main()
{
string apiKey  = "<LIARA_API_KEY>";
string baseUrl = "https://docs.liara.ir";

OpenAIClientOptions options = new OpenAIClientOptions
{
Endpoint = new Uri(baseUrl)
};

ChatClient client = new(
model: "google/gemini-2.5-flash",
credential: new ApiKeyCredential(apiKey),
options: options
);

byte[] audioBytes = File.ReadAllBytes("liara-song.mp3");
BinaryData audioData = BinaryData.FromBytes(audioBytes);

var messages = new List<ChatMessage>
{
new UserChatMessage(
ChatMessageContentPart.CreateTextPart("What is the audio saying?"),
ChatMessageContentPart.CreateInputAudioPart(audioData, ChatInputAudioFormat.Mp3)
)
};

ClientResult<ChatCompletion> result = await client.CompleteChatAsync(messages);
string response = result.Value.Content[0].Text;
Console.WriteLine(response);
}
}
```

- Go

```go
// go get github.com/openai/openai-go
// go get github.com/openai/openai-go/option

package main

import (
"context"
"encoding/base64"
"encoding/json"
"fmt"
"log"
"os"

openai "github.com/openai/openai-go/v2"
"github.com/openai/openai-go/v2/option"
)

type InputAudio struct {
Data   string `json:"data"`
Format string `json:"format"`
}

type ContentItem struct {
Type       string     `json:"type"`
Text       string     `json:"text,omitempty"`
InputAudio *InputAudio `json:"input_audio,omitempty"`
}

type Message struct {
Role    string        `json:"role"`
Content []ContentItem `json:"content"`
}

func main() {
audioPath := "liara-song.mp3"

audioBytes, err := os.ReadFile(audioPath)
if err != nil {
log.Fatalf("Failed to read audio file: %v", err)
}

base64Audio := base64.StdEncoding.EncodeToString(audioBytes)

client := openai.NewClient(
option.WithAPIKey("<LIARA_API_KEY>"),
option.WithBaseURL("https://docs.liara.ir"),
)

messages := []Message{
{
Role: "user",
Content: []ContentItem{
{Type: "text", Text: "What is the audio saying?"},
{Type: "input_audio", InputAudio: &InputAudio{
Data:   base64Audio,
Format: "mp3",
}},
},
},
}

params := map[string]interface{}{
"model":    "google/gemini-2.5-flash",
"messages": messages,
}

var result map[string]interface{}
if err := client.Post(context.Background(), "/v1/chat/completions", params, &result); err != nil {
log.Fatalf("API request failed: %v", err)
}

if choices, ok := result["choices"].([]interface{}); ok && len(choices) > 0 {
if msg, ok := choices[0].(map[string]interface{})["message"].(map[string]interface{}); ok {
content, _ := json.MarshalIndent(msg["content"], "", "  ")
fmt.Println("Model Response:", string(content))
} else {
fmt.Printf("Unexpected message format: %+v\n", choices[0])
}
} else {
fmt.Printf("No choices returned. Full response: %+v\n", result)
}
}
```

- cURL

```bash
#!/bin/bash
# create a file named command.sh and run with `bash command.sh liara-song.mp3`

if [ $# -eq 0 ]; then
echo "Usage: $0 <audio_file.mp3>"
echo "Example: $0 liara-song.mp3"
exit 1
fi

AUDIO_FILE="$1"

if [ ! -f "$AUDIO_FILE" ]; then
echo "Error: Audio file '$AUDIO_FILE' not found"
exit 1
fi

echo "Encoding audio file to base64..."

AUDIO_BASE64=$(base64 -w 0 "$AUDIO_FILE")

echo "Creating JSON payload..."

cat > /tmp/payload.json << EOF
{
"model": "google/gemini-2.5-flash",
"messages": [
{
"role": "user",
"content": [
{
"type": "text",
"text": "What is the audio saying?"
},
{
"type": "input_audio",
"input_audio": {
"data": "$AUDIO_BASE64",
"format": "mp3"
}
}
]
}
]
}
EOF

echo "Sending request to API..."

curl -X POST "https://docs.liara.ir/chat/completions" \
-H "Content-Type: application/json" \
-H "Authorization: Bearer <LIARA_API_KEY>" \
-d @/tmp/payload.json

echo ""
echo "Cleaning up temporary files..."

rm /tmp/payload.json

echo "Done!"
```

## AI SDK

برای استفاده از پرامپت‌های متنی با استفاده از AI SDK، می‌توانید از کد زیر، استفاده کنید:

```js
// npm i @ai-sdk/openai@^1 ai@^4 dotenv

import { generateText } from 'ai';
import { createOpenAI } from '@ai-sdk/openai';
import { config } from 'dotenv';
import fs from 'fs';

config();
const my_model = createOpenAI({
  baseURL: process.env.BASE_URL!,
  apiKey: process.env.LIARA_API_KEY!,
});

const result = await generateText({
  model: my_model('google/gemini-2.5-flash'),
  messages: [
    {
      role: 'user',
      content: [
        {
          type: 'file',
          mimeType: 'audio/mpeg',
          data: fs.readFileSync('./data/liara-song.mp3'),
        },
      ],
    },
  ],
});

console.log(result.text);
```

## ۴. پرامپت متنی به همراه ورودی فایل یا ورودی PDF

شما می‌توانید در یک ورودی به مدل، همزمان از متن و فایل استفاده کنید. به عنوان مثال، می‌توانید از یک فایل به عنوان ورودی استفاده کنید و از مدل بخواهید که در مورد آن فایل توضیح دهد یا سوالاتی را پاسخ دهد.

## AI SDK و HTTP Request

> 
> در نظر داشته باشید که به‌خاطر محدودیت ماژول AI SDK، تنها راه ارائه فایل به مدل، استفاده از Buffer یا قرار دادن فایل به صورت محلی کنار کد است و امکان استفاده از لینک مستقیم فایل در این ماژول، وجود ندارد.

برای ارسال پرامپت متنی همراه با فایل در AI SDK، می‌توانید از دستور زیر استفاده کنید:    

```js
// npm i @ai-sdk/openai@^1 ai@^4 dotenv

import { generateText } from 'ai';
import { createOpenAI } from '@ai-sdk/openai';
import { config } from 'dotenv';
import fs from 'fs';

config();
const my_model = createOpenAI({
  baseURL: process.env.BASE_URL!,
  apiKey: process.env.LIARA_API_KEY!,
});

const result = await generateText({
  model: my_model('openai/gpt-4o-mini'),
  messages: [
    {
      role: 'user',
      content: [
        { type: 'text', text: 'What is the file about?' },
        {
          type: 'file',
          mimeType: 'application/pdf',
          data: fs.readFileSync('./data/sample.pdf'),
          filename: 'sample.pdf', // optional, not used by all providers
        },
      ],
    },
  ],
});

console.log(result.text)
```

برای ارسال پرامپت متنی همراه با فایل در یک درخواست HTTP در پلتفرم‌های مختلف، می‌توانید از دستور زیر استفاده کنید:    

### ارسال فایل با URL

برای ارسال فایل به همراه پرامپت متنی از طریق درج URL، می‌توانید همانند قطعه کدهای زیر عمل کنید: 

- Python

```python
import requests
import os

# import dotenv 
# dotenv.load_dotenv()

url = os.getenv("LIARA_BASE_URL")
api_key = os.getenv("LIARA_API_KEY") 
model_name = "openai/gpt-4o-mini"

headers = {
"Authorization": f"Bearer {api_key}",
"Content-Type": "application/json"
}

messages = [
{
"role": "user",
"content": [
{
"type": "text",
"text": "What are the main points in this document?"
},
{
"type": "file",
"file": {
"filename": "document.pdf",
"file_data": "https://media.liara.ir/ai/what-is-liara.pdf"
}
},
]
}
]

payload = {
"model": model_name,
"messages": messages,
}

response = requests.post(url+"/chat/completions", headers=headers, json=payload)
print(response.json())
```

- TypeScript

```typescript
async function main() {
try {
const apiKey = "replace with liara ai key";
const url = "replace your base url"  + "/chat/completions"
if (!apiKey) {
throw new Error('API_KEY environment variable is not set');
}

const response = await fetch(url, {
method: 'POST',
headers: {
Authorization: `Bearer ${apiKey}`,
'Content-Type': 'application/json',
},
body: JSON.stringify({
model: 'openai/gpt-4o-mini',
messages: [
{
role: 'user',
content: [
{
type: 'text',
text: 'What are the main points in this document?',
},
{
type: 'file',
file: {
filename: 'document.pdf',
file_data: 'https://media.liara.ir/ai/what-is-liara.pdf',
},
},
],
},
],
}),
});

if (!response.ok) {
throw new Error(`HTTP error! status: ${response.status}`);
}

const data = await response.json();
console.log(data);
} catch (error) {
console.error('Error:', error instanceof Error ? error.message : String(error));
process.exit(1);
}
}

main();
```

### ارسال فایل با کدگذاری Base64

برای فایل‌های PDF موجود در سیستم local یا PDFهایی که باید محتوای آن‌ها را به صورت مستقیم بفرستید؛ می‌توانید از کدگذاری base64 استفاده کنید. 

- Python

```python
import requests
import base64
import os

# import dotenv 
# dotenv.load_dotenv()

def encode_pdf_to_base64(pdf_path):
with open(pdf_path, "rb") as pdf_file:
return base64.b64encode(pdf_file.read()).decode('utf-8')

url = os.getenv("LIARA_BASE_URL") + "/chat/completions"
api_key = os.getenv("LIARA_API_KEY") 
model_name = "openai/gpt-4o-mini"

headers = {
"Authorization": f"Bearer {api_key}",
"Content-Type": "application/json"
}

# Read and encode the PDF
pdf_path = "what-is-liara.pdf"
base64_pdf = encode_pdf_to_base64(pdf_path)
data_url = f"data:application/pdf;base64,{base64_pdf}"
messages = [
{
"role": "user",
"content": [
{
"type": "text",
"text": "What are the main points in this document?"
},
{
"type": "file",
"file": {
"filename": "what-is-liara.pdf",
"file_data": data_url
}
},
]
}
]

payload = {
"model": "openai/gpt-4o-mini",
"messages": messages,
}
response = requests.post(url, headers=headers, json=payload)
print(response.json())
```

- TypeScript

```typescript
import fs from 'fs';

async function encodePDFToBase64(pdfPath: string): Promise<string> {
const pdfBuffer = await fs.promises.readFile(pdfPath);
const base64PDF = pdfBuffer.toString('base64');
return `data:application/pdf;base64,${base64PDF}`;
}

// Read and encode the PDF
const pdfPath = 'what-is-liara.pdf';
const base64PDF = await encodePDFToBase64(pdfPath);

const API_KEY     = "replace-with-your-api-key";
const BASE_URL    = "replace-with-your-base-url";
const MODEL       = 'openai/gpt-4o-mini'; 

const response = await fetch(BASE_URL+"/chat/completions", {
method: 'POST',
headers: {
Authorization: `Bearer ${API_KEY}`,
'Content-Type': 'application/json',
},
body: JSON.stringify({
model: MODEL,
messages: [
{
role: 'user',
content: [
{
type: 'text',
text: 'What are the main points in this document?',
},
{
type: 'file',
file: {
filename: 'what-is-liara.pdf',
file_data: base64PDF,
},
},
],
},
],
}),
});

const data = await response.json();
console.log(data);
```

## پریدن از هزینه‌های parsing

وقتی یک فایل PDF را به مدل ارسال می‌کنید، پاسخ ممکن است شامل یک‌سری annotation مربوط به فایل در پیام دستیار باشد. این annotationها شامل اطلاعات ساختارمند درباره‌ی محتوای فایل PDF هست که توسط مدل، تجزیه و تحلیل (parse) شده است.

با ارسال مجدد این annotationها در درخواست‌های بعدی، می‌توانید از تجزیه و تحلیل مجدد همان فایل PDF جلوگیری کنید، که این کار موجب صرفه‌جویی در زمان پردازش و کاهش هزینه‌ها می‌شود.

به شکل زیر می‌توانید از annotationها به صورت مجدد استفاده کنید:

- Python

```python
import requests
import base64
import os

# import dotenv 
# dotenv.load_dotenv()

# First, encode and send the PDF
def encode_pdf_to_base64(pdf_path):
with open(pdf_path, "rb") as pdf_file:
return base64.b64encode(pdf_file.read()).decode('utf-8')

url = os.getenv("LIARA_BASE_URL") + "/chat/completions"
api_key = os.getenv("LIARA_API_KEY") 
model_name = "openai/gpt-4o-mini"

headers = {
"Authorization": f"Bearer {api_key}",
"Content-Type": "application/json"
}

# Read and encode the PDF
pdf_path = "what-is-liara.pdf"
base64_pdf = encode_pdf_to_base64(pdf_path)
data_url = f"data:application/pdf;base64,{base64_pdf}"
messages = [
{
"role": "user",
"content": [
{
"type": "text",
"text": "What are the main points in this document?"
},
{
"type": "file",
"file": {
"filename": "what-is-liara.pdf",
"file_data": data_url
}
},
]
}
]

payload = {
"model": "openai/gpt-4o-mini",
"messages": messages,
}
response = requests.post(url, headers=headers, json=payload)
response_data = response.json()

# Store the annotations from the response
file_annotations = None
if response_data.get("choices") and len(response_data["choices"]) > 0:
if "annotations" in response_data["choices"][0]["message"]:
file_annotations = response_data["choices"][0]["message"]["annotations"]
# Follow-up request using the annotations (without sending the PDF again)
if file_annotations:
follow_up_messages = [
{
"role": "user",
"content": [
{
"type": "text",
"text": "What are the main points in this document?"
},
{
"type": "file",
"file": {
"filename": "document.pdf",
"file_data": data_url
}
}
]
},
{
"role": "assistant",
"content": "The document contains information about...",
"annotations": file_annotations
},
{
"role": "user",
"content": "Can you elaborate on the second point?"
}
]
follow_up_payload = {
"model": "google/gemma-3-27b-it",
```

"messages": follow_up_messages
}
follow_up_response = requests.post(url, headers=headers, json=follow_up_payload)
print(follow_up_response.json())`,
},
{
label: "TypeScript",
language: "typescript",
code: `import fs from 'fs';

async function encodePDFToBase64(pdfPath: string): Promise<string> {
const pdfBuffer = await fs.promises.readFile(pdfPath);
const base64PDF = pdfBuffer.toString('base64');
return \`data:application/pdf;base64,\${base64PDF}\`;
}

async function processDocument() {

// Read and encode the PDF
const pdfPath = 'what-is-liara.pdf';
const base64PDF = await encodePDFToBase64(pdfPath);

const API_KEY     = "replace-with-your-api-key";
const BASE_URL    = "replace-with-your-base-url";
const MODEL       = 'openai/gpt-4o-mini'; 

const initialResponse = await fetch(BASE_URL+"/chat/completions", {
method: 'POST',
headers: {
Authorization: \`Bearer \${API_KEY}\`,
'Content-Type': 'application/json',
},
body: JSON.stringify({
model: MODEL,
messages: [
{
role: 'user',
content: [
{
type: 'text',
text: 'What are the main points in this document?',
},
{
type: 'file',
file: {
filename: 'what-is-liara.pdf',
file_data: base64PDF,
},
},
],
},
],
}),
});

const initialData = await initialResponse.json();

// Store the annotations from the response
let fileAnnotations = null;
if (initialData.choices && initialData.choices.length > 0) {
if (initialData.choices[0].message.annotations) {
fileAnnotations = initialData.choices[0].message.annotations;
}
}
// Follow-up request using the annotations (without sending the PDF again)
if (fileAnnotations) {
const followUpResponse = await fetch(
'https://openrouter.ai/api/v1/chat/completions',
{
method: 'POST',
headers: {
Authorization: \`Bearer \${API_KEY}\`,
'Content-Type': 'application/json',
},
body: JSON.stringify({
model: 'google/gemma-3-27b-it',
messages: [
{
role: 'user',
content: [
{
type: 'text',
text: 'What are the main points in this document?',
},
{
type: 'file',
file: {
filename: 'document.pdf',
file_data: base64PDF,
},
},
],
},
{
role: 'assistant',
content: 'The document contains information about...',
annotations: fileAnnotations,
},
{
role: 'user',
content: 'Can you elaborate on the second point?',
},
],
}),
},
);
const followUpData = await followUpResponse.json();
console.log(followUpData);
}
}

processDocument();
`,
},
]

## انواع پرامپت‌ها با نقش دستیار (assistant) در AI SDK

پیام‌های Assistant معمولاً پاسخ‌های قبلی دستیار به کاربر هستند و می‌توانند شامل متن، استدلال یا بخش‌هایی مربوط به فراخوانی ابزار (tool call) باشند.
در ادامه، تمامی پرامپت‌هایی که یک مدل با نقش `assistant` می‌تواند دریافت کند، توضیح داده شده است.

## انواع پرامپت‌ها با نقش دستیار (assistant) در AI SDK

پیام‌های Assistant معمولاً پاسخ‌های قبلی دستیار به کاربر هستند و می‌توانند شامل متن، استدلال یا بخش‌هایی مربوط به فراخوانی ابزار (tool call) باشند.
در ادامه، تمامی پرامپت‌هایی که یک مدل با نقش `assistant` می‌تواند دریافت کند، توضیح داده شده است.

## ۱. پرامپت متنی

نحوه تعریف پرامپت متنی با نقش `assistant`، مشابه با پرامپت متنی با نقش `user` است که در بخش [پرامپت‌های پیام‌محور](https://docs.liara.ir/ai/foundations/prompts/#message-prompt) توضیح داده شده است.
مثال زیر، یک پرامپت متنی با نقش `assistant` با استفاده از AI SDK را، نشان می‌دهد:  

## JavaScript

```javascript
// npm i @ai-sdk/openai-compatible

import { createOpenAICompatible } from '@ai-sdk/openai-compatible';
import { generateText } from 'ai';
import { config } from 'dotenv';

import 'dotenv/config';

config();

const { text } = await generateText({
model: createOpenAICompatible({
baseURL: process.env.MY_BASE_URL,
name: 'example',
apiKey: process.env.MY_API_KEY,
}).chatModel("openai/gpt-4o-mini"),

messages: [
{ role: 'user', content: 'Hi!' },
{ role: 'assistant', content: 'Hello, how can I help?' },
],
});

console.log('Generated Text:', text);
```

## TypeScript

```typescript
import { createOpenAICompatible } from '@ai-sdk/openai-compatible';
import { generateText } from 'ai';
import { config } from 'dotenv';
config();

async function main() {
const model = createOpenAICompatible({
baseURL: process.env.MY_BASE_URL as string,
name: 'example',
apiKey: process.env.MY_API_KEY as string,
}).chatModel("openai/gpt-4.1");

const { text } = await generateText({
model,

messages: [
{ role: 'user', content: 'Hi!' },
{ role: 'assistant', content: 'Hello, how can I help?' },
],

});

console.log('Generated Text:', text);
}

main().catch(console.error);
```

## ۲. پرامپت متنی به‌صورت آرایه‌ای از پیام‌ها

شما می‌توانید به جای یک پیام با نقش `assistant`، آرایه‌ای از پیام‌ها را به مدل، ارسال کنید:  

## JavaScript

```javascript
// npm i @ai-sdk/openai-compatible

import { createOpenAICompatible } from '@ai-sdk/openai-compatible';
import { generateText } from 'ai';
import { config } from 'dotenv';

import 'dotenv/config';

config();


const { text } = await generateText({
model: createOpenAICompatible({
baseURL: process.env.MY_BASE_URL,
name: 'example',
apiKey: process.env.MY_API_KEY,
}).chatModel("openai/gpt-4o-mini"),

messages: [
{ role: 'user', content: 'Hi!' },
{
role: 'assistant',
content: [
{ type: 'text', text: 'Hello, how can I help?' },
{ type: 'text', text: 'Hi, Good Morning' },
],
},
],
});

console.log('Generated Text:', text);
```

## TypeScript

```typescript
import { createOpenAICompatible } from '@ai-sdk/openai-compatible';
import { generateText } from 'ai';
import { config } from 'dotenv';
config();

async function main() {
const model = createOpenAICompatible({
baseURL: process.env.MY_BASE_URL as string,
name: 'example',
apiKey: process.env.MY_API_KEY as string,
}).chatModel("openai/gpt-4.1");

const { text } = await generateText({
model,

messages: [
{ role: 'user', content: 'Hi!' },
{
role: 'assistant',
content: [
{ type: 'text', text: 'Hello, how can I help?' },
{ type: 'text', text: 'Hi, Good Morning' },
],
},
],

});

console.log('Generated Text:', text);
}

main().catch(console.error);
```

## مهندسی پرامپت (Prompt Engineering)

مهندسی پرامپت فرآیند نوشتن پرامپت‌های مؤثر برای یک مدل است؛ به گونه‌ای که مدل به‌طور پیوسته محتوایی تولید کند که با نیازهای شما مطابقت داشته باشد.
از آنجا که محتوای تولیدشده توسط مدل‌ها غیر قطعی (non-deterministic) است، طراحی یک پرامپت که خروجی را در قالب و فرم مطلوب تولید کند، ترکیبی از هنر و علم محسوب می‌شود. با این حال، تکنیک‌ها و روش‌های اثبات‌شده‌ای وجود دارند که می‌توان از آن‌ها برای دستیابی مداوم به نتایج مطلوب استفاده کرد.

برخی تکنیک‌های مهندسی پرامپت برای همه‌ی مدل‌ها قابل استفاده‌اند، مانند استفاده از نقش‌ها (roleها). اما هر نوع مدل، برای بهینه‌سازی نتایج، نیاز به پرامپت نویسی متفاوتی دارد. حتی نسخه‌های مختلف از یک مدل (مانند `openai/gpt-4o-mini` و `openai/gpt-4.1`) ممکن است خروجی‌های متفاوتی تولید کنند.

بنابراین، اگر در حال ساخت برنامه‌های پیچیده هستید، اکیداً توصیه می‌شود که اقدامات زیر را انجام دهید:

## استفاده از یک مدل مشخص

در برنامه‌های خود، فقط از یک مدل مشخص استفاده کنید تا رفتار مدل همواره ثابت باقی بماند.

## ساخت ابزارهای ارزیابی (evals)

معیارهایی طراحی و اجرا کنید که رفتار پرامپت‌های شما را ارزیابی کند، تا بتوانید عملکرد آن‌ها را در طول زمان رصد کرده و هنگام تغییر یا ارتقای نسخه‌ی مدل، دید بهتری در انتخاب مدل، داشته باشید.

## تعیین محدودیت در استفاده از Toolها

زمانی که پرامپت‌هایی طراحی می‌کنید که از Toolها استفاده می‌کنند، دستیابی به نتایج مطلوب می‌تواند با افزایش تعداد و پیچیدگی Toolها دشوارتر شود.
در ادامه، چند نکته برای بهبود عملکرد مدل هنگام استفاده از Toolها ارائه شده است:

- از مدلی استفاده کنید که توانایی بالایی در Tool Calling (فراخوانی یک Tool) دارد، مانند `openai/gpt-4.1`.
مدل‌های ضعیف‌تر اغلب در این زمینه دچار مشکل می‌شوند.
- تعداد Toolها را پایین نگه دارید؛ به‌طور کلی، بهتر است از پنج  Tool یا کمتر استفاده کنید.
- پارامترهای Tool را ساده نگه دارید و از المان‌های تو در تو، استفاده نکنید.
- نام‌های با معنا برای ابزارها، پارامترها و ویژگی‌های پارامتر انتخاب کنید.
- نمونه‌هایی از ورودی/خروجی ابزارها را در پرامپت بگنجانید تا مدل درک بهتری از نحوه‌ی استفاده داشته باشد.

## all links

[All links of docs](https://docs.liara.ir/all-links-llms.txt)
