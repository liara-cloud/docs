Original link: https://docs.liara.ir/dbaas/elastic-search/how-tos/connect-via-platform/dotnet/

# اتصال به دیتابیس PostgreSQL در برنامه‌های NET.

برای اتصال به دیتابیس PostgreSQL در ابتدا باید پکیج `Npgsql.EntityFrameworkCore.PostgreSQL` را بر روی پروژه خود نصب کنید؛ می‌توانید این پکیج را با اجرای دستور زیر، نصب کنید:

```bash
dotnet add package Npgsql.EntityFrameworkCore.PostgreSQL --version 8.0.2
```

در ادامه، باید در فایل `appsettings.json` اطلاعات مربوط به دیتابیس را وارد کنید. به عنوان مثال:

```python
{
  "Logging": {
    "LogLevel": {
      "Default": "Information",
      "Microsoft.AspNetCore": "Warning"
    }
  },
  "AllowedHosts": "*",
  "ConnectionStrings": {
    "Production": "Host=etna.liara.cloud; Port=31584; Username=root; Password=MGV9V4JyUlRiVlCTZj72Su3U; Database=postgres"
    }
}
```

اکنون، می‌توانید در فایل `Program.cs`، به روش زیر، به دیتابیس PostgreSQL خود متصل شوید:

```bash
using Microsoft.EntityFrameworkCore;
using your-project-name.Data;
var builder = WebApplication.CreateBuilder(args);
builder.Services.AddDbContext<your-db-Context>(options =>
  options.UseNpgsql(builder.Configuration.GetConnectionString("Production")));
```

## all links

[All links of docs](https://docs.liara.ir/all-links-llms.txt)
