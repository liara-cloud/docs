Original link: https://docs.liara.ir/dbaas/redis/how-tos/connect-via-platform/nodejs/

# اتصال به دیتابیس Redis در برنامه‌های NodeJS

برای اتصال به دیتابیس Redis می‌توانید از پکیج `ioredis` استفاده کنید، برای نصب این پکیج، کافیست تا در مسیر اصلی پروژه خود، دستور زیر را اجرا کنید:

```bash
npm install ioredis
```

پس از آن، کافیست تا  
اطلاعات مربوط به دیتابیس خود را  
به متغیرهای محیطی برنامه خود، اضافه کنید؛ به عنوان مثال:

```bash
REDIS_URI=redis://:5afOLXDmJXOIbzLi95BKfCD2@monte-rosa.liara.cloud:32609/0
```

اکنون، می‌توانید متغیر محیطی را در برنامه خود خوانده و به دیتابیس متصل شوید؛ در ادامه، یک قطعه کد مثال برای  
اتصال به دیتابیس با استفاده از فریم‌ورک `express` و موتور `ejs` برای شما، قرار گرفته است:

قطعه کد مربوطه برای فایل `index.js`:

```js
const express = require('express');
const Redis = require('ioredis');
const path = require('path');

const redisUri = process.env.REDIS_URI;
const redis = new Redis(redisUri);

redis.on('connect', () => {
  console.log('Connected to Redis');
});

redis.on('error', (err) => {
  console.error('Redis connection error:', err);
});

const app = express();
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.render('index', { connected: redis.status === 'ready' });
});

app.post('/store', async (req, res) => {
  const { key, value } = req.body;

  try {
    await redis.set(key, value);
    res.redirect('/');
  } catch (err) {
    console.error('Error storing data in Redis:', err);
    res.status(500).send('Error storing data in Redis');
  }
});

app.post('/retrieve', async (req, res) => {
  const { key } = req.body;

  try {
    const value = await redis.get(key);
    res.render('index', { connected: redis.status === 'ready', retrievedData: value });
  } catch (err) {
    console.error('Error retrieving data from Redis:', err);
    res.status(500).send('Error retrieving data from Redis');
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
```

قطعه کد مربوطه برای فایل `views/index.ejs`:

```ejs
<!DOCTYPE html>
<html lang="en">

<body>
  <h1>Redis Connection Status: <%= connected ? 'Connected' : 'Disconnected' %></h1>
  <form action="/store" method="post">
    <label for="key">Key:</label>
    <input type="text" id="key" name="key" required>
    <label for="value">Value:</label>
    <input type="text" id="value" name="value" required>
    <button type="submit">Store Data</button>
  </form>
  <form action="/retrieve" method="post">
    <label for="retrieveKey">Key:</label>
    <input type="text" id="retrieveKey" name="key" required>
    <button type="submit">Retrieve Data</button>
  </form>
  <% if (typeof retrievedData !== 'undefined') { %>
    ## Retrieved Data: <%= retrievedData %>
  <% } %>
</body>
</html>
```

## all links

[All links of docs](https://docs.liara.ir/all-links-llms.txt)
