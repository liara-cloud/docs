Original link: https://docs.liara.ir/paas/nextjs/how-tos/reach-static-files/

# دسترسی به فایل‌های Static

در NextJS می‌توانید فایل‌های استاتیک (مانند تصاویر) را در یک پوشه به نام `public` در مسیر اصلی پروژه قرار دهید. سپس فایل‌های موجود در مسیر public از طریق روت دامنه با شروع از `https://docs.liara.ir/` در دسترس هستند. برای مثال اگر شما یک فایل به نام example.png در پوشه‌ی public داشته باشید، می‌توانید طبق مسیر زیر به این فایل دسترسی داشته باشید:

```bash
https://yourdomain.com/example.png
```

در برنامه نیز، می‌توانید با استفاده از قطعه کد مثال زیر، به عکس دسترسی داشته باشید:

```js
import Image from 'next/image'

export function Example() {
  return <Image src="/example.png" width="64" height="64" />
}
```

دایرکتوری public برای ذخیره فایل‌هایی مانند آیکون وب‌سایت، فونت‌ها، google site verification و ... مناسب است. همچنین در نظر داشته باشید که نمی‌توانید نام آن را از `public` به چیز دیگری، تغییر دهید و این دایرکتوری، تنها مسیری است که برای ارائه فایل‌های static، استفاده می‌شود.

> فقط فایل‌های static در زمان build در برنامه نمایش داده می‌شوند و برای نمایش فایل جدید اضافه شده به برنامه، باید برنامه را مجدداً  
> build یا ری‌استارت کنید.  
> همچنین بخوانید: [استفاده از فضای ذخیره‌سازی ابری لیارا برای ذخیره عکس‌های جدید](https://docs.liara.ir/object-storage/about)

## all links

[All links of docs](https://docs.liara.ir/all-links-llms.txt)
