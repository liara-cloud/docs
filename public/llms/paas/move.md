Original link: https://docs.liara.ir/paas/move/

# انتقال سرویس پلتفرم در لیارا

انتقال یک سرویس می‌تواند دلایل مختلفی داشته باشد و شاید به خاطر عواملی مثل بهبود عملکرد، افزایش امنیت، کاهش هزینه‌ها، و بهره‌وری، نیاز به انجام آن باشد.  
اگر که قصد دارید برنامه خود را در لیارا انتقال دهید؛ کافیست تا مراحل زیر را قدم به قدم انجام دهید؛ در نظر داشته باشید که برنامه مبدأ با نام فرضی `source-app` و برنامه مقصد با نام فرضی `target-app` مشخص شده‌اند که شما باید آن‌‌ها را طبق شناسه دو برنامه مبدأ و مقصد خود، تغییر دهید.

1. ایجاد برنامه مقصد  
برنامه `target-app` را با [پلن](https://docs.liara.ir/paas/details/plans/about) و [شبکه خصوصی](https://docs.liara.ir/paas/details/private-network) مدنظر خود، ایجاد کنید.

2. تنظیم متغیرهای محیطی  
[متغیرهای محیطی](https://docs.liara.ir/paas/details/envs) موجود در برنامه `source-app` را به همراه مقدارشان، در برنامه `target-app` قرار دهید.

3. دانلود سورس کد  
آخرین سورس‌کد با استقرار موفق را از قسمت [**تاریخچه**](https://docs.liara.ir/paas/details/private-registry) برنامه `source-app` دانلود کنید:

[Video link](https://media.liara.ir/docs/downloading-source-code-using-console.mp4)

4. تعریف مجدد دیسک‌ها  
تمام [دیسک‌های](https://docs.liara.ir/paas/disks/about) برنامه‌ی `source-app` را ترجیحاً با نام یکسان برای برنامه‌ی `target-app` بسازید.

5. اتصال به دیسک‌ها  
با استفاده از Liara CLI دیسک‌ها را به برنامه `target-app` متصل کنید.

> همچنین بخوانید: [نحوه تعریف مسیر و اتصال به دیسک‌ها](https://docs.liara.ir/paas/disks/route/)  
> در صورتی که قصد دارید با استفاده از Liara Console استقرار را انجام دهید؛ می‌توانید در مرحله استقرار برنامه (گام ۶)، دیسک‌ها را به برنامه، متصل کنید.

6. استقرار مجدد پروژه  
سورس‌کد دانلود شده را در برنامه `target-app` با یکی از سه روش Liara CLI یا Liara Console یا Github در لیارا مستقر کنید.

7. تهیه فایل پشتیبان از دیسک‌های قبلی  
از محتوای دیسک‌های `source-app` یک [فایل پشتیبان](https://docs.liara.ir/paas/disks/create-backup) به صورت دستی تهیه کنید.

8. ایجاد دسترسی FTP  
[یک دسترسی FTP](https://docs.liara.ir/paas/disks/ftp-access) برای تمامی دیسک‌های برنامه `target-app` ایجاد کنید.

9. اتصال به دیسک‌ها با دسترسی FTP  
با استفاده از دسترسی FTP، به دیسک‌ها متصل شوید و فایل‌های پشتیبان دانلود شده را به صورت فشرده درون آن‌ها بریزید.

10. در نهایت با استفاده از [خط فرمان](https://docs.liara.ir/paas/details/console-shell) برنامه `target-app` و قطعه کد زیر، فایل‌های فشرده درون پوشه‌های متصل به دیسک را، استخراج کنید (در قطعه کد زیر، نام فایل شما به عنوان مثال، `backup.tar.gz` در نظر گرفته شده است):

```bash
$ cd storage/uploads
$ tar -xzvf backup.tar.gz
```

در نهایت؛ تمامی کارها برای انتقال برنامه‌تان انجام شده است و می‌توانید برنامه `source-app` خود را، پاک کنید و از `target-app` استفاده کنید.

## all links

[All links of docs](https://docs.liara.ir/all-links-llms.txt)
