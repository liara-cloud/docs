Original link: https://docs.liara.ir/paas/laravel/related-apps/voyager/

# استقرار برنامه‌های شامل Voyager در لیارا

[Voyager](https://voyager.devdojo.com/) یک admin panel برای فریم‌ورک Laravel است که به توسعه‌دهندگان کمک می‌کند تا به سرعت و به راحتی، یک پنل مدیریت کامل و قابل تنظیم برای برنامه‌های وب خود ایجاد کنند.
این ابزار امکاناتی مانند مدیریت کاربران، مدیریت پست‌ها، آپلود فایل‌ها، تنظیمات CRUD  و ... را فراهم می‌کند. Voyager باعث می‌شود که توسعه‌دهندگان بتوانند بدون نیاز به نوشتن کدهای زیاد، یک پنل مدیریت حرفه‌ای و کارآمد داشته باشند.

> در نظر داشته باشید که Voyager فقط در لاراول 8 و 9 پشتیبانی می‌شود. بنابراین نمی‌توانید
> در نسخه‌های بالاتر/پایین‌تر لاراول از این ابزار، استفاده کنید.

برای استفاده از پکیج Voyager در برنامه‌های Laravel باید در ابتدا پکیج `tcg/voyager` را در بخش `dont-discover` فایل `composer.json` برنامه‌ی خود اضافه کنید:

```json
"extra": {
    "laravel": {
        "dont-discover": [
            "tcg/voyager"
        ]
    }
},
```

سپس، بایستی در فایل `config/app.php` دو خط کد زیر را به لیست `providers` اضافه کنید:

```json
TCG\\Voyager\\VoyagerServiceProvider::class,
TCG\\Voyager\\Providers\\VoyagerDummyServiceProvider::class,
```

تمامی کارها انجام شده است و شما می‌توانید برنامه‌تان را در لیارا مستقر کنید. 

> اگر که در نصب پکیج voyager در لوکال با مشکل مواجه شدید می‌توانید از دستور `composer require tcg/voyager --with-all-dependencies` استفاده کنید.
> یک برنامه لاراول شامل Voyager در [اینجا](https://github.com/liara-cloud/laravel-getting-started/tree/voyager) قرار دارد که می‌توانید از آن، استفاده کنید.

## all links

[All links of docs](https://docs.liara.ir/all-links-llms.txt)
