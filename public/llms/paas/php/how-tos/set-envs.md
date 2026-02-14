Original link: https://docs.liara.ir/paas/php/how-tos/set-envs/

# استفاده از متغیرهای محیطی 

برای استفاده از متغیرهای محیطی در برنامه خود، در ابتدا باید طبق [مستندات تنظیم متغیرهای محیطی](https://docs.liara.ir/paas/details/envs)، متغیرهای محیطی را به برنامه خود، اضافه کنید.
در ادامه، شما می‌توانید با استفاده از متد `()getenv` به متغیرهای محیطی خود در برنامه PHP، دسترسی داشته باشید؛ به عنوان مثال:

```php
<?php

$liara_url = getenv('LIARA_URL');
echo "Liara URL: " . $liara_url . "\\n";

```

در مثال فوق، `LIARA_URL` یک متغیر محیطی است که از قبل، به برنامه فرضی در لیارا، اضافه شده است.

## all links

[All links of docs](https://docs.liara.ir/all-links-llms.txt)
