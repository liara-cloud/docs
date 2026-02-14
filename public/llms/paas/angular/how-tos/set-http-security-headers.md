Original link: https://docs.liara.ir/paas/angular/how-tos/set-http-security-headers/

# تنظیم هدرهای امنیتی HTTP

هدرهای امنیتی HTTP، مجموعه‌ای از تنظیمات در پاسخ‌های HTTP هستند که برای افزایش امنیت وب‌سایت‌ها مورد استفاده قرار می‌گیرند، به عنوان مثال،  
جلوگیری از حملات XSS , CSRF و Clickjacking. این هدرها مرورگر را ملزم به اعمال سیاست‌های امنیتی خاصی مانند  
Content Security Policy (CSP) و Strict-Transport-Security (HSTS)  
می‌کنند.

شما می‌توانید هدرهای امنیتی را مانند قطعه کد مثال زیر، در فایل `liara_nginx.conf` تنظیم کرده و نحوه‌ی برقراری ارتباط با سایت را، برای مرورگرها، تعیین کنید:

```nginx
add_header X-Frame-Options DENY always;
add_header X-Content-Type-Options: nosniff;
add_header X-XSS-Protection "1; mode=block" always;
add_header Strict-Transport-Security "max-age=63072000; includeSubdomains; preload";

location / {
  index index.html index.htm;
  try_files $uri $uri/ /index.html =404;
}

location ~ /\\.well-known {
  allow all;
}
```

بعد از درج قطعه کد فوق کد، کافیست تا برنامه خود را مجدداً در لیارا، مستقر کنید.

> توجه داشته باشید که قبل از فعال‌سازی `HSTS` با تنظیم هدر `Strict-Transport-Security` باید SSL دامنه خود را فعال کرده باشید.  
> همچنین بخوانید: [تهیه گواهی SSL](https://docs.liara.ir/paas/domains/enable-ssl)

## all links

[All links of docs](https://docs.liara.ir/all-links-llms.txt)
