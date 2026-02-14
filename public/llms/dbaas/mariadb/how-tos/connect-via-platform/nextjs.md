Original link: https://docs.liara.ir/dbaas/mariadb/how-tos/connect-via-platform/nextjs/

# اتصال به دیتابیس MariaDB در برنامه‌های NextJS

## Pages Router

روش‌ها و کتابخانه‌های مختلفی برای اتصال به MariaDB در NextJS وجود دارد. یکی از این راه‌ها، استفاده از پکیج `mariadb` است که در ابتدا، با اجرای دستور زیر، باید آن را نصب کنید:

```bash
npm install mariadb
```

پس از آن، کافیست تا  
اطلاعات مربوط به دیتابیس خود را  
به متغیرهای محیطی برنامه خود، اضافه کنید؛ به عنوان مثال:

```bash
DB_HOST=bromo.liara.cloud
DB_PORT=32703
DB_USER=root
DB_PASS=5T7kBqMMGLQYDGAkVdAtvd3L
DB_NAME=upbeat_rosalind
```

در ادامه، بایستی در مسیر `lib` (یا اگر که از دایرکتوری src استفاده می‌کنید؛ در مسیر `src/lib`)، یک فایل به نام `mariadb.js` ایجاد کنید و قطعه کد زیر را در آن، قرار دهید:
```js
import mariadb from 'mariadb';

const pool = mariadb.createPool({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  connectionLimit: 5
});

export async function connectToMariaDB() {
  const connection = await pool.getConnection();
  return connection;
}

```

سپس، بایستی در مسیر `pages/api` (یا اگر که از دایرکتوری src استفاده می‌کنید؛ در مسیر `src/pages/api`)، یک فایل به نام `mariadb.js` بسازید و قطعه کد زیر را در آن، قرار دهید:
```js
import { connectToMariaDB } from 'https://docs.liara.ir/lib/mariadb';

export default async function handler(req, res) {
  const connection = await connectToMariaDB();
  connection.release();

  res.status(200).json({ message: 'Connected to MariaDB successfully' });
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
        const res = await fetch('/api/mariadb');
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

روش‌ها و کتابخانه‌های مختلفی برای اتصال به MariaDB در NextJS وجود دارد. یکی از این راه‌ها، استفاده از پکیج `mariadb` است که در ابتدا، با اجرای دستور زیر، باید آن را نصب کنید:

```bash
npm install mariadb
```

پس از آن، کافیست تا  
اطلاعات مربوط به دیتابیس خود را  
به متغیرهای محیطی برنامه خود، اضافه کنید؛ به عنوان مثال:

```bash
DB_HOST=bromo.liara.cloud
DB_PORT=32703
DB_USER=root
DB_PASS=5T7kBqMMGLQYDGAkVdAtvd3L
DB_NAME=upbeat_rosalind
```

در ادامه، بایستی در مسیر `lib` (یا اگر که از دایرکتوری src استفاده می‌کنید؛ در مسیر `src/lib`)، یک فایل به نام `mariadb.js` ایجاد کنید و قطعه کد زیر را در آن، قرار دهید:
```js
import mariadb from 'mariadb';

const pool = mariadb.createPool({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  connectionLimit: 5
});

export async function connectToMariaDB() {
  const connection = await pool.getConnection();
  return connection;
}

```

سپس، بایستی در مسیر `app/api` (یا اگر که از دایرکتوری src استفاده می‌کنید؛ در مسیر `src/app/api`)، یک دایرکتوری به نام `mariadb` ایجاد کنید و درون آن، یک فایل به نام `route.js` بسازید و قطعه کد زیر را در آن، قرار دهید:

```js
import { connectToMariaDB } from '@/lib/mariadb';

export async function GET(request) {
  const connection = await connectToMariaDB();
  connection.release();

  return new Response(JSON.stringify({ message: 'Connected to MariaDB successfully' }));
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
        const res = await fetch('/api/mariadb');
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

در پکیج `mariadb` این قابلیت به صورت خودکار تعبیه شده است و شما می‌توانید در فایل `lib/mariadb.js` (یا `src/lib/mariadb.js`) حین اتصال به دیتابیس پارامتر زیر را بر اساس نیاز خود، مقدار دهی کنید:

```js
const pool = mariadb.createPool({
  // other codes ...
  connectionLimit: 5  // amount of connections in a same time
});
```

## all links

[All links of docs](https://docs.liara.ir/all-links-llms.txt)
