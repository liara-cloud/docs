Original link: https://docs.liara.ir/paas/static/related-apps/jekyll/

# استقرار برنامه‌های Jekyll در لیارا

[Jekyll](https://jekyllrb.com/) یک static site generator متن‌باز است که با زبان Ruby نوشته شده و برای ساخت وب‌سایت‌ها و وبلاگ‌های سریع و ساده استفاده می‌شود. این ابزار با استفاده از قالب‌های ساده مانند Markdown و Liquid، فایل‌های متنی را به صفحات HTML تبدیل می‌کند. Jekyll به طور خاص برای میزبانی با GitHub Pages طراحی شده و به توسعه‌دهندگان امکان می‌دهد تا به راحتی وب‌سایت‌های خود را در GitHub منتشر کنند. این فریم‌ورک برای توسعه‌دهندگانی که به دنبال یک ابزار ساده و قابل اعتماد برای ساخت وب‌سایت‌های ایستا هستند، مناسب است.

شما می‌توانید برنامه‌های Jekyll خود را با [ایجاد برنامه‌های Static](../../how-tos/create-app) در لیارا، مستقر کنید.  
برای این‌کار، کافیست تا در مسیر اصلی پروژه در Local، دستور زیر را اجرا کنید:

```json
jekyll build
```

با اجرای دستور فوق، فرایند build گرفتن از برنامه‌ی شما شروع خواهد شد و درنهایت تمام فایل‌های استاتیک در پوشه‌ی `site_` قرار داده می‌شوند.  
اکنون، کافیست تا وارد پوشه site_ شوید و قطعه کد زیر را در آن، اجرا کنید:

```js
liara deploy --platform=static
```

با اجرای دستور فوق، برنامه‌تان در لیارا، مستقر خواهد شد.  
- یک پروژه Jekyll آماده به استقرار در [https://github.com/liara-cloud/hapi-getting-started](https://github.com/liara-cloud/hapi-getting-started) وجود دارد که می‌توانید از آن، استفاده کنید.

## all links

[All links of docs](https://docs.liara.ir/all-links-llms.txt)
