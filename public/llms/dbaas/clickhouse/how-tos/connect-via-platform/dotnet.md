Original link: https://docs.liara.ir/dbaas/clickhouse/how-tos/connect-via-platform/dotnet/

# اتصال به دیتابیس ClickHouse در برنامه‌های NET.

برای اتصال به دیتابیس ClickHouse در ابتدا باید پکیج `ClickHouse.Client` را بر روی پروژه خود نصب کنید؛ می‌توانید این پکیج را با اجرای دستور زیر، نصب کنید:

```bash
dotnet add package ClickHouse.Client
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

   "ClickHouse": {
    "Host": "rainier.liara.cloud",
    "Port": "33273",
    "Database": "default",
    "Username": "root",
    "Password": "x4y2LJvdFyG5wVO87VbXDrpg"
  }
}
```

در ادامه، در مسیر `Services/ClickHouseService.cs`، قطعه کد زیر را قرار دهید: 

```bash
using ClickHouse.Client.ADO;

namespace ClickHouseDemo.Services;

public class ClickHouseService
{
    private readonly string _connectionString;


    public ClickHouseService(IConfiguration configuration)
    {
        _connectionString =
            $"Host={configuration["ClickHouse:Host"]};" +
            $"Port={configuration["ClickHouse:Port"]};" +
            $"Database={configuration["ClickHouse:Database"]};" +
            $"Username={configuration["ClickHouse:Username"]};" +
            $"Password={configuration["ClickHouse:Password"]};";
    }


    public async Task<object?> TestConnection()
    {
        await using var connection =
            new ClickHouseConnection(_connectionString);

        await connection.OpenAsync();


        await using var command =
            connection.CreateCommand();


        command.CommandText = "SELECT 1";


        return await command.ExecuteScalarAsync();
    }
}
```

سپس، سرویس ایجاد شده را در مسیر `Program.cs`، ثبت کنید: 

```bash
using ClickHouseDemo.Services;


var builder = WebApplication.CreateBuilder(args);


builder.Services.AddControllers();

builder.Services.AddSingleton<ClickHouseService>();


var app = builder.Build();


app.MapControllers();


app.Run();
```

حال، کافیست تا یک کنترلر در مسیر `Controllers/ClickHouseController.cs` ایجاد کنید:

```dotnet
using Microsoft.AspNetCore.Mvc;
using ClickHouseDemo.Services;


namespace ClickHouseDemo.Controllers;


[ApiController]
[Route("api/clickhouse")]
public class ClickHouseController : ControllerBase
{

    private readonly ClickHouseService _clickhouse;


    public ClickHouseController(
        ClickHouseService clickhouse
    )
    {
        _clickhouse = clickhouse;
    }



    [HttpGet("test")]
    public async Task<IActionResult> Test()
    {
        try
        {
            var result =
                await _clickhouse.TestConnection();


            return Ok(new
            {
                success = true,
                message = "ClickHouse connection successful",
                result
            });

        }
        catch(Exception ex)
        {
            return StatusCode(500, new
            {
                success = false,
                message = "ClickHouse connection failed",
                error = ex.Message
            });
        }
    }
}
```

تمامی کارها انجام شده است و اکنون، می‌توانید در مسیر `api/clickhouse/test/` در مرورگر، تست اتصال به دیتابیس را انجام دهید. 

> مثال فوق از اتصال به دیتابیس را می‌توانید به صورت کامل در [گیت‌هاب لیارا](https://github.com/liara-cloud/clickhouse-connect-examples/tree/dotnet)، مشاهده کنید.

## all links

[All links of docs](https://docs.liara.ir/all-links-llms.txt)
