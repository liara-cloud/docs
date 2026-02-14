Original link: https://docs.liara.ir/paas/nextjs/how-tos/set-envs/

# استفاده از متغیرهای محیطی 

برای استفاده از متغیرهای محیطی در برنامه خود، در ابتدا باید طبق [مستندات تنظیم متغیرهای محیطی](https://docs.liara.ir/paas/details/envs)، متغیرهای محیطی را به برنامه خود، اضافه کنید.  
در ادامه، شما می‌توانید با استفاده از دستور `.process.env` به متغیرهای محیطی خود در برنامه NextJS، دسترسی داشته باشید؛ به عنوان مثال:

```js
console.log(`app listening on ${process.env.LIARA_URL}`) 
```

در مثال فوق، `LIARA_URL` یک متغیر محیطی است که از قبل، به برنامه فرضی در لیارا، اضافه شده است.


## بارگذاری متغیرهای محیطی در سرور

شما می‌توانید برای بارگذاری متغیرهای محیطی محرمانه خود یک فایل به نام `env.production.` در مسیر اصلی پروژه خود ایجاد کنید و متغیرهای محیطی خود را در آنجا تعریف کرده و در پروژه خود استفاده کنید. پس از انجام این کارها، می‌توانید پروژه خود را در لیارا مستقر کنید.  


## استفاده از متغیرهای محیطی در زمان build پروژه

برای اینکه به متغیرهای محیطی در زمان build پروژه، دسترسی داشته باشید. کافیست تا  
آن‌ها را در بخش متغیرهای محیطی برنامه خود در بخش تنظیمات برنامه، تنظیم کنید. به عنوان مثال، فرض کنید که یک متغیر به نام `BUILD_TIME_VAR` را در بخش متغیرهای محیطی برنامه خود، مانند زیر، تنظیم کرده‌اید:

```js
BUILD_TIME_VAR=ThisIsBuildTime
```

برای استفاده از این متغیر در زمان build پروژه، بایستی مانند قطعه کد زیر، آن را به بخش `env` در فایل `next.config.js`، اضافه کنید:

```js
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    BUILD_TIME_VAR: process.env.BUILD_TIME_VAR,
  },
  };

export default nextConfig;
```

با انجام کار فوق، می‌توانید در زمان build پروژه، به متغیرمحیطی مدنظرتان دسترسی داشته باشید؛ به عنوان مثال، برای دسترسی به متغیر مثال فوق، کافیست تا قطعه کد زیر را در فایل `next.config.js`، قرار دهید:

```js
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    BUILD_TIME_VAR: process.env.BUILD_TIME_VAR,
  },
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    console.log('Building with environment variable:', process.env.BUILD_TIME_VAR);
    return config;
  },
  };

export default nextConfig;
```

> اگر که متغیرهای محیطی را پس از استقرار، به برنامه اضافه کرده‌اید. برای بارگذاری موفق آن‌ها، بایستی برنامه خود را ری‌استارت کنید.

## all links

[All links of docs](https://docs.liara.ir/all-links-llms.txt)
