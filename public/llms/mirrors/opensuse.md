Original link: https://docs.liara.ir/mirrors/opensuse/

# تنظیم میرور در سیستم عامل OpenSUSE

لیارا برای سیستم عامل OpenSUSE، میرور زیر را ارائه می‌دهد: 

```bash
https://linux-mirror.liara.ir/repository/opensuse/
```

برای تنظیم میرور فوق در سیستم عامل OpenSUSE و همچنین تهیه بکاپ از تنظیمات فعلی خود، کافیست تا دستور زیر را اجرا کنید: 

```bash
sudo mkdir -p /etc/zypp/repos.d/backup && \\
sudo cp -a /etc/zypp/repos.d/*.repo /etc/zypp/repos.d/backup/ && \\
zypper lr -u > ~/zypper-repos-backup.txt && \\
zypper addrepo \\
  --priority 100 \\
  --no-gpgcheck \\
  https://linux-mirror.liara.ir/repository/opensuse/distribution/leap/$releasever/repo/oss/ \\
  opensuse-oss && \\
zypper refresh
```

با انجام کار فوق، میرورهای لیارا در سیستم عامل شما تنظیم خواهند شد و درخواست‌های آپدیت یا دانلود پکیج 
به این میرورها ارسال خواهند شد. 


## غیرفعال کردن میرورهای لیارا

برای غیرفعال کردن میرور لیارا، سریع‌ترین راه، بازیابی فایل بکاپ و حذف تنظیمات فعلی است؛ تنها کافیست تا گام‌های زیر را جلو بروید: 

1. حذف تنظیمات فعلی  
با اجرای دستور زیر، در ابتدا، تنظیمات فعلی خود را حذف کنید:

> حتماً قبل از اجرای دستور زیر، از وجود و سلامت فایل پشتیبان اطمینان حاصل کنید.

```bash
zypper removerepo opensuse-oss
```

2. بازگردانی فایل پشتیبان  
یک کپی فایل پشتیبان با دستور زیر، با نام فایل اصلی، بگیرید:

```bash
cp -a /etc/zypp/repos.d/backup/*.repo /etc/zypp/repos.d/
```

3. آپدیت سیستم  
اکنون کافیست تا دستور زیر را اجرا کنید تا فهرست مخازن به‌روزرسانی شود و مطمئن شوید که همه چیز به درستی کار می‌کند:

```bash
zypper refresh && zypper lr -u
```

## all links

[All links of docs](https://docs.liara.ir/all-links-llms.txt)
