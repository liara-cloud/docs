Original link: https://docs.liara.ir/one-click-apps/wordpress/fix-common-errors/file-access-errors/

# رفع خطاهای مربوط به دسترسی فایل

## Apache

برای رفع خطای File Permission، در برنامه وردپرسی خود،  
دستورهای زیر را در [خط فرمان](https://docs.liara.ir/paas/details/console-shell) برنامه خود، اجرا کنید:

```bash
chown www-data:www-data -R *;
find . -type d -exec chmod 755 {} \;
find . -type f -exec chmod 644 {} \;
```

## all links

[All links of docs](https://docs.liara.ir/all-links-llms.txt)
