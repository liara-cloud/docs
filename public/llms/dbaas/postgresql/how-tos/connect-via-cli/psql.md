Original link: https://docs.liara.ir/dbaas/postgresql/how-tos/connect-via-cli/psql/

# اتصال به دیتابیس PostgreSQL با PSQL

[PSQL](https://www.postgresql.org/docs/current/app-psql.html) یک ابزار خط فرمان برای تعامل با پایگاه‌داده PostgreSQL است. با استفاده از psql، می‌توانید دستورات SQL را اجرا کنید، داده‌ها را جستجو کنید، و اسکریپت‌ها و کوئری‌های پیچیده را مدیریت کنید. این ابزار به شما امکان می‌دهد تا با پایگاه‌داده PostgreSQL به‌طور مستقیم و از طریق یک رابط کاربری متنی کار کنید.

برای اتصال به PSQL، پس از [نصب آن طبق مستندات رسمی](https://www.postgresql.org/download/) کافیست از اطلاعات شبکه عمومی دیتابیس، که در صفحه **نحوه اتصال** موجود است؛ استفاده کنید.  
برای فعال‌سازی شبکه عمومی نیز، می‌توانید از قسمت **تنظیمات دیتابیس**، این کار را انجام دهید.  
برای اتصال، می‌توانید مشابه دستور زیر نیز، عمل کنید:

```bash
psql -h DB_HOST -p DB_PORT -U DB_USERNAME -W DB_NAME
```

[Video link](https://media.liara.ir/postgresql/postgres-psql.mp4)

پس از اتصال به دیتابیس، می‌توانید عملیات مورد نیاز خود را، انجام دهید.

## all links

[All links of docs](https://docs.liara.ir/all-links-llms.txt)
