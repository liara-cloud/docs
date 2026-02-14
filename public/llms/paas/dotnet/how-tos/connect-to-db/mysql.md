Original link: https://docs.liara.ir/paas/dotnet/how-tos/connect-to-db/mysql/

# اتصال به دیتابیس MariaDB/MySQL در برنامه‌های NET.

برای اتصال به دیتابیس MariaDB یا MySQL در ابتدا باید پکیج `Pomelo.EntityFrameworkCore.MySql` را بر روی پروژه خود نصب کنید؛ می‌توانید این پکیج را با اجرای دستور زیر، نصب کنید:

```bash
dotnet add package Pomelo.EntityFrameworkCore.MySql --version 8.0.2
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
    "Production": "server=etna.liara.cloud; port=34665; user=root; password=H90ZsLcOGp65WSmOnbHYCKsg; database=objective_rubin"
    }
}
```

اکنون، می‌توانید در فایل `Program.cs`، به روش زیر، به دیتابیس MariaDB یا MySQL خود متصل شوید:

```dotnet
using Microsoft.EntityFrameworkCore;
using your-project-name.Data;
var builder = WebApplication.CreateBuilder(args);
var connectionString = builder.Configuration.GetConnectionString("Production");
var serverVersion = ServerVersion.AutoDetect(connectionString);
builder.Services.AddDbContext<your-db-Context>(options =>
  options.UseMySql(connectionString, serverVersion));
```

## all links

[All links of docs](https://docs.liara.ir/all-links-llms.txt)
