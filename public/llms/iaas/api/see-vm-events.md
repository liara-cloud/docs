Original link: https://docs.liara.ir/iaas/api/see-vm-events/

# مشاهده رویدادهای سرور مجازی با API

برای مشاهده رویدادهای سرور مجازی، باید به آدرس `https://iaas-api.liara.ir/vm/operation/vmID`، یک درخواست `GET`، ارسال کنید. مقدار `vmID`، باید با [آیدی سرور مجازی](https://docs.liara.ir/iaas/details/vm-id/) مورد نظرتان جایگزین شود.
در ادامه، نحوه مشاهده رویدادهای سرور مجازی با API با استفاده از ابزار `cURL` و برخی از زبان‌های برنامه‌نویسی، قرار گرفته است:

## cURL

```bash
curl -X GET https://iaas-api.liara.ir/vm/operation/vmID \\
  -H "Authorization: Bearer YOUR-API-TOKEN" \\
  -H "Content-Type: application/json" | jq .
```

## NodeJS

```js
const axios = require('axios');

const url = "https://iaas-api.liara.ir/vm/operation/vmID";
const token = "YOUR-API-TOKEN";

axios.get(url, {
    headers: {
        "Authorization": `Bearer ${token}`,
        "Content-Type": "application/json"
    }
})
.then(response => {
    console.log(JSON.stringify(response.data, null, 2)); 
})
.catch(error => {
    console.error("Error:", error.response.data);
});
```

## Python

```py
import requests
import json

url = "https://iaas-api.liara.ir/vm/operation/vmID"
token = "YOUR-API-TOKEN"

headers = {
    "Authorization": f"Bearer {token}",
    "Content-Type": "application/json"
}

response = requests.get(url, headers=headers)
print(json.dumps(response.json(), indent=2))
```

## Go

```go
package main

import (
    "fmt"
    "net/http"
    "io/ioutil"
    "encoding/json"
)

func main() {
    url := "https://iaas-api.liara.ir/vm/operation/vmID"
    token := "YOUR-API-TOKEN"

    req, _ := http.NewRequest("GET", url, nil)
    req.Header.Set("Authorization", fmt.Sprintf("Bearer %s", token))
    req.Header.Set("Content-Type", "application/json")

    client := &http.Client{}
    resp, err := client.Do(req)
    if err != nil {
        panic(err)
    }
    defer resp.Body.Close()

    body, _ := ioutil.ReadAll(resp.Body)
    var result map[string]interface{}
    json.Unmarshal(body, &result)

    prettyJSON, _ := json.MarshalIndent(result, "", "  ")
    fmt.Println(string(prettyJSON)) 
}
```

## PHP

```php
<?php

    $url = "https://iaas-api.liara.ir/vm/operation/vmID";
    $token = "YOUR-API-TOKEN";

    $ch = curl_init($url);
    curl_setopt($ch, CURLOPT_HTTPHEADER, [
        "Authorization: Bearer {$token}",
        "Content-Type: application/json"
    ]);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

    $response = curl_exec($ch);
    curl_close($ch);

    echo json_encode(json_decode($response), JSON_PRETTY_PRINT);

?>
```

## C#

```csharp
class Program
{
    static async Task Main(string[] args)
    {
        string url = "https://iaas-api.liara.ir/vm/operation/vmID";
        string token = "YOUR-API-TOKEN";

        using (HttpClient client = new HttpClient())
        {
            client.DefaultRequestHeaders.Authorization = new System.Net.Http.Headers.AuthenticationHeaderValue("Bearer", token);
            client.DefaultRequestHeaders.Accept.Add(new System.Net.Http.Headers.MediaTypeWithQualityHeaderValue("application/json"));

            var response = await client.GetAsync(url);
            string result = await response.Content.ReadAsStringAsync();
            Console.WriteLine(result);
        }
    }
}
```

> در دستورات و قطعه کدهای فوق، به‌جای `YOUR-API-TOKEN`، [توکن API حساب خود](https://docs.liara.ir/references/api/about) و به‌جای `vmID`، [آیدی سرور مجازی](https://docs.liara.ir/iaas/details/vm-id/) مورد نظرتان را وارد کنید.

## all links

[All links of docs](https://docs.liara.ir/all-links-llms.txt)
