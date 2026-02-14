Original link: https://docs.liara.ir/paas/nodejs/how-tos/connect-to-db/sequelize/postgresql/

# اتصال به دیتابیس PostgreSQL با استفاده از Sequelize

در ابتدا، بایستی ماژول‌های مربوط به `sequelize` و دیتابیس `PostgreSQL` را با اجرای دستور زیر، نصب کنید:

```bash
sequelize pg pg-hstore
```

پس از آن، کافیست تا طبق [مستندات تنظیم متغیرهای محیطی](https://docs.liara.ir/paas/details/envs) اطلاعات مربوط به دیتابیس خود را وارد کنید. به عنوان مثال:

```bash
PG_URI=postgresql://root:IcAQA5ohOTrbwqOmMCSNJzyS@pgoo:5432/postgres
```

در نهایت، می‌توانید متغیر محیطی را در برنامه خوانده و به دیتابیس خود، متصل شوید؛ قطعه کد زیر، یک مثال از اتصال به دیتابیس در فریم‌ورک `express` است:

```js
const express = require('express');
const { Sequelize } = require('sequelize');

const app = express();
const sequelize = new Sequelize(process.env.PG_URI, {
    logging: (...msg) => console.log(msg)
}); 

async function testDatabaseConnection() {
  try {
    await sequelize.authenticate();
    return 'Connection has been established successfully.';
  } catch (error) {
    return `Unable to connect to the database: ${error}`;
  }
}

app.get('/', async (req, res) => {
  const result = await testDatabaseConnection();
  res.send(result);
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
```

## استفاده از Connection Pooling

مفهوم Connection pooling به معنای استفاده از یک مجموعه اتصالات از پیش ساخته شده برای اتصال به پایگاه داده است. این تکنیک باعث می‌شود به جای ایجاد و بستن مکرر اتصالات، از اتصالات موجود در مجموعه استفاده شود که کارایی را افزایش می‌دهد.  
> همچنین بخوانید: [آشنایی بیشتر با قابلیت Connection Pooling](https://docs.liara.ir/dbaas/details/connection-pool)

در قطعه کد فوق، قابلیت Conneciton Pooling، تعبیه شده است؛ البته اگر که قصد دارید تا مقادیر آن را خودتان پیکربندی کنید، کافیست که قطعه کد زیر را به برنامه خود، اضافه کنید:

```js
const sequelize = new Sequelize(/* database confs */, {
  // other confs
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
});
```

## لاگ‌گیری دیتابیس

با استفاده از قطعه کد زیر، لاگ‌های کامل مربوط به دیتابیس، در بخش [گزارشات نرم‌افزار برنامه](https://docs.liara.ir/paas/details/observations/software)، به شما نمایش داده می‌شود:

```js
logging: (...msg) => console.log(msg),
```

اگر که قصد دارید از loggerهای دیگری مثل `Winston` استفاده کنید؛ کافیست تا کد زیر را جایگزین قطعه کد فوق، کنید:

```js
logging: msg => logger.debug(msg),
```

## all links

[All links of docs](https://docs.liara.ir/all-links-llms.txt)
