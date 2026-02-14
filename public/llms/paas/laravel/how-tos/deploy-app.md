Original link: https://docs.liara.ir/paas/laravel/how-tos/deploy-app/

# استقرار برنامه Laravel در لیارا

## Liara Console

در ابتدا، پس از [ساخت برنامه](../create-app) بایستی تمام فایل‌ها و پوشه‌هایی که قصد ندارید در لیارا آپلود شوند را، از پروژه پاک کنید. به عنوان مثال، باید پوشه‌های node_modules و vendor را از پروژه خود پاک کنید؛ چرا که لیارا در حین فرایند استقرار، آن‌ها را برای شما ایجاد خواهد کرد. به صورت کلی، اگر که در پروژه خود فایلی به نام `gitignore.` دارید، کافیست تا فایل‌های و دایرکتوری‌های اشاره شده در این فایل را، از پروژه خود پاک کنید.

همچنین، پروژه شما باید شامل فایل `composer.json` باشد؛ لیارا، در حین فرایند استقرار، به صورت خودکار این فایل را پیدا می‌کند و عملیات زیر را، انجام می‌دهد:
۱. اضافه کردن mirror  
لیارا، در ابتدا، در فایل `composer.json`، برای افزایش سرعت دانلود و نصب پکیج‌های تعریف شده، mirror اختصاصی خود را، اضافه می‌کند تا پکیج‌ها از آن بارگذاری و نصب شوند.

۲. نصب وابستگی‌های برنامه  
بعد از اضافه کردن mirror، لیارا با استفاده از دستور `composer install` تمامی پکیج‌ها و وابستگی‌های برنامه را نصب می‌کند. پس حتماً در نظر داشته باشید که اسامی آن‌ها در این فایل، تعریف شده باشد.

قطعه کد زیر، یک نمونه از فایل `composer.json` استاندارد برای برنامه‌های Laravel است:

```json
{
    "name": "laravel/laravel",
    "type": "project",
    "description": "The skeleton application for the Laravel framework.",
    "keywords": ["laravel", "framework"],
    "license": "MIT",
    "require": {
        "php": "^8.2",
        "laravel/framework": "^11.9",
        "laravel/tinker": "^2.9"
    },
    "require-dev": {
        "fakerphp/faker": "^1.23",
        "laravel/pint": "^1.13",
        "laravel/sail": "^1.26",
        "mockery/mockery": "^1.6",
        "nunomaduro/collision": "^8.0",
        "phpunit/phpunit": "^11.0.1"
    },
    "autoload": {
        "psr-4": {
            "App\\": "app/",
            "Database\\Factories\\": "database/factories/",
            "Database\\Seeders\\": "database/seeders/"
        }
    },
    "autoload-dev": {
        "psr-4": {
            "Tests\\": "tests/"
        }
    },
    "scripts": {
        "post-autoload-dump": [
            "Illuminate\\Foundation\\ComposerScripts::postAutoloadDump",
            "@php artisan package:discover --ansi"
        ],
        "post-update-cmd": [
            "@php artisan vendor:publish --tag=laravel-assets --ansi --force"
        ],
        "post-root-package-install": [
            "@php -r \"file_exists('.env') || copy('.env.example', '.env');\""
        ],
        "post-create-project-cmd": [
            "@php artisan key:generate --ansi",
            "@php -r \"file_exists('database/database.sqlite') || touch('database/database.sqlite');\"",
            "@php artisan migrate --graceful --ansi"
        ]
    },
    "extra": {
        "laravel": {
            "dont-discover": []
        }
    },
    "config": {
        "optimize-autoloader": true,
        "preferred-install": "dist",
        "sort-packages": true,
        "allow-plugins": {
            "pestphp/pest-plugin": true,
            "php-http/discovery": true
        }
    },
    "minimum-stability": "stable",
    "prefer-stable": true
}
```

> همچنین بهتر است برای استقرار موفق، فایل `composer.lock` درون پروژه خود را  
> (در صورت وجود) پاک کنید تا در حین فرایند استقرار، لیارا آن را، ایجاد کند.

در ادامه، بایستی پوشه پروژه خود را درون یک فایل zip قرار بدهید؛ سپس در برنامه خود، بر روی گزینه **استقرار جدید** کلیک کرده؛ وارد تب **Drag & Drog** شوید و فایل zip را آپلود کنید تا وارد مرحله بعدی استقرار شوید:

[Video link](https://media.liara.ir/docs/deploy-app-using-console.mp4)

پس از آپلود پروژه، باید شخصی‌سازی‌های پروژه را در برنامه خود، لحاظ کنید.

در انتها، به صورت مستقیم به [صفحه تاریخچه برنامه](https://docs.liara.ir/paas/details/private-registry) هدایت می‌شوید که می‌توانید لاگ‌های مربوط به استقرار را در آن، مشاهده بفرمایید.

## Liara CLI

پس از [ساخت برنامه](../create-app)، باید در مسیر اصلی پروژه، یک فایل به نام `liaraignore.` یا `gitignore.` ایجاد کنید و درون آن، اسامی تمامی فایل‌ها یا پوشه‌هایی که قصد ندارید در لیارا آپلود شوند را، وارد کنید؛ به عنوان مثال، نیازی به آپلود دایرکتوری‌های node_modules و vendor به همراه محتوای آن‌ها نیست؛ چرا که لیارا در حین استقرار برنامه، آن‌ها را برای شما می‌سازد؛ پس بایستی اسامی این دایرکتوری‌ها در یکی از دو فایل فوق، نوشته شود؛ قطعه کد قرار گرفته در لینک زیر، یک `gitignore.` عالی برای برنامه‌های Laravel است که می‌توانید از آن، استفاده کنید:

[#### نمونه فایل `gitignore.` برای برنامه‌های Laravel](https://github.com/liara-cloud/gitignore-templates/blob/master/laravel/.gitignore)

همچنین، پروژه شما باید شامل فایل `composer.json` باشد؛ لیارا، در حین فرایند استقرار، به صورت خودکار این فایل را پیدا می‌کند و عملیات زیر را، انجام می‌دهد:
۱. اضافه کردن mirror  
لیارا، در ابتدا، در فایل `composer.json`، برای افزایش سرعت دانلود و نصب پکیج‌های تعریف شده، mirror اختصاصی خود را، اضافه می‌کند تا پکیج‌ها از آن بارگذاری و نصب شوند.

۲. نصب وابستگی‌های برنامه  
بعد از اضافه کردن mirror، لیارا با استفاده از دستور `composer install` تمامی پکیج‌ها و وابستگی‌های برنامه را نصب می‌کند. پس حتماً در نظر داشته باشید که اسامی آن‌ها در این فایل، تعریف شده باشد.

قطعه کد زیر، یک نمونه از فایل `composer.json` استاندارد برای برنامه‌های Laravel است:

```json
{
    "name": "laravel/laravel",
    "type": "project",
    "description": "The skeleton application for the Laravel framework.",
    "keywords": ["laravel", "framework"],
    "license": "MIT",
    "require": {
        "php": "^8.2",
        "laravel/framework": "^11.9",
        "laravel/tinker": "^2.9"
    },
    "require-dev": {
        "fakerphp/faker": "^1.23",
        "laravel/pint": "^1.13",
        "laravel/sail": "^1.26",
        "mockery/mockery": "^1.6",
        "nunomaduro/collision": "^8.0",
        "phpunit/phpunit": "^11.0.1"
    },
    "autoload": {
        "psr-4": {
            "App\\": "app/",
            "Database\\Factories\\": "database/factories/",
            "Database\\Seeders\\": "database/seeders/"
        }
    },
    "autoload-dev": {
        "psr-4": {
            "Tests\\": "tests/"
        }
    },
    "scripts": {
        "post-autoload-dump": [
            "Illuminate\\Foundation\\ComposerScripts::postAutoloadDump",
            "@php artisan package:discover --ansi"
        ],
        "post-update-cmd": [
            "@php artisan vendor:publish --tag=laravel-assets --ansi --force"
        ],
        "post-root-package-install": [
            "@php -r \"file_exists('.env') || copy('.env.example', '.env');\""
        ],
        "post-create-project-cmd": [
            "@php artisan key:generate --ansi",
            "@php -r \"file_exists('database/database.sqlite') || touch('database/database.sqlite');\"",
            "@php artisan migrate --graceful --ansi"
        ]
    },
    "extra": {
        "laravel": {
            "dont-discover": []
        }
    },
    "config": {
        "optimize-autoloader": true,
        "preferred-install": "dist",
        "sort-packages": true,
        "allow-plugins": {
            "pestphp/pest-plugin": true,
            "php-http/discovery": true
        }
    },
    "minimum-stability": "stable",
    "prefer-stable": true
}
```

> همچنین بهتر است برای استقرار موفق، فایل `composer.lock` درون پروژه خود را  
> (در صورت وجود) پاک کنید تا در حین فرایند استقرار، لیارا آن را، ایجاد کند.  

## فایل liara.json

در ادامه، در مسیر اصلی پروژه، یک فایل به نام `liara.json` ایجاد کنید و قطعه کد زیر را در آن قرار دهید:

```json
{
    "app": "my-web-app",
    "platform": "laravel"
}
```

در قطعه کد فوق، در فیلد `app` باید شناسه برنامه خود را به جای `my-web-app` وارد کنید.  
در فیلد `platform` باید نوع پلتفرم خود را که laravel است، مشخص کنید.

## mirror لیارا

از آنجایی که لیارا برای نصب پکیج‌های `composer`، از `mirror` اختصاصی خود استفاده می‌کند؛ از همین رو، ممکن است که در نصب برخی از پکیج‌های جدید، دچار مشکل شود. برای رفع این مشکل، می‌توانید mirror لیارا را با قراردادن قطعه کد زیر در فایل `liara.json`، غیرفعال کنید:

```json
{
    "laravel": {
        "composerMirror": false
    }
}
```

## تعیین نسخه PHP

برای تعیین نسخه PHP  برنامه خود نیز، کافیست تا در فایل `liara.json` فیلد `phpVersion` را قرار دهید:

```json
{
    "laravel": {
        "phpVersion": "8.3"
    }
}
```

> همچنین بخوانید:  [نسخه‌های قابل ارائه php و Laravel در لیارا](../choose-version)

## تعیین منطقه زمانی

به صورت پیش‌فرض، منطقه‌ی زمانی برنامه‌تان بر روی Asia/Tehran تنظیم شده است؛ برای تغییر مقدار پیش‌فرض، می‌توانید از پارامتر `timezone` در فایل `liara.json` استفاده کنید؛ به عنوان مثال:

```json
{
    "laravel": {
        "timezone": "America/Los_Angeles"
    }
}
```

## پارامتر buildAssets

لیارا در حین استقرار برنامه‌تان، دستور `npm run production` را اجرا می‌کند و با اجرای این دستور، فایل‌های SASS به CSS و کدهای جاوا اسکریپت ES6 به بالا به ES5 تبدیل و یکپارچه، می‌شوند.  
اگر که از Laravel فقط برای ساخت API استفاده کرده‌اید و یا به طور کلی، نیازی به این ندارید که لیارا پکیج‌های npm را نصب و فایل‌های CSS و JS را build کند؛ می‌توانید در فایل `liara.json` پارامتر `buildAssets` را به شکل زیر، تنظیم کنید:

```json
{
    "laravel": {
        "buildAssets": false
    }
}
```

## نصب devDependencies

همچنین، برای نصب پکیج‌هایی که در بخش `require-dev` فایل `composer.json` قرار دارد (مانند `Faker` و `Ignition`)، باید در فایل `liara.json`، پارامتر `installDevDependencies` را به شکل زیر، تنظیم کنید:

```json
{
  "laravel": {
    "installDevDependencies": true
  }
}
```

## اعمال کش

برای تجربه عملکرد بهتر، Laravel توصیه می‌کند تا فایل‌های config و route را با اجرای دستورات `php artisan config:cache` و `php artisan route:cache`، کش کنید. شما می‌توانید برای اجرای خودکار این دستورات توسط لیارا در هر بار استقرار، پارامترهای مربوطه را به شکل زیر در فایل `liara.json` وارد کنید:

```json
{
  "laravel": {
    "configCache": true,
    "routeCache": true
  }
}
```

> توجه داشته باشید که [طبق مستندات لاراول](https://laravel.com/docs/5.8/deployment#optimization)، استفاده از دستور `php artisan route:cache` تنها زمانی امکان‌پذیر است که شما از Closureها برای تعریف routeها استفاده نکرده باشید و فقط از Controller استفاده کرده باشید.

در نهایت، یک فایل `liara.json` می‌تواند مانند قطعه کد زیر باشد:

```json
{
    "app": "my-web-app",
    "platform": "laravel",
    "laravel":{
        "phpVersion": "8.3",
        "composerMirror": true,
        "npmMirror": true,
        "timezone": "America/Los_Angeles",
        "installDevDependencies": true,
        "configCache": true,
        "routeCache": true,
        "buildAssets": true
    }
}
```

> همچنین بخوانید: [تعیین موقعیت build برنامه](https://docs.liara.ir/paas/details/build-location)

در صورتی که قصد دارید برنامه‌تان را در تیم مدنظرتان، مستقر کنید، باید فیلد `team-id`  
را به فایل `liara.json` مانند شکل زیر، اضافه کنید. مقدار این فیلد، باید [شناسه تیم](https://docs.liara.ir/references/api/about/#team-id) شما در لیارا باشد:

```json
{
    "team-id": "your-team-id"
}
```

اکنون کافیست تا در مسیر اصلی پروژه و جایی که فایل `liara.json` قرار دارد؛ دستور زیر را اجرا کنید و منتظر بمانید تا عملیات استقرار تمام شود:

```bash
liara deploy
```

در حین فرایند استقرار، می‌توانید در ترمینال خود، لاگ‌های مربوط به آن را مشاهده بفرمایید.

## Github

پس از [ساخت برنامه](../create-app)، باید در مسیر اصلی پروژه، یک فایل به نام `gitignore.` ایجاد کنید و درون آن، اسامی تمامی فایل‌ها یا پوشه‌هایی که قصد ندارید در لیارا آپلود شوند را، وارد کنید؛ به عنوان مثال، نیازی به آپلود دایرکتوری‌های node_modules و vendor به همراه محتوای آن‌ها نیست؛ چرا که لیارا در حین استقرار برنامه، آن‌ها را برای شما می‌سازد؛ پس بایستی اسامی این دایرکتوری‌ها در فایل فوق، نوشته شود؛ قطعه کد قرار گرفته در لینک زیر، یک `gitignore.` عالی برای برنامه‌های Laravel است که می‌توانید از آن، استفاده کنید:

[#### نمونه فایل `gitignore.` برای برنامه‌های Laravel](https://github.com/liara-cloud/gitignore-templates/blob/master/laravel/.gitignore)

همچنین، پروژه شما باید شامل فایل `composer.json` باشد؛ لیارا، در حین فرایند استقرار، به صورت خودکار این فایل را پیدا می‌کند و عملیات زیر را، انجام می‌دهد:
۱. اضافه کردن mirror  
لیارا، در ابتدا، در فایل `composer.json`، برای افزایش سرعت دانلود و نصب پکیج‌های تعریف شده، mirror اختصاصی خود را، اضافه می‌کند تا پکیج‌ها از آن بارگذاری و نصب شوند.

۲. نصب وابستگی‌های برنامه  
بعد از اضافه کردن mirror، لیارا با استفاده از دستور `composer install` تمامی پکیج‌ها و وابستگی‌های برنامه را نصب می‌کند. پس حتماً در نظر داشته باشید که اسامی آن‌ها در این فایل، تعریف شده باشد.

قطعه کد زیر، یک نمونه از فایل `composer.json` استاندارد برای برنامه‌های Laravel است:

```json
{
    "name": "laravel/laravel",
    "type": "project",
    "description": "The skeleton application for the Laravel framework.",
    "keywords": ["laravel", "framework"],
    "license": "MIT",
    "require": {
        "php": "^8.2",
        "laravel/framework": "^11.9",
        "laravel/tinker": "^2.9"
    },
    "require-dev": {
        "fakerphp/faker": "^1.23",
        "laravel/pint": "^1.13",
        "laravel/sail": "^1.26",
        "mockery/mockery": "^1.6",
        "nunomaduro/collision": "^8.0",
        "phpunit/phpunit": "^11.0.1"
    },
    "autoload": {
        "psr-4": {
            "App\\": "app/",
            "Database\\Factories\\": "database/factories/",
            "Database\\Seeders\\": "database/seeders/"
        }
    },
    "autoload-dev": {
        "psr-4": {
            "Tests\\": "tests/"
        }
    },
    "scripts": {
        "post-autoload-dump": [
            "Illuminate\\Foundation\\ComposerScripts::postAutoloadDump",
            "@php artisan package:discover --ansi"
        ],
        "post-update-cmd": [
            "@php artisan vendor:publish --tag=laravel-assets --ansi --force"
        ],
        "post-root-package-install": [
            "@php -r \"file_exists('.env') || copy('.env.example', '.env');\""
        ],
        "post-create-project-cmd": [
            "@php artisan key:generate --ansi",
            "@php -r \"file_exists('database/database.sqlite') || touch('database/database.sqlite');\"",
            "@php artisan migrate --graceful --ansi"
        ]
    },
    "extra": {
        "laravel": {
            "dont-discover": []
        }
    },
    "config": {
        "optimize-autoloader": true,
        "preferred-install": "dist",
        "sort-packages": true,
        "allow-plugins": {
            "pestphp/pest-plugin": true,
            "php-http/discovery": true
        }
    },
    "minimum-stability": "stable",
    "prefer-stable": true
}
```

> همچنین بهتر است برای استقرار موفق، فایل `composer.lock` درون پروژه خود را  
> (در صورت وجود) پاک کنید تا در حین فرایند استقرار، لیارا آن را، ایجاد کند.

از آنجایی که لیارا در جهت استقرار سریع‌تر،  برای نصب پکیج‌های `composer`، از `mirror` اختصاصی خود استفاده می‌کند؛ از همین رو، ممکن است که در نصب برخی از پکیج‌های جدید، دچار مشکل شود. برای رفع این مشکل، می‌توانید در مسیر اصلی پروژه، یک فایل به نام `liara.json` ایجاد کنید و mirror لیارا را با قراردادن قطعه کد زیر در این فایل، غیرفعال کنید:

```json
{
    "laravel": {
        "composerMirror": false
    }
}
```

برای تعیین نسخه PHP  برنامه خود نیز، کافیست تا در فایل `liara.json` فیلد `phpVersion` را قرار دهید:

```json
{
    "laravel": {
        "phpVersion": "8.3"
    }
}
```

> همچنین بخوانید:  [نسخه‌های قابل ارائه php و Laravel در لیارا](../choose-version)

به صورت پیش‌فرض، منطقه‌ی زمانی برنامه‌تان بر روی Asia/Tehran تنظیم شده است؛ برای تغییر مقدار پیش‌فرض، می‌توانید از پارامتر `timezone` در فایل `liara.json` استفاده کنید؛ به عنوان مثال:

```json
{
    "laravel": {
        "timezone": "America/Los_Angeles"
    }
}
```

لیارا در حین استقرار برنامه‌تان، دستور `npm run production` را اجرا می‌کند و با اجرای این دستور، فایل‌های SASS به CSS و کدهای جاوا اسکریپت ES6 به بالا به ES5 تبدیل و یکپارچه، می‌شوند.  
اگر که از Laravel فقط برای ساخت API استفاده کرده‌اید و یا به طور کلی، نیازی به این ندارید که لیارا پکیج‌های npm را نصب و فایل‌های CSS و JS را build کند؛ می‌توانید در فایل `liara.json` پارامتر `buildAssets` را به شکل زیر، تنظیم کنید:

```json
{
    "laravel": {
        "buildAssets": false
    }
}
```

همچنین، برای نصب پکیج‌هایی که در بخش `require-dev` فایل `composer.json` قرار دارد (مانند `Faker` و `Ignition`)، باید در فایل `liara.json`، پارامتر `installDevDependencies` را به شکل زیر، تنظیم کنید:

```json
{
  "laravel": {
    "installDevDependencies": true
  }
}
```

برای تجربه عملکرد بهتر، Laravel توصیه می‌کند تا فایل‌های config و route را با اجرای دستورات `php artisan config:cache` و `php artisan route:cache`، کش کنید. شما می‌توانید برای اجرای خودکار این دستورات توسط لیارا در هر بار استقرار، پارامترهای مربوطه را به شکل زیر در فایل `liara.json` وارد کنید:

```json
{
  "laravel": {
    "configCache": true,
    "routeCache": true
  }
}
```

> توجه داشته باشید که [طبق مستندات لاراول](https://laravel.com/docs/5.8/deployment#optimization)، استفاده از دستور `php artisan route:cache` تنها زمانی امکان‌پذیر است که شما از Closureها برای تعریف routeها استفاده نکرده باشید و فقط از Controller استفاده کرده باشید.

در نهایت، یک فایل `liara.json` می‌تواند مانند قطعه کد زیر باشد:

```json
{
    "laravel":{
        "phpVersion": "8.3",
        "mirror": true,
        "timezone": "America/Los_Angeles",
        "installDevDependencies": true,
        "configCache": true,
        "routeCache": true,
        "buildAssets": true
    }
}
```

> همچنین بخوانید: [تعیین موقعیت build برنامه](https://docs.liara.ir/paas/details/build-location)

در صورتی که قصد دارید برنامه‌تان را در تیم مدنظرتان، مستقر کنید، باید فیلد `team-id`  
را به فایل `liara.json` مانند شکل زیر، اضافه کنید. مقدار این فیلد، باید [شناسه تیم](https://docs.liara.ir/references/api/about/#team-id) شما در لیارا باشد:

```json
{
    "team-id": "your-team-id"
}
```

> در فایل `liara.json`، برای جلوگیری از خطا خوردن فرایند استقرار، از فیلدهای `app` و `platform` استفاده نکنید؛ چرا که لیارا، آن‌ها را به صورت خودکار، تشخیص خواهد داد.

در ادامه، بایستی یک ریپازیتوری در حساب گیت‌هاب خود برای برنامه‌مدنظرتان با نام دلخواه‌تان ایجاد کنید، برای این کار، پس از ورود به [گیت‌هاب](https://github.com/)، وارد بخش **Repositories** شوید و بر روی دکمه **New** کلیک کنید؛ پس از نوشتن نام و توضیحات ریپازیتوری، سطح دسترسی ریپازیتوری را (public یا private)، انتخاب کنید و در نهایت بر روی دکمه **create repository** کلیک کنید تا ریپازیتوری برای‌تان ساخته شود:

[Video link](https://media.liara.ir/docs/create-a-new-repository-in-github.mp4)

> در صورتی که از قبل، این کار را انجام داده‌اید یا قصد دارید از ریپازیتوری‌های فعلی خود استفاده کنید؛ نیازی به ساخت ریپازیتوری جدید نیست.  
اکنون، باید پروژه نهایی خود را در ریپازیتوری‌تان در گیت‌هاب آپلود کنید؛  
حتماً در نظر داشته باشید که درون پروژه‌تان، فایل `gitignore.` قرار داشته باشد و درون آن، فایل‌های اضافی  
برنامه، که قصد ندارید آپلود شوند؛ لیست شده باشند. می‌توانید برای آپلود، مانند دستورات زیر  
در ترمینال ریشه پروژه‌تان، عمل کنید:

```bash
git init # تعریف اولیه مخزن در ریشه پروژه
```
```bash
git add . # اضافه کردن تمامی فایل‌ها به استیج
```
```bash
git commit -m "make ready to deploy on liara" # ثبت کامیت
```
```bash
git remote add origin https://github.com/your-account-user/your-repo-name.git # افزودن دسترسی ریموت به مخزن
```
```bash
git push origin master # آپلود پروژه در گیت‌هاب
```

> در صورتی که هنوز `git` را در سیستم عامل خود نصب ندارید؛ می‌توانید آن را از [اینجا](https://git-scm.com/downloads)، دانلود و نصب نمایید.  
> اگر که از قبل، پروژه نهایی خود را همراه با فایل `liara.json`، در گیت‌هاب آپلود کرده‌اید؛ نیازی به انجام مجدد این کار نیست.

در ادامه، بایستی حساب لیارا خود را به گیت‌هاب متصل کنید. برای اتصال حساب لیارا خود به گیت‌هاب، در لیارا بر روی پروفایل خود کلیک کرده و وارد زیر قسمت [حساب کاربری](https://console.liara.ir/settings/profile) شوید. در ادامه  
وارد منوی [گیت‌هاب](https://console.liara.ir/settings/github) شوید و بر روی دکمه **اتصال به گیت‌هاب**، کلیک کنید. پس از  
انجام این کار و وارد کردن اطلاعات مربوط به گیت‌هاب، حساب لیارا شما به گیت‌هاب متصل خواهد شد:

[Video link](https://media.liara.ir/docs/connect-liara-account-to-github.mp4)

> در صورت مواجه با خطای "اتصال به Github"، بایستی از حساب لیارا خود، خارج شده و مجدداً به وسیله Github، به اکانت لیارا خود، وارد شوید.  
> اگر که قصد دارید به جای اتصال به حساب شخصی، از حساب سازمانی استفاده کنید. باید در ابتدا با حساب شخصی، به کنسول متصل شوید و بعد از آن می‌توانید به حساب سازمانی هم متصل شوید.

بعد از اتصال به اکانت گیت‌هاب، بر روی گزینه **ویرایش دسترسی‌ها** کلیک کرده و ریپازیتوری (ریپازیتوری‌های) مدنظرتان را به حساب لیارا متصل کنید.  
برای این کار در ابتدا، حساب شخصی یا سازمانی خود را انتخاب کنید؛ سپس  
در صورتی که قصد دارید تمام ریپازیتوری‌های حساب گیت‌هاب‌تان به لیارا متصل شود؛ گزینه **All repositories** را انتخاب کنید؛  
اما اگر قصد دارید که فقط یک یا چند ریپازیتوری مدنظرتان را انتخاب کنید؛ گزینه **Only select repositories** را انتخاب کرده و در ادامه ریپازیتوری‌های مدنظرتان را در کشوی باز شده، انتخاب کنید.  
در نهایت، بر روی گزینه **Install & Authorize** کلیک کنید تا ریپازیتوری‌های انتخابی، به حساب لیارا، متصل شوند:

[Video link](https://media.liara.ir/docs/edit-access-to-github-account.mp4)

در نهایت، بر روی برنامه خود کلیک کرده وارد صفحه **استقرار جدید** شوید؛ سپس در منوی **گیت‌هاب**، ریپازیتوری مدنظرتان را انتخاب کرده و پس از انتخاب نوع استقرار (استقرار در صورت CI موفق یا استقرار خودکار) و branch مدنظرتان، بر روی گزینه **اتصال به برنامه** کلیک کنید تا برنامه‌تان به ریپازیتوری مدنظرتان متصل شود.  
در نهایت، کافیست تا یک‌بار بر روی گزینه **استقرار دستی** کلیک کنید تا آخرین commit شما در لیارا مستقر شود:

[Video link](https://media.liara.ir/docs/deploy-project-using-github.mp4)

پس از انجام کارهای فوق، با هر بار push کردن پروژه‌تان در ریپازیتوری انتخاب شده،  
یک استقرار جدید مطابق آخرین تغییرات شما در لیارا، انجام خواهد شد.

> برای قطع ارتباط برنامه و ریپازیتوری نیز، می‌توانید بر روی دکمه **قطع اتصال** کلیک کنید تا تغییرات جدید، مستقر نشوند.  
> در صورت انتخاب گزینه **استقرار در صورت CI موفق**، تمامی تست‌های تعریف شده باید pass شده و تیک سبز رنگ گرفته باشند، در غیر این‌صورت،  
> پروژه‌تان در لیارا، مستقر نخواهد شد.

> برای دسترسی به فایل‌های پوشه‌های `storage`، طبق مستندات لاراول باید این پوشه به پوشه‌ی `public` لینک شود. لیارا به‌صورت خودکار، در زمان استقرار، دستور `php artisan storage:link` را اجرا می‌کند و نیازی نیست که اقدام خاصی انجام دهید.

> پس از استقرار برنامه می‌توانید [رویدادها](https://docs.liara.ir/paas/details/events) و [گزارشات](https://docs.liara.ir/paas/details/observations/about) مربوط به برنامه را بررسی کنید.

## all links

[All links of docs](https://docs.liara.ir/all-links-llms.txt)
