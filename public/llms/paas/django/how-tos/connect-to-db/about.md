Original link: https://docs.liara.ir/paas/django/how-tos/connect-to-db/about/

# اتصال به دیتابیس 

دیتابیس‌ها، در اکوسیستم یک پلتفرم، نقش حیاتی دارند. دیتابیس‌ها نه تنها محلی برای ذخیره و بازیابی داده‌ها هستند، بلکه به عنوان ستون فقرات یک برنامه، عمل می‌کنند و بر کارایی، مقیاس‌پذیری و قابلیت اعتماد سیستم، تأثیر مستقیم می‌گذارند.
در حال حاضر، شما می‌توانید در برنامه‌های Django خود در لیارا، به دیتابیس‌های زیر، متصل شوید:

- #### [MySQL/MariaDB](./mysql)
- #### [PostgreSQL](./postgresql)
- #### [MSSQL](./mssql)
- #### [SQLite](./sqlite)
- #### [Redis](./redis)
- #### [ElasticSearch](./elastic-search)

## اجرای Migrationها در دیتابیس‌
برای اجرای Migrationها در دیتابیس مد نظر خود، در ابتدا در Local دستور زیر را اجرا کنید تا Migrationها برای‌تان ایجاد شوند:

```bash
python manage.py makemigrations
```

سپس،  
می‌توانید پس از استقرار برنامه، وارد [خط فرمان](https://docs.liara.ir/paas/details/console-shell) برنامه خود شوید و دستور زیر را اجرا کنید تا عملیات migration برای شما، انجام شود:

```bash
python manage.py migrate
```

یا اینکه می‌توانید طبق [مستندات Hookها](../../use-hooks)، قبل از استقرار و در مسیر اصلی پروژه، یک فایل به نام `liara_pre_start.sh` ایجاد کنید و قطعه کد زیر را، درون آن، قرار دهید:

```sh
python manage.py migrate;
```

در انتها و پس از قرار دادن فایل فوق در مسیر اصلی پروژه، می‌توانید برنامه خود را در لیارا مستقر کنید تا عملیات Migrate به صورت خودکار برای‌تان اعمال شود.

## all links

[All links of docs](https://docs.liara.ir/all-links-llms.txt)
