Original link: https://docs.liara.ir/paas/dotnet/how-tos/connect-to-db/sqlite/

# اتصال به دیتابیس SQLite در برنامه‌های NET.

[Video link](https://media.liara.ir/dotnet/dotnet-ef.mp4)

برای اتصال موفق به دیتابیس SQLite در برنامه‌های NET. کافیست تا گام‌های زیر را طی کنید:

۱. ایجاد دایرکتوری دیتابیس

در ابتدا، در مسیر اصلی پروژه، یک دایرکتوری به نام `db` ایجاد کنید. این دایرکتوری،  
محل ذخیره فایل دیتابیس، خواهد بود.

۲. نصب پکیج دیتابیس و قرار دادن قطعه‌کدهای مربوطه  
اکنون، بایستی با اجرای دستور زیر، پکیج مربوط به دیتابیس SQLite را بر روی پروژه خود، نصب کنید

```dotnet
dotnet add package Microsoft.EntityFrameworkCore.SQLite
```

در ادامه، باید در فایل `appsettings.json` اطلاعات مربوط به دیتابیس مثل دایرکتوری و نام آن را وارد کنید؛ به عنوان مثال:

```dotnet
{
  "Logging": {
    "LogLevel": {
      "Default": "Information",
      "Microsoft.AspNetCore": "Warning"
    }
  },
  "AllowedHosts": "*",
  "ConnectionStrings": {
    "Production": "Data Source=db/MvcMovieContext-69c678d9-0976-406c-9d44-239ed1395d90.db"
    }
}
```

سپس، باید قطعه کد زیر را در فایل `Program.cs` وارد کنید:

```dotnet
using Microsoft.EntityFrameworkCore;
using your-context.Data;
var builder = WebApplication.CreateBuilder(args);
    builder.Services.AddDbContext<your-context>(options =>
        options.UseSqlite(builder.Configuration.GetConnectionString("Production")));

builder.Services.AddControllersWithViews();
var app = builder.Build();

using (var scope = app.Services.CreateScope())
{
    var dbContext = scope.ServiceProvider.GetRequiredService<your-context>();
    dbContext.Database.Migrate();  
}
```

۳. ایجاد دیسک برای دیتابیس  
[طبق مستندات ایجاد دیسک](https://docs.liara.ir/paas/disks/create)،  در بخش **دیسک‌ها** برنامه خود در لیارا، یک دیسک جدید با نام `database` و اندازه مدنظرتان ایجاد کنید.

۴. ایجاد و پیکربندی فایل liara.json  
در مسیر اصلی پروژه، یک فایل به نام `liara.json` ایجاد کنید و قطعه کد زیر را، درون آن، قرار دهید:

```json
{
    "disks":[
        {
            "name": "database",
            "mountTo": "db"
        }
    ]
}
```

۵. استقرار برنامه در لیارا  
برنامه خود را با استفاده از دستور `liara deploy` در لیارا مستقر کنید.

البته در نظر داشته باشید که استفاده از دیتابیس SQLite بیشتر برای وب‌سایت‌های کوچک با پردازش‌های کم مناسب است و  
در مقیاس بالا، بهتر است که از دیتابیس‌های دیگری استفاده کنید.

## استفاده از Connection Pooling  
در نظر داشته باشید که SQLite از قابلیت Connection Pooling پشتیبانی نمی‌کند؛ چرا که SQLite یک دیتابیس فایل‌محور است و نیازی به connection pooling ندارد. هر اتصال به فایل دیتابیس مستقل از دیگر اتصالات است و SQLite به طور خودکار این اتصالات را، مدیریت می‌کند.

## all links

[All links of docs](https://docs.liara.ir/all-links-llms.txt)
