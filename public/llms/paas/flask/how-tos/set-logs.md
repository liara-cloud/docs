Original link: https://docs.liara.ir/paas/flask/how-tos/set-logs/

# تنظیم لاگ‌ها

شما می‌توانید با تنظیم قطعه‌کدهای مشابه قطعه کد زیر، لاگ‌های منحصر به فرد خود را در برنامه Flask ایجاد کنید که طبق [مستندات گزارشات نرم‌افزاری](https://docs.liara.ir/paas/details/observations/software)، در دسترس شما قرار می‌گیرد  
و می‌توانید در هر قسمتی از پردازش برنامه، آن‌ها را ببینید:

```py
@app.route('/logs')
def logs():
    print('---- /logs called ----')
    return 'log printed.'
```

البته در نظر داشته باشید که قطعه کد بالا، صرفاً یکی از راه‌های تنظیم لاگ است و شما می‌توانید از روش‌های دیگری نیز، استفاده کنید!

## all links

[All links of docs](https://docs.liara.ir/all-links-llms.txt)
