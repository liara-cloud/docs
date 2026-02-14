Original link: https://docs.liara.ir/dbaas/postgresql/how-tos/connect-via-platform/nextjs/

# اتصال به دیتابیس PostgreSQL در برنامه‌های NextJS

## Pages Router

روش‌ها و کتابخانه‌های مختلفی برای اتصال به PostgreSQL در NextJS وجود دارد. یکی از این راه‌ها، استفاده از پکیج `pg` است که در ابتدا، با اجرای دستور زیر، باید آن را نصب کنید:

```bash
npm install pg
```

پس از آن، کافیست تا 
اطلاعات مربوط به دیتابیس خود را 
به متغیرهای محیطی برنامه خود، اضافه کنید؛ به عنوان مثال:

```bash
DB_URI=postgresql://root:1CTYgVwfjtomCa2Z26OsDi1z@bromo.liara.cloud:33938/postgres
```

در ادامه، بایستی در مسیر `lib` (یا اگر که از دایرکتوری src استفاده می‌کنید؛ در مسیر `src/lib`)، یک فایل به نام `postgresql.js` ایجاد کنید و قطعه کد زیر را در آن، قرار دهید:
```js
import { Client } from 'pg';

const pgConnectionURI = process.env.DB_URI;

export async function connectToPostgreSQL() {
  const client = new Client({
    connectionString: pgConnectionURI,
  });
  await client.connect();
  return client;
}
```

سپس، بایستی در مسیر `pages/api` (یا اگر که از دایرکتوری src استفاده می‌کنید؛ در مسیر `src/pages/api`)، یک فایل به نام `postgresql.js` بسازید و قطعه کد زیر را در آن، قرار دهید:
```js
import { connectToPostgreSQL } from 'https://docs.liara.ir/lib/postgresql';

export default async function handler(req, res) {
  const client = await connectToPostgreSQL();
  await client.end();

  res.status(200).json({ message: 'Connected to PostgreSQL successfully' });
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
        const res = await fetch('/api/postgresql');
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

روش‌ها و کتابخانه‌های مختلفی برای اتصال به PostgreSQL در NextJS وجود دارد. یکی از این راه‌ها، استفاده از پکیج `pg` است که در ابتدا، با اجرای دستور زیر، باید آن را نصب کنید:

```bash
npm install pg
```

پس از آن، کافیست تا 
اطلاعات مربوط به دیتابیس خود را 
به متغیرهای محیطی برنامه خود، اضافه کنید؛ به عنوان مثال:

```bash
DB_URI=postgresql://root:1CTYgVwfjtomCa2Z26OsDi1z@bromo.liara.cloud:33938/postgres
```

در ادامه، بایستی در مسیر `lib` (یا اگر که از دایرکتوری src استفاده می‌کنید؛ در مسیر `src/lib`)، یک فایل به نام `postgresql.js` ایجاد کنید و قطعه کد زیر را در آن، قرار دهید:
```js
import { Client } from 'pg';

const pgConnectionURI = process.env.DB_URI;

export async function connectToPostgreSQL() {
  const client = new Client({
    connectionString: pgConnectionURI,
  });
  await client.connect();
  return client;
}
```

سپس، بایستی در مسیر `app/api` (یا اگر که از دایرکتوری src استفاده می‌کنید؛ در مسیر `src/app/api`)، یک دایرکتوری به نام `postgresql` ایجاد کنید و درون آن، یک فایل به نام `route.js` بسازید و قطعه کد زیر را در آن، قرار دهید:

```js
import { connectToPostgreSQL } from '@/lib/postgresql';

export async function GET(request) {
  const client = await connectToPostgreSQL();
  await client.end();

  return new Response(JSON.stringify({ message: 'Connected to PostgreSQL successfully' }));
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
        const res = await fetch('/api/postgresql');
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

در پکیج `pg` قابلیت connection pooling   تعبیه شده است و شما می‌توانید با استفاده از قطعه کد زیر در فایل `lib/postgresql.js` (یا `src/lib/postgresql.js`)، این قابلیت را، در حین اتصال به دیتابیس، ایجاد و پارامتر آن‌را بر اساس نیاز خود، مقداردهی کنید:

```js
import { Pool } from 'pg';

const pool = new Pool({
  connectionString: process.env.DB_URI,
  max: 5  
});

export async function connectToPostgreSQL() {
  return await pool.connect();
}
```

## all links

[All links of docs](https://docs.liara.ir/all-links-llms.txt)
