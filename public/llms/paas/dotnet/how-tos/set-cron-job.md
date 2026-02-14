Original link: https://docs.liara.ir/paas/dotnet/how-tos/set-cron-job/

# تنظیم Cron Job

Cron job یک وظیفه زمان‌بندی شده در سیستم‌عامل‌های Unix و Linux است که به کاربران اجازه می‌دهد تا اسکریپت‌ها یا دستورات را در فواصل زمانی منظم اجرا کنند. این ابزار به خصوص برای انجام وظایف دوره‌ای مثل پشتیبان‌گیری، ارسال ایمیل، اجرای اسکریپت‌های نگهداری سیستم، یا به‌روزرسانی اطلاعات مفید است.

برای تنظیم یک Cron Job در dotNET می‌توانید از `IHostedService` یا `BackgroundService`، استفاده کنید.  
به عنوان مثال، فرض کنید که در فایل `Program.cs` مشخص کردید که در صورت ارسال درخواست `POST` به مسیر `execute/`، یک لاگ تحت عنوان `The script is executed` ثبت شود: 

```csharp
app.MapPost("/execute", () =>
{
    Console.WriteLine("The script is executed");
    return Results.Ok("Script executed successfully");
});
```

و اکنون، فرض کنید که قصد دارید در هر دقیقه، به مسیر  
مشخص شده، درخواست `POST` ارسال کنید.  
برای این‌کار، می‌توانید در مسیر اصلی پروژه و در کنار فایل `Program.cs`، یک فایل به نام `ScheduledJobService.cs` ایجاد کنید و کد زیر را در آن قرار دهید:

```csharp
public class ScheduledJobService : BackgroundService
{
    private readonly ILogger<ScheduledJobService> _logger;
    private readonly HttpClient _httpClient;

    public ScheduledJobService(ILogger<ScheduledJobService> logger)
    {
        _logger = logger;
        _httpClient = new HttpClient();
    }

    protected override async Task ExecuteAsync(CancellationToken stoppingToken)
    {
        while (!stoppingToken.IsCancellationRequested)
        {
            try
            {
                _logger.LogInformation("Executing scheduled request...");
                
                // send a POST request to the server
                var response = await _httpClient.PostAsync("http://<app-name>:<app-port>/execute", null, stoppingToken);
                
                _logger.LogInformation($"Response: {response.StatusCode}");

            }
            catch (Exception ex)
            {
                _logger.LogError($"Error in ScheduledJobService: {ex.Message}");
            }

            // wait for 1 minute
            await Task.Delay(TimeSpan.FromMinutes(1), stoppingToken);
        }
    }
}
```

در قطعه کد فوق، به‌جای `<app-name>` و `<app-port>`، نام برنامه و پورت آن را قرار دهید.  
اکنون باید سرویس پس زمینه را مانند شکل زیر به فایل `Program.cs` اضافه کنید:

```csharp
builder.Services.AddHostedService<ScheduledJobService>();
```

تمامی کارها انجام شده است و اکنون، می‌توانید  
برنامه‌تان را در لیارا مستقر کنید.  

> یک برنامه مثال در [گیت‌هاب لیارا](https://docs.liara.ir) قرار گرفته است که می‌توانید از آن، استفاده کنید.

## all links

[All links of docs](https://docs.liara.ir/all-links-llms.txt)
