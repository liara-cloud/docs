Original link: https://docs.liara.ir/dbaas/rabbitmq/how-tos/connect-via-platform/dotnet/

# اتصال به RabbitMQ در برنامه‌های NET.

برای اتصال به RabbitMQ در ابتدا باید پکیج `RabbitMQ.Client` را بر روی پروژه خود نصب کنید؛ می‌توانید این پکیج را با اجرای دستور زیر، نصب کنید:

```bash
dotnet add package RabbitMQ.Client
```

در ادامه، باید در فایل `appsettings.json` یا `appsettings.Development.json` اطلاعات مربوط به RabbitMQ را وارد کنید. به عنوان مثال:

```json
{
  "Logging": {
    "LogLevel": {
      "Default": "Information",
      "Microsoft.AspNetCore": "Warning"
    }
  },

  "RabbitMQ": {
    "Host": "fitz-roy.liara.cloud",
    "Port": 32923,
    "User": "root",
    "Pass": "63LVuatIrWWajE7gxSj20gHL"
  }
}

```

اکنون، می‌توانید در فایل `Program.cs`، به روش زیر، به RabbitMQ خود متصل شوید:

```dotnet
using Microsoft.AspNetCore.Mvc;
using RabbitMQ.Client;
using System.Text;

var builder = WebApplication.CreateBuilder(args);
var app = builder.Build();

var rabbitConfig = builder.Configuration.GetSection("RabbitMQ");

string host = rabbitConfig["Host"];
int port = int.Parse(rabbitConfig["Port"]);
string user = rabbitConfig["User"];
string pass = rabbitConfig["Pass"];

bool CheckRabbitMQConnection()
{
    try
    {
        var factory = new ConnectionFactory()
        {
            HostName = host,
            Port = port,
            UserName = user,
            Password = pass
        };

        using var connection = factory.CreateConnection();
        using var channel = connection.CreateModel();

        Console.WriteLine("connection successful");
        return true;
    }
    catch (Exception ex)
    {
        Console.WriteLine($"connection failed, error: {ex.Message}");
        return false;
    }
}

app.MapGet("/test-rabbitmq", () =>
{
    bool isConnected = CheckRabbitMQConnection();
    return isConnected ? Results.Ok("connection successful") : Results.Problem("connection failed");
});

app.Run();
```

## all links

[All links of docs](https://docs.liara.ir/all-links-llms.txt)
