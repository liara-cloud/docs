Original link: https://docs.liara.ir/email-server/how-tos/set-spam/

# تنظیم هرزنامه ایمیل‌های دریافتی

اگر که ایمیل دریافتی‌تان در صندوق ورودی، بر اساس [پارامترهای اسپم](https://support.google.com/a/answer/2368132?hl=en)، امتیازی بالای 5 داشته باشد؛ به صورت پیش‌فرض، آن ایمیل، هرزنامه تشخیص داده می‌شود و در بخش **هرزنامه‌ها**، قرار می‌گیرد:

![email server](https://media.liara.ir/docs/incoming-spams.png)

برای تغییر این حد، می‌توانید وارد صفحه **تنظیمات** ایمیل‌سرور خود شوید؛ در بخش **تعیین حد هرزنامه**، عدد هرزنامه را مشخص کنید و در نهایت بر روی **ثبت**، کلیک کنید تا تغییرات، ذخیره شوند:

[Video link](https://media.liara.ir/docs/set-spam-limitations.mp4)

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
