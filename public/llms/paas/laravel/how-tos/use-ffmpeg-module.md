Original link: https://docs.liara.ir/paas/laravel/how-tos/use-ffmpeg-module/

# استفاده از ماژول FFMPEG در Laravel

[FFMPEG](https://ffmpeg.org/) یک نرم‌افزار متن‌باز برای پردازش چندرسانه‌ای است که قابلیت ضبط، تبدیل، پخش ویدیوی زنده و پخش استریمی (streaming) را دارد. این ابزار بسیار قدرتمند است و برای انواع مختلفی از فرمت‌های صوتی و تصویری، قابلیت‌ها و توابع متنوعی ارائه می‌دهد. 

ماژول FFMPEG به‌صورت پیش‌فرض در برنامه‌های Laravel نصب است و همچنین متغیرهای محیطی `FFMPEG_PATH` و `FFPROBE_PATH` در این پلتفرم تنظیم شده‌اند. شما برای استفاده از این ماژول تنها کافیست پکیج `php-ffmpeg` را با اجرای دستور زیر نصب کنید:

- composer require php-ffmpeg/php-ffmpeg

در نهایت، می‌توانید همانند قطعه کد زیر، از این پکیج در برنامه خود، بهره ببرید:

```php
use FFMpeg;

$ffmpeg = FFMpeg::create([
    'ffmpeg.binaries' => env('FFMPEG_PATH', '/usr/bin/ffmpeg'),
    'ffprobe.binaries' => env('FFPROBE_PATH', '/usr/bin/ffprobe'),
]);
```

## all links

[All links of docs](https://docs.liara.ir/all-links-llms.txt)
