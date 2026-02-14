Original link: https://docs.liara.ir/paas/php/how-tos/connect-to-db/elastic-search/

# اتصال به دیتابیس ElasticSearch در برنامه‌های PHP

برای اتصال به دیتابیس ElasticSearch، در ابتدا، باید با اجرای دستور زیر، پکیج موردنیاز آن را در پروژه خود در Local، نصب کنید:

```bash
composer require elasticsearch/elasticsearch
```

در ادامه، بایستی طبق مستندات [تنظیم متغیرهای محیطی](https://docs.liara.ir/paas/details/envs)، متغیرهای محیطی مربوط به دیتابیس خود را به برنامه، در لیارا، اضافه کنید؛ به عنوان مثال:

```bash
ELASTIC_SEARCH=http://elastic:bmTDS5Rb2R1R9x2BJxio1Hje@bromo.liara.cloud:34546
```

در نهایت، می‌توانید با استفاده از قطعه کد زیر، به دیتابیس خود متصل شده و از آن، استفاده کنید:

```php
<?php

require 'vendor/autoload.php';
use Elastic\Elasticsearch\ClientBuilder;

$hosts = [
    getenv("ELASTIC_SEARCH")
];

$client = ClientBuilder::create()
                        ->setHosts($hosts)
                        ->build();

try {
    $response = $client->ping();

    if ($response) {
        echo "connection successfull.";
    } else {
        echo "connection failed.";
    }
} catch (Exception $e) {
    echo "error in connection: ", $e->getMessage();
}

```

## all links

[All links of docs](https://docs.liara.ir/all-links-llms.txt)
