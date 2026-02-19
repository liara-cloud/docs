Original link: https://docs.liara.ir/mirrors/alpine-linux/

# تنظیم میرور در سیستم عامل Alpine Linux

لیارا برای سیستم عامل Alpine Linux، میرور زیر را ارائه می‌دهد: 

```bash
https://linux-mirror.liara.ir/repository/alpine/
```

برای تنظیم میرور فوق در سیستم عامل Alpine Linux خود، گام‌های زیر را طی کنید: 

۱. تهیه بکاپ از تنظیمات فعلی  
قبل از تنظیم میرورهای لیارا، بهتر است با اجرای دستورات زیر، یک بکاپ از تنظیمات فعلی سیستم عامل خود تهیه کنید:

```bash
cp /etc/apk/repositories /etc/apk/repositories.bak
```

۲. تنظیم میرور لیارا  
برای تنظیم میرور لیارا در سیستم عامل آلپاین لینوکس خود، دستور زیر را اجرا کنید:

```bash
ALPINE_VERSION=$(cat /etc/alpine-release | cut -d'.' -f1-2) && \
echo "https://linux-mirror.liara.ir/repository/alpine/v\${ALPINE_VERSION}/main" > /etc/apk/repositories && \
echo "https://linux-mirror.liara.ir/repository/alpine/v\${ALPINE_VERSION}/community" >> /etc/apk/repositories
```

۳. آپدیت سیستم  
اکنون کافیست تا دستور زیر را اجرا کنید تا فهرست مخازن به‌روزرسانی شود:

```bash
apk update
```

با انجام کارهای فوق، میرور لیارا در سیستم عامل شما تنظیم خواهد شد و درخواست‌های آپدیت یا دانلود پکیج  
به این میرور ارسال خواهد شد. 

## all links

[All links of docs](https://docs.liara.ir/all-links-llms.txt)
