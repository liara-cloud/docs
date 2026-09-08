Original link: https://docs.liara.ir/dbaas/clickhouse/how-tos/connect-via-platform/php/

# اتصال به دیتابیس ClickHouse در برنامه‌های PHP

برای اتصال به دیتابیس ClickHouse، در ابتدا  
بایستی دستور زیر را اجرا کنید:  

```bash
composer require smi2/phpclickhouse
```

در ادامه،  متغیرهای محیطی را برای اتصال به دیتابیس،  
در برنامه خود تنظیم کنید؛ به عنوان مثال:  

```bash
CLICKHOUSE_HOST=rainier.liara.cloud
CLICKHOUSE_PORT=33273
CLICKHOUSE_DATABASE=default
CLICKHOUSE_USERNAME=root
CLICKHOUSE_PASSWORD=x4y2LJvdFyG5wVO87VbXDrpg
```

اکنون، می‌توانید با استفاده از قطعه کد زیر به دیتابیس ClickHouse خود متصل شوید:  

```php
<?php

require __DIR__ . '/vendor/autoload.php';

use Dotenv\Dotenv;
use ClickHouseDB\Client;

$dotenv = Dotenv::createImmutable(__DIR__);
$dotenv->load();

$client = new Client([
    'host' => $_ENV['CLICKHOUSE_HOST'],
    'port' => $_ENV['CLICKHOUSE_PORT'],
    'username' => $_ENV['CLICKHOUSE_USERNAME'],
    'password' => $_ENV['CLICKHOUSE_PASSWORD'],
]);

$client->database($_ENV['CLICKHOUSE_DATABASE']);

try {

    $result = $client->select('SELECT 1');

    echo json_encode([
        'success' => true,
        'message' => 'ClickHouse connection successful',
        'result' => $result->rows(),
    ], JSON_PRETTY_PRINT);

} catch (Exception $e) {

    echo json_encode([
        'success' => false,
        'message' => $e->getMessage(),
    ], JSON_PRETTY_PRINT);

}
```

> مثال فوق از اتصال به دیتابیس را می‌توانید به صورت کامل در [گیت‌هاب لیارا](https://github.com/liara-cloud/clickhouse-connect-examples/tree/php)، مشاهده کنید.

## all links

[All links of docs](https://docs.liara.ir/all-links-llms.txt)
