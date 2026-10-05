Original link: https://docs.liara.ir/ai/jev/

# شروع به کار با هوش مصنوعی Jev

مدل Jev، یک مدل تصمیم‌گیری (Decision Model) است که یک وضعیت (state) را به‌همراه مجموعه‌ای از سوالات ساختاریافته دریافت می‌کند و برای هر سوال، بر اساس معیارهای (criteria) تعریف‌شده، یک پاسخ مشخص برمی‌گرداند. این مدل برای کاربردهایی مانند دسته‌بندی ورودی‌ها، مسیریابی درخواست‌ها و تصمیم‌گیری خودکار در برنامه‌ها مناسب است.

در حال حاضر، لیارا، مدل‌های زیر از Jev را در API خود پشتیبانی می‌کند:

- مدل `typesafe/jev`

پس از [ایجاد سرویس هوش مصنوعی](https://docs.liara.ir/ai/quick-start) و دریافت `baseUrl` و [ساخت کلید](https://docs.liara.ir/ai/details/keys/#create)، می‌توانید از مدل Jev استفاده کنید.

## اتصال به مدل

برای استفاده از مدل Jev، باید یک درخواست `POST` به مسیر `https://docs.liara.ir/decisions` سرویس هوش مصنوعی خود ارسال کنید. در ابتدا، یک فایل `.env` با محتوای زیر، در مسیر اصلی پروژه خود ایجاد کنید:

```dotenv
BASE_URL=<baseUrl>
LIARA_API_KEY=<LIARA_API_KEY>
JEV_MODEL_NAME=typesafe/jev-1.13
```

## JavaScript

```js
// npm install dotenv
import "dotenv/config";

const url = `${process.env.BASE_URL}/decisions`;

const response = await fetch(url, {
  method: "POST",
  headers: {
    Authorization: `Bearer ${process.env.LIARA_API_KEY}`,
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    model: process.env.JEV_MODEL_NAME,
    state: "معنای زندگی چیست؟",
    questions: {
      is_philosophical: {
        type: "noul",
        instructions: "آیا این سوال جنبه فلسفی دارد؟",
        criteria: {
          true: "سوال فلسفی است",
          false: "سوال فلسفی نیست",
        },
      },
      complexity: {
        type: "choice",
        instructions: "سطح پیچیدگی سوال چقدر است؟",
        criteria: {
          low: "ساده",
          medium: "متوسط",
          high: "پیچیده",
        },
      },
    },
  }),
});

const data = await response.json();
console.log(data);
```

## PHP

```php
<?php
// composer require vlucas/phpdotenv
require __DIR__ . '/vendor/autoload.php';

$dotenv = Dotenv\Dotenv::createImmutable(__DIR__);
$dotenv->load();

$url = $_ENV["BASE_URL"] . "/decisions";

$payload = [
    "model" => $_ENV["JEV_MODEL_NAME"],
    "state" => "معنای زندگی چیست؟",
    "questions" => [
        "is_philosophical" => [
            "type" => "noul",
            "instructions" => "آیا این سوال جنبه فلسفی دارد؟",
            "criteria" => [
                "true" => "سوال فلسفی است",
                "false" => "سوال فلسفی نیست",
            ],
        ],
        "complexity" => [
            "type" => "choice",
            "instructions" => "سطح پیچیدگی سوال چقدر است؟",
            "criteria" => [
                "low" => "ساده",
                "medium" => "متوسط",
                "high" => "پیچیده",
            ],
        ],
    ],
];

$ch = curl_init($url);
curl_setopt_array($ch, [
    CURLOPT_POST => true,
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_HTTPHEADER => [
        "Authorization: Bearer " . $_ENV["LIARA_API_KEY"],
        "Content-Type: application/json",
    ],
    CURLOPT_POSTFIELDS => json_encode($payload, JSON_UNESCAPED_UNICODE),
]);

$response = curl_exec($ch);
curl_close($ch);

echo $response;
```

## Python

```py
# pip install requests python-dotenv
import os

import requests
from dotenv import load_dotenv

load_dotenv()

url = f"{os.getenv('BASE_URL')}/decisions"

headers = {
    "Authorization": f"Bearer {os.getenv('LIARA_API_KEY')}",
    "Content-Type": "application/json",
}

payload = {
    "model": os.getenv("JEV_MODEL_NAME"),
    "state": "معنای زندگی چیست؟",
    "questions": {
        "is_philosophical": {
            "type": "noul",
            "instructions": "آیا این سوال جنبه فلسفی دارد؟",
            "criteria": {
                "true": "سوال فلسفی است",
                "false": "سوال فلسفی نیست",
            },
        },
        "complexity": {
            "type": "choice",
            "instructions": "سطح پیچیدگی سوال چقدر است؟",
            "criteria": {
                "low": "ساده",
                "medium": "متوسط",
                "high": "پیچیده",
            },
        },
    },
}

response = requests.post(url, json=payload, headers=headers)
print(response.json())
```

## .NET

```cs
// dotnet add package DotNetEnv
using System.Net.Http.Headers;
using System.Text;
using System.Text.Json;
using DotNetEnv;

Env.Load();

var baseUrl = Environment.GetEnvironmentVariable("BASE_URL")
    ?? throw new Exception("BASE_URL is not defined.");

var apiKey = Environment.GetEnvironmentVariable("LIARA_API_KEY")
    ?? throw new Exception("LIARA_API_KEY is not defined.");

var modelName = Environment.GetEnvironmentVariable("JEV_MODEL_NAME")
    ?? throw new Exception("JEV_MODEL_NAME is not defined.");

var url = $"{baseUrl.TrimEnd('/')}/decisions";

var payload = new
{
    model = modelName,
    state = "معنای زندگی چیست؟",
    questions = new
    {
        is_philosophical = new
        {
            type = "noul",
            instructions = "آیا این سوال جنبه فلسفی دارد؟",
            criteria = new
            {
                @true = "سوال فلسفی است",
                @false = "سوال فلسفی نیست"
            }
        },
        complexity = new
        {
            type = "choice",
            instructions = "سطح پیچیدگی سوال چقدر است؟",
            criteria = new
            {
                low = "ساده",
                medium = "متوسط",
                high = "پیچیده"
            }
        }
    }
};

using var client = new HttpClient();
client.DefaultRequestHeaders.Authorization =
    new AuthenticationHeaderValue("Bearer", apiKey);

var json = JsonSerializer.Serialize(payload);
var content = new StringContent(json, Encoding.UTF8, "application/json");

var response = await client.PostAsync(url, content);
var result = await response.Content.ReadAsStringAsync();

Console.WriteLine(result);
```

## Go

```bash
// go get github.com/joho/godotenv
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
	if err := godotenv.Load(); err != nil {
		panic("Error loading .env file")
	}

	url := os.Getenv("BASE_URL") + "/decisions"

	payload := map[string]any{
		"model": os.Getenv("JEV_MODEL_NAME"),
		"state": "معنای زندگی چیست؟",
		"questions": map[string]any{
			"is_philosophical": map[string]any{
				"type":         "noul",
				"instructions": "آیا این سوال جنبه فلسفی دارد؟",
				"criteria": map[string]string{
					"true":  "سوال فلسفی است",
					"false": "سوال فلسفی نیست",
				},
			},
			"complexity": map[string]any{
				"type":         "choice",
				"instructions": "سطح پیچیدگی سوال چقدر است؟",
				"criteria": map[string]string{
					"low":    "ساده",
					"medium": "متوسط",
					"high":   "پیچیده",
				},
			},
		},
	}

	body, _ := json.Marshal(payload)
	req, _ := http.NewRequest(http.MethodPost, url, bytes.NewReader(body))
	req.Header.Set("Authorization", "Bearer "+os.Getenv("LIARA_API_KEY"))
	req.Header.Set("Content-Type", "application/json")

	res, err := http.DefaultClient.Do(req)
	if err != nil {
		panic(err)
	}
	defer res.Body.Close()

	data, _ := io.ReadAll(res.Body)
	fmt.Println(string(data))
}
```

## cURL

```bash
curl -X POST "$BASE_URL/decisions" \\
  -H "Authorization: Bearer $LIARA_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "model": "'"$JEV_MODEL_NAME"'",
    "state": "معنای زندگی چیست؟",
    "questions": {
      "is_philosophical": {
        "type": "noul",
        "instructions": "آیا این سوال جنبه فلسفی دارد؟",
        "criteria": {
          "true": "سوال فلسفی است",
          "false": "سوال فلسفی نیست"
        }
      },
      "complexity": {
        "type": "choice",
        "instructions": "سطح پیچیدگی سوال چقدر است؟",
        "criteria": {
          "low": "ساده",
          "medium": "متوسط",
          "high": "پیچیده"
        }
      }
    }
  }'
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
