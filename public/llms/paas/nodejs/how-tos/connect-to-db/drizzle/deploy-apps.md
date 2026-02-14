Original link: https://docs.liara.ir/paas/nodejs/how-tos/connect-to-db/drizzle/deploy-apps/

# استقرار برنامه‌های وابسته به Drizzle ORM در لیارا

برای استقرار برنامه‌های وابسته به Drizzle ORM نیاز به انجام کاری نیست. فقط کافیست تا قبل از استقرار، متغیرهای محیطی مورد نیاز دیتابیس را طبق مستندات [متغیرهای محیطی](https://docs.liara.ir/paas/details/envs) به برنامه اضافه کنید و دستور زیر را اجرا کنید تا فایل‌های migration برای‌تان ایجاد شوند:

```bash
npx drizzle-kit generate
```

سپس، بایستی در فایل `package.json` یک اسکریپت به نام `migrate` با دستور زیر، اضافه کنید:

```json
{
    "scripts": {
        "migrate": "drizzle-kit migrate --config drizzle.config.ts"
  },
}
```

در ادامه، طبق [مستندات مربوط به Hookها](https://docs.liara.ir/paas/nodejs/how-tos/use-hooks)، باید در مسیر اصلی پروژه، یک فایل به نام `liara_pre_build.sh` ایجاد کنید و قطعه کد زیر را در آن قرار دهید:

```bash
npm install drizzle-orm;
npm install -D drizzle-kit;
npm run migrate;
```

در نهایت، کافیست تا دستور `liara deploy` را اجرا کنید تا برنامه‌تان در لیارا مستقر شود. پس از استقرار موفق، می‌توانید از برنامه خود استفاده کنید.

> اگر که از دیتابیس SQLite استفاده می‌کنید،  
> باید طبق مستندات مربوط به [دیسک‌ها](https://docs.liara.ir/paas/disks/create)، یک دیسک ایجاد و  
> به مسیر دیتابیس، متصل کنید.

## all links

[All links of docs](https://docs.liara.ir/all-links-llms.txt)
