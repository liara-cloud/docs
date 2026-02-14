Original link: https://docs.liara.ir/email-server/how-tos/use-cc-bcc/

# کار با CC و BCC در لیارا

سرورایمیل لیارا، از دو قابلیت BCC و CC پشتیبانی می‌کند و این امکان را به شما می‌دهد تا در
برنامه خود، این قابلیت را فعال کنید. در ادامه به معرفی این دو قابلیت و نحوه استفاده از آن‌ها در ایمیل سرور لیارا، پرداخته شده است. 

## CC چیست؟

CC یا Carbon Copy که به آن رو نوشت نیز می‌گویند، یک روش ساده برای ارسال نسخه‌هایی از یک ایمیل به دیگر افراد، افزون بر گیرنده است.
اگر تاکنون ایمیلی دریافت کرده‌اید که CC شده باشد، احتمالاً متوجه شده‌اید که ایمیل هم به شما و هم به فهرستی از افراد دیگر که CC شده‌اند، ارسال شده است.
وقتی از CC استفاده شود؛ می‌توانید فهرست دریافت‌کنندگان را ببینید:

![cc usage example email server](https://media.liara.ir/email-server/cc-usage-example-email-server.png)

## BCC چیست؟

BCC یا Blind Carbon Copy مانند CC، روشی برای ارسال نسخه‌هایی از یک ایمیل به دیگران است؛ با این تفاوت که اگر BCC شوید، نمی‌توانید فهرست دریافت‌کنندگان را ببینید، سایر دریافت‌کنندگان نیز، نمی‌توانند ببینند که فرد دیگری، نسخه‌ای از ایمیل را دریافت کرده است.

## نحوه استفاده از قابلیت CC و BCC

### NodeJS

```javascript
const mailOptions = {
from: `"my app" <${process.env.MAIL_FROM}>`, 
to: 'info@example.com',
cc: ["example.one@example.com", "example.two@example.com"], // replace with real e-mails
// bcc: ["example.one@example.com", "example.two@example.com"], 
subject: 'Test Email', 
text: 'This is a test email sent from Node.js', 
html: '<b>This is a test email sent from Node.js</b>', 
};
```

### NextJS

```javascript
const mailOptions = {
from: `"My App" <${process.env.MAIL_FROM}>`,
to: 'test@example.com', 
cc: ["example.one@example.com", "example.two@example.com"], // replace with real e-mails
// bcc: ["example.one@example.com", "example.two@example.com"], 
subject: 'Test Email', 
text: 'This is a test email sent from a Next.js API route!',
html: '<b>This is a test email sent from a Next.js API route!</b>',
};
```

### Laravel

```laravel
// routes/web.php
<?php

use Illuminate\Support\Facades\Route;

Route::get('/', function () {
return view('welcome');
});

use App\Mail\TestEmail;
use Illuminate\Support\Facades\Mail;
Route::get('/send-test-email', function () {
Mail::to('test@example.com')
->cc(['test.one@example.com', 'test.two@example.com'])
// ->bcc(['test.one@example.com', 'test.two@example.com'])
->send(new TestEmail());
return 'Test email sent successfully!';
});
```

### PHP

```php
<?php
require 'vendor/autoload.php'; 

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;
use Dotenv\Dotenv;

$dotenv = Dotenv::createImmutable(__DIR__);
$dotenv->load();

$mail = new PHPMailer(true);

try {
$mail->isSMTP();
$mail->Host       = $_ENV['MAIL_HOST'];
$mail->SMTPAuth   = true;
$mail->Username   = $_ENV['MAIL_USER'];
$mail->Password   = $_ENV['MAIL_PASSWORD'];
$mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS; 
$mail->Port       = $_ENV['MAIL_PORT'];

$mail->setFrom($_ENV['MAIL_FROM_ADDRESS'], $_ENV['MAIL_FROM_NAME']);
$mail->addAddress('test@example.com');

// CC:
$mail->addCC('test.one@example.com');
$mail->addCC('test.two@example.com');
$mail->addCC('test.three@example.com');

// BCC:
// $mail->addBCC('test.one@example.com');
// $mail->addBCC('test.two@example.com');
// $mail->addBCC('test.three@example.com');

$mail->isHTML(true);                                  
$mail->Subject = 'Test Email';
$mail->Body    = 'This is a test email sent using PHPMailer and SMTP.';
$mail->AltBody = 'This is the plain text version of the email content.';

$mail->send();
echo 'Email has been sent successfully!';
} catch (Exception $e) {
echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
}
```

### Python

```python
import os
import smtplib
from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText

# # uncomment in development mode: 
# from dotenv import load_dotenv # pip install dotenv
# load_dotenv()

MAIL_HOST = os.getenv('MAIL_HOST')
MAIL_PORT = int(os.getenv('MAIL_PORT', 587))
MAIL_USER = os.getenv('MAIL_USER')
MAIL_PASSWORD = os.getenv('MAIL_PASSWORD')
MAIL_FROM_ADDRESS = os.getenv('MAIL_FROM_ADDRESS')

def send_email(to_address, subject, body):
msg = MIMEMultipart()
msg['From'] = MAIL_FROM_ADDRESS
msg['To'] = to_address
msg['Subject'] = subject
msg['CC'] = 'test.one@example.com, test.two@example.com'
# msg['BCC'] = 'test.three@example.com,'
msg.attach(MIMEText(body, 'plain'))

try:
server = smtplib.SMTP(MAIL_HOST, MAIL_PORT)
server.starttls()  
server.login(MAIL_USER, MAIL_PASSWORD)  
server.send_message(msg)  
print("Email sent successfully")
except Exception as e:
print("Failed to send email:", e)
finally:
server.quit() 

to_address = 'test@example.com'
subject    = 'Test Email'
body       = 'This is a test email sent from Python using environment variables.'

send_email(to_address, subject, body)
```

### Django

```py
# views.py

from django.core.mail import EmailMessage
from django.http import HttpResponse
from django.conf import settings

def send_test_email(request):
subject = 'Test Email from Django'
message = 'This is a test email sent from Django using SMTP on Liara server.'
recipient_list = ['some@example.com']
cc_email  = ['test.one@example.com', 'test.two@example.com']
# bcc_email = ['test.one@example.com', 'test.two@example.com']

email = EmailMessage(
subject,
message,
settings.EMAIL_FROM_ADDRESS,
recipient_list,
cc=cc_email,
# bcc=bcc_email,
)

email.send(fail_silently=False)
return HttpResponse('Test email sent successfully!')
```

### Flask

```py
from flask import Flask, request
from flask_mail import Mail, Message
import os

# # uncomment in development environment
# from dotenv import load_dotenv
# load_dotenv()

app = Flask(__name__)

app.config['MAIL_SERVER'] = os.getenv('MAIL_HOST')
app.config['MAIL_PORT'] = int(os.getenv('MAIL_PORT'))
app.config['MAIL_USERNAME'] = os.getenv('MAIL_USER')
app.config['MAIL_PASSWORD'] = os.getenv('MAIL_PASSWORD')
app.config['MAIL_USE_TLS'] = True 
app.config['MAIL_USE_SSL'] = False 
app.config['MAIL_DEFAULT_SENDER'] = os.getenv('MAIL_FROM_ADDRESS')

cc_mail = ['alinajmabadizadeh2002@gmail.com', 'alinajmabadi@liara.ir']
# bcc_mail = ['alinajmabadizadeh2002@gmail.com', 'alinajmabadi@liara.ir']

mail = Mail(app)

@app.route('/send-test-email', methods=['GET'])
def send_test_email():
try:
msg = Message(subject='Test Email from Flask',
recipients=['some@looms.ir'],  
body='This is a test email sent from Flask using SMTP on Liara.',
cc=cc_mail,
#   bcc=bcc_mail,
extra_headers = {"x-liara-tag": "test_tag"})

mail.send(msg)
return 'Test email sent successfully!', 200

except Exception as e:
return f'Failed to send email. Error: {str(e)}', 500

if __name__ == '__main__':
app.run(debug=True)
```

### dotnet

```dotnet
using System.Net;
using System.Net.Mail;
using dotenv.net;

DotEnv.Load(); 

var builder = WebApplication.CreateBuilder(args);
var app = builder.Build();

app.MapGet("/send-test-email", async context =>
{
var smtpHost = Environment.GetEnvironmentVariable("MAIL_HOST");
int smtpPort = int.Parse(Environment.GetEnvironmentVariable("MAIL_PORT") ?? "587");
var smtpUser = Environment.GetEnvironmentVariable("MAIL_USER");
var smtpPassword = Environment.GetEnvironmentVariable("MAIL_PASSWORD");
var fromAddress = Environment.GetEnvironmentVariable("MAIL_FROM_ADDRESS") ?? "info@example.com";
var toAddress = "some@example.com"; 


using (var smtpClient = new SmtpClient(smtpHost, smtpPort))
{
smtpClient.EnableSsl = true; 
smtpClient.Credentials = new NetworkCredential(smtpUser, smtpPassword);

var mailMessage = new MailMessage(fromAddress, toAddress)
{
Subject = "Test Email",
Body = "<h2>This is a test email sent from a .NET Core application using SMTP<h2>",
IsBodyHtml = true
};

mailMessage.CC.Add("test.one@example.com");
mailMessage.CC.Add("test.two@example.com");        

// mailMessage.Bcc.Add("test.one@example.com");
// mailMessage.Bcc.Add("test.two@example.com");

try
{
await smtpClient.SendMailAsync(mailMessage);
await context.Response.WriteAsync("Test email sent successfully!");
}
catch (Exception ex)
{
await context.Response.WriteAsync($"Failed to send email: {ex.Message}");
}
}
});

app.Run();
```

### Go

```go
package main

import (
"fmt"
"log"
"os"
"strconv"

// "github.com/joho/godotenv" // uncomment in case of using .env file
gomail "gopkg.in/mail.v2"
)

func main() {

// // uncomment in case of using .env file
// err := godotenv.Load()
// if err != nil {
// 	log.Fatalf("Error loading .env file: %v", err)
// }

host := os.Getenv("MAIL_HOST")

port, err := strconv.Atoi(os.Getenv("MAIL_PORT"))
if err != nil {
panic(err)
}

user := os.Getenv("MAIL_USER")
password := os.Getenv("MAIL_PASSWORD")
from := os.Getenv("MAIL_FROM")

to := "some@example.com"
cc := []string{"test.one@example.com", "test.two@example.com"}
// bcc := []string{"test.one@example.com"}

subject := "Test Email"
body := "This is a test email."

msg := gomail.NewMessage()
msg.SetHeader("From", from)
msg.SetHeader("To", to)
msg.SetHeader("Cc", cc...)
// msg.SetHeader("Bcc", bcc...)
msg.SetHeader("Subject", subject)
msg.SetHeader("x-liara-tag", "test-tag")
msg.SetBody("text/plain", body)

dialer := gomail.NewDialer(host, port, user, password)
dialer.SSL = true

err = dialer.DialAndSend(msg)
if err != nil {
log.Fatalf("Failed to send email: %s", err)
} else {
fmt.Println("Email sent successfully!")
}
}
```

## all links

[All links of docs](https://docs.liara.ir/all-links-llms.txt)
