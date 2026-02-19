Original link: https://docs.liara.ir/mirrors/rocky-linux/

# تنظیم میرور در سیستم عامل Rocky Linux

لیارا برای سیستم عامل Rocky Linux، میرور زیر را ارائه می‌دهد: 

```bash
https://linux-mirror.liara.ir/repository/rocky/
```

برای تنظیم میرور فوق در سیستم عامل Rocky Linux خود، گام‌های زیر را طی کنید: 

۱. تهیه بکاپ از تنظیمات فعلی  
قبل از تنظیم میرورهای لیارا، بهتر است با اجرای دستورات زیر، یک بکاپ از تنظیمات فعلی سیستم عامل خود تهیه کنید (در صورت وجود):

```bash
cp /etc/yum.repos.d/rocky.repo /etc/yum.repos.d/rocky.repo.bak
```

۲. تنظیم میرور لیارا  
برای تنظیم میرور لیارا در سیستم عامل راکی لینوکس خود، دستور زیر را اجرا کنید:

```bash
tee /etc/yum.repos.d/rocky.repo <<'EOF'
[baseos]
name=Rocky Linux $releasever - BaseOS
baseurl=https://linux-mirror.liara.ir/repository/rocky/$contentdir/$releasever/BaseOS/$basearch/os/
enabled=1
gpgcheck=1
gpgkey=file:///etc/pki/rpm-gpg/RPM-GPG-KEY-Rocky-9
metadata_expire=6h

[appstream]
name=Rocky Linux $releasever - AppStream
baseurl=https://linux-mirror.liara.ir/repository/rocky/$contentdir/$releasever/AppStream/$basearch/os/
enabled=1
gpgcheck=1
gpgkey=file:///etc/pki/rpm-gpg/RPM-GPG-KEY-Rocky-9
metadata_expire=6h

[crb]
name=Rocky Linux $releasever - CRB
baseurl=https://linux-mirror.liara.ir/repository/rocky/$contentdir/$releasever/CRB/$basearch/os/
enabled=1
gpgcheck=1
gpgkey=file:///etc/pki/rpm-gpg/RPM-GPG-KEY-Rocky-9
metadata_expire=6h
EOF
```

۳. آپدیت سیستم  
اکنون کافیست تا دستور زیر را اجرا کنید تا فهرست مخازن به‌روزرسانی شود:

```bash
dnf clean all && dnf update
```

با انجام کارهای فوق، میرور لیارا در سیستم عامل شما تنظیم خواهند شد و درخواست‌های آپدیت یا دانلود پکیج  
به این میرورها ارسال خواهند شد. 

## all links

[All links of docs](https://docs.liara.ir/all-links-llms.txt)
