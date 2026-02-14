Original link: https://docs.liara.ir/paas/nextjs/how-tos/connect-to-db/redis/

# اتصال به دیتابیس Redis در برنامه‌های NextJS

## Pages Router

روش‌ها و کتابخانه‌های مختلفی برای اتصال به Redis در NextJS وجود دارد. یکی از این راه‌ها، استفاده از پکیج `ioredis` است که در ابتدا، با اجرای دستور زیر، باید آن را نصب کنید:

```bash
npm install ioredis
```

سپس، کافیست تا در فایل `env.production.` متغیرهای محیطی مربوط به دیتابیس خود را قرار دهید؛ به عنوان مثال:

```bash
DB_URI=redis://:oVj2F980tPjHBHmAOyDdxT2B@bromo.liara.cloud:30236/0
```

در ادامه، بایستی در مسیر `lib` (یا اگر که از دایرکتوری src استفاده می‌کنید؛ در مسیر `src/lib`)، یک فایل به نام `redis.js` ایجاد کنید و قطعه کد زیر را در آن، قرار دهید:
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

تمامی کارها انجام شده است و شما می‌توانید با استفاده از قطعه کد مثال زیر در فایل `pages/index.js` (یا `src/pages/index.js`) از دیتابیس خود، استفاده کنید:

```js
import redis from '@/lib/redis';

export default function HomePage({ redisStatus }) {
    return (
        <div>
            <h1>Connection Status</h1>
            {redisStatus}
        </div>
    );
}

export async function getServerSideProps() {
    let redisStatus;

    try {
        await redis.set('test', 'value');
        const value = await redis.get('test');
        redisStatus = value === 'value' ? 'Connected to Redis' : 'Failed to connect to Redis';
    } catch (error) {
        redisStatus = 'Failed to connect to Redis';
    }

    return {
        props: {
            redisStatus,
        },
    };
}
```

در نظر داشته باشید که می‌توانید قطعه کدهای فوق را با توجه به نیاز خود، تغییر دهید.

## App Router

روش‌ها و کتابخانه‌های مختلفی برای اتصال به Redis در NextJS وجود دارد. یکی از این راه‌ها، استفاده از پکیج `ioredis` است که در ابتدا، با اجرای دستور زیر، باید آن را نصب کنید:

```bash
npm install ioredis
```

سپس، کافیست تا در فایل `env.production.` متغیرهای محیطی مربوط به دیتابیس خود را قرار دهید؛ به عنوان مثال:

```bash
DB_URI=redis://:oVj2F980tPjHBHmAOyDdxT2B@bromo.liara.cloud:30236/0
```

در ادامه، بایستی در مسیر `lib` (یا اگر که از دایرکتوری src استفاده می‌کنید؛ در مسیر `src/lib`)، یک فایل به نام `redis.js` ایجاد کنید و قطعه کد زیر را در آن، قرار دهید:
```js
import Redis from 'ioredis';

const redis = new Redis(process.env.DB_URI);

export default redis;
```

تمامی کارها انجام شده است و شما می‌توانید با استفاده از قطعه کد مثال زیر در فایل `app/page.js` (یا `src/app/page.js`) از دیتابیس خود، استفاده کنید:

```js
import redis from '@/lib/redis';

export default async function HomePage() {
    let redisStatus;

    try {
        await redis.set('test', 'value');
        const value = await redis.get('test');
        redisStatus = value === 'value' ? 'Connected to Redis' : 'Failed to connect to Redis';
    } catch (error) {
        redisStatus = 'Failed to connect to Redis';
    }

    return (
        <div>
            <h1>Connection Status</h1>
            {redisStatus}
        </div>
    );
}
```

در نظر داشته باشید که می‌توانید قطعه کدهای فوق را با توجه به نیاز خود، تغییر دهید.

## استفاده از Connection Pooling

مفهوم Connection pooling به معنای استفاده از یک مجموعه اتصالات از پیش ساخته شده برای اتصال به پایگاه داده است. این تکنیک باعث می‌شود به جای ایجاد و بستن مکرر اتصالات، از اتصالات موجود در مجموعه استفاده شود که کارایی را افزایش می‌دهد.
> همچنین بخوانید: [آشنایی بیشتر با قابلیت Connection Pooling](https://docs.liara.ir/dbaas/details/connection-pool)

در Redis نیازی به تنظیمات اضافی برای Connection Pooling نخواهید داشت، زیرا پکیج `ioredis` به طور خودکار اتصالات را مدیریت می‌کند.

## all links

[All links of docs](https://docs.liara.ir/all-links-llms.txt)
