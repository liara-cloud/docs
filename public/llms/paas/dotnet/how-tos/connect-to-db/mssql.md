Original link: https://docs.liara.ir/paas/dotnet/how-tos/connect-to-db/mssql/

# اتصال به دیتابیس MSSQL در برنامه‌های NET.

برای اتصال به دیتابیس SQL Server در ابتدا باید پکیج `Microsoft.EntityFrameworkCore.SqlServer` را بر روی پروژه خود نصب کنید؛ می‌توانید این پکیج را با اجرای دستور زیر، نصب کنید:

```bash
dotnet add package Microsoft.EntityFrameworkCore.SqlServer
```

در ادامه، باید در فایل `appsettings.json` مقدار URI مربوط به دیتابیس MSSQL خود را قرار دهید و عبارت `Encrypt=False` را حتماً در انتهای URI قرار دهید تا در نهایت اتصال درست باشد؛ به عنوان مثال اگر که مقدار URI دیتابیس MSSQL شما به شرح زیر باشد:

```python
Data Source=etna.liara.cloud,30280;Initial Catalog=myDB;User Id=sa;Password=EJNdMyuBGd8KrCdixJA4DHzS;
```

سپس، باید مانند قطعه کد زیر، آن را در فایل `appsettings.json` قرار دهید:

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
    "Production": "Data Source=etna.liara.cloud,30280;Initial Catalog=myDB;User Id=sa;Password=EJNdMyuBGd8KrCdixJA4DHzS; Encrypt=False"
    }
}
```

اکنون، می‌توانید در فایل `Program.cs`، به روش زیر، به دیتابیس SQL Server خود متصل شوید:

```bash
using Microsoft.EntityFrameworkCore;
using your-project-name.Data;
var builder = WebApplication.CreateBuilder(args);
builder.Services.AddDbContext<your-db-Context>(options =>
  options.UseSqlServer(builder.Configuration.GetConnectionString("Production")));
```

> یک پروژه آماده استقرار در [گیت‌هاب لیارا](https://github.com/liara-cloud/dotnet-getting-started/tree/ef-core) وجود دارد که می‌توانید از آن، استفاده کنید.

## all links

[All links of docs](https://docs.liara.ir/all-links-llms.txt)
