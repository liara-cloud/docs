Original link: https://docs.liara.ir/dbaas/mariadb/how-tos/connect-via-platform/go/

# اتصال به دیتابیس MariaDB در برنامه‌های go

برای اتصال به دیتابیس MariaDB در برنامه‌های go، در ابتدا باید ماژول‌های مربوط به آن‌را با اجرای دستورات زیر، نصب کنید:

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

## all links

[All links of docs](https://docs.liara.ir/all-links-llms.txt)
