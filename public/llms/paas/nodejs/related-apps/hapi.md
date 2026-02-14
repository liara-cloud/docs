Original link: https://docs.liara.ir/paas/nodejs/related-apps/hapi/

# استقرار برنامه‌های Hapi در لیارا

نرم‌افزار Hapi یک فریم‌ورک قوی و انعطاف‌پذیر برای ساخت اپلیکیشن‌های وب و API‌ها در NodeJS است.  
شما می‌توانید برنامه‌های Hapi خود را با [ایجاد برنامه‌های NodeJS](../../how-tos/create-app) در لیارا، مستقر کنید.

برای استقرار برنامه‌های Hapi باید اسکریپت `start` را در فایل `package.json` به شکل زیر، تعریف کنید:

```json
{
    "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "node server.js"
  },
}
```

در ادامه، در فایل اصلی برنامه خود، مثلاً فایل `server.js`، باید حتماً فیلد `host` را با مقدار `'0.0.0.0'` مشخص کنید؛ به عنوان مثال:

```js
const init = async () => {
    const server = Hapi.server({
        port: 3000,
        host: '0.0.0.0',
        routes: {
            files: {
                relativeTo: Path.join(__dirname, 'public')
            }
        }
    });
    // other codes ...
};
```

## استقرار برنامه

### Liara Console

در نهایت کافیست تا برنامه خود را با کنسول و پورت 3000، در لیارا آپلود کنید و عملیات استقرار را انجام دهید تا برنامه با موفقیت در لیارا مستقر شود. البته اگر که برنامه‌تان در پورت دیگری به جز 3000 به درخواست کاربران listen می‌کند، باید مقدار آن را در فیلد پورت، وارد کنید.

### Liara CLI

در نهایت کافیست تا دستور زیر را اجرا کنید تا برنامه شما در لیارا مستقر شود (البته اگر که برنامه‌تان در پورت دیگری به جز 3000 به درخواست کاربران listen می‌کند، باید در دستور زیر، مقدار آن را وارد کنید):

```bash
liara deploy --port=3000 --platform=node
```

> یک پروژه Hapi آماده به استقرار در [اینجا](https://github.com/liara-cloud/hapi-getting-started) وجود دارد که می‌توانید از آن، استفاده کنید.  
> همچنین بخوانید: [رفع خطای CORS در فریم‌ورک Hapi](../../fix-common-errors/cors-error/hapi)

## all links

[All links of docs](https://docs.liara.ir/all-links-llms.txt)
