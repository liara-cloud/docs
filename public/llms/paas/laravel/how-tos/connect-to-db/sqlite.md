Original link: https://docs.liara.ir/paas/laravel/how-tos/connect-to-db/sqlite/

# اتصال به دیتابیس SQLite در برنامه‌های Laravel

برای اتصال موفق به دیتابیس SQLite در برنامه‌های Laravel کافیست تا گام‌های زیر را طی کنید:

۱. تنظیم متغیرهای محیطی  
در ابتدا، بایستی طبق [مستندات تنظیم متغیرهای محیطی](https://docs.liara.ir/paas/details/envs)، متغیرهای محیطی مربوط به دیتابیس خود را، به برنامه اضافه کنید؛ به عنوان مثال:
```bash
DB_CONNECTION=sqlite
DB_DATABASE=/var/www/html/database/database.sqlite
```

۲. ایجاد و پیکربندی فایل `liara_pre_start.sh`  

در مسیر اصلی پروژه، یک فایل به نام `liara_pre_start.sh` ایجاد کنید و قطعه کد زیر را در آن قرار دهید تا عملیات migrate به صورت خودکار در دیتابیس‌تان اعمال شود:

```bash
php artisan migrate --force
```

> همچنین بخوانید: [استفاده از Hookها در لاراول](https://docs.liara.ir/paas/laravel/how-tos/use-hooks)

۳. ایجاد دیسک برای دیتابیس  
[طبق مستندات ایجاد دیسک](https://docs.liara.ir/paas/disks/create)،  در بخش **دیسک‌ها** برنامه خود در لیارا، یک دیسک جدید با نام `database` و اندازه مدنظرتان ایجاد کنید.

۴. ایجاد و پیکربندی فایل liara.json  
در مسیر اصلی پروژه، یک فایل به نام `liara.json` ایجاد کنید و قطعه کد زیر را، درون آن، قرار دهید:
```json
{
    "disks":[
        {
            "name": "database",
            "mountTo": "/var/www/html/database/"
        }
    ]
}
```

۵. استقرار برنامه در لیارا  
برنامه خود را با استفاده از دستور `liara deploy` در لیارا مستقر کنید.

۶. تست اتصال به دیتابیس  
باا نجام کارهای فوق، می‌توانید به دیتابیس SQLite خود متصل شوید. برای تست اتصال، می‌توانید با اجرای دستور زیر، یک کنترلر ایجاد کنید:
```json
php artisan make:controller DatabaseTestController
```

سپس، می‌توانید فایل `app/Http/Controllers/DatabaseTestController` را به نحو زیر، تغییر دهید:
```json
<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\DB;
use Exception;

class DatabaseTestController extends Controller
{
    public function testConnection()
    {
        try {
            DB::connection()->getPdo();
            return "connection successfull";
        } catch (Exception $e) {
            return "connection failed" . $e->getMessage();
        }
    }
}
```

در ادامه، کافیست تا قطعه کد زیر را به فایل `routes/web.php` اضافه کنید:
```php
use App\Http\Controllers\DatabaseTestController;
Route::get('/test-connection', [DatabaseTestController::class, 'testConnection']);
```

در نهایت، می‌توانید برنامه را مجدداً در لیارا، مستقر کرده و پس از استقرار، صفحه `test-connection/` را بررسی کنید.

البته در نظر داشته باشید که استفاده از دیتابیس SQLite بیشتر برای وب‌سایت‌های کوچک با پردازش‌های کم مناسب است و  
در مقیاس بالا، بهتر است که از دیتابیس‌های دیگری استفاده کنید.

## استفاده از Connection Pooling  
در نظر داشته باشید که SQLite از قابلیت Connection Pooling پشتیبانی نمی‌کند؛ چرا که SQLite یک دیتابیس فایل‌محور است و نیازی به connection pooling ندارد. هر اتصال به فایل دیتابیس مستقل از دیگر اتصالات است و SQLite به طور خودکار این اتصالات را، مدیریت می‌کند.

## all links

[All links of docs](https://docs.liara.ir/all-links-llms.txt)
