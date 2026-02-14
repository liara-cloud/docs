Original link: https://docs.liara.ir/dbaas/mariadb/how-tos/connect-via-cli/mariadb/

# اتصال به دیتابیس MariaDB با MariaDB-CLI

[MariaDB CLI](https://mariadb.com/kb/en/mariadb-command-line-client/) ابزاری است که برای تعامل با پایگاه داده‌های MariaDB از طریق خط فرمان استفاده می‌شود. این ابزار به کاربران اجازه می‌دهد تا دستورات SQL را به صورت مستقیم اجرا کرده و به مدیریت و مانیتورینگ پایگاه داده بپردازند. با استفاده از mariadb cli می‌توان عملیات‌هایی مانند ایجاد و حذف جداول، وارد کردن و استخراج داده‌ها، و اجرای پرس و جوها را انجام داد. این ابزار یکی از ابزارهای اصلی برای مدیریت MariaDB به شمار می‌آید و اغلب در محیط‌های توسعه و تولید استفاده می‌شود.

برای اتصال به MariaDB-CLI، پس از [نصب آن طبق مستندات رسمی](https://mariadb.com/docs/server/connect/clients/mariadb-client/#Installation) کافیست از اطلاعات شبکه عمومی دیتابیس، که در صفحه **نحوه اتصال** موجود است؛ استفاده کنید.  
برای فعال‌سازی شبکه عمومی نیز، می‌توانید از قسمت **تنظیمات دیتابیس**، این کار را انجام دهید.  
برای اتصال، می‌توانید مشابه دستور زیر نیز، عمل کنید:

```bash
mariadb -h <hostname> -u <username> -p<password> -P <port> -D <database_name>
```

پس از اتصال به دیتابیس، می‌توانید عملیات مورد نیاز خود را، انجام دهید.

## all links

[All links of docs](https://docs.liara.ir/all-links-llms.txt)
