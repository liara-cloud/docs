Original link: https://docs.liara.ir/paas/go/how-tos/set-logs/

# تنظیم لاگ‌ها

شما می‌توانید با استفاده از ماژول‌ها و روش‌های متفاوتی، لاگ‌های منحصر به فرد خود را در برنامه go ایجاد کنید که طبق [مستندات گزارشات نرم‌افزاری](https://docs.liara.ir/paas/details/observations/software)، در دسترس شما قرار می‌گیرد
و می‌توانید در هر قسمتی از پردازش برنامه، آن‌ها را ببینید. در ادامه، چند تا از معروف‌ترین روش‌های تنظیم لاگ در go، برای شما قرار گرفته است: 

## ماژول log
کتابخانه `log` برای درج لاگ‌های ساده مناسب است؛ در ادامه، مثالی از استفاده این ماژول، قرار گرفته است:

```go
package main

import (
	"log"
)

func main() {
	// set flags
	log.SetFlags(log.Ldate | log.Ltime | log.Lshortfile)

	// display logs
	log.Println("this is a log")
	log.Printf("Log with a variable: %d", 123)
}

```

برای لاگ‌گیری پیشرفته‌تر، می‌توانید از کتابخانه‌هایی مثل `logrus` یا `zap` استفاده کنید.

## ماژول logrus
برای تنظیم لاگ‌ها با استفاده از این ماژول، در ابتدا باید با اجرای دستور زیر، آن را در پروژه خود، نصب کنید: 

```go
go get -u github.com/sirupsen/logrus
```

در نهایت، می‌توانید مشابه قطعه کد زیر، لاگ‌های خود را تنظیم کنید: 

```go
package main

import (
	"github.com/sirupsen/logrus"
)

func main() {
	log := logrus.New()

	// set format
	log.SetFormatter(&logrus.TextFormatter{})

	// set logs on termianl
	log.SetOutput(os.Stdout)

	// display logs
	log.Info("this is info")
	log.Warn("this is warning")
	log.Error("this is error")
}

```

## ماژول zap
برای تنظیم لاگ‌ها با استفاده از این ماژول، در ابتدا باید با اجرای دستور زیر، آن را در پروژه خود، نصب کنید: 

```go
go get -u go.uber.org/zap
```

در ادامه، می‌توانید مشابه قطعه کد زیر، لاگ‌های خود را تنظیم کنید: 

```go
package main

import (
	"go.uber.org/zap"
)

func main() {
	// set logger to development
	logger, _ := zap.NewDevelopment()
	defer logger.Sync()

	// send logs to terminal
	logger.Info("this is info",
		zap.String("type", "example"),
		zap.Int("amount", 3),
	)
	logger.Error("this is error")
}

```

البته در نظر داشته باشید که قطعه کدهای فوق، صرفاً چندتا از راه‌های تنظیم لاگ است و شما می‌توانید از روش‌های دیگری نیز، استفاده کنید!

## all links

[All links of docs](https://docs.liara.ir/all-links-llms.txt)
