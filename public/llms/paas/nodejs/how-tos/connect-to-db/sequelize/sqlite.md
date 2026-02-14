Original link: https://docs.liara.ir/paas/nodejs/how-tos/connect-to-db/sequelize/sqlite/

# اتصال به دیتابیس SQLite با استفاده از Sequelize

برای اتصال موفق به دیتابیس SQLite در برنامه‌های NodeJS کافیست تا گام‌های زیر را طی کنید:

۱. نصب ماژول‌های موردنیاز  
ماژول مربوط به `sequelize` و دیتابیس `SQLite` را با اجرای دستور زیر، نصب کنید:

```bash
npm install --save sequelize sqlite3
```

۲. درج قطعه کد راه‌اندازی و اتصال به SQLite  
با استفاده از قطعه کد زیر، به دیتابیس SQLite متصل شوید (حتماً دیتابیس باید درون یک دایرکتوری باشد، می‌توانید نام دایرکتوری و دیتابیس را در قطعه کد زیر، تغییر دهید):
```js
const express = require('express');
const { Sequelize } = require('sequelize');

const app = express();
const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: 'db/database.sqlite',
    logging: (...msg) => console.log(msg),
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
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

۳. ایجاد دیسک برای دیتابیس  
[طبق مستندات ایجاد دیسک](https://docs.liara.ir/paas/disks/create)،  در بخش **دیسک‌ها** برنامه خود در لیارا، یک دیسک جدید با نام `database` و اندازه مدنظرتان ایجاد کنید.

۴. ایجاد و پیکربندی فایل liara.json  
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

۵. استقرار برنامه در لیارا  
برنامه خود را با استفاده از دستور `liara deploy` در لیارا مستقر کنید.

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

البته در نظر داشته باشید که استفاده از دیتابیس SQLite بیشتر برای وب‌سایت‌های کوچک با پردازش‌های کم مناسب است و  
در مقیاس بالا، بهتر است که از دیتابیس‌های دیگری استفاده کنید.  

## all links

[All links of docs](https://docs.liara.ir/all-links-llms.txt)
