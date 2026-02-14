Original link: https://docs.liara.ir/dbaas/mongodb/how-tos/connect-via-platform/go/

# اتصال به دیتابیس PostgreSQL در برنامه‌های go

برای اتصال به دیتابیس PostgreSQL در برنامه‌های go، در ابتدا باید ماژول‌های مربوط به آن‌را با اجرای دستورات زیر، نصب کنید:

```bash
go get -u gorm.io/gorm
go get -u gorm.io/driver/postgres
go get github.com/joho/godotenv
```

پس از آن، کافیست تا  
اطلاعات مربوط به دیتابیس خود را  
به متغیرهای محیطی برنامه خود، اضافه کنید؛ به عنوان مثال:

```txt
DB_USER=root
DB_PASSWORD=password
DB_NAME=database_name
DB_HOST=host
DB_PORT=port
DB_SSLMODE=disable
```

در نهایت، می‌توانید با استفاده از قطعه کد زیر، به دیتابیس خود، متصل شوید:

```go
package main

import (
    "fmt"
    "log"
    "os"

    "github.com/joho/godotenv"
    "gorm.io/driver/postgres"
    "gorm.io/gorm"
)

func main() {
    err := godotenv.Load()
    if err != nil {
        log.Fatalf("Error loading .env file")
    }

    user := os.Getenv("DB_USER")
    password := os.Getenv("DB_PASSWORD")
    dbName := os.Getenv("DB_NAME")
    host := os.Getenv("DB_HOST")
    port := os.Getenv("DB_PORT")
    sslmode := os.Getenv("DB_SSLMODE")

    dsn := fmt.Sprintf("user=%s password=%s dbname=%s host=%s port=%s sslmode=%s",
        user, password, dbName, host, port, sslmode)

    db, err := gorm.Open(postgres.Open(dsn), &gorm.Config{})
    if err != nil {
        log.Fatal(err.Error())
    }

    sqlDB, err := db.DB()
    if err != nil {
        log.Fatal(err.Error())
    }
    sqlDB.SetMaxIdleConns(10)
    sqlDB.SetMaxOpenConns(100)

    log.Println("Connected to the database")
}
```

## استفاده از Connection Pooling

مفهوم Connection pooling به معنای استفاده از یک مجموعه اتصالات از پیش ساخته شده برای اتصال به پایگاه داده است. این تکنیک باعث می‌شود به جای ایجاد و بستن مکرر اتصالات، از اتصالات موجود در مجموعه استفاده شود که کارایی را افزایش می‌دهد.  
> همچنین بخوانید: [آشنایی بیشتر با قابلیت Connection Pooling](https://docs.liara.ir/dbaas/details/connection-pool)

برای استفاده از قابلیت connection pooling در دیتابیس PostgreSQL، فقط کافیست تا با اجرای دستور زیر، ماژول موردنیاز را نصب کنید:

```bash
pip install django-db-connection-pool[mysql]
```

سپس، در فایل `settings.py` در بخش `DATABASES`، فیلد مربوط به `ENGINE` را مانند شکل زیر تغییر دهید:

```python
# other codes ...
import os
DATABASES = {
    'default': {
        'ENGINE':   'dj_db_conn_pool.backends.mysql', 
        'NAME':     os.getenv("MYSQL_DB_NAME"), 
        'USER':     os.getenv("MYSQL_DB_USER"),
        'PASSWORD': os.getenv("MYSQL_DB_PASS"),
        'HOST':     os.getenv("MYSQL_DB_HOST"),
        'PORT':     os.getenv("MYSQL_DB_PORT"),
    },
}
# other codes ...
```

همچنین، می‌توانید تنظیمات مربوط به Connection Pooling را در فیلدی به نام `POOL_OPTIONS`مانند قطعه کد زیر، بر روی دیتابیس خود، اعمال کنید:

```python
# other codes ...
import os
DATABASES = {
    'default': {
        'ENGINE':   'dj_db_conn_pool.backends.mysql', 
        'NAME':     os.getenv("MYSQL_DB_NAME"), 
        'USER':     os.getenv("MYSQL_DB_USER"),
        'PASSWORD': os.getenv("MYSQL_DB_PASS"),
        'HOST':     os.getenv("MYSQL_DB_HOST"),
        'PORT':     os.getenv("MYSQL_DB_PORT"),
        'POOL_OPTIONS': {
            'POOL_SIZE': 10,
            'MAX_OVERFLOW': 10,
            'RECYCLE': 24 * 60 * 60
        }
    },
}
# other codes ...
```

در نهایت، کافیست دستور زیر را اجرا کنید تا فایل `requirements.txt`، به‌روز شود و نام ماژول مورد نیاز، در آن، قرار بگیرد:

```python
pip freeze > requirements.txt
```

اکنون می‌توانید مجدداً برنامه‌تان را در لیارا مستقر کرده و در صفحه `mysql/` وضعیت اتصال به دیتابیس خود را بررسی کنید.

## all links

[All links of docs](https://docs.liara.ir/all-links-llms.txt)
