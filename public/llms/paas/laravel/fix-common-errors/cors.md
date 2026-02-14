Original link: https://docs.liara.ir/paas/laravel/fix-common-errors/cors/

# رفع خطای CORS در برنامه‌های Laravel

خطای CORS (Cross-Origin Resource Sharing) یک محدودیت امنیتی در مرورگرها است که جلوی درخواست‌های HTTP از منابع مختلف را می‌گیرد.  
این خطا ممکن است زمانی رخ دهد که سعی کنید از یک دامنه یا پورت متفاوت به سروری دیگر درخواست ارسال کنید، و معمولاً با پیام خطایی شبیه به **Access-Control-Allow-Origin** در مرورگر مواجه خواهید شد. در ادامه، به رفع این خطا در فریم‌ورک‌های مختلف، پرداخته شده است:

برای حل این مشکل می‌توانید از راه حل‌‌های قرار داده شده، استفاده کنید.

## Laravel 11x

## تنظیم فایل config/cors.php

لاراول از نسخه 11 به بعد به صورت built-in از CORS پشتیبانی می‌کند.  
شما می‌توانید تنظیمات CORS را در مسیر `config/cors.php`، شخصی‌سازی کنید.  
برای شخصی‌سازی این فایل، در ابتدا بایستی با دستور زیر، آن را publish کنید:

```bash
php artisan config:publish cors
```

سپس فایل پیکربندی را ویرایش کنید تا درخواست‌های همه دامنه‌ها، متدها و هدرها را مجاز کنید:

```bash
return [
    'paths' => ['api/*'],
    'allowed_methods' => ['*'],
    'allowed_origins' => ['*'],
    'allowed_headers' => ['*'],
];
```

این تنظیمات به شما اجازه می‌دهند که درخواست‌ها از هر دامنه‌ای پذیرفته شوند و مشکلات CORS رفع شود.

## ایجاد Middleware

یک روش دیگر برای کنترل بهتر درخواست‌های CORS این است که یک Middleware برای آن ایجاد کنید. این کار به شما این امکان را می‌دهد تا هدرهای خاص را تعریف کنید.  
برای ایجاد Middleware، در ابتدا دستور زیر را اجرا کنید:  

```bash
php artisan make:middleware Cors
```

سپس، در فایل `app/Http/Middleware/Cors.php`، هدرهای مورد نیاز برای CORS را به این صورت اضافه کنید:

```laravel
return $next($request)
    ->header('Access-Control-Allow-Origin', '*')
    ->header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS')
    ->header('Access-Control-Allow-Headers', 'Content-Type, X-Auth-Token, Authorization');
```

این روش به شما کنترل بیشتری بر روی درخواست‌های CORS می‌دهد​.

## Laravel < 11

## استفاده از پکیج laravel-cors

در ابتدا، کافیست تا با اجرای دستور زیر، این پکیج را در پروژه خود، در لوکال، نصب کنید:

```bash
composer require fruitcake/laravel-cors
```

البته اگر که به خطای conflict برخورد کردید؛ کافیست تا پکیج‌های قدیمی مربوطه با ورژن barryvdh یا fruitcake را با اجرای دستور مثال زیر، حذف کرده و مجدداً آن را نصب کنید:

```bash
composer remove barryvdh/laravel-cors fruitcake/laravel-cors
composer require fruitcake/laravel-cors
```

در ادامه، بایستی، یک middleware به نام `HandleCors` در ابتدای property به نام `middleware$` در فایل `app/Http/Kernel.php` با محتوای زیر، اضافه کنید:

```php
protected $middleware = [
  \Fruitcake\Cors\HandleCors::class,
    // ...
];
```

تمامی کارها انجام شده است و کافیست دستور زیر را اجرا کنید تا مقادیر پیش‌فرض مربوط به CORS در مسیر `config/cors.php` برای‌تان قرار بگیرد و پس از آن، می‌توانید این مقادیر را بنا به نیاز خود، تغییر دهید:

```bash
php artisan vendor:publish --tag="cors"
```

> همچنین بخوانید: [مستندات مربوط به پکیج laravel-cors](https://github.com/fruitcake/laravel-cors?tab=readme-ov-file#cors-middleware-for-laravel)

## تنظیم فایل htaccess.

کافیست تا وارد فایل `public/.htaccess` شوید و تنظیمات مربوط به CORS را به پروژه خود اضافه کنید:

```config
Header set Access-Control-Allow-Origin "*"

<IfModule mod_rewrite.c>
    <IfModule mod_negotiation.c>
        Options -MultiViews -Indexes
    </IfModule>

    RewriteEngine On

    # Handle Authorization Header
    RewriteCond %{HTTP:Authorization} .
    RewriteRule .* - [E=HTTP_AUTHORIZATION:%{HTTP:Authorization}]

    # Redirect Trailing Slashes If Not A Folder...
    RewriteCond %{REQUEST_FILENAME} !-d
    RewriteCond %{REQUEST_URI} (.+)/$
    RewriteRule ^ %1 [L,R=301]

    # Send Requests To Front Controller...
    RewriteCond %{REQUEST_FILENAME} !-d
    RewriteCond %{REQUEST_FILENAME} !-f
    RewriteRule ^ index.php [L]
</IfModule>
```

## all links

[All links of docs](https://docs.liara.ir/all-links-llms.txt)
