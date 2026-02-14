Original link: https://docs.liara.ir/paas/nextjs/how-tos/connect-to-db/sqlite/

# اتصال به دیتابیس SQLite در برنامه‌های NextJS

## Pages Router

برای اتصال موفق به دیتابیس SQLite در برنامه‌های NextJS کافیست تا گام‌های زیر را طی کنید:

۱. نصب ماژول‌های SQLite  
با اجرای دستور زیر، ماژول‌های مورد نیاز SQLite را نصب کنید:
```bash
npm install sqlite sqlite3
```

۲. ایجاد دایرکتوری db و فایل gitignore.  
در مسیر اصلی پروژه، یک دایرکتوری به نام `db` ایجاد کنید. درون این دایرکتوری،  
یک فایل به نام `gitignore.` ایجاد کنید و قطعه کد زیر را در آن، قرار دهید:

```bash
*
!.gitignore
```

۳. درج قطعه کدهای مورد نیاز  
در ابتدا، بایستی در مسیر اصلی پروژه (یا اگر که از دایرکتوری src استفاده می‌کنید، در این دایرکتوری)، یک دایرکتوری به نام `lib` ایجاد کنید. درون این دایرکتوری،  
باید یک فایل به نام `sqlite.js` ایجاد کرده و قطعه کد زیر را در آن، قرار دهید:

```js
import sqlite3 from 'sqlite3';
import { open } from 'sqlite';

let db;

export async function connectToSQLite() {
  if (!db) {
    db = await open({
      filename: './db/database.sqlite',
      driver: sqlite3.Database,
    });
  }
  return db;
}

export async function disconnectFromSQLite() {
  if (db) {
    await db.close();
    db = null;
  }
}
```

در ادامه، کافیست تا در مسیر `pages/api` (یا اگر که از src استفاده می‌کنید، در مسیر `src/pages/api`)، یک فایل به نام `sqlite.js` ایجاد کنید و قطعه کد زیر  
را، درون آن، قرار دهید:

```js
import { connectToSQLite, disconnectFromSQLite } from 'https://docs.liara.ir/lib/sqlite';

export default async function handler(req, res) {
  if (req.method === 'GET') {
    try {
      const db = await connectToSQLite();
      await db.get("SELECT 1");
      await disconnectFromSQLite();
      res.status(200).json({ message: 'Connected to SQLite successfully' });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  } else {
    res.status(405).json({ error: 'Method Not Allowed' });
  }
}
```

در نهایت، می‌توانید به دیتابیس SQLite خود متصل شده و از آن استفاده کنید. در ادامه، یک قطعه کد مثال  
آورده شده است که می‌تواند در فایل `pages/index.js` (یا `src/pages/index.js`) قرار بگیرد:


```js
import { useEffect, useState } from 'react';

export default function Home() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch('/api/sqlite');
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
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

۴. ایجاد دیسک برای دیتابیس  
[طبق مستندات ایجاد دیسک](https://docs.liara.ir/paas/disks/create)،  در بخش **دیسک‌ها** برنامه خود در لیارا، یک دیسک جدید با نام `database` و اندازه مدنظرتان ایجاد کنید.

۵. ایجاد و پیکربندی فایل liara.json  
در مسیر اصلی پروژه، یک فایل به نام `liara.json` ایجاد کنید و قطعه کد زیر را، درون آن، قرار دهید:
```json
{
    "disks": [
        {
            "name": "database",
            "mountTo": "db"
        }
    ]
}
```

۶. استقرار برنامه در لیارا  
برنامه خود را با استفاده از دستور `liara deploy` در لیارا مستقر کنید.


## App Router

برای اتصال موفق به دیتابیس SQLite در برنامه‌های NextJS کافیست تا گام‌های زیر را طی کنید:

۱. نصب ماژول‌های SQLite  
با اجرای دستور زیر، ماژول‌های مورد نیاز SQLite را نصب کنید:
```bash
npm install sqlite sqlite3
```

۲. ایجاد دایرکتوری db و فایل gitignore.  
در مسیر اصلی پروژه، یک دایرکتوری به نام `db` ایجاد کنید. درون این دایرکتوری،  
یک فایل به نام `gitignore.` ایجاد کنید و قطعه کد زیر را در آن، قرار دهید:

```bash
*
!.gitignore
```

۳. درج قطعه کدهای مورد نیاز  
در ابتدا، بایستی در مسیر اصلی پروژه (یا اگر که از دایرکتوری src استفاده می‌کنید، در این دایرکتوری)، یک دایرکتوری به نام `lib` ایجاد کنید. درون این دایرکتوری،  
باید یک فایل به نام `sqlite.js` ایجاد کرده و قطعه کد زیر را در آن، قرار دهید:

```js
import sqlite3 from 'sqlite3';
import { open } from 'sqlite';

let db;

export async function connectToSQLite() {
  if (!db) {
    db = await open({
      filename: './db/database.sqlite',
      driver: sqlite3.Database,
    });
  }
  return db;
}

export async function disconnectFromSQLite() {
  if (db) {
    await db.close();
    db = null;
  }
}
```

در ادامه، کافیست تا در مسیر `app/api` (یا اگر که از src استفاده می‌کنید، در مسیر `src/app/api`)، یک دایرکتوری به نام `sqlite` بسازید و درون این دایرکتوری، یک فایل به نام `route.js` ایجاد کنید و قطعه کد زیر  
را، درون آن، قرار دهید:

```js
import { connectToSQLite, disconnectFromSQLite } from 'https://docs.liara.ir/lib/sqlite';

export async function GET(request) {
  try {
    const db = await connectToSQLite();
    await db.get("SELECT 1");
    await disconnectFromSQLite();
    return new Response(JSON.stringify({ message: 'Connected to SQLite successfully' }));
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), { status: 500 });
  }
}
```

در نهایت، می‌توانید به دیتابیس SQLite خود متصل شده و از آن استفاده کنید. در ادامه، یک قطعه کد مثال  
آورده شده است که می‌تواند در فایل `app/page.js` (یا `src/app/page.js`) قرار بگیرد:


```js
'use client';

import { useEffect, useState } from 'react';

export default function Home() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch('/api/sqlite');
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
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

۴. ایجاد دیسک برای دیتابیس  
[طبق مستندات ایجاد دیسک](https://docs.liara.ir/paas/disks/create)،  در بخش **دیسک‌ها** برنامه خود در لیارا، یک دیسک جدید با نام `database` و اندازه مدنظرتان ایجاد کنید.

۵. ایجاد و پیکربندی فایل liara.json  
در مسیر اصلی پروژه، یک فایل به نام `liara.json` ایجاد کنید و قطعه کد زیر را، درون آن، قرار دهید:
```json
{
    "disks": [
        {
            "name": "database",
            "mountTo": "db"
        }
    ]
}
```

۶. استقرار برنامه در لیارا  
برنامه خود را با استفاده از دستور `liara deploy` در لیارا مستقر کنید.


البته در نظر داشته باشید که استفاده از دیتابیس SQLite بیشتر برای وب‌سایت‌های کوچک با پردازش‌های کم مناسب است و  
در مقیاس بالا، بهتر است که از دیتابیس‌های دیگری استفاده کنید.

## استفاده از Connection Pooling  
در نظر داشته باشید که SQLite از قابلیت Connection Pooling پشتیبانی نمی‌کند؛ چرا که SQLite یک دیتابیس فایل‌محور است و نیازی به connection pooling ندارد. هر اتصال به فایل دیتابیس مستقل از دیگر اتصالات است و SQLite به طور خودکار این اتصالات را، مدیریت می‌کند.

## all links

[All links of docs](https://docs.liara.ir/all-links-llms.txt)
