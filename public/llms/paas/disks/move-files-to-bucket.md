Original link: https://docs.liara.ir/paas/disks/move-files-to-bucket/

# انتقال فایل از دیسک به فضای ذخیره‌سازی ابری

[Video link](https://media.liara.ir/rclone/rclone-transfer-files-from-disk-to-bucket.mp4)

برای انتقال فایل‌های درون یک دیسک به یک باکت در لیارا، در ابتدا کافیست تا برنامه [Rclone](https://rclone.org/) را از صفحه [https://docs.liara.ir/ftp-access](https://docs.liara.ir/ftp-access) متناسب با سیستم عامل خود، دانلود کنید. سپس، باید یک [دسترسی FTP](../ftp-access) برای دیسک خود ایجاد کنید.

در قدم بعد باید با اجرای دستور `rclone config` یک `remote` جدید را برای دیسک پیکربندی کنید:

همچنین، توصیه می‌شود که برای اتصال ایمن، از FTPS به جای FTP استفاده کنید؛ برای این منظور، در مرحله
مربوطه، مقدار `explicit_tls` را بر روی true تنظیم کنید:

```bash
Option explicit_tls.                                                                        
Use Explicit FTPS (FTP over TLS).                                                           
When using explicit FTP over TLS the client explicitly requests                             
security from the server in order to upgrade a plain text connection                        
to an encrypted one. Cannot be used in combination with implicit FTPS.                      
Enter a boolean value (true or false). Press Enter for the default (false).                  
explicit_tls> true
```

بعد از انجام کار فوق، اکنون باید مجدداً با اجرای دستور `rclone config` یک `remote` جدید دیگر را برای باکت پیکربندی کنید:

درنهایت شما می‌توانید با اجرای دستور زیر یک نسخه از فایل‌های موجود در دیسک موردنظرتان را در باکت نیز، ذخیره کنید:

```bash
rclone copy -PM <disk-remote>:/ <bucket-remote>:/<bucket-name>
```

البته اگر که قصد انتقال فایل‌ها را از دیسک به باکت دارید، می‌توانید دستور زیر را اجرا کنید:

```bash
rclone move -PM <disk-remote>:/ <bucket-remote>:/<bucket-name>
```

برای مثال اگر یک باکت با نام `app-bucket` و یک دیسک در لیارا داشته باشید، می‌توانید با اجرای دستور زیر، تمامی فایل‌های موجود در دیسک را به باکت `app-bucket` انتقال دهید:

```bash
rclone move -PM r2:/ r1:/app-bucket
```

## all links

[All links of docs](https://docs.liara.ir/all-links-llms.txt)
