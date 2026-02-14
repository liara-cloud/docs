Original link: https://docs.liara.ir/object-storage/how-tos/connect-via-platform/strapi/

# اتصال به فضای ذخیره‌سازی ابری در برنامه‌های Strapi

[Video link](https://media.liara.ir/strapi/strapi-s3.mp4)

> پروژه و کدهای مورد استفاده در ویدیوی فوق در [اینجا](https://github.com/liara-cloud/strapi-getting-started/tree/use-s3) قابل مشاهده و دسترسی هستند.

برای استفاده از Object Storage در برنامه‌های Strapi، می‌توانید از  
پکیج `upload-aws-s3` استفاده کنید که بایستی با دستور زیر، آن را در پروژه خود، نصب کنید:

```bash
npm install @strapi/provider-upload-aws-s3
```

پس از آن، کافیست تا طبق [مستندات ایجاد کلید](https://docs.liara.ir/object-storage/how-tos/create-key)، یک کلید جدید برای باکت خود بسازید.  
اطلاعات مربوط به ENDPOINT و نام باکت نیز در صفحه **تنظیمات**، در بخش **دسترسی با SDK**،  
برای شما قرار گرفته است.  
سپس، بایستی  
اطلاعات مربوط به Object Storage خود را  
به متغیرهای محیطی برنامه خود، اضافه کنید؛ به عنوان مثال:

```bash
LIARA_ACCESS_KEY_ID=73f8u0nhgrseognt
LIARA_ACCESS_SECRET=bea78f17-904e-4e64-8d2e-f009834e41f1
LIARA_REGION=us-east-1
LIARA_ENDPOINT=https://storage.iran.liara.space
LIARA_BUCKET=strapi-bucket
```

در ادامه، بایستی قطعه کد زیر را به فایل `config/plugins.js` اضافه کنید:

```js
module.exports = ({ env }) => ({
    upload: {
      config: {
        provider: 'aws-s3',
        providerOptions: {
          accessKeyId: env('LIARA_ACCESS_KEY_ID'),
          secretAccessKey: env('LIARA_ACCESS_SECRET'),
          region: env('LIARA_REGION'),
          endpoint: env('LIARA_ENDPOINT'), // Add endpoint variable here
          params: {
            ACL: env('AWS_ACL', 'public-read'),
            signedUrlExpires: env('AWS_SIGNED_URL_EXPIRES', 15 * 60),
            Bucket: env('LIARA_BUCKET'),
          },
        },
        actionOptions: {
          upload: {},
          uploadStream: {},
          delete: {},
        },
      },
    },
  });
```

همچنین بایستی در فایل `config/middlewares.js` قطعه کد زیر را به آرایه‌های `img-src` و `media-src` اضافه کنید:

```bash
'strapi-bucket.storage.iran.liara.space',
```

در کد فوق، به جای `strapi-bucket` باید نام باکت خود را وارد کنید.  
تمامی کارها انجام شده است و می‌توانید از برنامه خود، استفاده کنید.

## all links

[All links of docs](https://docs.liara.ir/all-links-llms.txt)
