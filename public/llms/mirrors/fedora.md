Original link: https://docs.liara.ir/mirrors/fedora/

# تنظیم میرور در سیستم عامل fedora

لیارا برای سیستم عامل fedora، میرور زیر را ارائه می‌دهد: 

```bash
https://linux-mirror.liara.ir/repository/fedora/
```

برای تنظیم میرور فوق در سیستم عامل fedora خود، گام‌های زیر را طی کنید: 

۱. تهیه بکاپ از تنظیمات فعلی  
قبل از تنظیم میرورهای لیارا، بهتر است با اجرای دستورات زیر، یک بکاپ از تنظیمات فعلی سیستم عامل خود تهیه کنید:

```bash
sudo cp /etc/yum.repos.d/fedora.repo /etc/yum.repos.d/fedora.repo.bak
sudo cp /etc/yum.repos.d/fedora-updates.repo /etc/yum.repos.d/fedora-updates.repo.bak
```

۲. تنظیم میرور لیارا  
برای تنظیم میرور لیارا در سیستم عامل فدورا خود، در ابتدا دستور زیر را اجرا کنید:

```bash
sudo nano /etc/yum.repos.d/fedora.repo
```

پس از باز شدن ویرایشگر، تمامی تنظیمات را پاک کنید و تنظیمات زیر را قرار دهید:

```bash
[fedora]
name=Fedora $releasever - $basearch
baseurl=https://linux-mirror.liara.ir/repository/fedora/linux/releases/$releasever/Everything/$basearch/os/
metalink=https://mirrors.fedoraproject.org/metalink?repo=fedora-$releasever&arch=$basearch
enabled=1
countme=1
metadata_expire=7d
repo_gpgcheck=0
type=rpm
gpgcheck=0
gpgkey=file:///etc/pki/rpm-gpg/RPM-GPG-KEY-fedora-$releasever-$basearch
skip_if_unavailable=False
```

سپس، `CTRL + X` را بزنید و سپس `Y` و بعد از آن، `Enter` را بزنید تا تغییرات، ذخیره شوند.                  

در ادامه، دستور زیر را اجرا کنید:

```bash
sudo nano /etc/yum.repos.d/fedora-updates.repo
```

پس از باز شدن ویرایشگر، تمامی تنظیمات را پاک کنید و تنظیمات زیر را قرار دهید:

```bash
[updates]
name=Fedora $releasever - $basearch - Updates
baseurl=http://linux-mirror.liara.ir/repository/fedora/linux/updates/$releasever/Everything/$basearch/
metalink=https://mirrors.fedoraproject.org/metalink?repo=updates-released-f$releasever&arch=$basearch
enabled=1
countme=1
repo_gpgcheck=0
type=rpm
gpgcheck=0
metadata_expire=6h
gpgkey=file:///etc/pki/rpm-gpg/RPM-GPG-KEY-fedora-$releasever-$basearch
skip_if_unavailable=False
```

در نهایت `CTRL + X` را بزنید و سپس `Y` و بعد از آن، `Enter` را بزنید تا تغییرات، ذخیره شوند.

۳. آپدیت سیستم  
اکنون کافیست تا دستور زیر را اجرا کنید تا فهرست مخازن به‌روزرسانی شود:

```bash
sudo dnf update
```

با انجام کارهای فوق، میرورهای لیارا در سیستم عامل شما تنظیم خواهند شد و درخواست‌های آپدیت یا دانلود پکیج  
به این میرورها ارسال خواهند شد.

## all links

[All links of docs](https://docs.liara.ir/all-links-llms.txt)
