Original link: https://docs.liara.ir/mirrors/centos/

# تنظیم میرور در سیستم عامل CentOS

لیارا برای سیستم عامل CentOS، میرور زیر را ارائه می‌دهد: 

```bash
https://linux-mirror.liara.ir/repository/centos/
```

برای تنظیم میرور فوق در سیستم عامل CentOS خود، گام‌های زیر را طی کنید: 

۱. تهیه بکاپ و تنظیم میرورهای لیارا  
برای تهیه بکاپ از تنظیمات فعلی، غیرفعال کردن میرورهای فعلی و تنظیم میرور لیارا، تنها کافیست تا دستور زیر را اجرا کنید:

```bash
mkdir -p /etc/yum.repos.d/backup && \\
for f in /etc/yum.repos.d/*.repo; do cp "$f" /etc/yum.repos.d/backup/ \\
&& sed -i "s/enabled=1/enabled=0/g" "$f"; done && \\
cat > /etc/yum.repos.d/liara-mirror.repo <<'EOF'
[liara-baseos]
name=Liara CentOS BaseOS
baseurl=https://linux-mirror.liara.ir/repository/centos/$releasever/BaseOS/$basearch/os/
enabled=1
gpgcheck=0

[liara-appstream]
name=Liara CentOS AppStream
baseurl=https://linux-mirror.liara.ir/repository/centos/$releasever/AppStream/$basearch/os/
enabled=1
gpgcheck=0

[liara-extras]
name=Liara CentOS Extras
baseurl=https://linux-mirror.liara.ir/repository/centos/$releasever/extras/$basearch/os/
enabled=1
gpgcheck=0
EOF
```

۳. آپدیت سیستم  
اکنون کافیست تا دستور زیر را اجرا کنید تا فهرست مخازن به‌روزرسانی شود:

```bash
yum update
```

با انجام کارهای فوق، میرورهای لیارا در سیستم عامل شما تنظیم خواهند شد و درخواست‌های آپدیت یا دانلود پکیج  
به این میرورها ارسال خواهند شد.  

## all links

[All links of docs](https://docs.liara.ir/all-links-llms.txt)
