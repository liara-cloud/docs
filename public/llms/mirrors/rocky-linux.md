Original link: https://docs.liara.ir/mirrors/rocky-linux/

# تنظیم میرور در سیستم عامل Rocky Linux


لیارا برای سیستم عامل Rocky Linux، میرور زیر را ارائه می‌دهد:



```bash
https://linux-mirror.liara.ir/repository/rocky/
```


> نسخه‌های پشتیبانی‌شده: `Rocky Linux 9` و `Rocky Linux 10`.

برای تنظیم میرور فوق در سیستم عامل Rocky Linux خود، گام‌های زیر را طی کنید (دستورات را با کاربر root یا با `sudo` اجرا کنید):

۱. تهیه بکاپ از تنظیمات فعلی
قبل از تنظیم میرورهای لیارا، بهتر است یک بکاپ از تنظیمات فعلی تهیه کنید:

```bash
cp /etc/yum.repos.d/rocky.repo /etc/yum.repos.d/rocky.repo.bak
```

۲. تنظیم میرور لیارا
برای تنظیم میرور لیارا، دستور زیر را اجرا کنید:

```bash
tee /etc/yum.repos.d/rocky.repo <<'EOF'
[baseos]
name=Rocky Linux $releasever - BaseOS
baseurl=https://linux-mirror.liara.ir/repository/rocky/$releasever/BaseOS/$basearch/os/
enabled=1
gpgcheck=1
gpgkey=file:///etc/pki/rpm-gpg/RPM-GPG-KEY-Rocky-$releasever
metadata_expire=6h

[appstream]
name=Rocky Linux $releasever - AppStream
baseurl=https://linux-mirror.liara.ir/repository/rocky/$releasever/AppStream/$basearch/os/
enabled=1
gpgcheck=1
gpgkey=file:///etc/pki/rpm-gpg/RPM-GPG-KEY-Rocky-$releasever
metadata_expire=6h

[crb]
name=Rocky Linux $releasever - CRB
baseurl=https://linux-mirror.liara.ir/repository/rocky/$releasever/CRB/$basearch/os/
enabled=1
gpgcheck=1
gpgkey=file:///etc/pki/rpm-gpg/RPM-GPG-KEY-Rocky-$releasever
metadata_expire=6h
EOF
```

۳. آپدیت سیستم
اکنون دستور زیر را اجرا کنید تا فهرست مخازن به‌روزرسانی شود:

```bash
dnf clean all && dnf update
```



با انجام کارهای فوق، میرور لیارا در سیستم عامل Rocky Linux شما تنظیم خواهد شد و درخواست‌های آپدیت یا دانلود پکیج به این میرور ارسال می‌شود.

## عیب‌یابی

اگر هنگام اجرای `dnf` خطای `404` می‌گیرید، احتمالاً در آدرس مخزن‌ها از `$contentdir` استفاده شده است. این متغیر در Rocky Linux به `pub/rocky` تبدیل می‌شود و آدرس نهایی نادرست خواهد بود. در فایل `/etc/yum.repos.d/rocky.repo` عبارت `$contentdir/` را از خطوط `baseurl` حذف کنید، یا فایل را با دستور گام ۲ دوباره بنویسید.



اگر خطای کلید GPG می‌گیرید (مثلاً در Rocky Linux 10)، مطمئن شوید خط `gpgkey` شما به‌جای شماره‌ی ثابت از `$releasever` استفاده می‌کند، مثل مثال بالا.

## بازگشت به تنظیمات قبلی

اگر خواستید تنظیمات قبلی را برگردانید، دستورات زیر را اجرا کنید:


```bash
cp -f /etc/yum.repos.d/rocky.repo.bak /etc/yum.repos.d/rocky.repo
dnf clean all && dnf makecache
```

## all links

[All links of docs](https://docs.liara.ir/all-links-llms.txt)
