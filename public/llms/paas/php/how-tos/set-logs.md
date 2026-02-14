Original link: https://docs.liara.ir/paas/php/how-tos/set-logs/

# تنظیم لاگ‌ها

شما می‌توانید با تنظیم قطعه‌کدهای مشابه قطعه کد زیر، لاگ‌های منحصر به فرد خود را در برنامه PHP ایجاد کنید که طبق [مستندات گزارشات نرم‌افزاری](https://docs.liara.ir/paas/details/observations/software)، در دسترس شما قرار می‌گیرد  
و می‌توانید در هر قسمتی از پردازش برنامه، آن‌ها را ببینید:

```php
<?php
session_start();

error_log("This is a log message.", 0);
echo "Home page.";
```

## all links

[All links of docs](https://docs.liara.ir/all-links-llms.txt)
