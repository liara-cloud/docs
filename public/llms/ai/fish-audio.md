Original link: https://docs.liara.ir/ai/fish-audio/

# شروع به کار با هوش مصنوعی Fish Audio

[Fish Audio](https://fish.audio/) یک پلتفرم هوش مصنوعی صوتی است که روی تولید و پردازش صدا تمرکز دارد و سرویس‌هایی مثل تبدیل متن به گفتار (TTS)، تبدیل گفتار به متن (STT)، شبیه‌سازی صدا (Voice Cloning) و ساخت Voice Agent ارائه می‌کند. 

در حال حاضر، لیارا، مدل‌های زیر از Fish Audio را در API خود پشتیبانی می‌کند:

- مدل `{item}`
  
پس از [ایجاد سرویس هوش مصنوعی](https://docs.liara.ir/ai/quick-start) و دریافت `baseUrl` و [ساخت کلید](https://docs.liara.ir/ai/details/keys/#create)، می‌توانید از مدل‌های Fish Audio استفاده کنید.

## اتصال به مدل های تبدیل متن به گفتار (TTS)

برای کار با مدل‌های TTS می‌توانید از ماژول `openai` استفاده کنید. در ادامه، مثال‌های استفاده از مدل‌های TTS آمده است: 

## JavaScript

```js
// npm install openai dotenv
require("dotenv").config();

const fs = require("fs");
const OpenAI = require("openai");

const client = new OpenAI({
  apiKey: process.env.LIARA_API_KEY,
  baseURL: process.env.BASE_URL,
});

async function n() {
  const response = await client.audio.speech.create({
    model: process.env.TTS_MODEL_NAME,
    input: "Hello! This audio was generated using Fish Audio through Liara.",
    response_format: "mp3",
  });

  const buffer = Buffer.from(await response.arrayBuffer());

  fs.writeFileSync("speech.mp3", buffer);

  console.log("Audio saved to speech.mp3");
}

n().catch(console.error);
```

> پروژه کامل قطعه کد فوق در [گیت‌هاب لیارا](https://github.com/liara-cloud/ai-tts-examples/tree/nodejs) قابل مشاهده و استفاده است.

## PHP

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
    "input" => "Hello! This audio was generated using Fish Audio through Liara on PHP!!! Ohhhh Yeahhhhh!",
    "response_format" => "mp3",
]);

file_put_contents(
    __DIR__ . "/speech.mp3",
    $audio
);

echo "Audio saved to speech.mp3";
```

> پروژه کامل قطعه کد فوق در [گیت‌هاب لیارا](https://github.com/liara-cloud/ai-tts-examples/tree/php) قابل مشاهده و استفاده است.

## Python

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
    input="Hello! This audio was generated using Fish Audio through Liara on Python! it's awesome, right?",
    response_format="mp3",
) as response:
    response.stream_to_file(speech_file)

print("Audio saved to speech.mp3")
```

> پروژه کامل قطعه کد فوق در [گیت‌هاب لیارا](https://github.com/liara-cloud/ai-tts-examples/tree/python) قابل مشاهده و استفاده است.

## .NET

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
    "Hello! This audio was generated using Fish Audio. On DOTNET!!! This is Crazy!!!!",
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

## Go

```bash
// go get github.com/openai/openai-go/v3 github.com/joho/godotenv
package n

import (
	"context"
	"fmt"
	"io"
	"os"

	"github.com/joho/godotenv"
	"github.com/openai/openai-go/v3"
	"github.com/openai/openai-go/v3/option"
)

func n() {
	err := godotenv.Load()
	if err != nil {
		panic("Error loading .env file")
	}

	baseURL := os.Getenv("BASE_URL")
	apiKey := os.Getenv("LIARA_API_KEY")
	modelName := os.Getenv("TTS_MODEL_NAME")

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

			Input: "Hello! This audio was generated using Fish Audio. On Go!!!! Hellll Yeahhhh",

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

در قطعه کدهای فوق، به‌جای `BASE_URL`، آدرس سرویس هوش مصنوعی خود را قرار دهید و به‌جای `LIARA_API_KEY`، کلید API خود را وارد کنید. همچنین، به‌جای `TTS_MODEL_NAME`، نام یکی از مدل‌های TTS را قرار دهید.

## اتصال به مدل های تبدیل گفتار به متن (STT)

برای کار با مدل‌های TTS می‌توانید از ماژول `openai` استفاده کنید. در ادامه، مثال‌های استفاده از مدل‌های TTS آمده است: 

## JavaScript

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

## PHP

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

## Python

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

## .NET

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

## Go

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

## all links

[All links of docs](https://docs.liara.ir/all-links-llms.txt)
