Original link: https://docs.liara.ir/paas/php/how-tos/connect-to-db/mssql/

# اتصال به دیتابیس MSSQL در برنامه‌های PHP

از آنجایی که برای اتصال به دیتابیس MSSQL در برنامه‌های PHP نیاز به اکستنشن sqlsrv دارید و این اکستنشن به صورت پیش‌فرض در برنامه‌های PHP لیارا نصب نیست؛
شما بایستی در ابتدا، این اکستنشن را نصب و فعال کرده و پس از آن، به دیتابیس متصل شوید.

> در نظر داشته باشید که مستندات پیش‌رو برای برنامه‌های PHP با نسخه 8 و بالاتر است.

در ابتدا، بایستی طبق مستندات [تنظیم متغیرهای محیطی](https://docs.liara.ir/paas/details/envs)، متغیرهای مربوط به دیتابیس خود را به برنامه اضافه کنید؛ به عنوان مثال:

```bash
DB_HOST=bromo.liara.cloud
DB_PORT=33465
DB_DATABASE=myDB
DB_USERNAME=sa
DB_PASSWORD=xCBl7ma5MLtzEUa4Aw7OUM27
```

در ادامه، بایستی طبق مستندات [Hookها](https://docs.liara.ir/paas/php/how-tos/use-hooks) در مسیر اصلی پروژه، یک فایل به نام `liara_pre_build.sh` ایجاد کنید و قطعه کد زیر را در آن قرار دهید:

```sh
add-apt-repository ppa:ondrej/php -y;
curl https://packages.microsoft.com/keys/microsoft.asc | tee /etc/apt/trusted.gpg.d/microsoft.asc;
curl https://packages.microsoft.com/config/ubuntu/$(lsb_release -rs)/prod.list | tee /etc/apt/sources.list.d/mssql-release.list;
apt-get update;
ACCEPT_EULA=Y apt-get install -y msodbcsql18;
apt-get install -y unixodbc-dev;
apt-get install php8.2-dev  -y --allow-unauthenticated;
sudo pecl install sqlsrv;
sudo pecl install pdo_sqlsrv;
printf "; priority=20\nextension=sqlsrv.so\n" > /etc/php/8.2/mods-available/sqlsrv.ini;
printf "; priority=30\nextension=pdo_sqlsrv.so\n" > /etc/php/8.2/mods-available/pdo_sqlsrv.ini
phpenmod -v 8.2 sqlsrv pdo_sqlsrv;
```

> اگر که از نسخه PHP غیر از 8.2 استفاده می‌کنید؛ می‌توانید در قطعه کد بالا به جای تمامی عبارات `8.2`، مقدار `8.1` یا `8.3` را وارد کنید.

قطعه کد فوق، تمامی کارهای لازم برای نصب اکستنشن `sqlsrv` را صورت می‌دهد و نیازی نیست که پس از استقرار برنامه، کار خاصی را انجام دهید.
در ادامه، می‌توانید با متد `sqlsrv_connect` به دیتابیس MSSQL خود، متصل شوید؛ به عنوان مثال:

```bash
<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

function OpenConnection()
{
    $serverName = getenv('DB_HOST') . ',' . getenv('DB_PORT'); 
    $connectionOptions = array(
        "Database" => getenv('DB_DATABASE'), 
        "Uid" => getenv('DB_USERNAME'),      
        "PWD" => getenv('DB_PASSWORD'),      
        "Encrypt" => "yes",                  
        "TrustServerCertificate" => "yes"    
    );

    $conn = sqlsrv_connect($serverName, $connectionOptions);

    if ($conn === false) {
        die(print_r(sqlsrv_errors(), true));
    }

    return $conn;
}

$conn = OpenConnection();
if ($conn) {
    echo "Connected successfully!";
} else {
    echo "Failed to connect!";
}
?>
```

> یک برنامه PHP شامل MSSQL آماده استقرار در [اینجا](https://github.com/liara-cloud/php-getting-started/tree/mssql-connection) قرار دارد که می‌توانید از آن، استفاده کنید.

## all links

[All links of docs](https://docs.liara.ir/all-links-llms.txt)
