Original link: https://docs.liara.ir/dbaas/postgresql/how-tos/restore-backup/

# بازیابی فایل پشتیبان در دیتابیس

## pg_restore

برای بازیابی فایل پشتیبان با استفاده از  
[pg_restore](https://www.postgresql.org/docs/current/app-pgrestore.html)، می‌توانید مشابه دستور زیر، عمل کنید:     

```bash
pg_restore -h DB_HOST \\
             -p DB_PORT \\
             -U DB_USERNAME \\
             -F c --create -d postgres /path/to/backup-file.dump
```

## PGAdmin

برای بازیابی فایل پشتیبان با استفاده از  
ابزار [PGAdmin](./connect-via-gui/pgadmin)، می‌توانید مشابه دستورالعمل زیر، عمل کنید:  

![database restore backup](https://media.liara.ir/old/postgresql/restore-backup-into-postgresql-database-with-pgadmin.gif)

> ابزار PGAdmin برای بازیابی فایل‌های پشتیبان سنگین مناسب نیست. می‌توانید به‌عنوان جایگزین از ابزار pg_restore استفاده کنید.

## all links

[All links of docs](https://docs.liara.ir/all-links-llms.txt)
