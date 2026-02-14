Original link: https://docs.liara.ir/paas/nextjs/how-tos/connect-to-db/mssql/

# اتصال به دیتابیس MSSQL در برنامه‌های NextJS

## Pages Router

روش‌ها و کتابخانه‌های مختلفی برای اتصال به Microsoft SQL Server در NextJS وجود دارد. یکی از این راه‌ها، استفاده از پکیج `mssql` است که در ابتدا، با اجرای دستور زیر، باید آن را نصب کنید:

```bash
npm install mssql
```

سپس، کافیست تا در فایل `env.production.` متغیرهای محیطی مربوط به دیتابیس خود را قرار دهید؛ به عنوان مثال:

```bash
DB_USER=sa
DB_PASS=6fdZJSt5LCXcVIZa0mgMLOS6
DB_HOST=bromo.liara.cloud
DB_PORT=33951
DB_NAME=testDB
```

در ادامه، بایستی در مسیر `lib` (یا اگر که از دایرکتوری src استفاده می‌کنید؛ در مسیر `src/lib`)، یک فایل به نام `mssql.js` ایجاد کنید و قطعه کد زیر را در آن، قرار دهید:
```js
import sql from 'mssql';

const mssqlConfig = {
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  server: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT, 10),
  database: process.env.DB_NAME,
  options: {
    trustServerCertificate: true, 
  },
};

export async function connectToMSSQL() {
  const pool = await sql.connect(mssqlConfig);
  return pool;
}
```

سپس، بایستی در مسیر `pages/api` (یا اگر که از دایرکتوری src استفاده می‌کنید؛ در مسیر `src/pages/api`)، یک فایل به نام `mssql.js` بسازید و قطعه کد زیر را در آن، قرار دهید:
```js
import { connectToMSSQL } from 'https://docs.liara.ir/lib/mssql';

export default async function handler(req, res) {
  const pool = await connectToMSSQL();
  pool.close();

  res.status(200).json({ message: 'Connected to MSSQL successfully' });
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
        const res = await fetch('/api/mssql');
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

روش‌ها و کتابخانه‌های مختلفی برای اتصال به Microsoft SQL Server در NextJS وجود دارد. یکی از این راه‌ها، استفاده از پکیج `mssql` است که در ابتدا، با اجرای دستور زیر، باید آن را نصب کنید:

```bash
npm install mssql
```

سپس، کافیست تا در فایل `env.production.` متغیرهای محیطی مربوط به دیتابیس خود را قرار دهید؛ به عنوان مثال:

```bash
DB_USER=sa
DB_PASS=6fdZJSt5LCXcVIZa0mgMLOS6
DB_HOST=bromo.liara.cloud
DB_PORT=33951
DB_NAME=testDB
```

در ادامه، بایستی در مسیر `lib` (یا اگر که از دایرکتوری src استفاده می‌کنید؛ در مسیر `src/lib`)، یک فایل به نام `mssql.js` ایجاد کنید و قطعه کد زیر را در آن، قرار دهید:
```js
import sql from 'mssql';

const mssqlConfig = {
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  server: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT, 10),
  database: process.env.DB_NAME,
  options: {
    trustServerCertificate: true, 
  },
};

export async function connectToMSSQL() {
  const pool = await sql.connect(mssqlConfig);
  return pool;
}
```

سپس، بایستی در مسیر `app/api` (یا اگر که از دایرکتوری src استفاده می‌کنید؛ در مسیر `src/app/api`)، یک دایرکتوری به نام `mssql` ایجاد کنید و درون آن، یک فایل به نام `route.js` بسازید و قطعه کد زیر را در آن، قرار دهید:

```js
// src/app/api/mssql/route.js
import { connectToMSSQL } from 'https://docs.liara.ir/lib/mssql';

export async function GET(request) {
  const pool = await connectToMSSQL();
  pool.close();

  return new Response(JSON.stringify({ message: 'Connected to MSSQL successfully' }));
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
        const res = await fetch('/api/mssql');
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

در پکیج `mssql` قابلیت connection pooling   تعبیه شده است و شما می‌توانید با استفاده از قطعه کد زیر در فایل `lib/mssql.js` (یا `src/lib/postgresql.js`)، این قابلیت را، در حین اتصال به دیتابیس، ایجاد و پارامتر آن‌را بر اساس نیاز خود، مقداردهی کنید:

```js
import sql from 'mssql';

const mssqlConfig = {
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  server: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT, 10),
  database: process.env.DB_NAME,
  options: {
    trustServerCertificate: true, 
  },
  pool: {
    max: 5,  // amount of connections in same time
    min: 0,
    idleTimeoutMillis: 30000
  }
};

export async function connectToMSSQL() {
  const pool = await sql.connect(mssqlConfig);
  return pool;
}
```

## all links

[All links of docs](https://docs.liara.ir/all-links-llms.txt)
