Original link: https://docs.liara.ir/paas/nextjs/fix-common-errors/modify-config-file/

# رفع خطای Could not modify config file

لیارا به‌صورت خودکار فایل `next.config.js` برنامه‌ی شما را پیدا کرده و در این فایل، تنظیماتی را اضافه می‌کند تا برنامه برای اجرا آماده شود.  
البته در صورتی که خودتان آن را تغییر داده باشید؛ لیارا تغییری را بر روی آن، اعمال نخواهد کرد.  
حال، در صورتی که با خطای `could not modify config file` مواجه شدید،  
نیاز است قطعه‌کد زیر را متناسب با نسخه‌ی NextJS پروژه‌تان، به فایل `next.config.js` اضافه کنید:

## NextJS >= 12.2

```js
module.exports = {
  output: 'standalone',
}
```

## NextJS < 12.2

```js
module.exports = {
  experimental: {
    outputStandalone: true,
  },
}
```

در نهایت کافیست تا با اجرای دستور `liara deploy`، برنامه‌تان را مجدداً در لیارا، مستقر کنید.

## all links

[All links of docs](https://docs.liara.ir/all-links-llms.txt)
