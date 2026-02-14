Original link: https://docs.liara.ir/one-click-apps/imgproxy/how-tos/use-in-django/

# استفاده از Imgproxy در برنامه Django

برای استفاده از Imgproxy در برنامه‌های Django، نیاز به نصب ماژول و یا کتابخانه خاصی نیست!  
در ابتدا، کافیست تا متغیرهای `ENDPOINT` و `IMGPROXY_URL` را به شکل زیر به فایل `settings.py` اضافه کنید:

```py
import os
ENDPOINT     = os.getenv("ENDPOINT", 'http://127.0.0.1:8000')
IMGPROXY_URL = os.getenv("IMGPROXY_URL", "")
```

> دقت داشته باشید که مقدار `ENDPOINT` را حتماً با `http` یا `https` وارد کنید و همچنین مقدار `IMGPROXY_URL` باید برابر با آدرس کامل برنامه Imgproxy باشد.

برای مثال، اگر که از فایل `env.` استفاده می‌کنید، مقادیر دو متغیر فوق را باید همانند مقادیر زیر وارد کنید:

```bash
ENDPOINT=https://django-app-test.liara.run
IMGPROXY_URL=https://imgproxy-app.liara.run
```

اکنون می‌توانید از Imgproxy در برنامه خود استفاده کنید؛ برای مثال، قطعه کد زیر در فایل `models.py` به کار رفته است:

```py
from django.db import models
from django.conf import settings

img_proxy_conf = {
    "signature": "_",
    "options": "resize:fill:300:400:0",
    "gravity": "gravity:sm",}

class Image(models.Model):
    title = models.CharField(max_length=100)
    image = models.ImageField(upload_to='')
    full_path = models.CharField(max_length=255)
    final_result = models.CharField(max_length=255)

    def save(self, *args, **kwargs):
        if self.image:
            self.full_path = f"{settings.ENDPOINT}{self.image.url}"
            if settings.IMGPROXY_URL != "":
                self.final_result = (
                    f"{settings.IMGPROXY_URL}/{img_proxy_conf['signature']}/"
                    f"{img_proxy_conf['options']}/{img_proxy_conf['gravity']}/plain/"
                    f"{self.full_path}")
            else:
                self.final_result = self.image.url
        super().save(*args, **kwargs)
```

در نظر داشته باشید که کد فوق، یک مثال از کاربرد Imgproxy است و شما می‌توانید فیلد `option` درون `img_proxy_conf` موجود در کد فوق را با توجه به نیاز خود تغییر دهید.

> سورس کامل قطعه کد فوق در [اینجا](https://github.com/liara-cloud/imgproxy-getting-started/tree/django-app) موجود است که می‌توانید از آن استفاده کنید.

## all links

[All links of docs](https://docs.liara.ir/all-links-llms.txt)
