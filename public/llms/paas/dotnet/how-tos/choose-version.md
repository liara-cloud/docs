Original link: https://docs.liara.ir/paas/dotnet/how-tos/choose-version/

# انتخاب نسخه NET. 

در حال حاضر در پلتفرم NET. لیارا، نسخه‌های زیر ارائه می‌شوند: 

- نسخه 2.1 (EOL)
- نسخه 2.2 (EOL)
- نسخه 3.0 (EOL)
- نسخه 3.1 (LTS - پیش‌فرض)
- نسخه 5.0
- نسخه 6.0 (LTS)
- نسخه 7.0
- نسخه 8.0
- نسخه 9.0
- نسخه 10.0

> EOL یا END OF LIFE به‌معنای پایان عمر یک نسخه است بنابراین باوجود پشتیبانی از نسخه‌های EOL در لیارا توصیه می‌شود پروژه‌هایتان را به نسخه‌های جدیدتر ارتقا دهید.

## Liara Console

پس از بارگذاری پروژه خود در لیارا، کافیست تا در مرحله انتخاب نسخه، نسخه مورد نظر برنامه‌تان را انتخاب کنید.  
![how to choose version in liara console](https://media.liara.ir/docs/choose-dotnet-version-using-console.png)

## Liara CLI

برای تغییر نسخه پیش‌فرض، کافیست تا یک فایل به نام `liara.json` در مسیر اصلی پروژه، ایجاد کنید و قطعه کد زیر را درون آن، قرار دهید. قطعه کد زیر برای تغییر نسخه NET. به 8.0 می‌باشد:

```json
{
  "dotnet": {
    "version": "8.0"
  }
}
```

## Github

برای تغییر نسخه پیش‌فرض، کافیست تا یک فایل به نام `liara.json` در مسیر اصلی پروژه، ایجاد کنید و قطعه کد زیر را درون آن، قرار دهید. قطعه کد زیر برای تغییر نسخه NET. به 8.0 می‌باشد:

```json
{
  "dotnet": {
    "version": "8.0"
  }
}
```

## all links

[All links of docs](https://docs.liara.ir/all-links-llms.txt)
