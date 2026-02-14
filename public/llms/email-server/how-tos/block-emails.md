Original link: https://docs.liara.ir/email-server/how-tos/block-emails/

# مسدودسازی ایمیل‌های ورودی

شما می‌توانید یک آدرس ایمیل یا حتی یک آدرس دامنه را، مسدود کنید تا ایمیل‌هایی که با آن دامنه یا آدرس ایمیل، دریافت می‌کنید، در بخش **هرزنامه‌ها** قرار بگیرد و در صندوق ورودی، به شما نمایش داده نشود.  
برای این کار، کافیست تا وارد بخش **تنظیمات** شده و در بخش **مسدود کردن**، آدرس ایمیل یا دامنه مدنظر را، وارد کنید:

[Video link](https://media.liara.ir/docs/block-email.mp4)

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
