Original link: https://docs.liara.ir/dbaas/mongodb/how-tos/connect-via-platform/php/

# اتصال به دیتابیس MongoDB در برنامه‌های PHP

برای اتصال به دیتابیس MongoDB در برنامه‌های PHP، پس از نصب اکستنشن `mongodb`، کافیست تا  
اطلاعات مربوط به دیتابیس خود را  
به متغیرهای محیطی برنامه خود، اضافه کنید؛ به عنوان مثال:

```bash
MONGODB_URI=mongodb://root:JtFcUbOxnQunBSnEzu1PNf5Z@annapurna.liara.cloud:30725/my-app?authSource=admin
```

سپس، می‌توانید با استفاده از قطعه کد زیر، به دیتابیس متصل شده و از آن استفاده کنید:

```php
<?php

require_once __DIR__ . '/vendor/autoload.php';

use Exception;
use MongoDB\Client;

$uri = getenv('MONGODB_URI');

$client = new \MongoDB\Client($uri);

try {
    $client->selectDatabase('admin')->command(['ping' => 1]);
    echo "Pinged your deployment. You successfully connected to MongoDB!\n";
} catch (Exception $e) {
    printf($e->getMessage());
}
```

## استفاده از Connection Pooling

مفهوم Connection pooling به معنای استفاده از یک مجموعه اتصالات از پیش ساخته شده برای اتصال به پایگاه داده است. این تکنیک باعث می‌شود به جای ایجاد و بستن مکرر اتصالات، از اتصالات موجود در مجموعه استفاده شود که کارایی را افزایش می‌دهد.  
> همچنین بخوانید: [آشنایی بیشتر با قابلیت Connection Pooling](https://docs.liara.ir/dbaas/details/connection-pool)

برای استفاده از قابلیت connection pooling در دیتابیس MongoDB، می‌توانید از قطعه کد زیر استفاده کنید و پارامترهای آن را با توجه به نیاز خود، تغییر دهید:

```php
<?php
require_once __DIR__ . '/vendor/autoload.php';
use Exception;
use MongoDBClient;

$uri = getenv('MONGODB_URI');

$options = [
    'connectTimeoutMS' => 5000, 
    'socketTimeoutMS' => 60000, 
    'maxIdleTimeMS' => 300000, 
    'maxPoolSize' => 50, 
    'minPoolSize' => 5,
];

try {
    $client = new MongoDBClient($uri, [], $options);
    $client->selectDatabase('admin')->command(['ping' => 1]);
    echo "Pinged your deployment. You successfully connected to MongoDB!
";
} catch (Exception $e) {
    printf($e->getMessage());
}
?>
```

## all links

[All links of docs](https://docs.liara.ir/all-links-llms.txt)
