Original link: https://docs.liara.ir/object-storage/how-tos/create-backup-using-rclone/

# تهیه فایل‌پشتیبان با rclone

[Rclone](https://rclone.org/) یک خط فرمان متن‌باز برای مدیریت و همگام‌سازی فایل‌ها در میان فضای ذخیره‌سازی ابری مختلف است. این ابزار از تعداد زیادی از سرویس‌های ذخیره‌سازی ابری  بسیاری دیگر پشتیبانی می‌کند. با Rclone، می‌توانید فایل‌ها را بین سرویس‌های ابری مختلف جابجا کرده، پشتیبان‌گیری کنید و همگام‌سازی انجام دهید.

[Video link](https://media.liara.ir/rclone/rclone-bucket-backup.mp4)

برای انتقال فایل‌های درون یک باکت به یک باکت دیگر در یک اکانت، در ابتدا کافیست تا برنامه Rclone را از صفحه [Downloads](https://rclone.org/downloads/) متناسب با سیستم عامل خود، دانلود کنید. در قدم بعد باید با اجرای دستور `rclone config` یک `remote` جدید را پیکربندی کنید:

درنهایت شما می‌توانید با اجرای دستور زیر، یک نسخه از فایل‌های موجود در باکت موردنظرتان را در لوکال ذخیره کنید:

```bash
rclone copy -PM [remote]:[bucket-name] /path/to/folder
```

برای مثال اگر یک باکت با نام `app-bucket` در لیارا داشته باشید، می‌توانید با اجرای دستور زیر، تمامی فایل‌های موجود در این باکت را در سیستم خود کپی کنید:

```bash
rclone copy -PM r1:app-bucket myfiles/
```

## all links

[All links of docs](https://docs.liara.ir/all-links-llms.txt)
