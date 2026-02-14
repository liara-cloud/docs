Original link: https://docs.liara.ir/dbaas/mongodb/how-tos/connect-via-platform/nodejs/

# اتصال به دیتابیس MongoDB در برنامه‌های NodeJS

برای اتصال به دیتابیس MongoDB، می‌توانید از پکیج `mongoose` استفاده کنید، برای نصب این پکیج، کافیست تا در مسیر اصلی پروژه خود، دستور زیر را اجرا کنید:

```bash
npm install mongoose
```

پس از آن، کافیست تا  
اطلاعات مربوط به دیتابیس خود را  
به متغیرهای محیطی برنامه خود، اضافه کنید؛ به عنوان مثال:

```bash
MONGODB_URI=mongodb://root:fWy9QPKw8CxTUGCMd6esZSlu@mongo:27017/my-app?authSource=admin
```

اکنون، می‌توانید متغیر محیطی را در برنامه خود خوانده و به دیتابیس متصل شوید؛ در ادامه، یک قطعه کد مثال برای  
اتصال به دیتابیس با استفاده از فریم‌ورک `express` برای شما، قرار گرفته است:

```js
const express = require('express');
const mongoose = require('mongoose');

const app = express();

mongoose.connect(process.env.MONGODB_URI, {
})
.then(() => {
  console.log('connected to db successfully');
})
.catch((err) => {
  console.error('error in connecting to db:', err);
});


app.get('/', (req, res) => {
  res.send(mongoose.connection.readyState === 1 ? 'connection to db successfull' : 'error in connecting to db');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`server is listening on port ${PORT}`);
});

process.on('SIGINT', () => {
  mongoose.connection.close(() => {
    console.log('db disconnected.');
    process.exit();
  });
});
```

## استفاده از Connection Pooling

مفهوم Connection pooling به معنای استفاده از یک مجموعه اتصالات از پیش ساخته شده برای اتصال به پایگاه داده است. این تکنیک باعث می‌شود به جای ایجاد و بستن مکرر اتصالات، از اتصالات موجود در مجموعه استفاده شود که کارایی را افزایش می‌دهد.  
> همچنین بخوانید: [آشنایی بیشتر با قابلیت Connection Pooling](https://docs.liara.ir/dbaas/details/connection-pool)

برای استفاده از این قابلیت در دیتابیس MongoDB نیاز به انجام کار خاصی نیست؛ چرا که پکیج `mongoose` به صورت خودکار، از این قابلیت، پشتیبانی می‌کند. صرفاً کافیست تا در آپشن‌های اتصال به دیتابیس، مقدار فیلد `maxPoolSize` را مشخص کنید:

```js
const express = require('express');
const mongoose = require('mongoose');

const app = express();

// Create a connection pool
const dbOptions = {
  maxPoolSize: 10, // Set the pool size as needed
};

mongoose.connect(process.env.MONGODB_URI, dbOptions)
  .then(() => {
    console.log('connected to db successfully');
  })
  .catch((err) => {
    console.error('error in connecting to db:', err);
  });

app.get('/', (req, res) => {
  res.send(mongoose.connection.readyState === 1 ? 'connection to db successful' : 'error in connecting to db');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`server is listening on port ${PORT}`);
});
```

## all links

[All links of docs](https://docs.liara.ir/all-links-llms.txt)
