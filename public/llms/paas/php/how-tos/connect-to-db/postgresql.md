Original link: https://docs.liara.ir/paas/php/how-tos/connect-to-db/postgresql/

# اتصال به دیتابیس PostgreSQL در برنامه‌های PHP

برای اتصال به دیتابیس PostgreSQL نیاز به انجام کار خاصی نیست؛ چرا که اکستنشن‌های مربوط به آن، مانند `PDO` و `pgsql` از قبل، توسط لیارا، نصب شده است. فقط کافیست تا طبق [مستندات تنظیم متغیرهای محیطی](https://docs.liara.ir/paas/details/envs)، متغیرهای مربوط به دیتابیس خود را به برنامه اضافه کنید؛ برای نمونه:

```bash
PG_URI=postgresql://root:2aCRtMfc2oMou67U2GftmLmd@annapurna.liara.cloud:32655/postgres
```

پس از انجام کار فوق، می‌توانید مانند قطعه کد زیر، به دیتابیس متصل شده و از آن، استفاده کنید:

```php
<?php
$uri = getenv("PG_URI");

try {
    $uriParts = parse_url($uri);

    $host = $uriParts['host'];
    $port = $uriParts['port'];
    $user = $uriParts['user'];
    $pass = $uriParts['pass'];
    $dbname = ltrim($uriParts['path'], '/');

    // Create a new PDO instance with persistent connection enabled
    $pdo = new PDO(
        "pgsql:host=$host;port=$port;dbname=$dbname",
        $user,
        $pass,
        array(
            PDO::ATTR_PERSISTENT => true
        )
    );

    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    echo "Connected to PostgreSQL database successfully with persistent connection!";
} catch (PDOException $e) {
    echo "Connection failed: " . $e->getMessage();
}
?>
```

> در اکستنشن `PDO` و با کمک دستور `ATTR_PERSISTENT` ، قابلیت connection pooling تعبیه شده است و نیازی نیست که شما برای فعال‌سازی این قابلیت، کار خاصی را انجام دهید.

> همچنین بخوانید: [آشنایی بیشتر با قابلیت Connection Pooling](https://docs.liara.ir/dbaas/details/connection-pool)

## all links

[All links of docs](https://docs.liara.ir/all-links-llms.txt)
