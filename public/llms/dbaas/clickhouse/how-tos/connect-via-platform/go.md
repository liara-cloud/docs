Original link: https://docs.liara.ir/dbaas/clickhouse/how-tos/connect-via-platform/go/

# اتصال به دیتابیس ClickHouse در برنامه‌های go

برای اتصال به دیتابیس ClickHouse در برنامه‌های go، در ابتدا باید ماژول‌های مربوط به آن‌را با اجرای دستورات زیر، نصب کنید:

```bash
go get github.com/ClickHouse/clickhouse-go/v2
go get github.com/joho/godotenv
```

پس از آن، کافیست تا  
اطلاعات مربوط به دیتابیس خود را  
به متغیرهای محیطی برنامه خود، اضافه کنید؛ به عنوان مثال:

```bash
CLICKHOUSE_HOST=rainier.liara.cloud
CLICKHOUSE_PORT=32724
CLICKHOUSE_DATABASE=default
CLICKHOUSE_USERNAME=root
CLICKHOUSE_PASSWORD=fCHDaXCPnkaRfIc2I457n8uo
```

در نهایت، می‌توانید با استفاده از قطعه کد زیر، به دیتابیس خود، متصل شوید:

```go
package main

import (
	"context"
	"fmt"
	"log"
	"os"

	"github.com/ClickHouse/clickhouse-go/v2"
	"github.com/joho/godotenv"
)

func main() {
	err := godotenv.Load()
	if err != nil {
		log.Fatal("Error loading .env file")
	}

	host := os.Getenv("CLICKHOUSE_HOST")
	port := os.Getenv("CLICKHOUSE_PORT")
	database := os.Getenv("CLICKHOUSE_DATABASE")
	username := os.Getenv("CLICKHOUSE_USERNAME")
	password := os.Getenv("CLICKHOUSE_PASSWORD")

	conn := clickhouse.OpenDB(&clickhouse.Options{
		Addr: []string{
			fmt.Sprintf("%s:%s", host, port),
		},
		Protocol: clickhouse.HTTP,
		Auth: clickhouse.Auth{
			Database: database,
			Username: username,
			Password: password,
		},
	})

	defer conn.Close()

	ctx := context.Background()

	if err := conn.PingContext(ctx); err != nil {
		log.Fatalf("ClickHouse connection failed: %v", err)
	}

	fmt.Println("ClickHouse connection successful ✅")
}
```

> مثال فوق از اتصال به دیتابیس را می‌توانید به صورت کامل در [گیت‌هاب لیارا](https://github.com/liara-cloud/clickhouse-connect-examples/tree/go)، مشاهده کنید.

## all links

[All links of docs](https://docs.liara.ir/all-links-llms.txt)
