Original link: https://docs.liara.ir/mirrors/opensuse/

# تنظیم میرور در سیستم عامل OpenSUSE

لیارا برای سیستم عامل OpenSUSE، میرور زیر را ارائه می‌دهد: 

```bash
https://linux-mirror.liara.ir/repository/opensuse/
```

برای تنظیم میرور فوق در سیستم عامل OpenSUSE و همچنین تهیه بکاپ از تنظیمات فعلی خود، کافیست تا دستور زیر را اجرا کنید: 

```bash
zypper addrepo \\
  --priority 100 \\
  --no-gpgcheck \\
  'https://linux-mirror.liara.ir/repository/opensuse/distribution/leap/$releasever/repo/oss/' \\
  opensuse-oss

```

با انجام کار فوق، میرورهای لیارا در سیستم عامل شما تنظیم خواهند شد و درخواست‌های آپدیت یا دانلود پکیج 
به این میرورها ارسال خواهند شد. 


## غیرفعال کردن میرورهای لیارا

برای غیرفعال کردن میرور لیارا، سریع‌ترین راه، بازیابی فایل بکاپ و حذف تنظیمات فعلی است؛ تنها کافیست تا گام‌های زیر را جلو بروید: 

۱. حذف تنظیمات فعلی  
با اجرای دستور زیر، در ابتدا، تنظیمات فعلی خود را حذف کنید:

> حتماً قبل از اجرای دستور زیر، از وجود و سلامت فایل پشتیبان اطمینان حاصل کنید.
```bash
zypper removerepo opensuse-oss
```

۲. بازگردانی فایل پشتیبان  
یک کپی فایل پشتیبان با دستور زیر، با نام فایل اصلی، بگیرید:

```bash
cp -a /etc/zypp/repos.d/backup/*.repo /etc/zypp/repos.d/
```

۳. آپدیت سیستم  
اکنون کافیست تا دستور زیر را اجرا کنید تا فهرست مخازن به‌روزرسانی شود و مطمئن شوید که همه چیز به درستی کار می‌کند:

```bash
zypper refresh && zypper lr -u
```

## all links

[All links of docs](https://docs.liara.ir/all-links-llms.txt)
