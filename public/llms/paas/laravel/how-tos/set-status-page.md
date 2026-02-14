Original link: https://docs.liara.ir/paas/laravel/how-tos/set-status-page/

# راه‌اندازی صفحه status

صفحه `status/` در لاراول یک مسیر اختصاصی برای بررسی سلامت اپلیکیشن است که معمولاً در Load Balancer , Kubernetes و سرویس‌های مانیتورینگ استفاده می‌شود. این صفحه می‌تواند اتصال به دیتابیس، کش، سرویس‌های خارجی و سلامت کلی سرور را بررسی کرده و در قالب یک پاسخ JSON استاندارد وضعیت سیستم را گزارش دهد. 

داشتن این صفحه باعث بهبود پایداری اپلیکیشن، تشخیص سریع مشکلات و جلوگیری از Downtime می‌شود. همچنین، در زیرساخت‌های ابری و مقیاس‌پذیر، وجود یک Health Check دقیق، برای اتصال صحیح بین سرویس‌ها و عملکرد پایدار سرور ضروری است.

برای ایجاد صفحه `status/` در لاراول، کافیست در فایل `routes/web.php` یک مسیر جدید برای این صفحه تعریف کنید:

```laravel
Route::get('/status', function () {
    return response()->json([
        'status' => 'OK',
        'timestamp' => now()
    ], 200);
});
```

مسیر فوق، به سادگی بررسی می‌کند که اپلیکیشن در حال اجرا است و یک پاسخ `OK` ارسال می‌کند.
در نسخه پیشرفته‌تر، می‌توان بررسی کرد که اتصال به دیتابیس، کش و APIهای خارجی برقرار است یا خیر:

```laravel
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Route;

Route::get('/status', function () {
    try {
       
        DB::connection()->getPdo();

        Cache::put('health_check', 'ok', 10);
        $cacheStatus = Cache::get('health_check');

        // check external service
        $externalService = Http::get('https://www.google.com')->successful() ? 'available' : 'unavailable';

        return response()->json([
            'status' => 'OK',
            'database' => 'connected',
            'cache' => $cacheStatus === 'ok' ? 'available' : 'unavailable',
            'external_service' => $externalService,
            'timestamp' => now()
        ], 200);
    } catch (\Exception $e) {
        return response()->json([
            'status' => 'FAIL',
            'error' => $e->getMessage()
        ], 500);
    }
});
```

قطعه کد فوق، ابتدا اتصال به دیتابیس، کش و یک سرویس خارجی را بررسی می‌کند و در صورت موفقیت، یک پاسخ `OK` ارسال می‌کند. در غیر این صورت، یک پاسخ `FAIL` با خطای مربوطه ارسال می‌شود.
همچنین، می‌توانید یک کنترلر جداگانه برای مدیریت وضعیت سلامت برنامه ایجاد کنید. در ابتدا، دستور 
زیر را اجرا کنید تا کنترلر ساخته شود:

```laravel
php artisan make:controller HealthCheckController
```

در ادامه، فایل `app/Http/Controllers/HealthCheckController.php/` را به صورت زیر تغییر دهید:

```bash
<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\Http;

class HealthCheckController extends Controller
{
    public function status()
    {
        try {
            
            DB::connection()->getPdo();

            
            Cache::put('health_check', 'ok', 10);
            $cacheStatus = Cache::get('health_check');

            
            $externalService = Http::get('https://www.google.com')->successful() ? 'available' : 'unavailable';

            return response()->json([
                'status' => 'OK',
                'database' => 'connected',
                'cache' => $cacheStatus === 'ok' ? 'available' : 'unavailable',
                'external_service' => $externalService,
                'timestamp' => now()
            ], 200);
        } catch (\Exception $e) {
            return response()->json([
                'status' => 'FAIL',
                'error' => $e->getMessage()
            ], 500);
        }
    }
}
```

در نهایت، مسیر مربوط به کنترلر را در فایل `routes/web.php` تعریف کنید:

```laravel
use App\Http\Controllers\HealthCheckController;

Route::get('/status', [HealthCheckController::class, 'status']);
```

برای اضافه‌کردن Health Check در Kubernetes نیز، کافیست تا در فایل `deployment.yaml` لاراول، قطعه کد زیر را، اضافه کنید:

```yaml
livenessProbe:
  httpGet:
    path: /status
    port: 80
  initialDelaySeconds: 3
  periodSeconds: 5

readinessProbe:
  httpGet:
    path: /status
    port: 80
  initialDelaySeconds: 3
  periodSeconds: 5
```

## all links

[All links of docs](https://docs.liara.ir/all-links-llms.txt)
