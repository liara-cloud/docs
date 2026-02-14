Original link: https://docs.liara.ir/paas/php/how-tos/connect-to-db/sqlite/

# اتصال به دیتابیس SQLite در برنامه‌های PHP

برای اتصال موفق به دیتابیس SQLite در برنامه‌های PHP کافیست تا گام‌های زیر را طی کنید:

۱. ایجاد دایرکتوری و فایل‌های مربوط به تنظیمات دیتابیس  
در ابتدا در مسیر اصلی پروژه، یک دایرکتوری به نام `dbconfig` بسازید؛ در ادامه درون این دایرکتوری، یک فایل به نام `Config.php` ایجاد کنید و قطعه کد زیر را درون آن، قرار دهید:

```php
<?php
namespace myDB;

class Config {
    const PATH_TO_SQLITE_FILE = 'db/phpsqlite.db';
}
```

سپس، یک فایل دیگر درون این دایرکتوری به نام `SQLiteConnection.php` ایجاد کنید و قطعه کد زیر را در آن، قرار دهید:

```php
<?php
namespace myDB;

class SQLiteConnection {

    private $pdo;

    public function connect() {
        if ($this->pdo == null) {
            $this->pdo = new \\PDO("sqlite:" . Config::PATH_TO_SQLITE_FILE);
        }
        return $this->pdo;
    }
}
```

۲. ایجاد فایل `composer.json`  

در مسیر اصلی پروژه، یک فایل به نام `composer.json` ایجاد کنید و محتوای زیر را درونش قرار دهید:

```json
{
    "autoload": {
        "psr-4": {
            "myDB\\": "dbconfig/"
        }
    }
}
```

۳. ایجاد دایرکتوری برای ذخیره دیتابیس  

در مسیر اصلی پروژه، یک دایرکتوری دیگر به نام `db` ایجاد کنید. این همان دایرکتوری است که فایل مربوط به دیتابیس (فایل `db.`)، در آن قرار می‌گیرد.

۴. درج کد برای استفاده از دیتابیس در برنامه  

در مسیر اصلی پروژه، یک فایل به نام `index.php` ایجاد کنید و یا اگر از قبل وجود دارد، فقط کافیست تا قطعه کد زیر را درون آن قرار دهید:

```php
<?php

require 'vendor/autoload.php';

use myDB\SQLiteConnection;

$pdo = (new SQLiteConnection())->connect();
if ($pdo != null)
    echo 'Connected to the SQLite database successfully!';
else
    echo 'Could not connect to the SQLite database!';
```

۵. ایجاد دیسک برای دیتابیس  
[طبق مستندات ایجاد دیسک](https://docs.liara.ir/paas/disks/create)،  در بخش **دیسک‌ها** برنامه خود در لیارا، یک دیسک جدید با نام `database` و اندازه مدنظرتان ایجاد کنید.

۶. ایجاد و پیکربندی فایل liara.json  
در مسیر اصلی پروژه، یک فایل به نام `liara.json` ایجاد کنید و قطعه کد زیر را، درون آن، قرار دهید:

```json
{
    "php": {
        "version": "8.2"
      },
    "disks": [
        {
            "name": "database",
            "mountTo": "/var/www/html/db"
        }
    ]
}
```

۷. استقرار برنامه در لیارا  
برنامه خود را با استفاده از دستور `liara deploy` در لیارا مستقر کنید.

البته در نظر داشته باشید که استفاده از دیتابیس SQLite بیشتر برای وب‌سایت‌های کوچک با پردازش‌های کم مناسب است و  
در مقیاس بالا، بهتر است که از دیتابیس‌های دیگری استفاده کنید.

## استفاده از Connection Pooling  
در نظر داشته باشید که SQLite از قابلیت Connection Pooling پشتیبانی نمی‌کند؛ چرا که SQLite یک دیتابیس فایل‌محور است و نیازی به connection pooling ندارد. هر اتصال به فایل دیتابیس مستقل از دیگر اتصالات است و SQLite به طور خودکار این اتصالات را، مدیریت می‌کند.

## all links

[All links of docs](https://docs.liara.ir/all-links-llms.txt)
