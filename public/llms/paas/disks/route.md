Original link: https://docs.liara.ir/paas/disks/route/

# تعریف مسیر برای دیسک

> در نظر داشته باشید که امکان اتصال دیسک به مسیر روت (`/`) وجود <u>ندارد</u> و شما فقط می‌توانید دیسک خود را به یک دایرکتوری مشخص، متصل کنید.

## Liara Console

برای اتصال دیسک به برنامه مدنظرتان، کافیست تا در مرحله دوم استقرار، نام دیسک را انتخاب کنید و مسیر مورد نظرتان را وارد کنید:

![mount disk](https://media.liara.ir/docs/step-2-mount-disk.png)

مسیر دایرکتوری مدنظرتان را می‌توانید هم به صورت نسبی و هم به صورت absolute وارد کنید. به عنوان مثال، در عکس زیر دو دیسک به دو مسیر متفاوت، اولی نسبی و دومی به صورت کامل، متصل است:

![two disks mount](https://media.liara.ir/docs/two-disks-console.png)

در نهایت، پس از استقرار کامل، دیسک مدنظرتان به حالت **در حال استفاده** در خواهد آمد:

![a using disk](https://media.liara.ir/docs/a-using-disk.png)

## Liara CLI

برای اتصال دیسک به دایرکتوری مدنظرتان، کافیست تا در مسیر اصلی پروژه، یک فایل به نام `liara.json` ایجاد کنید.  درون این فایل، باید یک آرایه به نام `disks` ایجاد کنید:

```json
{
    "disks": []
}
```

درون این آرایه، می‌توانید دیسک‌های مدنظرتان را به دایرکتوری‌های مختلف موجود در پروژه، متصل کنید. کافیست برای هر اتصال، یک object جدید باز کنید و در فیلد `name` باید شناسه دیسک  و در فیلد `mountTo` باید مسیری را وارد کنید که قصد دارید دیسک به آن متصل شود؛ به عنوان مثال:

```json
{
    "disks": [
        {
            "name": "media",
            "mountTo": "uploads/media"
        }
    ]
}
```

مسیر دایرکتوری مدنظرتان را می‌توانید هم به صورت نسبی و هم به صورت absolute وارد کنید. به عنوان مثال، در قطعه کد زیر دو دیسک به دو مسیر متفاوت، اولی نسبی و دومی به صورت کامل، متصل است:

```json
{
    "disks": [
        {
            "name": "mydisk1",
            "mountTo": "/app/uploads/media"
        },
        {
            "name": "mydisk2",
            "mountTo": "myfiles/dirs"
        }
    ]
}
```

در نهایت، شما می‌توانید با اجرای دستور `liara deploy` برنامه خود را در لیارا مستقر کنید؛ با این کار، دیسک مدنظرتان به حالت **در حال استفاده** در خواهد آمد:

![a using disk](https://media.liara.ir/docs/a-using-disk.png)


## همچنین بخوانید:

- [اتصال دیسک به برنامه NodeJS](https://docs.liara.ir/paas/nodejs/how-tos/use-disk)
- [اتصال دیسک به برنامه NextJS](https://docs.liara.ir/paas/nextjs/how-tos/use-disk)
- [اتصال دیسک به برنامه Laravel](https://docs.liara.ir/paas/laravel/how-tos/use-disk)
- [اتصال دیسک به برنامه PHP](https://docs.liara.ir/paas/php/how-tos/use-disk)
- [اتصال دیسک به برنامه NET.](https://docs.liara.ir/paas/dotnet/how-tos/use-disk)
- [اتصال دیسک به برنامه Flask](https://docs.liara.ir/paas/flask/how-tos/use-disk)
- [اتصال دیسک به برنامه Django](https://docs.liara.ir/paas/django/how-tos/use-disk)
- [اتصال دیسک به برنامه مبتنی بر Docker](https://docs.liara.ir/paas/docker/how-tos/use-disk)

## all links

[All links of docs](https://docs.liara.ir/all-links-llms.txt)
