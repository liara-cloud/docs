Original link: https://docs.liara.ir/paas/nextjs/how-tos/connect-to-db/mysql/

# اتصال به دیتابیس MySQL در برنامه‌های NextJS

## Pages Router

روش‌ها و کتابخانه‌های مختلفی برای اتصال به MySQL در NextJS وجود دارد. یکی از این راه‌ها، استفاده از پکیج `mysql2` است که در ابتدا، با اجرای دستور زیر، باید آن را نصب کنید:

```bash
npm install mysql2
```

سپس، کافیست تا در فایل `env.production.` متغیرهای محیطی مربوط به دیتابیس خود را قرار دهید؛ به عنوان مثال:

```bash
DB_URI=mysql://root:kXdnuKx9pfFFll0mBpsH4DGK@bromo.liara.cloud:32973/happy_bouman
```

در ادامه، بایستی در مسیر `lib` (یا اگر که از دایرکتوری src استفاده می‌کنید؛ در مسیر `src/lib`)، یک فایل به نام `mysql.js` ایجاد کنید و قطعه کد زیر را در آن، قرار دهید:
```js
import mysql from 'mysql2/promise';

const mysqlConnectionURI = process.env.DB_URI;

export async function connectToMySQL() {
  const connection = await mysql.createConnection(mysqlConnectionURI);
  return connection;
}
```

سپس، بایستی در مسیر `pages/api` (یا اگر که از دایرکتوری src استفاده می‌کنید؛ در مسیر `src/pages/api`)، یک فایل به نام `mysql.js` بسازید و قطعه کد زیر را در آن، قرار دهید:
```js
import { connectToMySQL } from '@/lib/mysql';

export default async function handler(req, res) {
  const connection = await connectToMySQL();
  await connection.end();

  res.status(200).json({ message: 'Connected to MySQL successfully' });
}
```

تمامی کارها انجام شده است و شما می‌توانید با استفاده از قطعه کد مثال زیر در فایل `pages/index.js` (یا `src/pages/index.js`) از دیتابیس خود، استفاده کنید:

```js
import { useEffect, useState } from 'react';

export default function Home() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch('/api/mysql');
        const result = await res.json();
        setData(result);
      } catch (err) {
        setError(err);
      }
    }

    fetchData();
  }, []);

  return (
    <div>
      <h1>Database Connection Test</h1>
      {error ? (
        Error: {error.message}
      ) : data ? (
        {JSON.stringify(data, null, 2)}</pre>
      ) : (
        <p>Loading...
      )}
    </div>
  );
}
```

در نظر داشته باشید که می‌توانید قطعه کدهای فوق را با توجه به نیاز خود، تغییر دهید.

## App Router

روش‌ها و کتابخانه‌های مختلفی برای اتصال به MySQL در NextJS وجود دارد. یکی از این راه‌ها، استفاده از پکیج `mysql2` است که در ابتدا، با اجرای دستور زیر، باید آن را نصب کنید:

```bash
npm install mysql2
```

سپس، کافیست تا در فایل `env.production.` متغیرهای محیطی مربوط به دیتابیس خود را قرار دهید؛ به عنوان مثال:

```bash
DB_URI=mysql://root:kXdnuKx9pfFFll0mBpsH4DGK@bromo.liara.cloud:32973/happy_bouman
```

در ادامه، بایستی در مسیر `lib` (یا اگر که از دایرکتوری src استفاده می‌کنید؛ در مسیر `src/lib`)، یک فایل به نام `mysql.js` ایجاد کنید و قطعه کد زیر را در آن، قرار دهید:
```js
import mysql from 'mysql2/promise';

const mysqlConnectionURI = process.env.DB_URI;

export async function connectToMySQL() {
  const connection = await mysql.createConnection(mysqlConnectionURI);
  return connection;
}
```

سپس، بایستی در مسیر `app/api` (یا اگر که از دایرکتوری src استفاده می‌کنید؛ در مسیر `src/app/api`)، یک دایرکتوری به نام `mysql` ایجاد کنید و درون آن، یک فایل به نام `route.js` بسازید و قطعه کد زیر را در آن، قرار دهید:

```js
import { connectToMySQL } from '@/lib/mysql';

export async function GET(request) {
  const connection = await connectToMySQL();
  await connection.end();

  return new Response(JSON.stringify({ message: 'Connected to MySQL successfully' }));
}
```

تمامی کارها انجام شده است و شما می‌توانید با استفاده از قطعه کد مثال زیر در فایل `app/page.js` (یا `src/app/page.js`) از دیتابیس خود، استفاده کنید:

```js
'use client'; 

import { useEffect, useState } from 'react';

export default function Home() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch('/api/mysql');
        const result = await res.json();
        setData(result);
      } catch (err) {
        setError(err);
      }
    }

    fetchData();
  }, []);

  return (
    <div>
      <h1>Database Connection Test</h1>
      {error ? (
        Error: {error.message}
      ) : data ? (
        {JSON.stringify(data, null, 2)}</pre>
      ) : (
        <p>Loading...
      )}
    </div>
  );
}
```

در نظر داشته باشید که می‌توانید قطعه کدهای فوق را با توجه به نیاز خود، تغییر دهید.

## استفاده از Connection Pooling

مفهوم Connection pooling به معنای استفاده از یک مجموعه اتصالات از پیش ساخته شده برای اتصال به پایگاه داده است. این تکنیک باعث می‌شود به جای ایجاد و بستن مکرر اتصالات، از اتصالات موجود در مجموعه استفاده شود که کارایی را افزایش می‌دهد.  
> همچنین بخوانید: [آشنایی بیشتر با قابلیت Connection Pooling](https://docs.liara.ir/dbaas/details/connection-pool)

در پکیج `mysql2` قابلیت connection pooling   تعبیه شده است و شما می‌توانید با استفاده از قطعه کد زیر در فایل `lib/mysql.js` (یا `src/lib/mysql.js`)، این قابلیت را، در حین اتصال به دیتابیس، ایجاد و پارامترهای آن‌را بر اساس نیاز خود، مقداردهی کنید:

```js
import mysql from 'mysql2/promise';

const pool = mysql.createPool({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  waitForConnections: true,
  connectionLimit: 5,  // amount of connections in same time
  queueLimit: 0
});

export async function connectToMySQL() {
  return await pool.getConnection();
}
```

## all links

[All links of docs](https://docs.liara.ir/all-links-llms.txt)
