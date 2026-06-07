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
echo "https://linux-mirror.liara.ir/repository/alpine/v${ALPINE_VERSION}/main" > /etc/apk/repositories && \
echo "https://linux-mirror.liara.ir/repository/alpine/v${ALPINE_VERSION}/community" >> /etc/apk/repositories
```

۳. آپدیت سیستم  
اکنون کافیست تا دستور زیر را اجرا کنید تا فهرست مخازن به‌روزرسانی شود:

```bash
apk update
```

با انجام کارهای فوق، میرور لیارا در سیستم عامل شما تنظیم خواهد شد و درخواست‌های آپدیت یا دانلود پکیج  
به این میرور ارسال خواهد شد. 

## غیرفعال کردن میرورهای لیارا

برای غیرفعال کردن میرور لیارا، سریع‌ترین راه، بازیابی فایل بکاپ و حذف تنظیمات فعلی است؛ تنها کافیست تا گام‌های زیر را جلو بروید: 

۱. حذف تنظیمات فعلی  
با اجرای دستور زیر، در ابتدا، تنظیمات فعلی خود را حذف کنید:

> حتماً قبل از اجرای دستور زیر، از وجود و سلامت فایل پشتیبان اطمینان حاصل کنید.

```bash
rm -f /etc/apk/repositories
```

۲. بازگردانی فایل پشتیبان  
نام فایل پشتیبان را با دستور زیر، به نام فایل اصلی، تغییر دهید:

```bash
mv /etc/apk/repositories.bak /etc/apk/repositories
```

۳. آپدیت سیستم  
اکنون کافیست تا دستور زیر را اجرا کنید تا فهرست مخازن به‌روزرسانی شود و مطمئن شوید که همه چیز به درستی کار می‌کند:

```bash
apk update
```

## all links

[All links of docs](https://docs.liara.ir/all-links-llms.txt)
