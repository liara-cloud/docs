Original link: https://docs.liara.ir/one-click-apps/imgproxy/how-tos/use-in-laravel/

# استفاده از Imgproxy در برنامه Laravel

برای استفاده از Imgproxy در برنامه‌های Laravel، نیاز به نصب ماژول و یا کتابخانه خاصی نیست!  
در ابتدا بایستی متغیرهای محیطی زیر را به فایل `env.` یا بخش متغیرهای محیطی برنامه خود اضافه کنید؛ به عنوان مثال:

```py
ENDPOINT_URL=your-host-address 
IMGPROXY_URL=your-imgproxy-address
```

اکنون کافیست تا در دایرکتوری `config` یک فایل به نام `custom.php` ایجاد کنید و قطعه کد زیر را درون آن قرار دهید:

```php
<?php

return [
    'img_proxy_conf' => [
        'signature' => '_',
        'options' => 'resize:fill:300:400:0',
        'gravity' => 'gravity:sm',
    ],
];
```

دقت داشته باشید که مقادیر درون `img_proxy_conf` برای مثال آورده شده‌اند و شما می‌توانید مقادیر آن را متناسب با نیازهای خود تغییر دهید.  
اکنون، می‌توانید از Imgproxy در برنامه خود استفاده کنید؛ قطعه کد زیر، مثالی از استفاده Imgproxy در کنترلر برنامه laravel است:

```php
<?php

namespace AppHttpControllers;

use IlluminateHttpRequest;
use AppModelsPhoto;
use IlluminateSupportFacadesStorage;

class PhotoController extends Controller
{
    public function store(Request $request)
    {
        $request->validate([
            'photo' => 'required|image|mimes:jpeg,png,jpg,gif|max:2048',
        ]);

        $imgProxyConf = config('custom.img_proxy_conf');
        $options = $imgProxyConf['options'];
        $gravity = $imgProxyConf['gravity'];
        $signature = $imgProxyConf['signature'];


        $phototemp = $request->file('photo')->store('public/photos');
        $photoPath_ = env('ENDPOINT_URL') . Storage::url($phototemp);
        $photoPath = env('IMGPROXY_URL') . '/' . $signature . '/' . $options . '/' . $gravity . '/plain/' . $photoPath_;


        Photo::create([
            'path' => $photoPath,
        ]);

        return redirect()->route('photo.index');
    }
    
    public function index()
    {
        $photos = Photo::all();
        return view('photos.index', compact('photos'));
    }
}
```

> سورس کامل قطعه کد فوق در [https://github.com/liara-cloud/imgproxy-getting-started/tree/laravel-app](https://github.com/liara-cloud/imgproxy-getting-started/tree/laravel-app) موجود است که می‌توانید از آن استفاده کنید.

## all links

[All links of docs](https://docs.liara.ir/all-links-llms.txt)
