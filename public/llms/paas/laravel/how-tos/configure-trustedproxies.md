Original link: https://docs.liara.ir/paas/laravel/how-tos/configure-trustedproxies/

# پیکربندی TrustedProxies در Laravel

با توجه به این نکته که تمامی درخواست‌ها توسط [reverse proxy](https://docs.liara.ir/paas/details/reverse-proxy) لیارا به برنامه‌ی شما هدایت می‌شود؛ باید در زمان استفاده از فریم‌ورک‌های مختلف برای مشاهده‌ی IP واقعی کاربران و بسیاری از قابلیت‌های دیگر تعیین کنید که برنامه‌ی شما در پشت یک reverse proxy راه‌اندازی شده است.

عبارت Trusted Proxies یا پروکسی‌های مورد اعتماد، به پروکسی‌هایی گفته می‌شود که سرور به آنها اعتماد دارد تا آدرس‌های IP واقعی کاربران را ارسال کنند. در بسیاری از مواقع، سرورهایی که پشت یک پروکسی معکوس (reverse proxy) قرار دارند، فقط آدرس IP پروکسی را می‌بینند و نه آدرس IP واقعی کاربران. برای رفع این مشکل و برای دلایلی مانند رهگیری، ردیابی یا اعمال سیاست‌های امنیتی، TrustedProxyها، IP واقعی کاربران را از طریق هدرهای HTTP خاصی مثل X-Forwarded-For یا X-Real-IP به سرورهای پشتی ارسال می‌کنند.

![how trusted proxy works](https://media.liara.ir/docs/how-trusted-proxy-works.png)

برای این که در برنامه‌ی‌تان بتوانید به آی‌پی واقعی کاربر دسترسی داشته باشید، کافیست تا در دایرکتوری `config` یک فایل به نام `trustedproxy.php` ایجاد کنید و یا اگر که این فایل از قبل وجود دارد، فقط کافیست تا قطعه کد زیر را در آن، قرار دهید:

```php
<?php

return [

    /*
     * Set trusted proxy IP addresses.
     *
     * Both IPv4 and IPv6 addresses are supported, along with CIDR notation.
     * The "*" character is syntactic sugar within TrustedProxy to trust any
     * proxy that connects directly to your server, a requirement when you cannot
     * know the address of your proxy (e.g. if using Elastic Load Balancing).
     */
    'proxies' => env('TRUSTED_PROXIES', '*'), // Accepts the '*' wildcard for all proxies.

    /*
     * To trust one or more specific proxies that connect directly to your server,
     * use an array instead of "*":
     *
     * 'proxies' => [
     *     '192.168.1.1',
     *     '192.168.1.2',
     * ]
     */

    /*
     * Or, to trust all proxies that connect directly to your server, use a "*"
     *
     * Note: '*' does not mean 'all proxies'. It means 'all proxies that connect
     * directly to your server' (e.g. all load balancers, all CDN servers).
     */

    /*
     * Default Header Names
     *
     * Change these if the proxy does not use the default header names.
     */
    'headers' => [
        \Illuminate\Http\Request::HEADER_FORWARDED    => 'FORWARDED',
        \Illuminate\Http\Request::HEADER_X_FORWARDED_FOR => 'X_FORWARDED_FOR',
        \Illuminate\Http\Request::HEADER_X_FORWARDED_HOST => 'X_FORWARDED_HOST',
        \Illuminate\Http\Request::HEADER_X_FORWARDED_PORT => 'X_FORWARDED_PORT',
        \Illuminate\Http\Request::HEADER_X_FORWARDED_PROTO => 'X_FORWARDED_PROTO',
        \Illuminate\Http\Request::HEADER_X_FORWARDED_AWS_ELB  => 'X_FORWARDED_AWS_ELB',
    ],

];
```

تمامی کارها انجام شده است و شما می‌توانید برای بررسی این فایل، با اجرای دستور زیر، یک کنترلر برای نمایش آی‌پی ایجاد کنید:

```php
php artisan make:controller IPController
```

سپس، کافیست تا قطعه کد زیر را در `app/Http/Controllers/IPController.php` قرار دهید:

```php
<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class IPController extends Controller
{
    /**
     * Display the real IP address of the user.
     *
     * @return \Illuminate\Http\Response
     */
    public function show(Request $request)
    {
        $ipAddress = $request->ip();
        return response()->json(['ip' => $ipAddress]);
    }
}
```

در نهایت، بایستی که قطعه کد زیر را به فایل `routes/web.php` اضافه کنید:

```php
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\IPController;

Route::get('/ip', [IPController::class, 'show']);
```

حال، می‌توانید برنامه خود را در لیارا مستقر کرده، و پس از استقرار موفق برنامه، وارد صفحه `ip/` آن، شوید تا آی‌پی واقعی‌تان به شما نمایش داده شود.

## all links

[All links of docs](https://docs.liara.ir/all-links-llms.txt)
