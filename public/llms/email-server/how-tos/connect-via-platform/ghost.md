Original link: https://docs.liara.ir/email-server/how-tos/connect-via-platform/ghost/

# اتصال به ایمیل‌سرور در برنامه‌های Ghost

در صورتی که از برنامه آماده [Ghost](https://docs.liara.ir/one-click-apps/ghost/quick-start) استفاده می‌کنید؛ برای اتصال آن به ایمیل‌سرور 
کافیست تا طبق [مستندات SMTP](https://docs.liara.ir/email-server/how-tos/add-smtp-user)، یک دسترسی SMTP و طبق [مستندات افزودن نشانی](https://docs.liara.ir/email-server/how-tos/add-account)، یک نشانی برای ایمیل‌سرور خود، ایجاد کنید.
در نهایت نیز، بایستی 
اطلاعات مربوط به ایمیل‌سرور خود را 
طبق [مستندات تنظیم متغیرهای محیطی](https://docs.liara.ir/paas/details/envs)، به برنامه خود، اضافه کنید؛ به عنوان مثال:

## SMTPS

```bash
mail__transport=SMTP
mail__from=from@example.com
mail__options__service=Liara
mail__options__host=smtp.c1.liara.email
mail__options__port=465
mail__options__secure=true
mail__options__auth__user=my-app
mail__options__auth__pass=my-pass
```

> مقدار فیلد `mail__from` باید به جای `from@example.com`، یکی از نشانی‌های اضافه شده در سرویس ایمیل باشد.

## SMTP

```bash
mail__transport=SMTP
mail__from=from@example.com
mail__options__service=Liara
mail__options__host=smtp.c1.liara.email
mail__options__port=587
mail__options__auth__user=my-app
mail__options__auth__pass=my-pass
```

> مقدار فیلد `mail__from` باید به جای `from@example.com`، یکی از نشانی‌های اضافه شده در سرویس ایمیل باشد.

> همچنین بخوانید: [پورت‌های ایمیل‌سرور لیارا](https://docs.liara.ir/email-server/details/ports/)

## all links

[All links of docs](https://docs.liara.ir/all-links-llms.txt)
