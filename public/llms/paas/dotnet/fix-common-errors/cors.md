Original link: https://docs.liara.ir/paas/dotnet/fix-common-errors/cors/

# رفع خطای CORS در برنامه‌های NET.

خطای CORS (Cross-Origin Resource Sharing) یک محدودیت امنیتی در مرورگرها است که جلوی درخواست‌های HTTP از منابع مختلف را می‌گیرد.  
این خطا ممکن است زمانی رخ دهد که سعی کنید از یک دامنه یا پورت متفاوت به سروری دیگر درخواست ارسال کنید، و معمولاً با پیام خطایی شبیه به **Access-Control-Allow-Origin** در مرورگر مواجه خواهید شد. در ادامه، به رفع این خطا، پرداخته شده است:

در برنامه‌های NET. به‌روش‌های مختلفی می‌توانید CORS را فعال‌سازی کنید اما درصورتی که با خطای CORS مواجه شده‌اید بایستی Origins و یا Methods تنظیم شده را مجدد مورد بررسی قرار دهید:

```dotnet
builder.Services.AddCors(options =>
{
  options.AddPolicy(name: "MyPolicy",
    builder =>
    {
      builder.WithOrigins("https://example.com",
                          "https://subdomain.example.com")
              .WithMethods("PUT", "DELETE", "GET");
    });
});
```

> برای اطلاعات بیشتر می‌توانید به [مستندات رسمی](https://stackoverflow.com/a/37349873/6390238) مراجعه کنید.

## all links

[All links of docs](https://docs.liara.ir/all-links-llms.txt)
