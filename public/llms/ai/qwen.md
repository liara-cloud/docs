Original link: https://docs.liara.ir/ai/qwen/

# شروع به کار با هوش مصنوعی Qwen

[Qwen](https://chat.qwen.ai) (مخفف Qianwen یا 千问 به معنای هزار پرسش، در زبان چینی) خانواده‌ای از LLMها است که توسط شرکت Alibaba Cloud توسعه داده شده و به‌عنوان یکی از قدرتمندترین مدل‌های متن‌باز در حوزه پردازش زبان طبیعی شناخته می‌شود. این مدل‌ها با معماری Transformer طراحی شده‌اند و در نسخه‌های متنوعی ارائه شده‌اند تا نیازهای مختلف، از پژوهش‌های دانشگاهی گرفته تا کاربردهای صنعتی را پوشش دهند. Qwen توانایی چشمگیری در درک زبان، تولید متن، پاسخ به پرسش‌ها، استدلال چندمرحله‌ای، و حتی برنامه‌نویسی دارد و از چندزبانگی (به‌ویژه انگلیسی و چینی) پشتیبانی می‌کند. انتشار متن‌باز این مدل باعث شده پژوهشگران و توسعه‌دهندگان بتوانند آن را برای آموزش مجدد (fine-tuning)، استفاده در برنامه‌های کاربردی، یا یکپارچه‌سازی در سامانه‌های هوش مصنوعی به‌کار گیرند. به‌طور کلی، Qwen را می‌توان نمادی از تلاش‌های اخیر در جهت ترکیب مقیاس بالا، متن‌باز بودن، و کاربردپذیری گسترده در حوزه هوش مصنوعی دانست.

در حال حاضر، لیارا، مدل‌های زیر از Qwen را در API خود پشتیبانی می‌کند:

- مدل `{item}`

پس از [ایجاد سرویس هوش مصنوعی](https://docs.liara.ir/ai/quick-start) و دریافت `baseUrl` و [ساخت کلید](https://docs.liara.ir/ai/details/keys/#create)، می‌توانید از مدل‌های Qwen استفاده کنید.

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

در قطعه کد‌های فوق، به‌جای `<baseUrl>`، آدرس سرویس هوش مصنوعی خود را قرار دهید و به‌جای `<LIARA_API_TOKEN>`، کلید API خود را وارد کنید. همچنین، به‌جای `<model_name>`، نام یکی از مدل‌های فوق را قرار دهید.

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

## اتصال به مدل های تبدیل متن به گفتار (TTS)

برای کار با مدل‌های TTS می‌توانید از ماژول `openai` استفاده کنید. در ادامه، مثال‌های استفاده از مدل‌های TTS آمده است: 

### JavaScript

```js
// npm install openai dotenv
require("dotenv").config();

const fs = require("fs");
const OpenAI = require("openai");

const client = new OpenAI({
  apiKey: process.env.LIARA_API_KEY,
  baseURL: process.env.BASE_URL,
});

async function main() {
  const response = await client.audio.speech.create({
    model: process.env.TTS_MODEL_NAME,
    voice: process.env.TTS_VOICE,
    input: "Hello! This audio was generated using Qwen through Liara.",
    response_format: "mp3",
  });

  const buffer = Buffer.from(await response.arrayBuffer());

  fs.writeFileSync("speech.mp3", buffer);

  console.log("Audio saved to speech.mp3");
}

main().catch(console.error);
```

> پروژه کامل قطعه کد فوق در [گیت‌هاب لیارا](https://github.com/liara-cloud/ai-tts-examples/tree/nodejs) قابل مشاهده و استفاده است.

### PHP

```php
<?php
// composer require openai-php/client vlucas/phpdotenv guzzlehttp/guzzle

require __DIR__ . '/vendor/autoload.php';

$dotenv = Dotenv\Dotenv::createImmutable(__DIR__);
$dotenv->load();

$client = OpenAI::factory()
    ->withApiKey($_ENV["LIARA_API_KEY"])
    ->withBaseUri($_ENV["BASE_URL"])
    ->make();

$audio = $client->audio()->speech([
    "model" => $_ENV["TTS_MODEL_NAME"],
    "voice" => $_ENV["TTS_VOICE"],
    "input" => "Hello! This audio was generated using Qwen through Liara on PHP!!! Ohhhh Yeahhhhh!",
    "response_format" => "mp3",
]);

file_put_contents(
    __DIR__ . "/speech.mp3",
    $audio
);

echo "Audio saved to speech.mp3";
```

> پروژه کامل قطعه کد فوق در [گیت‌هاب لیارا](https://github.com/liara-cloud/ai-tts-examples/tree/php) قابل مشاهده و استفاده است.

### Python

```py
# pip install openai python-dotenv
import os
from pathlib import Path

from dotenv import load_dotenv
from openai import OpenAI

load_dotenv()

client = OpenAI(
    api_key=os.getenv("LIARA_API_KEY"),
    base_url=os.getenv("BASE_URL"),
)

speech_file = Path("speech.mp3")

with client.audio.speech.with_streaming_response.create(
    model=os.getenv("TTS_MODEL_NAME"),
    voice=os.getenv("TTS_VOICE"),
    input="Hello! This audio was generated using Qwen through Liara on Python! it's awesome, right?",
    response_format="mp3",
) as response:
    response.stream_to_file(speech_file)

print("Audio saved to speech.mp3")
```

> پروژه کامل قطعه کد فوق در [گیت‌هاب لیارا](https://github.com/liara-cloud/ai-tts-examples/tree/python) قابل مشاهده و استفاده است.

### .NET

```cs
// dotnet add package OpenAI && dotnet add package DotNetEnv
using System.ClientModel;
using DotNetEnv;
using OpenAI;
using OpenAI.Audio;

Env.Load();

var baseUrl = Environment.GetEnvironmentVariable("BASE_URL")
    ?? throw new Exception("BASE_URL is not defined.");

var apiKey = Environment.GetEnvironmentVariable("LIARA_API_KEY")
    ?? throw new Exception("LIARA_API_KEY is not defined.");

var modelName = Environment.GetEnvironmentVariable("TTS_MODEL_NAME")
    ?? throw new Exception("TTS_MODEL_NAME is not defined.");

var voiceName = Environment.GetEnvironmentVariable("TTS_VOICE")
    ?? throw new Exception("TTS_VOICE is not defined.");

var client = new OpenAIClient(
    credential: new ApiKeyCredential(apiKey),
    options: new OpenAIClientOptions
    {
        Endpoint = new Uri(baseUrl)
    }
);

AudioClient audioClient = client.GetAudioClient(modelName);

GeneratedSpeechVoice voice = new(voiceName);

BinaryData speech = await audioClient.GenerateSpeechAsync(
    "Hello! This audio was generated using Qwen through Liara. On DOTNET!!! This is Crazy!!!!",
    voice,
    new SpeechGenerationOptions
    {
        ResponseFormat = GeneratedSpeechFormat.Mp3
    }
);

await File.WriteAllBytesAsync(
    "speech.mp3",
    speech.ToArray()
);

Console.WriteLine("Audio saved to speech.mp3");
```

> پروژه کامل قطعه کد فوق در [گیت‌هاب لیارا](https://github.com/liara-cloud/ai-tts-examples/tree/dotnet) قابل مشاهده و استفاده است.

### Go

```bash
// go get github.com/openai/openai-go/v3 github.com/joho/godotenv
package main

import (
	"context"
	"fmt"
	"io"
	"os"

	"github.com/joho/godotenv"
	"github.com/openai/openai-go/v3"
	"github.com/openai/openai-go/v3/option"
)

func main() {
	err := godotenv.Load()
	if err != nil {
		panic("Error loading .env file")
	}

	baseURL := os.Getenv("BASE_URL")
	apiKey := os.Getenv("LIARA_API_KEY")
	modelName := os.Getenv("TTS_MODEL_NAME")
	voiceName := os.Getenv("TTS_VOICE")

	client := openai.NewClient(
		option.WithAPIKey(apiKey),
		option.WithBaseURL(baseURL),
	)

	response, err := client.Audio.Speech.New(
		context.Background(),
		openai.AudioSpeechNewParams{
			Model: modelName,

			Voice: openai.AudioSpeechNewParamsVoiceUnion{
				OfString: openai.String(voiceName),
			},

			Input: "Hello! This audio was generated using Qwen through Liara. On Go!!!! Hellll Yeahhhh",

			ResponseFormat: openai.AudioSpeechNewParamsResponseFormatMP3,
		},
	)

	if err != nil {
		panic(err)
	}

	defer response.Body.Close()

	file, err := os.Create("speech.mp3")
	if err != nil {
		panic(err)
	}

	defer file.Close()

	_, err = io.Copy(file, response.Body)
	if err != nil {
		panic(err)
	}

	fmt.Println("Audio saved to speech.mp3")
}
```

> پروژه کامل قطعه کد فوق در [گیت‌هاب لیارا](https://github.com/liara-cloud/ai-tts-examples/tree/go) قابل مشاهده و استفاده است.

در قطعه کدهای فوق، به‌جای `BASE_URL`، آدرس سرویس هوش مصنوعی خود را قرار دهید و به‌جای `LIARA_API_KEY`، کلید API خود را وارد کنید. همچنین، به‌جای `TTS_MODEL_NAME`، نام یکی از مدل‌های TTS و به‌جای `TTS_VOICE`، نام Voice موردنظر را قرار دهید.

## مقادیر قابل استفاده به عنوان متغیر TTS_VOICE

`TTS_VOICE` یک پارامتر در مدل‌های TTS است که مشخص می‌کند مدل هوش مصنوعی با چه صدای از پیش تعریف‌شده‌ای متن را به گفتار تبدیل کند. هر Voice یک پروفایل صوتی مستقل است که ویژگی‌هایی مثل جنسیت صدا، لحن (Tone)، سرعت، حس بیان (Emotion)، لهجه و سبک صحبت کردن را تعیین می‌کند.

در حال حاضر، می‌توانید مقدار متغیر `TTS_VOICE`  را برای مدل‌های مذکور، با مقادیر زیر پر کنید (بعد از `#` ‌یک‌سری توضیحات راجع به هر Voice قرار گرفته است).

```bash
# Qwen Audio 3.0 TTS Plus

TTS_VOICE=longanlingxin # Female - Warm and empathetic - Age 25 - Mandarin / English
TTS_VOICE=longanlufeng  # Male - Bright and cheerful - Age 25 - Mandarin / English

# Qwen Audio 3.0 TTS Flash

TTS_VOICE=longanfengyue # Female - Natural and friendly - Age 30 - Mandarin / English
TTS_VOICE=longanyuanfei # Female - Proud and regal - Age 30 - Mandarin / English
TTS_VOICE=longanlingxi  # Female - Cute and sweet - Age 25 - Mandarin / English
TTS_VOICE=loongmary     # Female - Warm British accent - Age 20 - English
TTS_VOICE=loongeva_v3.6 # Female - Intelligent-sounding American accent - Age 28 - English
TTS_VOICE=loongjohn     # Male - Calm and friendly American accent - Age 28 - English
```

## اتصال به مدل های تبدیل گفتار به متن (STT)

برای کار با مدل‌های TTS می‌توانید از ماژول `openai` استفاده کنید. در ادامه، مثال‌های استفاده از مدل‌های TTS آمده است: 

### JavaScript

```js
// npm install openai dotenv

require("dotenv").config();

const fs = require("fs");
const path = require("path");
const OpenAI = require("openai");
const { toFile } = require("openai");

const client = new OpenAI({
  apiKey: process.env.LIARA_API_KEY,
  baseURL: process.env.BASE_URL,
});

async function main() {
  const audioPath = path.resolve(process.env.AUDIO_FILE);

  if (!fs.existsSync(audioPath)) {
    throw new Error(`Audio file not found: ${audioPath}`);
  }

  const extension = path.extname(audioPath).toLowerCase();

  const mimeTypes = {
    ".mp3": "audio/mpeg",
    ".wav": "audio/wav",
    ".flac": "audio/flac",
    ".m4a": "audio/mp4",
    ".ogg": "audio/ogg",
    ".webm": "audio/webm",
    ".aac": "audio/aac",
  };

  const mimeType = mimeTypes[extension];

  if (!mimeType) {
    throw new Error(`Unsupported audio format: ${extension}`);
  }

  const audioBuffer = fs.readFileSync(audioPath);

  const audioFile = await toFile(
    audioBuffer,
    path.basename(audioPath),
    {
      type: mimeType,
    }
  );

  const transcription = await client.audio.transcriptions.create({
    model: process.env.STT_MODEL_NAME,
    file: audioFile,
  });

  console.log(transcription.text);
}

main().catch(console.error);
```

> پروژه کامل قطعه کد فوق در [گیت‌هاب لیارا](https://github.com/liara-cloud/ai-stt-examples/tree/nodejs) قابل مشاهده و استفاده است.

### PHP

```php
<?php
// composer require openai-php/client vlucas/phpdotenv guzzlehttp/guzzle
require __DIR__ . '/vendor/autoload.php';

$dotenv = Dotenv\Dotenv::createImmutable(__DIR__);
$dotenv->load();

$client = OpenAI::factory()
    ->withApiKey($_ENV["LIARA_API_KEY"])
    ->withBaseUri($_ENV["BASE_URL"])
    ->make();

$audioPath = __DIR__ . "/" . $_ENV["AUDIO_FILE"];

if (!file_exists($audioPath)) {
    throw new Exception("Audio file not found: " . $audioPath);
}

$audioFile = fopen($audioPath, "r");

if ($audioFile === false) {
    throw new Exception("Unable to open audio file.");
}

$response = $client->audio()->transcribe([
    "model" => $_ENV["STT_MODEL_NAME"],
    "file" => $audioFile,
]);

echo $response->text;
```

> پروژه کامل قطعه کد فوق در [گیت‌هاب لیارا](https://github.com/liara-cloud/ai-stt-examples/tree/php) قابل مشاهده و استفاده است.

### Python

```py
# pip install openai python-dotenv

import os

from dotenv import load_dotenv
from openai import OpenAI

load_dotenv()

client = OpenAI(
    api_key=os.getenv("LIARA_API_KEY"),
    base_url=os.getenv("BASE_URL"),
)

with open(os.getenv("AUDIO_FILE"), "rb") as audio_file:
    transcription = client.audio.transcriptions.create(
        model=os.getenv("STT_MODEL_NAME"),
        file=audio_file,
    )

print(transcription.text)
```

> پروژه کامل قطعه کد فوق در [گیت‌هاب لیارا](https://github.com/liara-cloud/ai-stt-examples/tree/python) قابل مشاهده و استفاده است.

### .NET

```cs
// dotnet add package DotNetEnv
using System.Net.Http.Headers;
using System.Text.Json;
using DotNetEnv;

Env.Load();

var baseUrl = Environment.GetEnvironmentVariable("BASE_URL")
    ?? throw new Exception("BASE_URL is not defined.");

var apiKey = Environment.GetEnvironmentVariable("LIARA_API_KEY")
    ?? throw new Exception("LIARA_API_KEY is not defined.");

var modelName = Environment.GetEnvironmentVariable("STT_MODEL_NAME")
    ?? throw new Exception("STT_MODEL_NAME is not defined.");

var audioFile = Environment.GetEnvironmentVariable("AUDIO_FILE")
    ?? throw new Exception("AUDIO_FILE is not defined.");

var audioPath = Path.GetFullPath(audioFile);

if (!File.Exists(audioPath))
{
    throw new FileNotFoundException(
        $"Audio file not found: {audioPath}"
    );
}

var extension = Path.GetExtension(audioPath).ToLowerInvariant();
var fileName = Path.GetFileName(audioPath);

var mimeType = extension switch
{
    ".mp3" => "audio/mpeg",
    ".wav" => "audio/wav",
    ".flac" => "audio/flac",
    ".m4a" => "audio/mp4",
    ".ogg" => "audio/ogg",
    ".webm" => "audio/webm",
    ".aac" => "audio/aac",
    _ => throw new Exception(
        $"Unsupported audio format: {extension}"
    )
};

Console.WriteLine($"File: {fileName}");
Console.WriteLine($"Format: {extension}");
Console.WriteLine($"MIME type: {mimeType}");
Console.WriteLine($"Size: {new FileInfo(audioPath).Length} bytes");

using var client = new HttpClient();

client.DefaultRequestHeaders.Authorization =
    new AuthenticationHeaderValue(
        "Bearer",
        apiKey
    );

using var form = new MultipartFormDataContent();

form.Add(
    new StringContent(modelName),
    "model"
);

await using var audioStream = File.OpenRead(audioPath);

using var fileContent = new StreamContent(audioStream);

fileContent.Headers.ContentType =
    new MediaTypeHeaderValue(mimeType);

form.Add(
    fileContent,
    "file",
    fileName
);

var url =
    $"{baseUrl.TrimEnd('/')}/audio/transcriptions";

var response = await client.PostAsync(
    url,
    form
);

var result = await response.Content.ReadAsStringAsync();

if (!response.IsSuccessStatusCode)
{
    Console.WriteLine($"HTTP {(int)response.StatusCode}");
    Console.WriteLine(result);

    return;
}

using var json = JsonDocument.Parse(result);

if (json.RootElement.TryGetProperty(
    "text",
    out var text
))
{
    Console.WriteLine(text.GetString());
}
else
{
    Console.WriteLine(result);
}
```

> پروژه کامل قطعه کد فوق در [گیت‌هاب لیارا](https://github.com/liara-cloud/ai-stt-examples/tree/dotnet) قابل مشاهده و استفاده است.

### Go

```bash
// go get github.com/openai/openai-go/v3 github.com/joho/godotenv

package main

import (
	"context"
	"fmt"
	"os"
	"path/filepath"
	"strings"

	"github.com/joho/godotenv"
	"github.com/openai/openai-go/v3"
	"github.com/openai/openai-go/v3/option"
)

func main() {
	err := godotenv.Load()
	if err != nil {
		panic("Error loading .env file")
	}

	baseURL := os.Getenv("BASE_URL")
	apiKey := os.Getenv("LIARA_API_KEY")
	modelName := os.Getenv("STT_MODEL_NAME")
	audioFilePath := os.Getenv("AUDIO_FILE")

	audioFile, err := os.Open(audioFilePath)
	if err != nil {
		panic(err)
	}
	defer audioFile.Close()

	fileName := filepath.Base(audioFilePath)
	extension := strings.ToLower(filepath.Ext(fileName))

	var mimeType string

	switch extension {
	case ".mp3":
		mimeType = "audio/mpeg"
	case ".wav":
		mimeType = "audio/wav"
	case ".flac":
		mimeType = "audio/flac"
	case ".m4a":
		mimeType = "audio/mp4"
	case ".ogg":
		mimeType = "audio/ogg"
	case ".webm":
		mimeType = "audio/webm"
	case ".aac":
		mimeType = "audio/aac"
	default:
		panic("Unsupported audio format: " + extension)
	}

	fmt.Println("File:", fileName)
	fmt.Println("MIME type:", mimeType)

	client := openai.NewClient(
		option.WithAPIKey(apiKey),
		option.WithBaseURL(baseURL),
	)

	file := openai.File(
		audioFile,
		fileName,
		mimeType,
	)

	transcription, err := client.Audio.Transcriptions.New(
		context.Background(),
		openai.AudioTranscriptionNewParams{
			Model: openai.AudioModel(modelName),
			File:  file,
		},
	)

	if err != nil {
		panic(err)
	}

	fmt.Println(transcription.Text)
}
```

> پروژه کامل قطعه کد فوق در [گیت‌هاب لیارا](https://github.com/liara-cloud/ai-stt-examples/tree/go) قابل مشاهده و استفاده است.

در قطعه کدهای فوق، به‌جای `BASE_URL`، آدرس سرویس هوش مصنوعی خود را قرار دهید و به‌جای `LIARA_API_KEY`، کلید API خود را وارد کنید. همچنین، به‌جای `STT_MODEL_NAME`، نام مدل STT و به‌جای `AUDIO_FILE`، نام یا مسیر فایل صوتی موردنظر برای تبدیل گفتار به متن را قرار دهید.

## اتصال به مدل‌های rerank

برای کار با مدل‌های rerank می‌توانید از درخواست‌های `HTTP` استفاده کنید. در ادامه، مثال‌های استفاده از rerank آمده است: 

### JavaScript

```js
// npm install dotenv
require("dotenv").config();

async function main() {
  try {
    const response = await fetch(`${process.env.BASE_URL}/rerank`, {
      method: "POST",

      headers: {
        Authorization: `Bearer ${process.env.LIARA_API_KEY}`,
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        model: process.env.RERANK_MODEL_NAME,

        query: "And who is God?",

        documents: [
          "God means love, purity, intimacy, friendship",
          "God is kind",
          "God loves us and we should love him too",
          "AI means Artificial Intelligence",
        ],

        top_n: 3,
      }),
    });

    if (!response.ok) {
      const error = await response.text();
      throw new Error(`Request failed: ${response.status} - ${error}`);
    }

    const data = await response.json();

    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

main();
```

> پروژه کامل قطعه کد فوق در [گیت‌هاب لیارا](https://github.com/liara-cloud/ai-rerank-examples/tree/nodejs) قابل مشاهده و استفاده است.

### PHP

```php
<?php

// composer require vlucas/phpdotenv
require __DIR__ . '/vendor/autoload.php';

$dotenv = Dotenv\Dotenv::createImmutable(__DIR__);
$dotenv->load();

$url = $_ENV["BASE_URL"] . "/rerank";

$payload = [
    "model" => $_ENV["RERANK_MODEL_NAME"],

    "query" => "And who is God?",

    "documents" => [
        "God means love, purity, intimacy, friendship",
        "God is kind",
        "God loves us and we should love him too",
        "AI means Artificial Intelligence",
    ],

    "top_n" => 3,
];

$ch = curl_init($url);

curl_setopt_array($ch, [
    CURLOPT_POST => true,
    CURLOPT_RETURNTRANSFER => true,

    CURLOPT_HTTPHEADER => [
        "Authorization: Bearer " . $_ENV["LIARA_API_KEY"],
        "Content-Type: application/json",
    ],

    CURLOPT_POSTFIELDS => json_encode(
        $payload,
        JSON_UNESCAPED_UNICODE
    ),
]);

$response = curl_exec($ch);

if ($response === false) {
    echo "cURL Error: " . curl_error($ch);
} else {
    echo $response;
}

curl_close($ch);
```

> پروژه کامل قطعه کد فوق در [گیت‌هاب لیارا](https://github.com/liara-cloud/ai-rerank-examples/tree/php) قابل مشاهده و استفاده است.

### Python

```py
import os
import requests
from dotenv import load_dotenv

load_dotenv()

url = f"{os.getenv('BASE_URL')}/rerank"

headers = {
    "Authorization": f"Bearer {os.getenv('LIARA_API_KEY')}",
    "Content-Type": "application/json",
}

payload = {
    "model": os.getenv("RERANK_MODEL_NAME"),

    "query": "And who is God?",

    "documents": [
        "God means love, purity, intimacy, friendship",
        "God is kind",
        "God loves us and we should love him too",
        "AI means Artificial Intelligence",
    ],

    "top_n": 3,
}

response = requests.post(
    url,
    json=payload,
    headers=headers,
)

print(response.json())
```

> پروژه کامل قطعه کد فوق در [گیت‌هاب لیارا](https://github.com/liara-cloud/ai-rerank-examples/tree/python) قابل مشاهده و استفاده است.

### .NET

در ابتدا، برای استفاده از مدل هوش مصنوعی مدنظر خود در dotNET (CSharp)، باید پکیج مورد نیاز را با اجرای دستور زیر، نصب کنید:

```cs
using System.Net.Http.Headers;
using System.Text;
using System.Text.Json;
using DotNetEnv;

Env.Load();

var baseUrl = Environment.GetEnvironmentVariable("BASE_URL");
var apiKey = Environment.GetEnvironmentVariable("LIARA_API_KEY");
var modelName = Environment.GetEnvironmentVariable("RERANK_MODEL_NAME");

var url = $"{baseUrl}/rerank";

var payload = new
{
    model = modelName,

    query = "And who is God?",

    documents = new[]
    {
        "God means love, purity, intimacy, friendship",
        "God is kind",
        "God loves us and we should love him too",
        "AI means Artificial Intelligence"
    },

    top_n = 3
};

using var client = new HttpClient();

client.DefaultRequestHeaders.Authorization =
    new AuthenticationHeaderValue("Bearer", apiKey);

var json = JsonSerializer.Serialize(payload);

var content = new StringContent(
    json,
    Encoding.UTF8,
    "application/json"
);

var response = await client.PostAsync(url, content);

var result = await response.Content.ReadAsStringAsync();

Console.WriteLine(result);
```

> پروژه کامل قطعه کد فوق در [گیت‌هاب لیارا](https://github.com/liara-cloud/ai-rerank-examples/tree/dotnet) قابل مشاهده و استفاده است.

### Go

```bash
package main

import (
	"bytes"
	"encoding/json"
	"fmt"
	"io"
	"net/http"
	"os"

	"github.com/joho/godotenv"
)

func main() {
	err := godotenv.Load()
	if err != nil {
		panic("Error loading .env file")
	}

	baseURL := os.Getenv("BASE_URL")
	apiKey := os.Getenv("LIARA_API_KEY")
	modelName := os.Getenv("RERANK_MODEL_NAME")

	url := baseURL + "/rerank"

	payload := map[string]any{
		"model": modelName,

		"query": "And who is God?",

		"documents": []string{
			"God means love, purity, intimacy, friendship",
			"God is kind",
			"God loves us and we should love him too",
			"AI means Artificial Intelligence",
		},

		"top_n": 3,
	}

	body, err := json.Marshal(payload)
	if err != nil {
		panic(err)
	}

	req, err := http.NewRequest(
		http.MethodPost,
		url,
		bytes.NewReader(body),
	)
	if err != nil {
		panic(err)
	}

	req.Header.Set(
		"Authorization",
		"Bearer "+apiKey,
	)

	req.Header.Set(
		"Content-Type",
		"application/json",
	)

	res, err := http.DefaultClient.Do(req)
	if err != nil {
		panic(err)
	}
	defer res.Body.Close()

	data, err := io.ReadAll(res.Body)
	if err != nil {
		panic(err)
	}

	fmt.Println(string(data))
}
```

> پروژه کامل قطعه کد فوق در [گیت‌هاب لیارا](https://github.com/liara-cloud/ai-rerank-examples/tree/go) قابل مشاهده و استفاده است.

### cURL

```bash
curl -X POST "${BASE_URL}/rerank" \\
  -H "Authorization: Bearer ${LIARA_API_KEY}" \\
  -H "Content-Type: application/json" \\
  -d "{
    \"model\": \"${RERANK_MODEL_NAME}\",
    \"query\": \"And who is God?\",
    \"documents\": [
      \"God means love, purity, intimacy, friendship\",
      \"God is kind\",
      \"God loves us and we should love him too\",
      \"AI means Artificial Intelligence\"
    ],
    \"top_n\": 3
  }"
```

در قطعه کد‌های فوق، به‌جای `BASE_URL`، آدرس سرویس هوش مصنوعی خود را قرار دهید و به‌جای `LIARA_API_KEY`، کلید API خود را وارد کنید. همچنین، به‌جای `RERANK_MODEL_NAME`، نام یکی از مدل‌های rerank را قرار دهید.

## all links

[All links of docs](https://docs.liara.ir/all-links-llms.txt)
