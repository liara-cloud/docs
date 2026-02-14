Original link: https://docs.liara.ir/iaas/ubuntu/how-tos/setup-stack/mean/

# راه‌اندازی استک MEAN

MEAN یک استک توسعه‌ی وب است که از چهار فناوری اصلی MongoDB (پایگاه داده NoSQL)، Express.js (فریم‌ورک وب برای Node.js)، Angular (فریم‌ورک فرانت‌اند) و Node.js (محیط اجرایی جاوااسکریپت) تشکیل شده است. این استک به توسعه‌دهندگان این امکان را می‌دهد که اپلیکیشن‌های وب پویا و مقیاس‌پذیر بسازند.  
در ادامه، نحوه راه‌اندازی استک MEAN در سرور مجازی Ubuntu به‌صورت گام‌به‌گام توضیح داده شده است:

۱. به‌روزرسانی repositoryهای سرور  
با اجرای دستور زیر، repositoryهای سرور را به‌روز کنید:

```js
sudo apt update
```

۲. نصب Node.js و NPM  
با اجرای دستورات زیر، نسخه پایدار LTS از Node.js را نصب کنید:

```js
curl -fsSL https://deb.nodesource.com/setup_lts.x | sudo -E bash -
sudo apt install -y nodejs

```

برای بررسی نصب Node.js و NPM، از دستورات زیر استفاده کنید:

```js
node -v
npm -v
```

۳. نصب MongoDB  
برای نصب MongoDB، در ابتدا، دستور زیر را اجرا کنید:

```js
curl -fsSL https://www.mongodb.org/static/pgp/server-8.0.asc | \
  sudo gpg -o /usr/share/keyrings/mongodb-server-8.0.gpg --dearmor && \
echo "deb [ arch=amd64,arm64 signed-by=/usr/share/keyrings/mongodb-server-8.0.gpg ] \
  https://repo.mongodb.org/apt/ubuntu noble/mongodb-org/8.0 multiverse" | \
  sudo tee /etc/apt/sources.list.d/mongodb-org-8.0.list && \
sudo apt-get update

```

سپس، دستور زیر را اجرا کنید تا MongoDB نصب شود:

```js
sudo apt-get install -y mongodb-org
```

پس از نصب MongoDB، سرویس آن را با دستورات زیر، فعال‌سازی و راه‌اندازی کنید:

```js
sudo systemctl daemon-reload
sudo systemctl start mongod
```

در نهایت، برای اطمینان از اینکه MongoDB به‌درستی نصب شده است، می‌توانید از دستور زیر استفاده کنید:

```js
sudo systemctl status mongod
```

در صورتی که در خروجی دستور فوق، عبارت `active (running)` را مشاهده کردید، به این معنی است که MongoDB به درستی نصب و اجرا شده است.

۴. نصب و راه‌اندازی Express.js  
یک دایرکتوری جدید برای پروژه خود ایجاد کنید و وارد آن شوید:

```js
mkdir mean-app && cd mean-app
```

سپس، با اجرای دستور زیر، یک پروژه جدید Node.js ایجاد کنید:

```js
npm init -y
```

در ادامه، Express.js را نصب کنید:

```js
npm install express --save
```

اکنون، یک فایل جدید به نام `server.js` ایجاد کنید و کد زیر را در آن قرار دهید:

```js
const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Express Server is Running');
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
```

برای اجرای سرور، می‌توانید از دستور زیر استفاده کنید:

```js
node server.js
```

با اجرای کار فوق، سرور اجرا می‌شود و می‌توانید با مراجعه به آدرس `http://YOUR-IP-ADDRESS:3000`، وب‌سرور خود را مشاهده کنید.  
بدیهی است که باید به جای `YOUR-IP-ADDRESS`، آدرس IP سرور خود را قرار دهید.

۵. نصب Angular و ایجاد پروژه جدید با آن  
با اجرای دستور زیر، Angular CLI را نصب کنید:

```js
npm install -g @angular/cli
```

سپس، یک پروژه جدید Angular ایجاد کنید:

```js
ng new client
```

پس از ایجاد پروژه، وارد دایرکتوری آن شوید و سرور Angular را اجرا کنید:

```js
cd client
ng serve --host 0.0.0.0 --port 4200
```

با اجرای کار فوق، سرور Angular اجرا می‌شود و می‌توانید با مراجعه به آدرس `http://YOUR-IP-ADDRESS:4200`، وب‌سرور خود را مشاهده کنید.  
بدیهی است که باید به جای `YOUR-IP-ADDRESS`، آدرس IP سرور خود را قرار دهید.

۶. اتصال Node.js به MongoDB  
برای اتصال Node.js به MongoDB، ابتدا باید `mongoose` را نصب کنید:

```js
npm install mongoose --save
```

سپس، در فایل `server.js`، کد زیر را اضافه کنید:

```js
const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/meanDB', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));
```

اکنون، می‌توانید سرور را دوباره اجرا کنید تا اتصال به دیتابیس، برقرار شود.

۷. ایجاد API با Express  
در فایل `server.js`، یک مدل کاربر ساده ایجاد کنید:

```js
const UserSchema = new mongoose.Schema({
  name: String,
  email: String
});
const User = mongoose.model('User', UserSchema);
```

سپس، یک API ساده برای اضافه کردن کاربر ایجاد کنید:

```js
app.use(express.json());

app.post('/users', async (req, res) => {
  const newUser = new User(req.body);
  await newUser.save();
  res.send(newUser);
});
```

اکنون، سرور را مجدداً با دستور `node server.js`، اجرا کنید.

۸. اتصال Angular به API  
در Angular، با اجرای دستور زیر، یک سرویس جدید ایجاد کنید:

```js
ng generate service user
```

سپس، در فایل `user.service.ts`، کد زیر را اضافه کنید:

```js
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'http://<your-server-ip>:3000/users';

  constructor(private http: HttpClient) { }

  createUser(user: any) {
    return this.http.post(this.apiUrl, user);
  }
}
```

۹. اتصال دامنه به سرور و فعال‌سازی SSL  
برای اتصال دامنه به سرور و فعال‌سازی SSL، می‌توانید از [این راهنما](https://docs.liara.ir/iaas/ubuntu/how-tos/connect-domain/) استفاده کنید.

با اجرای قدم به قدم گام‌های فوق، انتظار می‌رود که استک MEAN به‌درستی بر روی سرور مجازی شما نصب و پیکربندی شده باشد.

## all links

[All links of docs](https://docs.liara.ir/all-links-llms.txt)
