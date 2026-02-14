Original link: https://docs.liara.ir/paas/dotnet/how-tos/manage-logs/

# مدیریت logهای برنامه‌های NET.

لاگ‌های یک فریم‌ورک وظیفه دارند اتفاقات رخ داده در نرم‌افزار مثل errorها یا exceptionها و حتی اطلاعاتی که خود توسعه‌دهنده به دلخواه خود در بخش‌های مختلف نرم‌افزار درنظرگرفته را، ثبت کنند.

مدیریت logها در NET. می‌تواند روش‌های مختلفی داشته باشد و وابسته به پیاده‌سازی برنامه‌ی‌تان و تصمیمات شما است. ممکن است لاگ‌های مهم‌تر را در فایل ذخیره کنید و بخشی را در کنسول نمایش دهید.  
برای نمونه اگر سطح لاگ‌ها را روی Information قرار داده‌ باشید، هر وقت کاربری به سایت درخواستی ارسال کند، لاگ می‌شود:

```dotnet
{ 
    "Logging": {
        "LogLevel": {
            "Default": "Information",
            "Microsoft": "Information",
            "Microsoft.Hosting.Lifetime": "Information"
        }
}
```

> همچنین بخوانید: [گزارشات نرم‌افزاری و سخت‌افزاری یک برنامه در لیارا](https://docs.liara.ir/paas/details/observations/about)

## all links

[All links of docs](https://docs.liara.ir/all-links-llms.txt)
