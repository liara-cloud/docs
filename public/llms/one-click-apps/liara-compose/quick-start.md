Original link: https://docs.liara.ir/one-click-apps/liara-compose/quick-start/

# راه‌اندازی سریع برنامه با Liara Compose

[Video link](https://media.liara.ir/compose/liara-compose.mp4)

برای راه‌اندازی برنامه‌های خود با استفاده از Liara Compose کافیست تا گام‌های زیر را طی کنید:  
۱. ورود به حساب کاربری  
وارد [کنسول لیارا](https://console.liara.ir) شوید و با وارد کردن ایمیل یا شماره همراه ثبت شده، به اکانت خود در لیارا، لاگین کنید.

۲. ساخت برنامه آماده جدید  
پس از ورود به پنل کاربری، وارد منوی برنامه‌های آماده شوید و سپس بر روی گزینه **[Liara Compose](https://console.liara.ir/one-click-apps/custom)** کلیک کنید تا وارد صفحه جدید شوید؛  
در صفحه جدید باز شده یک ویرایشگر به شما نمایش داده می‌شود که می‌توانید درون آن، فایل Liara Compose خود را بنویسید.

۳. شخصی سازی فایل Liara Compose  
قالب کلی فایل  
`liara-compose.yaml`  
به شکل زیر است:

```yaml
liara-compose.yaml
apps: # لیست برنامه‌ها
  - id: "appid" # درج آیدی برای برنامه مدنظرتان
    name: "MyAppName" # درج نام برای برنامه‌تان
    image: "yourImage:yourTag" # نام ایمیج موجود در داکرهاب به همراه تگ آن
    bundlePlanID: "standard" # انتخاب بسته امکانات برنامه
    planID: "small-g2" # انتخاب منابع سخت‌افزاری برنامه
    disks: # تعریف دیسک‌های برنامه
      - name: "DiskName"
        mountTo: "/path/to/dir"
        size: 10 
        maxSize: 0.2 # اندازه نهایی دیسک
    port: 3000 # پورتی که در آن برنامه به درخواست کاربران گوش می‌کند.
    envs: # تعریف متغیرهای محیطی برنامه
      KEY_NAME: "VALUE"
      APP_PASSWORD: "$RANDOM_STRING" # یک رشته شامل کاراکترهای رندوم 
      APP_URL: "https://$APP_NAME.liara.run" # تعیین آدرس پروژه
      APP_DB: "DB://$DB_main_USER:$DB_main_PASSWORD@$DB_main_HOST:$DB_main_PORT/ # اتصال برنامه به دیتابیس

databases: # تعریف دیتابیس
  - type: "DB" # تعیین نوع دیتابیس
    id: "main" # تعیین آیدی دیتابیس
    version: "7.0.5" # تعیین نسخه دیتابیس
    bundlePlanID: "standard" # تعیین بسته امکانات دیتابیس
    planID: "small-g2" # تعیین منابع سخت‌افزاری دیتابیس
```

شما می‌توانید بنا به نیاز خود، فایل `liara-compose.yaml` را نوشته و سپس بر روی گزینه **ذخیره تغییرات** کلیک کنید.

۴. نصب و اسقرار برنامه در لیارا  
در ادامه، شما بایستی [شبکه خصوصی](https://docs.liara.ir/paas/details/private-network/) را انتخاب کرده و برای برنامه‌ها و دیتابیس‌های خود یک شناسه یکتا انتخاب کنید و همچنین بررسی کنید که پلن انتخابی معادل خواسته شما هست یا خیر.  
در نهایت بایستی بر روی گزینه **نصب برنامه** کلیک کنید تا برنامه‌تان در لیارا، مستقر و نصب شود:

![create one-click-app](https://media.liara.ir/docs/deploy-liara-compose.gif)

> شما می‌توانید از [ریپازیتوری compose-templates](https://github.com/liara-cloud/compose-templates) برای انتخاب قالب‌های آماده Compose بهره ببرید.

## all links

[All links of docs](https://docs.liara.ir/all-links-llms.txt)
