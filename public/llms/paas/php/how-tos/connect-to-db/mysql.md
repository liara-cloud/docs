Original link: https://docs.liara.ir/paas/php/how-tos/connect-to-db/mysql/

# اتصال به دیتابیس MySQL/MariaDB در برنامه‌های PHP

[Video link](https://media.liara.ir/php/php-mariadb.mp4)

برای اتصال به دیتابیس MySQL یا MariaDB نیاز به انجام کار خاصی نیست. چرا که اکستنشن مورد نیاز  آن (mysqli)، از قبل برای شما نصب شده است. فقط کافیست تا طبق [مستندات تنظیم متغیرهای محیطی](https://docs.liara.ir/paas/details/envs)، متغیرهای مربوط به دیتابیس خود را به برنامه اضافه کنید؛ برای نمونه:

```bash
DB_HOST=annapurna.liara.cloud
DB_PORT=34663
DB_DATABASE=dreamy_zhukovsky
DB_USERNAME=root
DB_PASSWORD=Umtdo7rWEoEMyWth4nS1sf4t
```

اکنون، می‌توانید با استفاده از قطعه کد زیر به دیتابیس MySQL/MariaDB خود متصل شوید:

```php
<?php
$servername = getenv('DB_HOST');
$port = getenv('DB_PORT'); 
$username = getenv('DB_USERNAME'); 
$password = getenv('DB_PASSWORD'); 
$database = getenv('DB_DATABASE'); 

$conn = new mysqli($servername, $username, $password, $database, $port);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} else {
    echo "Connected";}

$conn->close();
?> 
```

## استفاده از Connection Pooling

مفهوم Connection pooling به معنای استفاده از یک مجموعه اتصالات از پیش ساخته شده برای اتصال به پایگاه داده است. این تکنیک باعث می‌شود به جای ایجاد و بستن مکرر اتصالات، از اتصالات موجود در مجموعه استفاده شود که کارایی را افزایش می‌دهد.
> همچنین بخوانید: [آشنایی بیشتر با قابلیت Connection Pooling](https://docs.liara.ir/dbaas/details/connection-pool)

برای استفاده از قابلیت connection pooling در دیتابیس MySQL/MariaDB، می‌توانید مانند قطعه کد زیر، از اکستنشن `PDO` استفاده کنید که از قبل در سرور نصب شده است:

```php
<?php

$servername = getenv('DB_HOST');
$port = getenv('DB_PORT'); 
$database = getenv('DB_DATABASE'); 

$dsn = "mysql:host=$servername; port=$port; dbname=$database";
$username = getenv('DB_USERNAME');
$password = getenv('DB_PASSWORD'); 

try {
    
    $pdo = new PDO($dsn, $username, $password, [
        PDO::ATTR_PERSISTENT => true
    ]);

    echo "connection successfull.";
} catch (PDOException $e) {
    echo 'connection failed: ' . $e->getMessage();
}

```

## all links

[All links of docs](https://docs.liara.ir/all-links-llms.txt)
