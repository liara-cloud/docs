Original link: https://docs.liara.ir/paas/dotnet/how-tos/connect-to-db/about/

# اتصال به دیتابیس 

دیتابیس‌ها، در اکوسیستم یک پلتفرم، نقش حیاتی دارند. دیتابیس‌ها نه تنها محلی برای ذخیره و بازیابی داده‌ها هستند، بلکه به عنوان ستون فقرات یک برنامه، عمل می‌کنند و بر کارایی، مقیاس‌پذیری و قابلیت اعتماد سیستم، تأثیر مستقیم می‌گذارند.
حال از آنجایی که مستندات رسمی پلتفرم NET. نیز، استفاده از [Entity Framework ORM](https://learn.microsoft.com/en-us/ef/) را، به شدت توصیه می‌کند؛ در ادامه، مستندات مربوط به اتصال به دیتابیس با استفاده از این ORM برای شما، قرار گرفته است:

- #### MSSQL
  [./mssql](./mssql)

- #### MySQL/MariaDB
  [./mysql](./mysql)

- #### PostgreSQL
  [./postgresql](./postgresql)

- #### SQLite
  [./sqlite](./sqlite)

## اجرای Migrationها در دیتابیس‌

برای اجرای Migrationها در دیتابیس مد نظر خود، 
می‌توانید مشابه قطعه کد زیر را به فایل `Program.cs` اضافه کنید. با این کار دیگر نیازی به اجرای دستور `dotnet ef database update` نخواهد بود:

```dotnet
using (var scope = app.Services.CreateScope())
{
    var dbContext = scope.ServiceProvider.GetRequiredService<AppDbContext>();
    dbContext.Database.Migrate();
}
```

## قابلیت Connection Pooling

مفهوم Connection pooling به معنای استفاده از یک مجموعه اتصالات از پیش ساخته شده برای اتصال به پایگاه داده است. این تکنیک باعث می‌شود به جای ایجاد و بستن مکرر اتصالات، از اتصالات موجود در مجموعه استفاده شود که کارایی را افزایش می‌دهد.
> همچنین بخوانید: [آشنایی بیشتر با قابلیت Connection Pooling](https://docs.liara.ir/dbaas/details/connection-pool)

از آنجایی که در پلتفرم NET. از EF ORM استفاده می‌شود. بنابراین، قابلیت Connection Pooling به صورت خودکار برقرار است و نیازی نیست که 
شما برای استفاده از آن، کار خاصی را انجام دهید.

## all links

[All links of docs](https://docs.liara.ir/all-links-llms.txt)
