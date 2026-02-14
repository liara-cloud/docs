Original link: https://docs.liara.ir/paas/go/how-tos/use-disk/

# استفاده از دیسک در برنامه‌های Go

[Video link](https://media.liara.ir/go/go-disks.mp4)

> پروژه و کدهای مورد استفاده در ویدیوی فوق در [اینجا](https://github.com/liara-cloud/go-getting-started/tree/diskSetup) قابل مشاهده و دسترسی هستند.

برای استفاده از [دیسک‌ها](https://docs.liara.ir/paas/disks/about) در برنامه‌های go در ابتدا باید طبق مستندات [ساخت دیسک](https://docs.liara.ir/paas/disks/create)، دیسک‌های مدنظر خود را بسازید؛ در ادامه، می‌توانید طبق مستندات [تعریف مسیر برای دیسک](https://docs.liara.ir/paas/disks/route)، دیسک‌های خود را به دایرکتوری‌های مدنظرتان، متصل کنید.

در نظر داشته باشید که باید مسیر دایرکتوری مدنظر خود را در برنامه‌های go به صورت **نسبی** مشخص کنید؛ به عنوان مثال، برای اتصال یک دیسک به دایرکتوری `uploads` کافیست تا مسیر زیر را به دیسک، متصل کنید:

```bash
uploads/
```

> همچنین بخوانید: [فایل سیستم لیارا](https://docs.liara.ir/paas/details/file-system)  
> همچنین بخوانید: [نحوه مدیریت دیسک‌ها](https://docs.liara.ir/paas/disks/about)

## all links

[All links of docs](https://docs.liara.ir/all-links-llms.txt)
