Original link: https://docs.liara.ir/dbaas/mssql/how-tos/connect-via-platform/nodejs/

# اتصال به دیتابیس MSSQL در برنامه‌های NodeJS

برای اتصال به دیتابیس SQL Server، می‌توانید از پکیج `mssql` استفاده کنید، برای نصب این پکیج، کافیست تا در مسیر اصلی پروژه خود، دستور زیر را اجرا کنید:

```bash
npm install mssql
```

پس از آن، کافیست تا  
اطلاعات مربوط به دیتابیس خود را  
به متغیرهای محیطی برنامه خود، اضافه کنید؛ به عنوان مثال:

```bash
DB_HOST=mssql
DB_PORT=1433
DB_USER=sa
DB_PASS=4OTujub1cJeXYuRlgNFe5pHz
DB_NAME=master
```

اکنون، می‌توانید متغیرهای محیطی را در برنامه خود خوانده و به دیتابیس متصل شوید؛ در ادامه، یک قطعه کد مثال برای  
اتصال به دیتابیس با استفاده از فریم‌ورک `express` برای شما، قرار گرفته است:

```js
const express = require('express');
const sql = require('mssql');

const app = express();

const DB_HOST= process.env.DB_HOST;
const DB_PORT= process.env.DB_PORT;
const DB_USER= process.env.DB_USER;
const DB_PASS= process.env.DB_PASS;
const DB_NAME= process.env.DB_NAME;

async function connectAndQuery() {
  try {
    
    await sql.connect(`Server=${DB_HOST},${DB_PORT};Database=${DB_NAME};User Id=${DB_USER};Password=${DB_PASS};Encrypt=false`)
        
    await sql.query`CREATE TABLE test_table (id INT IDENTITY(1,1) PRIMARY KEY, name NVARCHAR(50));`;
    await sql.query`INSERT INTO test_table (name) VALUES ('Sample Record');`;

    const result = await sql.query`SELECT * FROM test_table`;
    return result.recordset;
  } catch (err) {
    console.error('Error executing SQL query:', err);
    throw err;
  } finally {
    await sql.close();
  }
}

app.get('/', async (req, res) => {
  try {
    
    const data = await connectAndQuery();
    res.send(data);
  } catch (err) {
    res.status(500).send('Error retrieving data from database.');
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
```

## استفاده از Connection Pooling

مفهوم Connection pooling به معنای استفاده از یک مجموعه اتصالات از پیش ساخته شده برای اتصال به پایگاه داده است. این تکنیک باعث می‌شود به جای ایجاد و بستن مکرر اتصالات، از اتصالات موجود در مجموعه استفاده شود که کارایی را افزایش می‌دهد.  
> همچنین بخوانید: [آشنایی بیشتر با قابلیت Connection Pooling](https://docs.liara.ir/dbaas/details/connection-pool)

برای استفاده از این قابلیت در دیتابیس MSSQL نیاز به انجام کار خاصی نیست؛ چرا که پکیج `mssql` به صورت خودکار، از این قابلیت، پشتیبانی می‌کند. صرفاً کافیست تا فیلد `pool` را به شکل زیر، به قطعه کد اتصال به دیتابیس، اضافه کنید:

```js
const sql = require('mssql');

const appPool = new sql.ConnectionPool({
    server: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    pool: {
        min: 10,
        max: 100,
        acquireTimeoutMillis: 15000,
    },
    options: {
      encrypt: false,
      trustServerCertificate: false
  }
});

appPool.connect().then(pool => {
    console.log(`SERVER: Connected to the db and ${pool.available} connections are available!`);
});
```

## all links

[All links of docs](https://docs.liara.ir/all-links-llms.txt)
