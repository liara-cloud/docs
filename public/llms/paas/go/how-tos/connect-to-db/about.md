Original link: https://docs.liara.ir/paas/go/how-tos/connect-to-db/about/

# اتصال به دیتابیس 

دیتابیس‌ها، در اکوسیستم یک پلتفرم، نقش حیاتی دارند. دیتابیس‌ها نه تنها محلی برای ذخیره و بازیابی داده‌ها هستند، بلکه به عنوان ستون فقرات یک برنامه، عمل می‌کنند و بر کارایی، مقیاس‌پذیری و قابلیت اعتماد سیستم، تأثیر مستقیم می‌گذارند.  
در حال حاضر، شما می‌توانید در برنامه‌های Go خود در لیارا، به دیتابیس‌های زیر، متصل شوید:

- [MySQL/MariaDB](./mysql)
- [MSSQL](./mssql)
- [PostgreSQL](./postgresql)
- [SQLite](./sqlite)
- [MongoDB](./mongodb)
- [Redis](./redis)
- [ElasticSearch](./elastic-search)

## اجرای Migrationها در دیتابیس‌ 

برای اجرای migrationها در برنامه خود، می‌توانید طبق [مستندات Hookها](https://docs.liara.ir/use-hooks)، قبل از استقرار و در مسیر اصلی پروژه، یک فایل به نام `liara_pre_start.sh` ایجاد کنید و قطعه کدی مشابه قطعه کد زیر را، درون آن، قرار دهید:

```sh
go run migrate.go;
```

در انتها و پس از قرار دادن فایل فوق در مسیر اصلی پروژه، می‌توانید برنامه خود را در لیارا مستقر کنید تا عملیات Migrate به صورت خودکار برای‌تان اعمال شود.

## all links

[All links of docs](https://docs.liara.ir/all-links-llms.txt)
