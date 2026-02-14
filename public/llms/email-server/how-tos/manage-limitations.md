Original link: https://docs.liara.ir/email-server/how-tos/manage-limitations/

# مدیریت محدودیت‌ها

برای جلوگیری از ارسال ایمیل هرزنامه، به صورت پیش‌فرض محدودیت‌هایی بر روی تمام سرورهای ایمیل اعمال شده است که می‌توانید این محدودیت‌ها را در بخشی با همین نام در صفحه **تنظیمات** ایمیل‌سرور خود، مشاهده بفرمایید:

![email server](https://media.liara.ir/docs/email-server-limitations.png)

در صورت نیاز، به تعداد ایمیل‌های بیشتر، کافیست تا یک گزارش در بخش مالی ایجاد کنید.

- نسخه 8
- نسخه 10
- نسخه 12
- نسخه 14
- نسخه 16
- نسخه 18
- نسخه 20 (پیش‌فرض)
- نسخه 22

## Liara Console

پس از بارگذاری پروژه خود در لیارا، کافیست تا در مرحله انتخاب نسخه، نسخه مورد نظر برنامه‌تان را انتخاب کنید.  
![how to choose nodejs version in liara console](https://media.liara.ir/docs/choose-nodejs-version.png)

## Liara CLI

برای تغییر نسخه پیش‌فرض، کافیست تا یک فایل به نام `liara.json` در مسیر اصلی پروژه، ایجاد کنید و قطعه کد زیر را درون آن، قرار دهید. قطعه کد زیر برای تغییر نسخه NodeJS به 18 می‌باشد:

```json
{
    "node": {
    "version": "18"
  }
}
```

## all links

[All links of docs](https://docs.liara.ir/all-links-llms.txt)
