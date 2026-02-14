Original link: https://docs.liara.ir/paas/docker/quick-start/




# استقرار سریع برنامه‌های Docker


<Tabs 
tabs={["Liara Console", "Liara CLI", "Github"]} 
content={[
<>
[Video link](https://media.liara.ir/docker/docker-desktop.mp4)

برای استقرار با استفاده از ابزار [Liara Console](https://docs.liara.ir/references/console/about) کافیست تا مراحل زیر را طی کنید:
۱. ورود به حساب کاربری   
وارد [کنسول لیارا](https://console.liara.ir) شوید و با وارد کردن ایمیل یا شماره همراه ثبت شده، به اکانت خود در لیارا، لاگین کنید.

۲. انتخاب حساب
حساب شخصی یا تیم مدنظرتان برای استقرار برنامه را انتخاب کنید.


> همچنین بخوانید: [مدیریت تیم‌ها در لیارا](https://docs.liara.ir/references/team/about/)

۳. ایجاد برنامه
برنامه Docker خود را با شناسه، [شبکه خصوصی](../details/private-network) و [منابع سخت‌افزاری و بسته امکانات](../details/plans/about) مدنظرتان ایجاد کنید.

۴. حذف فایل‌های اضافی
پوشه‌ها و فایل‌های درون پروژه که قصد ندارید در لیارا آپلود شوند (به عنوان مثال پوشه‌ venv. در برنامه‌های مبتنی بر پایتون یا پوشه node_modules در برنامه‌های مبتنی بر NodeJS) را پاک کنید.

۵. ایجاد Dockerfile
در مسیر اصلی پروژه، یک فایل به نام `Dockerfile` ایجاد کنید و بنا به نیازهای پروژه خود، دستورات مرتبط را درون این فایل، قرار دهید تا پروژه‌تان Dockerize شود. به عنوان مثال، اگر که برنامه‌تان مبتنی بر فریم‌ورک go است، می‌توانید قطعه کد زیر را در `Dockerfile`، قرار دهید:

```docker
Use the official go image as the base image
FROM go:latest
        
Set the working directory inside the container
WORKDIR /app

Copy the local code to the container
COPY . .

Download Go modules
RUN go mod download

Build the Go application
RUN go build -o main .

Expose port 8080 to the outside world
EXPOSE 8080

Command to run the executable
CMD ["./main"]
```

> شما می‌توانید با استفاده از دستور `EXPOSE` پورتی که برنامه توسط آن به درخواست کاربران گوش می‌دهد را مشخص کنید. البته چون که در حین استقرار، لیارا از شما port برنامه را می‌پرسد بنابراین برای استقرار برنامه‌های داکرایز شده در لیارا، نیازی به نوشتن این دستور در `Dockerfile` نیست.

۶. زیپ و آپلود پروژه
پوشه پروژه را در یک فایل `zip` قرار دهید. فایل را کشیده و در باکس آپلود Liara Console رها کنید.

۷. استقرار پروژه
مرحله به مرحله استقرار را با Console جلو بروید و شخصی‌سازی‌های لازم را انجام دهید و در نهایت بر روی گزینه استقرار کلیک کنید تا عملیات استقرار، آغاز شود.
</>,

<>
[Video link](https://media.liara.ir/docker/docker-cli.mp4)


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
با اجرای دستور زیر، برنامه Docker خود را ایجاد کنید:
```bash
liara create
```

> اگر که از قبل برنامه خود را ایجاد کرده‌اید؛ نیازی به انجام این کار نیست.
در ادامه اجرای این دستور، باید به ترتیب، شناسه، نوع پلتفرم (که باید بر روی docker تنظیم شود)، شبکه خصوصی و [منابع سخت‌افزاری و بسته امکانات برنامه](../details/plans/about)، مشخص شوند.

۵. نادیده گرفتن فایل‌های اضافی
برای آپلود نشدن فایل‌های اضافی، از `gitignore.` یا `liaraignore.` یا `dockerignore.` استفاده کنید و درون یکی از این سه فایل، اسامی دایرکتوری‌ها و فایل‌های اضافی را بیاورید. به عنوان مثال:
```gitignore
.env
.vscode/
.idea/
*.sublime-project
*.sublime-workspace
```

۶. ایجاد Dockerfile
در مسیر اصلی پروژه، یک فایل به نام `Dockerfile` ایجاد کنید و بنا به نیازهای پروژه خود، دستورات مرتبط را درون این فایل، قرار دهید تا پروژه‌تان Dockerize شود. 
به عنوان مثال، اگر که برنامه‌تان مبتنی بر فریم‌ورک go است، می‌توانید قطعه کد زیر را در `Dockerfile`، قرار دهید:

```docker
Use the official go image as the base image
FROM go:latest
        
Set the working directory inside the container
WORKDIR /app

Copy the local code to the container
COPY . .

Download Go modules
RUN go mod download

Build the Go application
RUN go build -o main .

Expose port 8080 to the outside world
EXPOSE 8080

Command to run the executable
CMD ["./main"]
```

> شما می‌توانید با استفاده از دستور `EXPOSE` پورتی که برنامه توسط آن به درخواست کاربران گوش می‌دهد را مشخص کنید. البته چون که در حین استقرار، لیارا از شما port برنامه را می‌پرسد بنابراین برای استقرار برنامه‌های داکرایز شده در لیارا، نیازی به نوشتن این دستور در `Dockerfile` نیست.

۷. استقرار برنامه
با اجرای دستور زیر در مسیر اصلی پروژه، برنامه خود را  در لیارا مستقر کنید (بعد از `app--` شناسه برنامه و بعد از `port--`، پورتی که برنامه در آن، به درخواست کاربران، گوش می‌دهد را، وارد کنید):

```bash
liara deploy --app=myapp --platform=docker --port=8080
```

برای استقرار برنامه در تیم مدنظرتان، کافیست تا از [شناسه تیم](https://docs.liara.ir/references/api/about/#team-id) و فلگ `team-id--` استفاده کنید:

```bash
liara deploy --app=myapp --platform=docker --port=8080 --team-id=your-unique-team-id
```
</>,
<>
[Video link](https://media.liara.ir/docs/docker-github.mp4)

برای استقرار با Github، کافیست تا مراحل زیر را طی کنید:
۱. ورود به حساب کاربری   
وارد [کنسول لیارا](https://console.liara.ir) شوید و با وارد کردن ایمیل یا شماره همراه ثبت شده، به اکانت خود در لیارا، لاگین کنید.

۲. انتخاب حساب
حساب شخصی یا تیم مدنظرتان برای استقرار برنامه را انتخاب کنید.


> همچنین بخوانید: [مدیریت تیم‌ها در لیارا](https://docs.liara.ir/references/team/about/)

۳. ایجاد برنامه
برنامه Docker خود را با شناسه، [شبکه خصوصی](../details/private-network) و [منابع سخت‌افزاری و بسته امکانات](../details/plans/about) مدنظرتان ایجاد کنید.

۴. ایجاد Dockerfile
در مسیر اصلی پروژه، یک فایل به نام `Dockerfile` ایجاد کنید و بنا به نیازهای پروژه خود، دستورات مرتبط را درون این فایل، قرار دهید تا پروژه‌تان Dockerize شود. 
به عنوان مثال، اگر که برنامه‌تان مبتنی بر فریم‌ورک go است، می‌توانید قطعه کد زیر را در `Dockerfile`، قرار دهید:

```docker
Use the official go image as the base image
FROM go:latest
        
Set the working directory inside the container
WORKDIR /app

Copy the local code to the container
COPY . .

Download Go modules
RUN go mod download

Build the Go application
RUN go build -o main .

Expose port 8080 to the outside world
EXPOSE 8080

Command to run the executable
CMD ["./main"]
```

> شما می‌توانید با استفاده از دستور `EXPOSE` پورتی که برنامه توسط آن به درخواست کاربران گوش می‌دهد را مشخص کنید. البته چون که در حین استقرار، لیارا از شما port برنامه را می‌پرسد بنابراین برای استقرار برنامه‌های داکرایز شده در لیارا، نیازی به نوشتن این دستور در `Dockerfile` نیست.

۵. ساخت فایل `liara.json`
در مسیر اصلی پروژه، یک فایل به نام `liara.json` ایجاد کنید و پیکربندی‌های مدنظرتان را در این فایل بنویسید؛ به عنوان مثال:

```json
{ 
    {
    "port": 8080,
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
}
```
> در فایل فوق، برای جلوگیری از خطا خوردن فرایند استقرار، از فیلدهای `app` و `platform` استفاده نکنید؛ چرا که لیارا، آن‌ها را به صورت خودکار، تشخیص خواهد داد.

۶. ساخت ریپازیتوری در گیت‌هاب
یک ریپازیتوری در حساب گیت‌هاب خود برای برنامه‌مدنظرتان با نام دلخواه‌تان ایجاد کنید.

> در صورتی که از قبل، این کار را انجام داده‌اید یا قصد دارید از ریپازیتوری‌های فعلی خود استفاده کنید؛ از این مرحله بگذرید.

۷. آپلود پروژه در گیت‌هاب
پروژه نهایی خود را در ریپازیتوری‌تان در گیت‌هاب آپلود کنید؛
حتماً در نظر داشته باشید که درون پروژه‌تان، فایل `gitignore.` قرار داشته باشد و درون آن، فایل‌های اضافی 
برنامه، که قصد ندارید آپلود شوند؛ لیست شده باشند.

۸. اتصال لیارا به گیت‌هاب
برای اتصال حساب لیارا خود به گیت‌هاب، در لیارا بر روی پروفایل خود کلیک کرده و وارد زیر قسمت [حساب کاربری](https://console.liara.ir/settings/profile) شوید. در ادامه 
وارد منوی [گیت‌هاب](https://console.liara.ir/settings/github) شوید و بر روی دکمه <b>اتصال به گیت‌هاب</b>، کلیک کنید.

![connect to github on liara account](https://media.liara.ir/docs/connect-to-github-on-liara.png)

پس از 
انجام این کار و وارد کردن اطلاعات مربوط به گیت‌هاب، حساب لیارا شما به گیت‌هاب متصل خواهد شد.

![added github account on liara](https://media.liara.ir/docs/added-github-account-on-liara.png)



> در صورت مواجه با خطای "اتصال به Github"، بایستی از حساب لیارا خود، خارج شده و مجدداً به وسیله Github، به اکانت لیارا خود، وارد شوید.

۹. ویرایش دسترسی‌ها
بعد از اتصال به اکانت گیت‌هاب، بر روی گزینه <b>ویرایش دسترسی‌ها</b> کلیک کرده و ریپازیتوری (ریپازیتوری‌های) مدنظرتان را به حساب لیارا متصل کنید.

[Video link](https://media.liara.ir/docs/edit-access-to-github-account.mp4)

۱۰. استقرار برنامه
در نهایت، بر روی برنامه خود کلیک کرده وارد صفحه <b>استقرار جدید</b> شوید؛ سپس در منوی <b>گیت‌هاب</b>، ریپازیتوری مدنظرتان را انتخاب کرده و پس از انتخاب نوع استقرار و branch مدنظرتان، بر روی گزینه <b>اتصال به برنامه</b> کلیک کنید تا برنامه‌تان به ریپازیتوری مدنظرتان متصل شود.
در نهایت، کافیست تا یک‌بار بر روی گزینه <b>استقرار دستی</b> کلیک کنید تا آخرین commit شما در لیارا مستقر شود.

[Video link](https://media.liara.ir/docs/deploy-project-using-github.mp4)

> برای قطع ارتباط برنامه و ریپازیتوری نیز، می‌توانید بر روی دکمه <b>قطع اتصال</b> کلیک کنید تا تغییرات جدید، مستقر نشوند.

</>,
]} 
/>



> پس از استقرار، برنامه‌ی شما در سرورهای لیارا build شده و image نهایی در [registry خصوصی](../details/private-registry) شما در لیارا ذخیره خواهد شد.

> در هر برنامه داکر در لیارا، شما می‌توانید فقط پورت یک وب‌سرور با پروتکل HTTP را Expose کنید. به عنوان مثال، پورت یک دیتابیس، خارج از شبکه خصوصی، در دسترس نیست و تنها در بین برنامه‌های موجود در شبکه خصوصی، قابل دسترسی است.




> همچنین بخوانید: [استقرار قدم به قدم برنامه‌های Docker در لیارا](./how-tos/create-app)


## all links

[All links of docs](https://docs.liara.ir/all-links-llms.txt)
