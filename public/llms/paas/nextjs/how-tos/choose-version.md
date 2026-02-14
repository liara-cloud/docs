Original link: https://docs.liara.ir/paas/nextjs/how-tos/choose-version/

# نسخه NodeJS در پلتفرم NextJS

در حال حاضر در لیارا، نسخه‌های زیر از NodeJS در پلتفرم NextJS ارائه می‌شود:

- نسخه 20  
- نسخه 22 (پیش‌فرض)  
- نسخه 24

## تغییر نسخه پیش‌فرض

### Liara Console

پس از بارگذاری پروژه خود در لیارا، کافیست تا در مرحله انتخاب نسخه، نسخه مورد نظر برنامه‌تان را انتخاب کنید.  
![how to choose nodejs version in liara console](https://media.liara.ir/docs/change-nodejs-version-of-nextjs.png)

### Liara CLI

برای تغییر نسخه پیش‌فرض، کافیست تا یک فایل به نام `liara.json` در مسیر اصلی پروژه، ایجاد کنید و قطعه کد زیر را درون آن، قرار دهید. قطعه کد زیر برای تغییر نسخه NodeJS به 22 می‌باشد:

```json
{
    "next": {
    "nodeVersion": "22"
  }
}
```

### Github

برای تغییر نسخه پیش‌فرض، کافیست تا یک فایل به نام `liara.json` در مسیر اصلی پروژه، ایجاد کنید و قطعه کد زیر را درون آن، قرار دهید. قطعه کد زیر برای تغییر نسخه NodeJS به 22 می‌باشد:

```json
{
    "next": {
    "nodeVersion": "22"
  }
}
```

## all links

[All links of docs](https://docs.liara.ir/all-links-llms.txt)
