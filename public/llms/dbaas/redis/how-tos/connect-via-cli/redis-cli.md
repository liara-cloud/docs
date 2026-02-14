Original link: https://docs.liara.ir/dbaas/redis/how-tos/connect-via-cli/redis-cli/

# اتصال به دیتابیس Redis با redis-cli

[redis-cli](https://redis.io/docs/latest/develop/connect/cli/) یک ابزار خط فرمان برای تعامل با پایگاه داده Redis است. با استفاده از redis-cli می‌توان به سرور Redis متصل شد، دستورات مختلفی مانند SET , GET , DEL و دیگر عملیات‌ها را اجرا کرد، اطلاعات مربوط به پایگاه داده را بررسی کرد و خطاها را دیباگ نمود. این ابزار برای توسعه‌دهندگان و مدیران سیستم‌ها بسیار مفید است تا بتوانند به راحتی با Redis کار کنند و مدیریت و پیکربندی‌های لازم را انجام دهند.

برای اتصال به redis-cli، پس از [نصب آن طبق مستندات رسمی](https://redis.io/docs/latest/operate/oss_and_stack/install/install-redis/) کافیست از اطلاعات شبکه عمومی دیتابیس، که در صفحه **نحوه اتصال** موجود است؛ استفاده کنید.  
برای فعال‌سازی شبکه عمومی نیز، می‌توانید از قسمت **تنظیمات دیتابیس**، این کار را انجام دهید.  
برای اتصال، می‌توانید مشابه دستور زیر نیز، عمل کنید:

```bash
redis-cli -h REDIS_HOST -p REDIS_PORT -a REDIS_PASSWORD
```

پس از اتصال به دیتابیس، می‌توانید عملیات مورد نیاز خود را، انجام دهید.

## all links

[All links of docs](https://docs.liara.ir/all-links-llms.txt)
