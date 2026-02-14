Original link: https://docs.liara.ir/paas/laravel/related-apps/lumen/

# استقرار برنامه‌های Lumen در لیارا

[Lumen](https://lumen.laravel.com/) یک میکرو فریمورک PHP است که توسط تیم لاراول توسعه داده شده و برای ساخت APIهای سریع و کاربردهای کوچک استفاده می‌شود. این فریمورک از معماری لاراول بهره می‌برد اما سبک‌تر و سریع‌تر است.

  
شما می‌توانید پروژه‌های Lumen خود را با [ایجاد برنامه‌های Laravel](https://docs.liara.ir/how-tos/create-app) بر روی لیارا مستقر کنید. لیارا، از این میکرو فریم‌ورک به صورت کامل پشتیبانی می‌کند و نیازی 
نیست که شما تغییر خاصی را در برنامه خود لحاظ کنید. نمونه یک فایل `composer.json` در پروژه‌های Lumen در ادامه آمده است:

```json
{
    "name": "laravel/lumen",
    "description": "The Laravel Lumen Framework.",
    "keywords": ["framework", "laravel", "lumen"],
    "license": "MIT",
    "type": "project",
    "require": {
        "php": "^8.1",
        "laravel/lumen-framework": "^10.0"
    },
    "require-dev": {
        "fakerphp/faker": "^1.9.1",
        "mockery/mockery": "^1.4.4",
        "phpunit/phpunit": "^10.0"
    },
    "autoload": {
        "psr-4": {
            "App\\\\": "app/",
            "Database\\\\Factories\\\\": "database/factories/",
            "Database\\\\Seeders\\\\": "database/seeders/"
        }
    },
    "autoload-dev": {
        "psr-4": {
            "Tests\\\\": "tests/"
        }
    },
    "scripts": {
        "post-root-package-install": [
            "@php -r \"file_exists('.env') || copy('.env.example', '.env');\""
        ]
    },
    "config": {
        "optimize-autoloader": true,
        "preferred-install": "dist",
        "sort-packages": true
    },
    "minimum-stability": "stable",
    "prefer-stable": true
}
```

> یک پروژه Lumen آماده به استقرار در [اینجا](https://github.com/liara-cloud/fastify-getting-started) وجود دارد که می‌توانید از آن، استفاده کنید.

## all links

[All links of docs](https://docs.liara.ir/all-links-llms.txt)
