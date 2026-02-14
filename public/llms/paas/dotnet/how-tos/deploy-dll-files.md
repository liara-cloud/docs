Original link: https://docs.liara.ir/paas/dotnet/how-tos/deploy-dll-files/

# استقرار فایل‌های DLL در برنامه‌های NET.

فایل‌های DLL یا Dynamic Link Library در برنامه‌های دات‌نت حاوی کدهایی هستند که می‌توانند به صورت پویا توسط برنامه‌های دیگر بارگذاری و اجرا شوند. این فایل‌ها نقش مهمی در به اشتراک‌گذاری و استفاده مجدد از کدها بین برنامه‌ها و پروژه‌های مختلف ایفا می‌کنند.
در پلتفرم NET. لیارا، ابتدا کل سورس‌کد برنامه‌تان به‌سرور آپلود شده و سپس فرایند publish آغاز می‌شود. اما چنانچه قبلا برنامه‌تان را publish کرده‌اید و الان فایل DLL را در اختیار دارید، می‌توانید با استفاده از روش زیر، صرفاً همین فایل را در لیارا، مستقر و اجرا کنید.

- برای استقرار فایل dll خود، یک دایرکتوری جدید ایجاد کنید و درون آن، فایل DLL خود را قرار دهید.
- سپس در کنار فایل DLL خود یک فایل دیگر به نام `Dockerfile` ایجاد کنید و قطعه کد زیر را درون آن، قرار دهید:

```bash
FROM mcr.microsoft.com/dotnet/aspnet:7.0 AS base

RUN apt-get update && \\
    apt-get install -y --no-install-recommends vim unzip && \\
    apt-get clean && \\
    rm -rf /var/lib/apt/lists/*

WORKDIR /app

COPY . /app

CMD ["dotnet", "MyProject.dll"]
```

در خط اول قطعه کد بالا، می‌توانید نسخه‌ی NET. مدنظرتان را وارد کنید. در خط آخر هم به‌جای `MyProject.dll` باید نام فایل DLL خودتان را جایگزین کنید.
در نهایت کافیست با اجرای دستور زیر، برنامه خود را در لیارا، مستقر کنید:

```bash
liara deploy --platform=docker --port=80
```

## all links

[All links of docs](https://docs.liara.ir/all-links-llms.txt)
