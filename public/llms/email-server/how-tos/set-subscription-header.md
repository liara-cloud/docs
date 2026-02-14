Original link: https://docs.liara.ir/email-server/how-tos/set-subscription-header/

# فعال‌سازی هدر Subscription در ایمیل‌سرور

هدرهای مربوط به Subscription در ایمیل‌ها، به کاربران اجازه می‌دهد تا از دریافت ایمیل‌های خاص معاف شوند یا اینکه مشتاقانه از دریافت آن‌ها لذت ببرند.  
دلیل دیگر استفاده از این هدرها، اسپم نشدن ایمیل‌های شما است. اگر کاربران از دریافت ایمیل‌های شما خسته شدند، می‌توانند از دکمه خروجی این هدرها استفاده کنند تا ایمیل‌های شما به اسپم نرود و دیگر  
برای کاربران غیر مشتاق، ارسال نشود.  

![mail_with_subscriptions](https://media.liara.ir/email-server/subscription-header.png)

به‌صورت کلی، هدر Subscription دو بخش دارد:  

- هدر `List-Subscribe`: برای پیوستن کاربران به اشتراک برای دریافت ایمیل‌ها، استفاده می‌شود.
- هدر `List-Unsubscribe`: برای لغو اشتراک و عدم دریافت ایمیل‌ها، استفاده می‌شود.

برای اینکه گوگل و سایر سرویس‌دهندگان ایمیل دکمه لغو اشتراک (Unsubscribe) را در ایمیل‌های شما نمایش دهند، باید در ابتدا، طبق قوانین ضد اسپم مانند CAN-SPAM Act، امکان لغو اشتراک از دریافت ایمیل‌ها را بدهید و فرآیند آن ساده و سریع باشد. علاوه بر این، ایمیل‌های  
شما باید مطابق با استانداردهای ضد اسپم ارسال شوند و برای ایجاد اعتبار، نیاز به سابقه ارسال ایمیل‌های معتبر و بدون گزارش اسپم دارید. در نهایت، ارسال ایمیل‌های با محتوای مناسب و تعامل مثبت کاربران به مرور اعتبار شما را افزایش می‌دهد و این امکان را می‌دهد که سرویس‌ها دکمه Unsubscribe را به طور خودکار در ایمیل‌های شما اضافه کنند.

## استفاده از هدرهای Subscription در کد
در صورتی که برای ارسال ایمیل از [پلتفرم خاصی](https://docs.liara.ir/email-server/how-tos/connect-via-platform/about) استفاده می‌کنید و قصد دارید که ایمیل‌های ارسالی  
به همراه هدرهای Subscription ارسال شوند؛ می‌توانید از قطعه کدهای زیر، استفاده کنید:

## NodeJS

```js
const nodemailer = require("nodemailer");

async function sendEmail() {
    let transporter = nodemailer.createTransport({
        host: "smtp.c1.liara.email",
        port: 465,
        secure: true,
        auth: {
            user: "your-smtp-user",
            pass: "your-smtp-pass"
        }
    });

    let mailOptions = {
        from: "info@example.com",
        to: "someguy@example.com",
        subject: "Test Email",
        text: "Hello, this is a test email sent from Node.js using your SMTP server.",
        list: {
            unsubscribe: {
                url: 'http://example.com',
                comment: 'Unsubscribe'
            },
            subscribe: [
                '<mailto:admin@example.com?subject=subscribe>',
                {
                    url: 'http://example.com',
                    comment: 'Subscribe'
                }
            ]
        }
    };

    try {
        let info = await transporter.sendMail(mailOptions);
        console.log("Email sent: " + info.messageId);
    } catch (error) {
        console.error("Error sending email:", error);
    }
}

sendEmail();
```

## NextJS

```js
import nodemailer from "nodemailer";

export default async function handler(req, res) {
    if (req.method !== "POST") {
        return res.status(405).json({ error: "Method Not Allowed" });
    }

    try {
        let transporter = nodemailer.createTransport({
            host: "smtp.c1.liara.email",
            port: 465,
            secure: true,
            auth: {
                user: "your-smtp-user",
                pass: "your-smtp-pass"
            }
        });

        let mailOptions = {
            from: "info@example.com",
            to: "someguy@example.com",
            subject: "Test Email",
            text: "Hello, this is a test email sent from Next.js.",
            list: {
                subscribe: [
                    '<mailto:admin@example.com?subject=subscribe>',
                    {
                        url: "http://www.example.com/subscribe",
                        comment: "Subscribe"
                    }
                ],
                unsubscribe: {
                    url: "http://www.example.com/unsubscribe",
                    comment: "Unsubscribe"
                }
            }
        };

        let info = await transporter.sendMail(mailOptions);
        console.log("Email sent:", info.messageId);

        return res.status(200).json({ message: "Email sent successfully!" });
    } catch (error) {
        console.error("Error sending email:", error);
        return res.status(500).json({ error: "Failed to send email." });
    }
}
```

## Laravel

```laravel
use Illuminate\Support\Facades\Mail;

Mail::raw('Hello, this is a test email sent from Laravel.', function ($message) {
    $message->to('someguy@example.com')
        ->from('info@example.com', 'Looms')
        ->subject('Test Email')
        ->withSwiftMessage(function ($swiftMessage) {
            $headers = $swiftMessage->getHeaders();
            $headers->addTextHeader('List-Subscribe', '<http://www.example.com/subscribe> (Click here to subscribe to our mailing list)');
            $headers->addTextHeader('List-Unsubscribe', '<http://www.example.com/unsubscribe> (Click here to unsubscribe to our mailing list)');
        });
});
```

## PHP

```php
<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'vendor/autoload.php';

$mail = new PHPMailer(true);

try {
    $mail->isSMTP();
    $mail->Host = 'smtp.c1.liara.email';
    $mail->SMTPAuth = true;
    $mail->Username = 'your-smtp-user';
    $mail->Password = 'your-smtp-pass';
    $mail->SMTPSecure = 'ssl';
    $mail->Port = 465;

    $mail->setFrom('info@example.com', 'Looms');
    $mail->addAddress('someguy@example.com');

    $mail->Subject = 'Test Email';
    $mail->Body = 'Hello, this is a test email sent from PHP.';

    $mail->addCustomHeader('List-Subscribe', '<http://www.example.com/subscribe> (Click here to subscribe to our mailing list)');
    $mail->addCustomHeader('List-Unsubscribe', '<http://www.example.com/unsubscribe> (Click here to unsubscribe to our mailing list)');

    $mail->send();
    echo 'Email sent successfully!';
} catch (Exception $e) {
    echo "Email could not be sent. Mailer Error: {$mail->ErrorInfo}";
}
?>
```

## Django

```py
from django.core.mail import EmailMessage

def send_email():
    email = EmailMessage(
        "Test Email",
        "Hello, this is a test email sent from Django.",
        "info@example.com",
        ["someguy@example.com"],
    )

    email.extra_headers = {
        "List-Subscribe": "<http://www.example.com/subscribe> (Click here to subscribe to our mailing list)",
        "List-Unsubscribe": "<http://www.example.com/unsubscribe> (Click here to unsubscribe to our mailing list)"
    }

    email.send()
    return "Email sent successfully!"

send_email()
```

## Flask

```flask
from flask import Flask
import smtplib
from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText

app = Flask(__name__)

@app.route("/send_email")
def send_email():
    smtp_host = "smtp.c1.liara.email"
    smtp_port = 465
    smtp_user = "your-smtp-user"
    smtp_password = "your-smtp-pass"

    sender_email = "info@example.com"
    receiver_email = "someguy@example.com"
    subject = "Test Email"
    body = "Hello, this is a test email sent from Flask."

    message = MIMEMultipart()
    message["From"] = sender_email
    message["To"] = receiver_email
    message["Subject"] = subject
    message.attach(MIMEText(body, "plain"))

    message["List-Subscribe"] = "<http://www.example.com/subscribe> (Click here to subscribe to our mailing list)"
    message["List-Unsubscribe"] = "<http://www.example.com/unsubscribe> (Click here to unsubscribe to our mailing list)"

    try:
        with smtplib.SMTP_SSL(smtp_host, smtp_port) as server:
            server.login(smtp_user, smtp_password)
            server.sendmail(sender_email, receiver_email, message.as_string())
        return "Email sent successfully!"
    except Exception as e:
        return f"Error: {e}"

if __name__ == "__main__":
    app.run(debug=True)
```

## .NET

```dotnet
using System;
using System.Net;
using System.Net.Mail;

class Program {
    static void Main() {
        var smtpClient = new SmtpClient("smtp.c1.liara.email") {
            Port = 465,
            Credentials = new NetworkCredential("your-smtp-user", "your-smtp-pass"),
            EnableSsl = true
        };

        var message = new MailMessage("info@example.com", "someguy@example.com", "Test Email", "Hello, this is a test email sent from .NET.")
        {
            Headers = {
                {"List-Subscribe", "<http://www.example.com/subscribe> (Click here to subscribe to our mailing list)"},
                {"List-Unsubscribe", "<http://www.example.com/unsubscribe> (Click here to unsubscribe to our mailing list)"}
            }
        };

        smtpClient.Send(message);
        Console.WriteLine("Email sent successfully!");
    }
}
```

## Go

```go
package main

import (
    "fmt"
    "net/smtp"
)

func main() {
    smtpHost := "smtp.c1.liara.email"
    smtpPort := "465"
    auth := smtp.PlainAuth("", "your-smtp-user", "your-smtp-pass", smtpHost)

    from := "info@example.com"
    to := "someguy@example.com"
    subject := "Test Email"
    body := "Hello, this is a test email sent from Golang."
    headers := "From: " + from + "\r\n" +
        "To: " + to + "\r\n" +
        "Subject: " + subject + "\r\n" +
        "List-Subscribe: <http://www.example.com/subscribe> (Click here to subscribe to our mailing list)\r\n" +
        "List-Unsubscribe: <http://www.example.com/unsubscribe> (Click here to unsubscribe to our mailing list)\r\n\r\n"

    message := []byte(headers + body)

    err := smtp.SendMail(smtpHost+":"+smtpPort, auth, from, []string{to}, message)
    if err != nil {
        fmt.Println("Error:", err)
        return
    }
    fmt.Println("Email sent successfully!")
}
```

## Python

```py
import smtplib
from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText

def send_email():
    
    smtp_host = "smtp.c1.liara.email"        
    smtp_port = 465                 
    smtp_user = "your-smtp-user" 
    smtp_password = "your-smtp-pass"

    # Email details
    sender_email = "info@example.com"  
    receiver_email = "someguy@example.com"  # Receiver's email address
    subject = "Test Email"
    body = "Hello, this is a test email sent from Python using your SMTP server."

    # Set up the MIME
    message = MIMEMultipart()
    message["From"] = sender_email
    message["To"] = receiver_email
    message["Subject"] = subject
    message.attach(MIMEText(body, "plain"))

    message["List-Subscribe"] = "<http://www.example.com/subscribe> (Click here to subscribe to our mailing list)" 
    message["List-Unsubscribe"] = "<http://www.example.com/unsubscribe> (Click here to unsubscribe to our mailing list)" 

    try:
        # Connect to the SMTP server
        with smtplib.SMTP(smtp_host, smtp_port) as server:
            # server.starttls()  # Start TLS encryption (recommended)
            server.login(smtp_user, smtp_password)  # Log in to the SMTP server
            server.sendmail(sender_email, receiver_email, message.as_string())  # Send the email
            print("Email sent successfully!")

    except Exception as e:
        print(f"Error: {e}")

# Run the function to send the email
send_email()
```

> در قطعه کدهای فوق، به‌جای `http://www.example.com/subscribe` و `http://www.example.com/unsubscribe`، آدرس‌های مربوط به صفحه‌های Subscribe و Unsubscribe خود را قرار دهید.  
> همچنین، عبارت `(Click here to subscribe/unsubscribe to our mailing list)` که یک نوع comment می‌باشد را، می‌توانید تغییر دهید. البته  
> این نوع comment در NodeJS و NextJS در فیلد `comment`، قرار می‌گیرد.

## all links

[All links of docs](https://docs.liara.ir/all-links-llms.txt)
