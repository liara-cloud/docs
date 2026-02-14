Original link: https://docs.liara.ir/paas/static/related-apps/nuxtjs/

# استقرار برنامه‌های NuxtJS SSG در لیارا

[NuxtJS](https://nuxt.com/) یک فریم‌ورک مبتنی بر Vue است که بسیاری از قابلیت‌ها مانند SSR را برای شما به ارمغان می‌آورد. شما می‌توانید برنامه‌های NuxtJS خود را با [ایجاد برنامه‌های Static](../../how-tos/create-app) بر روی لیارا استقرار کنید.

> همچنین بخوانید: [استقرار برنامه‌های NuxtJS با پلتفرم NodeJS لیارا](https://docs.liara.ir/paas/nodejs/related-apps/nuxtjs)

برای گرفتن خروجی استاتیک در برنامه‌های NuxtJS بایستی مقدار `target` را در فایل `nuxt.config.js` برابر با `static` قرار دهید:

```js
export default {
  target: 'static'
}
```

درنهایت با هر بار اجرای دستور `nuxt generate`، خروجی استاتیک برنامه‌ی شما اعم از فایل‌های HTML , CSS , JavaScript در مسیر `dist` قرار خواهد گرفت. همچنین توجه داشته باشید که در این روش تمام درخواست‌های مورد نیاز برای دریافت اطلاعات از API ها در زمان اجرای دستور `nuxt generate` ارسال شده و اطلاعات دریافت شده نیز در پوشه‌ای با نام static در مسیر dist قرار داده می‌شود.
حال، برای استقرار برنامه خود در لیارا، کافیست تا وارد دایرکتوری `dist` شوید و با اجرای دستور زیر، برنامه خود را در لیارا، مستقر کنید:

```js
liara deploy --platform=static
```

## all links

[All links of docs](https://docs.liara.ir/all-links-llms.txt)
