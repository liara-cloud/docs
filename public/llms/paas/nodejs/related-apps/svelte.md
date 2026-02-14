Original link: https://docs.liara.ir/paas/nodejs/related-apps/svelte/

# استقرار برنامه‌های Svelte در لیارا

[Svelte](https://svelte.dev/) یک فریم‌ورک front-end و متن باز جاوااسکریپت است که برای ساخت صفحات وب تعاملی استفاده می‌شود. شما می‌توانید برنامه‌های Svelte خود را با [ایجاد برنامه‌های NodeJS](../../how-tos/create-app) در لیارا، مستقر کنید.

توجه داشته باشید که برای استقرار برنامه‌های Svelte نیازی به ایجاد تغییر در فایل `package.json` نیست و لیارا به‌طور کامل از این فریم‌ورک پشتیبانی می‌کند؛ بنابراین تغییری در بخش `scripts` ایجاد نکنید. در ادامه، یک مثال از این بخش آورده شده است:

```json
"scripts": {
  "build": "rollup -c",
  "dev": "rollup -c -w",
  "start": "sirv public --no-clear"
},
```

## Liara Console

در نهایت کافیست تا برنامه خود را با کنسول و پورت 3000، در لیارا آپلود کنید و عملیات استقرار را انجام دهید تا برنامه با موفقیت در لیارا مستقر شود.

## Liara CLI

در نهایت کافیست تا دستور زیر را اجرا کنید تا برنامه شما در لیارا مستقر شود:

```bash
liara deploy --port=3000 --platform=node
```

## all links

[All links of docs](https://docs.liara.ir/all-links-llms.txt)
