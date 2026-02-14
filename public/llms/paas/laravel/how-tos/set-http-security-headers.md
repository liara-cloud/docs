Original link: https://docs.liara.ir/paas/laravel/how-tos/set-http-security-headers/

# تنظیم هدرهای امنیتی HTTP

هدرهای امنیتی HTTP، مجموعه‌ای از تنظیمات در پاسخ‌های HTTP هستند که برای افزایش امنیت وب‌سایت‌ها مورد استفاده قرار می‌گیرند، به عنوان مثال،  
جلوگیری از حملات XSS , CSRF و Clickjacking. این هدرها مرورگر را ملزم به اعمال سیاست‌های امنیتی خاصی مانند  
Content Security Policy (CSP) و Strict-Transport-Security (HSTS)  
می‌کنند.

شما می‌توانید هدرهای امنیتی را مانند قطعه کد مثال زیر، در فایل `public/.htaccess` تنظیم کرده و نحوه‌ی برقراری ارتباط با سایت را، برای مرورگرها، تعیین کنید:

```bash
<IfModule mod_rewrite.c>
    <IfModule mod_negotiation.c>
        Options -MultiViews -Indexes
    </IfModule>

    Header always set X-Frame-Options "DENY"
    Header always set X-Content-Type-Options "nosniff"
    Header always set X-XSS-Protection "1; mode=block"
    Header always set Strict-Transport-Security "max-age=63072000; includeSubdomains; preload"

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

بعد از درج قطعه کد فوق کد، کافیست تا برنامه خود را مجدداً در لیارا، مستقر کنید.

> توجه داشته باشید که قبل از فعال‌سازی `HSTS` با تنظیم هدر `Strict-Transport-Security` باید SSL دامنه خود را فعال کرده باشید.  
> همچنین بخوانید: [تهیه گواهی SSL](https://docs.liara.ir/paas/domains/enable-ssl)

## all links

[All links of docs](https://docs.liara.ir/all-links-llms.txt)
