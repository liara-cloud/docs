Original link: https://docs.liara.ir/paas/flask/fix-common-errors/module-not-found/

# رفع خطای ModuleNotFoundError در برنامه‌های Flask

لیارا برنامه‌های Flask را با دستوری مشابه دستور زیر اجرا می‌کند:

```bash
gunicorn app:app
```

بنابراین، در لیارا، نام ماژول شما به صورت پیش‌فرض `app` در نظر گرفته می‌شود. اما اگر شما از 
نام دیگری استفاده می‌کنید؛ ممکن است در زمان استقرار برنامه، با خطای زیر مواجه شوید:

```bash
File "/usr/local/lib/python/site-packages/gunicorn/util.py", line 350, in import_app
  __import__(module)
  ModuleNotFoundError: No module named 'app'
```

برای حل این مشکل می‌توانید نام ماژول اصلی برنامه را به `app` تغییر دهید و یا اگر که قصد این‌کار را ندارید؛ 
می‌توانید در مسیر اصلی پروژه، یک فایل به نام `liara.json` ایجاد کنید و قطعه کد زیر را در آن قرار دهید:

```bash
{
  "flask": {
    "appModule": "my-app-name:app"
  }
}
```

در قطعه کد فوق، بایستی به جای `my-app-name`، نام ماژول اصلی خود را وارد کنید. در نهایت، کافیست تا برنامه خود را مجدداً در لیارا، مستقر کنید.

## all links

[All links of docs](https://docs.liara.ir/all-links-llms.txt)
