Original link: https://docs.liara.ir/paas/django/how-tos/connect-to-db/sqlite/

# اتصال به دیتابیس SQLite در برنامه‌های Django

[Video link](https://media.liara.ir/django/django-sqlite.mp4)

برای اتصال موفق به دیتابیس SQLite در برنامه‌های Django کافیست تا گام‌های زیر را طی کنید:

۱. تنظیم فایل `settings.py`

در ابتدا، بایستی در فایل `settings.py` در بخش `DATABASES` قطعه کد مربوط به دیتابیس SQLite را وارد کنید:

```python
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.sqlite3',
        'NAME': BASE_DIR / 'database' / 'db.sqlite3',
    }
}
```

در قطعه کد فوق، دایرکتوری `database` به عنوان دایرکتوری دیتابیس، مشخص شده است.

۲. ایجاد و پیکربندی فایل `liara_pre_start.sh`

در مسیر اصلی پروژه، یک فایل به نام `liara_pre_start.sh` ایجاد کنید و قطعه کد زیر را در آن قرار دهید تا عملیات migrate به صورت خودکار در دیتابیس‌تان اعمال شود:

```bash
mkdir database;
python manage.py migrate;
```

> همچنین بخوانید: [استفاده از Hookها در Django](../../use-hooks)

۳. ایجاد دیسک برای دیتابیس  
[طبق مستندات ایجاد دیسک](https://docs.liara.ir/paas/disks/create)،  در بخش **دیسک‌ها** برنامه خود در لیارا، یک دیسک جدید با نام `database` و اندازه مدنظرتان ایجاد کنید.

۴. ایجاد و پیکربندی فایل liara.json  
در مسیر اصلی پروژه، یک فایل به نام `liara.json` ایجاد کنید و قطعه کد زیر را، درون آن، قرار دهید:

```json
{
    "disks":[
        {
            "name": "database",
            "mountTo": "database"
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
