Original link: https://docs.liara.ir/paas/nodejs/related-apps/strapi/strapi-sqlite/

# استقرار برنامه‌های Strapi با SQLite در لیارا

[Video link](https://media.liara.ir/strapi/strapi-sqlite.mp4)

> پروژه و کدهای مورد استفاده در ویدیوی فوق در [اینجا](https://github.com/liara-cloud/strapi-getting-started/tree/master) قابل مشاهده و دسترسی هستند.

پس از ایجاد برنامه NodeJS، باید متغیرهای محیطی موجود در فایل `env.` برنامه Strapi خود را طبق [https://docs.liara.ir/paas/details/envs](https://docs.liara.ir/paas/details/envs) به برنامه NodeJS اضافه کنید. به عنوان مثال، متغیرهای زیر با مقادیر فرضی زیر، حتماً باید به برنامه اضافه شوند:

```bash
APP_KEYS=qDSFzezRjBb9CWRgYTNKAQ==,a425msyZKCQLciHemU5XjA==,nRmH9IqqkiKahdd9wE+AXg==,szU9KUlV56pzOVDYynbdKA==
API_TOKEN_SALT=KHPr2aDzbEhFe56iBRLa6w==
ADMIN_JWT_SECRET=thazfV/lEGoPPZAqlJGsJg==
TRANSFER_TOKEN_SALT=X7FvBRJ+T4ddz3yM2ZMv8g==
# Database
DATABASE_CLIENT=sqlite
DATABASE_FILENAME=.tmp/data.db
JWT_SECRET=qvyu4YsbaS03suqri3sZVQ==
```

برای استقرار برنامه‌های Strapi نیازی به تغییر فایل `package.json` نیست و لیارا به صورت کامل از این CMS، پشتیبانی می‌کند. در ادامه یک مثال از اسکریپت‌های استاندارد این فریم‌ورک در فایل `package.json` آمده است:

```bash
{
    "scripts": {
        "develop": "strapi develop",
        "start": "strapi start",
        "build": "strapi build",
        "strapi": "strapi"
    }
}
```

و از آنجایی که [https://docs.liara.ir/paas/details/file-system](https://docs.liara.ir/paas/details/file-system) به صورت پیش‌فرض ReadOnly است؛ پس بایستی برای اتصال موفق به دیتابیس SQLite و ذخیره media، طبق مستندات [https://docs.liara.ir/paas/disks/create](https://docs.liara.ir/paas/disks/create)، دو دیسک ایجاد و آن‌ها را به آدرس‌های `app/.tmp/` و `app/public/uploads/` متصل کنید.

## Liara Console

در نهایت کافیست تا برنامه خود را با کنسول و پورت 3000، در لیارا آپلود کنید و عملیات استقرار را انجام دهید تا برنامه با موفقیت در لیارا مستقر شود.

## Liara CLI

در نهایت کافیست تا دستور زیر را اجرا کنید تا برنامه شما در لیارا مستقر شود:

```bash
liara deploy --port=3000 --platform=node
```

## all links

[All links of docs](https://docs.liara.ir/all-links-llms.txt)
