Original link: https://docs.liara.ir/dbaas/clickhouse/create-user/

# ایجاد و مدیریت کاربر جدید در دیتابیس ClickHouse

وقتی که شما یک دیتابیس ClickHouse جدید در لیارا، ایجاد می‌کنید؛ به صورت خودکار یک کاربر به نام root همراه با آن ایجاد می‌شود که همان دسترسی پیش‌فرض است.
دسترسی پیش‌فرض یا کاربر `root` در ClickHouse، یک اکانت مدیریتی با بیشترین سطح دسترسی است. این کاربر معادل administrator در سیستم‌های عامل مختلف است و می‌تواند تمام عملیات‌های مدیریتی و اجرایی در پایگاه داده را انجام دهد.

شما می‌توانید با استفاده از ابزار cURL، کاربران جدید با دسترسی‌های جدید 
در دیتابیس خود ایجاد کنید؛ در ادامه به نحوه ساخت کاربران جدید با دسترسی‌های مختلف در دیتابیس، پرداخته شده است.

## ساخت کاربر ادمین
برای ساخت کاربر جدید با دسترسی ادمین، می‌توانید از دستور زیر استفاده کنید (نام کاربر جدید، `<admin_username>` است): 

```bash
curl --user <root_user>:<root_password> \\
"<host>:<port>/" \\
--data-binary "CREATE USER <admin_username> IDENTIFIED WITH sha256_password BY '<admin_password>'"
```

در ادامه، می‌توانید با اجرای دستور زیر، به کاربر جدید، تمامی دسترسی‌ها را اعطا کنید:

```bash
curl --user <root_user>:<root_password> \\
"<host>:<port>/" \\
--data-binary "GRANT ALL ON *.* TO <admin_username> WITH GRANT OPTION"
```

## ساخت کاربر با دسترسی Read-Only
برای ایجاد کاربر جدید که تنها اجازه خواندن اطلاعات (READ) از دیتابیس را دارد، می‌توانید در ابتدا، دستور زیر را اجرا کرده:

```bash
curl --user <root_user>:<root_password> \\
"<host>:<port>/" \\
--data-binary "CREATE USER <readonly_username> IDENTIFIED WITH sha256_password BY '<readonly_password>' SETTINGS readonly = 1"
```

و در ادامه، دستور زیر را اجرا کنید: 

```bash
curl --user <root_user>:<root_password> \\
"<host>:<port>/" \\
--data-binary "GRANT SELECT ON *.* TO <readonly_username>"
```

## all links

[All links of docs](https://docs.liara.ir/all-links-llms.txt)
