Original link: https://docs.liara.ir/paas/flask/how-tos/connect-to-db/sqlite/

# اتصال به دیتابیس SQLite در برنامه‌های Flask

برای اتصال موفق به دیتابیس SQLite در برنامه‌های Flask کافیست تا گام‌های زیر را طی کنید:

۱. ایجاد دایرکتوری دیتابیس

در ابتدا، در مسیر اصلی پروژه، یک دایرکتوری به نام `db` ایجاد کنید. این دایرکتوری،  
محل ذخیره فایل دیتابیس، خواهد بود.

۲. قرار دادن قطعه کد‌های مربوط به دیتابیس  
در فایل `app.py` و یا به صورت کلی، ماژول اصلی برنامه خود، قطعه کد زیر را، اضافه کنید:

```python
import sqlite3
from flask import Flask, g

DATABASE = 'db/database.db'
db_name  = DATABASE.rsplit('/')[-1]

app = Flask(__name__)

def get_db():
    db = getattr(g, '_database', None)
    if db is None:
        db = g._database = sqlite3.connect(DATABASE)
    return db

@app.teardown_appcontext
def close_connection(exception):
    db = getattr(g, '_database', None)
    if db is not None:
        db.close()

@app.route('/')
def index():
    cur = get_db().cursor()
    if cur:
        return f'connected to {db_name} successfully!'
    return 'not connected!'

if __name__ == '__main__':
    app.run(debug=True)
```

۳. ایجاد دیسک برای دیتابیس  
[طبق مستندات ایجاد دیسک](https://docs.liara.ir/paas/disks/create)،  در بخش **دیسک‌ها** برنامه خود در لیارا، یک دیسک جدید با نام `database` و اندازه مدنظرتان ایجاد کنید.

۴. ایجاد و پیکربندی فایل liara.json  
در مسیر اصلی پروژه، یک فایل به نام `liara.json` ایجاد کنید و قطعه کد زیر را، درون آن، قرار دهید:  
```json
{
    "disks":[
        {
            "name": "database",
            "mountTo": "db"
        }
    ]
}
```

۵. استقرار برنامه در لیارا  
برنامه خود را با استفاده از دستور `liara deploy` در لیارا مستقر کنید.

البته در نظر داشته باشید که استفاده از دیتابیس SQLite بیشتر برای وب‌سایت‌های کوچک با پردازش‌های کم مناسب است و  
در مقیاس بالا، بهتر است که از دیتابیس‌های دیگری استفاده کنید.

## استفاده از Connection Pooling  
در نظر داشته باشید که SQLite از قابلیت Connection Pooling پشتیبانی نمی‌کند؛ چرا که SQLite یک دیتابیس فایل‌محور است و نیازی به connection pooling ندارد. هر اتصال به فایل دیتابیس مستقل از دیگر اتصالات است و SQLite به طور خودکار این اتصالات را، مدیریت می‌کند.

## all links

[All links of docs](https://docs.liara.ir/all-links-llms.txt)
