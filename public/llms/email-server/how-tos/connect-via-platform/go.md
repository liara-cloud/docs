Original link: https://docs.liara.ir/email-server/how-tos/connect-via-platform/go/

# اتصال به ایمیل‌سرور در برنامه‌های go

[Video link](https://media.liara.ir/docs/golang-mail-server.mp4)

> پروژه و کدهای مورد استفاده در ویدیوی فوق در [اینجا](https://github.com/liara-cloud/go-getting-started/tree/email-server) قابل مشاهده و دسترسی هستند.

## SMTPS

برای استفاده از سرویس ایمیل در برنامه‌های go، می‌توانید از  
پکیج gomail استفاده کنید که بایستی با دستور زیر، آن را در پروژه خود، نصب کنید:

```bash
go get gopkg.in/gomail.v2
```

پس از آن، کافیست تا طبق [مستندات SMTP](https://docs.liara.ir/email-server/how-tos/add-smtp-user)، یک دسترسی SMTP و طبق [مستندات افزودن نشانی](https://docs.liara.ir/email-server/how-tos/add-account)، یک نشانی برای ایمیل‌سرور خود، ایجاد کنید.  
در نهایت نیز، بایستی  
اطلاعات مربوط به ایمیل‌سرور خود را  
به متغیرهای محیطی برنامه خود، اضافه کنید؛ به عنوان مثال:

```bash
MAIL_HOST=smtp.c1.liara.email
MAIL_PORT=465
MAIL_USER=cranky_galileo_nhh78l
MAIL_PASSWORD=7ae28d03-2e09-4211-8e79-c3a54ae5798e
MAIL_FROM=info@example.com
```

> مقدار `MAIL_FROM`، باید یکی از نشانی‌های اضافه شده در سرویس ایمیل باشد.

در نهایت می‌توانید در پروژه‌ی خود مانند مثال زیر عمل کرده و با استفاده از دسترسی SMTP سرویس ایمیل لیارا،  
اقدام به ارسال ایمیل‌های تراکنشی کنید: 

```go
package main

import (
	"fmt"
	"log"
	"os"
	"strconv"
	gomail "gopkg.in/mail.v2"
)

func main() {
	// Fetch environment variables
	host := os.Getenv("MAIL_HOST")

	port, err := strconv.Atoi(os.Getenv("MAIL_PORT"))
	if err != nil {
        panic(err)
	}

	user := os.Getenv("MAIL_USER")
	password := os.Getenv("MAIL_PASSWORD")
	from := os.Getenv("MAIL_FROM")

	// Define the email recipient, subject, and body
	to := "recipient@example.com"
	subject := "Test Email"
	body := "This is a test email."

	// Set up the email message
	msg := gomail.NewMessage()
	msg.SetHeader("From", from)
	msg.SetHeader("To", to)
	msg.SetHeader("Subject", subject)
	msg.SetHeader("x-liara-tag", "test-tag")
	msg.SetBody("text/plain", body)

	// Set up the SMTP client 
	dialer := gomail.NewDialer(host, port, user, password)
	dialer.SSL = true // force SSL

	// Send the email
	err = dialer.DialAndSend(msg)
	if err != nil {
		log.Fatalf("Failed to send email: %s", err)
	} else {
		fmt.Println("Email sent successfully!")
	}
}
```

## SMTP

برای استفاده از سرویس ایمیل در برنامه‌های go، می‌توانید از  
پکیج gomail استفاده کنید که بایستی با دستور زیر، آن را در پروژه خود، نصب کنید:

```bash
go get gopkg.in/gomail.v2
```

پس از آن، کافیست تا طبق [مستندات SMTP](https://docs.liara.ir/email-server/how-tos/add-smtp-user)، یک دسترسی SMTP و طبق [مستندات افزودن نشانی](https://docs.liara.ir/email-server/how-tos/add-account)، یک نشانی برای ایمیل‌سرور خود، ایجاد کنید.  
در نهایت نیز، بایستی  
اطلاعات مربوط به ایمیل‌سرور خود را  
به متغیرهای محیطی برنامه خود، اضافه کنید؛ به عنوان مثال:

```bash
MAIL_HOST=smtp.c1.liara.email
MAIL_PORT=587
MAIL_USER=cranky_galileo_nhh78l
MAIL_PASSWORD=7ae28d03-2e09-4211-8e79-c3a54ae5798e
MAIL_FROM=info@example.com
```

> مقدار `MAIL_FROM`، باید یکی از نشانی‌های اضافه شده در سرویس ایمیل باشد.

در نهایت می‌توانید در پروژه‌ی خود مانند مثال زیر عمل کرده و با استفاده از دسترسی SMTP سرویس ایمیل لیارا،  
اقدام به ارسال ایمیل‌های تراکنشی کنید: 

```go
package main

import (
    "fmt"
    "log"
    "os"
    "strconv"

    gomail "gopkg.in/gomail.v2"
)

func main() {
    
    // Get environment variables for SMTP settings
    mailHost := os.Getenv("MAIL_HOST")
    mailPortStr := os.Getenv("MAIL_PORT")
    mailUser := os.Getenv("MAIL_USER")
    mailPassword := os.Getenv("MAIL_PASSWORD")
    mailFrom := os.Getenv("MAIL_FROM")

    // Convert mail port from string to integer
    mailPort, err := strconv.Atoi(mailPortStr)
    if err != nil {
        log.Fatalf("Invalid MAIL_PORT: %v", err)
    }

    // Create a new email message
    m := gomail.NewMessage()
    m.SetHeader("From", mailFrom)
    m.SetHeader("To", "recipient@example.com") // Set recipient email here
    m.SetHeader("Subject", "Test Email from Go with HTML")
    m.SetHeader("x-liara-tag", "test-tag") // Custom header for tagging

    // Set HTML body for the email
    m.SetBody("text/html", `
        <h1>This is a test email</h1>
        Sent from Go using <b>gomail</b> and SMTP with TLS.
    `)

    // Create SMTP dialer with TLS
    d := gomail.NewDialer(mailHost, mailPort, mailUser, mailPassword)

    // Send the email
    if err := d.DialAndSend(m); err != nil {
        log.Fatalf("Failed to send email: %v", err)
    }

    fmt.Println("Test email sent successfully!")
}
```

## HTTP

برای ارسال ایمیل با استفاده از پروتکل HTTP، به [API لیارا](https://docs.liara.ir/references/api/about/) و [آیدی ایمیل‌سرور](https://docs.liara.ir/email-server/details/mail-id)  
و [نشانی ایمیل‌سرور](https://docs.liara.ir/email-server/how-tos/add-account) نیاز خواهید داشت.  
برای این‌کار، اطلاعات مربوطه را مشابه زیر به متغیرهای محیطی برنامه خود، اضافه کنید:

```bash
MAIL_SERVER_ID=***
MAIL_SERVICE_URL=https://mail-service.iran.liara.ir/api/v1/mails
LIARA_API_TOKEN=***
MAIL_FROM=info@example.com
```

> مقدار فیلد `MAIL_FROM` باید یکی از نشانی‌های اضافه شده در سرویس ایمیل باشد.

در ادامه، باید پکیج‌های زیر را برای ارسال ایمیل، نصب کنید: 

```bash
go get -u github.com/go-resty/resty/v2
go get -u github.com/joho/godotenv
```

در نهایت می‌توانید در پروژه‌ی خود مانند مثال زیر عمل کرده و با استفاده از پروتکل HTTP، اقدام به ارسال ایمیل‌های تراکنشی کنید:

```bash
package main

import (
	"fmt"
	"log"
	"os"

	"github.com/go-resty/resty/v2"
	"github.com/joho/godotenv"
)

// LoadEnv loads environment variables from .env file
func LoadEnv() {
	err := godotenv.Load()
	if err != nil {
		log.Fatal("Error loading .env file")
	}
}

// SendEmail sends an email using Liara Mail Service
func SendEmail(to, subject, text string) {
	// Load environment variables
	LoadEnv()

	mailServerID := os.Getenv("MAIL_SERVER_ID")
	mailServiceURL := os.Getenv("MAIL_SERVICE_URL")
	mailServiceToken := os.Getenv("LIARA_API_TOKEN")
	defaultFromEmail := os.Getenv("MAIL_FROM")

	// Define API endpoint
	url := fmt.Sprintf("%s/%s/messages", mailServiceURL, mailServerID)

	// Create email payload
	data := map[string]interface{}{
		"text":       text,
		"subject":    subject,
		"to":         to,
		"from":       defaultFromEmail,
		"attachments": []interface{}{},
	}

	// Send HTTP request using Resty
	client := resty.New()
	resp, err := client.R().
		SetHeader("Authorization", "Bearer "+mailServiceToken).
		SetHeader("Content-Type", "application/json").
		SetHeader("x-liara-tag", "golang_email"). // Custom tag
		SetBody(data).
		Post(url)

	if err != nil {
		log.Fatalf("Error sending email: %v", err)
	}

	// Print response
	fmt.Println("Response Status:", resp.Status())
	fmt.Println("Response Body:", resp.String())
}

func main() {
	// Send an email
	SendEmail("info@looms.ir", "Hello from Golang", "Testing Liara Mail Service in Golang!")
}
```

> همچنین بخوانید: [پورت‌های ایمیل‌سرور لیارا](https://docs.liara.ir/email-server/details/ports/)

## all links

[All links of docs](https://docs.liara.ir/all-links-llms.txt)
