Original link: https://docs.liara.ir/paas/nextjs/how-tos/connect-to-db/mongodb/

# اتصال به دیتابیس MongoDB در برنامه‌های NextJS

## Pages Router

روش‌ها و کتابخانه‌های مختلفی برای اتصال به MongoDB در NextJS وجود دارد. یکی از این راه‌ها، استفاده از پکیج `mongodb` است که در ابتدا، با اجرای دستور زیر، باید آن را نصب کنید:

```bash
npm install mongodb
```

سپس، کافیست تا در فایل `env.production.` متغیرهای محیطی مربوط به دیتابیس خود را قرار دهید؛ به عنوان مثال:

```bash
DB_URI=mongodb://root:uyYDoeYGcPr4xK8PSWnjsT9S@bromo.liara.cloud:32005/my-app?authSource=admin
```

در ادامه، بایستی در مسیر `lib` (یا اگر که از دایرکتوری src استفاده می‌کنید؛ در مسیر `src/lib`)، یک فایل به نام `mongodb.js` ایجاد کنید و قطعه کد زیر را در آن، قرار دهید:
```js
import { MongoClient } from 'mongodb';

const client = new MongoClient(process.env.DB_URI);

let db;

async function connectToDatabase() {
    if (!db) {
        await client.connect();
        db = client.db();
    }
    return db;
}

export { connectToDatabase };
```

تمامی کارها انجام شده است و شما می‌توانید با استفاده از قطعه کد مثال زیر در فایل `pages/index.js` (یا `src/pages/index.js`) از دیتابیس خود، استفاده کنید:

```js
import { connectToDatabase } from '@/lib/mongodb';

export default function HomePage({ mongoStatus }) {
    return (
        <div>
            <h1>Connection Status</h1>
            {mongoStatus}
        </div>
    );
}

export async function getServerSideProps() {
    let mongoStatus;

    try {
        const db = await connectToDatabase();
        mongoStatus = db ? 'Connected to MongoDB' : 'Failed to connect to MongoDB';
    } catch (error) {
        mongoStatus = 'Failed to connect to MongoDB';
    }

    return {
        props: {
            mongoStatus,
        },
    };
}
```

در نظر داشته باشید که می‌توانید قطعه کدهای فوق را با توجه به نیاز خود، تغییر دهید.

## App Router

روش‌ها و کتابخانه‌های مختلفی برای اتصال به MongoDB در NextJS وجود دارد. یکی از این راه‌ها، استفاده از پکیج `mongodb` است که در ابتدا، با اجرای دستور زیر، باید آن را نصب کنید:

```bash
npm install mongodb
```

سپس، کافیست تا در فایل `env.production.` متغیرهای محیطی مربوط به دیتابیس خود را قرار دهید؛ به عنوان مثال:

```bash
DB_URI=mongodb://root:uyYDoeYGcPr4xK8PSWnjsT9S@bromo.liara.cloud:32005/my-app?authSource=admin
```

در ادامه، بایستی در مسیر `lib` (یا اگر که از دایرکتوری src استفاده می‌کنید؛ در مسیر `src/lib`)، یک فایل به نام `mongodb.js` ایجاد کنید و قطعه کد زیر را در آن، قرار دهید:
```js
import { MongoClient } from 'mongodb';

const client = new MongoClient(process.env.DB_URI);

let db;

async function connectToDatabase() {
    if (!db) {
        await client.connect();
        db = client.db();
    }
    return db;
}

export { connectToDatabase };
```

تمامی کارها انجام شده است و شما می‌توانید با استفاده از قطعه کد مثال زیر در فایل `app/page.js` (یا `src/app/page.js`) از دیتابیس خود، استفاده کنید:

```js
import { connectToDatabase } from '@/lib/mongodb';

export default async function HomePage() {
    let mongoStatus;

    try {
        const db = await connectToDatabase();
        mongoStatus = db ? 'Connected to MongoDB' : 'Failed to connect to MongoDB';
    } catch (error) {
        mongoStatus = 'Failed to connect to MongoDB';
    }

    return (
        <div>
            <h1>Connection Status</h1>
            {mongoStatus}
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
import { MongoClient } from 'mongodb';

const client = new MongoClient(process.env.DB_URI, {
    poolSize: 10, // amount of connections in same time
});

let db;

async function connectToDatabase() {
    if (!db) {
        await client.connect();
        db = client.db();
    }
    return db;
}

export { connectToDatabase };
```

## all links

[All links of docs](https://docs.liara.ir/all-links-llms.txt)
