Original link: https://docs.liara.ir/paas/nodejs/related-apps/remix/

# استقرار برنامه‌های Remix در لیارا

[Remix](https://github.com/remix-run/remix) یک فریم‌ورک توسعه وب است که به منظور ایجاد برنامه‌های وب مدرن طراحی شده است. این فریم‌ورک بر پایه زبان‌های HTML و CSS و JavaScript است و از آخرین تکنولوژی‌های مرورگر پشتیبانی می‌کند.

شما می‌توانید برنامه‌های Remix خود را با [ایجاد برنامه‌های NodeJS](../../how-tos/create-app) در لیارا، مستقر کنید.

برای استقرار برنامه‌های Remix نیازی به تغییر فایل `package.json` نیست و لیارا به صورت کامل از این فریم‌ورک، پشتیبانی می‌کند. در ادامه یک مثال از اسکریپت‌های استاندارد این فریم‌ورک در فایل `package.json` آمده است:

```json
{
    "scripts": {
    "build": "remix vite:build",
    "dev": "remix vite:dev",
    "lint": "eslint --ignore-path .gitignore --cache --cache-location ./node_modules/.cache/eslint .",
    "start": "remix-serve ./build/server/index.js",
    "typecheck": "tsc"
  }
}
```

## Liara Console

در نهایت کافیست تا برنامه خود را با کنسول و پورت 3000، در لیارا آپلود کنید و عملیات استقرار را انجام دهید تا برنامه با موفقیت در لیارا مستقر شود.

## Liara CLI

در نهایت کافیست تا دستور زیر را اجرا کنید تا برنامه شما در لیارا مستقر شود   :

```bash
liara deploy --port=3000 --platform=node
```

> یک پروژه Remix آماده به استقرار در [اینجا](https://github.com/liara-cloud/remix-getting-started) وجود دارد که می‌توانید از آن، استفاده کنید.

## all links

[All links of docs](https://docs.liara.ir/all-links-llms.txt)
