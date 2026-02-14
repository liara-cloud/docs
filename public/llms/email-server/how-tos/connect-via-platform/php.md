Original link: https://docs.liara.ir/email-server/how-tos/connect-via-platform/php/

# اتصال به ایمیل‌سرور در برنامه‌های PHP

[Video link](https://media.liara.ir/php/php-email-server.mp4)

> پروژه و کدهای مورد استفاده در ویدیوی فوق در [اینجا](https://github.com/liara-cloud/php-getting-started/tree/email-server) قابل مشاهده و دسترسی هستند.

## SMTPS

برای استفاده از سرویس ایمیل در برنامه‌های PHP، می‌توانید از  
پکیج phpmailer استفاده کنید که بایستی با دستور زیر، آن را در پروژه خود، نصب کنید:


```bash
composer require phpmailer/phpmailer
# composer require vlucas/phpdotenv phpmailer/phpmailer # for dotenv
```

پس از آن، کافیست تا طبق [مستندات SMTP](https://docs.liara.ir/email-server/how-tos/add-smtp-user)، یک دسترسی SMTP و طبق [مستندات افزودن نشانی](https://docs.liara.ir/email-server/how-tos/add-account)، یک نشانی برای ایمیل‌سرور خود، ایجاد کنید.  
در نهایت نیز، بایستی  
اطلاعات مربوط به ایمیل‌سرور خود را  
به متغیرهای محیطی برنامه خود، اضافه کنید؛ به عنوان مثال:


```bash
MAIL_HOST=smtp.c1.liara.email
MAIL_PORT=465
MAIL_USER=happy_motse_sng2rc
MAIL_PASSWORD=6e5617f9-19ab-4c93-b0ca-34ec7312c387
MAIL_FROM_ADDRESS=info@example.com
MAIL_FROM_NAME=my-app

```

> مقدار فیلد `MAIL_FROM_ADDRESS` باید یکی از نشانی‌های اضافه شده در سرویس ایمیل باشد.

در نهایت می‌توانید در پروژه‌ی خود مانند مثال زیر عمل کرده و با استفاده از دسترسی SMTP سرویس ایمیل لیارا،  
اقدام به ارسال ایمیل‌های تراکنشی کنید:  


```php
<?php

require 'vendor/autoload.php';

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;
use Dotenv\Dotenv;

// Load environment variables from .env
$dotenv = Dotenv::createImmutable(__DIR__);
$dotenv->load();

// PHPMailer Configuration
$mail = new PHPMailer(true);

try {
    // Server settings
    $mail->isSMTP();
    $mail->Host = $_ENV['MAIL_HOST'];
    $mail->SMTPAuth = true;
    $mail->Username = $_ENV['MAIL_USER'];
    $mail->Password = $_ENV['MAIL_PASSWORD'];
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS; // Force SMTPS (TLS encryption)
    $mail->Port = $_ENV['MAIL_PORT'];

    // Sender and recipient
    $mail->setFrom($_ENV['MAIL_FROM_ADDRESS'], $_ENV['MAIL_FROM_NAME']);
    $mail->addAddress('test@example.com', 'Recipient Name');

    // Content
    $mail->isHTML(true);
    $mail->Subject = 'Test Email';
    $mail->Body = '<h1>Hello from PHPMailer!</h1>This is a test email using SMTP.';
    $mail->AltBody = 'Hello from PHPMailer! This is a test email using SMTP.';
    $mail->addCustomHeader('x-liara-tag', 'test-tag'); // use Liara Tags
    
    // Send the email
    $mail->send();
    echo 'Email sent successfully!';
} catch (Exception $e) {
    echo "Email could not be sent. Mailer Error: {$mail->ErrorInfo}";
}

```

## SMTP

برای استفاده از سرویس ایمیل در برنامه‌های PHP، می‌توانید از  
پکیج phpmailer استفاده کنید که بایستی با دستور زیر، آن را در پروژه خود، نصب کنید:


```bash
composer require phpmailer/phpmailer
# composer require vlucas/phpdotenv phpmailer/phpmailer # for dotenv
```

پس از آن، کافیست تا طبق [مستندات SMTP](https://docs.liara.ir/email-server/how-tos/add-smtp-user)، یک دسترسی SMTP و طبق [مستندات افزودن نشانی](https://docs.liara.ir/email-server/how-tos/add-account)، یک نشانی برای ایمیل‌سرور خود، ایجاد کنید.  
در نهایت نیز، بایستی  
اطلاعات مربوط به ایمیل‌سرور خود را  
به متغیرهای محیطی برنامه خود، اضافه کنید؛ به عنوان مثال:


```bash
MAIL_HOST=smtp.c1.liara.email
MAIL_PORT=587
MAIL_USER=friendly_liskov_ihidh7
MAIL_PASSWORD=58455bf7-f7c9-4562-9a9e-53b051f2ba79
MAIL_FROM_ADDRESS=info@example.com
MAIL_FROM_NAME=my-app

```

> مقدار فیلد `MAIL_FROM_ADDRESS` باید یکی از نشانی‌های اضافه شده در سرویس ایمیل باشد.

در نهایت می‌توانید در پروژه‌ی خود مانند مثال زیر عمل کرده و با استفاده از دسترسی SMTP سرویس ایمیل لیارا،  
اقدام به ارسال ایمیل‌های تراکنشی کنید:  


```php
<?php
require 'vendor/autoload.php'; // Load Composer dependencies

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;
use Dotenv\Dotenv;

// Load environment variables from .env file
$dotenv = Dotenv::createImmutable(__DIR__);
$dotenv->load();

// Create an instance of PHPMailer
$mail = new PHPMailer(true);

try {
    // Server settings
    $mail->isSMTP();
    $mail->Host       = $_ENV['MAIL_HOST'];
    $mail->SMTPAuth   = true;
    $mail->Username   = $_ENV['MAIL_USER'];
    $mail->Password   = $_ENV['MAIL_PASSWORD'];
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS; // Use STARTTLS encryption
    $mail->Port       = $_ENV['MAIL_PORT'];

    // Recipients
    $mail->setFrom($_ENV['MAIL_FROM_ADDRESS'], $_ENV['MAIL_FROM_NAME']);
    $mail->addAddress('recipient@example.com'); // Add a recipient email

    // Content
    $mail->isHTML(true);                                  // Set email format to HTML
    $mail->Subject = 'Test Email';
    $mail->Body    = 'This is a test email sent using PHPMailer and SMTP.';
    $mail->AltBody = 'This is the plain text version of the email content.';
    $mail->addCustomHeader('x-liara-tag', 'test-tag'); // use Liara Tags


    // Send the email
    $mail->send();
    echo 'Email has been sent successfully!';
} catch (Exception $e) {
    echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
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
MAIL_FROM_EMAIL=info@example.com

```

> مقدار فیلد `MAIL_FROM_EMAIL` باید یکی از نشانی‌های اضافه شده در سرویس ایمیل باشد.

در نهایت می‌توانید در پروژه‌ی خود مانند مثال زیر عمل کرده و با استفاده از پروتکل HTTP، اقدام به ارسال ایمیل‌های تراکنشی کنید:


```bash
<?php

// send-email.php
// composer require vlucas/phpdotenv guzzlehttp/guzzle
require 'vendor/autoload.php';

use GuzzleHttp\Client;
use Dotenv\Dotenv;

$dotenv = Dotenv::createImmutable(__DIR__);
$dotenv->load();

function sendEmail($to, $subject, $text)
{
    $client = new Client();

    $url = $_ENV['MAIL_SERVICE_URL'] . '/' . $_ENV['MAIL_SERVER_ID'] . '/messages';
    $token = $_ENV['LIARA_API_TOKEN'];

    try {
        $response = $client->post($url, [
            'headers' => [
                'Authorization' => 'Bearer ' . $token,
                'Content-Type' => 'application/json',
                'x-liara-tag' => 'test_email' // Custom tag
            ],
            'json' => [
                'text' => $text,
                'subject' => $subject,
                'to' => $to,
                'from' => 'contact@looms.ir', // Your sender email
                'attachments' => []
            ]
        ]);

        return json_decode($response->getBody(), true);
    } catch (Exception $e) {
        return ['error' => $e->getMessage()];
    }
}

// Example Usage
$response = sendEmail("receiver@looms.ir", "Test Email", "This is a test email from PHP!");
print_r($response);

?>

```

> همچنین بخوانید: [پورت‌های ایمیل‌سرور لیارا](https://docs.liara.ir/email-server/details/ports/)

## all links

[All links of docs](https://docs.liara.ir/all-links-llms.txt)
