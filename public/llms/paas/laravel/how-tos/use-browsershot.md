Original link: https://docs.liara.ir/paas/laravel/how-tos/use-browsershot/

# استفاده از Browsershot در لاراول

[ماژول Browsershot](https://spatie.be/docs/browsershot/v4/introduction) در لاراول، می‌تواند یک صفحه وب را به یک عکس یا یک PDF تبدیل کند. این تبدیل با استفاده از [Puppeteer](https://docs.liara.ir/one-click-apps/headless-chrome/how-tos/connect-by-nodejs-and-puppeteer) و [Headless Chrome](https://docs.liara.ir/one-click-apps/headless-chrome/quick-start) انجام می‌شود.  
در ادامه، آموزش استفاده از ماژول Browsershot در لاراول و نحوه استقرار آن در پلتفرم لاراول لیارا قرار گرفته است.

۱. ایجاد پروژه لاراولی   
در ابتدا، با اجرای دستور زیر، یک پروژه لاراولی جدید ایجاد کنید:  

```bash
laravel new browsershot-app
```

۲. نصب Puppeteer و Browsershot   
قبل از نصب Puppeteer، دستور زیر را اجرا کنید تا از رخ دادن خطا، جلوگیری شود:  

```bash
set PUPPETEER_SKIP_DOWNLOAD=true
```

سپس، با اجرای دستور زیر، می‌توانید Puppeteer را نصب کنید:
```bash
npm install puppeteer
```

در نهایت، می‌توانید با اجرای دستور زیر، ماژول Browsershot را نصب کنید:
```bash
composer require spatie/browsershot
```

۳. تعریف مسیر   
در مسیر `routes/web.php`، قطعه کد زیر را قرار دهید:  

```php
<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\PdfController;

Route::get('/', [PdfController::class, 'showForm'])->name('home');
Route::post('/generate-pdf', [PdfController::class, 'generatePdf'])->name('generate.pdf');

```

۴. تعریف و پیاده‌سازی کنترلر   
با اجرای دستور زیر، یک کنترلر جدید ایجاد کنید:  

```js
php artisan make:controller PdfController
```

سپس، در مسیر `app/Http/Controllers/PdfController.php`، قطعه کد زیر را قرار دهید:

```js
<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Spatie\Browsershot\Browsershot;

class PdfController extends Controller
{
    public function showForm()
    {
        return view('home');
    }

    public function generatePdf(Request $request)
    {
        $request->validate([
            'url' => 'required|url',
        ]);

        $url = $request->input('url');

        $pdf = Browsershot::url($url)
            ->setOption('browserWSEndpoint', env('REMOTE_CHROME_WSS'))
            ->format('A4')
            ->showBackground()
            ->pdf();

        return response($pdf, 200)
            ->header('Content-Type', 'application/pdf')
            ->header('Content-Disposition', 'attachment; filename="webpage.pdf"');
    }
}
```

۵. ایجاد برنامه Headless Chrome   
طبق [مستندات Chrome](https://docs.liara.ir/one-click-apps/headless-chrome/quick-start/)، یک برنامه [Headless Chrome](https://liara.ir/one-click-apps/chrome/) ایجاد کرده و از بخش **متغیرهای محیطی** برنامه، مقدار `TOKEN` را کپی کنید.

۶. ایجاد پلتفرم لاراول در لیارا و آماده‌سازی آن   
در [کنسول لیارا](https://console.liara.ir/apps)، یک برنامه لاراول ایجاد کنید و طبق مستندات [تنظیم متغیرهای محیطی](https://docs.liara.ir/paas/laravel/how-tos/set-envs/)، دو متغیر زیر را به برنامه خود اضافه کنید:  

```bash
REMOTE_CHROME_WSS=wss://<liara-chrome-app-url>?token=<your-env-token>
PUPPETEER_SKIP_DOWNLOAD=true
```

در قطعه کد فوق، به جای `<liara-chrome-app-url>`، آدرس برنامه Headless Chrome و به جای `<your-env-token>`، مقدار `TOKEN` که در مرحله قبل کپی کرده‌اید را قرار دهید.

۷. استقرار برنامه لاراول   
در نهایت، با اجرای دستور زیر، برنامه لاراولی خود را در پلتفرم لاراول لیارا مستقر کنید (حتماْ موقعیت بیلد را بر روی `germany` تنظیم کنید):  

```js
liara deploy --build-location=germany
```

> یک پروژه آماده استقرار در [گیت‌هاب لیارا](https://github.com/liara-cloud/laravel-getting-started/tree/browsershot) وجود دارد که می‌توانید از آن، استفاده کنید.

## all links

[All links of docs](https://docs.liara.ir/all-links-llms.txt)
