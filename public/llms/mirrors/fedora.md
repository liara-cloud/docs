Original link: https://docs.liara.ir/mirrors/fedora/

# تنظیم میرور در سیستم عامل Fedora

لیارا برای سیستم عامل Fedora، میرور زیر را ارائه می‌دهد:

```bash
https://linux-mirror.liara.ir/repository/fedora/
```

> فقط نسخه‌هایی از Fedora روی میرور موجود هستند که هنوز توسط خود Fedora پشتیبانی می‌شوند. نسخه‌هایی که به پایان عمر (EOL) رسیده‌اند از مخازن اصلی Fedora حذف شده‌اند.

برای تنظیم میرور فوق در سیستم عامل Fedora خود، گام‌های زیر را طی کنید:

۱. تهیه بکاپ از تنظیمات فعلی  
قبل از تنظیم میرار لیارا، بهتر است یک بکاپ از تنظیمات فعلی تهیه کنید:

```bash
for f in fedora fedora-updates; do
  [ -f /etc/yum.repos.d/$f.repo ] && [ ! -e /etc/yum.repos.d/$f.repo.bak ] && sudo cp /etc/yum.repos.d/$f.repo /etc/yum.repos.d/$f.repo.bak
done
```

۲. تنظیم میرور لیارا  
ابتدا مخزن اصلی Fedora را تنظیم کنید:

```bash
sudo tee /etc/yum.repos.d/fedora.repo <<'EOF'
[fedora]
name=Fedora $releasever - $basearch
baseurl=https://linux-mirror.liara.ir/repository/fedora/linux/releases/$releasever/Everything/$basearch/os/
enabled=1
metadata_expire=7d
repo_gpgcheck=0
type=rpm
gpgcheck=1
gpgkey=file:///etc/pki/rpm-gpg/RPM-GPG-KEY-fedora-$releasever-$basearch
skip_if_unavailable=False
EOF
```

سپس مخزن آپدیت‌ها را تنظیم کنید:

```bash
sudo tee /etc/yum.repos.d/fedora-updates.repo <<'EOF'
[updates]
name=Fedora $releasever - $basearch - Updates
baseurl=https://linux-mirror.liara.ir/repository/fedora/linux/updates/$releasever/Everything/$basearch/
enabled=1
repo_gpgcheck=0
type=rpm
gpgcheck=1
metadata_expire=6h
gpgkey=file:///etc/pki/rpm-gpg/RPM-GPG-KEY-fedora-$releasever-$basearch
skip_if_unavailable=False
EOF
```

۳. آپدیت سیستم  
اکنون دستور زیر را اجرا کنید تا فهرست مخازن به‌روزرسانی شود:

```bash
sudo dnf clean all && sudo dnf update
```

با انجام کارهای فوق، میرور لیارا در سیستم عامل Fedora شما تنظیم خواهد شد و درخواست‌های آپدیت یا دانلود پکیج به این میرور ارسال می‌شود.

## بازگشت به تنظیمات قبلی

اگر خواستید تنظیمات قبلی را برگردانید، دستورات زیر را اجرا کنید:

```bash
sudo cp /etc/yum.repos.d/fedora.repo.bak /etc/yum.repos.d/fedora.repo
sudo cp /etc/yum.repos.d/fedora-updates.repo.bak /etc/yum.repos.d/fedora-updates.repo
sudo dnf clean all
```

## نکات

- آدرس مخزن‌ها را دقیقاً با همین ساختار (`.../linux/releases/$releasever/Everything/$basearch/os/` و `.../linux/updates/$releasever/Everything/$basearch/`) بنویسید. اگر فقط آدرس پایه (`.../repository/fedora/`) را بدهید، `dnf` فایل‌های متادیتا را پیدا نمی‌کند و خطای 404 می‌گیرد.
- امضای پکیج‌ها (`gpgcheck=1`) با کلیدهای GPG خود Fedora که از قبل روی سیستم نصب است بررسی می‌شود.
- بکاپ فقط در اولین اجرا ساخته می‌شود. اگر دستور گام ۱ را دوباره اجرا کنید، بکاپ اصلی بازنویسی نمی‌شود.

## all links

[All links of docs](https://docs.liara.ir/all-links-llms.txt)
