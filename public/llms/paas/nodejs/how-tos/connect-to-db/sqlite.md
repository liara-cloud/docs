Original link: https://docs.liara.ir/paas/nodejs/how-tos/connect-to-db/sqlite/

# اتصال به دیتابیس SQLite در برنامه‌های NodeJS

[Video link](https://media.liara.ir/nodejs/nodejs-sqlite.mp4)


برای اتصال موفق به دیتابیس SQLite در برنامه‌های NodeJS کافیست تا گام‌های زیر را طی کنید:


۱. نصب ماژول SQLite  
با اجرای دستور زیر، ماژول مورد نیاز SQLite را نصب کنید:
```bash
npm install sqlite3
```

۲. ایجاد دایرکتوری db  
در مسیر اصلی پروژه، یک دایرکتوری به نام `db` (یا هر نام دلخواه دیگری) ایجاد کنید.

۳. درج قطعه کد راه‌اندازی و اتصال به SQLite  
برای راه‌اندازی و اتصال به دیتابیس، می‌توانید از قطعه کد زیر در برنامه اصلی خود، استفاده کنید (همچنین، می‌توانید آن را با توجه به نیاز خود، تغییر دهید):
```js
const express = require('express');
const sqlite3 = require('sqlite3').verbose();

const app = express();
const db = new sqlite3.Database('db/database.db');

db.serialize(() => {
  db.run("CREATE TABLE IF NOT EXISTS lorem (info TEXT)");
  const stmt = db.prepare("INSERT INTO lorem VALUES (?)");
  for (let i = 0; i < 10; i++) {
      stmt.run("Ipsum " + i);
  }
  stmt.finalize();
});

app.once('started', () => {
  app.get('/', async (req, res) => {
    db.all("SELECT rowid AS id, info FROM lorem", (err, rows) => {
      if (err) {
        return res.status(500).send('Error retrieving data from database');
      }
      res.send(rows.map(row => `${row.id}: ${row.info}`).join('<br>'));
    });
  });
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
  app.emit('started');
});
```

۴. ایجاد دیسک برای دیتابیس  
[طبق مستندات ایجاد دیسک](https://docs.liara.ir/paas/disks/create)،  در بخش **دیسک‌ها** برنامه خود در لیارا، یک دیسک جدید با نام `database` و اندازه مدنظرتان ایجاد کنید.

۵. ایجاد و پیکربندی فایل liara.json  
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

۶. استقرار برنامه در لیارا  
برنامه خود را با استفاده از دستور `liara deploy` در لیارا مستقر کنید.


البته در نظر داشته باشید که استفاده از دیتابیس SQLite بیشتر برای وب‌سایت‌های کوچک با پردازش‌های کم مناسب است و  
در مقیاس بالا، بهتر است که از دیتابیس‌های دیگری استفاده کنید.  

## all links

[All links of docs](https://docs.liara.ir/all-links-llms.txt)
