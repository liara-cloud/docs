Original link: https://docs.liara.ir/paas/go/how-tos/connect-to-db/mongodb/

# اتصال به دیتابیس MongoDB در برنامه‌های go

برای اتصال به دیتابیس MongoDB در برنامه‌های go، در ابتدا باید ماژول مربوط به آن را با اجرای دستور زیر، نصب کنید:

```bash
go get go.mongodb.org/mongo-driver/mongo
```

پس از آن، کافیست تا  
اطلاعات مربوط به دیتابیس خود را  
به متغیرهای محیطی برنامه خود، اضافه کنید؛ به عنوان مثال:

```txt
MONGODB_URI="mongodb://root:cytAXXy458bz5iBO3Sm7xw8w@fitz-roy.liara.cloud:30219/my-app?authSource=admin"
```

در نهایت، می‌توانید با استفاده از قطعه کد زیر، به دیتابیس خود، متصل شوید:

```go
package main

import (
	"context"
	"fmt"
	"os"

	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/mongo"
	"go.mongodb.org/mongo-driver/mongo/options"
)

func main() {
	// Get the MongoDB URI from the environment variable
	uri := os.Getenv("MONGODB_URI")
	if uri == "" {
		panic("MONGODB_URI environment variable is not set")
	}

	// Use the SetServerAPIOptions() method to set the Stable API version to 1
	serverAPI := options.ServerAPI(options.ServerAPIVersion1)
	opts := options.Client().ApplyURI(uri).SetServerAPIOptions(serverAPI)

	// Create a new client and connect to the server
	client, err := mongo.Connect(context.TODO(), opts)
	if err != nil {
		panic(err)
	}
	defer func() {
		if err = client.Disconnect(context.TODO()); err != nil {
			panic(err)
		}
	}()

	// Send a ping to confirm a successful connection
	var result bson.M
	if err := client.Database("admin").RunCommand(context.TODO(), bson.D{{Key: "ping", Value: 1}}).Decode(&result); err != nil {
		panic(err)
	}
	fmt.Println("Pinged your deployment. You successfully connected to MongoDB!")
}
```

## استفاده از Connection Pooling

مفهوم Connection pooling به معنای استفاده از یک مجموعه اتصالات از پیش ساخته شده برای اتصال به پایگاه داده است. این تکنیک باعث می‌شود به جای ایجاد و بستن مکرر اتصالات، از اتصالات موجود در مجموعه استفاده شود که کارایی را افزایش می‌دهد.  
> همچنین بخوانید: [آشنایی بیشتر با قابلیت Connection Pooling](https://docs.liara.ir/dbaas/details/connection-pool)

برای استفاده از قابلیت connection pooling در دیتابیس MongoDB، فقط کافیست تا با اجرای دستور زیر، ماژول موردنیاز را نصب کنید:

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
