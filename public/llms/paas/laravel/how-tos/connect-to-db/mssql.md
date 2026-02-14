Original link: https://docs.liara.ir/paas/laravel/how-tos/connect-to-db/mssql/

# اتصال به دیتابیس MSSQL در برنامه‌های Laravel

برای اتصال به دیتابیس MSSQL نیاز به انجام کار خاصی نیست. فقط کافیست تا طبق [مستندات تنظیم متغیرهای محیطی](https://docs.liara.ir/paas/details/envs)، متغیرهای مربوط به دیتابیس خود را به برنامه اضافه کنید؛ برای نمونه:

```bash
DB_CONNECTION=sqlsrv
DB_HOST=bromo.liara.cloud
DB_PORT=34928
DB_DATABASE=db
DB_USERNAME=sa
DB_PASSWORD=SEQdI8BcVutmIWrjBxVBmSNv
```

در ادامه، بایستی در فایل `config/database.php` تنظیمات درایور `sqlsvr` را به شکل زیر، وارد کنید:

```php
'sqlsrv' => [
            'driver' => 'sqlsrv',
            'url' => env('DB_URL'),
            'host' => env('DB_HOST', 'localhost'),
            'port' => env('DB_PORT', '1433'),
            'database' => env('DB_DATABASE', 'laravel'),
            'username' => env('DB_USERNAME', 'root'),
            'password' => env('DB_PASSWORD', ''),
            'charset' => env('DB_CHARSET', 'utf8'),
            'prefix' => '',
            'prefix_indexes' => true,
            // 'encrypt' => env('DB_ENCRYPT', 'yes'),
            'trust_server_certificate' => env('DB_TRUST_SERVER_CERTIFICATE', 'true'),
        ],

    ],
```

پس از این کار، می‌توانید به دیتابیس مدنظرتان متصل شده و از آن استفاده کنید. به عنوان مثال، می‌توانید برای تست اتصال به دیتابیس، با اجرای دستور زیر، یک کنترلر به نام `DatabaseController` بسازید:

```bash
php artisan make:controller DatabaseController
```

در ادامه، می‌توانید قطعه کد زیر را در `app/Http/Controllers/DatabaseController.php` قرار دهید:

```bash
<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Config;
use Illuminate\Http\Request;

class DatabaseController extends Controller
{
    public function checkConnection()
    {
        $databases = [
            'sqlsrv' => 'sqlsrv',
        ];

        $results = [];

        foreach ($databases as $connection) {
            try {
                DB::connection($connection)->getPdo();
                $results[$connection] = 'Connection successful';
            } catch (\Exception $e) {
                $results[$connection] = 'Connection failed: ' . $e->getMessage();
            }
        }

        return response()->json($results);
    }
}
```

در نهایت، کافیست تا در `routes/web.php` قطعه کد زیر را اضافه کنید:

```bash
use App\Http\Controllers\DatabaseController;

Route::get('/check-database-connection', [DatabaseController::class, 'checkConnection']);
```

اکنون می‌توانید برنامه‌تان را در لیارا مستقر کرده و در صفحه `check-database-connection/` وضعیت اتصال به دیتابیس خود را بررسی کنید.

## استفاده از Connection Pooling

مفهوم Connection pooling به معنای استفاده از یک مجموعه اتصالات از پیش ساخته شده برای اتصال به پایگاه داده است. این تکنیک باعث می‌شود به جای ایجاد و بستن مکرر اتصالات، از اتصالات موجود در مجموعه استفاده شود که کارایی را افزایش می‌دهد.  
> همچنین بخوانید: [آشنایی بیشتر با قابلیت Connection Pooling](https://docs.liara.ir/dbaas/details/connection-pool)

برای استفاده از قابلیت connection pooling در دیتابیس، فقط کافیست تا وارد فایل `config/database.php` شده و قطعه کد مربوط به فیلد `sqlsrv` را به شکل زیر، تغییر دهید:

```php
'sqlsrv' => [
    'driver' => 'sqlsrv',
    'url' => env('DB_URL'),
    'host' => env('DB_HOST', 'localhost'),
    'port' => env('DB_PORT', '1433'),
    'database' => env('DB_DATABASE', 'laravel'),
    'username' => env('DB_USERNAME', 'root'),
    'password' => env('DB_PASSWORD', ''),
    'charset' => env('DB_CHARSET', 'utf8'),
    'prefix' => '',
    'prefix_indexes' => true,
    // 'encrypt' => env('DB_ENCRYPT', 'yes'),
    'trust_server_certificate' => env('DB_TRUST_SERVER_CERTIFICATE', 'true'),
    'pooling' => env('DB_SQLSERVER_POOLING', true), // enables connection pooling
],
```

## all links

[All links of docs](https://docs.liara.ir/all-links-llms.txt)
