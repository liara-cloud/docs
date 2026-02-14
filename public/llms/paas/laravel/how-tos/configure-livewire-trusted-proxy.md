Original link: https://docs.liara.ir/paas/laravel/how-tos/configure-livewire-trusted-proxy/

# پیکربندی TrustedProxies در Laravel-livewire

تمامی درخواست‌ها به سمت برنامه‌ی شما توسط  
[Reverse proxy](https://en.wikipedia.org/wiki/Reverse_proxy)  
های لیارا هدایت می‌شوند. برای این که در برنامه‌ی‌تان بتوانید به آی‌پی  
واقعی کاربر دسترسی داشته باشید و یا این که از قابلیت Signed URL های  
Laravel استفاده کنید، لازم است که تغییراتی را در فایل  
`app/Http/Middleware/TrustProxies.php`  
اعمال کنید.  
در این فایل، یک متغیر با نام  
`$proxies`  
وجود دارد. فقط کافیست که مقدار آن را به  
`*`  
تغییر دهید.

- ```php
  <?php
  namespace App\Http\Middleware;
  use Illuminate\Http\Request;
  use Fideloper\Proxy\TrustProxies as Middleware;
  class TrustProxies extends Middleware
  {
      /**
       * The trusted proxies for this application.
       *
       * @var array|string
       */
      protected $proxies = '*';
      /**
       * The headers that should be used to detect proxies.
       *
       * @var int
       */
      protected $headers =
        Request::HEADER_X_FORWARDED_FOR |
        Request::HEADER_X_FORWARDED_HOST |
        Request::HEADER_X_FORWARDED_PORT |
        Request::HEADER_X_FORWARDED_PROTO |
        Request::HEADER_X_FORWARDED_AWS_ELB;
  }
  ```

> اگر از فریم‌ورک [Livewire](https://laravel-livewire.com/)  
> در برنامه‌ی لاراولی خود استفاده می‌کنید، باید حتما تنظیمات مرتبط با  
> TrustedProxies را انجام بدهید.

## all links

[All links of docs](https://docs.liara.ir/all-links-llms.txt)
