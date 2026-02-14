Original link: https://docs.liara.ir/dbaas/mysql/how-tos/connect-via-platform/go/

# اتصال به دیتابیس MySQL در برنامه‌های go

برای اتصال به دیتابیس MySQL در برنامه‌های go، در ابتدا باید ماژول‌های مربوط به آن‌را با اجرای دستورات زیر، نصب کنید:

```bash
go get -u github.com/go-sql-driver/mysql
go get github.com/joho/godotenv
```

پس از آن، کافیست تا  
اطلاعات مربوط به دیتابیس خود را  
به متغیرهای محیطی برنامه خود، اضافه کنید؛ به عنوان مثال:

```bash
DB_HOST=annapurna.liara.cloud
DB_PORT=32933
DB_NAME=gallant_ramanujan
DB_USER=root
DB_PASSWORD=UIhfscObpnZhhHG4bo6BOyvF
```

در نهایت، می‌توانید با استفاده از قطعه کد زیر، به دیتابیس خود، متصل شوید:

```go
package main

import (
    "database/sql"
    "fmt"
    "log"
    "os"

    "github.com/joho/godotenv"
    _ "github.com/go-sql-driver/mysql"
)

func main() {
    // Load environment variables from .env file
    err := godotenv.Load()
    if err != nil {
        log.Fatalf("Error loading .env file")
    }

    // Get database connection details from environment variables
    dbUser := os.Getenv("DB_USER")
    dbPassword := os.Getenv("DB_PASSWORD")
    dbHost := os.Getenv("DB_HOST")
    dbPort := os.Getenv("DB_PORT")
    dbName := os.Getenv("DB_NAME")

    // Create the data source name (DSN)
    dsn := fmt.Sprintf("%s:%s@tcp(%s:%s)/%s", dbUser, dbPassword, dbHost, dbPort, dbName)

    // Connect to MySQL
    db, err := sql.Open("mysql", dsn)
    if err != nil {
        panic(err.Error())
    }
    defer db.Close()

    // Check if connection is ok
    err = db.Ping()
    if err != nil {
        panic(err.Error())
    }

    fmt.Println("Connected to the database")
}
```

## استفاده از Connection Pooling

مفهوم Connection pooling به معنای استفاده از یک مجموعه اتصالات از پیش ساخته شده برای اتصال به پایگاه داده است. این تکنیک باعث می‌شود به جای ایجاد و بستن مکرر اتصالات، از اتصالات موجود در مجموعه استفاده شود که کارایی را افزایش می‌دهد.  
> همچنین بخوانید: [آشنایی بیشتر با قابلیت Connection Pooling](https://docs.liara.ir/dbaas/details/connection-pool)

برای استفاده از قابلیت connection pooling در دیتابیس MySQL، فقط کافیست تا با اجرای دستور زیر، ماژول موردنیاز را نصب کنید:

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
