Original link: https://docs.liara.ir/paas/react/how-tos/deploy-app/

# استقرار برنامه React در لیارا

توجه داشته باشید؛ تنها برنامه‌هایی که با `Vite` و یا `create-react-app` ساخته شده باشند، در پلتفرم React لیارا قابل اجرا خواهند بود.

## Liara Console

در ابتدا، پس از [ساخت برنامه](../create-app) بایستی تمام فایل‌ها و پوشه‌هایی که قصد ندارید در لیارا آپلود شوند را، از پروژه پاک کنید. به عنوان مثال، باید پوشه node_modules را در پروژه خود پاک کنید؛ چرا که لیارا در حین فرایند استقرار، آن را برای شما ایجاد خواهد کرد. به صورت کلی، اگر که در پروژه خود فایلی به نام `gitignore.` دارید، کافیست تا فایل‌های و دایرکتوری‌های اشاره شده در این فایل را، از پروژه خود پاک کنید.  
همچنین، پروژه شما باید شامل فایل `package.json` باشد؛ لیارا، در حین فرایند استقرار، به صورت خودکار این فایل را پیدا می‌کند و عملیات زیر را انجام می‌دهد:  
۱. نصب وابستگی‌های برنامه  
لیارا، تمامی ماژول‌ها و وابستگی‌های برنامه که در فیلدهای `dependencies` و `devDependencies` قرار گرفته‌اند را با استفاده از دستور `npm install` نصب می‌کند.

۲. اجرای اسکریپت build  
اگر که در این فایل، اسکریپت `build` وجود داشته باشد، لیارا با اجرای دستور `npm run build` آن را، اجرا می‌کند.

۳. اجرای اسکریپت start  
اگر که در این فایل، اسکریپت `start` تعریف شده باشد، لیارا برای اجرای برنامه، از این اسکریپت استفاده می‌کند.

قطعه کد زیر، یک نمونه از فایل `package.json` استاندارد برای برنامه‌های React است که با استفاده از `Vite` ساخته شده‌اند:

```json
{
  "name": "my-vite-app",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "tsc -b && vite build",
    "lint": "eslint . --ext ts,tsx --report-unused-disable-directives --max-warnings 0",
    "preview": "vite preview"
  },
  "dependencies": {
    "react": "^18.3.1",
    "react-dom": "^18.3.1"
  },
  "devDependencies": {
    "@types/react": "^18.3.3",
    "@types/react-dom": "^18.3.0",
    "@typescript-eslint/eslint-plugin": "^7.15.0",
    "@typescript-eslint/parser": "^7.15.0",
    "@vitejs/plugin-react": "^4.3.1",
    "eslint": "^8.57.0",
    "eslint-plugin-react-hooks": "^4.6.2",
    "eslint-plugin-react-refresh": "^0.4.7",
    "typescript": "^5.2.2",
    "vite": "^5.3.4"
  }
}
```

البته در نظر داشته باشید که برای اجرای موفق پروژه‌های مبتنی بر `vite`، باید قطعه کد زیر به فایل `vite.config.js` اضافه شود:

```js
export default {
    // ... rest of configuration
    build: {
        outDir: "build"
    }
}
```

قطعه کد زیر نیز، یک نمونه از فایل `package.json` استاندارد برای برنامه‌های React است که با استفاده از دستور `create-react-app` ساخته شده‌اند:        

```json
{
  "name": "my-cra-app",
  "version": "0.1.0",
  "private": true,
  "dependencies": {
    "@testing-library/jest-dom": "^5.17.0",
    "@testing-library/react": "^13.4.0",
    "@testing-library/user-event": "^13.5.0",
    "react": "^18.3.1",
    "react-dom": "^18.3.1",
    "react-scripts": "5.0.1",
    "web-vitals": "^2.1.4"
  },
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  },
  "eslintConfig": {
    "extends": [
      "react-app",
      "react-app/jest"
    ]
  },
  "browserslist": {
    "production": [
      ">0.2%",
      "not dead",
      "not op_mini all"
    ],
    "development": [
      "last 1 chrome version",
      "last 1 firefox version",
      "last 1 safari version"
    ]
  }
}
```

در ادامه، بایستی پوشه پروژه خود را درون یک فایل zip قرار بدهید؛ سپس در برنامه خود، بر روی گزینه **استقرار جدید** کلیک کرده؛ وارد تب **Drag & Drog** شوید و فایل zip را آپلود کنید تا وارد مرحله بعدی استقرار شوید:

[Video link](https://media.liara.ir/docs/deploy-app-using-console.mp4)

پس از آپلود پروژه، باید شخصی‌سازی‌های پروژه را در برنامه خود، لحاظ کنید.

در انتها، به صورت مستقیم به [صفحه تاریخچه برنامه](https://docs.liara.ir/paas/details/private-registry) هدایت می‌شوید که می‌توانید لاگ‌های مربوط به استقرار را در آن، مشاهده بفرمایید.

## Liara CLI

پس از [ساخت برنامه](../create-app)، باید در مسیر اصلی پروژه، یک فایل به نام `liaraignore.` یا `gitignore.` ایجاد کنید و درون آن، اسامی تمامی فایل‌ها یا پوشه‌هایی که قصد ندارید در لیارا آپلود شوند را، وارد کنید؛ به عنوان مثال، نیازی به آپلود دایرکتوری node_modules به همراه محتوای آن نیست؛ چرا که لیارا در حین استقرار برنامه، آن را برای شما می‌سازد؛ پس بایستی نام این دایرکتوری در یکی از دو فایل فوق، نوشته شود؛ قطعه کد قرار گرفته در لینک زیر، یک `gitignore.` عالی برای برنامه‌های React است که می‌توانید از آن، استفاده کنید:

[#### نمونه فایل `gitignore.` برای برنامه‌های React](https://github.com/liara-cloud/gitignore-templates/blob/master/react/.gitignore)

همچنین، پروژه شما باید شامل فایل `package.json` باشد؛ لیارا، در حین فرایند استقرار، به صورت خودکار این فایل را پیدا می‌کند و عملیات زیر را انجام می‌دهد:  
۱. نصب وابستگی‌های برنامه  
لیارا، تمامی ماژول‌ها و وابستگی‌های برنامه که در فیلدهای `dependencies` و `devDependencies` قرار گرفته‌اند را با استفاده از دستور `npm install` نصب می‌کند.

۲. اجرای اسکریپت build  
اگر که در این فایل، اسکریپت `build` وجود داشته باشد، لیارا با اجرای دستور `npm run build` آن را، اجرا می‌کند.

۳. اجرای اسکریپت start  
اگر که در این فایل، اسکریپت `start` تعریف شده باشد، لیارا برای اجرای برنامه، از این اسکریپت استفاده می‌کند.

قطعه کد زیر، یک نمونه از فایل `package.json` استاندارد برای برنامه‌های React است که با استفاده از `Vite` ساخته شده‌اند:

```json
{
  "name": "my-vite-app",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "tsc -b && vite build",
    "lint": "eslint . --ext ts,tsx --report-unused-disable-directives --max-warnings 0",
    "preview": "vite preview"
  },
  "dependencies": {
    "react": "^18.3.1",
    "react-dom": "^18.3.1"
  },
  "devDependencies": {
    "@types/react": "^18.3.3",
    "@types/react-dom": "^18.3.0",
    "@typescript-eslint/eslint-plugin": "^7.15.0",
    "@typescript-eslint/parser": "^7.15.0",
    "@vitejs/plugin-react": "^4.3.1",
    "eslint": "^8.57.0",
    "eslint-plugin-react-hooks": "^4.6.2",
    "eslint-plugin-react-refresh": "^0.4.7",
    "typescript": "^5.2.2",
    "vite": "^5.3.4"
  }
}
```

البته در نظر داشته باشید که برای اجرای موفق پروژه‌های مبتنی بر `vite`، باید قطعه کد زیر به فایل `vite.config.js` اضافه شود:

```js
export default {
    // ... rest of configuration
    build: {
        outDir: "build"
    }
}
```

قطعه کد زیر نیز، یک نمونه از فایل `package.json` استاندارد برای برنامه‌های React است که با استفاده از دستور `create-react-app` ساخته شده‌اند:        

```json
{
  "name": "my-cra-app",
  "version": "0.1.0",
  "private": true,
  "dependencies": {
    "@testing-library/jest-dom": "^5.17.0",
    "@testing-library/react": "^13.4.0",
    "@testing-library/user-event": "^13.5.0",
    "react": "^18.3.1",
    "react-dom": "^18.3.1",
    "react-scripts": "5.0.1",
    "web-vitals": "^2.1.4"
  },
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  },
  "eslintConfig": {
    "extends": [
      "react-app",
      "react-app/jest"
    ]
  },
  "browserslist": {
    "production": [
      ">0.2%",
      "not dead",
      "not op_mini all"
    ],
    "development": [
      "last 1 chrome version",
      "last 1 firefox version",
      "last 1 safari version"
    ]
  }
}
```

## فایل liara.json
در ادامه، در مسیر اصلی پروژه، یک فایل به نام `liara.json` ایجاد کنید و قطعه کد زیر را در آن قرار دهید:

```json
{
    "app": "my-web-app", 
    "platform": "react"
}
```

در قطعه کد فوق، در فیلد `app` باید شناسه برنامه خود را به جای `my-web-app` وارد کنید.  
در فیلد `platform` باید نوع پلتفرم خود را که React است، مشخص کنید.

## mirror لیارا
لیارا در جهت استقرار سریع‌تر،  برای نصب پکیج‌های `npm`، از `mirror` اختصاصی خود استفاده می‌کند؛ از همین رو، ممکن است که در نصب برخی از پکیج‌های جدید، دچار مشکل شود. برای رفع این مشکل، می‌توانید mirror لیارا را با قراردادن قطعه کد زیر در فایل `liara.json`، غیرفعال کنید:

```json
{
    "react": {
    "mirror": false
  }
}
```

## قابلیت Source Map
Source Map یک فایل است که به ابزارهای دیباگ این امکان را می‌دهد تا کد منبع اصلی (مثل فایل‌های جاوااسکریپت، TypeScript یا SCSS) را به کد تبدیل شده (مثل فایل‌های minified) مرتبط کنند.  
Source Map در پلتفرم React لیارا به‌صورت پیش‌فرض غیرفعال است اما درصورت نیاز به فعال کردن این قابلیت می‌توانید قطعه‌کد زیر را در فایل `liara.json` قرار دهید:

```json
{
    "react": {
    "sourceMap": false
  }
}
```

در نهایت، یک فایل `liara.json` می‌تواند مانند قطعه کد زیر باشد:

```json
{
    "app": "my-web-app", 
    "platform": "react",
    "react": {
    "mirror": true,
    "sourceMap": false
    }
}
```

> همچنین بخوانید: [تعیین موقعیت build برنامه](https://docs.liara.ir/paas/details/build-location)

در صورتی که قصد دارید برنامه‌تان را در تیم مدنظرتان، مستقر کنید، باید فیلد `team-id`  
را به فایل `liara.json` مانند شکل زیر، اضافه کنید. مقدار این فیلد، باید [شناسه تیم](https://docs.liara.ir/references/api/about/#team-id) شما در لیارا باشد:

```json
{
    "team-id": "your-team-id"
}
```

اکنون کافیست تا در مسیر اصلی پروژه و جایی که فایل `liara.json` قرار دارد؛ دستور زیر را اجرا کنید و منتظر بمانید تا عملیات استقرار تمام شود:

```bash
liara deploy
```

در حین فرایند استقرار، می‌توانید در ترمینال خود، لاگ‌های مربوط به آن را مشاهده بفرمایید.

## Github

پس از [ساخت برنامه](../create-app)، باید در مسیر اصلی پروژه، یک فایل به نام `gitignore.` ایجاد کنید و درون آن، اسامی تمامی فایل‌ها یا پوشه‌هایی که قصد ندارید در لیارا آپلود شوند را، وارد کنید؛ به عنوان مثال، نیازی به آپلود دایرکتوری node_modules به همراه محتوای آن نیست؛ چرا که لیارا در حین استقرار برنامه، آن را برای شما می‌سازد؛ پس بایستی نام این دایرکتوری در فایل فوق، نوشته شود؛ قطعه کد قرار گرفته در لینک زیر، یک `gitignore.` عالی برای برنامه‌های React است که می‌توانید از آن، استفاده کنید:

[#### نمونه فایل `gitignore.` برای برنامه‌های React](https://github.com/liara-cloud/gitignore-templates/blob/master/react/.gitignore)

همچنین، پروژه شما باید شامل فایل `package.json` باشد؛ لیارا، در حین فرایند استقرار، به صورت خودکار این فایل را پیدا می‌کند و عملیات زیر را انجام می‌دهد:  
۱. نصب وابستگی‌های برنامه  
لیارا، تمامی ماژول‌ها و وابستگی‌های برنامه که در فیلدهای `dependencies` و `devDependencies` قرار گرفته‌اند را با استفاده از دستور `npm install` نصب می‌کند.

۲. اجرای اسکریپت build  
اگر که در این فایل، اسکریپت `build` وجود داشته باشد، لیارا با اجرای دستور `npm run build` آن را، اجرا می‌کند.

۳. اجرای اسکریپت start  
اگر که در این فایل، اسکریپت `start` تعریف شده باشد، لیارا برای اجرای برنامه، از این اسکریپت استفاده می‌کند.

قطعه کد زیر، یک نمونه از فایل `package.json` استاندارد برای برنامه‌های React است که با استفاده از `Vite` ساخته شده‌اند:

```json
{
  "name": "my-vite-app",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "tsc -b && vite build",
    "lint": "eslint . --ext ts,tsx --report-unused-disable-directives --max-warnings 0",
    "preview": "vite preview"
  },
  "dependencies": {
    "react": "^18.3.1",
    "react-dom": "^18.3.1"
  },
  "devDependencies": {
    "@types/react": "^18.3.3",
    "@types/react-dom": "^18.3.0",
    "@typescript-eslint/eslint-plugin": "^7.15.0",
    "@typescript-eslint/parser": "^7.15.0",
    "@vitejs/plugin-react": "^4.3.1",
    "eslint": "^8.57.0",
    "eslint-plugin-react-hooks": "^4.6.2",
    "eslint-plugin-react-refresh": "^0.4.7",
    "typescript": "^5.2.2",
    "vite": "^5.3.4"
  }
}
```

البته در نظر داشته باشید که برای اجرای موفق پروژه‌های مبتنی بر `vite`، باید قطعه کد زیر به فایل `vite.config.js` اضافه شود:

```js
export default {
    // ... rest of configuration
    build: {
        outDir: "build"
    }
}
```

قطعه کد زیر نیز، یک نمونه از فایل `package.json` استاندارد برای برنامه‌های React است که با استفاده از دستور `create-react-app` ساخته شده‌اند:        

```json
{
  "name": "my-cra-app",
  "version": "0.1.0",
  "private": true,
  "dependencies": {
    "@testing-library/jest-dom": "^5.17.0",
    "@testing-library/react": "^13.4.0",
    "@testing-library/user-event": "^13.5.0",
    "react": "^18.3.1",
    "react-dom": "^18.3.1",
    "react-scripts": "5.0.1",
    "web-vitals": "^2.1.4"
  },
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  },
  "eslintConfig": {
    "extends": [
      "react-app",
      "react-app/jest"
    ]
  },
  "browserslist": {
    "production": [
      ">0.2%",
      "not dead",
      "not op_mini all"
    ],
    "development": [
      "last 1 chrome version",
      "last 1 firefox version",
      "last 1 safari version"
    ]
  }
}
```

لیارا در جهت استقرار سریع‌تر،  برای نصب پکیج‌های `npm`، از `mirror` اختصاصی خود استفاده می‌کند؛ از همین رو، ممکن است که در نصب برخی از پکیج‌های جدید، دچار مشکل شود. برای رفع این مشکل، می‌توانید در مسیر اصلی پروژه، یک فایل به نام `liara.json` ایجاد کنید و mirror لیارا را با قراردادن قطعه کد زیر در این فایل، غیرفعال کنید:

```json
{
    "react": {
    "mirror": false
  }
}
```

Source Map یک فایل است که به ابزارهای دیباگ این امکان را می‌دهد تا کد منبع اصلی (مثل فایل‌های جاوااسکریپت، TypeScript یا SCSS) را به کد تبدیل شده (مثل فایل‌های minified) مرتبط کنند.  
Source Map در پلتفرم React لیارا به‌صورت پیش‌فرض غیرفعال است اما درصورت نیاز به فعال کردن این قابلیت می‌توانید قطعه‌کد زیر را در فایل `liara.json` قرار دهید:

```json
{
    "react": {
    "sourceMap": false
  }
}
```

در نهایت، یک فایل `liara.json` می‌تواند مانند قطعه کد زیر باشد:

```json
{
    "react": {
    "mirror": true,
    "sourceMap": false
    }
}
```

> در فایل فوق، برای جلوگیری از خطا خوردن فرایند استقرار، از فیلدهای `app` و `platform` استفاده نکنید؛ چرا که لیارا، آن‌ها را به صورت خودکار، تشخیص خواهد داد.

در صورتی که قصد دارید برنامه‌تان را در تیم مدنظرتان، مستقر کنید، باید فیلد `team-id`  
را به فایل `liara.json` مانند شکل زیر، اضافه کنید. مقدار این فیلد، باید [شناسه تیم](https://docs.liara.ir/references/api/about/#team-id) شما در لیارا باشد:

```json
{
    "team-id": "your-team-id"
}
```

> همچنین بخوانید: [تعیین موقعیت build برنامه](https://docs.liara.ir/paas/details/build-location)

در ادامه، بایستی یک ریپازیتوری در حساب گیت‌هاب خود برای برنامه‌مدنظرتان با نام دلخواه‌تان ایجاد کنید، برای این کار، پس از ورود به [گیت‌هاب](https://github.com/)، وارد بخش **Repositories** شوید و بر روی دکمه **New** کلیک کنید؛ پس از نوشتن نام و توضیحات ریپازیتوری، سطح دسترسی ریپازیتوری را (public یا private)، انتخاب کنید و در نهایت بر روی دکمه **create repository** کلیک کنید تا ریپازیتوری برای‌تان ساخته شود:

[Video link](https://media.liara.ir/docs/create-a-new-repository-in-github.mp4)

> در صورتی که از قبل، این کار را انجام داده‌اید یا قصد دارید از ریپازیتوری‌های فعلی خود استفاده کنید؛ نیازی به ساخت ریپازیتوری جدید نیست.  
اکنون، باید پروژه نهایی خود را در ریپازیتوری‌تان در گیت‌هاب آپلود کنید؛  
حتماً در نظر داشته باشید که درون پروژه‌تان، فایل `gitignore.` قرار داشته باشد و درون آن، فایل‌های اضافی  
برنامه، که قصد ندارید آپلود شوند؛ لیست شده باشند. می‌توانید برای آپلود، مانند دستورات زیر  
در ترمینال ریشه پروژه‌تان، عمل کنید:

```bash
git init # تعریف اولیه مخزن در ریشه پروژه
```
```bash
git add . # اضافه کردن تمامی فایل‌ها به استیج
```
```bash
git commit -m "make ready to deploy on liara" # ثبت کامیت
```
```bash
git remote add origin https://github.com/your-account-user/your-repo-name.git # افزودن دسترسی ریموت به مخزن
```
```bash
git push origin master # آپلود پروژه در گیت‌هاب
```

> در صورتی که هنوز `git` را در سیستم عامل خود نصب ندارید؛ می‌توانید آن را از [اینجا](https://git-scm.com/downloads)، دانلود و نصب نمایید.  
> اگر که از قبل، پروژه نهایی خود را همراه با فایل `liara.json`، در گیت‌هاب آپلود کرده‌اید؛ نیازی به انجام مجدد این کار نیست.  
در ادامه، بایستی حساب لیارا خود را به گیت‌هاب متصل کنید. برای اتصال حساب لیارا خود به گیت‌هاب، در لیارا بر روی پروفایل خود کلیک کرده و وارد زیر قسمت [حساب کاربری](https://console.liara.ir/settings/profile) شوید. در ادامه  
وارد منوی [گیت‌هاب](https://console.liara.ir/settings/github) شوید و بر روی دکمه **اتصال به گیت‌هاب**، کلیک کنید. پس از  
انجام این کار و وارد کردن اطلاعات مربوط به گیت‌هاب، حساب لیارا شما به گیت‌هاب متصل خواهد شد:

[Video link](https://media.liara.ir/docs/connect-liara-account-to-github.mp4)

> در صورت مواجه با خطای "اتصال به Github"، بایستی از حساب لیارا خود، خارج شده و مجدداً به وسیله Github، به اکانت لیارا خود، وارد شوید.  
> اگر که قصد دارید به جای اتصال به حساب شخصی، از حساب سازمانی استفاده کنید. باید در ابتدا با حساب شخصی، به کنسول متصل شوید و بعد از آن می‌توانید به حساب سازمانی هم متصل شوید.  
بعد از اتصال به اکانت گیت‌هاب، بر روی گزینه **ویرایش دسترسی‌ها** کلیک کرده و ریپازیتوری (ریپازیتوری‌های) مدنظرتان را به حساب لیارا متصل کنید.  
برای این کار در ابتدا، حساب شخصی یا سازمانی خود را انتخاب کنید؛ سپس  
در صورتی که قصد دارید تمام ریپازیتوری‌های حساب گیت‌هاب‌تان به لیارا متصل شود؛ گزینه **All repositories** را انتخاب کنید؛  
اما اگر قصد دارید که فقط یک یا چند ریپازیتوری مدنظرتان را انتخاب کنید؛ گزینه **Only select repositories** را انتخاب کرده و در ادامه ریپازیتوری‌های مدنظرتان را در کشوی باز شده، انتخاب کنید.  
در نهایت، بر روی گزینه **Install & Authorize** کلیک کنید تا ریپازیتوری‌های انتخابی، به حساب لیارا، متصل شوند:

[Video link](https://media.liara.ir/docs/edit-access-to-github-account.mp4)

در نهایت، بر روی برنامه خود کلیک کرده وارد صفحه **استقرار جدید** شوید؛ سپس در منوی **گیت‌هاب**، ریپازیتوری مدنظرتان را انتخاب کرده و پس از انتخاب نوع استقرار (استقرار در صورت CI موفق یا استقرار خودکار) و branch مدنظرتان، بر روی گزینه **اتصال به برنامه** کلیک کنید تا برنامه‌تان به ریپازیتوری مدنظرتان متصل شود.  
در نهایت، کافیست تا یک‌بار بر روی گزینه **استقرار دستی** کلیک کنید تا آخرین commit شما در لیارا مستقر شود:

[Video link](https://media.liara.ir/docs/deploy-project-using-github.mp4)

پس از انجام کارهای فوق، با هر بار push کردن پروژه‌تان در ریپازیتوری انتخاب شده،  
یک استقرار جدید مطابق آخرین تغییرات شما در لیارا، انجام خواهد شد.

> برای قطع ارتباط برنامه و ریپازیتوری نیز، می‌توانید بر روی دکمه **قطع اتصال** کلیک کنید تا تغییرات جدید، مستقر نشوند.  
> در صورت انتخاب گزینه **استقرار در صورت CI موفق**، تمامی تست‌های تعریف شده باید pass شده و تیک سبز رنگ گرفته باشند، در غیر این‌صورت،  
> پروژه‌تان در لیارا، مستقر نخواهد شد.

---

> پس از استقرار برنامه می‌توانید [رویدادها](https://docs.liara.ir/paas/details/events) و [گزارشات](https://docs.liara.ir/paas/details/observations/about) مربوط به برنامه را بررسی کنید.

## all links

[All links of docs](https://docs.liara.ir/all-links-llms.txt)
