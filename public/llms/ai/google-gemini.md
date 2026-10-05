Original link: https://docs.liara.ir/ai/google-gemini/

# شروع به کار با هوش مصنوعی Google/Gemini

[Google Gemini](https://gemini.google.com) نسل جدید مدل‌های هوش مصنوعی گوگل است که توسط شرکت DeepMind توسعه یافته و جایگزین مدل‌های قبلی مانند Bard شده است. این مدل با تمرکز بر چندوجهی بودن طراحی شده، به این معنا که می‌تواند به‌صورت هم‌زمان با متن، تصویر، صدا و حتی ویدیو تعامل داشته باشد. Gemini با ادغام قابلیت‌های جستجوی گوگل و فناوری‌های پیشرفته یادگیری عمیق، سعی دارد تجربه‌ای دقیق‌تر، هوشمندتر و منعطف‌تر از هوش مصنوعی را برای کاربران فراهم کند.

در حال حاضر، لیارا، مدل‌های زیر از Google/Gemini را در API خود پشتیبانی می‌کند:

- مدل `{item}`
  
پس از [ایجاد سرویس هوش مصنوعی](https://docs.liara.ir/ai/quick-start) و دریافت `baseUrl` و [ساخت کلید](https://docs.liara.ir/ai/details/keys/#create)، می‌توانید از مدل‌های Gemini استفاده کنید.

> در قطعه کدهای ارائه‌شده توسط لیارا برای اتصال به مدل، از OpenAI SDK استفاده می‌شود. تمامی مدل‌هایی که لیارا ارائه می‌دهد؛ سازگار با OpenAI SDK هستند.  
> همچنین بخوانید: [مستندات کار با Embedding Modelها](https://docs.liara.ir/ai/ai-sdk-core/embeddings)  
> همچنین بخوانید: [مستندات تولید تصویر با هوش مصنوعی](https://docs.liara.ir/ai/foundations/image-generation/)

## اتصال به مدل

برای اتصال به مدل در سطح کد، می‌توانید از دو ابزار استفاده کنید:

- `OpenAI SDK`: ابزار رسمی ارائه‌شده توسط [OpenAI](https://openai.com/). تمامی مدل‌های ارائه‌شده در لیارا، با این SDK سازگار هستند.  
- `AI SDK`: ابزار ارائه‌شده توسط [Vercel](https://ai-sdk.dev/). این SDK، تنها برای جاوااسکریپت و تایپ‌اسکریپت در دسترس است.

در ادامه، نحوه اتصال به مدل، هم با `OpenAI SDK` و هم با `AI SDK`، بررسی شده است.

## OpenAI SDK

برای اتصال به مدل با OpenAI SDK، می‌توانید از قطعه کدهای زیر، استفاده کنید.

### JavaScript

```bash
npm install openai # or yarn add openai
```

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

```bash
composer require openai-php/client guzzlehttp/guzzle
```

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

```bash
pip install openai
```

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

### .NET

```bash
dotnet add package OpenAI
```

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

```bash
go get package github.com/openai/openai-go
go get package github.com/openai/openai-go/option
```

```go
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
npm i ai@^4 @ai-sdk/openai-compatible
```

در ادامه، می‌توانید مانند قطعه کد زیر، به مدل متصل شوید:

```bash
// npm i @ai-sdk/openai-compatible
import { createOpenAICompatible } from '@ai-sdk/openai-compatible';
import { generateText } from 'ai';

const { text } = await generateText({
  model: createOpenAICompatible({
    baseURL: "<baseUrl>",
    name: 'example',
    apiKey: "<LIARA_API_TOKEN>",
  }).chatModel("<model_name>"),
  
  
  prompt: 'hey.',

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

در قطعه کد‌ فوق، به‌جای `<baseUrl>،` آدرس سرویس هوش مصنوعی خود را قرار دهید و به‌جای `<LIARA_API_TOKEN>`، کلید API خود را وارد کنید. همچنین، به‌جای `<model_name>`، نام یکی از مدل‌های فوق را قرار دهید.

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
    input: "Hello! This audio was generated using Gemini TTS through Liara.",
    response_format: "pcm",
  });

  const buffer = Buffer.from(
    await response.arrayBuffer()
  );

  fs.writeFileSync(
    "speech.pcm",
    buffer
  );

  console.log("Audio saved to speech.pcm");
}

main().catch(console.error);
```

>  
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
    "input" => "Hello! This audio was generated using Gemini TTS through Liara on PHP.",
    "response_format" => "pcm",
]);

file_put_contents(
    __DIR__ . "/speech.pcm",
    $audio
);

echo "Audio saved to speech.pcm";
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

speech_file = Path("speech.pcm")

with client.audio.speech.with_streaming_response.create(
    model=os.getenv("TTS_MODEL_NAME"),
    voice=os.getenv("TTS_VOICE"),
    input="Hello! This audio was generated using Gemini TTS through Liara on Python.",
    response_format="pcm",
) as response:

    response.stream_to_file(
        speech_file
    )

print("Audio saved to speech.pcm")
```

> پروژه کامل قطعه کد فوق در [گیت‌هاب لیارا](https://github.com/liara-cloud/ai-tts-examples/tree/python) قابل مشاهده و استفاده است.

### .NET

```cs
// dotnet add package OpenAI
// dotnet add package DotNetEnv

using System.ClientModel;

using DotNetEnv;
using OpenAI;
using OpenAI.Audio;

Env.Load();

var baseUrl =
    Environment.GetEnvironmentVariable("BASE_URL")
    ?? throw new Exception("BASE_URL is not defined.");

var apiKey =
    Environment.GetEnvironmentVariable("LIARA_API_KEY")
    ?? throw new Exception("LIARA_API_KEY is not defined.");

var modelName =
    Environment.GetEnvironmentVariable("TTS_MODEL_NAME")
    ?? throw new Exception("TTS_MODEL_NAME is not defined.");

var voiceName =
    Environment.GetEnvironmentVariable("TTS_VOICE")
    ?? throw new Exception("TTS_VOICE is not defined.");

var client = new OpenAIClient(
    credential: new ApiKeyCredential(apiKey),
    options: new OpenAIClientOptions
    {
        Endpoint = new Uri(baseUrl)
    }
);

AudioClient audioClient =
    client.GetAudioClient(modelName);

GeneratedSpeechVoice voice =
    new(voiceName);

BinaryData speech =
    await audioClient.GenerateSpeechAsync(
        "Hello! This audio was generated using Gemini TTS through Liara on .NET.",
        voice,
        new SpeechGenerationOptions
        {
            ResponseFormat =
                GeneratedSpeechFormat.Pcm
        }
    );

await File.WriteAllBytesAsync(
    "speech.pcm",
    speech.ToArray()
);

Console.WriteLine(
    "Audio saved to speech.pcm"
);
```

> پروژه کامل قطعه کد فوق در [گیت‌هاب لیارا](https://github.com/liara-cloud/ai-tts-examples/tree/dotnet) قابل مشاهده و استفاده است.

### Go

```go
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

    response, err :=
        client.Audio.Speech.New(
            context.Background(),
            openai.AudioSpeechNewParams{
                Model: modelName,

                Voice:
                    openai.AudioSpeechNewParamsVoiceUnion{
                        OfString:
                            openai.String(voiceName),
                    },

                Input:
                    "Hello! This audio was generated using Gemini TTS through Liara on Go.",

                ResponseFormat:
                    openai.AudioSpeechNewParamsResponseFormatPCM,
            },
        )

    if err != nil {
        panic(err)
    }

    defer response.Body.Close()

    file, err :=
        os.Create("speech.pcm")

    if err != nil {
        panic(err)
    }

    defer file.Close()

    _, err =
        io.Copy(
            file,
            response.Body,
        )

    if err != nil {
        panic(err)
    }

    fmt.Println(
        "Audio saved to speech.pcm",
    )
}
```

> پروژه کامل قطعه کد فوق در [گیت‌هاب لیارا](https://github.com/liara-cloud/ai-tts-examples/tree/go) قابل مشاهده و استفاده است.

در قطعه کدهای فوق، به‌جای `BASE_URL`، آدرس سرویس هوش مصنوعی خود را قرار دهید و به‌جای `LIARA_API_KEY`، کلید API خود را وارد کنید. همچنین، به‌جای `TTS_MODEL_NAME`، نام یکی از مدل‌های TTS و به‌جای `TTS_VOICE`، نام Voice موردنظر را قرار دهید.

## مقادیر قابل استفاده به عنوان متغیر TTS_VOICE

`TTS_VOICE` یک پارامتر در مدل‌های TTS است که مشخص می‌کند مدل هوش مصنوعی با چه صدای از پیش تعریف‌شده‌ای متن را به گفتار تبدیل کند. هر Voice یک پروفایل صوتی مستقل است که ویژگی‌هایی مثل جنسیت صدا، لحن (Tone)، سرعت، حس بیان (Emotion)، لهجه و سبک صحبت کردن را تعیین می‌کند.

در حال حاضر، می‌توانید مقدار متغیر `TTS_VOICE`  را برای مدل‌های مذکور، با مقادیر زیر پر کنید (بعد از `#` ‌یک‌سری توضیحات راجع به هر Voice قرار گرفته است).

```bash
TTS_VOICE=Zephyr        # Female - Bright, clear
TTS_VOICE=Puck          # Male - Energetic, youthful
TTS_VOICE=Charon        # Male - Deep, calm
TTS_VOICE=Kore          # Female - Warm, natural
TTS_VOICE=Fenrir        # Male - Strong, expressive
TTS_VOICE=Leda          # Female - Soft, gentle
TTS_VOICE=Orus          # Male - Balanced, conversational
TTS_VOICE=Aoede         # Female - Smooth, expressive
TTS_VOICE=Callirrhoe    # Female - Natural, elegant
TTS_VOICE=Autonoe       # Female - Clear, professional
TTS_VOICE=Enceladus     # Male - Deep, narrator style
TTS_VOICE=Iapetus       # Male - Calm, steady
TTS_VOICE=Umbriel       # Male - Soft, conversational
TTS_VOICE=Algieba       # Male - Warm, friendly
TTS_VOICE=Despina       # Female - Clear, natural
TTS_VOICE=Erinome       # Female - Gentle, calm
TTS_VOICE=Algenib       # Male - Deep, authoritative
TTS_VOICE=Rasalgethi    # Male - Expressive, dramatic
TTS_VOICE=Laomedeia     # Female - Bright, engaging
TTS_VOICE=Achernar      # Female - Smooth, natural
TTS_VOICE=Alnilam       # Male - Professional
TTS_VOICE=Schedar       # Female - Warm, conversational
TTS_VOICE=Gacrux        # Female - Soft, emotional
TTS_VOICE=Pulcherrima   # Female - Elegant
TTS_VOICE=Achird        # Male - Natural, balanced
TTS_VOICE=Zubenelgenubi  # Male - Deep, formal
TTS_VOICE=Vindemiatrix  # Female - Calm, clear
TTS_VOICE=Sadachbia     # Male - Friendly
TTS_VOICE=Sadaltager    # Male - Narration style
TTS_VOICE=Sulafat       # Female - Expressive
```

## تبدیل فایل‌های با فرمت PCM به MP3

از آنجایی که تنها فرمت خروجی مدل‌های مذکور Gemini، تنها `pcm` است؛ بنابراین برای تبدیل این فرمت به فرمت‌های رایج‌تر  
مانند `mp3`، می‌توانید از [ffmpeg](https://ffmpeg.org/) استفاده کنید. به عنوان مثال:

```bash
// npm install fluent-ffmpeg

const fs = require("fs");
const ffmpeg = require("fluent-ffmpeg");

function pcmToMp3(inputFile, outputFile) {
  return new Promise((resolve, reject) => {
    ffmpeg()
      .input(inputFile)
      .inputFormat("s16le")
      .inputOptions([
        "-ar 24000",
        "-ac 1"
      ])
      .audioFilters("loudnorm=I=-16:TP=-1.5:LRA=11")
      .audioCodec("libmp3lame")
      .audioBitrate("192k")
      .output(outputFile)
      .on("end", resolve)
      .on("error", reject)
      .run();
  });
}

pcmToMp3(
  "speech.pcm",
  "speech.mp3"
);
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

>  
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

```go
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

## تولید تصویر

برای تولید تصویر با مدل‌های Gemini، می‌توانید از ماژول `openai` استفاده کنید. در ابتدا، یک فایل `.env` با محتوای زیر، در مسیر اصلی پروژه خود ایجاد کنید:

```dotenv
BASE_URL=<baseUrl>
LIARA_API_KEY=<LIARA_API_KEY>
IMAGE_MODEL_NAME=<image_model_name>
```

سپس، می‌توانید مانند قطعه کدهای زیر، تصویر موردنظر خود را تولید کنید:

### JavaScript

```js
// npm install openai dotenv
import "dotenv/config";
import OpenAI from "openai";
import { writeFile } from "fs/promises";

const openai = new OpenAI({
  baseURL: process.env.BASE_URL,
  apiKey: process.env.LIARA_API_KEY,
});

async function main() {
  const img = await openai.images.generate({
    model: process.env.IMAGE_MODEL_NAME,
    prompt: "A cute baby sea otter",
    n: 1,
    size: "1024x1024",
  });

  const imageBuffer = Buffer.from(img.data[0].b64_json, "base64");
  await writeFile("output.png", imageBuffer);

  console.log("Image saved to output.png");
}

main().catch(console.error);
```

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

$result = $client->images()->create([
    'model' => $_ENV["IMAGE_MODEL_NAME"],
    'prompt' => 'A cute baby sea otter',
    'n' => 1,
    'size' => '1024x1024',
]);

$imageBytes = base64_decode($result->data[0]->b64_json);
file_put_contents('output.png', $imageBytes);

echo "Image saved to output.png";
```

### Python

```py
# pip install openai python-dotenv
import base64
import os

from dotenv import load_dotenv
from openai import OpenAI

load_dotenv()

client = OpenAI(
    base_url=os.getenv("BASE_URL"),
    api_key=os.getenv("LIARA_API_KEY"),
)

img = client.images.generate(
    model=os.getenv("IMAGE_MODEL_NAME"),
    prompt="A cute baby sea otter",
    n=1,
    size="1024x1024",
)

image_bytes = base64.b64decode(img.data[0].b64_json)
with open("output.png", "wb") as f:
    f.write(image_bytes)

print("Image saved to output.png")
```

### .NET

```cs
// dotnet add package OpenAI && dotnet add package DotNetEnv
using System.ClientModel;
using DotNetEnv;
using OpenAI;
using OpenAI.Images;

Env.Load();

var baseUrl = Environment.GetEnvironmentVariable("BASE_URL")
    ?? throw new Exception("BASE_URL is not defined.");

var apiKey = Environment.GetEnvironmentVariable("LIARA_API_KEY")
    ?? throw new Exception("LIARA_API_KEY is not defined.");

var modelName = Environment.GetEnvironmentVariable("IMAGE_MODEL_NAME")
    ?? throw new Exception("IMAGE_MODEL_NAME is not defined.");

ImageClient client = new(
    model: modelName,
    credential: new ApiKeyCredential(apiKey),
    options: new OpenAIClientOptions
    {
        Endpoint = new Uri(baseUrl)
    }
);

GeneratedImage generated = await client.GenerateImageAsync(
    "Create a basket full of flowers.",
    new ImageGenerationOptions
    {
        Size = GeneratedImageSize.W1024xH1024,
    }
);

byte[] bytes = generated.ImageBytes.ToArray();

string fileName = $"generated_{DateTime.Now:yyyyMMdd_HHmmss}.png";
await File.WriteAllBytesAsync(fileName, bytes);

Console.WriteLine($"Image saved to {fileName}");
```

### Go

```bash
// go get github.com/sashabaranov/go-openai github.com/joho/godotenv
package main

import (
	"context"
	"encoding/base64"
	"fmt"
	"os"

	"github.com/joho/godotenv"
	openai "github.com/sashabaranov/go-openai"
)

func main() {
	if err := godotenv.Load(); err != nil {
		panic("Error loading .env file")
	}

	config := openai.DefaultConfig(os.Getenv("LIARA_API_KEY"))
	config.BaseURL = os.Getenv("BASE_URL")
	c := openai.NewClientWithConfig(config)

	req := openai.ImageRequest{
		Prompt:            "Parrot on a skateboard performing a trick. Large bold text \"SKATE MASTER\" banner at the bottom of the image. Cartoon style, natural light, high detail, 1:1 aspect ratio.",
		Background:        openai.CreateImageBackgroundOpaque, // or CreateImageBackgroundTransparent
		Model:             os.Getenv("IMAGE_MODEL_NAME"),
		Size:              "1024x1024", // '1024x1024', '1024x1536', '1536x1024', and 'auto'
		N:                 1,           // number of images to generate
		OutputCompression: 100,
		OutputFormat:      "png", // 'png', 'webp', and 'jpeg'
	}

	resp, err := c.CreateImage(context.Background(), req)
	if err != nil {
		fmt.Printf("Image generation error: %v\n", err)
		return
	}

	imgBytes, err := base64.StdEncoding.DecodeString(resp.Data[0].B64JSON)
	if err != nil {
		fmt.Printf("Base64 decode error: %v\n", err)
		return
	}

	outputPath := "generated_image.png"
	if err := os.WriteFile(outputPath, imgBytes, 0644); err != nil {
		fmt.Printf("Failed to write image file: %v\n", err)
		return
	}

	fmt.Printf("The image was saved as %s\n", outputPath)
}
```

### cURL

```bash
curl "$BASE_URL/images/generations" \\
  -H "Content-Type: application/json" \\
  -H "Authorization: Bearer $LIARA_API_KEY" \\
  -d '{
  "model": "'"$IMAGE_MODEL_NAME"'",
  "prompt": "A cute baby sea otter",
  "n": 1,
  "size": "1024x1024"
}'
```

در قطعه کدهای فوق، به‌جای `BASE_URL`، آدرس سرویس هوش مصنوعی خود را قرار دهید و به‌جای `LIARA_API_KEY`، کلید API خود را وارد کنید. همچنین، به‌جای `IMAGE_MODEL_NAME`، نام یکی از مدل‌های تولید تصویر Gemini را قرار دهید.

## ویرایش تصویر

برای ویرایش یک یا چند تصویر موجود (به‌عنوان مثال، ترکیب چند تصویر یا اعمال تغییرات روی یک تصویر)، می‌توانید مانند قطعه کدهای زیر عمل کنید. متغیرهای محیطی مورد نیاز، مشابه بخش [تولید تصویر](https://docs.liara.ir/ai/quick-start#image-generation) هستند:

### JavaScript

```js
// npm install openai dotenv
import "dotenv/config";
import fs from "fs";
import OpenAI, { toFile } from "openai";

const openai = new OpenAI({
  baseURL: process.env.BASE_URL,
  apiKey: process.env.LIARA_API_KEY,
});

const imageFiles = [
  "bath-bomb.png",
  "body-lotion.png",
  "incense-kit.png",
  "soap.png",
];

async function main() {
  const images = await Promise.all(
    imageFiles.map((file) =>
      toFile(fs.createReadStream(file), null, {
        type: "image/png",
      })
    )
  );

  const rsp = await openai.images.edit({
    model: process.env.IMAGE_MODEL_NAME,
    image: images,
    prompt: "Create a lovely gift basket with these four items in it",
  });

  const imageBytes = Buffer.from(rsp.data[0].b64_json, "base64");
  fs.writeFileSync("basket.png", imageBytes);

  console.log("Image saved to basket.png");
}

main().catch(console.error);
```

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

$prompt = "
Generate a photorealistic image of a gift basket on a white background
labeled 'Relax & Unwind' with a ribbon and handwriting-like font,
containing all the items in the reference pictures.
";

$result = $client->images()->edit([
    'model' => $_ENV["IMAGE_MODEL_NAME"],
    'image' => [
        fopen('body-lotion.png', 'rb'),
        fopen('bath-bomb.png', 'rb'),
        fopen('incense-kit.png', 'rb'),
        fopen('soap.png', 'rb'),
    ],
    'prompt' => $prompt,
]);

$imageBytes = base64_decode($result->data[0]->b64_json);
file_put_contents('gift-basket.png', $imageBytes);

echo "Image saved to gift-basket.png";
```

### Python

```py
# pip install openai python-dotenv
import base64
import os

from dotenv import load_dotenv
from openai import OpenAI

load_dotenv()

client = OpenAI(
    base_url=os.getenv("BASE_URL"),
    api_key=os.getenv("LIARA_API_KEY"),
)

prompt = """
Generate a photorealistic image of a gift basket on a white background
labeled 'Relax & Unwind' with a ribbon and handwriting-like font,
containing all the items in the reference pictures.
"""

result = client.images.edit(
    model=os.getenv("IMAGE_MODEL_NAME"),
    image=[
        open("body-lotion.png", "rb"),
        open("bath-bomb.png", "rb"),
        open("incense-kit.png", "rb"),
        open("soap.png", "rb"),
    ],
    prompt=prompt,
)

image_bytes = base64.b64decode(result.data[0].b64_json)

with open("gift-basket.png", "wb") as f:
    f.write(image_bytes)

print("Image saved to gift-basket.png")
```

### .NET

```cs
// dotnet add package OpenAI && dotnet add package DotNetEnv
using System.ClientModel;
using DotNetEnv;
using OpenAI;
using OpenAI.Images;

Env.Load();

var baseUrl = Environment.GetEnvironmentVariable("BASE_URL")
    ?? throw new Exception("BASE_URL is not defined.");

var apiKey = Environment.GetEnvironmentVariable("LIARA_API_KEY")
    ?? throw new Exception("LIARA_API_KEY is not defined.");

var modelName = Environment.GetEnvironmentVariable("IMAGE_MODEL_NAME")
    ?? throw new Exception("IMAGE_MODEL_NAME is not defined.");

ImageClient client = new(
    model: modelName,
    credential: new ApiKeyCredential(apiKey),
    options: new OpenAIClientOptions
    {
        Endpoint = new Uri(baseUrl)
    }
);

var imageToEdit = "basket.png";
using var imageStream = File.OpenRead(imageToEdit);

ClientResult<GeneratedImage> editedImageResult =
    await client.GenerateImageEditAsync(
        image: imageStream,
        imageFilename: Path.GetFileName(imageToEdit),
        prompt: "make them happy"
    );

byte[] bytes = editedImageResult.Value.ImageBytes.ToArray();
await File.WriteAllBytesAsync("edited.png", bytes);

Console.WriteLine("Image saved to edited.png");
```

### Go

```bash
// go get github.com/sashabaranov/go-openai github.com/joho/godotenv
package main

import (
	"context"
	"encoding/base64"
	"fmt"
	"os"

	"github.com/joho/godotenv"
	openai "github.com/sashabaranov/go-openai"
)

func main() {
	if err := godotenv.Load(); err != nil {
		panic("Error loading .env file")
	}

	config := openai.DefaultConfig(os.Getenv("LIARA_API_KEY"))
	config.BaseURL = os.Getenv("BASE_URL")
	c := openai.NewClientWithConfig(config)

	orig, err := os.Open("output.png")
	if err != nil {
		panic(err)
	}
	defer orig.Close()

	req := openai.ImageEditRequest{
		Image:   openai.WrapReader(orig, "output.png", "image/png"),
		Prompt:  "make them happy",
		Model:   os.Getenv("IMAGE_MODEL_NAME"),
		Size:    "1024x1024",
		N:       1,
	}

	resp, err := c.CreateEditImage(context.Background(), req)
	if err != nil {
		panic(err)
	}

	if len(resp.Data) > 0 && resp.Data[0].B64JSON != "" {
		b, err := base64.StdEncoding.DecodeString(resp.Data[0].B64JSON)
		if err != nil {
			panic(err)
		}
		if err := os.WriteFile("edited.png", b, 0644); err != nil {
			panic(err)
		}
		fmt.Println("Image saved to edited.png")
	}
}
```

### cURL

```bash
curl "$BASE_URL/images/edits" \\
  -H "Authorization: Bearer $LIARA_API_KEY" \\
  -F "model=$IMAGE_MODEL_NAME" \\
  -F "image[]=@body-lotion.png" \\
  -F "image[]=@bath-bomb.png" \\
  -F "image[]=@incense-kit.png" \\
  -F "image[]=@soap.png" \\
  -F "prompt=Create a lovely gift basket with these four items in it"
```

در قطعه کدهای فوق، نام فایل‌های تصویری ورودی را با مسیر تصاویر موردنظر خود جایگزین کنید.

## all links

[All links of docs](https://docs.liara.ir/all-links-llms.txt)
