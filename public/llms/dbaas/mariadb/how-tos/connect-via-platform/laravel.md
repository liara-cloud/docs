Original link: https://docs.liara.ir/dbaas/mariadb/how-tos/connect-via-platform/laravel/

# اتصال به دیتابیس MariaDB در برنامه‌های Laravel

برای اتصال به دیتابیس MariaDB نیاز به انجام کار خاصی نیست. فقط کافیست تا  
اطلاعات مربوط به دیتابیس خود را  
به متغیرهای محیطی برنامه خود، اضافه کنید؛ به عنوان مثال:

```bash
DB_CONNECTION=mariadb
DB_HOST=bromo.liara.cloud
DB_PORT=32909
DB_DATABASE=hardcore_napier
DB_USERNAME=root
DB_PASSWORD=gtccgkT8fHXuHJ52Sm0hBmf5
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
            'mariadb' => 'default',
        ];

        $results = [];

        foreach ($databases as $connection => $env) {
            try {
                Config::set('database.connections.' . $connection, [
                    'driver' => env($env . '_CONNECTION', 'mariadb'),
                    'host' => env($env . '_HOST', '127.0.0.1'),
                    'port' => env($env . '_PORT', '3306'),
                    'database' => env($env . '_DATABASE', 'forge'),
                    'username' => env($env . '_USERNAME', 'forge'),
                    'password' => env($env . '_PASSWORD', ''),
                    'charset' => 'utf8mb4',
                    'collation' => 'utf8mb4_unicode_ci',
                    'prefix' => '',
                    'strict' => true,
                    'engine' => null,
                ]);

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

اکنون می‌توانید برنامه‌تان را اجرا کرده و در صفحه `check-database-connection/` وضعیت اتصال به دیتابیس خود را بررسی کنید.

## all links

[All links of docs](https://docs.liara.ir/all-links-llms.txt)
