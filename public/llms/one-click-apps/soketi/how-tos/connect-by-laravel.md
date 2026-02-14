Original link: https://docs.liara.ir/one-click-apps/soketi/how-tos/connect-by-laravel/

# اتصال به Soketi با Laravel

[Video link](https://media.liara.ir/soketi/laravel-soketi.mp4)

به‌طور کلی برای استفاده از سرور Soketi در برنامه‌‌های Laravel باید قطعه کد زیر را در فایل `config/app.php` از comment خارج کنید.

```bash
App\\Providers\\BroadcastServiceProvider
```

سپس در  
بخش **تنظیمات، متغیرها** برنامه Soketi تهیه شده، متغیر `BROADCAST_DRIVER` را برابر با `pusher` قرار دهید.

حال به‌منظور اتصال به Soketi در برنامه‌های Laravel باید درایور زیر را به فایل `config/broadcasting.php` اضافه کرده و آدرس برنامه‌ی Soketi را با `soketi-app.iran.liara.run` جایگزین کنید:

```bash
'pusher' => [
'driver' => 'pusher',
'key' => env('PUSHER_APP_KEY'),
'secret' => env('PUSHER_APP_SECRET'),
'app_id' => env('PUSHER_APP_ID'),
'options' => [
    'host' => 'soketi-app.iran.liara.run',
    'port' => 443,
    'scheme' => 'https'
    ],
],
```

در قدم بعد باید مقادیر `PUSHER_APP_KEY`، `PUSHER_APP_SECRET` و `PUSHER_APP_ID` را بر اساس موارد تنظیم شده در بخش **تنظیمات، متغیرها** برنامه Soketi تهیه شده، در تنظیمات متغیرهای برنامه‌ی Laravel مقداردهی کنید. در نهایت می‌توانید به شکل زیر در فرانت‌اند برنامه‌ی خود به سرور Soketi متصل شوید:

```bash
import Echo from 'laravel-echo';

window.Pusher = require('pusher-js');

window.Echo = new Echo({
  broadcaster: 'pusher',
  key: 'app-key',
  forceTLS: true,
  wsHost: 'soketi-app.iran.liara.run',
  wsPort: 443,
  cluster: 'eu',
  enableStats: false,
});
```

> برای مقداردهی `key` و `wsHost` در فرانت‌اند برنامه از Laravel Mix استفاده نکنید و مقادیر `app-key` و `soketi-app.iran.liara.run` را به‌طور مستقیم در قطعه کد فوق قرار دهید.

## all links

[All links of docs](https://docs.liara.ir/all-links-llms.txt)
