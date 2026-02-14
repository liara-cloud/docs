Original link: https://docs.liara.ir/paas/nodejs/fix-common-errors/cors-error/nuxtjs/

# رفع خطای CORS در فریم‌ورک NuxtJS

برای رفع خطای CORS در زمان Proxy کردن درخواست‌ها در برنامه‌های NuxtJS باید در قدم اول با اجرای دستور زیر، پکیج nuxtjs/proxy را در پروژه‌ی خود نصب کنید:

```bash
npm install @nuxtjs/proxy
```

در قدم بعد باید `nuxtjs/proxy` را در بخش `modules` فایل `nuxt.config.js`، اضافه کرده و پیکربندی موردنظر را اعمال کنید:

```js
modules: [
  ...,
  '@nuxtjs/proxy'
],

axios: {
  proxy: true
},

proxy: {
  '/api/': {
      target: 'https://api.example.com/',
      pathRewrite: {'^/api/': ''},
      changeOrigin: true
    }
}
```

> توجه داشته باشید که مقادیر `target` و `pathRewrite` را در پروژه‌ی خود به‌ترتیب با آدرس `API` و `Route` پروژه جایگزین کنید.

## all links

[All links of docs](https://docs.liara.ir/all-links-llms.txt)
