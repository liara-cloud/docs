Original link: https://docs.liara.ir/paas/docker/how-tos/set-envs/



# استفاده از متغیرهای محیطی 

برای استفاده از متغیرهای محیطی در برنامه خود، در ابتدا باید طبق [مستندات تنظیم متغیرهای محیطی](https://docs.liara.ir/paas/details/envs)، متغیرهای محیطی را به برنامه خود، اضافه کنید.
در ادامه، شما بایستی با توجه به زبان برنامه خود و نوع فریم‌ورک، متغیرهای محیطی را در برنامه، فراخوانی کنید؛ به عنوان مثال، می‌توانید در برنامه‌های go، مشابه قطعه کد زیر، به متغیرهای محیطی دسترسی داشته باشید:

```go
package main

import (
	"log"
	"os"
)

func main() {

	liaraURL := os.Getenv("LIARA_URL")
    log.Fatal(liaraURL)
}
```</ div>

در مثال فوق، `LIARA_URL` یک متغیر محیطی است که از قبل، به برنامه فرضی در لیارا، اضافه شده است.






## all links

[All links of docs](https://docs.liara.ir/all-links-llms.txt)
