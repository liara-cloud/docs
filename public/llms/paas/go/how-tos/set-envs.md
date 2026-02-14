Original link: https://docs.liara.ir/paas/go/how-tos/set-envs/

# استفاده از متغیرهای محیطی 

برای استفاده از متغیرهای محیطی در برنامه خود، در ابتدا باید طبق [مستندات تنظیم متغیرهای محیطی](https://docs.liara.ir/paas/details/envs)، متغیرهای محیطی را به برنامه خود، اضافه کنید.
در ادامه، شما می‌توانید با استفاده از ماژول‌ os و متد `()Getenv` به متغیرهای محیطی خود در برنامه go دسترسی داشته باشید؛ به عنوان مثال:

```go
package main

import (
	"fmt"
	"os"
)

func main() {
	value := os.Getenv("LIARA_URL")
	if value == "" {
		fmt.Println("LIARA_URL is not set")
	} else {
		fmt.Println("LIARA_URL:", value)
	}
}
```

در مثال فوق، `LIARA_URL` یک متغیر محیطی است که از قبل، به برنامه فرضی در لیارا، اضافه شده است.

## all links

[All links of docs](https://docs.liara.ir/all-links-llms.txt)
