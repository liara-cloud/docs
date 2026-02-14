Original link: https://docs.liara.ir/paas/nodejs/related-apps/json-server/

# استقرار برنامه‌های مبتنی بر JSON Server در لیارا

[JSON Server](https://github.com/typicode/json-server) یک ابزار ساده و کاربردی برای ساختن یک REST API موقت و سریع است که داده‌های آن بر اساس یک فایل JSON ساده می‌باشد. این ابزار برای تست و نمونه‌سازی سریع پروژه‌ها بسیار مفید است و نیازی به پیکربندی پیچیده ندارد. JSON Server به شما اجازه می‌دهد تا با داده‌های ساختگی کار کنید و درخواست‌های HTTP مانند GET , POST , PUT , PATCH و DELETE را مدیریت کنید.  
شما می‌توانید برنامه‌های مبتنی بر JSON Server خود را با [https://docs.liara.ir/how-tos/create-app](https://docs.liara.ir/how-tos/create-app) در لیارا، مستقر کنید.

برای این کار، کافیست تا یک دایرکتوری خالی با نام دلخواه‌تان ایجاد کنید؛ وارد آن شوید و درون این دایرکتوری، فایل‌های زیر را، ایجاد کنید:

- فایل `db.json`
- فایل `json-server.json`
- فایل `package.json`

اکنون کافیست تا قطعه‌کدهای مربوط به هر فایل را، درون آن‌ها، قرار دهید. قطعه کد مربوط به فایل `db.json`:

```json
{
    "posts": [
      { "id": 1, "title": "json-server", "author": "typicode" }
    ],
    "comments": [
      { "id": 1, "body": "some comment", "postId": 1 }
    ],
    "profile": { "name": "typicode" }
}
```

قطعه کد مربوط به فایل `json-server.json`:

```json
{
    "port": 3000,
    "host": "0.0.0.0"
} 
```

قطعه کد مربوط به فایل `package.json`:

```json
{
  "devDependencies": {
    "json-server": "0.17.4"
  },
  "scripts": {
    "start": "json-server --watch db.json"
  }
}
```

> در قطعه کد فوق، می‌توانید نسخه `json-server` مورد نظر خود را وارد کنید.

## Liara Console

در نهایت کافیست تا برنامه خود را با کنسول و پورت 3000، در لیارا آپلود کنید و عملیات استقرار را انجام دهید تا برنامه با موفقیت در لیارا مستقر شود.

## Liara CLI

در نهایت کافیست تا دستور زیر را اجرا کنید تا برنامه شما در لیارا مستقر شود:

```bash
liara deploy --port=3000 --platform=node
```

## all links

[All links of docs](https://docs.liara.ir/all-links-llms.txt)
