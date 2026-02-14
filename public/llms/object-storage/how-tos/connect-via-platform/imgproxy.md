Original link: https://docs.liara.ir/object-storage/how-tos/connect-via-platform/imgproxy/

# اتصال به فضای ذخیره‌سازی ابری در برنامه‌های Imgproxy

در صورتی که از برنامه آماده [Imgproxy](https://docs.liara.ir/one-click-apps/imgproxy/quick-start) استفاده می‌کنید؛  
برای استفاده از Imgproxy بر روی عکس‌های ذخیره‌شده در فضای ذخیره‌سازی ابری لیارا نیاز به انجام هیچ‌کار خاصی نیست؛ فقط کافیست تا آدرس دائمی (یا موقت) عکس ذخیره شده را در انتهای URL پیکربندی شده Imgproxy قرار دهید؛ به عنوان مثال، فرض کنید که این URL برابر با مقدار زیر است:

```bash
https://imgproxy-app.liara.run/_/resize:fill:300:400:0/gravity:sm/plain/
```

حال، فرض کنید که URL عکس ذخیره‌شده در فضای ذخیره‌سازی ابری لیارا نیز، برابر با مقدار زیر است:

```bash
https://bucket.storage.iran.liara.space/liara-poster.png
```

اکنون، برای اعمال Imgproxy بر روی عکس مد نظر خود، کافیست تا URL پیکربندی شده Imgproxy را قبل از URL عکس مدنظر خود قرار دهید:

```bash
https://imgproxy-app.liara.run/_/resize:fill:300:400:0/gravity:sm/plain/https://bucket.storage.iran.liara.space/liara-poster.png
```

بدین نحو، تمامی تغییرات اعمال می‌شوند و شما می‌توانید با استفاده از URL فوق، به عکس نهایی خود دسترسی داشته باشید.

## all links

[All links of docs](https://docs.liara.ir/all-links-llms.txt)
