Original link: https://docs.liara.ir/mirrors/ubuntu/

# تنظیم میرور در سیستم عامل ubuntu

لیارا برای سیستم عامل ubuntu، میرورهای زیر را ارائه می‌دهد: 

```bash
https://linux-mirror.liara.ir/repository/ubuntu/
https://linux-mirror.liara.ir/repository/ubuntu-security/
```

برای تنظیم میرورهای فوق در سیستم عامل ubuntu خود، گام‌های زیر را طی کنید: 

۱. تهیه بکاپ از تنظیمات فعلی  
قبل از تنظیم میرورهای لیارا، بهتر است با اجرای دستور زیر، یک بکاپ از تنظیمات فعلی سیستم عامل خود تهیه کنید:

```bash
cp /etc/apt/sources.list.d/ubuntu.sources /etc/apt/sources.list.d/ubuntu.sources.bak
```

۲. تنظیم میرور لیارا  
برای تنظیم میرور لیارا در سیستم عامل اوبونتو خود، در ابتدا دستور زیر را اجرا کنید:

```bash
nano /etc/apt/sources.list.d/ubuntu.sources
```

پس از باز شدن ویرایشگر، مقادیر `URIs` را تغییر دهید؛ به عنوان مثال:

```bash
Types: deb
URIs: https://linux-mirror.liara.ir/repository/ubuntu
Suites: noble noble-updates noble-backports
Components: main restricted universe multiverse
Signed-By: /usr/share/keyrings/ubuntu-archive-keyring.gpg

Types: deb
URIs: https://linux-mirror.liara.ir/repository/ubuntu-security
Suites: noble-security
Components: main restricted universe multiverse
Signed-By: /usr/share/keyrings/ubuntu-archive-keyring.gpg
```

در نهایت، `CTRL + X` را بزنید و سپس `Y` و بعد از آن، `Enter` را بزنید تا تغییرات، ذخیره شوند.

۳. آپدیت سیستم  
اکنون کافیست تا دستور زیر را اجرا کنید تا فهرست مخازن به‌روزرسانی شود:

```bash
apt update
```

با انجام کارهای فوق، میرورهای لیارا در سیستم عامل شما تنظیم خواهند شد و درخواست‌های آپدیت یا دانلود پکیج  
به این میرورها ارسال خواهند شد. 

## غیرفعال کردن میرورهای لیارا

برای غیرفعال کردن میرور لیارا، سریع‌ترین راه، بازیابی فایل بکاپ و حذف تنظیمات فعلی است؛ تنها کافیست تا گام‌های زیر را جلو بروید: 

۱. حذف تنظیمات فعلی  
با اجرای دستور زیر، در ابتدا، تنظیمات فعلی خود را حذف کنید:

> حتماً قبل از اجرای دستور زیر، از وجود و سلامت فایل پشتیبان اطمینان حاصل کنید.

```bash
rm -f /etc/apt/sources.list.d/ubuntu.sources
```

۲. بازگردانی فایل پشتیبان  
نام فایل پشتیبان را با دستور زیر، به نام فایل اصلی، تغییر دهید:

```bash
mv /etc/apt/sources.list.d/ubuntu.sources.bak /etc/apt/sources.list.d/ubuntu.sources
```

۳. آپدیت سیستم  
اکنون کافیست تا دستور زیر را اجرا کنید تا فهرست مخازن به‌روزرسانی شود و مطمئن شوید که همه چیز به درستی کار می‌کند:

```bash
apt update
```

## all links

[All links of docs](https://docs.liara.ir/all-links-llms.txt)
