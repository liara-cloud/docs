Original link: https://docs.liara.ir/paas/nextjs/how-tos/use-disk/

# استفاده از دیسک در برنامه‌های NextJS

[Video link](https://media.liara.ir/nextjs/nextjs-disks.mp4)

برای استفاده از [دیسک‌ها](https://docs.liara.ir/paas/disks/about) در برنامه‌های NextJS، در ابتدا باید طبق مستندات [ساخت دیسک](https://docs.liara.ir/paas/disks/create)، دیسک‌های مدنظر خود را بسازید؛ در ادامه، می‌توانید طبق مستندات [تعریف مسیر برای دیسک](https://docs.liara.ir/paas/disks/route)، دیسک‌های خود را به دایرکتوری‌های مدنظرتان، متصل کنید.  
بهتر است که مسیر دایرکتوری مدنظر خود را در برنامه‌های NextJS به صورت **نسبی** (با در نظر گرفتن مسیر اصلی پروژه به عنوان ریشه) مشخص کنید.

## موارد استفاده از دیسک‌ها
در نظر داشته باشید که برای آپلود فایل‌های static در برنامه NextJS، نمی‌توانید از قابلیت دیسک‌ها استفاده کنید و  
طبق مستندات رسمی NextJS، باید از سرویس‌های ثالث مانند S3، استفاده کنید.

> همچنین بخوانید: [اتصال برنامه NextJS به فضای ذخیره‌سازی ابری لیارا](https://docs.liara.ir/object-storage/how-tos/connect-via-platform/nextjs)

در صورتی که نیاز به آپلود یا تغییر فایل و محتوایی دارید که مورد نیاز بخش Back-end وب‌سایت است؛ مانند [اتصال به دیتابیس SQLite](https://docs.liara.ir/paas/nextjs/how-tos/connect-to-db/sqlite)، می‌توانید از قابلیت دیسک‌ها در برنامه NextJS خود، بهره ببرید.

> همچنین بخوانید: [فایل سیستم لیارا](https://docs.liara.ir/paas/details/file-system)  
> همچنین بخوانید: [نحوه مدیریت دیسک‌ها](https://docs.liara.ir/paas/disks/about)

## all links

[All links of docs](https://docs.liara.ir/all-links-llms.txt)
