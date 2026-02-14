Original link: https://docs.liara.ir/paas/go/how-tos/connect-to-db/elastic-search/

# اتصال به دیتابیس ElasticSearch در برنامه‌های go

برای اتصال به دیتابیس ElasticSearch در برنامه‌های go، در ابتدا باید ماژول مربوط به آن را با اجرای دستور زیر، نصب کنید:

```bash
go get github.com/elastic/go-elasticsearch/v8
```

پس از آن، کافیست تا  
اطلاعات مربوط به دیتابیس خود را  
به متغیرهای محیطی برنامه خود، اضافه کنید؛ به عنوان مثال:

```txt
ELASTICSEARCH_URI=http://fitz-roy.liara.cloud:33492/
ELASTICSEARCH_USERNAME=elastic
ELASTICSEARCH_PASSWORD=uWrfTv0eW5ESQPYDxpX8EQWI
```

در نهایت، می‌توانید با استفاده از قطعه کد زیر، به دیتابیس خود، متصل شوید:

```go
package main

import (
	"context"
	"fmt"
	"log"
	"os"

	"github.com/elastic/go-elasticsearch/v8"
)

func main() {
	// Get Elasticsearch configuration from environment variables
	esURI := os.Getenv("ELASTICSEARCH_URI")
	esUsername := os.Getenv("ELASTICSEARCH_USERNAME")
	esPassword := os.Getenv("ELASTICSEARCH_PASSWORD")

	if esURI == "" || esUsername == "" || esPassword == "" {
		log.Fatal("Environment variables ELASTICSEARCH_URI, ELASTICSEARCH_USERNAME, and ELASTICSEARCH_PASSWORD must be set")
	}

	// Define the Elasticsearch connection configuration
	esConfig := elasticsearch.Config{
		Addresses: []string{
			esURI,
		},
		Username: esUsername,
		Password: esPassword,
	}

	// Create a new Elasticsearch client
	es, err := elasticsearch.NewClient(esConfig)
	if err != nil {
		log.Fatalf("Error creating the Elasticsearch client: %s", err)
	}

	// Test the connection
	res, err := es.Info()
	if err != nil {
		log.Fatalf("Error getting Elasticsearch info: %s", err)
	}
	defer res.Body.Close()

	// Print the response
	if res.IsError() {
		log.Fatalf("Elasticsearch returned an error: %s", res.String())
	}

	fmt.Println("Connected to Elasticsearch successfully!")
	fmt.Println(res.String())
}
```

## استفاده از Connection Pooling

مفهوم Connection pooling به معنای استفاده از یک مجموعه اتصالات از پیش ساخته شده برای اتصال به پایگاه داده است. این تکنیک باعث می‌شود به جای ایجاد و بستن مکرر اتصالات، از اتصالات موجود در مجموعه استفاده شود که کارایی را افزایش می‌دهد.  
> همچنین بخوانید: [آشنایی بیشتر با قابلیت Connection Pooling](https://docs.liara.ir/dbaas/details/connection-pool)

برای استفاده از قابلیت connection pooling در دیتابیس ElasticSearch، فقط کافیست تا با اجرای دستور زیر، ماژول موردنیاز را نصب کنید:

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
