Original link: https://docs.liara.ir/dbaas/mongodb/how-tos/connect-via-cli/mongosh/

# اتصال به دیتابیس MongoDB با mongosh

[mongosh](https://www.mongodb.com/docs/mongodb-shell/)، که مخفف MongoDB Shell است، یک رابط خط فرمان جدید برای کار با MongoDB است. این ابزار برای تعامل با پایگاه‌داده MongoDB استفاده می‌شود و قابلیت اجرای دستورات JavaScript را نیز دارد. mongosh جایگزین ابزار قدیمی mongo shell شده است و امکانات بیشتری برای توسعه‌دهندگان فراهم می‌کند، از جمله تجربه کاربری بهتر، ویژگی‌های تکمیل خودکار و پشتیبانی از انواع داده‌های پیشرفته. همچنین، این ابزار به‌راحتی با انواع مختلف سیستم‌عامل‌ها سازگار است.

برای اتصال به mongosh، پس از [نصب آن طبق مستندات رسمی](https://www.mongodb.com/docs/mongodb-shell/install/) کافیست از اطلاعات شبکه عمومی دیتابیس، که در صفحه **نحوه اتصال** موجود است؛ استفاده کنید.  
برای فعال‌سازی شبکه عمومی نیز، می‌توانید از قسمت **تنظیمات دیتابیس**، این کار را انجام دهید.  
برای اتصال، می‌توانید مشابه دستور زیر نیز، عمل کنید:

```bash
mongosh -u DB_USERNAME \\
           --port DB_PORT \\
           --host DB_HOST \\
           -p DB_PASSWORD \\
           --authenticationDatabase admin
```

[Video link](https://media.liara.ir/mongodb/mongodb-compass.mp4)

پس از اتصال به دیتابیس، می‌توانید عملیات مورد نیاز خود را، انجام دهید.

## all links

[All links of docs](https://docs.liara.ir/all-links-llms.txt)
