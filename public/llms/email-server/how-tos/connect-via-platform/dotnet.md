Original link: https://docs.liara.ir/email-server/how-tos/connect-via-platform/dotnet/

# اتصال به ایمیل‌سرور در برنامه‌های NET.

[Video link](https://media.liara.ir/dotnet/dotnet-email-server.mp4)

> پروژه و کدهای مورد استفاده در ویدیوی فوق در [اینجا](https://github.com/liara-cloud/dotnet-getting-started/tree/email-server) قابل مشاهده و دسترسی هستند.

## SMTPS

برای استفاده از سرویس ایمیل در برنامه‌های NET. 
کافیست تا طبق [مستندات SMTP](https://docs.liara.ir/email-server/how-tos/add-smtp-user)، یک دسترسی SMTP و طبق [مستندات افزودن نشانی](https://docs.liara.ir/email-server/how-tos/add-account)، یک نشانی برای ایمیل‌سرور خود، ایجاد کنید.
در نهایت نیز، بایستی 
اطلاعات مربوط به ایمیل‌سرور خود را 
به متغیرهای محیطی برنامه خود، اضافه کنید؛ به عنوان مثال:

```bash
MAIL_HOST=smtp.c1.liara.email
MAIL_PORT=465
MAIL_USER=hopeful_zhukovsky_9daqpv
MAIL_PASSWORD=fbef30d7-f852-428e-9573-bc73381c7d4d
MAIL_FROM_ADDRESS=info@example.com
```

> مقدار فیلد `MAIL_FROM_ADDRESS` باید یکی از نشانی‌های اضافه شده در سرویس ایمیل باشد.

در ادامه، بایستی با اجرای دستور زیر، ماژول موردنیاز ارسال ایمیل را در پروژه خود، دانلود و نصب کنید:  

```bash
dotnet add package MailKit
```

در نهایت می‌توانید در پروژه‌ی خود مانند مثال زیر عمل کرده و با استفاده از دسترسی SMTP سرویس ایمیل لیارا، 
اقدام به ارسال ایمیل‌های تراکنشی کنید:  

```dotnet
using MailKit.Net.Smtp;
using MimeKit;

var builder = WebApplication.CreateBuilder(args);

// Load environment variables
var smtpHost = Environment.GetEnvironmentVariable("MAIL_HOST") ?? "smtp.c1.liara.email";
var smtpPort = int.Parse(Environment.GetEnvironmentVariable("MAIL_PORT") ?? "465");
var smtpUser = Environment.GetEnvironmentVariable("MAIL_USER") ?? "";
var smtpPassword = Environment.GetEnvironmentVariable("MAIL_PASSWORD") ?? "";
var mailFromAddress = Environment.GetEnvironmentVariable("MAIL_FROM_ADDRESS") ?? "";

var app = builder.Build();

app.MapGet("/", async context =>
{
    var recipientEmail = "recipient@example.com"; // Replace with recipient email

    // Create the email
    var email = new MimeMessage();
    email.From.Add(MailboxAddress.Parse(mailFromAddress));
    email.To.Add(MailboxAddress.Parse(recipientEmail));
    email.Subject = "Test Email";
    email.Body = new TextPart("plain")
    {
        Text = "This is a test email sent using explicit TLS without STARTTLS."
    };

    // Add custom header
    email.Headers.Add("x-liara-tag", "test-tag");

    try
    {
        // Send the email
        using var client = new SmtpClient();
        await client.ConnectAsync(smtpHost, smtpPort, MailKit.Security.SecureSocketOptions.SslOnConnect);
        await client.AuthenticateAsync(smtpUser, smtpPassword);
        await client.SendAsync(email);
        await client.DisconnectAsync(true);

        // Respond to the client
        await context.Response.WriteAsync("Email sent successfully with custom header!");
    }
    catch (Exception ex)
    {
        // Handle errors and respond to the client
        await context.Response.WriteAsync($"Failed to send email: {ex.Message}");
    }
});

app.Run();
```

برای استفاده از ایمیل‌سرور در کنترلر، می‌توانید مشابه قطعه کد زیر، عمل کنید:

```csharp
using MailKit.Net.Smtp;
using MimeKit;
using Microsoft.AspNetCore.Mvc;

namespace EmailSenderApp.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EmailController : ControllerBase
    {
        // Load environment variables (or use default values)
        private readonly string smtpHost = Environment.GetEnvironmentVariable("MAIL_HOST") ?? "smtp.c1.liara.email";
        private readonly int smtpPort = int.Parse(Environment.GetEnvironmentVariable("MAIL_PORT") ?? "465");
        private readonly string smtpUser = Environment.GetEnvironmentVariable("MAIL_USER") ?? "";
        private readonly string smtpPassword = Environment.GetEnvironmentVariable("MAIL_PASSWORD") ?? "";
        private readonly string mailFromAddress = Environment.GetEnvironmentVariable("MAIL_FROM_ADDRESS") ?? "";

        [HttpGet("send-test-email")]
        public async Task<IActionResult> SendTestEmail()
        {
            var recipientEmail = "recipient@example.com"; // Replace with recipient email

            // Create the email
            var email = new MimeMessage();
            email.From.Add(MailboxAddress.Parse(mailFromAddress));
            email.To.Add(MailboxAddress.Parse(recipientEmail));
            email.Subject = "Test Email";
            email.Body = new TextPart("plain")
            {
                Text = "This is a test email sent using explicit TLS without STARTTLS."
            };

            // Add custom header
            email.Headers.Add("x-liara-tag", "test-tag");

            try
            {
                // Send the email
                using var client = new SmtpClient();
                await client.ConnectAsync(smtpHost, smtpPort, MailKit.Security.SecureSocketOptions.SslOnConnect);
                await client.AuthenticateAsync(smtpUser, smtpPassword);
                await client.SendAsync(email);
                await client.DisconnectAsync(true);

                // Return success response
                return Ok("Email sent successfully with custom header!");
            }
            catch (Exception ex)
            {
                // Handle errors and return error response
                return StatusCode(500, $"Failed to send email: {ex.Message}");
            }
        }
    }
}
```

## SMTP

برای استفاده از سرویس ایمیل در برنامه‌های NET. 
کافیست تا طبق [مستندات SMTP](https://docs.liara.ir/email-server/how-tos/add-smtp-user)، یک دسترسی SMTP و طبق [مستندات افزودن نشانی](https://docs.liara.ir/email-server/how-tos/add-account)، یک نشانی برای ایمیل‌سرور خود، ایجاد کنید.
در نهایت نیز، بایستی 
اطلاعات مربوط به ایمیل‌سرور خود را 
به متغیرهای محیطی برنامه خود، اضافه کنید؛ به عنوان مثال:

```bash
MAIL_HOST=smtp.c1.liara.email
MAIL_PORT=587
MAIL_USER=hopeful_zhukovsky_9daqpv
MAIL_PASSWORD=fbef30d7-f852-428e-9573-bc73381c7d4d
MAIL_FROM_ADDRESS=info@example.com
```

> مقدار فیلد `MAIL_FROM_ADDRESS` باید یکی از نشانی‌های اضافه شده در سرویس ایمیل باشد.

در نهایت می‌توانید در پروژه‌ی خود مانند مثال زیر عمل کرده و با استفاده از دسترسی SMTP سرویس ایمیل لیارا، 
اقدام به ارسال ایمیل‌های تراکنشی کنید:  

```dotnet
using System.Net;
using System.Net.Mail;
using dotenv.net;

DotEnv.Load(); // Load the environment variables from .env file

var builder = WebApplication.CreateBuilder(args);
var app = builder.Build();

app.MapGet("/send-test-email", async context =>
{
    // Read SMTP settings from environment variables
    var smtpHost = Environment.GetEnvironmentVariable("MAIL_HOST");
    int smtpPort = int.Parse(Environment.GetEnvironmentVariable("MAIL_PORT") ?? "587");
    var smtpUser = Environment.GetEnvironmentVariable("MAIL_USER");
    var smtpPassword = Environment.GetEnvironmentVariable("MAIL_PASSWORD");
    var fromAddress = Environment.GetEnvironmentVariable("MAIL_FROM_ADDRESS") ?? "info@example.com";
    var toAddress = "recipient@example.com"; // Replace with recipient's email address

    // Create a new SmtpClient
    using (var smtpClient = new SmtpClient(smtpHost, smtpPort))
    {
        smtpClient.EnableSsl = true; // Use STARTTLS encryption
        smtpClient.Credentials = new NetworkCredential(smtpUser, smtpPassword);

        // Create the email message
        var mailMessage = new MailMessage(fromAddress, toAddress)
        {
            Subject = "Test Email",
            Body = "<h2>This is a test email sent from a .NET Core application using SMTP<h2>",
            IsBodyHtml = true
        };

        // Add custom headers
        mailMessage.Headers.Add("x-liara-tag", "test-tag");

        // Send the email
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

> با تنظیم `EnableSsl = true`، می‌توانید به‌صورت امن اقدام به ارسال ایمیل‌های تراکنشی کنید.

برای استفاده از ایمیل‌سرور در کنترلر، می‌توانید مشابه قطعه کد زیر، عمل کنید:

```csharp
using MimeKit;
using MailKit.Net.Smtp;
using DotNetEnv; // for install this, run: dotnet install add package DotNetEnv

namespace your_project_name.Controllers; 

public class TestController : Controller
{
    [HttpPost]
    public IActionResult SendEmail(string email)
    {   
        // Email Information  
        Env.Load();
        string senderName  = Env.GetString("SENDER_NAME");
        string senderEmail = Env.GetString("SENDER_ADDRESS");
        string subject     = Env.GetString("EMAIL_SUBJECT");
        string body        = Env.GetString("EMAIL_BODY");

        // Email Instance
        var message = new MimeMessage();
        message.From.Add(new MailboxAddress(senderName, senderEmail));
        message.To.Add(new MailboxAddress("Recipient", email));
        message.Subject = subject;

        // Creating The Body 
        message.Body = new TextPart("plain")
        {
            Text = body
        };

        try
        {
            // Sending Email 
            using (var client = new SmtpClient())
            {
                client.Connect(Env.GetString("MAIL_HOST"), Env.GetInt("MAIL_PORT"), false);
                client.Authenticate(Env.GetString("MAIL_USERNAME"), Env.GetString("MAIL_PASSWORD"));
                client.Send(message);
                client.Disconnect(true);
            }

            ViewBag.Message = "Email Sent Successfully.";
        }
        catch (Exception ex)
        {
            ViewBag.Message = $"Error In Sending Email: {ex.Message}";
        }


        return RedirectToAction("Index");
    }

}
```

## HTTP

برای ارسال ایمیل با استفاده از پروتکل HTTP، به [API لیارا](https://docs.liara.ir/references/api/about/) و [آیدی ایمیل‌سرور](https://docs.liara.ir/email-server/details/mail-id)  
و [نشانی ایمیل‌سرور](https://docs.liara.ir/email-server/how-tos/add-account) نیاز خواهید داشت. 
برای این‌کار، اطلاعات مربوطه را مشابه زیر در فایل `appsettings.json` قرار دهید:

```json
{
  "LiaraMail": {
    "MailServerId": "66efbaf4b153ef13b8807347",
    "MailServiceUrl": "https://mail-service.iran.liara.ir/api/v1/mails",
    "LIARA_API_TOKEN": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySUQiOiI2NGU3NDRjYmIxYWM3OTcyYTZlMGM3ZTQiLCJ0eXBlIjoiYXV0aCIsImlhdCI6MTczMTQwNTIwM30.ynfNoJcmOiY1Ie9eGu4frGbyTihdYLfsx5tumVdbIOI",
    "MAIL_FROM": "contact@looms.ir"
  }
}
```

> مقدار فیلد `MAIL_FROM_EMAIL` باید یکی از نشانی‌های اضافه شده در سرویس ایمیل باشد.

در ادامه، باید پکیج‌های زیر را برای ارسال ایمیل، نصب کنید:  

```bash
dotnet add package System.Net.Http.Json
dotnet add package Microsoft.Extensions.Configuration.Json
```

سپس، در مسیر اصلی پروژه، یک فایل به نام `EmailService.cs` ایجاد کنید و قطعه کد زیر را درون آن قرار دهید:  

```bash
using System;
using System.Net.Http;
using System.Net.Http.Json;
using System.Text.Json;
using Microsoft.Extensions.Configuration;
using System.Threading.Tasks;

public class EmailService
{
    private readonly HttpClient _httpClient;
    private readonly string _mailServerId;
    private readonly string _mailServiceUrl;
    private readonly string _liaraApiToken;
    private readonly string _mail_from;

    public EmailService()
    {
        // Load configuration from appsettings.json
        var config = new ConfigurationBuilder()
            .AddJsonFile("appsettings.json", optional: false, reloadOnChange: true)
            .Build();

        var mailSettings = config.GetSection("LiaraMail");
        _mailServerId = mailSettings["MailServerId"];
        _mailServiceUrl = mailSettings["MailServiceUrl"];
        _liaraApiToken = mailSettings["LIARA_API_TOKEN"];
        _mail_from = mailSettings["MAIL_FROM"];

        _httpClient = new HttpClient();
    }

    public async Task SendEmailAsync(string to, string subject, string text)
    {
        var url = $"{_mailServiceUrl}/{_mailServerId}/messages";

        var request = new
        {
            text = text,
            subject = subject,
            to = to,
            from = _MAIL_FROM,
            attachments = new object[] { }
        };

        var requestMessage = new HttpRequestMessage(HttpMethod.Post, url)
        {
            Content = JsonContent.Create(request)
        };

        requestMessage.Headers.Add("Authorization", $"Bearer {_liaraApiToken}");
        requestMessage.Headers.Add("x-liara-tag", "dotnet_email"); // Custom tag

        try
        {
            var response = await _httpClient.SendAsync(requestMessage);
            response.EnsureSuccessStatusCode();
            Console.WriteLine("Email sent successfully!");
        }
        catch (Exception ex)
        {
            Console.WriteLine($"Error sending email: {ex.Message}");
        }
    }
}
```

در نهایت، قطعه کد زیر را در فایل `Program.cs` قرار دهید و بعد از آن، می‌توانید اقدام به ارسال ایمیل، بفرمایید:  

```bash
using System;
using System.Threading.Tasks;

class Program
{
    static async Task Main()
    {
        var emailService = new EmailService();
        await emailService.SendEmailAsync("receiver@example.com", "Hello from .NET", "Testing Liara Mail Service in .NET!");
    }
}
```

> همچنین بخوانید: [پورت‌های ایمیل‌سرور لیارا](https://docs.liara.ir/email-server/details/ports/)

## all links

[All links of docs](https://docs.liara.ir/all-links-llms.txt)
