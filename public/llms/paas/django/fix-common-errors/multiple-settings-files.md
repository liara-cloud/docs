Original link: https://docs.liara.ir/paas/django/fix-common-errors/multiple-settings-files/

# رفع خطای Multiple Settings Files در برنامه‌های Django

در زمان استقرار در پلتفرم جنگو، لیارا به‌دنبال فایلی که حاوی متغیر `WSGI_APPLICATION` باشد می‌گردد. این متغیر معمولا در فایل `settings.py` پیش‌فرض جنگو قرار دارد. چنانچه در پروژه‌ی شما چندین فایل وجود داشته باشند که حاوی این متغیر باشند، این خطا را دریافت می‌کنید.

برای رفع این خطا، کافیست تا یک فایل به نام `liara.json` در مسیر اصلی پروژه، ایجاد کنید و یا که اگر از قبل این‌کار را انجام داده‌اید؛ تنها کافیست تا قطعه کد زیر را به این فایل، اضافه کنید:

```json
{
  "django": {
    "settingsFile": "./path/to/my/settings.py"
  }
}
```

در مقابل فیلد `settingsFile`، باید مسیر نسبی فایل `settings.py` برنامه‌تان را قرار بدهید و سپس دستور `liara deploy` را اجرا کنید.

## all links

[All links of docs](https://docs.liara.ir/all-links-llms.txt)
