Original link: https://docs.liara.ir/mirrors/opensuse/

# تنظیم میرور در سیستم عامل openSUSE


## سرویس میرور openSUSE لیارا چیست؟

میرور openSUSE لیارا یک نسخه‌ی کامل و به‌روز از مخازن رسمی این توزیع لینوکس است که به‌منظور افزایش سرعت، پایداری و دسترس‌پذیری هنگام نصب و به‌روزرسانی پکیج‌ها ارائه می‌شود.



در این سرویس، درخواست‌های ابزار بسته‌مدیریتی Zypper ابتدا به سرورهای داخلی لیارا هدایت می‌شوند و شما می‌توانید پکیج‌ها را با سرعت بسیار بالاتر، بدون تحریم‌ها، کندی اینترنت خارجی یا قطعی‌های بین‌المللی دریافت کنید.

## تنظیم میرور در سیستم عامل openSUSE

لیارا برای سیستم عامل openSUSE، میرور زیر را ارائه می‌دهد:


```bash
https://linux-mirror.liara.ir/repository/opensuse/
```


میرور برای `openSUSE Leap 16` و `openSUSE Tumbleweed` در دسترس است. نسخه‌ی خود را با دستور زیر ببینید و سپس بخش مربوط به آن را اجرا کنید:


```bash
cat /etc/os-release
```


## openSUSE Leap 16


```bash
sudo zypper addrepo \\
  --priority 100 \\
  --no-gpgcheck \\
  'https://linux-mirror.liara.ir/repository/opensuse/distribution/leap/$releasever/repo/oss/' \\
  opensuse-oss
```


```bash
sudo zypper refresh
```


در Leap 16 مخزن جداگانه‌ی آپدیت وجود ندارد و آپدیت‌ها در مخزن بالا هستند.

## openSUSE Tumbleweed


```bash
sudo zypper addrepo \\
  --priority 100 \\
  --no-gpgcheck \\
  'https://linux-mirror.liara.ir/repository/opensuse/tumbleweed/repo/oss/' \\
  opensuse-tumbleweed-oss
```


```bash
sudo zypper refresh
```


با انجام کار فوق، میرور لیارا در سیستم عامل شما تنظیم خواهد شد و درخواست‌های آپدیت یا دانلود پکیج به این میرور ارسال خواهند شد.

## غیرفعال کردن میرور لیارا

برای غیرفعال کردن میرور لیارا، کافیست مخزنی که اضافه کرده‌اید را حذف کنید (در Leap 16 نام مخزن `opensuse-oss` و در Tumbleweed نام آن `opensuse-tumbleweed-oss` است):


```bash
sudo zypper removerepo opensuse-oss
sudo zypper refresh
```

## all links

[All links of docs](https://docs.liara.ir/all-links-llms.txt)
