Original link: https://docs.liara.ir/paas/disks/create/

# ساخت دیسک در برنامه

## Liara Console

برای ساخت دیسک کافیست تا وارد قسمت **دیسک‌ها** در برنامه خود شوید:

![app disks](https://media.liara.ir/docs/app-disks.png)

بر روی گزینه **ایجاد دیسک** کلیک کرده و  
برای دیسک خود یک شناسه انتخاب کنید و با توجه به فضای قابل رزرو، اندازه دیسک را به GB وارد کنید:

![put disk data](https://media.liara.ir/docs/put-disk-data.png)

در نهایت، کافیست تا بر روی گزینه **ساخت دیسک** کلیک کنید تا دیسک‌تان ساخته شود. پس از ساخته شدن، دیسک به حالت آماده به کار در می‌آید:

![created disk](https://media.liara.ir/docs/created-disk.png)

## Liara CLI

برای ساخت دیسک جدید با استفاده از ابزار Liara CLI، کافیست تا پس از اجرای دستور `liara login`، دستور `liara disk:create` را اجرا کنید:

البته می‌توانید عملیات ایجاد دیسک را فقط با اجرای یک خط دستور زیر، سرعت ببخشید:

```bash
liara disk:create -a my-web-app -n data -s 2.5
```

بعد از `a-` شناسه برنامه، بعد از `n-` نام دیسک، و پس از `s-` باید حجم دیسک خود را با توجه به فضای قابل رزرو، برحسب گیگابایت، وارد کنید.

همچنین، شما می‌توانید بیش از یک دیسک، بسازید؛ اما در نظر داشته باشید که باید فضای قابل رزرو داشته باشید؛ در غیر این‌صورت، باید ابتدا فضای قابل رزرو خود را افزایش بدهید. این کار می‌تواند با [کاهش حجم یک دیسک](../decrease-value) و یا [ارتقای پلن](https://docs.liara.ir/paas/details/change-plan)، انجام شود.

## همچنین بخوانید:

- #### [اتصال دیسک به برنامه  NodeJS](https://docs.liara.ir/paas/nodejs/how-tos/use-disk)
- #### [اتصال دیسک به برنامه  NextJS](https://docs.liara.ir/paas/nextjs/how-tos/use-disk)
- #### [اتصال دیسک به برنامه  Laravel](https://docs.liara.ir/paas/laravel/how-tos/use-disk)
- #### [اتصال دیسک به برنامه  PHP](https://docs.liara.ir/paas/php/how-tos/use-disk)
- #### [اتصال دیسک به برنامه  NET.](https://docs.liara.ir/paas/dotnet/how-tos/use-disk)
- #### [اتصال دیسک به برنامه  Flask](https://docs.liara.ir/paas/flask/how-tos/use-disk)
- #### [اتصال دیسک به برنامه  Django](https://docs.liara.ir/paas/django/how-tos/use-disk)
- #### [اتصال دیسک به برنامه  مبتنی بر Docker](https://docs.liara.ir/paas/docker/how-tos/use-disk)

## all links

[All links of docs](https://docs.liara.ir/all-links-llms.txt)
