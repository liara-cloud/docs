Original link: https://docs.liara.ir/dbaas/redis/how-tos/connect-via-platform/laravel/

# اتصال به دیتابیس Redis در برنامه‌های Laravel

برای اتصال به دیتابیس Redis نیاز به انجام کار خاصی نیست.  
فقط کافیست تا  
اطلاعات مربوط به دیتابیس خود را  
به متغیرهای محیطی برنامه خود، اضافه کنید؛ به عنوان مثال:
```bash
REDIS_CLIENT=phpredis
REDIS_HOST=bromo.liara.cloud
REDIS_PASSWORD=WIxYwk60bqJoTif795flsFN8
REDIS_PORT=34130
```

تمامی کارها انجام شده و شما می‌توانید از دیتابیس خود استفاده کنید. به عنوان مثال، می‌توانید برای تست اتصال، قطعه کد زیر را در فایل `routes/web.php` قرار دهید:

```php
use Illuminate\Support\Facades\Redis;
Route::get('/test-redis', function () {
    try {
        Redis::connection()->ping();
        return "connection successfull";
    } catch (Exception $e) {
        return "connection failed: " . $e->getMessage();
    }
});
```

اکنون می‌توانید برنامه‌تان را اجرا کرده و در صفحه `test-redis/` وضعیت اتصال به دیتابیس خود را بررسی کنید.

## استفاده از Connection Pooling

مفهوم Connection pooling به معنای استفاده از یک مجموعه اتصالات از پیش ساخته شده برای اتصال به پایگاه داده است. این تکنیک باعث می‌شود به جای ایجاد و بستن مکرر اتصالات، از اتصالات موجود در مجموعه استفاده شود که کارایی را افزایش می‌دهد.  
> همچنین بخوانید: [آشنایی بیشتر با قابلیت Connection Pooling](https://docs.liara.ir/dbaas/details/connection-pool)

در Redis نیازی به تنظیمات اضافی برای Connection Pooling نخواهید داشت، زیرا درایور `redis` در لاراول، به طور خودکار اتصالات را مدیریت می‌کند.

## all links

[All links of docs](https://docs.liara.ir/all-links-llms.txt)
