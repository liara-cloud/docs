Original link: https://docs.liara.ir/references/cli/add-account/

# اضافه کردن حساب کاربری جدید با Liara CLI

[Video link](https://media.liara.ir/liara-features/managing-multiple-accounts.mp4)

برای 
اضافه کردن حساب کاربری جدید با Liara CLI،
می‌توانید از دستور زیر، استفاده کنید: 

```bash
liara account:add
```

## پارامترهای دستور
دستور `liara account:add`، پارامترهای زیر را، می‌پذیرد:

```bash
liara account add [-h] [--debug] [--api-token <value>] [-a <value>] [-e <value>] [-p <value>] 
```

همچنین برای استقرار در یک اکانت مشخص، شما می‌توانید در مسیر اصلی پروژه یک فایل به نام `liara.json` ایجاد کنید و محتوای آن را به شکل زیر بنویسید:

```json
{
"account": "account_name"
}
```

در کد فوق کافیست که به جای `account_name` نام حساب مدنظرتان را وارد کنید؛ پس از اجرای دستور `liara deploy` در صورت درست بودن نام حساب کاربری ، حساب به صورت خودکار تشخیص داده خواهد شد.

## all links

[All links of docs](https://docs.liara.ir/all-links-llms.txt)
