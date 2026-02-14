Original link: https://docs.liara.ir/paas/static/related-apps/gatsby/

# استقرار برنامه‌های GatsbyJS در لیارا

[GatsbyJS](https://www.gatsbyjs.com/) یک فریم‌ورک متن‌باز مبتنی بر React است که برای ساخت وب‌سایت‌ها و برنامه‌های وب سریع و بهینه استفاده می‌شود. این فریم‌ورک با استفاده از GraphQL به توسعه‌دهندگان اجازه می‌دهد تا داده‌ها را از منابع مختلف (مثل CMSها، فایل‌های Markdown و APIها) دریافت و مدیریت کنند. GatsbyJS به دلیل تولید صفحات ایستا در زمان ساخت (static site generation) و همچنین بهینه‌سازی برای SEO و عملکرد بالا، محبوبیت زیادی پیدا کرده است.

شما می‌توانید برنامه‌های Gatsby خود را با [ایجاد برنامه‌های Static](https://docs.liara.ir/how-tos/create-app) در لیارا، مستقر کنید.  
برای این‌کار، کافیست تا در مسیر اصلی پروژه در Local، دستور زیر را اجرا کنید:

```json
npm run build
```

با اجرای دستور فوق، فرایند build گرفتن از برنامه‌ی شما شروع خواهد شد و درنهایت تمام فایل‌های استاتیک اعم از فایل‌های `HTML/CSS/JS` در پوشه‌ی `public` قرار داده می‌شوند.  
اکنون، کافیست تا وارد پوشه public شوید و قطعه کد زیر را در آن، اجرا کنید:

```js
liara deploy --platform=static
```

با اجرای دستور فوق، برنامه‌تان در لیارا، مستقر خواهد شد.

## all links

[All links of docs](https://docs.liara.ir/all-links-llms.txt)
