Original link: https://docs.liara.ir/ai/deepgram/

# شروع به کار با هوش مصنوعی Deepgram

[Deepgram](https://deepgram.com/) یک شرکت فعال در حوزه هوش مصنوعی صوتی (Voice AI) است که ابزارها و APIهایی برای تبدیل گفتار به متن (Speech-to-Text)، تبدیل متن به گفتار (Text-to-Speech) و ساخت Agentهای صوتی بلادرنگ ارائه می‌کند. سرویس‌های این شرکت برای کاربردهایی مانند دستیارهای صوتی، مراکز تماس، تحلیل مکالمات، رونویسی پادکست و سیستم‌های مکالمه‌ای طراحی شده‌اند و امکان استفاده به صورت ابری یا Self-hosted را نیز فراهم می‌کنند.

در حال حاضر، لیارا، مدل‌های زیر از Deepgram را در API خود پشتیبانی می‌کند:

- مدل `{item}`

پس از [ایجاد سرویس هوش مصنوعی](https://docs.liara.ir/ai/quick-start) و دریافت `baseUrl` و [ساخت کلید](https://docs.liara.ir/ai/details/keys/#create)، می‌توانید از مدل‌های Deepgram استفاده کنید.

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
    voice: process.env.TTS_VOICE,
    input: "Hello! This audio was generated using Deepgram through Liara.",
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
    "voice" => $_ENV["TTS_VOICE"],
    "input" => "Hello! This audio was generated using Deepgram through Liara on PHP!!! Ohhhh Yeahhhhh!",
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
    voice=os.getenv("TTS_VOICE"),
    input="Hello! This audio was generated using Deepgram through Liara on Python! it's awesome, right?",
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
    "Hello! This audio was generated using Deepgram. On DOTNET!!! This is Crazy!!!!",
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

			Input: "Hello! This audio was generated using Deepgram. On Go!!!! Hellll Yeahhhh",

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
TTS_VOICE=aura-2-thalia-en       # English - Female - Warm, expressive
TTS_VOICE=aura-2-amalthea-en     # English - Female - Natural, balanced
TTS_VOICE=aura-2-andromeda-en    # English - Female - Friendly, conversational
TTS_VOICE=aura-2-apollo-en       # English - Male - Deep, confident
TTS_VOICE=aura-2-arcas-en        # English - Male - Warm, natural
TTS_VOICE=aura-2-aries-en        # English - Male - Energetic, clear
TTS_VOICE=aura-2-asteria-en      # English - Female - Bright, engaging
TTS_VOICE=aura-2-athena-en       # English - Female - Confident, professional
TTS_VOICE=aura-2-atlas-en        # English - Male - Steady, corporate
TTS_VOICE=aura-2-aurora-en       # English - Female - Soft, natural
TTS_VOICE=aura-2-callista-en     # English - Female - Clear, conversational
TTS_VOICE=aura-2-cora-en         # English - Female - Calm, natural
TTS_VOICE=aura-2-cordelia-en     # English - Female - Elegant, expressive
TTS_VOICE=aura-2-delia-en        # English - Female - Friendly, smooth
TTS_VOICE=aura-2-draco-en        # English - Male - Strong, authoritative
TTS_VOICE=aura-2-electra-en      # English - Female - Energetic, lively
TTS_VOICE=aura-2-harmonia-en     # English - Female - Balanced, warm
TTS_VOICE=aura-2-helena-en       # English - Female - Professional, clear
TTS_VOICE=aura-2-hera-en         # English - Female - Confident, refined
TTS_VOICE=aura-2-hermes-en       # English - Male - Fast, energetic
TTS_VOICE=aura-2-hyperion-en     # English - Male - Deep, powerful
TTS_VOICE=aura-2-iris-en         # English - Female - Soft, pleasant
TTS_VOICE=aura-2-janus-en        # English - Male - Neutral, conversational
TTS_VOICE=aura-2-juno-en         # English - Female - Natural, friendly
TTS_VOICE=aura-2-jupiter-en      # English - Male - Strong, narrator style
TTS_VOICE=aura-2-luna-en         # English - Female - Calm, soft
TTS_VOICE=aura-2-mars-en         # English - Male - Bold, energetic
TTS_VOICE=aura-2-minerva-en      # English - Female - Intelligent, professional
TTS_VOICE=aura-2-neptune-en      # English - Male - Smooth, deep
TTS_VOICE=aura-2-odysseus-en     # English - Male - Storytelling, expressive
TTS_VOICE=aura-2-ophelia-en      # English - Female - Gentle, expressive
TTS_VOICE=aura-2-orion-en        # English - Male - Balanced, professional
TTS_VOICE=aura-2-orpheus-en      # English - Male - Warm, narrative
TTS_VOICE=aura-2-pandora-en      # English - Female - Expressive, creative
TTS_VOICE=aura-2-phoebe-en       # English - Female - Bright, friendly
TTS_VOICE=aura-2-pluto-en        # English - Male - Deep, dramatic
TTS_VOICE=aura-2-saturn-en       # English - Male - Calm, mature
TTS_VOICE=aura-2-selene-en       # Female - Soft, elegant
TTS_VOICE=aura-2-theia-en        # English - Female - Natural, warm
TTS_VOICE=aura-2-vesta-en        # English - Female - Clear, balanced
TTS_VOICE=aura-2-zeus-en         # English - Male - Deep, authoritative

# French Voices

TTS_VOICE=aura-2-agathe-fr       # French - Female - Natural, elegant
TTS_VOICE=aura-2-hector-fr       # French - Male - Clear, professional

# Spanish Voices

TTS_VOICE=aura-2-agustina-es     # Spanish - Female - Natural
TTS_VOICE=aura-2-alvaro-es       # Spanish - Male - Warm
TTS_VOICE=aura-2-antonia-es      # Spanish - Female - Expressive
TTS_VOICE=aura-2-aquila-es       # Spanish - Male - Clear
TTS_VOICE=aura-2-carina-es       # Spanish - Female - Friendly
TTS_VOICE=aura-2-celeste-es      # Spanish - Female - Soft
TTS_VOICE=aura-2-diana-es        # Spanish - Female - Natural
TTS_VOICE=aura-2-estrella-es     # Spanish - Female - Bright
TTS_VOICE=aura-2-gloria-es       # Spanish - Female - Professional
TTS_VOICE=aura-2-javier-es       # Spanish - Male - Conversational
TTS_VOICE=aura-2-luciano-es      # Spanish - Male - Deep
TTS_VOICE=aura-2-nestor-es       # Spanish - Male - Warm
TTS_VOICE=aura-2-olivia-es       # Spanish - Female - Friendly
TTS_VOICE=aura-2-selena-es       # Spanish - Female - Soft
TTS_VOICE=aura-2-silvia-es       # Spanish - Female - Natural
TTS_VOICE=aura-2-sirio-es        # Spanish - Male - Clear
TTS_VOICE=aura-2-valerio-es      # Spanish - Male - Strong

# German Voices

TTS_VOICE=aura-2-aurelia-de      # German - Female - Natural
TTS_VOICE=aura-2-elara-de        # German - Female - Soft
TTS_VOICE=aura-2-fabian-de       # German - Male - Professional
TTS_VOICE=aura-2-julius-de       # German - Male - Deep
TTS_VOICE=aura-2-kara-de         # German - Female - Friendly
TTS_VOICE=aura-2-lara-de         # German - Female - Clear
TTS_VOICE=aura-2-viktoria-de     # German - Female - Elegant

# Italian Voices

TTS_VOICE=aura-2-cesare-it      # Italian - Male - Deep
TTS_VOICE=aura-2-cinzia-it      # Italian - Female - Natural
TTS_VOICE=aura-2-demetra-it     # Italian - Female - Expressive
TTS_VOICE=aura-2-dionisio-it    # Italian - Male - Strong
TTS_VOICE=aura-2-elio-it        # Italian - Male - Warm
TTS_VOICE=aura-2-flavio-it      # Italian - Male - Professional
TTS_VOICE=aura-2-livia-it       # Italian - Female - Soft
TTS_VOICE=aura-2-maia-it        # Italian - Female - Friendly
TTS_VOICE=aura-2-melia-it       # Italian - Female - Natural

# Dutch Voices

TTS_VOICE=aura-2-beatrix-nl     # Dutch - Female - Natural
TTS_VOICE=aura-2-cornelia-nl    # Dutch - Female - Professional
TTS_VOICE=aura-2-daphne-nl      # Dutch - Female - Friendly
TTS_VOICE=aura-2-hestia-nl      # Dutch - Female - Warm
TTS_VOICE=aura-2-lars-nl        # Dutch - Male - Clear
TTS_VOICE=aura-2-leda-nl        # Dutch - Female - Soft
TTS_VOICE=aura-2-rhea-nl        # Dutch - Female - Natural
TTS_VOICE=aura-2-roman-nl       # Dutch - Male - Deep
TTS_VOICE=aura-2-sander-nl      # Dutch - Male - Conversational

# Japanese Voices

TTS_VOICE=aura-2-ama-ja         # Japanese - Female - Natural
TTS_VOICE=aura-2-ebisu-ja       # Japanese - Male - Calm
TTS_VOICE=aura-2-fujin-ja       # Japanese - Male - Clear
TTS_VOICE=aura-2-izanami-ja     # Japanese - Female - Expressive
TTS_VOICE=aura-2-uzume-ja       # Japanese - Female - Friendly

## all links

[All links of docs](https://docs.liara.ir/all-links-llms.txt)
