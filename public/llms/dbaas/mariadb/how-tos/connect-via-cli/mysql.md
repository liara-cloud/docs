Original link: https://docs.liara.ir/dbaas/mariadb/how-tos/connect-via-cli/mysql/

# اتصال به دیتابیس MariaDB با MySQL-CLI

[MySQL CLI](https://dev.mysql.com/doc/en/mysql.html) یک ابزار متنی است که برای مدیریت پایگاه داده‌های MySQL استفاده می‌شود. با استفاده از MySQL CLI، کاربران می‌توانند دستورات SQL را به صورت مستقیم وارد کرده و اجرا کنند، جداول و پایگاه داده‌ها را ایجاد، تغییر و حذف کنند، داده‌ها را جستجو و مدیریت کنند و بسیاری از وظایف مدیریتی دیگر را انجام دهند. این ابزار بسیار قدرتمند است و امکان انجام عملیات پیچیده بر روی پایگاه داده‌ها را با استفاده از دستورات ساده فراهم می‌کند. MySQL CLI برای کاربرانی که ترجیح می‌دهند با خط فرمان کار کنند و به رابط‌های گرافیکی نیازی ندارند، بسیار مفید است.

برای اتصال به MySQL-CLI، پس از [نصب آن طبق مستندات رسمی](https://dev.mysql.com/doc/mysql-shell/8.4/en/mysql-shell-install.html) کافیست از اطلاعات شبکه عمومی دیتابیس، که در صفحه **نحوه اتصال** موجود است؛ استفاده کنید.  
برای فعال‌سازی شبکه عمومی نیز، می‌توانید از قسمت **تنظیمات دیتابیس**، این کار را انجام دهید.  
برای اتصال، می‌توانید مشابه دستور زیر نیز، عمل کنید:

```bash
mysql --host <hostname> -u <username> -p<password> --port <port> -D <database_name>
```

[Video link](https://media.liara.ir/mariadb/mariadb-mysqlcmd.mp4)

پس از اتصال به دیتابیس، می‌توانید عملیات مورد نیاز خود را، انجام دهید.

## all links

[All links of docs](https://docs.liara.ir/all-links-llms.txt)
