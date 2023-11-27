import Link from "next/link";
import Head from "next/head";
import Highlight from "react-highlight";
import Notice from "../../../components/Notice";
import Layout from "../../../components/Layout";
import PlatformIcon from "../../../components/PlatformIcon";

export default () => (
  <Layout>
    <Head>
      <title>مستندات اتصال به دیتابیس‌ها در برنامه‌های Golang - لیارا</title>
    </Head>

    <div className="page-head">
      <PlatformIcon platform="go" />
      <div className="page-title">
        <h1>پلتفرم Golang</h1>
        <span className="page-description">(Golang Platform)</span>
      </div>
    </div>

    <h3>اتصال به دیتابیس‌ها</h3>
    <h4>فهرست عناوین:</h4>
    <ul className="mt-0">
      <li>
        <a href="#mysql">اتصال به دیتابیس MySQL و MariaDB</a>
      </li>
      <li>
        <a href="#postgres">اتصال به دیتابیس PostgreSQL</a>
      </li>
      <li>
        <a href="#sqlserver">اتصال به دیتابیس SQL Server</a>
      </li>
      <li>
        <a href="#redis">اتصال به دیتابیس Redis</a>
      </li>
      <li>
        <a href="#elastic">اتصال به دیتابیس Elastichsearch</a>
      </li>
    </ul>

    <h3 id="mysql">اتصال به دیتابیس MySQL و MariaDB</h3>
    <p>
      در ابتدا باید پکیج دیتابیس MySQL را نصب کنید. برای این کار دستور{" "}
      <span className="code">go get -u github.com/go-sql-driver/mysql</span> را
      اجرا کنید‍. سپس برای اتصال به دیتابیس MySQL یا MariaDB کد زیر را در برنامه
      خود قرار دهید:
    </p>
    <Highlight className="go">
      {`package main

import (
    "database/sql"
    "fmt"
    _ "github.com/go-sql-driver/mysql"
)

func main() {
    // connect to mysql
    db, err := sql.Open("mysql", "root:password@tcp(host:port)/database_name")
    if err != nil {
        panic(err.Error())
    }
    defer db.Close()

    // check if connection is ok
    err = db.Ping()
    if err != nil {
        panic(err.Error())
    }

    fmt.Println("Connected to the database")
}`}
      <br />
    </Highlight>
    <Notice variant="info">
      هر کدام از مقادیر password و host و port و database_name موجود در دستور
      <span className="code">
        root:password@tcp(host:port)/database_name
      </span>{" "}
      را باید با توجه به اطلاعات دیتابیس‌تان تغییر دهید.
    </Notice>

    <h3 id="postgres">اتصال به دیتابیس PostgreSQL</h3>
    <p>
      برای اینکه بتوانید در برنامه golang خود به دیتابیس Postgres متصل شوید؛ در
      ابتدا باید پکیج‌های مورد نیاز را در برنامه خود نصب کنید؛ برای نصب پکیج‌ها
      کافیست که در مسیر اصلی برنامه، دستورات زیر را اجرا کنید:
    </p>

    <Highlight className="go">
      {`$ go get -u gorm.io/gorm
$ go get -u gorm.io/driver/postgres`}
    </Highlight>

    <p>
      پس از نصب پکیج‌ها و import کردن آن‌ها در برنامه Golang، می‌توانید به
      دیتابیس Postgres متصل شوید؛ قطعه کد زیر یک نمونه از اتصال به دیتابیس
      Postgres است که می‌توانید از آن استفاده کنید:
    </p>

    <Highlight className="go">
      {`package main

import (
	"gorm.io/driver/postgres"
	"gorm.io/gorm"
	"log"
)

func main() {
	// Connect to PostgreSQL
    dsn := "user=root password=password dbname=database_name host=host port=port sslmode=disable"
	db, err := gorm.Open(postgres.Open(dsn), &gorm.Config{})
	if err != nil {
		log.Fatal(err.Error())
	}

	// Maximum Connections Number
	sqlDB, err := db.DB()
	if err != nil {
		log.Fatal(err.Error())
	}
	sqlDB.SetMaxIdleConns(10)
	sqlDB.SetMaxOpenConns(100)

	log.Println("Connected to the database")
}
`}
    </Highlight>
    <Notice variant="info">
      هر کدام از متغیرهای password و dbname و host و port موجود در
      <span className="code">dsn</span> را باید با توجه به اطلاعات دیتابیس‌تان
      تغییر دهید.
    </Notice>

    <h3 id="sqlserver">اتصال به دیتابیس SQL Server</h3>
    <p>
      برای اینکه بتوانید در برنامه golang خود به دیتابیس SQL Server متصل شوید؛
      در ابتدا باید پکیج‌های مورد نیاز را در برنامه خود نصب کنید؛ برای نصب
      پکیج‌ها کافیست که در مسیر اصلی برنامه، دستورات زیر را اجرا کنید:
    </p>

    <Highlight className="go">
      {`$ go get -u gorm.io/gorm
$ go get -u gorm.io/driver/sqlserver
`}
    </Highlight>

    <p>
      پس از نصب پکیج‌ها و import کردن آن‌ها در برنامه Golang، می‌توانید به
      دیتابیس SQL Server متصل شوید؛ قطعه کد زیر یک نمونه از اتصال به دیتابیس SQL
      Server است که می‌توانید از آن استفاده کنید:
    </p>

    <Highlight className="go">
      {`package main

import (
    "gorm.io/driver/sqlserver"
	"gorm.io/gorm"
	"log"
)

func main() {
    // connect to SQL Server
	dsn := "sqlserver://sa:password@host:port?connection+timeout=30"
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
	err = db.Exec("CREATE DATABASE mydatabase").Error
	if err != nil {
		log.Fatal(err.Error())
	}

	log.Println("Database 'mydatabase' created successfully")
}`}
    </Highlight>

    <p>
      در قطعه کد بالا، پس از اتصال به دیتابیس SQL Server، برنامه یک دیتابیس به
      نام mydatabase ایجاد می‌کند. که می‌توانید متناسب با نیازهای خود، آن را
      تغییر دهید یا حذف کنید.
    </p>

    <Notice variant="info">
      هر کدام از مقادیر password و host و port و موجود در
      <span className="code">dsn</span> را باید با توجه به اطلاعات دیتابیس‌تان
      تغییر دهید.
    </Notice>

    <h3 id="redis">اتصال به دیتابیس Redis</h3>
    <p>
      در ابتدا باید پکیج دیتابیس Redis را نصب کنید. برای این کار دستور{" "}
      <span className="code">go get -u github.com/go-redis/redis/v8</span> را
      اجرا کنید‍. سپس برای اتصال به دیتابیس Redis می‌توانید از قطعه کد زیر
      استفاده کنید:
    </p>
    <Highlight className="go">
      {`package main

import (
    "context"
    "fmt"
    "github.com/go-redis/redis/v8"
)

func main() {
    // Connect to Redis
    client := redis.NewClient(&redis.Options{
        Addr:     "host:port", // host and port
        Password: "password", // password
        DB:       0,         // DB Number
    })

    // Check Connection
    pong, err := client.Ping(context.Background()).Result()
    if err != nil {
        fmt.Println("Error connecting to Redis:", err)
        return
    }

    fmt.Println("Connected to Redis:", pong)
}
`}
    </Highlight>
    <Notice variant="info">
      هر کدام از مقادیر فیلدهای Addr و Password و DB موجود در
      <span className="code">client</span> را باید با توجه به اطلاعات
      دیتابیس‌تان تغییر دهید.
    </Notice>

    <h3 id="elastic">اتصال به دیتابیس Elastichsearch</h3>
    <p>برای اتصال به دیتابیس Elastic می‌توانید از قطعه کد زیر استفاده کنید:</p>
    <Highlight className="go">
      {`package main

import (
	"encoding/base64"
	"fmt"
	"io"
	"net/http"
)

func main() {
	// Elasticsearch connection information
	url := "http://host:port/_cluster/health?pretty"
	username := "username"
	password := "password"

	// Creating an HTTP request
	req, err := http.NewRequest("GET", url, nil)
	if err != nil {
		fmt.Println("Error creating HTTP request:", err)
		return
	}

	// Adding authentication information to the request
	req.Header.Add("Authorization", "Basic "+basicAuth(username, password))

	// Sending the request to Elasticsearch
	client := http.DefaultClient
	res, err := client.Do(req)
	if err != nil {
		fmt.Println("Error sending HTTP request:", err)
		return
	}
	defer res.Body.Close()

	// Reading and printing the response
	body, err := io.ReadAll(res.Body)
	if err != nil {
		fmt.Println("Error reading response body:", err)
		return
	}

	fmt.Println(string(body))
}

// Function to create a Base64-encoded authentication string
func basicAuth(username, password string) string {
	auth := username + ":" + password
	return base64.StdEncoding.EncodeToString([]byte(auth))
}`}
    </Highlight>
    <Notice variant="info">
      در متغیر <span className="code">url</span> بایستی به جای host و port
      اطلاعات دیتابیس خود را وارد کنید. این کار را برای متغیرهای{" "}
      <span className="code">username</span> و{" "}
      <span className="code">password</span> هم باید انجام دهید.
    </Notice>

    <br />
    <Link href="/app-deploy/golang/disks" className="next-page">
      متوجه شدم، برو گام بعدی!
    </Link>
  </Layout>
);
