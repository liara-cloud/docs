Original link: https://docs.liara.ir/paas/disks/move-files-to-other-disk/

# انتقال فایل از یک دیسک به دیسک دیگر

برای انتقال فایل‌های درون یک دیسک به یک دیسک دیگر در لیارا، در ابتدا کافیست تا برنامه [Rclone](https://rclone.org/) را از صفحه [Downloads](https://rclone.org/downloads/) متناسب با سیستم عامل خود، دانلود کنید. سپس، باید برای هر دو دیسک [دسترسی FTP](../ftp-access) ایجاد کنید.

در قدم بعد باید با اجرای دستور `rclone config` یک `remote` جدید را برای دیسک اول خود، پیکربندی کنید:

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

بعد از انجام کار فوق، اکنون باید مجدداً با اجرای دستور `rclone config` یک `remote` جدید دیگر برای دیسک دوم، مشابه دیسک اول، پیکربندی کنید.
درنهایت شما می‌توانید با اجرای دستور زیر یک نسخه از فایل‌های موجود در دیسک موردنظرتان را در دیسک جدید نیز، قرار دهید:

```bash
rclone copy -PM <disk-remote-1>:/ <disk-remote-2>:/
```

البته اگر که قصد انتقال فایل‌ها را از دیسک اول به دیسک دوم، دارید، می‌توانید دستور زیر را اجرا کنید:

```bash
rclone move -PM <disk-remote-1>:/ <disk-remote-2>:/
```

## all links

[All links of docs](https://docs.liara.ir/all-links-llms.txt)
