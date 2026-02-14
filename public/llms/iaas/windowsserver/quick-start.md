Original link: https://docs.liara.ir/iaas/windowsserver/quick-start/

# راه‌اندازی سریع سرور مجازی ویندوز 

## Liara Console

برای راه‌اندازی سرور با استفاده از ابزار [Liara Console](https://docs.liara.ir/references/console/about) کافیست تا مراحل زیر را طی کنید:  
۱. ورود به حساب کاربری  
وارد [کنسول لیارا](https://console.liara.ir) شوید و با وارد کردن ایمیل یا شماره همراه ثبت شده، به اکانت خود در لیارا، لاگین کنید.

۲. انتخاب حساب  
حساب شخصی یا تیم مدنظرتان برای استقرار برنامه را انتخاب کنید.

> همچنین بخوانید: [مدیریت تیم‌ها در لیارا](https://docs.liara.ir/references/team/about/)

۳. ایجاد سرور مجازی ابری  
وارد تب **سرور مجازی ابری** شوید، سپس بر روی گزینه **ایجاد سرور مجازی ابری** کلیک کنید و سرور Windows خود را با نسخه، شناسه و [منابع سخت‌افزاری](https://docs.liara.ir/iaas/details/hardware-plans) مدنظرتان ایجاد کنید.

[Video link](https://media.liara.ir/iaas/windows-server/create.mp4)

۴. ارسال سیگنال روشن شدن به سرور مجازی ابری

پس از ساخت سرور مجازی ابری، به‌صورت خودکار، یک سیگنال روشن‌شدن به سرور ساخته شده شما، ارسال می‌شود و سرور شما روشن خواهد شد. اما در صورتی که سرور شما روشن نبود، برای این‌کار، بر روی آن کلیک کرده و سپس وارد بخش **تنظیمات** آن، شوید. در نهایت  
در قسمت **ارسال سیگنال**، بر روی گزینه **انتخاب سیگنال**، کلیک کرده، سیگنال **روشن کردن** را انتخاب کنید و در نهایت بر روی گزینه **ارسال سیگنال**، کلیک کنید تا سیگنال، ارسال شود.  
پس از انجام این کار، می‌توانید وضعیت سرور مجازی ابری خود را در بخش [رویدادها](https://docs.liara.ir/iaas/details/events)، بررسی کنید.

[Video link](https://media.liara.ir/iaas/windows-server/turn-on-by-sending-signal.mp4)

> همچنین بخوانید: [آشنایی با سیگنال‌ها در سرور مجازی ابری](https://docs.liara.ir/iaas/details/signals)

## Liara CLI

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

![liara cli login to account](https://media.liara.ir/docs/liaracli-login.gif)

۳. ایجاد سرور مجازی ابری  
با اجرای دستور زیر، سرور مجازی ابری Ubuntu خود را ایجاد کنید:
```bash
liara vm create
```

در ادامه اجرای این دستور، باید به ترتیب، شناسه (اختیاری)، نوع سرور مجازی ابری (که باید بر روی windowsserver تنظیم شود)، ورژن سرور ویندوز و [منابع سخت‌افزاری](https://docs.liara.ir/iaas/details/hardware-plans)، مشخص شوند.

> اگر که از قبل سرور مجازی ابری خود را ایجاد کرده‌اید؛ نیازی به انجام این کار نیست.

۴. ارسال سیگنال روشن شدن به سرور مجازی ابری  
با اجرای دستور زیر، سیگنال روشن‌شدن را به سرور مجازی ابری خود ارسال کنید تا سرور مجازی ابری، روشن شود:

```bash
liara vm start
```

> در صورتی که قصد دارید سیگنال روشن‌شدن در پس‌زمینه، به سرور مجازی ابری ارسال شود، دستور `liara vm start -d` را، اجرا کنید.  
> همچنین بخوانید: [آشنایی با سیگنال‌ها در سرور مجازی ابری](https://docs.liara.ir/iaas/details/signals)

## اتصال به سرور مجازی ویندوز از لوکال

تمامی کارها انجام شده است و اکنون می‌توانید با روش‌های مرسوم، به سرور مجازی ابری خود، متصل شوید. یکی از روش‌های توصیه‌شده برای اتصال به سرور مجازی ویندوز، استفاده از Remote Desktop Connection است.  
برای این کار، در بخش جستجوی ویندوز، عبارت `mstsc` را بنویسید و اولین نتیجه با نام `Remote Desktop Connection` را باز کنید:

![remote desktop connection in windows](https://media.liara.ir/iaas/windows-server/mstsc-search-result.png)

سپس، به شکل زیر، به سرور مجازی ویندوز خود، متصل شوید:

[Video link](https://media.liara.ir/iaas/windows-server/connect.mp4)

در پنجره Remote Desktop Connection، بر روی گزینه `Show Options` کلیک کنید و در فیلد `Computer`، آدرس IP (نشانی) سرور مجازی ویندوز را از بخش **اتصال** کنسول لیارا وارد کنید.  
در فیلد `Username`، نام کاربری سرور مجازی ویندوز (معمولاً Administrator) را وارد کنید و سپس بر روی گزینه `Connect` کلیک کنید.  
در پنجره جدید باز شده (به نام Windows Security)، رمز عبور سرور مجازی ویندوز را وارد کنید و بر روی گزینه `OK` کلیک کنید تا به سرور مجازی ویندوز خود، متصل شوید.  
در صورتی که با پیغام امنیتی مواجه شدید، بر روی گزینه `Yes` کلیک کنید تا اتصال برقرار شود.

با انجام گام‌های فوق، به سرور مجازی ویندوز خود متصل شده‌اید و می‌توانید از آن استفاده کنید.

## فعال‌سازی سرور مجازی ویندوز

پس از اتصال به سرور مجازی ویندوز، باید Windows Server را فعال‌سازی کنید.  
برای این کار، مانند زیر عمل کنید:

[Video link](https://media.liara.ir/iaas/windows-server/activate.mp4)

۱. کپی کردن Product Key  
وارد [وب‌سایت رسمی مایکروسافت](https://learn.microsoft.com/en-us/windows-server/get-started/kms-client-activation-keys?tabs=windows1110ltsc%2Cwindows81%2Cserver2025%2Cversion1803#windows-server-ltsc) شوید و از ستون Windows Server LTSC، در تب Windows Server 2025، کلید محصول (Product Key) مربوط به Windows Server 2025 Datacenter را کپی کنید.

۲. اجرای دستور نصب Product Key  
وارد سرور مجازی ویندوز شوید، Power Shell را با دسترسی Administrator باز کنید و دستور زیر را اجرا کنید (به جای `YOUR_PRODUCT_KEY`، کلید محصول کپی شده را وارد کنید):

```bash
slmgr /ipk YOUR_PRODUCT_KEY
```

پس از اجرای دستور فوق، یک پیغام مبنی بر موفقیت‌آمیز بودن نصب کلید محصول نمایش داده می‌شود.

۳. اجرای دستور تنظیم سرور KMS  
در همان پنجره Power Shell، دستور زیر را اجرا کنید تا سرور KMS مایکروسافت تنظیم شود (به جای `kms.example.com`، آدرس سرور KMS خود را وارد کنید؛ می‌توانید از آدرس `kms.digiboy.ir` نیز استفاده کنید):

```bash
slmgr /skms kms.example.com
```

پس از اجرای دستور فوق، یک پیغام مبنی بر موفقیت‌آمیز بودن تنظیم سرور KMS نمایش داده می‌شود.

۴. فعال‌سازی ویندوز  
در همان پنجره Power Shell، دستور زیر را اجرا کنید تا ویندوزتان فعال‌سازی شود:

```bash
slmgr /ato
```

پس از اجرای دستور فوق، یک پیغام مبنی بر موفقیت‌آمیز بودن فعال‌سازی ویندوز نمایش داده می‌شود.

> همچنین بخوانید: [آشنایی با جزئیات سرور مجازی ابری](https://docs.liara.ir/iaas/details/about/)

## all links

[All links of docs](https://docs.liara.ir/all-links-llms.txt)
