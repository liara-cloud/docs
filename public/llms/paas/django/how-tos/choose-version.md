Original link: https://docs.liara.ir/paas/django/how-tos/choose-version/

# انتخاب نسخه Python 

در حال حاضر در پلتفرم Django لیارا، نسخه‌های زیر از  Python ارائه می‌شوند: 

- نسخه 3.7 (بدون به‌روزرسانی)
- نسخه 3.8
- نسخه 3.9
- نسخه 3.10
- نسخه 3.11
- نسخه 3.12 (پیش‌فرض)
- نسخه 3.13

> قابلیت‌های جدید برای نسخه‌های بدون به‌روزرسانی، ارائه نمی‌شوند و برای رفع این مشکل، باید ورژن Python برنامه خود را، ارتقاء دهید.

## Liara Console

پس از بارگذاری پروژه خود در لیارا، کافیست تا در مرحله انتخاب نسخه، نسخه مورد نظر برنامه‌تان را انتخاب کنید.  
![how to choose version in liara console](https://media.liara.ir/docs/change-python-version-in-django-using-console.png)

## Liara CLI

برای تغییر نسخه پیش‌فرض، کافیست تا یک فایل به نام `liara.json` در مسیر اصلی پروژه، ایجاد کنید و قطعه کد زیر را درون آن، قرار دهید. قطعه کد زیر برای تغییر نسخه Python به 3.12 می‌باشد:

```json
{
  "django": {
    "pythonVersion": "3.12"
  }
}
```

## Github

برای تغییر نسخه پیش‌فرض، کافیست تا یک فایل به نام `liara.json` در مسیر اصلی پروژه، ایجاد کنید و قطعه کد زیر را درون آن، قرار دهید. قطعه کد زیر برای تغییر نسخه Python به 3.12 می‌باشد:

```json
{
  "django": {
    "pythonVersion": "3.12"
  }
}
```

## all links

[All links of docs](https://docs.liara.ir/all-links-llms.txt)
