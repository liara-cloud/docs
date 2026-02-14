Original link: https://docs.liara.ir/paas/docker/how-tos/use-disk/



# استفاده از دیسک به عنوان Volume در برنامه‌های Docker


Volume در Docker به مکانیزمی برای مدیریت داده‌های پایدار در کانتینرها اشاره دارد. Volumes برای ذخیره داده‌هایی استفاده می‌شوند که فراتر از چرخه حیات کانتینر مورد نیاز هستند، یعنی داده‌هایی که حتی پس از توقف یا حذف کانتینر باقی می‌مانند. Volumes خارج از سیستم فایل کانتینر ذخیره می‌شوند و مدیریت آن‌ها توسط Docker انجام می‌شود.
<div className='h-2' />

در نظر داشته باشید که [فایل‌سیستم](https://docs.liara.ir/paas/details/file-system#docker-and-nextjs-deaful-fs) برنامه‌های Docker، به صورت پیش‌فرض، Writable است. البته اگر که در این حالت، تغییری رخ دهد و یا فایل جدیدی ذخیره شود، پس از ری‌استارت شدن برنامه به هر دلیلی، این تغییرات، از بین خواهند رفت. 
در لیارا، شما می‌توانید برای ذخیره پایدار داده‌های خود و تغییرات مدنظرتان، از مفهوم [دیسک‌ها](https://docs.liara.ir/paas/disks/about)، به جای Volume استفاده کنید.
<div className='h-2' />

برای استفاده از [دیسک‌ها](https://docs.liara.ir/paas/disks/about) در برنامه‌های Docker در ابتدا باید طبق مستندات [ساخت دیسک](https://docs.liara.ir/paas/disks/create)، دیسک‌های مدنظر خود را بسازید؛ در ادامه، می‌توانید طبق مستندات [تعریف مسیر برای دیسک](https://docs.liara.ir/paas/disks/route)، دیسک‌های خود را به دایرکتوری‌های مدنظرتان، متصل کنید.
<div className='h-2' />

در نظر داشته باشید که باید مسیر دایرکتوری مدنظر خود را در برنامه‌های Docker  به صورت <b>مطلق و با در نظر گرفتن نام WORKING DIRECTORY</b> مشخص کنید؛ به عنوان مثال، برای اتصال یک دیسک به دایرکتوری `uploads` در یک Working Directory به نام `app/` کافیست تا مسیر زیر را به دیسک، متصل کنید:

<div className='h-2' />
```bash
/app/uploads/
```
<div className='h-2' />

بنابراین، اگر یک Image شامل قطعه کد زیر باشد:
<div className='h-2' />
```dockerfile
FROM ubuntu

RUN echo hello

VOLUME /path/to/data
```
<div className='h-2' />

شما بایستی قطعه کد مربوط به `VOLUME` را حذف کرده و به جای آن، از دیسک‌ها استفاده کنید.
<div className='h-2' />

> همچنین بخوانید: [فایل سیستم لیارا](https://docs.liara.ir/paas/details/file-system)
> همچنین بخوانید: [نحوه مدیریت دیسک‌ها](https://docs.liara.ir/paas/disks/about)




## all links

[All links of docs](https://docs.liara.ir/all-links-llms.txt)
