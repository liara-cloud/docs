Original link: https://docs.liara.ir/email-server/how-tos/add-account/

# اضافه کردن نشانی

برای ارسال یا دریافت ایمیل، شما نیاز به یک نشانی خواهید داشت. برای اضافه کردن نشانی به ایمیل‌سرور خود 
کافیست تا وارد صفحه **نشانی‌ها** در ایمیل‌سرور خود شوید و بر روی گزینه **افزودن نشانی** کلیک کنید. نشانی خود را وارد کرده و در صورت قابل قبول بودن نشانی، بر روی گزینه **افزودن نشانی**، کلیک کنید:

![add account to email server](https://media.liara.ir/docs/add-email-server-account.gif)

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
