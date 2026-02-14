Original link: https://docs.liara.ir/paas/nodejs/related-apps/blitzjs/

# استقرار برنامه‌های BlitzJS در لیارا

نرم‌افزار BlitzJS یک فریم‌ورک جدید برای توسعه وب با زبان جاوااسکریپت و تایپ‌اسکریپت است که بر پایه‌ی NextJS ساخته شده است. این فریم‌ورک توسعه‌دهندگان را قادر می‌سازد تا اپلیکیشن‌های خود را با ساده‌ترین روش ممکن ایجاد کنند. BlitzJS امکاناتی مانند یکپارچه‌سازی داده‌ها، مسیریابی خودکار و احراز هویت داخلی را به شما، ارائه می‌دهد.

شما می‌توانید برنامه‌های BlitzJS خود را با [ایجاد برنامه‌های NodeJS](../../how-tos/create-app) در لیارا، مستقر کنید.

برای استقرار برنامه‌های BlitzJS، بایستی اسکریپت `build` را به شکل زیر بنویسید:

```json
"scripts": {
    "dev": "blitz dev",
    "build": "npx prisma generate && blitz build",
    "start": "blitz start",
    "studio": "blitz prisma studio",
    "lint": "eslint --ignore-path .gitignore --ext .js,.ts,.tsx .",
    "test": "vitest run --passWithNoTests",
    "test:watch": "vitest",
    "prepare": "husky install"
  },
```

همچنین، بایستی با استفاده از ترمینال Linux یا MacOS دستور زیر را اجرا کنید:

```bash
openssl rand -hex 16
```

در ادامه، مقدار داده شده را باید در متغیری به نام `SESSION_SECRET_KEY` بریزید و طبق [مستندات تنظیم متغیرهای محیطی](https://docs.liara.ir/paas/details/envs) آن را به برنامه خود اضافه کنید.

به صورت کلی، کافیست تا متغیرهای محیطی زیر به برنامه اضافه شوند (مقدار `SESSION_SECRET_KEY` فرضی است):

```bash
SESSION_SECRET_KEY=3a68b914c9c446565090f8f56142924c
ENV_SILENT=true
```

## استقرار برنامه

### Liara Console

در نهایت کافیست تا برنامه خود را با کنسول و پورت 3000، در لیارا آپلود کنید و عملیات استقرار را انجام دهید تا برنامه با موفقیت در لیارا مستقر شود.

### Liara CLI

در نهایت کافیست تا دستور زیر را اجرا کنید تا برنامه شما در لیارا مستقر شود:

```bash
liara deploy --port=3000 --platform=node
```

## all links

[All links of docs](https://docs.liara.ir/all-links-llms.txt)
