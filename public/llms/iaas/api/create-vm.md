Original link: https://docs.liara.ir/iaas/api/create-vm/

# ساخت سرور مجازی با API

برای ساخت سرور مجازی، باید به آدرس `https://iaas-api.liara.ir/vm`، یک درخواست `POST`، ارسال کنید. بدنه‌ی این درخواست باید شامل اطلاعات زیر باشد:

```bash
{
    "name": string,
    "OS": string,
    "plan": string,
    "config": {
        SSHKeys: string[]
    }
}
```

در بدنه فوق، باید در فیلد `name`، نام سرور مجازی مورد نظر خود را وارد کنید. در فیلد `OS`، باید نوع سیستم‌عامل مورد نظر خود را به همراه نسخه آن، وارد کنید که می‌تواند `ubuntu-24.04` , `ubuntu-22.04` یا `debian-12.9` باشد. در فیلد `plan`، باید نام پلن مورد نظر خود را وارد کنید. در فیلد `config`، باید یک آرایه از کلیدهای SSH که می‌خواهید برای ورود به سرور مجازی استفاده کنید، وارد کنید. این آرایه، اختیاری است و می‌تواند خالی باشد.

پلن‌های موجود برای سرور مجازی، می‌تواند به‌ترتیب (از کمترین منابع تا بیشترین)، `standard-base-g2` , `standard-plus-g2` , `pro-g2` , `pro-plus-g2` و `express-g2` باشد.  
برای مشاهده قیمت‌های سرور مجازی، می‌توانید به صفحه [پلن‌های سرور مجازی](https://docs.liara.ir/iaas/details/hardware-plans/) مراجعه کنید.

## cURL
```bash
curl -X POST https://iaas-api.liara.ir/vm \\
  -H "Authorization: Bearer YOUR-API-TOKEN" \\
  -H "Content-Type: application/json" \\
  -d '{
    "name": "vm-name",
    "OS": "ubuntu-22.04",
    "plan": "standard-base-g2",
    "config": {
        "SSHKeys": ["ssh-key"]
    }
}'
```

## NodeJS
```js
// npm install axios
const axios = require('axios');

const token = "YOUR-API-TOKEN";
const ssh_key = "your-ssh-key";

const url = 'https://iaas-api.liara.ir/vm';


const headers = {
  'Authorization': `Bearer ${token}`,
  'Content-Type': 'application/json'
};

const data = {
  "name": "vm-name",
  "OS": "ubuntu-22.04",
  "plan": "standard-base-g2", 
  "config": {
    "SSHKeys": [ssh_key] 
  }
};

axios.post(url, data, { headers })
  .then(response => console.log(response.data))
  .catch(error => console.log(error));
```

## Python
```py
import requests

token = "YOUR-API-TOKEN"
ssh_key = "your-ssh-key"

url = "https://iaas-api.liara.ir/vm"

headers = {
    "Authorization": f"Bearer {token}",
    "Content-Type": "application/json"
}

data = {
    "name": "my-perfect-vm",
    "OS": "ubuntu-22.04", 
    "plan": "standard-base-g2", 
    "config": {
        "SSHKeys": [ssh_key]
    }
}

response = requests.post(url, headers=headers, json=data)
print(response.json())
```

## Go
```go
package main

import (
  "bytes"
  "encoding/json"
  "fmt"
  "net/http"
)

const token = "YOUR-API-TOKEN"
const sshKey = "your-ssh-key"

func main() {
  url := "https://iaas-api.liara.ir/vm"


  reqBody := map[string]interface{}{
    "name": "vm-name",
    "OS":   "ubuntu-22.04",  
    "plan": "standard-base-g2", 
    "config": map[string]interface{}{
      "SSHKeys": []string{sshKey},  
    },
  }

  body, err := json.Marshal(reqBody)
  if err != nil {
    fmt.Println("Error marshaling body:", err)
    return
  }

  req, err := http.NewRequest("POST", url, bytes.NewBuffer(body))
  if err != nil {
    fmt.Println("Error creating request:", err)
    return
  }

  req.Header.Set("Authorization", "Bearer "+token)
  req.Header.Set("Content-Type", "application/json")

  client := &http.Client{}
  resp, err := client.Do(req)
  if err != nil {
    fmt.Println("Error making request:", err)
    return
  }
  defer resp.Body.Close()

  var result map[string]interface{}
  json.NewDecoder(resp.Body).Decode(&result)
  fmt.Println(result)
}
```

## PHP
```php
<?php
$token = "YOUR-API-TOKEN";
$ssh_key = "your-ssh-key";

$url = "https://iaas-api.liara.ir/vm";
$headers = [
    "Authorization: Bearer $token",
    "Content-Type: application/json"
];

$data = [
    "name" => "vm-name",
    "OS" => "ubuntu-22.04",  
    "plan" => "standard-base-g2", 
    "config" => [
        "SSHKeys" => [$ssh_key]
    ]
];

$ch = curl_init($url);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);
curl_setopt($ch, CURLOPT_POST, true);
curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($data));

$response = curl_exec($ch);
curl_close($ch);

echo $response;
?>
```

## C#
```csharp
using System;
using System.Net.Http;
using System.Text;
using System.Threading.Tasks;

class Program
{
    static string token = "YOUR-API-TOKEN";
    static string sshKey = "your-ssh-key";

    static async Task Main(string[] args)
    {
        using var client = new HttpClient();
        var url = "https://iaas-api.liara.ir/vm";

        var json = $@"
        {{
            ""name"": ""vm-name"",
            ""OS"": ""ubuntu-22.04"",
            ""plan"": ""standard-base-g2"",
            ""config"": {{
                ""SSHKeys"": [""{sshKey}""]  
            }}
        }}";

        var request = new HttpRequestMessage
        {
            Method = HttpMethod.Post,
            RequestUri = new Uri(url),
            Content = new StringContent(json, Encoding.UTF8, "application/json")
        };
        
        request.Headers.Add("Authorization", "Bearer " + token);
        
        var response = await client.SendAsync(request);
        
        if (response.IsSuccessStatusCode)
        {
            var responseString = await response.Content.ReadAsStringAsync();
            Console.WriteLine(responseString);
        }
        else
        {
            Console.WriteLine($"Error: {response.StatusCode}");
            var errorMessage = await response.Content.ReadAsStringAsync();
            Console.WriteLine($"Error message: {errorMessage}");
        }
    }
}
```

> در دستورات و قطعه کدهای فوق، به‌جای `YOUR-API-TOKEN`، [توکن API حساب خود](https://docs.liara.ir/references/api/about) و به‌جای `your-ssh-key`، کلید SSH خود را وارد کنید.

## all links

[All links of docs](https://docs.liara.ir/all-links-llms.txt)
