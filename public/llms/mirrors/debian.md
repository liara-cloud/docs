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

## all links

[All links of docs](https://docs.liara.ir/all-links-llms.txt)
