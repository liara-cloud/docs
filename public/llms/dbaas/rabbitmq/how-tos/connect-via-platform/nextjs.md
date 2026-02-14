Original link: https://docs.liara.ir/dbaas/rabbitmq/how-tos/connect-via-platform/nextjs/

# اتصال به RabbitMQ در برنامه‌های NextJS

## Pages Router

روش‌ها و کتابخانه‌های مختلفی برای اتصال به RabbitMQ در NextJS وجود دارد. یکی از این راه‌ها، استفاده از پکیج `amqplib` است که در ابتدا، با اجرای دستور زیر، باید آن را نصب کنید:

```bash
npm install amqplib
```

پس از آن، کافیست تا  
اطلاعات مربوط به دیتابیس خود را  
به متغیرهای محیطی برنامه خود، اضافه کنید (در حالت development، در فایل `env.local.` و در حالت production، در فایل `env.production.`)؛ به عنوان مثال:

```bash
RABBITMQ_HOST=fitz-roy.liara.cloud
RABBITMQ_PORT=32923
RABBITMQ_USER=root
RABBITMQ_PASS=63LVuatIrWWajE7gxSj20gHL

```

در ادامه، کافیست تا در مسیر `pages/api` (یا `src/pages/api`) یک فایل جدید به نام `check-rabbitmq.js` ایجاد کنید و قطعه کد زیر را، در آن، قرار دهید:
```js
import amqp from 'amqplib';

const rabbitConfig = {
  protocol: 'amqp',
  hostname: process.env.RABBITMQ_HOST,
  port: parseInt(process.env.RABBITMQ_PORT, 10),
  username: process.env.RABBITMQ_USER,
  password: process.env.RABBITMQ_PASS,
};

export default async function handler(req, res) {
  try {
    const connection = await amqp.connect(rabbitConfig);
    await connection.close();
    res.status(200).json({ message: 'connection successful' });
  } catch (error) {
    res.status(500).json({ message: 'connection failed!', error: error.message });
  }
}

```

تمامی کارها، انجام شده است و شما می‌توانید با مراجعه به صفحه `api/check-rabbitmq/`، اتصال خود به RabbitMQ را، بررسی کنید.

## App Router

روش‌ها و کتابخانه‌های مختلفی برای اتصال به RabbitMQ در NextJS وجود دارد. یکی از این راه‌ها، استفاده از پکیج `amqplib` است که در ابتدا، با اجرای دستور زیر، باید آن را نصب کنید:

```bash
npm install amqplib
```

پس از آن، کافیست تا  
اطلاعات مربوط به دیتابیس خود را  
به متغیرهای محیطی برنامه خود، اضافه کنید (در حالت development، در فایل `env.local.` و در حالت production، در فایل `env.production.`)؛ به عنوان مثال:

```bash
RABBITMQ_HOST=fitz-roy.liara.cloud
RABBITMQ_PORT=32923
RABBITMQ_USER=root
RABBITMQ_PASS=63LVuatIrWWajE7gxSj20gHL

```

در ادامه، کافیست تا در مسیر `app/api` (یا `src/app/api`) یک پوشه و یک فایل جدید به نام `check-rabbitmq/route.js` ایجاد کنید و قطعه کد زیر را، در آن، قرار دهید:
```js
import amqp from 'amqplib';

const rabbitConfig = {
  protocol: 'amqp',
  hostname: process.env.RABBITMQ_HOST,
  port: parseInt(process.env.RABBITMQ_PORT, 10),
  username: process.env.RABBITMQ_USER,
  password: process.env.RABBITMQ_PASS,
};

export async function GET() {
  try {
    const connection = await amqp.connect(rabbitConfig);
    await connection.close();
    return new Response(JSON.stringify({ message: 'connection successful' }), {
      status: 200,
    });
  } catch (error) {
    return new Response(
      JSON.stringify({ message: 'connection failed', error: error.message }),
      { status: 500 }
    );
  }
}

```

تمامی کارها، انجام شده است و شما می‌توانید با مراجعه به صفحه `api/check-rabbitmq/`، اتصال خود به RabbitMQ را، بررسی کنید.

## all links

[All links of docs](https://docs.liara.ir/all-links-llms.txt)
