Original link: https://docs.liara.ir/dbaas/elastic-search/how-tos/connect-via-platform/go/

# اتصال به دیتابیس ElasticSearch در برنامه‌های go

برای اتصال به دیتابیس ElasticSearch در برنامه‌های go، در ابتدا باید ماژول‌های مربوط به آن‌را با اجرای دستورات زیر، نصب کنید:

```bash
go get github.com/joho/godotenv
```

پس از آن، کافیست تا  
اطلاعات مربوط به دیتابیس خود را  
به متغیرهای محیطی برنامه خود، اضافه کنید؛ به عنوان مثال:

```txt
DB_URL=http://host:port/_cluster/health?pretty
DB_USERNAME=username
DB_PASSWORD=password
```

در نهایت، می‌توانید با استفاده از قطعه کد زیر، به دیتابیس خود، متصل شوید:

```go
package main

import (
	"encoding/base64"
	"fmt"
	"io"
	"net/http"
	"os"

	"github.com/joho/godotenv"
)

func main() {
	// Load environment variables from .env file
	err := godotenv.Load()
	if err != nil {
		fmt.Println("Error loading .env file:", err)
		return
	}

	// Elasticsearch connection information from environment variables
	url := os.Getenv("DB_URL")
	username := os.Getenv("DB_USERNAME")
	password := os.Getenv("DB_PASSWORD")

	// Creating an HTTP request
	req, err := http.NewRequest("GET", url, nil)
	if err != nil {
		fmt.Println("Error creating HTTP request:", err)
		return
	}

	// Adding authentication information to the request
	req.Header.Add("Authorization", "Basic "+basicAuth(username, password))

	// Sending the request to Elasticsearch
	client := http.DefaultClient
	res, err := client.Do(req)
	if err != nil {
		fmt.Println("Error sending HTTP request:", err)
		return
	}
	defer res.Body.Close()

	// Reading and printing the response
	body, err := io.ReadAll(res.Body)
	if err != nil {
		fmt.Println("Error reading response body:", err)
		return
	}

	fmt.Println(string(body))
}

// Function to create a Base64-encoded authentication string
func basicAuth(username, password string) string {
	auth := username + ":" + password
	return base64.StdEncoding.EncodeToString([]byte(auth))
}
```

## all links

[All links of docs](https://docs.liara.ir/all-links-llms.txt)
