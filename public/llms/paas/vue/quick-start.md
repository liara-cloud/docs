Original link: https://docs.liara.ir/paas/vue/quick-start/

# استقرار سریع برنامه‌های Vue

توجه داشته باشید؛ تنها برنامه‌هایی که با `Vite` و یا `vue-cli` ساخته شده باشند، در پلتفرم Vue لیارا قابل اجرا خواهند بود.

## Liara Console

[Video link](https://media.liara.ir/vue/vue-desktop.mp4)

برای استقرار با استفاده از ابزار [Liara Console](https://docs.liara.ir/references/console/about) کافیست تا مراحل زیر را طی کنید:  
۱. ورود به حساب کاربری   
وارد [کنسول لیارا](https://console.liara.ir) شوید و با وارد کردن ایمیل یا شماره همراه ثبت شده، به اکانت خود در لیارا، لاگین کنید.

۲. انتخاب حساب  
حساب شخصی یا تیم مدنظرتان برای استقرار برنامه را انتخاب کنید.

> همچنین بخوانید: [مدیریت تیم‌ها در لیارا](https://docs.liara.ir/references/team/about/)

۳. ایجاد برنامه  
برنامه Vue خود را با شناسه، [شبکه خصوصی](../details/private-network) و [منابع سخت‌افزاری و بسته امکانات](../details/plans/about) مدنظرتان ایجاد کنید.

۴. حذف فایل‌های اضافی  
پوشه‌ها و فایل‌های درون پروژه که قصد ندارید در لیارا آپلود شوند (به عنوان مثال پوشه node_modules) را پاک کنید.

۵. تنظیم اسکریپت start  
در فایل `package.json` موجود در مسیر اصلی پروژه، باید حتماً اسکریپت `start` تعریف شده باشد؛  به عنوان مثال، فایل `package.json` یک پروژه `Vite` می‌تواند به شکل زیر باشد:

```json
{
  "name": "vue-getting-started",
  "version": "0.1.0",
  "scripts": {
    "start": "vite preview",
    "build": "vite build"
  },
  "dependencies": {
    "core-js": "^3.6.5",
    "vue": "^3.0.0"
  },
  "devDependencies": {
    "@vitejs/plugin-vue": "^8.7.1",
    "vite": "^2.9.8"
  }
}
```

البته در نظر داشته باشید که برای اجرای موفق پروژه‌های مبتنی بر `vite`، باید قطعه کد زیر به فایل `vite.config.js` اضافه شود:

```js
export default {
    // ... rest of configuration
    build: {
        outDir: "dist"
    }
}
```

و یا اگر که برنامه خود را با `vue-cli` ساخته‌اید؛ فایل `package.json` می‌تواند مانند قطعه کد زیر باشد:

```json
{
  "name": "vue-getting-started",
  "version": "0.1.0",
  "scripts": {
    "start": "vue-cli-service serve",
    "build": "vue-cli-service build"
  },
  "dependencies": {
    "core-js": "^3.6.5",
    "vue": "^3.0.0"
  }
}
```

۶. زیپ و آپلود پروژه  
پوشه پروژه را در یک فایل `zip` قرار دهید. فایل را کشیده و در باکس آپلود Liara Console رها کنید.

۷. استقرار پروژه  
مرحله به مرحله استقرار را با Console جلو بروید و شخصی‌سازی‌های لازم را انجام دهید و در نهایت بر روی گزینه استقرار کلیک کنید تا عملیات استقرار، آغاز شود.

## Liara CLI

[Video link](https://media.liara.ir/vue/vue-cli.mp4)

برای استقرار با استفاده از ابزار [Liara CLI](https://docs.liara.ir/references/cli/about) کافیست تا مراحل زیر را طی کنید:  
۱. نصب Liara CLI  
ترمینال را باز کنید و با اجرای دستور زیر، ابزار Liara CLI را بر روی سیستم خود نصب کنید:

```bash
npm install -g @liara/cli
```

> دقت کنید که [npm و NodeJS](https://nodejs.org) باید بر روی سیستم‌عامل‌تان نصب باشد.

> در ویندوز، ترمینال باید بر روی CMD تنظیم باشد.

۲. لاگین به حساب کاربری  
با اجرای دستور زیر، وارد حساب کاربری خود در لیارا، شوید:

```bash
liara login
```

۳. ایجاد شبکه خصوصی  
با دستور زیر، [شبکه خصوصی](../details/private-network) برنامه خود را ایجاد کنید:

```bash
liara network create
```

> اگر که از قبل شبکه خصوصی ایجاد کرده‌اید؛ نیازی به انجام این کار نیست.

۴. ایجاد برنامه  
با اجرای دستور زیر، برنامه Vue خود را ایجاد کنید:

```bash
liara create
```

> اگر که از قبل برنامه خود را ایجاد کرده‌اید؛ نیازی به انجام این کار نیست.  
در ادامه اجرای این دستور، باید به ترتیب، شناسه، نوع پلتفرم (که باید بر روی vue تنظیم شود)، شبکه خصوصی و [منابع سخت‌افزاری و بسته امکانات برنامه](../details/plans/about)، مشخص شوند.

۵. نادیده گرفتن فایل‌های اضافی  
برای آپلود نشدن فایل‌های اضافی، از `gitignore.` یا `liaraignore.` استفاده کنید و درون یکی از این دو فایل، اسامی دایرکتوری‌ها و فایل‌های اضافی را بیاورید. به عنوان مثال:

```gitignore
node_modules/
```

۶. تنظیم اسکریپت start  
در فایل `package.json` موجود در مسیر اصلی پروژه، باید حتماً اسکریپت `start` تعریف شده باشد؛  به عنوان مثال، فایل `package.json` یک پروژه `Vite` می‌تواند به شکل زیر باشد:

```json
{
  "name": "vue-getting-started",
  "version": "0.1.0",
  "scripts": {
    "start": "vite preview",
    "build": "vite build"
  },
  "dependencies": {
    "core-js": "^3.6.5",
    "vue": "^3.0.0"
  },
  "devDependencies": {
    "@vitejs/plugin-vue": "^8.7.1",
    "vite": "^2.9.8"
  }
}
```

البته در نظر داشته باشید که برای اجرای موفق پروژه‌های مبتنی بر `vite`، باید قطعه کد زیر به فایل `vite.config.js` اضافه شود:

```js
export default {
    // ... rest of configuration
    build: {
        outDir: "dist"
    }
}
```

و یا اگر که برنامه خود را با `vue-cli` ساخته‌اید؛ فایل `package.json` می‌تواند مانند قطعه کد زیر باشد:

```json
{
  "name": "vue-getting-started",
  "version": "0.1.0",
  "scripts": {
    "start": "vue-cli-service serve",
    "build": "vue-cli-service build"
  },
  "dependencies": {
    "core-js": "^3.6.5",
    "vue": "^3.0.0"
  }
}
```

۷. استقرار برنامه  
با اجرای دستور زیر در مسیر اصلی پروژه، برنامه خود را  در لیارا مستقر کنید (بعد از `app--` شناسه برنامه خود را وارد کنید):

```bash
liara deploy --app=myapp --platform=vue
```

برای استقرار برنامه در تیم مدنظرتان، کافیست تا از [شناسه تیم](https://docs.liara.ir/references/api/about/#team-id) و فلگ `team-id--` استفاده کنید:

```bash
liara deploy --app=myapp --platform=vue --team-id=your-unique-team-id
```

## Github

[Video link](https://media.liara.ir/docs/vue-github.mp4)

برای استقرار با Github، کافیست تا مراحل زیر را طی کنید:  
۱. ورود به حساب کاربری   
وارد [کنسول لیارا](https://console.liara.ir) شوید و با وارد کردن ایمیل یا شماره همراه ثبت شده، به اکانت خود در لیارا، لاگین کنید.

۲. انتخاب حساب  
حساب شخصی یا تیم مدنظرتان برای استقرار برنامه را انتخاب کنید.

> همچنین بخوانید: [مدیریت تیم‌ها در لیارا](https://docs.liara.ir/references/team/about/)

۳. ایجاد برنامه  
برنامه Vue خود را با شناسه، [شبکه خصوصی](../details/private-network) و [منابع سخت‌افزاری و بسته امکانات](../details/plans/about) مدنظرتان ایجاد کنید.

۴. بررسی فایل `package.json` استاندارد  
در نظر داشته باشید که در پروژه‌های استاندارد Vue، یک فایل به نام `package.json` وجود دارد که برای استقرار حائز اهمیت است و این فایل نباید حذف یا دستکاری شود.  
قطعه کد زیر یک نمونه استاندارد از فایل `package.json` است:

```json
{
  "name": "vue-getting-started",
  "version": "0.1.0",
  "scripts": {
    "start": "vite preview",
    "build": "vite build"
  },
  "dependencies": {
    "core-js": "^3.6.5",
    "vue": "^3.0.0"
  },
  "devDependencies": {
    "@vitejs/plugin-vue": "^8.7.1",
    "vite": "^2.9.8"
  }
}
```

البته در نظر داشته باشید که برای اجرای موفق پروژه‌های مبتنی بر `vite`، باید قطعه کد زیر به فایل `vite.config.js` اضافه شود:

```js
export default {
    // ... rest of configuration
    build: {
        outDir: "dist"
    }
}
```

و یا اگر که برنامه خود را با `vue-cli` ساخته‌اید؛ فایل `package.json` می‌تواند مانند قطعه کد زیر باشد:

```json
{
  "name": "vue-getting-started",
  "version": "0.1.0",
  "scripts": {
    "start": "vue-cli-service serve",
    "build": "vue-cli-service build"
  },
  "dependencies": {
    "core-js": "^3.6.5",
    "vue": "^3.0.0"
  }
}
```

۵. ساخت فایل `liara.json`  
در مسیر اصلی پروژه، یک فایل به نام `liara.json` ایجاد کنید و پیکربندی‌های مدنظرتان را در این فایل بنویسید؛ به عنوان مثال:

```json
{
    "vue": {
    "mirror": true
    }
}
```

> در فایل فوق، برای جلوگیری از خطا خوردن فرایند استقرار، از فیلدهای `app` و `platform` استفاده نکنید؛ چرا که لیارا، آن‌ها را به صورت خودکار، تشخیص خواهد داد.

۶. ساخت ریپازیتوری در گیت‌هاب  
یک ریپازیتوری در حساب گیت‌هاب خود برای برنامه‌مدنظرتان با نام دلخواه‌تان ایجاد کنید.

> در صورتی که از قبل، این کار را انجام داده‌اید یا قصد دارید از ریپازیتوری‌های فعلی خود استفاده کنید؛ از این مرحله بگذرید.

۷. آپلود پروژه در گیت‌هاب  
پروژه نهایی خود را در ریپازیتوری‌تان در گیت‌هاب آپلود کنید؛  
حتماً در نظر داشته باشید که درون پروژه‌تان، فایل `gitignore.` قرار داشته باشد و درون آن، فایل‌های اضافی برنامه، که قصد ندارید آپلود شوند؛ لیست شده باشند.

۸. اتصال لیارا به گیت‌هاب  
برای اتصال حساب لیارا خود به گیت‌هاب، در لیارا بر روی پروفایل خود کلیک کرده و وارد زیر قسمت [حساب کاربری](https://console.liara.ir/settings/profile) شوید. در ادامه وارد منوی [گیت‌هاب](https://console.liara.ir/settings/github) شوید و بر روی دکمه **اتصال به گیت‌هاب**، کلیک کنید.

![connect to github on liara account](https://media.liara.ir/docs/connect-to-github-on-liara.png)

پس از انجام این کار و وارد کردن اطلاعات مربوط به گیت‌هاب، حساب لیارا شما به گیت‌هاب متصل خواهد شد.

![added github account on liara](https://media.liara.ir/docs/added-github-account-on-liara.png)

> در صورت مواجه با خطای "اتصال به Github"، بایستی از حساب لیارا خود، خارج شده و مجدداً به وسیله Github، به اکانت لیارا خود، وارد شوید.

۹. ویرایش دسترسی‌ها  
بعد از اتصال به اکانت گیت‌هاب، بر روی گزینه **ویرایش دسترسی‌ها** کلیک کرده و ریپازیتوری (ریپازیتوری‌های) مدنظرتان را به حساب لیارا متصل کنید.

[Video link](https://media.liara.ir/docs/edit-access-to-github-account.mp4)

۱۰. استقرار برنامه  
در نهایت، بر روی برنامه خود کلیک کرده وارد صفحه **استقرار جدید** شوید؛ سپس در منوی **گیت‌هاب**، ریپازیتوری مدنظرتان را انتخاب کرده و پس از انتخاب نوع استقرار و branch مدنظرتان، بر روی گزینه **اتصال به برنامه** کلیک کنید تا برنامه‌تان به ریپازیتوری مدنظرتان متصل شود.  
در نهایت، کافیست تا یک‌بار بر روی گزینه **استقرار دستی** کلیک کنید تا آخرین commit شما در لیارا مستقر شود.

[Video link](https://media.liara.ir/docs/deploy-project-using-github.mp4)

> برای قطع ارتباط برنامه و ریپازیتوری نیز، می‌توانید بر روی دکمه **قطع اتصال** کلیک کنید تا تغییرات جدید، مستقر نشوند.

> لیارا با اجرای دستور `npm install` تمامی ماژول‌های موجود در فایل `package.json` را نصب می‌کند. پس حتماً اسامی آن‌ها باید در این فایل باشد.

> لیارا به صورت خودکار، در فرایند استقرار برنامه‌های Vue اسکریپت `build` را برای شما اجرا می‌کند.

> همچنین بخوانید: [استقرار قدم به قدم برنامه‌های Vue در لیارا](./how-tos/create-app)

## all links

[All links of docs](https://docs.liara.ir/all-links-llms.txt)
