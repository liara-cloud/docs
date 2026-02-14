Original link: https://docs.liara.ir/paas/laravel/how-tos/manage-laravel-logs/

# مدیریت لاگ‌ها در برنامه‌های Laravel

لاگ‌های یک فریم‌ورک وظیفه دارند اتفاقات رخ داده در نرم‌افزار مثل errorها یا exceptionها و حتی اطلاعاتی که خود توسعه‌دهنده به دلخواه خود در بخش‌های مختلف نرم‌افزار درنظرگرفته را، ثبت کنند. Laravel روش‌های مختلفی برای لاگ‌‌گیری دارد که اصطلاحاً نام آن‌ Channel Drivers است.  
برای نمونه، اگر که قصد دارید لاگ‌های برنامه خود را در ترمینال ببینید، می‌توانید از درایور `errorlog` استفاده کنید؛ اگر که قصد دارید لاگ‌های برنامه را در یک فایل ذخیره کنید، می‌توانید از درایور `single` استفاده کنید. همچنین می‌توانید برای ذخیره روزانه لاگ‌ها در فایل‌های مجزا، از درایور `daily` بهره ببرید.

در لیارا، لاراول به صورت خودکار برای مدیریت لاگ‌ها از درایور `errorlog` استفاده می‌کند. اگر که قصد تغییر این درایور را دارید؛ کافیست تا متغیر محیطی `LOG_CHANNEL` را طبق مستندات [تنظیم متغیرهای محیطی](https://docs.liara.ir/paas/details/envs) تغییر دهید. به عنوان مثال:

```bash
LOG_CHANNEL=daily
```

## مدیریت لاگ‌ها با چند درایور

شما می‌توانید با استفاده از درایور `stack`، از چند درایور به صورت همزمان، برای مدیریت لاگ‌ها، استفاده کنید. به عنوان مثال، فرض کنید که قصد دارید هم لاگ‌ها را در ترمینال ببینید و هم آن‌ها را روزانه، در فایل‌های مجزا، ذخیره کنید؛ برای این‌کار کافیست تا در ابتدا، طبق  
[مستندات تنظیم متغیرهای محیطی](https://docs.liara.ir/paas/details/envs)، متغیر `LOG_CHANNEL` را به شکل زیر، تغییر دهید:

```bash
LOG_CHANNEL=stack
```

در ادامه، کافیست تا در فایل `config/logging.php`، فیلد `channels` آرایه `stack` را، به شکل زیر، تغییر دهید:

```php
return [

    'channels' => [

        'stack' => [
            'driver' => 'stack',
            'channels' => ['errorlog', 'daily'],
            'ignore_exceptions' => false,
        ],

        'daily' => [
            'driver' => 'daily',
            'path' => storage_path('logs/laravel.log'),
            'level' => env('LOG_LEVEL', 'debug'),
            'days' => env('LOG_DAILY_DAYS', 14),
            'replace_placeholders' => true,
        ],

        'errorlog' => [
            'driver' => 'errorlog',
            'level' => env('LOG_LEVEL', 'debug'),
            'replace_placeholders' => true,
        ],
    ],

];
```

در نهایت، با استقرار مجدد برنامه، تغییرات مدنظرتان، ذخیره خواهد شد.

> می‌توانید برای اطلاعات بیشتر، به [مستندات رسمی لاراول](https://laravel.com/docs/master/logging#building-log-stacks) مراجعه کنید.

## all links

[All links of docs](https://docs.liara.ir/all-links-llms.txt)
