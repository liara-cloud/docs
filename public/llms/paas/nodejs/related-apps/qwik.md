Original link: https://docs.liara.ir/paas/nodejs/related-apps/qwik/

# استقرار برنامه‌های Qwik در لیارا

[Qwik](https://qwik.dev/) یک فریم‌ورک جدید در جاوااسکریپت است که توسط تیم سازنده‌ی Builder.io توسعه یافته است. این فریم‌ورک طراحی شده است تا برنامه‌های وب سریع و بهینه‌ای را با تمرکز بر عملکرد بالا و زمان بارگذاری کم ایجاد کند.  
شما می‌توانید برنامه‌های Qwik خود را با [ایجاد برنامه‌های NodeJS](https://docs.liara.ir/how-tos/create-app) در لیارا، مستقر کنید.

توجه داشته باشید که برای استقرار برنامه‌های Qwik تنها کافیست تا در مسیر اصلی پروژه، دستور زیر را اجرا کنید:

```bash
npm run qwik add
```

بعد از اجرای این دستور، بایستی گزینه `Adapter: Node.js Server` را انتخاب کرده و سپس گزینه `!Yes looks good, finish update` را بزنید.

![work with qwik](https://media.liara.ir/docs/qwik-create-deployment-files.gif)

با اجرای دستور فوق، یک‌سری فایل جدید برای شما ایجاد می‌شوند. اکنون بایستی اسکریپت `start` را به شکل زیر تغییر دهید:

```json
"scripts": {
    // other scripts
    "start": "node server/entry.node-server",
    // other scripts
},
```

## Liara Console

در نهایت کافیست تا برنامه خود را با کنسول و پورت 3000، در لیارا آپلود کنید و عملیات استقرار را انجام دهید تا برنامه با موفقیت در لیارا مستقر شود.

## Liara CLI

در نهایت کافیست تا دستور زیر را اجرا کنید تا برنامه شما در لیارا مستقر شود:

```bash
liara deploy --port=3000 --platform=node
```

> یک نمونه پروژه‌ی Qwik که آماده مستقر شدن در لیارا است را می‌توانید در [اینجا](https://github.com/liara-cloud/qwik-getting-started)  مشاهده کنید.

## all links

[All links of docs](https://docs.liara.ir/all-links-llms.txt)
