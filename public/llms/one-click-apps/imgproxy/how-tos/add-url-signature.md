Original link: https://docs.liara.ir/one-click-apps/imgproxy/how-tos/add-url-signature/

# اضافه کردن URL Signature

بسیار توصیه می‌شود که در حالت Production با اجرای دستور زیر، یک `hex-encoded key` و یک `hex-encoded salt` ایجاد کرده و هر دوی این مقدارها را کپی کنید:

```bash
echo $(xxd -g 2 -l 64 -p /dev/random | tr -d '\n')
```

سپس، طبق مستندات [تنظیم متغیرهای محیطی](https://docs.liara.ir/paas/details/env)، متغیرهای `IMGPROXY_KEY` و `IMGPROXY_SALT` را با مقادیر ایجاد شده، به برنامه Imgproxy خود، اضافه کنید.

## all links

[All links of docs](https://docs.liara.ir/all-links-llms.txt)
