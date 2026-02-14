Original link: https://docs.liara.ir/dbaas/mssql/how-tos/connect-via-cli/sqlcmd/

# اتصال به دیتابیس MSSQL با SQLCMD

[SQLCMD](https://learn.microsoft.com/en-us/sql/tools/sqlcmd/sqlcmd-utility?view=sql-server-ver16) یک ابزار خط فرمان است که برای اتصال و تعامل با پایگاه‌داده‌های SQL Server مایکروسافت استفاده می‌شود. این ابزار به کاربران این امکان را می‌دهد تا کوئری‌ها و اسکریپت‌های SQL را از طریق خط فرمان اجرا کنند، نتایج را مشاهده کنند و عملیات مختلفی را بر روی پایگاه‌داده‌ها انجام دهند. sqlcmd برای مدیریت پایگاه‌داده‌ها، اجرای اسکریپت‌ها و خودکارسازی وظایف مختلف بسیار مفید است.

برای اتصال به SQLCMD، پس از [نصب آن طبق مستندات رسمی](https://learn.microsoft.com/en-us/sql/linux/sql-server-linux-setup-tools?view=sql-server-ver16&tabs=redhat-install) کافیست از اطلاعات شبکه عمومی دیتابیس، که در صفحه **نحوه اتصال** موجود است؛ استفاده کنید.  
برای فعال‌سازی شبکه عمومی نیز، می‌توانید از قسمت **تنظیمات دیتابیس**، این کار را انجام دهید.  
برای اتصال، می‌توانید مشابه دستور زیر نیز، عمل کنید:

```bash
sqlcmd -S DB_URL,DB_PORT -Usa -P DB_PASSWORD
```

پس از اتصال به دیتابیس، می‌توانید عملیات مورد نیاز خود را، انجام دهید.

## all links

[All links of docs](https://docs.liara.ir/all-links-llms.txt)
