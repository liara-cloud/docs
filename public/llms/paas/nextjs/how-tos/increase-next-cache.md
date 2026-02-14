Original link: https://docs.liara.ir/paas/nextjs/how-tos/increase-next-cache/

# افزایش فضای مسیر cache

پوشه `next/cache.` در پروژه‌های NextJS محلی است که برای ذخیره داده‌های کش‌شده به کار می‌رود. این داده‌ها شامل مواردی است که می‌تواند در زمان ساخت و اجرای پروژه باعث افزایش سرعت برنامه شود. 

در لیارا، مسیر ذخیره‌سازی فایل‌های کش به `tmp/` متصل شده است و از آنجایی که فضای نوشتن این دایرکتوری در حالتِ پیش‌فرضِ Writable، متغیر و در حالت [فایل‌سیستم ReadOnly](https://docs.liara.ir/paas/details/file-system) برابر با 100MB است؛ ممکن است که به افزایش فضا برای ذخیره‌سازی کش، نیاز داشته باشید. برای این کار کافیست تا طبق مراحل زیر، عمل کنید:

۱. ایجاد دیسک  
طبق مستندات [ساخت دیسک](https://docs.liara.ir/paas/disks/create)، یک دیسک با نام و اندازه دلخواه ایجاد کنید.

۲. تعریف مسیر برای دیسک  
طبق مستندات [تعریف مسیر دیسک](https://docs.liara.ir/paas/disks/route)، دیسک ایجاد شده را به مسیر `tmp/` متصل کنید.

با انجام کارهای فوق، فضای پوشه `tmp/` افزایش خواهد یافت. 

> در صورتی که به دایرکتوری `tmp/` دیسک متصل نکرده باشید، با هر بار استقرار جدید یا ری‌استارت شدن برنامه، تمامی فایل‌های cache شده، حذف می‌شوند.

## نگهداری طولانی‌تر فایل‌های کش‌شده
برای اینکه بتوانید فایل‌های cache را به مدت بیشتری نگهداری کنید؛ کافیست تا قطعه کد زیر را  
به فایل `next.config.js` اضافه کنید و مقدار فیلد `revalidate` را بر حسب نیاز خود، تغییر دهید:

```js
module.exports = {
  revalidate: 120, // 120 seconds
};
```

البته می‌توانید این مقدار را به صورت مستقیم در متد `getStaticProps` تنظیم کنید؛ به عنوان مثال:

```js
export async function getStaticProps() {
  // receiving data from an API
  const data = await fetch('https://api.example.com/data').then(res => res.json());

  return {
    props: {
      data,
    },
    revalidate: 60, // 60 seconds
  };
}
```

## نگهداری طولانی‌تر تصاویر کش‌شده
برای نگهداری طولانی‌تر تصاویر کش‌شده، کافیست تا فیلد `minimumCacheTTL` را به فایل `next.config.js` به شکل زیر، اضافه کنید و مقدار آن را بنا به نیاز خود، تغییر دهید:

```js
module.exports = {
  images: {
    minimumCacheTTL: 60, // 60 seconds
  },
}
```

## all links

[All links of docs](https://docs.liara.ir/all-links-llms.txt)
