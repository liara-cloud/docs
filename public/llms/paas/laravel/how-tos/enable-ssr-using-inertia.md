Original link: https://docs.liara.ir/paas/laravel/how-tos/enable-ssr-using-inertia/

# فعال‌سازی SSR با استفاده از Inertia در Laravel

SSR یا Server-Side Rendering به فرآیند رندرینگ صفحات وب در سمت سرور، قبل از ارسال به مرورگر کاربر، گفته می‌شود. از جمله مزایای این قابلیت، بارگذاری سریع‌تر و SEO بهتر برنامه، است.
[InertiaJS](https://inertiajs.com/) یک کتابخانه است که به توسعه‌دهندگان اجازه می‌دهد تا با استفاده از فریم‌ورک‌های سمت سرور مانند Laravel و فریم‌ورک‌های جاوااسکریپت سمت کلاینت مانند [Vue](https://docs.liara.ir/paas/vue/getting-started) یا [React](https://docs.liara.ir/paas/react/getting-started)، اپلیکیشن‌های SPA بسازند بدون اینکه نیاز به APIهای جداگانه باشد.

لیارا، از Inertia در لاراول، پشتیبانی می‌کند و اگر که شما قصد دارید قابلیت SSR را با استفاده از این کتابخانه، در برنامه Laravel خود، فعال کنید؛ کافیست تا عملیات زیر را انجام بدهید:

## Liara Console

در حین فرایند استقرار با Liara Console، کافیست تا گزینه **فعال‌سازی SSR با استفاده از Inertia** را فعال کنید. تا این قابلیت به برنامه شما اضافه شود:

![enable-ssr-in-laravel-using-console](https://media.liara.ir/docs/enable-ssr-in-laravel-using-console.png)

## Liara CLI

در مسیر اصلی پروژه، یک فایل به نام `liara.json` ایجاد کنید و قطعه کد زیر را در آن، قرار دهید:

```config
{
  "laravel": {
    "ssr": true
  }
}
```

اکنون کافیست تا برنامه خود را، با ابزار Liara CLI مستقر کنید. پس از انجام این کار، قابلیت SSR در برنامه شما، فعال خواهد شد.

## all links

[All links of docs](https://docs.liara.ir/all-links-llms.txt)
