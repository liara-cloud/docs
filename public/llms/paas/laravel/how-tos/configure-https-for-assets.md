Original link: https://docs.liara.ir/paas/laravel/how-tos/configure-https-for-assets/

# پیکربندی HTTPS برای assetها

ممکن است که پس از استقرار پروژه لاراولی خود روی لیارا، تصاویر، فایل‌های CSS یا JavaScript به درستی بارگذاری نشوند یا مرورگر خطاهایی مثل `mixed content` نمایش دهد.
این مشکل معمولاً به این دلیل رخ می‌دهد که لاراول به صورت پیش‌فرض ممکن است آدرس assetها را با `http` تولید کند، حتی با وجود اینکه وب‌سایت شما از `https` استفاده می‌کند. این مسئله در محیط‌های production که گواهی SSL فعال است، می‌تواند باعث بروز اختلال یا پیام‌های هشدار در مرورگر شود.

برای رفع این مشکل، تنها کافیست تا قطعه کد زیر را در متد `()boot` در فایل `app/Providers/AppServiceProvider.php` قرار دهید تا لاراول را مجبور کنید که در حالت production، همیشه از `https` برای تولید آدرس assetها استفاده کند:

```php
if($this->app->environment('production')) {
    \\URL::forceScheme('https');
}
```

قطعه کد فوق، به سادگی بررسی می‌کند که اگر متغیر `APP_ENV` برابر با `production` باشد، لاراول حتماً از `https` برای نمایش تصاویر و سایر assetها استفاده کند. این متغیر به‌صورت پیش‌فرض در برنامه‌های لاراول لیارا، برابر با `production` است، مگر این‌که از بخش [متغیرهای محیطی برنامه](https://docs.liara.ir/paas/details/envs) مقدار آن را تغییر داده باشید.

## all links

[All links of docs](https://docs.liara.ir/all-links-llms.txt)
