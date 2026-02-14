Original link: https://docs.liara.ir/paas/nodejs/fix-common-errors/cors-error/strapi/

# رفع خطای CORS در فریم‌ورک Strapi

برای رفع خطای CORS در Strapi، باید تنظیمات مربوط به CORS را در فایل `config/middleware.js` به برنامه خود اضافه کنید:

```js
module.exports = ({ env }) => ({
  settings: {
    cors: {
      enabled: true,
      origin: '*', 
    },
  },
});
```

## all links

[All links of docs](https://docs.liara.ir/all-links-llms.txt)
