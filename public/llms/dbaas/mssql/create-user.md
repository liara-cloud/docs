Original link: https://docs.liara.ir/dbaas/mssql/create-user/

# ایجاد و مدیریت کاربر جدید در دیتابیس MSSQL

وقتی که شما یک دیتابیس MSSQL جدید در لیارا، ایجاد می‌کنید؛ به صورت خودکار یک کاربر به نام sa همراه با آن ایجاد می‌شود که همان دسترسی پیش‌فرض است.  
دسترسی پیش‌فرض یا کاربر `sa` در MSSQL، یک اکانت مدیریتی با بیشترین سطح دسترسی است. این کاربر معادل administrator در سیستم‌های عامل مختلف است و می‌تواند تمام عملیات‌های مدیریتی و اجرایی در پایگاه داده را انجام دهد.

شما می‌توانید با استفاده از ابزارهای مختلفی نظیر SQLCMD کاربران جدید با دسترسی‌های جدید  
در دیتابیس خود ایجاد کنید؛ در ادامه به نحوه ساخت کاربران جدید با دسترسی‌های مختلف در دیتابیس، پرداخته شده است.

برای ساخت کاربر جدید در دیتابیس، در ابتدا باید [ابزار SQLCMD](https://docs.liara.ir/dbaas/mssql/how-tos/connect-via-cli/sqlcmd) را بر روی سیستم (یا سرور خود)، نصب کنید؛ در ادامه، بایستی با استفاده از اطلاعات موجود در بخش **نحوه اتصال** دیتابیس‌تان در لیارا و با استفاده از دستور زیر، در ترمینال، به دیتابیس، با کاربر sa، متصل شوید:  

```bash
sqlcmd -S <host_name>,-U<user_name> -P<password>
```

پس از اتصال موفق، می‌توانید با استفاده از دستورات تعریف شده در ادامه، کاربران مد نظر خود را، ایجاد کنید.

## ساخت کاربر با دسترسی Read-Only
برای ایجاد کاربر جدید که تنها اجازه خواندن اطلاعات (READ) از دیتابیس را دارد و می‌تواند از آن بکاپ بگیرد،  
می‌توانید از قطعه کد زیر استفاده کنید:

```SQL
-- connect to DB
USE master;
GO

-- Create login for new user
CREATE LOGIN ReadOnlyUser
WITH PASSWORD = 'StrongPassword123';
GO

-- Select specific database
USE <database_name>; -- eg: USE master; 
GO

-- Create user based on created login
CREATE USER ReadOnlyUser
FOR LOGIN ReadOnlyUser;
GO

-- Change user-role to read-only
ALTER ROLE db_datareader ADD MEMBER ReadOnlyUser;
GO

-- give access to take backups
GRANT BACKUP DATABASE TO BackupUser;
GRANT BACKUP LOG TO BackupUser;
GO
```

دستورات فوق، یک کاربر با نام `ReadOnlyUser` و رمزعبور `StrongPassword123` برای دیتابیس master (یا دیتابیس انتخابی) با دسترسی readonly، ایجاد می‌کند.

## ساخت کاربر با دسترسی محدود به برخی جداول
در صورتی که بخواهید کاربری ایجاد کنید که فقط به چند جدول مشخص دسترسی داشته باشد، می‌توانید مانند دستورات زیر عمل کنید:

```sql
-- connect to DB
USE master;
GO

-- Create a user for login
CREATE LOGIN LimitedUser
WITH PASSWORD = 'AnotherStrongPassword123';
GO

-- Use specific Database
USE <database_name>; -- eg: USE master;
GO

-- Create user for created login user
CREATE USER LimitedUser
FOR LOGIN LimitedUser;
GO

-- give access to created user
GRANT SELECT ON dbo.<table_name_1> TO LimitedUser;
GRANT SELECT ON dbo.<table_name_2> TO LimitedUser;
GO
```

دستورات فوق، یک کاربر به نام `LimitedUser` و رمزعبور `AnotherStrongPassword123` ایجاد می‌کند که می‌تواند  
در جداول \<table_name_1\> و \<table_name_2\> در یک دیتابیس مشخص، عملیات `SELECT` را، انجام دهد.

## حذف یک کاربر
برای حذف یک کاربر در MSSQL، ابتدا باید هرگونه وابستگی (مثل عضویت در نقش‌ها) و دسترسی‌های کاربر را حذف کنید. سپس می‌توانید `USER` و `LOGIN` مربوطه را حذف کنید.

اگر کاربر در نقش‌های خاصی عضو است یا مجوزهایی برای جداول و اشیاء مختلف دارد، بهتر است ابتدا آنها را حذف کنید. برای حذف نقش‌ها و دسترسی‌ها، می‌توانید مانند قطعه کد زیر، عمل کنید:

```sql
-- use the database
USE <database_name>; -- eg: USE master;;
GO
-- drop all roles
ALTER ROLE <role_name> DROP MEMBER <user_name>; -- eg: ALTER ROLE db_datareader DROP MEMBER readOnlyUser;
GO

-- revoke all specific access
REVOKE SELECT, INSERT, UPDATE, DELETE ON dbo.<table_name> FROM <user_name>;
GO
```

بعد از حذف دسترسی‌ها، می‌توانید کاربر را با استفاده از قطعه کد زیر، از دیتابیس حذف کنید:

```sql
-- use specific db
USE <database_name>; -- eg: USE master;
GO

DROP USER <user_name>;
GO
```

در نهایت و پس از حذف کاربر، می‌توانید LOGIN کاربر را نیز با استفاده از قطعه کد زیر، حذف کنید:

```sql
-- use DATABASE
UUSE master;
GO

DROP LOGIN <user_name>;
GO
```

> همچنین بخوانید: [مستندات رسمی ایجاد کاربر در SQL SERVER](https://learn.microsoft.com/en-us/sql/relational-databases/security/authentication-access/create-a-database-user?view=sql-server-ver16)

## all links

[All links of docs](https://docs.liara.ir/all-links-llms.txt)
