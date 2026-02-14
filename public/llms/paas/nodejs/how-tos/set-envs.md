Original link: https://docs.liara.ir/paas/nodejs/how-tos/set-envs/

# استفاده از متغیرهای محیطی 

برای استفاده از متغیرهای محیطی در برنامه خود، در ابتدا باید طبق [مستندات تنظیم متغیرهای محیطی](https://docs.liara.ir/paas/details/envs)، متغیرهای محیطی را به برنامه خود، اضافه کنید.
در ادامه، شما می‌توانید با استفاده از دستور `.process.env` به متغیرهای محیطی خود در برنامه NodeJS، دسترسی داشته باشید؛ به عنوان مثال:

```js
console.log(`app listening on port 3005 on ${process.env.LIARA_URL}`)
```

در مثال فوق، `LIARA_URL` یک متغیر محیطی است که از قبل، به برنامه فرضی در لیارا، اضافه شده است.

## all links

[All links of docs](https://docs.liara.ir/all-links-llms.txt)
