Original link: https://docs.liara.ir/dbaas/clickhouse/how-tos/connect-via-platform/laravel/

# اتصال به دیتابیس ClickHouse در برنامه‌های Laravel

برای اتصال به دیتابیس ClickHouse کافیست تا  
اطلاعات مربوط به دیتابیس خود را  
به متغیرهای محیطی برنامه خود، اضافه کنید؛ به عنوان مثال:

```bash
CLICKHOUSE_HOST=rainier.liara.cloud
CLICKHOUSE_PORT=33273
CLICKHOUSE_DATABASE=default
CLICKHOUSE_USERNAME=root
CLICKHOUSE_PASSWORD=x4y2LJvdFyG5wVO87VbXDrpg
```

در ادامه، با دستور زیر یک سرویس برای اتصال ایجاد کنید:  

```bash
php artisan make:class Services/ClickHouseService
```

سپس، در مسیر `app/Services/ClickHouseService.php` قطعه کد زیر را قرار دهید:  

```php
<?php

namespace App\Services;

use ClickHouseDB\Client;

class ClickHouseService
{
    private Client $client;

    public function __construct()
    {
        $this->client = new Client([
            'host' => env('CLICKHOUSE_HOST'),
            'port' => env('CLICKHOUSE_PORT'),
            'username' => env('CLICKHOUSE_USERNAME'),
            'password' => env('CLICKHOUSE_PASSWORD'),
        ]);

        $this->client->database(
            env('CLICKHOUSE_DATABASE')
        );
    }

    public function connectionTest()
    {
        return $this->client->select('SELECT 1');
    }
}
```

در ادامه، کافیست تا در `routes/web.php` قطعه کد زیر را اضافه کنید:

```php
use App\Services\ClickHouseService;
Route::get('/clickhouse-test', function (ClickHouseService $clickhouse) {

    try {

        $result = $clickhouse->connectionTest();

        return view('clickhouse-test', [
            'success' => true,
            'message' => 'Connection established successfully',
            'result' => $result->rows(),
        ]);

    } catch (\Exception $e) {

        return view('clickhouse-test', [
            'success' => false,
            'message' => $e->getMessage(),
            'result' => null,
        ]);
    }

});
```

در ادامه، در مسیر `resources/views/clickhouse-test.blade.php`، قطعه کد زیر را قرار دهید:  

```bash
<!DOCTYPE html>
<html lang="en">


<body>

<div class="card">

    @if($success)

        ## Connected

        ClickHouse connection successful.

    @else

        ## Failed

        {{ $message }}

    @endif


    ### Response:

    {{ print_r($data, true) }}
    </pre>

</div>

</body>
</html>
```

تمامی کارها انجام شده است و اکنون می‌توانید در مرورگر، در صفحه `clickhouse-test/`، وضعیت اتصال به دیتابیس را بررسی کنید.  

> مثال فوق از اتصال به دیتابیس را می‌توانید به صورت کامل در [گیت‌هاب لیارا](https://github.com/liara-cloud/clickhouse-connect-examples/tree/laravel)، مشاهده کنید.

## all links

[All links of docs](https://docs.liara.ir/all-links-llms.txt)
