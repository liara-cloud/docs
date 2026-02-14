Original link: https://docs.liara.ir/paas/php/how-tos/install-new-extension/

# نصب یا به‌روزرسانی اکستنشن در برنامه‌های PHP

پلتفرم PHP لیارا، به صورت خودکار اکثر اکستنشن‌های مورد نظر کاربران را به صورت پیش‌فرض بر روی سرور خود، نصب دارد.

> همچنین بخوانید: [مشاهده اکستنشن‌های نصب شده در PHP](../see-extension)

اما ممکن است که بخواهید یک اکستنشن جدید در برنامه خود، نصب کنید و یا نسخه یک اکستنشن قدیمی را، آپدیت کنید؛ برای این کار می‌توانید از [Hookها](../use-hooks) استفاده کنید.  
برای این‌کار، در مسیر اصلی پروژه، یک فایل به نام `liara_pre_build.sh` ایجاد کنید و قطعه کد زیر را در آن قرار دهید. 

```sh
apt-get update;
apt-get install php8.2-dev  -y --allow-unauthenticated;
pecl install new_extension;
printf "extension=new_extension.so\\n" > /etc/php/8.2/mods-available/new_extension.ini;
phpenmod -v 8.2 new_extension;
```

در قطعه کد فوق، باید به جای `new_extension`، نام اکستنشن مورد نظرتان و به جای `8.2`، نسخه PHP برنامه خود را، وارد کنید.  
تمامی کارها انجام شده است و پس از استقرار برنامه‌تان در لیارا، اکستنشن مورد نظرتان، نصب و یا به‌روز می‌شود که می‌توانید در [خط فرمان](https://docs.liara.ir/paas/details/console-shell) برنامه خود، با اجرای دستور `php --ini`، لیست اکستنشن‌های نصب شده را، ببینید.

## all links

[All links of docs](https://docs.liara.ir/all-links-llms.txt)
