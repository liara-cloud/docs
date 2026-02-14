Original link: https://docs.liara.ir/dbaas/mariadb/how-tos/restore-backup/

# بازیابی فایل پشتیبان در دیتابیس

## MariaDB-CLI

برای بازیابی فایل پشتیبان با استفاده از  
ابزار [MariaDB CLI](https://docs.liara.ir/dbaas/mariadb/how-tos/connect-via-cli/mariadb)، می‌توانید مشابه دستور زیر، عمل کنید:    

```bash
mariadb -h DB_HOST -P DB_PORT -u DB_USER -pDB_PASSWORD < backup.sql
```

## PHPMyAdmin

برای بازیابی فایل پشتیبان با استفاده از  
ابزار [PHPMyAdmin](./connect-via-gui/phpmyadmin)، می‌توانید مشابه دستورالعمل زیر، عمل کنید:  

![database restore backup](https://media.liara.ir/old/mariadb/restore-backup-into-mariadb-database-with-phpmyadmin.gif)

> ابزار phpMyAdmin برای بازیابی فایل‌های پشتیبان سنگین مناسب نیست. می‌توانید به‌عنوان جایگزین از ابزار MySQL CLI استفاده کنید.

## all links

[All links of docs](https://docs.liara.ir/all-links-llms.txt)
