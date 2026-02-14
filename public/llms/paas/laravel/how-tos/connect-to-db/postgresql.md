Original link: https://docs.liara.ir/paas/laravel/how-tos/connect-to-db/postgresql/

# اتصال به دیتابیس PostgreSQL در برنامه‌های Laravel

برای اتصال به دیتابیس PostgreSQL نیاز به انجام کار خاصی نیست. فقط کافیست تا طبق [مستندات تنظیم متغیرهای محیطی](https://docs.liara.ir/paas/details/envs)، متغیرهای مربوط به دیتابیس خود را به برنامه اضافه کنید؛ برای نمونه:

```bash
DB_CONNECTION=pgsql
DB_HOST=bromo.liara.cloud
DB_PORT=34515
DB_DATABASE=postgres
DB_USERNAME=root
DB_PASSWORD=l6194OA4ZgOSc4EjPlep9qTl
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
            'pgsql' => 'pgsql',
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

برای استفاده از قابلیت connection pooling در دیتابیس، فقط کافیست تا وارد فایل `config/database.php` شده و قطعه کد مربوط به فیلد `pgsql` را به شکل زیر، تغییر دهید:

```php
'pgsql' => [
    'driver' => 'pgsql',
    'url' => env('DB_URL'),
    'host' => env('DB_HOST', '127.0.0.1'),
    'port' => env('DB_PORT', '5432'),
    'database' => env('DB_DATABASE', 'laravel'),
    'username' => env('DB_USERNAME', 'root'),
    'password' => env('DB_PASSWORD', ''),
    'charset' => env('DB_CHARSET', 'utf8'),
    'prefix' => '',
    'prefix_indexes' => true,
    'search_path' => 'public',
    'sslmode' => 'prefer',
    'options' => [
        PDO::ATTR_PERSISTENT => env('DB_PGSQL_POOLING', true),
    ],
],
```

## all links

[All links of docs](https://docs.liara.ir/all-links-llms.txt)
