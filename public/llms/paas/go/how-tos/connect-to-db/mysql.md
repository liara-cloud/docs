Original link: https://docs.liara.ir/paas/go/how-tos/connect-to-db/mysql/

# اتصال به دیتابیس MySQL/MariaDB در برنامه‌های Go

برای اتصال به دیتابیس MariaDB یا MySQL در برنامه‌های Go، در ابتدا باید ماژول مربوط به آن‌را با اجرای دستور زیر، نصب کنید:

```bash
go get -u github.com/go-sql-driver/mysql
```

سپس، باید دستور زیر را اجرا کنید تا فایل `go.mod` اصلاح شود: 

```bash
go mod tidy
```

در ادامه، بایستی طبق مستندات [نحوه تنظیم متغیرهای محیطی](https://docs.liara.ir/paas/details/envs)، متغیر محیطی مربوط به دیتابیس را، به برنامه اضافه کنید؛ به عنوان مثال: 

```bash
DB_URI=mysql://root:MaNx6oIOF5rCwwK6e9B8HItk@fitz-roy.liara.cloud:34545/loving_driscoll
```

در نهایت، می‌توانید مشابه قطعه کد زیر، به دیتابیس‌تان متصل شده و از آن، استفاده کنید: 

```go
package main

import (
	"database/sql"
	"fmt"
	"log"
	"net/http"
	"net/url"
	"os"

	_ "github.com/go-sql-driver/mysql"
)

var db *sql.DB

func main() {
	
	// Get the DB_URI from environment variables
	dbURI := os.Getenv("DB_URI")
	if dbURI == "" {
		log.Fatal("DB_URI environment variable is not set")
	}

	// Parse the URI into a format suitable for the MySQL driver
	dataSourceName, err := parseDBURI(dbURI)
	if err != nil {
		log.Fatalf("Failed to parse database URI: %v", err)
	}

	// Open the database connection with pooling
	db, err = sql.Open("mysql", dataSourceName)
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

// parseDBURI parses the database URI and returns a DSN for the MySQL driver.
func parseDBURI(uri string) (string, error) {
	parsed, err := url.Parse(uri)
	if err != nil {
		return "", fmt.Errorf("failed to parse URI: %w", err)
	}

	if parsed.Scheme != "mysql" {
		return "", fmt.Errorf("unsupported scheme: %s", parsed.Scheme)
	}

	user := parsed.User.Username()
	password, _ := parsed.User.Password()
	host := parsed.Hostname()
	port := parsed.Port()
	dbname := parsed.Path[1:] // Remove leading "/"

	return fmt.Sprintf("%s:%s@tcp(%s:%s)/%s", user, password, host, port, dbname), nil
}
```

در قطعه کد فوق، برای اتصال به دیتابیس، از قابلیت Connection Pooling استفاده شده است. 

> همچنین بخوانید: [آشنایی با قابلیت Connection Pooling](https://docs.liara.ir/dbaas/details/connection-pool)

## all links

[All links of docs](https://docs.liara.ir/all-links-llms.txt)
