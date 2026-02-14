Original link: https://docs.liara.ir/dbaas/mongodb/how-tos/restore-backup/

# بازیابی فایل پشتیبان در دیتابیس

## .dump

برای بازیابی فایل پشتیبان با استفاده از  
[mongorestore](https://www.mongodb.com/docs/database-tools/mongorestore/)، می‌توانید مشابه دستور زیر، عمل کنید:     

```bash
mongorestore -u DB_USERNAME \\
               -p DB_PASSWORD \\
               --host DB_HOST \\
               --port DB_PORT \\
               --authenticationDatabase admin \\
               --archive=/path/to/backup-file.archive.gz \\
               --gzip \\
               --verbose
```

## JSON & CSV

برای بازیابی فایل پشتیبان با استفاده از  
ابزار [MongoDB Compass](./connect-via-gui/mongodb-compass)، می‌توانید مشابه دستورالعمل زیر، عمل کنید:  

![database restore backup](https://media.liara.ir/old/mongodb/compass-restore.gif)

## all links

[All links of docs](https://docs.liara.ir/all-links-llms.txt)
