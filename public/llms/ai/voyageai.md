Original link: https://docs.liara.ir/ai/voyageai/

# شروع به کار با هوش مصنوعی Voyage AI

[Voyage AI](https://www.voyageai.com/) یک پلتفرم تخصصی در حوزه جست‌وجو و بازیابی اطلاعات با هوش مصنوعی است که مدل‌های Embedding و Reranker را برای کاربردهایی 
مانند Semantic Search و RAG و بازیابی اسناد ارائه می‌دهد.

در حال حاضر، لیارا، مدل‌های زیر از Voyage AI را در API خود پشتیبانی می‌کند:

- مدل `{item}`
  

پس از [ایجاد سرویس هوش مصنوعی](https://docs.liara.ir/ai/quick-start) و دریافت `baseUrl` و [ساخت کلید](https://docs.liara.ir/ai/details/keys/#create)، می‌توانید از مدل‌های Voyage AI استفاده کنید.

## اتصال به مدل

برای کار با مدل‌های rerank می‌توانید از درخواست‌های `HTTP` استفاده کنید. در ادامه، مثال‌های استفاده از rerank آمده است: 

## JavaScript

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

## PHP

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

## Python

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

## .NET

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

## Go

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

## cURL

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
