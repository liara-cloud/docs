Original link: https://docs.liara.ir/paas/nextjs/how-tos/use-static-html-export/

# استفاده از قابلیت Static HTML Export 

قابلیت [Static HTML Export](https://nextjs.org/docs/pages/building-your-application/deploying/static-exports) به شما اجازه می‌دهد تا یک وب‌سایت کاملاً استاتیک ایجاد کنید که می‌تواند بدون نیاز به سرور NodeJS اجرا شود.
این قابلیت مناسب صفحه‌های landing، وبلاگ‌ها، سامانه‌های خبری و وب‌سایت‌های این‌چنینی هست و از امکانات زیر نیز، پشتیبانی می‌کند:

- Dynamic Routes
- Prefetching
- Preloading JavaScript
- Dynamic Imports
- getStaticProps
- getStaticPaths

برای استفاده از این قابلیت، باید در Local وارد فایل `next.config.js` شوید و مقدار فیلد `output` را به شکل زیر، بنویسید:

```js
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  // distDir: 'dist', // optional, changes the output dir from 'out' to 'dist'
}

module.exports = nextConfig

```

در ادامه، کافیست تا دستور `npm run build` را در Local اجرا کنید تا دایرکتوری `out` یا همان دایرکتوری شامل فایل‌های Static برای‌تان ایجاد شود.  

## استقرار خروجی نهایی در لیارا

برای استقرار خروجی نهایی برنامه در لیارا، کافیست تا طبق مستندات [https://docs.liara.ir/paas/static/how-tos/create-app](https://docs.liara.ir/paas/static/how-tos/create-app) یک برنامه static در لیارا ایجاد کنید.  

## Liara Console

در نهایت، کافیست تا دایرکتوری نهایی را درون یک فایل `zip` قرار داده و در باکس آپلود تعبیه شده در کنسول، درج کنید و سپس عملیات استقرار را جلو ببرید.

## Liara CLI

در نهایت کافیست تا دستور زیر را اجرا کنید تا برنامه شما در لیارا مستقر شود:

```bash
liara deploy --path out
```

بعد از `path--` بایستی اسم دایرکتوری نهایی را وارد کنید که به صورت پیش‌فرض `out` است.

## غیرفعال کردن قابلیت بهینه‌سازی تصاویر

قابلیت بهینه‌سازی عکس به صورت پیش‌فرض به یک سرور NodeJS نیاز دارد و در محیط Static، قابل استفاده نیست.
بنابراین باید این قابلیت را در فایل `next.config.js` به شکل زیر، غیر فعال کنید:

```js
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  // distDir: 'dist', // optional, changes the output dir from 'out' to 'dist'
  images: {
    unoptimized: true
  }
}

module.exports = nextConfig
}

```

## قابلیت‌های پشتیبانی نشده

به صورت کلی، امکاناتی که به یک سرور NodeJS یا یک منطق dynamic که در زمان بیلد برنامه نمی‌تواند پردازش شود؛ نیاز دارند؛
در قابلیت Static HTML Export پشتیبانی نمی‌شوند، نظیر:

- API Routes
- Redirectها
- هدرها
- Middlewareها
- getStaticPaths با fallback:true
- getServerSideProps

## all links

[All links of docs](https://docs.liara.ir/all-links-llms.txt)
