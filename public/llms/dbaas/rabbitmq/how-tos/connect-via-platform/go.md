Original link: https://docs.liara.ir/dbaas/rabbitmq/how-tos/connect-via-platform/go/

# اتصال به RabbitMQ در برنامه‌های go

برای اتصال به  RabbitMQ در برنامه‌های go، در ابتدا باید ماژول‌های مربوط به آن‌را با اجرای دستورات زیر، نصب کنید:

```bash
go get github.com/streadway/amqp
go get github.com/joho/godotenv
```

پس از آن، کافیست تا 
اطلاعات مربوط به RabbitMQ خود را 
به متغیرهای محیطی برنامه خود، اضافه کنید؛ به عنوان مثال:

```bash
RABBITMQ_HOST=fitz-roy.liara.cloud
RABBITMQ_PORT=32923
RABBITMQ_USER=root
RABBITMQ_PASS=63LVuatIrWWajE7gxSj20gHL

```

در نهایت، می‌توانید با استفاده از قطعه کد زیر، به RabbitMQ خود، متصل شوید:

```go
package main

import (
	"fmt"
	"log"
	"os"
	"github.com/streadway/amqp"
	"github.com/joho/godotenv"
)

func checkRabbitMQConnection() bool {
	err := godotenv.Load()
	if err != nil {
		log.Fatalf("error in loading .env: %v", err)
	}

	rabbitHost := os.Getenv("RABBITMQ_HOST")
	rabbitPort := os.Getenv("RABBITMQ_PORT")
	rabbitUser := os.Getenv("RABBITMQ_USER")
	rabbitPass := os.Getenv("RABBITMQ_PASS")

	rabbitURL := fmt.Sprintf("amqp://%s:%s@%s:%s/", rabbitUser, rabbitPass, rabbitHost, rabbitPort)

	conn, err := amqp.Dial(rabbitURL)
	if err != nil {
		fmt.Println("connection failed, error:", err)
		return false
	}
	defer conn.Close()

	fmt.Println("connection successful")
	return true
}

func main() {
	if checkRabbitMQConnection() {
		fmt.Println("connection successful.")
	} else {
		fmt.Println("connection failed.")
	}
}
```

## all links

[All links of docs](https://docs.liara.ir/all-links-llms.txt)
