Original link: https://docs.liara.ir/mirrors/debian/

# تنظیم میرور در سیستم عامل debian

لیارا برای سیستم عامل debian، میرورهای زیر را ارائه می‌دهد: 

```bash
https://linux-mirror.liara.ir/repository/debian/
https://linux-mirror.liara.ir/repository/debian-security/
```

برای تنظیم میرورهای فوق در سیستم عامل debian خود، گام‌های زیر را طی کنید: 

۱. تهیه بکاپ از تنظیمات فعلی  
قبل از تنظیم میرورهای لیارا، بهتر است با اجرای دستور زیر، یک بکاپ از تنظیمات فعلی سیستم عامل خود تهیه کنید:

```js
cp /etc/apt/sources.list /etc/apt/sources.list.bak
```

۲. تنظیم میرور لیارا  
برای تنظیم میرور لیارا در سیستم عامل دبیان خود، در ابتدا دستور زیر را اجرا کنید:

```js
nano /etc/apt/sources.list
```

پس از باز شدن ویرایشگر، مقادیر بعد از `deb` و `deb-src` را تغییر دهید؛ به عنوان مثال:

```js
deb https://linux-mirror.liara.ir/repository/debian bookworm main non-free-firmware
deb-src https://linux-mirror.liara.ir/repository/debian bookworm main non-free-firmware

deb https://linux-mirror.liara.ir/repository/debian-security bookworm-security main non-free-firmware
deb-src https://linux-mirror.liara.ir/repository/debian-security bookworm-security main non-free-firmware

deb https://linux-mirror.liara.ir/repository/debian bookworm-updates main non-free-firmware
deb-src https://linux-mirror.liara.ir/repository/debian bookworm-updates main non-free-firmware
```

در نهایت، `CTRL + X` را بزنید و سپس `Y` و بعد از آن، `Enter` را بزنید تا تغییرات، ذخیره شوند.

۳. آپدیت سیستم  
اکنون کافیست تا دستور زیر را اجرا کنید تا فهرست مخازن به‌روزرسانی شود:

```js
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
rm -f /etc/apt/sources.list
```

۲. بازگردانی فایل پشتیبان  
نام فایل پشتیبان را با دستور زیر، به نام فایل اصلی، تغییر دهید:

```bash
mv /etc/apt/sources.list.bak /etc/apt/sources.list
```

۳. آپدیت سیستم  
اکنون کافیست تا دستور زیر را اجرا کنید تا فهرست مخازن به‌روزرسانی شود و مطمئن شوید که همه چیز به درستی کار می‌کند:

```bash
apt update
```

## all links

[All links of docs](https://docs.liara.ir/all-links-llms.txt)
