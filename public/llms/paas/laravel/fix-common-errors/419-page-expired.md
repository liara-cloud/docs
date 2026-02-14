Original link: https://docs.liara.ir/paas/laravel/fix-common-errors/419-page-expired/

# رفع خطای 419Page Expired در برنامه‌های Laravel

ممکن است در برنامه خود با خطای زیر مواجه شوید:

```bash
419 Sorry, your session has expired. Please refresh and try again.
```

این خطا،  زمانی پیش می‌آید که اعتبار سنجی CSRF در برنامه شما، موفق نباشد و یا به خطا بخورد. معمولاً یکی از دلایل اصلی این خطا، در sessionها است. اگر session به درستی ایجاد نشود و یا منقضی شود؛ این خطا، نمایش داده می‌شود.

برای رفع این مشکل، یکی از راه حل‌ها این است که طبق [مستندات تنظیم متغیرهای محیطی](https://docs.liara.ir/paas/details/envs) ،متغیر `SESSION_DRIVER` را با مقدار زیر، به برنامه خود اضافه کنید:

```bash
SESSION_DRIVER=cookie
```

## all links

[All links of docs](https://docs.liara.ir/all-links-llms.txt)
