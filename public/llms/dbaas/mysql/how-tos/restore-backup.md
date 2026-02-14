Original link: https://docs.liara.ir/dbaas/mysql/how-tos/restore-backup/

# بازیابی فایل پشتیبان در دیتابیس

## MySQL-CLI

برای بازیابی فایل پشتیبان با استفاده از  
ابزار [MySQL CLI](https://docs.liara.ir/dbaas/mysql/how-tos/connect-via-cli/mysql/)، می‌توانید مشابه دستور زیر، عمل کنید:

```bash
mysql -u DB_USER -pDB_PASS -h DB_HOST -P DB_PORT < /path/to/backup-file.sql
```

## PHPMyAdmin

برای بازیابی فایل پشتیبان با استفاده از  
ابزار [PHPMyAdmin](./connect-via-gui/phpmyadmin)، می‌توانید مشابه دستورالعمل زیر، عمل کنید:  

![database restore backup](https://media.liara.ir/old/mariadb/restore-backup-into-mariadb-database-with-phpmyadmin.gif)

> ابزار phpMyAdmin برای بازیابی فایل‌های پشتیبان سنگین مناسب نیست. می‌توانید به‌عنوان جایگزین از ابزار MySQL CLI استفاده کنید.

## all links

[All links of docs](https://docs.liara.ir/all-links-llms.txt)
