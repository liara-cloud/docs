Original link: https://docs.liara.ir/paas/docker/related-apps/arangodb/



# راه‌اندازی دیتابیس ArangoDB



[ArangoDB](https://arangodb.com/) یک پایگاه داده چند مدلی است که از مدل‌های مختلف داده مانند اسناد، گراف‌ها و کی‌والیو پشتیبانی می‌کند. این پایگاه داده قابلیت اجرای پرس‌وجوهای پیچیده را از طریق زبان پرس‌وجوی AQL فراهم می‌کند. ArangoDB به دلیل انعطاف‌پذیری، مقیاس‌پذیری و عملکرد بالا در بسیاری از برنامه‌های کاربردی مورد استفاده قرار می‌گیرد. همچنین از ویژگی‌های مانند ACID و توزیع‌شدگی پشتیبانی می‌کند که آن را برای کاربردهای تجاری و بزرگ مناسب می‌سازد.









شما می‌توانید برنامه‌های ArangoDB خود را با [ایجاد برنامه‌های Docker](../../how-tos/create-app) در لیارا، مستقر کنید.
برای این‌کار، کافیست تا 
در Local یک دایرکتوری با نام دلخواه بسازید، وارد دایرکتوری شوید و در آن یک فایل به نام `liara.json` ایجاد کنید و قطعه کد زیر را در آن قرار دهید:

```json
{
  "image": "arangodb/arangodb:3.12.0.2",
  "port": 8529,
  "disks": [
      {
          "name": "arangodb-data",
          "mountTo": "/var/lib/arangodb3"
      },
      {
          "name": "arangodb-config",
          "mountTo": "/etc/arangodb3"
      }
  ]
}
```


در ادامه، طبق [مستندات تنظیم متغیرهای محیطی](https://docs.liara.ir/paas/details/envs)، متغیر محیطی زیر را با مقدار رمزی قوی؛ به برنامه داکر خود، اضافه کنید:


```bash
ARANGO_ROOT_PASSWORD=secure-password
```

سپس، طبق [مستندات ساخت دیسک](https://docs.liara.ir/paas/disks/create)، دو دیسک با نام‌های `arangodb-data` و `arangodb-config`  با میزان فضای مورد نیاز، ایجاد کنید. 
در نهایت نیز، کافیست تا در جایی که فایل `liara.json` قرار دارد، دستور زیر را اجرا کنید تا برنامه‌تان در لیارا، مستقر شود:


```bash
liara deploy
```


> پس از استقرار موفق، دیتابیس در [شبکه خصوصی](https://docs.liara.ir/paas/details/private-network/) و بر روی پورت 8592 قابل دسترسی است.

> برای ورود به پنل ادمین دیتابیس، می‌توانید از نام کاربری `root` و پسوردی که تنظیم کرده‌اید، استفاده کنید.



## all links

[All links of docs](https://docs.liara.ir/all-links-llms.txt)
