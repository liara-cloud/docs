Original link: https://docs.liara.ir/paas/liarajson/

# فایل liara.json در لیارا

فایل `liara.json` یک فایل پیکربندی قابل تنظیم در پروژه است  
که به طور انحصاری و اختصاصی، توسط PaaS لیارا، ارائه می‌شود.  
شما می‌توانید در برنامه‌هایی که قصد دارید به وسیله ابزار [Liara CLI](https://docs.liara.ir) یا Github، در لیارا مستقر کنید؛ از این فایل و قابلیت‌های مخصوص آن، بهره ببرید.  
در ادامه، به معرفی بیشتر این فایل، فیلدها و بخش‌های درون آن، پرداخته شده است:  

## نحوه استفاده
برای استفاده از فایل `liara.json` نیاز به انجام کار خاصی نیست.  
تنها کافیست تا وارد مسیر اصلی پروژه‌تان شوید و یک فایل خالی با همین نام، یعنی `liara.json`  
ایجاد کنید؛ به عنوان مثال، در Linux، می‌توانید دستور زیر را برای ایجاد این فایل، اجرا کنید:

```bash
touch liara.json
```

## دستور liara init
در صورتی که ابزار [Liara CLI](https://docs.liara.ir) را نصب کرده باشید، می‌توانید از دستور `liara init` برای ساخت فایل `liara.json` استفاده کنید:

```bash
liara init
```

با اجرای دستور فوق، یک فایل `liara.json` در مسیر فعلی‌تان، ایجاد خواهد شد  
که شامل تمامی فیلدها و پارامترهای مورد نیاز برای استقرار برنامه‌تان در لیارا، خواهد بود.  
هر پلتفرم، می‌تواند توسط این دستور، به سادگی پیکربندی شود؛ به عنوان مثال:  

## NodeJS

```json
liara init -n my-app -p 3005 -P node --build-location=germany -d data --path uploads
```

## NextJS

```json
liara init -n my-app -P next --build-location=germany -d database --path database/sqlite
```

## Laravel

```json
liara init -n my-app -P laravel --build-location=germany -d uploads --path /var/www/html/uploads
```

## PHP

```json
liara init -n my-app -P php --build-location=germany -d uploads --path uploads
```

## Python

```json
liara init -n my-app -p 1200 -P python --build-location=germany -d data --path data
```

## Django

```json
liara init -n my-app -P django --build-location=germany -d data --path uploads
```

## Flask

```json
liara init -n my-app -P flask --build-location=germany -d data --path uploads
```

## Go

```json
liara init -n my-app -p 8080 -P go --build-location=germany -d data --path uploads
```

## React

```json
liara init -n my-app -P react --build-location=germany 
```

## Angular

```json
liara init -n my-app -P angular --build-location=germany 
```

## Vue

```json
liara init -n my-app -P vue --build-location=germany 
```

پس از ایجاد فایل `liara.json` و شخصی‌سازی‌های لازم (که در ادامه به آن‌ها، پرداخته شده است)؛ لیارا در حین فرایند استقرار،  
این فایل را به صورت خودکار، پیدا می‌کند و پارامترهای مختلفی نظیر شناسه برنامه، پورت برنامه و ... را مطابق با این فایل، تنظیم می‌کند.

## فیلد app
در این فیلد، شما می‌توانید شناسه برنامه‌تان را انتخاب کنید؛ با انجام این کار، پس از اجرای دستور [`liara deploy`](https://docs.liara.ir/references/cli/deploy-app/)،  
شناسه برنامه دیگر از شما پرسیده نمی‌شود و برنامه مدنظرتان برای استقرار در لیارا، آماده می‌شود.  
به عنوان مثال، اگر که شناسه برنامه‌تان `my-app` است، به شکل زیر، می‌توانید آن را در فایل `liara.json`، مشخص کنید:  

```json
{
    "app": "my-app"
}
```

در صورتی که شناسه برنامه را اشتباه وارد کرده باشید و یا به صورت کلی برنامه‌ای با شناسه انتخابی شما  
در حساب شما، وجود نداشته باشد، عملیات استقرار متوقف شده و به شما ارور داده می‌شود.

> این فیلد در استقرار با روش Github، کاربردی ندارد چرا که قبل از شروع عملیات استقرار، شناسه برنامه مشخص شده است.  
> پس در روش استقرار با Github، **نباید** این فیلد را به کار ببرید.

## فیلد platform
شما می‌توانید در فیلد platform، نوع پلتفرمی که قصد دارید در لیارا استفاده کنید؛ مشخص کنید.  
به عنوان مثال، اگر که برنامه‌تان مبتنی بر NodeJS است، به شکل زیر، می‌توانید در فایل `liara.json` تعریف کنید که  
که پلتفرم مقصد شما، NodeJS خواهد بود:

```json
{
    "platform": "node"
}
```

البته، ابزار `Liara CLI`، با توجه به منطق خود،  
قادر به تشخیص نوع پلتفرم انتخابی شما خواهد بود؛ اما در صورتی که شما قصد استقرار برنامه خاصی مانند Fastify , GatsbyJS یا برنامه‌های دیگر  
را دارید که ممکن است لیارا در تشخیص آن‌ها، دچار خطا شود؛ می‌توانید از این فیلد استفاده کنید.  
در ادامه، تمامی مقادیری که این فیلد می‌پذیرد؛ آورده شده است:  

```bash
node
next
laravel
php
python
django
flask
dotnet
react
angular
vue
static
docker
```

در صورتی که نوع پلتفرم برنامه را اشتباه و خارج از لیست فوق، وارد کرده باشید، عملیات استقرار متوقف شده و به شما ارور داده می‌شود.

> این فیلد در استقرار با روش Github، کاربردی ندارد چرا که قبل از شروع عملیات استقرار، پلتفرم برنامه مشخص شده است.  
> پس در روش استقرار با Github، **نباید** این فیلد را به کار ببرید.

## فیلد port
در این فیلد، می‌توانید پورت مورد استفاده برنامه‌تان را مشخص کنید؛ با انجام این کار، پس از اجرای دستور `liara deploy`،‌ پورت برنامه دیگر از شما پرسیده نمی‌شود و برنامه مدنظرتان برای استقرار در لیارا، آماده می‌شود.  
به عنوان مثال، اگر پورت مورد استفاده برنامه شما  `3000`است، به شکل زیر، می‌توانید آن را در فایل `liara.json`، مشخص کنید:

```json
{
    "port": 3000
}
```

درصورتی که پورت را در فایل `liara.json` مشخص نکرده باشید،‌یک پورت پیش‌فرض برای برنامه شما تنظیم خواهد شد.

## استفاده از mirror لیارا
لیارا در جهت افزایش سرعت استقرار برنامه‌تان و نصب پکیج‌ها، کتابخانه‌ها و ابزارهای  
استفاده شده در پروژه، به جای ثبت درخواست به مخزن اصلی پکیج، از مخزن خود استفاده می‌کند و در صورتی که  
پکیج موردنظر شما در مخزن نباشد؛ به مخزن اصلی مراجعه می‌کند (و در موارد نادر، ممکن است با خطا مواجه شود).  
در واقع با انجام این کار، فرایند نصب الزامات پروژه، خیلی سریع‌تر انجام می‌شود.  
اما در صورتی که الزامات پروژه‌تان جدید هستند و  
یا به صورت کلی، در mirror لیارا وجود ندارند؛ می‌توانید mirror لیارا را غیر فعال کنید.  

به عنوان مثال، لیارا در برنامه‌های NodeJS، برای نصب  
پکیج‌های npm از mirror خود استفاده می‌کند و شما می‌توانید با قرار دادن قطعه کد زیر  
در فایل `liara.json`، این قابلیت را، غیرفعال کنید:  

```json
{
    "node": {
      "mirror": false
  }
}
```

در ادامه، نحوه غیرفعال کردن این قابلیت در پلتفرم‌های مختلف، قرار گرفته است:

## NodeJS
در پلتفرم NodeJS برای نصب پکیج‌های npm:

```json
{
    "node": {
      "mirror": false
  }
}
```

## NextJS
در پلتفرم NextJS برای نصب پکیج‌های npm:

```json
{
    "next": {
      "mirror": false
  }
}
```

## Laravel
در پلتفرم Laravel برای نصب پکیج‌های composer:

```json
{
    "laravel": {
      "composerMirror": false
  }
}
```

## PHP
در پلتفرم PHP برای نصب پکیج‌های composer:

```json
{
    "php": {
      "composerMirror": false
  }
}
```

## python
در پلتفرم python برای نصب پکیج‌های pip:

```json
{
    "python": {
      "mirror": false
  }
}
```

## django
در پلتفرم django برای نصب پکیج‌های pip:

```json
{
    "django": {
      "mirror": false
  }
}
```

## Flask
در پلتفرم Flask برای نصب پکیج‌های pip:

```json
{
    "flask": {
      "mirror": false
  }
}
```

## React
در پلتفرم React برای نصب پکیج‌های npm:

```json
{
    "react": {
      "mirror": false
  }
}
```

## Angular
در پلتفرم Angular برای نصب پکیج‌های npm:

```json
{
    "angular": {
      "mirror": false
  }
}
```

## Vue
در پلتفرم Vue برای نصب پکیج‌های npm:

```json
{
    "vue": {
      "mirror": false
  }
}
```

## تعیین تیم
در صورتی که برنامه‌تان، در [تیم‌](https://docs.liara.ir/references/team/about/) خاصی قرار دارد و به صورت کلی، در  
حساب شخصی‌تان، نیست؛ می‌توانید با استفاده از فیلد `team-id` و درج [شناسه تیم](https://docs.liara.ir/references/api/about/#team-id) به عنوان مقدار آن،  
برنامه‌تان را در تیم موردنظرتان، مستقر کنید:

```json
{
    "team-id": "your-team-id"
}
```

## تعیین نسخه زبان یا فریم‌ورک
شما می‌توانید در فایل `liara.json`، نسخه زبان برنامه‌نویسی یا فریم‌ورکی که  
از آن استفاده می‌کنید را مشخص کنید؛ در ادامه، نحوه انجام این کار در پلتفرم‌های مختلف، آمده است:  

## NodeJS
در پلتفرم NodeJS برای تعیین نسخه nodejs:

```json
{
    "node": {
      "version": "22"
  }
}
```

## NextJS
در پلتفرم NextJS برای تعیین نسخه nodejs:

```json
{
    "next": {
      "nodeVersion": "22"
  }
}
```

## Laravel
در پلتفرم Laravel برای تعیین نسخه php:

```json
{
    "laravel": {
      "phpVersion": "8.2"
  }
}
```

## php
در پلتفرم php برای تعیین نسخه php:

```json
{
    "php": {
      "version": "8.2"
  }
}
```

## Python
در پلتفرم Python برای تعیین نسخه python:

```json
{
  "python": {
    "version": "3.12"
  }
}
```

## Django
در پلتفرم Django برای تعیین نسخه python:

```json
{
  "django": {
    "pythonVersion": "3.12"
  }
}
```

## Flask
در پلتفرم Flask برای تعیین نسخه python:

```json
{
  "flask": {
    "pythonVersion": "3.12"
  }
}
```

## NET.
در پلتفرم NET. برای تعیین نسخه dotnet:

```json
{
  "dotnet": {
    "version": "8.0"
  }
}
```

در نظر داشته باشید که نمی‌توانید مقادیری به جز نسخه‌های قابل ارائه در لیارا، به عنوان نسخه انتخابی، در فیلد فوق، قرار دهید.  
نسخه‌های قابل ارائه مربوط به هر پلتفرم را می‌توانید در صفحه مخصوص به خودشان مشاهده بفرمایید.

## فیلد منطقه زمانی
به صورت پیش‌فرض، منطقه‌ی زمانی برنامه‌تان بر روی Asia/Tehran تنظیم شده است؛ برای تغییر مقدار پیش‌فرض، می‌توانید از پارامتر `timezone` در فایل `liara.json` استفاده کنید.  
در ادامه، یک مثال در پلتفرم‌هایی که شامل این قابلیت هستند، برای شما آورده شده است:

## NodeJS
در پلتفرم NodeJS برای تغییر منطقه زمانی به America/Los_Angeles:

```json
{
    "node": {
      "timezone": "America/Los_Angeles"
  }
}
```

## Laravel
در پلتفرم Laravel برای تغییر منطقه زمانی به Asia/Istanbul:

```json
{
    "laravel": {
      "timezone": "Asia/Istanbul"
  }
}
```

## PHP
در پلتفرم PHP برای تغییر منطقه زمانی به Australia/Hobart:

```json
{
    "php": {
      "timezone": "Australia/Hobart"
  }
}
```

## Python
در پلتفرم Python برای تغییر منطقه زمانی به Canada/Eastern:

```json
{
    "python": {
      "timezone": "Canada/Eastern"
  }
}
```

## Django
در پلتفرم Django برای تغییر منطقه زمانی به Cuba:

```json
{
    "django": {
      "timezone": "Cuba"
  }
}
```

## Flask
در پلتفرم Flask برای تغییر منطقه زمانی به Europe/Berlin:

```json
{
    "flask": {
      "timezone": "Europe/Berlin"
  }
}
```

## NET.
در پلتفرم NET. برای تغییر منطقه زمانی به Greenwich:

```json
{
    "dotnet": {
      "timezone": "Greenwich"
  }
}
```

برای مشاهده لیست کامل مناطق زمانی قابل استفاده در فایل `liara.json`، می‌توانید در Linux، دستور زیر را اجرا کنید:

```bash
timedatectl list-timezones
```

## تعیین موقعیت build

ممکن است بخواهید پکیج‌هایی که در موقعیت ایران در دسترس نیستند را دانلود کنید یا نیاز داشته باشید که فرایند push کردن ایمیج‌ها به رجیستری خصوصی، با سرعت بیشتری انجام شود. برای این موارد می‌توانید موقعیت build ایمیج برنامه‌تان را با  
قرار دادن قطعه کد زیر در فایل `liara.json`، تغییر دهید.  

```json
{
  "build": {
     "location": "germany"
  }
}
```

به صورت پیش‌فرض، موقعیت build برنامه بر روی Iran، قرار دارد.  

## تنظیم کرون‌جاب

Cron job یک ابزار در سیستم‌عامل‌های لینوکس است که به شما این امکان را می‌دهد که برنامه‌ها یا اسکریپت‌ها را به صورت خودکار و در زمان‌های مشخص اجرا کنید. به عبارت ساده‌تر، با استفاده از cron job می‌توانید کارهایی مانند پشتیبان‌گیری، ارسال ایمیل یا اجرای اسکریپت‌ها را به صورت زمان‌بندی‌شده انجام دهید.  
شما می‌توانید مانند شکل زیر، برای پلتفرم‌های زیر، کرون‌جاب‌های مدنظرتان را در فایل `liara.json` تعریف کنید:  

## NextJS
```json
{
  "cron": [
    "* * * * * curl http://localhost:3000/api/test"
  ]
}
```

## Laravel
```json
{
  "cron": [
    "0 1 * * * cd $ROOT && php artisan your:command >> /dev/null 2>&1"
  ]
}
```

## PHP
```json
{
  "cron": [
    "0 1 * * * cd $ROOT && php update_price.php >> /dev/null 2>&1"
  ]
}
```

## Python
```json
{
  "cron": [
    "python3 migrate.py >> /dev/null 2>&1"
  ]
}
```

## Django
```json
{
  "cron": [
    "0 0 * * 0 cd $ROOT && python3 manage.py remove-old-emails >> /dev/null 2>&1"
  ]
}
```

## Flask
```json
{
  "cron": [
    "0 0 * * 0 cd $ROOT && python3 job1.py",
    "0 0 * * 2 cd $ROOT && python3 job2.py"
  ]
}
```

برای اطلاعات بیشتر، می‌توانید به صفحه مربوطه در هر پلتفرم، مراجعه کنید.  

## بررسی سلامت
بررسی سلامت به این شکل کار می‌کند که شما یک دستور مشخصی را تعریف می‌کنید و لیارا در بازه‌های مشخص، این دستور را در استقرار جدید شما اجرا می‌کند. اگر نتیجه موفقیت‌آمیز باشد، استقرار شما موفق در نظر گرفته می‌شود؛ در غیر این‌صورت، استقرار جدید شما، ناموفق تلقی خواهد شد.

برای ایجاد این تست، کافیست تا در فایل `liara.json`  محتوای زیر را، قرار دهید:

```json
{
  "healthCheck": {
    "command": "CMD curl --fail http://localhost:3000 || exit 1",
    "interval": 30, 
    "timeout": 15,
    "retries": 2,
    "startPeriod": 5
   }
}
```

برای اطلاعات بیشتر در مورد این دستور، می‌توانید به [مستندات مربوطه](https://docs.liara.ir/paas/details/health-check) مراجعه کنید.  

## اتصال به دیسک

[دیسک‌ها](https://docs.liara.ir/paas/disks/about/) قابلیتی در لیارا هستند که عملکردی شبیه به Volumeها در داکر دارند  
و برای ذخیره‌سازی دائم اطلاعات یا تغییرات جدید، به کار می‌روند؛  
شما می‌توانید در هر پلتفرمی، مانند شکل زیر،  
برنامه خود را در مسیر مدنظرتان، به دیسک متصل کنید:  

```json
{
    "disks": [
      {
        "name": "media",
        "mountTo": "/uploads/media"
      }
    ]
}
```

برای اطلاع بیشتر در مورد دیسک‌ها، می‌توانید به مستندات مربوط به اتصال به دیسک در هر پلتفرم، مراجعه کنید.

## تنظیم متغیرهای محیطی در فایل liara.json

شما می‌توانید در آبجکتی به نام `envs` تمامی متغیرهای محیطی را در فایل `liara.json` خود، مانند شکل زیر، تعریف و مقداردهی کنید:  

```json
{
  "envs":
  {
    "env1": "value1",
    "env2": "value2",
    "env3": "value3",
    "env4": "value4",
    "env5": "value5",
  }
}
```

> در نظر داشته باشید که با انجام این کار، **تمامی متغیرهای قبلی ذخیره‌شده به همراه مقادیرشان** در برنامه‌تان، از بین خواهند رفت  
> و متغیرهای تعریفی شما در این فایل، جایگزین قبلی‌ها، خواهند شد.  
> در صورتی که پروژه‌تان شامل git است و متغیرهای تعریفی‌تان در این فایل حساس هستند؛ بهتر است اسم این فایل را در `gitignore.` قرار دهید تا مقادیر متغیرهای حساس، در git ذخیره و commit نشوند.

## فیلدهای مخصوص هر پلتفرم

هر پلتفرم در لیارا، در فایل `liara.json`، در کنار تمامی فیلدها و ویژگی‌های مشترک،  
قابلیت‌ها و فیلدهای مخصوص به خودش را نیز، دارد که به شما امکان می‌دهد شخصی‌سازی‌های خیلی بیشتری  
را بر روی پروژه‌های خود اعمال کنید.  
در ادامه، یک مثال از تمامی فیلدهای مخصوص هر پلتفرم (فارغ از نتیجه)، برای‌تان آورده شده است:  

## Laravel

```json
{
    "laravel":{
      "npmMirror": true,
      "installDevDependencies": true,
      "configCache": true,
      "routeCache": true,
      "buildAssets": true,
      "ssr": true
    }
}
```

## Django

```json
{
  "django": {
    "collectStatic": false,
    "compileMessages": true,
    "modifySettings": false,
    "geospatial": true
  }
}
```

## Flask

```json
{
    "flask": {
      "appModule": "server:app"
    }
}
```

## .NET

```json
{
    "dotnet": {
      "finalDllName": "MyProjectName",
      "csprojectFile": "path/to/folder/my.csproj"
    }
}
```

## React

```json
{
    "react": {
      "sourceMap": false
  }
}
```

## Angular

```json
{
    "angular": {
      "sourceMap": false
  }
}
```

## Docker

```json
{
    "build": {
      "dockerfile": "./Dockerfile",
      "cache": false,
      "args": ["APP_VERSION=2.0.0"]
    },

    "docker": {
      "timezone": "America/Los_Angeles"
    },

    "args": [
      "sh",
      "-c",
      "sleep 10 && /entrypoint.sh run"
  ]
}
```

## NextJS

```json
{
    "next":{
      "mirror": false,
      "modifyConfig": false,
      "nodeVersion": 20,
   }
}
```

برای اطلاعات بیشتر در مورد هر پلتفرم، به صفحه استقرار برنامه آن، مراجعه کنید.  

## فایل liara.json برنامه

پس از ساخت برنامه مدنظرتان در کنسول، می‌توانید در صفحه استقرار جدید، گزینه مربوط به فایل `liara.json` را ببینید. این فایل  
به صورت کلی، الزامات درون یک فایل `liara.json` را در استقرار با Github یا استقرار با Liara CLI به شما نشان می‌دهد  
و می‌توانید از آن، برای استقرار برنامه مدنظرتان با دو روش فوق، استفاده کنید:  

![paas-default-liarajson](https://media.liara.ir/docs/paas-default-liarajson.png)

## all links

[All links of docs](https://docs.liara.ir/all-links-llms.txt)
