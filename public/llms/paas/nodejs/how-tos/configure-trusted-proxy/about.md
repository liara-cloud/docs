Original link: https://docs.liara.ir/paas/nodejs/how-tos/configure-trusted-proxy/about/

# پیکربندی و تنظیمات TrustedProxies

با توجه به این نکته که تمامی درخواست‌ها توسط [reverse proxy](https://docs.liara.ir/paas/details/reverse-proxy) لیارا به برنامه‌ی شما هدایت می‌شود؛ باید در زمان استفاده از فریم‌ورک‌های مختلف برای مشاهده‌ی IP واقعی کاربران و بسیاری از قابلیت‌های دیگر تعیین کنید که برنامه‌ی شما در پشت یک reverse proxy راه‌اندازی شده است.

عبارت Trusted Proxies یا پروکسی‌های مورد اعتماد، به پروکسی‌هایی گفته می‌شود که سرور به آنها اعتماد دارد تا آدرس‌های IP واقعی کاربران را ارسال کنند. در بسیاری از مواقع، سرورهایی که پشت یک پروکسی معکوس (reverse proxy) قرار دارند، فقط آدرس IP پروکسی را می‌بینند و نه آدرس IP واقعی کاربران. برای رفع این مشکل و برای دلایلی مانند رهگیری، ردیابی یا اعمال سیاست‌های امنیتی، TrustedProxyها، IP واقعی کاربران را از طریق هدرهای HTTP خاصی مثل X-Forwarded-For یا X-Real-IP به سرورهای پشتی ارسال می‌کنند.

![how trusted proxy works](https://media.liara.ir/docs/how-trusted-proxy-works.png)

در ادامه، مستندات مربوط به تنظیم TrustedProxies برای فریم‌ورک‌های مختلف، قرار گرفته است:

## فریم‌ورک ExpressJS
[./expressjs](./expressjs)

## فریم‌ورک Hapi
[./hapi](./hapi)

## فریم‌ورک Koa
[./koa](./koa)

## all links

[All links of docs](https://docs.liara.ir/all-links-llms.txt)
