Original link: https://docs.liara.ir/dbaas/rabbitmq/how-tos/connect-via-platform/nodejs/

# اتصال به RabbitMQ در برنامه‌های NodeJS

روش‌ها و کتابخانه‌های مختلفی برای اتصال به RabbitMQ در NodeJS وجود دارد. یکی از این راه‌ها، استفاده از پکیج `amqplib` است که در ابتدا، با اجرای دستور زیر، باید آن را نصب کنید:

```bash
npm install amqplib
```

پس از آن، کافیست تا  
اطلاعات مربوط به دیتابیس خود را  
به متغیرهای محیطی برنامه خود، اضافه کنید؛ به عنوان مثال:

```bash
RABBITMQ_HOST=fitz-roy.liara.cloud
RABBITMQ_PORT=32923
RABBITMQ_USER=root
RABBITMQ_PASS=63LVuatIrWWajE7gxSj20gHL

```

اکنون، می‌توانید متغیرهای محیطی را در برنامه خود خوانده و به RabbitMQ متصل شوید؛ در ادامه، یک قطعه کد مثال برای  
اتصال به RabbitMQ  
برای شما، قرار گرفته است:

```js
const amqp = require('amqplib');
// require('dotenv').config(); // in local, run \`npm install dotenv\` and uncomment this line if needed

const rabbitConfig = {
    protocol: 'amqp',
    hostname: process.env.RABBITMQ_HOST,
    port: parseInt(process.env.RABBITMQ_PORT, 10),
    username: process.env.RABBITMQ_USER,
    password: process.env.RABBITMQ_PASS,
  };

async function checkRabbitMQConnection() {
  try {
    const connection = await amqp.connect(rabbitConfig);
    console.log('connection successful');
    await connection.close(); 
  } catch (error) {
    console.error('connection failed! error:', error.message);
  }
}

checkRabbitMQConnection();

```

## all links

[All links of docs](https://docs.liara.ir/all-links-llms.txt)
