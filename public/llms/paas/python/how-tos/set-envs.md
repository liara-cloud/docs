Original link: https://docs.liara.ir/paas/python/how-tos/set-envs/

# استفاده از متغیرهای محیطی 

برای استفاده از متغیرهای محیطی در برنامه خود، در ابتدا باید طبق [مستندات تنظیم متغیرهای محیطی](https://docs.liara.ir/paas/details/envs)، متغیرهای محیطی را به برنامه خود، اضافه کنید.
در ادامه، شما می‌توانید با استفاده از ماژول os و متد `()getenv` به متغیرهای محیطی خود در برنامه Python دسترسی داشته باشید؛ به عنوان مثال:

```py
import os
print(os.getenv('LIARA_URL', 'my-python-app'), flush=True)
```

در مثال فوق، `LIARA_URL` یک متغیر محیطی است که از قبل، به برنامه فرضی در لیارا، اضافه شده است و `my-python-app` مقدار پیش‌فرضی است که در صورت تعریف نشدن متغیر محیطی `LIARA_URL`، مورد استفاده قرار می‌گیرد.

## all links

[All links of docs](https://docs.liara.ir/all-links-llms.txt)
