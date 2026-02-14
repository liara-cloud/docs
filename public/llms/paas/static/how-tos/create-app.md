Original link: https://docs.liara.ir/paas/static/how-tos/create-app/

# ساخت برنامه Static در لیارا

## Liara Console

برای ساخت برنامه، کافیست تا پس از ورود به [پنل کاربری](https://console.liara.ir) وارد [تیم مدنظرتان](https://docs.liara.ir/references/team/about/) یا حساب شخصی‌تان، شوید؛ سپس وارد منوی [پلتفرم](https://console.liara.ir/apps) شوید؛ بر روی گزینه [ایجاد برنامه](https://console.liara.ir/apps/create) کلیک کرده و پلتفرم را بر روی **Static** تنظیم کنید.  
در ادامه باید برای برنامه‌تان یک شناسه و یک [شبکه خصوصی](https://docs.liara.ir/paas/details/private-network/) انتخاب کنید و در نهایت [منابع سخت‌افزاری و بسته امکانات](https://docs.liara.ir/paas/details/plans/about) مدنظرتان را انتخاب کنید.  
در آخر، کافیست تا بر روی گزینه **ایجاد برنامه** کلیک کنید تا برنامه‌تان ساخته شود.

## Liara CLI

برای ساخت برنامه در لیارا باید در ابتدا با اجرای دستور زیر، ابزار [Liara CLI](https://docs.liara.ir/references/cli/about) را بر روی سیستم‌عامل خود، نصب کنید:

```bash
npm install -g @liara/cli
```

در نظر داشته باشید برای اینکه بتوانید این ابزار را بر روی سیستم خود نصب و از آن استفاده کنید، باید npm و NodeJS بر روی سیستم‌عامل شما نصب باشد.  
کافیست تا به [وب‌سایت رسمی NodeJS](https://nodejs.org) مراجعه کنید و با دانلود و نصب آخرین نسخه NodeJS LTS، ابزار npm و NodeJS برای شما نصب می‌شود.

در ادامه، بایستی با اجرای دستور زیر، وارد حساب کاربری خود در لیارا شوید:

```bash
liara login
```

![liara cli login to account](https://media.liara.ir/docs/liaracli-login.gif)

بعد از انجام کار فوق، بایستی با اجرای دستور زیر، [شبکه خصوصی](https://docs.liara.ir/paas/details/private-network/) برنامه‌تان را ایجاد کنید؛ البته اگر که از قبل شبکه خصوصی را ایجاده کرده باشید؛ نیازی به اجرای این دستور، نخواهد بود:

```bash
liara network create 
```

برای ساخت شبکه خصوصی در تیم مدنظرتان، از دستور زیر استفاده کنید؛ به جای، `your-team-id`، باید [شناسه تیم](https://docs.liara.ir/references/api/about/#team-id) خود را، وارد کنید:

```bash
liara network create --team-id=your-team-id
```

سپس، کافیست تا برنامه خود را در لیارا بسازید؛ می‌توانید این کار را با دستور زیر انجام دهید، البته؛ اگر که از قبل برنامه خود را ساخته‌اید، نیاز به اجرای این دستور، نخواهد بود:

```bash
liara app:create
```

با اجرای دستور فوق، شما باید تیم یا اکانت شخصی‌تان، شناسه، نوع پلتفرم (که باید بر روی static باشد)، شبکه خصوصی و [منابع سخت‌افزاری و بسته امکانات](https://docs.liara.ir/paas/details/plans/about) برنامه خود را انتخاب کنید.

برای ساخت برنامه در تیم مدنظرتان، از دستور زیر استفاده کنید؛ به جای، `your-team-id`، باید [شناسه تیم](https://docs.liara.ir/references/api/about/#team-id) خود را، وارد کنید:

```bash
liara app:create --team-id=your-team-id
```

شناسه‌ای که برای برنامه خود انتخاب می‌کنید باید یکتا باشد، پس از ساخت برنامه، شما می‌توانید با استفاده از شناسه و پسوند `liara.run.` به برنامه خود، دسترسی داشته باشید؛ به عنوان مثال، اگر شناسه برنامه‌تان را `my-web-app` انتخاب کنید؛ برنامه‌تان در آدرس زیر، قابل مشاهده و بررسی خواهد بود:

```bash
https://my-web-app.liara.run
```

در واقع، این همان [دامنه پیش‌فرضی](https://docs.liara.ir/paas/domains/default-subdomain) است که لیارا به صورت رایگان در اختیار شما قرار می‌دهد.  
در نهایت، می‌توانید وضعیت برنامه خود را در [پنل کاربری](https://console.liara.ir) مشاهده بفرمایید که در حالت آماده به کار قرار دارد:  
![a ready to use app](https://media.liara.ir/docs/created-static-app.png)

> همچنین بخوانید: [آشنایی با ویژگی‌های یک برنامه](https://docs.liara.ir/paas/details/about)  
> همچنین بخوانید: [اضافه کردن دامنه به برنامه](https://docs.liara.ir/paas/domains/about)

## all links

[All links of docs](https://docs.liara.ir/all-links-llms.txt)
