Original link: https://docs.liara.ir/dbaas/mongodb/create-user/

# ایجاد و مدیریت کاربر جدید در دیتابیس MongoDB

وقتی که شما یک دیتابیس MongoDB جدید در لیارا، ایجاد می‌کنید؛ به صورت خودکار یک کاربر به نام root همراه با آن ایجاد می‌شود که همان دسترسی پیش‌فرض است.  
دسترسی پیش‌فرض یا کاربر `root` در MongoDB، یک اکانت مدیریتی با بیشترین سطح دسترسی است. این کاربر معادل administrator در سیستم‌های عامل مختلف است و می‌تواند تمام عملیات‌های مدیریتی و اجرایی در پایگاه داده را انجام دهد.

شما می‌توانید با استفاده از ابزارهای مختلفی نظیر mongosh کاربران جدید با دسترسی‌های جدید  
در دیتابیس خود ایجاد کنید؛ در ادامه به نحوه ساخت کاربران جدید با دسترسی‌های مختلف در دیتابیس، پرداخته شده است.

برای ساخت کاربر جدید در دیتابیس، در ابتدا باید [ابزار mongosh](https://docs.liara.ir/dbaas/mongodb/how-tos/connect-via-cli/mongosh/) را بر روی سیستم (یا سرور خود)، نصب کنید؛ در ادامه، بایستی با استفاده از اطلاعات موجود در بخش **نحوه اتصال** دیتابیس‌تان در لیارا و با استفاده از دستور زیر، در ترمینال، به دیتابیس، با کاربر root، متصل شوید:  

```bash
mongo -u <user_name> --port --host <host_name> -p <password> --authenticationDatabase admin
```

پس از اتصال موفق، می‌توانید با استفاده از دستورات تعریف شده در ادامه، کاربران مد نظر خود را، ایجاد کنید.

## ساخت کاربر با دسترسی Read-Only

برای ایجاد کاربر جدید که تنها اجازه خواندن اطلاعات (READ) از دیتابیس را دارد،  
می‌توانید از قطعه کد زیر استفاده کنید:

```mongodb
use admin;
db.createUser({
  user: "readonlyUser",
  pwd: "readonlyPassword",
  roles: [
    { role: "read", db: "<database_name>" }
  ]
});
```

دستورات فوق، یک کاربر با نام `readonlyUser` و رمزعبور `readonlyPassword` برای دیتابیس \<database_name\> (یا دیتابیس انتخابی) با دسترسی readonly، ایجاد می‌کند.

## ساخت کاربر با دسترسی محدود به برخی جداول

در صورتی که بخواهید کاربری ایجاد کنید که فقط به چند جدول مشخص دسترسی داشته باشد، می‌توانید مانند دستورات زیر عمل کنید:

```mongodb
use admin;
db.createUser({
  user: "limitedUser",
  pwd: "limitedPassword",
  roles: [
    {
      role: "readWrite",
      db: "<database_name>",
      collection: "<collection_name>"
    }
  ]
});
```

دستورات فوق، یک کاربر به نام `limitedUser` و رمزعبور `limitedPassword` ایجاد می‌کند که می‌تواند  
به \<collection_name\> در \<database_name\> دسترسی داشته باشد.

## ساخت کاربر برای تهیه فایل پشتیبان

برای ایجاد کاربر جدید که تنها اجازه تهیه فایل پشتیبان از دیتابیس را دارد،  
می‌توانید مانند قطعه کد زیر عمل کنید:

```mongodb
use admin;
db.createUser({
  user: "backupUser",
  pwd: "backupPassword",
  roles: [
    { role: "backup", db: "admin" }
  ]
});
```

دستورات فوق، یک کاربر با نام `backupUser` و رمزعبور `backupPassword` با دسترسی تهیه فایل پشتیبان، ایجاد می‌کند.

## حذف یک کاربر

برای حذف یک کاربر با تمام دسترسی‌ها در دیتابیس، می‌توانید مشابه قطعه کد زیر، عمل کنید:

```mongodb
use <database_name>;
db.dropUser("<user_name>");
```

دستور فوق، کاربر \<user_name\> تعریف شده برای دیتابیس \<database_name\> را، حذف می‌کند.  
پس از اجرای دستور فوق، می‌توانید با اجرای دستور زیر، لیست کاربران موجود را بررسی کنید:  

```mongodb
db.getUsers();
```

> همچنین بخوانید: [مستندات رسمی ایجاد کاربر در MongoDB](https://www.mongodb.com/docs/manual/reference/method/db.createUser/)

## all links

[All links of docs](https://docs.liara.ir/all-links-llms.txt)
