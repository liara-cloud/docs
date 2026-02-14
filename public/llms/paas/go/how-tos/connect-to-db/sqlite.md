Original link: https://docs.liara.ir/paas/go/how-tos/connect-to-db/sqlite/

# اتصال به دیتابیس SQLite در برنامه‌های Go

برای اتصال به دیتابیس SQLite در برنامه‌های Go،  
تنها کافیست تا  
طبق مستندات [ساخت دیسک](https://docs.liara.ir/paas/disks/create)، یک دیسک برای ذخیره دیتابیس خود بسازید؛ در ادامه، می‌توانید طبق مستندات [تعریف مسیر برای دیسک](https://docs.liara.ir/paas/disks/route)، دیسک‌ خود را به دایرکتوری دیتابیس، مشابه قطعه کد زیر در فایل `liara.josn` یا در استقرار با کنسول، متصل کنید:

```json
{
    "disks": [
        {
            "name": "database",
            "mountTo": "database"
        }
    ]
}
```

همچنین، طبق مستندات مربوط به [قابلیت Cgo](https://docs.liara.ir/paas/go/how-tos/use-cgo)، این قابلیت را بایستی با قرار دادن قطعه کد زیر در فایل `liara.json` یا اعمال در کنسول در حین استقرار، در پروژه خود، فعال کنید:

```json
{
  "go" : {
    "cgoEnabled": "true",
   }
}
```

در ادامه، بایستی با اجرای دستور زیر، ماژول مربوط به اتصال به دیتابیس را نصب کنید:

```bash
go get github.com/mattn/go-sqlite3
```

در نهایت، می‌توانید مشابه قطعه کد زیر، به دیتابیس‌تان متصل شده و از آن، استفاده کنید:

```go
package main

import (
	"database/sql"
	"fmt"
	"log"
	"net/http"
	"os"

	_ "github.com/mattn/go-sqlite3"
)

var db *sql.DB

func main() {

	// Ensure the database directory exists
	if err := os.MkdirAll("./database", os.ModePerm); err != nil {
		log.Fatalf("Failed to create database directory: %v", err)
	}

	// Open the database connection with SQLite URI
	var err error
	db, err = sql.Open("sqlite3", "sqlite3:./database/mydb.db")
	if err != nil {
		log.Fatalf("Failed to open database connection: %v", err)
	}

	// Set connection pool parameters (SQLite generally uses a single connection, but we can still configure)
	db.SetMaxOpenConns(1)     // SQLite is usually a single-threaded database
	db.SetMaxIdleConns(1)     // Only one idle connection
	db.SetConnMaxIdleTime(0)  // No timeout for idle connections

	// Verify connection
	if err := db.Ping(); err != nil {
		log.Fatalf("Failed to ping database: %v", err)
	}
	log.Println("Connected to database successfully!")

	// Set up HTTP server
	http.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
		if err := db.Ping(); err != nil {
			fmt.Fprintf(w, "Database connection failed: %v", err)
		} else {
			fmt.Fprintln(w, "Database connection successful!")
		}
	})

	log.Println("Server is running on http://localhost:8080")
	if err := http.ListenAndServe(":8080", nil); err != nil {
		log.Fatalf("HTTP server failed: %v", err)
	}
}
```

اکنون می‌توانید برنامه‌تان را در لیارا مستقر کرده و در صفحه `/` وضعیت اتصال به دیتابیس خود را بررسی کنید.

## all links

[All links of docs](https://docs.liara.ir/all-links-llms.txt)
