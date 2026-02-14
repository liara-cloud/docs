Original link: https://docs.liara.ir/email-server/how-tos/connect-via-platform/laravel/

# اتصال به ایمیل‌سرور در برنامه‌های Laravel

[Video link](https://media.liara.ir/laravel/laravel-email-server.mp4)

> پروژه و کدهای مورد استفاده در ویدیوی فوق در [اینجا](https://github.com/liara-cloud/laravel-getting-started/tree/emailserver) قابل مشاهده و دسترسی هستند.

## SMTPS

برای استفاده از سرویس ایمیل در برنامه‌های Laravel،  
کافیست تا طبق [مستندات SMTP](https://docs.liara.ir/email-server/how-tos/add-smtp-user)، یک دسترسی SMTP و طبق [مستندات افزودن نشانی](https://docs.liara.ir/email-server/how-tos/add-account)، یک نشانی برای ایمیل‌سرور خود، ایجاد کنید.  
در نهایت نیز، بایستی  
اطلاعات مربوط به ایمیل‌سرور خود را  
به متغیرهای محیطی برنامه خود، اضافه کنید؛ به عنوان مثال:

```bash
MAIL_MAILER=smtp
MAIL_HOST=smtp.c1.liara.email
MAIL_PORT=465
MAIL_USERNAME=magical_benz_7s4t7p
MAIL_PASSWORD=9aaf526a-3352-4d96-99b1-63af70c696e2
MAIL_ENCRYPTION=tls
MAIL_FROM_ADDRESS=info@example.com
MAIL_FROM_NAME="\${APP_NAME}"
```

> با تنظیم `MAIL_ENCRYPTION=tls`، می‌توانید به‌صورت امن اقدام به ارسال ایمیل‌های تراکنشی کنید.  
> در نظر داشته باشید که باید فایل `config/mail.php`، شامل قطعه کد زیر، باشد:

```php
<?php

return [

    'default' => env('MAIL_MAILER', 'log'),

    'mailers' => [

        'smtp' => [
            'transport' => 'smtp',
            'url' => env('MAIL_URL'),
            'host' => env('MAIL_HOST', '127.0.0.1'),
            'port' => env('MAIL_PORT', 2525),
            'encryption' => env('MAIL_ENCRYPTION', 'tls'),
            'username' => env('MAIL_USERNAME'),
            'password' => env('MAIL_PASSWORD'),
            'timeout' => null,
            'local_domain' => env('MAIL_EHLO_DOMAIN', parse_url(env('APP_URL', 'http://localhost'), PHP_URL_HOST)),
        ],

    ],

    'from' => [
        'address' => env('MAIL_FROM_ADDRESS', 'hello@example.com'),
        'name' => env('MAIL_FROM_NAME', 'Example'),
    ],

];
```

در ادامه، بایستی با اجرای دستوری مشابه دستور زیر، یک Mailable ایجاد کنید:  

```laravel
php artisan make:mail TestEmail
```

پس از ایجاد Mailable در آدرس `app/mail/TestEmail.php`، می‌توانید قطعه کد زیر را، در آن، قرار دهید:  

```laravel
<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Mail\Mailables\Headers;

class TestEmail extends Mailable
{
    use Queueable, SerializesModels;

    public function build()
    {
        return $this->subject('Test Email')
                    ->view('emails.test');

    }

    public function headers(): Headers
    {
        return new Headers(
            text: [
                'x-liara-tag' => 'test_email',
            ],
        );
    }


}
```

سپس، می‌توانید یک قالب ایمیل با نام `test.blade.php` در مسیر `resources/views/emails` ایجاد کنید و قطعه کد زیر را، در آن، قرار دهید:

```html
<!DOCTYPE html>
<html>

<body>
    <h1>This is a test email from Laravel</h1>
    Sent via SMTP on Liara's server.
</body>
</html>
```

سپس، در `routes/web.php` مسیر زیر را برای ارسال ایمیل اضافه کنید:

```laravel
use App\Mail\TestEmail;
use Illuminate\Support\Facades\Mail;
Route::get('/send-test-email', function () {
    Mail::to('test@example.com')->send(new TestEmail());
    return 'Test email sent successfully!';
});
```

با انجام کارهای فوق، می‌توانید از ایمیل‌سرور در برنامه خود در صفحه `send-test-email/`، برای ارسال ایمیل، استفاده کنید.

## SMTP

برای استفاده از سرویس ایمیل در برنامه‌های Laravel،  
کافیست تا طبق [مستندات SMTP](https://docs.liara.ir/email-server/how-tos/add-smtp-user)، یک دسترسی SMTP و طبق [مستندات افزودن نشانی](https://docs.liara.ir/email-server/how-tos/add-account)، یک نشانی برای ایمیل‌سرور خود، ایجاد کنید.  
در نهایت نیز، بایستی  
اطلاعات مربوط به ایمیل‌سرور خود را  
به متغیرهای محیطی برنامه خود، اضافه کنید؛ به عنوان مثال:

```bash
MAIL_MAILER=smtp
MAIL_HOST=smtp.c1.liara.email
MAIL_PORT=587
MAIL_USERNAME=magical_benz_7s4t7p
MAIL_PASSWORD=9aaf526a-3352-4d96-99b1-63af70c696e2
MAIL_ENCRYPTION=
MAIL_FROM_ADDRESS=info@example.com
MAIL_FROM_NAME="\${APP_NAME}"
```

در نظر داشته باشید که باید فایل `config/mail.php`، شامل قطعه کد زیر، باشد:

```php
<?php

return [

    'default' => env('MAIL_MAILER', 'log'),

    'mailers' => [

        'smtp' => [
            'transport' => 'smtp',
            'url' => env('MAIL_URL'),
            'host' => env('MAIL_HOST', '127.0.0.1'),
            'port' => env('MAIL_PORT', 2525),
            'encryption' => env('MAIL_ENCRYPTION', 'tls'),
            'username' => env('MAIL_USERNAME'),
            'password' => env('MAIL_PASSWORD'),
            'timeout' => null,
            'local_domain' => env('MAIL_EHLO_DOMAIN', parse_url(env('APP_URL', 'http://localhost'), PHP_URL_HOST)),
        ],

    ],

    'from' => [
        'address' => env('MAIL_FROM_ADDRESS', 'hello@example.com'),
        'name' => env('MAIL_FROM_NAME', 'Example'),
    ],

];
```

> در نظر داشته باشید که Laravel برای ارسال ایمیل از رمز‌نگاری TLS استفاده می‌کند؛ در صورتی که قادر به ارسال از طریق TLS نباشد، آن را به STARTTLS، تغییر می‌دهد.

در ادامه، بایستی با اجرای دستوری مشابه دستور زیر، یک Mailable ایجاد کنید:  

```laravel
php artisan make:mail TestEmail
```

پس از ایجاد Mailable در آدرس `app/mail/TestEmail.php`، می‌توانید قطعه کد زیر را، در آن، قرار دهید:  

```laravel
<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Mail\Mailables\Headers;

class TestEmail extends Mailable
{
    use Queueable, SerializesModels;

    public function build()
    {
        return $this->subject('Test Email')
                    ->view('emails.test');

    }

    public function headers(): Headers
    {
        return new Headers(
            text: [
                'x-liara-tag' => 'test_email',
            ],
        );
    }


}
```

سپس، می‌توانید یک قالب ایمیل با نام `test.blade.php` در مسیر `resources/views/emails` ایجاد کنید و قطعه کد زیر را، در آن، قرار دهید:

```html
<!DOCTYPE html>
<html>

<body>
    <h1>This is a test email from Laravel</h1>
    Sent via SMTP on Liara's server.
</body>
</html>
```

سپس، در `routes/web.php` مسیر زیر را برای ارسال ایمیل اضافه کنید:

```laravel
use App\Mail\TestEmail;
use Illuminate\Support\Facades\Mail;
Route::get('/send-test-email', function () {
    Mail::to('test@example.com')->send(new TestEmail());
    return 'Test email sent successfully!';
});
```

با انجام کارهای فوق، می‌توانید از ایمیل‌سرور در برنامه خود  
استفاده کنید.  

## HTTP

برای ارسال ایمیل با استفاده از پروتکل HTTP، به [API لیارا](https://docs.liara.ir/references/api/about/) و [آیدی ایمیل‌سرور](https://docs.liara.ir/email-server/details/mail-id)  
و [نشانی ایمیل‌سرور](https://docs.liara.ir/email-server/how-tos/add-account) نیاز خواهید داشت.  
برای این‌کار، اطلاعات مربوطه را مشابه زیر به متغیرهای محیطی برنامه خود، اضافه کنید

```bash
MAIL_SERVER_ID=***
MAIL_SERVICE_URL=https://mail-service.iran.liara.ir/api/v1/mails
API_LIARA_TOKEN=***
MAIL_FROM_ADDRESS=info@looms.ir
```

> مقدار فیلد `MAIL_FROM_ADDRESS` باید یکی از نشانی‌های اضافه شده در سرویس ایمیل باشد.

در نهایت می‌توانید در پروژه‌ی خود با استفاده از پروتکل HTTP، اقدام به ارسال ایمیل‌های تراکنشی کنید.  
به عنوان مثال، در ابتدا، با اجرای دستور زیر یک کنترلر برای ارسال ایمیل ایجاد کنید:  

```bash
php artisan make:controller MailController
```

سپس، فایل `app/Http/Controllers/MailController.php` را به شکل زیر تغییر دهید:

```php
<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;

class MailController extends Controller
{
    public function sendTestEmail()
    {
        // Fetch configuration from .env
        $mailServerId = env('MAIL_SERVER_ID');
        $token = env('API_LIARA_TOKEN');
        $url = env('MAIL_SERVICE_URL') . $mailServerId . "/messages";

        $headers = [
            "Authorization" => "Bearer {$token}",
            "Content-Type" => "application/json",
            "x-liara-tag" => "test_email"
        ];

        $data = [
            "to" => "example@example.example",
            "from" => env('MAIL_FROM_ADDRESS'),
            "text" => "Hello, this is a test email.",
            "subject" => "Test Email",
            "attachments" => []
        ];

        $response = Http::withHeaders($headers)->post($url, $data);

        if ($response->successful()) {
            return response()->json(["message" => "Email sent successfully", "response" => $response->json()]);
        } else {
            return response()->json(["error" => "Email sending failed", "details" => $response->json()], $response->status());
        }
    }
}
```

در فایل `routes/web.php`  
مسیر زیر را برای ارسال ایمیل اضافه کنید:

```php
<?php

use App\Http\Controllers\MailController;

Route::get('/send-email', [MailController::class, 'sendTestEmail']);
```

حالا می‌توانید با اجرای برنامه و مراجعه به صفحه `send-email`، ایمیل‌های تراکنشی خود را ارسال کنید.

> همچنین بخوانید: [پورت‌های ایمیل‌سرور لیارا](https://docs.liara.ir/email-server/details/ports/)

## all links

[All links of docs](https://docs.liara.ir/all-links-llms.txt)
