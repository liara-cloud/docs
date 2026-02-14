Original link: https://docs.liara.ir/dbaas/mssql/how-tos/connect-via-platform/php/

# اتصال به دیتابیس MSSQL در برنامه‌های PHP

برای اتصال به دیتابیس MSSQL  
در ابتدا باید اکستنشن `sqlsrv`  را در PHP خود، نصب کرده باشید. پس از آن، کافیست تا  
اطلاعات مربوط به دیتابیس خود را  
به متغیرهای محیطی برنامه خود، اضافه کنید؛ به عنوان مثال:

```bash
DB_HOST=bromo.liara.cloud
DB_PORT=33465
DB_DATABASE=myDB
DB_USERNAME=sa
DB_PASSWORD=xCBl7ma5MLtzEUa4Aw7OUM27
```

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

## all links

[All links of docs](https://docs.liara.ir/all-links-llms.txt)
