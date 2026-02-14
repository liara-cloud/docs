Original link: https://docs.liara.ir/dbaas/postgresql/create-user/

# ایجاد و مدیریت کاربر جدید در دیتابیس PostgreSQL

وقتی که شما یک دیتابیس PostgreSQL جدید در لیارا، ایجاد می‌کنید؛ به صورت خودکار یک کاربر به نام root همراه با آن ایجاد می‌شود که همان دسترسی پیش‌فرض است.  
دسترسی پیش‌فرض یا کاربر `root` در PostgreSQL، یک اکانت مدیریتی با بیشترین سطح دسترسی است. این کاربر معادل administrator در سیستم‌های عامل مختلف است و می‌تواند تمام عملیات‌های مدیریتی و اجرایی در پایگاه داده را انجام دهد.

شما می‌توانید با استفاده از ابزارهای مختلفی نظیر PSQL، کاربران جدید با دسترسی‌های جدید  
در دیتابیس خود ایجاد کنید؛ در ادامه به نحوه ساخت کاربران جدید با دسترسی‌های مختلف در دیتابیس، پرداخته شده است.

برای ساخت کاربر جدید در دیتابیس، در ابتدا باید [ابزار PSQL](https://docs.liara.ir/dbaas/postgresql/how-tos/connect-via-cli/psql) را بر روی سیستم (یا سرور خود)، نصب کنید؛ در ادامه، بایستی با استفاده از اطلاعات موجود در بخش **نحوه اتصال** دیتابیس‌تان در لیارا و با استفاده از دستور زیر، در ترمینال، به دیتابیس انتخابی، با کاربر root، متصل شوید:  

```bash
psql -h DB_HOST -p DB_PORT -U DB_USERNAME -W DB_NAME
```

بعد از اجرای دستور فوق، رمزعبور از شما خواسته می‌شود که باید ابتدا آن را وارد کرده و سپس به دیتابیس مدنظرتان، متصل می‌شوید.  

پس از اتصال موفق، می‌توانید با استفاده از دستور `CREATE USER`، کاربران مد نظر خود را، ایجاد کنید.

## ساخت کاربر با دسترسی Read-Only
برای ایجاد کاربر جدید که تنها اجازه خواندن اطلاعات (READ) از دیتابیس را دارد و می‌تواند از آن بکاپ بگیرد،  
باید در ابتدا دستوری مانند قطعه کد زیر را اجرا کنید:

```bash
CREATE USER readonly_user WITH PASSWORD 'password';
```

دستور فوق، یک کاربر با نام `readonly_user` و رمزعبور `password` ایجاد می‌کند.  
برای تعیین دسترسی کاربر، اکنون می‌توانید مشابه دستورات زیر، عمل کنید:  

```bash
GRANT CONNECT ON DATABASE <database_name> TO readonly_user;
GRANT USAGE ON SCHEMA public TO readonly_user;
GRANT SELECT ON ALL TABLES IN SCHEMA public TO readonly_user;
```

با انجام کار فوق، کاربر ایجاد شده می‌تواند  
فقط داده‌ها را، در تمامی جداول موجود در دیتابیس مورد نظر، `SELECT` کند (بخواند).  

## ساخت کاربر با دسترسی محدود به برخی جداول
در صورتی که بخواهید کاربری ایجاد کنید که فقط به چند جدول مشخص دسترسی داشته باشد، می‌توانید مانند دستورات زیر عمل کنید؛ در ابتدا بایستی کاربر را ایجاد کنید:

```bash
CREATE USER limited_user WITH PASSWORD 'password';
```

پس از ایجاد کاربر، باید دسترسی‌های آن را مانند دستورات زیر، تعیین کنید:  

```bash
GRANT CONNECT ON DATABASE <database_name> TO limited_user;
GRANT USAGE ON SCHEMA public TO limited_user;
GRANT SELECT, INSERT, UPDATE ON TABLE public.<table_name_1>, public.<table_name_2> TO limited_user;
```

دستورات فوق، یک کاربر به نام `limited_user` و رمزعبور `password` ایجاد می‌کند که می‌تواند  
در جداول <table_name_1> و <table_name_2> در یک دیتابیس مشخص، عملیات `SELECT` , `INSERT` و `UPDATE` را، انجام دهد.

## مشاهده همه کاربران به همراه دسترسی‌های آن‌ها
برای مشاهده دسترسی‌های همه کاربران در PostgreSQL می‌توانید  
از قطعه کد زیر استفاده کنید:

```bash
\\du
```

## حذف دسترسی‌ یک کاربر
برای حذف دسترسی‌های یک کاربر در PostgreSQL، می‌توانید از دستور `REVOKE` استفاده کنید؛  
به عنوان مثال فرض کنید کاربر `readonly_user` دسترسی SELECT به جداولی در اسکیمای public دارد و شما می‌خواهید این دسترسی را از او سلب کنید.  
برای این کار، می‌توانید مانند قطعه کد زیر، عمل کنید:

```bash
REVOKE SELECT ON ALL TABLES IN SCHEMA public FROM readonly_user;
```

البته اگر بخواهید دسترسی‌های خاص به جداول مشخصی را از این کاربر، حذف کنید؛ می‌توانید مشابه دستور زیر، عمل کنید:  

```bash
REVOKE SELECT, INSERT ON TABLE public.<table_name> FROM readonly_user;
```

برای حذف دسترسی کاربر به یک دیتابیس نیز، می‌توانید از دستور زیر استفاده کنید:

```bash
REVOKE CONNECT ON DATABASE <database_name> FROM readonly_user;
```

برای حذف دسترسی کاربر به یک اسکیمای خاص هم می‌توانید مشابه دستور زیر، رفتار کنید:

```bash
REVOKE USAGE ON SCHEMA public FROM readonly_user;
```

## حذف یک کاربر
اگر بخواهید کاربری را به طور کامل حذف کنید، باید ابتدا اطمینان حاصل کنید که دسترسی‌های او حذف شده است. سپس می‌توانید کاربر را با استفاده از دستور `DROP ROLE` حذف کنید.  
برای حذف کاربر می‌توانید مشابه دستور زیر، عمل کنید:  

```bash
DROP ROLE readonly_user;
```

## all links

[All links of docs](https://docs.liara.ir/all-links-llms.txt)
