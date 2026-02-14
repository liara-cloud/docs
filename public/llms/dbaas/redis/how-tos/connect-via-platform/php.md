Original link: https://docs.liara.ir/dbaas/redis/how-tos/connect-via-platform/php/

# اتصال به دیتابیس Redis در برنامه‌های PHP

برای اتصال به دیتابیس Redis باید در ابتدا
اکستنشن `redis` را در PHP نصب کنید.
پس از آن، کافیست تا 
اطلاعات مربوط به دیتابیس خود را 
به متغیرهای محیطی برنامه خود، اضافه کنید؛ به عنوان مثال:

```bash
REDIS_URI=redis://:Eg55XLPAdhavc0Z3Lw5f4LQZ@bromo.liara.cloud:30223/0
```

برای مدیریت بهتر دیتابیس redis، توصیه می‌شود از پکیج `predis` استفاده کنید؛ برای این کار، کافیست تا در مسیر اصلی پروژه، دستور زیر را اجرا کنید:

```bash
composer require predis/predis
```

در نهایت، می‌توانید مانند قطعه کد زیر، به دیتابیس خود متصل شده و از آن، استفاده کنید:

```php
<?php
require 'vendor/autoload.php';

try {
    
    $redisUri = getenv("REDIS_URI");
    
    $client = new Predis\Client($redisUri);
    $client->set('test_key', 'Hello, Redis!');
    $value = $client->get('test_key');
    
    echo "connection successful: " . $value . "\n";
} catch (Exception $e) {
    echo "connection failed. error: " . $e->getMessage() . "\n";
}
?>
```

## استفاده از Connection Pooling

مفهوم Connection pooling به معنای استفاده از یک مجموعه اتصالات از پیش ساخته شده برای اتصال به پایگاه داده است. این تکنیک باعث می‌شود به جای ایجاد و بستن مکرر اتصالات، از اتصالات موجود در مجموعه استفاده شود که کارایی را افزایش می‌دهد.  
> همچنین بخوانید: [آشنایی بیشتر با قابلیت Connection Pooling](https://docs.liara.ir/dbaas/details/connection-pool)

در Redis نیازی به تنظیمات اضافی برای Connection Pooling نخواهید داشت، زیرا درایور `redis` در لاراول، به طور خودکار اتصالات را مدیریت می‌کند.

## all links

[All links of docs](https://docs.liara.ir/all-links-llms.txt)
