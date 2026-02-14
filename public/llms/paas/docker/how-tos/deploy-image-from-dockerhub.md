Original link: https://docs.liara.ir/paas/docker/how-tos/deploy-image-from-dockerhub/



# استقرار Image از DockerHub یا ghcr.io


[Video link](https://media.liara.ir/docker/docker-image.mp4)



یک Docker Image یک قالب غیر قابل تغییر (read-only) است که شامل تمام چیزهایی که برای اجرای یک برنامه نیاز دارید، از جمله کد برنامه، کتابخانه‌ها، ابزارها و تنظیمات پیکربندی می‌باشد. Imageها به عنوان یک واحد مستقل و قابل حمل از نرم‌افزار، امکان ایجاد و استقرار محیط‌های سازگار و قابل تکرار را فراهم می‌کنند.



[DockerHub](https://hub.docker.com/) یک سرویس میزبانی و مدیریت Imageها در Docker است که توسط خود Docker ارائه می‌شود. این سرویس به شما امکان می‌دهد تا Docker Image مدنظرتان را به راحتی ذخیره، توزیع و مدیریت کنید و همچنین به Imageهای عمومی و رسمی متنوعی دسترسی پیدا کنید. کاربران می‌توانند Imageهای خود را به Docker Hub ارسال کنند و از آن برای اشتراک گذاری و استفاده در محیط‌های مختلف بهره ببرند.



برای استقرار مستقیم Imageهای build شده از DockerHub یا هر رجیستری‌ عمومی دیگر در لیارا می‌توانید از روش‌های زیر استفاده کنید:

<Tabs 
tabs={["liara.json", "Liara CLI"]} 
content={[
<>
پس از [ساخت برنامه Docker](../create-app) در لیارا، کافیست تا در Local یک دایرکتوری با نام دلخواه ایجاد کنید؛ سپس وارد این دایرکتوری شده و یک فایل به نام `liara.json` ایجاد کنید. اکنون کافیست تا در فیلدی به نام `image`، نام Image مدنظرتان را وارد کنید. در صورت نیاز Image به Volume نیز، می‌توانید از [دیسک‌ها](../use-disk) استفاده کنید.
در نظر داشته باشید که در فیلد `app` باید شناسه برنامه داکر خود را و در فیلد `port`، پورتی را وارد کنید که برنامه‌تان در آن، به درخواست کاربران، گوش می‌دهد. قطعه کد زیر یک نمونه فایل liara.json برای استقرار برنامه [meilisearch](https://www.meilisearch.com/) است:

```json
{
    "app": "search-app",
    "image": "getmeili/meilisearch:v0.28",
    "port": 7700,
    "disks": [
        {
            "name": "data",
            "mountTo": "/meili_data"
        }
    ]
}
```

در نهایت، کافیست تا با اجرای دستور زیر یا با استفاده از کنسول لیارا، برنامه خود را در لیارا، مستقر کنید:

```json
liara deploy --platform=docker
```

</>,

<>
پس از [ساخت برنامه Docker](../create-app) در لیارا، کافیست تا در Local، وارد خط فرمان خود شوید و دستوری مشابه با دستور زیر را اجرا کنید:

```config
 liara deploy --app search-app \\
               --image getmeili/meilisearch:v0.28 \\
               --port 7700 \\
               --disks data:/meili_data
```

بعد از `image--`، نام Image مدنظرتان را وارد کنید. در صورت نیاز Image به Volume نیز، می‌توانید از [دیسک‌ها](../use-disk) استفاده کنید (دستور بعد از `disks--`)
در نظر داشته باشید که بعد از `app--` باید شناسه برنامه داکر خود را و بعد از `port--`، پورتی را وارد کنید که برنامه‌تان در آن، به درخواست کاربران، گوش می‌دهد.
</>,


]}
/>




## all links

[All links of docs](https://docs.liara.ir/all-links-llms.txt)
