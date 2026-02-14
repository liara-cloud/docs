Original link: https://docs.liara.ir/dbaas/rabbitmq/how-tos/connect-via-platform/php/

# اتصال به RabbitMQ در برنامه‌های PHP

برای اتصال به  RabbitMQ، در ابتدا باید کتابخانه `php-amqplib` را در پروژه خود، با اجرای دستور زیر، نصب کنید؛ توجه داشته باشید  
که برای نصب ماژول زیر، باید [composer](https://getcomposer.org/) بر روی سیستم‌تان نصب باشد:

```bash
composer require php-amqplib/php-amqplib vlucas/phpdotenv
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

اکنون، می‌توانید با استفاده از قطعه کد زیر به دیتابیس RabbitMQ خود متصل شوید:

```php
<?php

require 'vendor/autoload.php';

use PhpAmqpLib\Connection\AMQPStreamConnection;

use Dotenv\Dotenv;
$dotenv = Dotenv::createImmutable(__DIR__);
$dotenv->load();

$host = $_ENV['RABBITMQ_HOST'];
$port = (int) $_ENV['RABBITMQ_PORT'];
$user = $_ENV['RABBITMQ_USER'];
$pass = $_ENV['RABBITMQ_PASS'];

try {
    
    $connection = new AMQPStreamConnection($host, $port, $user, $pass);
    echo "connection successful\n";

    
    $connection->close();
} catch (Exception $e) {
    echo "connection failed, error: " . $e->getMessage() . "\n";
}

?>

```

## all links

[All links of docs](https://docs.liara.ir/all-links-llms.txt)
