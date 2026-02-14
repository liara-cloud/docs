Original link: https://docs.liara.ir/dbaas/rabbitmq/how-tos/connect-via-platform/laravel/

# اتصال به RabbitMQ در برنامه‌های Laravel

برای اتصال به RabbitMQ، در ابتدا بایستی ماژول مربوط به آن را، با اجرای دستور زیر، در پروژه خود، نصب کنید:

```bash
composer require php-amqplib/php-amqplib
```

سپس، کافیست تا  
اطلاعات مربوط به RabbitMQ خود را  
به متغیرهای محیطی برنامه خود، اضافه کنید؛ به عنوان مثال:

```bash
RABBITMQ_HOST=fitz-roy.liara.cloud
RABBITMQ_PORT=32923
RABBITMQ_USER=root
RABBITMQ_PASS=63LVuatIrWWajE7gxSj20gHL

```

پس از این کار، می‌توانید به RabbitMQ متصل شده و از آن استفاده کنید. به عنوان مثال، می‌توانید برای تست اتصال به RabbitMQ، با اجرای دستور زیر، یک کنترلر به نام `RabbitMQController` بسازید:

```bash
php artisan make:controller RabbitMQController
```

در ادامه، می‌توانید قطعه کد زیر را در `app/Http/Controllers/RabbitMQController` قرار دهید:

```laravel
<?php

namespace App\Http\Controllers;

use Illuminate\Http\JsonResponse;
use PhpAmqpLib\Connection\AMQPStreamConnection;

class RabbitMQController extends Controller
{
    public function checkConnection(): JsonResponse
    {
        try {

            $host = env('RABBITMQ_HOST');
            $port = env('RABBITMQ_PORT');
            $user = env('RABBITMQ_USER');
            $pass = env('RABBITMQ_PASS');


            $connection = new AMQPStreamConnection($host, $port, $user, $pass);
            $connection->close();

            return response()->json(['message' => 'connection successful']);
        } catch (\Exception $e) {
            return response()->json(['message' => 'connection failed', 'error' => $e->getMessage()], 500);
        }
    }
}

```

در نهایت، کافیست تا در `routes/web.php` قطعه کد زیر را نیز، اضافه کنید:

```bash
use App\Http\Controllers\RabbitMQController;

Route::get('/check-rabbitmq', [RabbitMQController::class, 'checkConnection']);

```

اکنون می‌توانید برنامه‌تان را اجرا کرده و در صفحه `check-rabbitmq/` وضعیت اتصال به RabbitMQ را بررسی کنید.

## all links

[All links of docs](https://docs.liara.ir/all-links-llms.txt)
