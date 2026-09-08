Original link: https://docs.liara.ir/dbaas/clickhouse/how-tos/connect-via-platform/nodejs/

# اتصال به دیتابیس ClickHouse در برنامه‌های NodeJS

روش‌ها و کتابخانه‌های مختلفی برای اتصال به ClickHouse در NodeJS وجود دارد. یکی از این راه‌ها، استفاده از پکیج `clickhouse` است که در ابتدا، با اجرای دستور زیر، باید آن را نصب کنید:

```bash
npm install @clickhouse/client
```

پس از آن، کافیست تا  
اطلاعات مربوط به دیتابیس خود را  
به متغیرهای محیطی برنامه خود، اضافه کنید؛ به عنوان مثال:

```bash
CLICKHOUSE_HOST=http://rainier.liara.cloud:33273
CLICKHOUSE_USER=root
CLICKHOUSE_PASSWORD=x4y2LJvdFyG5wVO87VbXDrpg
```

اکنون، می‌توانید متغیرهای محیطی را در برنامه خود خوانده و به دیتابیس متصل شوید؛ در ادامه، یک قطعه کد مثال برای  
اتصال به دیتابیس برای شما، قرار گرفته است:

```js
require('dotenv').config();

const { createClient } = require('@clickhouse/client');

const client = createClient({
      url: process.env.CLICKHOUSE_HOST,
      username: process.env.CLICKHOUSE_USER,
      password: process.env.CLICKHOUSE_PASSWORD,
      request_timeout: 10000,
});

async function connect() {
  try {
    await client.query({
      query: 'SELECT 1',
      format: 'JSONEachRow',
    });

    console.log('ClickHouse connection successful');
  } catch (error) {
    console.error('ClickHouse connection failed');
    process.exit(1);
  }
}

connect();
```

> مثال فوق از اتصال به دیتابیس را می‌توانید به صورت کامل در [گیت‌هاب لیارا](https://github.com/liara-cloud/clickhouse-connect-examples/tree/nodejs)، مشاهده کنید.

## all links

[All links of docs](https://docs.liara.ir/all-links-llms.txt)
