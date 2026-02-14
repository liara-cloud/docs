Original link: https://docs.liara.ir/paas/laravel/related-apps/laravel-octane/

# استقرار برنامه‌ها با Laravel Octane در لیارا

[Larave Octane](https://github.com/laravel/octane)  ابزاری برای افزایش کارایی اپلیکیشن‌های لاراول است که با استفاده از سرورهای Swoole یا RoadRunner سرعت اجرا و پاسخگویی برنامه‌ها را بهبود می‌بخشد.

برای استفاده از این ابزار قدرتمند، در ابتدا کافیست تا در Local، با اجرای دستور زیر، آن را در پروژه خود، قرار دهید:

```bash
composer require laravel/octane
```

در ادامه، بایستی با اجرای دستور زیر، Octane را نصب کرده و پیکربندی‌های اولیه را انجام دهید:

```bash
php artisan octane:install
```

در این مرحله، از شما پرسیده می‌شود که از کدام سرور قصد دارید استفاده کنید و شما باید سرور `Swoole` را انتخاب کنید.  
در نهایت، کافیست تا در مسیر اصلی پروژه، یک فایل به نام `liara.json` ایجاد کنید و قطعه کد زیر را در آن، قرار دهید:

```json
{
  "args": [ "php artisan octane:start --server=swoole --host=0.0.0.0 --port=80" ]
}
```

تمامی تنظیمات مربوط به Octane انجام شده است و کافیست تا برنامه‌تان را در لیارا، مستقر کنید.

## all links

[All links of docs](https://docs.liara.ir/all-links-llms.txt)
