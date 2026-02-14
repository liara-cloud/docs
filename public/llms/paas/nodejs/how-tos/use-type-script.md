Original link: https://docs.liara.ir/paas/nodejs/how-tos/use-type-script/

# استفاده از TypeScript در برنامه‌های NodeJS

تایپ‌اسکریپت یک زبان برنامه‌نویسی متن‌باز است که توسط Microsoft توسعه داده شده است و به عنوان یک زبان فرعی (superset) از JavaScript شناخته می‌شود و با استفاده از امکاناتی که ارائه می‌دهد؛ به برنامه‌نویسان کمک می‌کند تا پروژه‌های پیچیده‌تر و بزرگ‌تری را توسعه بدهند.

برای استقرار برنامه‌های NodeJS مبتنی بر TypeScript، بایستی در ابتدا در Local، در مسیر اصلی پروژه، یک دایرکتوری به نام `src` داشته باشید و فایل‌های با پسوند `ts.` در آنجا قرار داشته باشند.

با در نظر گرفتن مورد بالا، باید در مسیر اصلی پروژه، یک فایل به نام `tsconfig.json` ایجاد کنید و محتوای زیر را درون آن قرار دهید:

```json
{
    "compilerOptions": {
      "target": "ES6",
      "module": "commonjs",
      "strict": true,
      "esModuleInterop": true,
      "outDir": "./dist",
      "rootDir": "./src"
    },
    "include": ["src/**/*"],
    "exclude": ["node_modules"]
  }
```

سپس، دستور زیر را اجرا کنید تا برنامه کامپایل شده و در پوشه `dist` قرار بگیرد:

```bash
npx tsc 
```

در ادامه، در فایل `package.json` اسکریپت‌های `start` و `build` را باید به شکل زیر بنویسید (فرض کنید که نام فایل اصلی پروژه، `server.js` است):

```json
{
  "scripts": {
    "start": "node dist/server.js",
    "build": "tsc"
  }
}
```

در نهایت، می‌توانید با اجرای دستور `liara deploy` و یا با استفاده از Console، برنامه خود را در لیارا، مستقر کنید.

> بهتر است که فایل `package-lock.json` را از پروژه خود پاک کنید و سپس عملیات استقرار را انجام دهید.

> در نظر داشته باشید که تمامی مطالب مذکور، تحت یک مثال آورده شده‌اند و شما می‌توانید موارد فوق را، طبق پروژه خود، شخصی‌سازی کنید.

> یک برنامه NodeJS مبتنی بر TypeScript آماده استقرار در [https://github.com/liara-cloud/nodejs-getting-started/tree/typescript](https://github.com/liara-cloud/nodejs-getting-started/tree/typescript) قرار دارد که می‌توانید از آن، استفاده کنید.

## all links

[All links of docs](https://docs.liara.ir/all-links-llms.txt)
