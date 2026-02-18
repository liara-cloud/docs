Original link: https://docs.liara.ir/mirrors/ubuntu/





# تنظیم میرور در سیستم عامل ubuntu


لیارا برای سیستم عامل ubuntu، میرورهای زیر را ارائه می‌دهد: 



```bash
https://linux-mirror.liara.ir/repository/ubuntu
https://linux-mirror.liara.ir/repository/ubuntu-security
```


برای تنظیم میرورهای فوق در سیستم عامل ubuntu خود، گام‌های زیر را طی کنید: 

۱. بررسی نسخه سیستم عامل
برای تنظیم میرور، به `VERSION_CODENAME`، نیاز است. برای پیدا کردن مقدار آن، دستور زیر را اجرا کنید:

```js
cat /etc/os-release
```

پس از اجرای دستور فوق، مقدار ذکر شده را در جایی ذخیره کنید.

۲. تنظیم میرور لیارا
برای تنظیم میرور لیارا در سیستم عامل اوبونتو خود، دستورات زیر را اجرا کنید:

```js
deb https://linux-mirror.liara.ir/repository/ubuntu/ <CODENAME> main restricted universe multiverse
deb https://linux-mirror.liara.ir/repository/ubuntu/ <CODENAME>-updates main restricted universe multiverse
deb https://linux-mirror.liara.ir/repository/ubuntu-security/ <CODENAME>-security main restricted universe multiverse

```

در دستورات فوق، به جای `&lt;CODENAME&gt;`، خروجی دستور مرحله اول را قرار دهید.



با انجام مراحل فوق، تمامی کارها انجام شده است و زین‌پس، سیستم عامل شما، برای دانلود پکیج‌های مرتبط با اوبونتو، از میرورهای لیارا، استفاده خواهد کرد. 



## all links

[All links of docs](https://docs.liara.ir/all-links-llms.txt)
