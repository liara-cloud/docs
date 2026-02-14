Original link: https://docs.liara.ir/dbaas/mssql/how-tos/connect-via-platform/go/

# اتصال به دیتابیس MSSQL در برنامه‌های go

برای اتصال به دیتابیس MSSQL در برنامه‌های go، در ابتدا باید ماژول‌های مربوط به آن‌را با اجرای دستورات زیر، نصب کنید:

```bash
go get -u gorm.io/gorm
go get -u gorm.io/driver/sqlserver
go get github.com/joho/godotenv
```

پس از آن، کافیست تا  
اطلاعات مربوط به دیتابیس خود را  
به متغیرهای محیطی برنامه خود، اضافه کنید؛ به عنوان مثال:

```txt
DB_USER=sa
DB_PASSWORD=password
DB_HOST=host
DB_PORT=port
DB_NAME=mydatabase
```

در نهایت، می‌توانید با استفاده از قطعه کد زیر، به دیتابیس خود، متصل شوید:

```go
package main

import (
    "fmt"
    "log"
    "os"

    "github.com/joho/godotenv"
    "gorm.io/driver/sqlserver"
    "gorm.io/gorm"
)

func main() {
    // Load environment variables from .env file
    err := godotenv.Load()
    if err != nil {
        log.Fatalf("Error loading .env file")
    }

    // Get environment variables
    user := os.Getenv("DB_USER")
    password := os.Getenv("DB_PASSWORD")
    host := os.Getenv("DB_HOST")
    port := os.Getenv("DB_PORT")
    dbName := os.Getenv("DB_NAME")

    // Form DSN (Data Source Name)
    dsn := fmt.Sprintf("sqlserver://%s:%s@%s:%s?connection+timeout=30", user, password, host, port)

    // Connect to SQL Server
    db, err := gorm.Open(sqlserver.Open(dsn), &gorm.Config{})
    if err != nil {
        log.Fatal(err.Error())
    }

    // Maximum Idle Connections
    sqlDB, err := db.DB()
    if err != nil {
        log.Fatal(err.Error())
    }
    sqlDB.SetMaxIdleConns(10)
    sqlDB.SetMaxOpenConns(100)

    log.Println("Connected to the database")

    // Create Database Using Models
    err = db.Exec(fmt.Sprintf("CREATE DATABASE %s", dbName)).Error
    if err != nil {
        log.Fatal(err.Error())
    }

    log.Printf("Database '%s' created successfully", dbName)
}
```

## all links

[All links of docs](https://docs.liara.ir/all-links-llms.txt)
