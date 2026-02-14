Original link: https://docs.liara.ir/one-click-apps/varnish/quick-start/

# راه‌اندازی سریع برنامه‌های Varnish Cache

[Video link](https://media.liara.ir/wordpress/wordpress-varnish.mp4)

[Varnish Cache](https://github.com/varnishcache/varnish-cache) یک شتاب‌دهنده برنامه‌های وب است که به عنوان caching HTTP reverse proxy نیز، شناخته می‌شود. فقط کافیست تا Varnish Cache را در مقابل سروری که از طریق پروتکل HTTP با سایر سرورها و یا مشتری‌ها ارتباط برقرار می‌کند؛ نصب کنید و آن را برای cache کردن محتوای سرور، پیکر بندی کنید تا بتواند تاثیر فوق‌العاده خود را در برنامه شما بگذارد. Varnish Cache واقعاً سریع است! بسته به معماری شما، می‌تواند سرعت بالا آمدن وب‌سایت را 300 تا 1000 برابر افزایش دهد.

برای راه‌اندازی برنامه با استفاده از ابزار [Liara Console](https://docs.liara.ir/references/console/about) کافیست تا مراحل زیر را طی کنید:  
۱. ورود به حساب کاربری   
وارد [کنسول لیارا](https://console.liara.ir) شوید و با وارد کردن ایمیل یا شماره همراه ثبت شده، به اکانت خود در لیارا، لاگین کنید.

۲. انتخاب حساب  
حساب شخصی یا تیم مدنظرتان برای راه‌اندازی برنامه آماده را انتخاب کنید.

> همچنین بخوانید: [مدیریت تیم‌ها در لیارا](https://docs.liara.ir/references/team/about/)

> هم Varnish Cache و هم برنامه هدف باید در یک [شبکه خصوصی مشترک](https://docs.liara.ir/paas/details/private-network) قرار داشته باشند تا بتوانند به یکدیگر متصل شوند.  
> بهتر است که طبق [مستندات دامنه‌ها](https://docs.liara.ir/paas/domains/about)، دامنه خریداری شده خود را، به جای برنامه اصلی‌تان، به Varnish Cache متصل کنید و پس از آن، با همین دامنه، وارد برنامه خود شوید.

## همچنین بخوانید:

- #### [پیکربندی متغیرها](./how-tos/configure-vars)
- #### [تغییر نسخه‌ی برنامه مستقر شده](./how-tos/choose-version)

## all links

[All links of docs](https://docs.liara.ir/all-links-llms.txt)
