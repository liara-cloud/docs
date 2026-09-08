Original link: https://docs.liara.ir/dbaas/clickhouse/how-tos/connect-via-platform/nextjs/

# اتصال به دیتابیس ClickHouse در برنامه‌های NextJS

روش‌ها و کتابخانه‌های مختلفی برای اتصال به ClickHouse در NextJS وجود دارد. یکی از این راه‌ها، استفاده از پکیج `clickhouse` است که در ابتدا، با اجرای دستور زیر، باید آن را نصب کنید:

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
NEXT_PUBLIC_APP_URL=http://localhost:3000 # replace it on production
```

اکنون، می‌توانید متغیرهای محیطی را در برنامه خود خوانده و به دیتابیس متصل شوید؛ برای ساخت کلاینت ClickHouse، کافیست در مسیر `lib/clickhouse.ts`، قطعه کد زیر را قرار دهید:

```js
import { createClient } from '@clickhouse/client';

export const clickhouse = createClient({
      host: process.env.CLICKHOUSE_HOST!,
      username: process.env.CLICKHOUSE_USER!,
      password: process.env.CLICKHOUSE_PASSWORD!,
      max_open_connections: 10,
      request_timeout: 10000,
});
```

اکنون، برای ساخت API Route تنها کافیست تا در مسیر `app/api/clickhouse/route.ts` قطعه کد زیر را قرار دهید: 

```js
import { NextResponse } from 'next/server';
import { clickhouse } from '@/lib/clickhouse';

export async function GET() {
  try {
    await clickhouse.query({
      query: 'SELECT 1',
      format: 'JSONEachRow',
    });

    return NextResponse.json({
      success: true,
      message: 'ClickHouse connection successful',
    });
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message: 'ClickHouse connection failed',
      },
      { status: 500 }
    );
  }
}
```

در نهایت، کافیست تا در مسیر `app/clickhouse-test/page.tsx`، قطعه کد زیر را قرار دهید: 

```js
export default async function ClickHouseTestPage() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_APP_URL}/api/clickhouse`,
    {
      cache: 'no-store',
    }
  );

  const data = await res.json();

  return (
    <main>
      <h1>ClickHouse Status</h1>

      {JSON.stringify(data, null, 2)}
      </pre>
    </main>
  );
}
```

تمامی کارها انجام شده است و اکنون، می‌توانید در مسیر `clickhouse-test/` در مرورگر، تست اتصال به دیتابیس ClickHouse را بررسی کنید. 

> مثال فوق از اتصال به دیتابیس را می‌توانید به صورت کامل در [گیت‌هاب لیارا](https://github.com/liara-cloud/clickhouse-connect-examples/tree/nextjs)، مشاهده کنید.

## all links

[All links of docs](https://docs.liara.ir/all-links-llms.txt)
