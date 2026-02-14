Original link: https://docs.liara.ir/paas/go/how-tos/connect-to-db/postgresql/

# اتصال به دیتابیس PostgreSQL در برنامه‌های Go

برای اتصال به دیتابیس PostgreSQL در برنامه‌های Go، در ابتدا باید ماژول مربوط به آن‌را با اجرای دستور زیر، نصب کنید:

```bash
go get github.com/lib/pq
```

سپس، باید دستور زیر را اجرا کنید تا فایل `go.mod` اصلاح شود: 

```bash
go mod tidy
```

در ادامه، بایستی طبق مستندات [نحوه تنظیم متغیرهای محیطی](https://docs.liara.ir/paas/details/envs)، متغیر محیطی مربوط به دیتابیس را، به برنامه اضافه کنید؛ به عنوان مثال: 

```bash
DB_URI=postgresql://root:dXzvNAzIL8OOxjFOC4oF12Lz@fitz-roy.liara.cloud:31566/postgres?sslmode=disable
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

	_ "github.com/lib/pq"
)

var db *sql.DB

func main() {

	// Get the DB_URI from environment variables
	dbURI := os.Getenv("DB_URI")
	if dbURI == "" {
		log.Fatal("DB_URI environment variable is not set")
	}

	// Open the database connection with the PostgreSQL URI
	var err error
	db, err = sql.Open("postgres", dbURI)
	if err != nil {
		log.Fatalf("Failed to open database connection: %v", err)
	}

	// Set connection pool parameters
	db.SetMaxOpenConns(10)     // Maximum number of open connections
	db.SetMaxIdleConns(5)      // Maximum number of idle connections
	db.SetConnMaxIdleTime(0)   // No timeout for idle connections

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

در قطعه کد فوق، برای اتصال به دیتابیس، از قابلیت Connection Pooling استفاده شده است. 

> همچنین بخوانید: [آشنایی با قابلیت Connection Pooling](https://docs.liara.ir/dbaas/details/connection-pool)

## all links

[All links of docs](https://docs.liara.ir/all-links-llms.txt)
