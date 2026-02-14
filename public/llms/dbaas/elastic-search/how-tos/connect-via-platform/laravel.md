Original link: https://docs.liara.ir/dbaas/elastic-search/how-tos/connect-via-platform/laravel/

# اتصال به دیتابیس ElasticSearch در برنامه‌های Laravel

برای اتصال به دیتابیس ElasticSearch، در ابتدا، باید با اجرای دستور زیر، پکیج موردنیاز آن را در پروژه خود در Local، نصب کنید:

```bash
composer require elasticsearch/elasticsearch
```

در ادامه، باید در دایرکتوری `app` یک دایرکتوری به نام `Services`  و درون این دایرکتوری،  
یک فایل به نام `ElasticsearchService.php` ایجاد کنید و محتوای زیر را، درون آن، قرار دهید:

```php
<?php

namespace App\Services;

use Elastic\Elasticsearch\ClientBuilder;

class ElasticsearchService
{
    protected $client;

    public function __construct()
    {
        $this->client = ClientBuilder::create()
            ->setHosts(['http://elastic:TgRCGavrbOJB82ZjzyVXRKbu@bromo.liara.cloud:30197'])
            ->build();
    }

    public function checkConnection()
    {
        return $this->client->ping();
    }
}

```

> در کد فوق، باید مقدار فیلد `setHosts` را برابر با آدرس URI دیتابیس ElasticSearch خود، قرار دهید.

تمامی کارها انجام شده است و شما می‌توانید از دیتابیس ElasticSearch خود استفاده کنید؛ به عنوان مثال می‌توانید با اجرای دستور زیر، یک کنترلر برای تست اتصال به دیتابیس ایجاد کنید:

```bash
php artisan make:controller ElasticsearchController
```

اکنون، می‌توانید کنترلر ایجاد شده در مسیر `app/Http/Controllers/ElasticsearchController.php` را با قطعه کد زیر، آپدیت کنید:

```php
<?php

namespace App\Http\Controllers;

use App\Services\ElasticsearchService;
use Illuminate\Http\Request;

class ElasticsearchController extends Controller
{
    protected $elasticsearchService;

    public function __construct(ElasticsearchService $elasticsearchService)
    {
        $this->elasticsearchService = $elasticsearchService;
    }

    public function checkConnection()
    {
        $isConnected = $this->elasticsearchService->checkConnection();

        if ($isConnected) {
            return response()->json(['message' => 'Connected to Elasticsearch'], 200);
        } else {
            return response()->json(['message' => 'Failed to connect to Elasticsearch'], 500);
        }
    }
}

```

در نهایت، کافیست تا در `routes/web.php` قطعه کد زیر را اضافه کنید:

```php
use App\Http\Controllers\ElasticsearchController;

Route::get('/check-elasticsearch', [ElasticsearchController::class, 'checkConnection']);

```

اکنون می‌توانید برنامه‌تان را اجرا کرده و در صفحه `check-elasticsearch/` وضعیت اتصال به دیتابیس خود را بررسی کنید.

## all links

[All links of docs](https://docs.liara.ir/all-links-llms.txt)
