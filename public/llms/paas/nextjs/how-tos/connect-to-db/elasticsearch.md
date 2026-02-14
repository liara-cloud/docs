Original link: https://docs.liara.ir/paas/nextjs/how-tos/connect-to-db/elasticsearch/

# اتصال به دیتابیس ElasticSearch در برنامه‌های NextJS

## Pages Router

روش‌ها و کتابخانه‌های مختلفی برای اتصال به ElasticSearch در NextJS وجود دارد. یکی از این راه‌ها، استفاده از پکیج `elasticsearch` است که در ابتدا، با اجرای دستور زیر، باید آن را نصب کنید:

```bash
npm install @elastic/elasticsearch
```

سپس، کافیست تا در فایل `env.production.` متغیرهای محیطی مربوط به دیتابیس خود را قرار دهید؛ به عنوان مثال:

```bash
DB_URI=http://elastic:vrA24CewJsSRdlMgyN2fok1q@bromo.liara.cloud:33172/
```

در ادامه، بایستی در مسیر `lib` (یا اگر که از دایرکتوری src استفاده می‌کنید؛ در مسیر `src/lib`)، یک فایل به نام `elasticsearch.js` ایجاد کنید و قطعه کد زیر را در آن، قرار دهید:
```js
import { Client } from '@elastic/elasticsearch';

const client = new Client({
    node: process.env.DB_URI
});

export default client;

```

تمامی کارها انجام شده است و شما می‌توانید با استفاده از قطعه کد مثال زیر در فایل `pages/index.js` (یا `src/pages/index.js`) از دیتابیس خود، استفاده کنید:

```js
import elasticClient from '@/lib/elasticsearch';

export default function HomePage({ elasticStatus }) {
    return (
        <div>
            <h1>Connection Status</h1>
            {elasticStatus}
        </div>
    );
}

export async function getServerSideProps() {
    let elasticStatus;

    try {
        const info = await elasticClient.info();
        elasticStatus = info ? 'Connected to ElasticSearch' : 'Failed to connect to ElasticSearch';
    } catch (error) {
        elasticStatus = 'Failed to connect to ElasticSearch';
    }

    return {
        props: {
            elasticStatus,
        },
    };
}

```

در نظر داشته باشید که می‌توانید قطعه کدهای فوق را با توجه به نیاز خود، تغییر دهید.

## App Router

روش‌ها و کتابخانه‌های مختلفی برای اتصال به ElasticSearch در NextJS وجود دارد. یکی از این راه‌ها، استفاده از پکیج `elasticsearch` است که در ابتدا، با اجرای دستور زیر، باید آن را نصب کنید:

```bash
npm install @elastic/elasticsearch
```

سپس، کافیست تا در فایل `env.production.` متغیرهای محیطی مربوط به دیتابیس خود را قرار دهید؛ به عنوان مثال:

```bash
DB_URI=http://elastic:vrA24CewJsSRdlMgyN2fok1q@bromo.liara.cloud:33172/
```

در ادامه، بایستی در مسیر `lib` (یا اگر که از دایرکتوری src استفاده می‌کنید؛ در مسیر `src/lib`)، یک فایل به نام `elasticsearch.js` ایجاد کنید و قطعه کد زیر را در آن، قرار دهید:
```js
import { Client } from '@elastic/elasticsearch';

const client = new Client({
    node: process.env.DB_URI
});

export default client;

```

تمامی کارها انجام شده است و شما می‌توانید با استفاده از قطعه کد مثال زیر در فایل `app/page.js` (یا `src/app/page.js`) از دیتابیس خود، استفاده کنید:

```js
import elasticClient from '@/lib/elasticsearch';

export default async function HomePage() {
    let elasticStatus;

    try {
        const info = await elasticClient.info();
        elasticStatus = info ? 'Connected to ElasticSearch' : 'Failed to connect to ElasticSearch';
    } catch (error) {
        elasticStatus = 'Failed to connect to ElasticSearch';
    }

    return (
        <div>
            <h1>Connection Status</h1>
            {elasticStatus}
        </div>
    );
}

```

در نظر داشته باشید که می‌توانید قطعه کدهای فوق را با توجه به نیاز خود، تغییر دهید.

## استفاده از Connection Pooling

مفهوم Connection pooling به معنای استفاده از یک مجموعه اتصالات از پیش ساخته شده برای اتصال به پایگاه داده است. این تکنیک باعث می‌شود به جای ایجاد و بستن مکرر اتصالات، از اتصالات موجود در مجموعه استفاده شود که کارایی را افزایش می‌دهد.
> همچنین بخوانید: [آشنایی بیشتر با قابلیت Connection Pooling](https://docs.liara.ir/dbaas/details/connection-pool)

در پکیج `elasticsearch` این قابلیت به صورت خودکار تعبیه شده است و شما می‌توانید در فایل `lib/elasticsearch.js` (یا `src/lib/elasticsearch.js`) حین اتصال به دیتابیس پارامتر‌های زیر را بر اساس نیاز خود، مقدار دهی کنید:

```js
import { Client } from '@elastic/elasticsearch';

const client = new Client({
    node: process.env.DB_URI,
    maxRetries: 5,
    requestTimeout: 60000,
    sniffOnStart: true
});

export default client;

```

## all links

[All links of docs](https://docs.liara.ir/all-links-llms.txt)
