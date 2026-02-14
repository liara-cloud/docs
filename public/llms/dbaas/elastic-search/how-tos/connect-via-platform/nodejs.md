Original link: https://docs.liara.ir/dbaas/elastic-search/how-tos/connect-via-platform/nodejs/

# اتصال به دیتابیس PostgreSQL در برنامه‌های NodeJS

برای اتصال به دیتابیس Postgres، می‌توانید از پکیج `pg` استفاده کنید، برای نصب این پکیج، کافیست تا در مسیر اصلی پروژه خود، دستور زیر را اجرا کنید:

```bash
npm install pg
```

پس از آن، کافیست تا  
اطلاعات مربوط به دیتابیس خود را  
به متغیرهای محیطی برنامه خود، اضافه کنید؛ به عنوان مثال:

```bash
PG_URI=postgresql://root:jpR53iIAhADgqsJ3ufVE1v94@pgo:5432/postgres
```

اکنون، می‌توانید متغیر محیطی را در برنامه خود خوانده و به دیتابیس متصل شوید؛ در ادامه، یک قطعه کد مثال برای  
اتصال به دیتابیس با استفاده از فریم‌ورک `express` برای شما، قرار گرفته است:

```js
const express = require('express');
const { Pool } = require('pg');

const app = express();

const dbURI = process.env.PG_URI;

const pool = new Pool({
  connectionString: dbURI,
});

pool.connect((err) => {
  if (err) {
    console.error('Error connecting to PostgreSQL database:', err);
    app.locals.dbConnected = false;
    return;
  }
  console.log('Connected to PostgreSQL database successfully');
  app.locals.dbConnected = true;
});

app.get('/', (req, res) => {
  res.send(app.locals.dbConnected ? 'Connection to database successful.' : 'Error connecting to database.');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});

process.on('SIGINT', () => {
  pool.end();
  console.log('Database connection closed');
  process.exit();
});
```

## استفاده از Connection Pooling

مفهوم Connection pooling به معنای استفاده از یک مجموعه اتصالات از پیش ساخته شده برای اتصال به پایگاه داده است. این تکنیک باعث می‌شود به جای ایجاد و بستن مکرر اتصالات، از اتصالات موجود در مجموعه استفاده شود که کارایی را افزایش می‌دهد.  
> همچنین بخوانید: [آشنایی بیشتر با قابلیت Connection Pooling](https://docs.liara.ir/dbaas/details/connection-pool)

برای فعال‌سازی این قابلیت در دیتابیس PostgreSQL بایستی پکیج `pg-pool` را با استفاده از دستور زیر در پروژه خود نصب کنید:

```bash
npm install pg-pool
```

سپس، می‌توانید مانند قطعه کد زیر، از Connection Pooling استفاده کنید:

```js
const express = require('express');
const { Pool } = require('pg');

const app = express();

const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASS,
  port: process.env.DB_PORT,
  max: 20, // maximum number of connections in the pool
  idleTimeoutMillis: 30000, // how long a client is allowed to remain idle before being closed
  connectionTimeoutMillis: 2000, // how long to wait for a connection to be established
});

pool.connect((err) => {
  if (err) {
    console.error('Error connecting to PostgreSQL database:', err);
    app.locals.dbConnected = false;
    return;
  }
  console.log('Connected to PostgreSQL database successfully');
  app.locals.dbConnected = true;
});

app.get('/', (req, res) => {
  res.send(app.locals.dbConnected ? 'Connection to database successful.' : 'Error connecting to database.');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});

process.on('SIGINT', () => {
  pool.end();
  console.log('Database connection closed');
  process.exit();
});
```

## all links

[All links of docs](https://docs.liara.ir/all-links-llms.txt)
