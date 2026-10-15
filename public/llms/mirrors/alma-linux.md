Original link: https://docs.liara.ir/mirrors/alma-linux/

# تنظیم میرور در سیستم عامل AlmaLinux

لیارا برای سیستم عامل AlmaLinux، میرور زیر را ارائه می‌دهد:

```bash
http://linux-mirror.liara.ir/repository/almalinux/
```

> این میرور مخصوص `AlmaLinux` است. نسخه‌های پشتیبانی‌شده: `AlmaLinux 8`، `AlmaLinux 9` و `AlmaLinux 10`.

برای تنظیم میرور فوق در سیستم عامل AlmaLinux خود، گام‌های زیر را طی کنید:

۱. تهیه بکاپ و تنظیم میرورهای لیارا  
برای تهیه بکاپ از تنظیمات فعلی، غیرفعال کردن میرورهای فعلی و تنظیم میرور لیارا، تنها کافیست دستور زیر را اجرا کنید:

```bash
mkdir -p /etc/yum.repos.d/backup && \\
for f in /etc/yum.repos.d/*.repo; do cp "$f" /etc/yum.repos.d/backup/ \\
&& sed -i "s/enabled=1/enabled=0/g" "$f"; done && \\
cat > /etc/yum.repos.d/liara-mirror.repo <<'EOF'
[liara-baseos]
name=Liara AlmaLinux BaseOS
baseurl=http://linux-mirror.liara.ir/repository/almalinux/$releasever/BaseOS/$basearch/os/
enabled=1
gpgcheck=0
[liara-appstream]
name=Liara AlmaLinux AppStream
baseurl=http://linux-mirror.liara.ir/repository/almalinux/$releasever/AppStream/$basearch/os/
enabled=1
gpgcheck=0
[liara-extras]
name=Liara AlmaLinux Extras
baseurl=http://linux-mirror.liara.ir/repository/almalinux/$releasever/extras/$basearch/os/
enabled=1
gpgcheck=0
EOF
```

این دستور:  
- از همه‌ی فایل‌های `/etc/yum.repos.d/*.repo` در پوشه‌ی `backup` نسخه‌ی پشتیبان می‌گیرد،  
- مخازن فعلی را غیرفعال می‌کند،  
- فایل `liara-mirror.repo` را با میرور لیارا می‌سازد.

۲. آپدیت سیستم  
اکنون دستور زیر را اجرا کنید تا فهرست مخازن به‌روزرسانی شود:

```bash
yum update
```

با انجام کارهای فوق، میرور لیارا در سیستم عامل AlmaLinux شما تنظیم خواهد شد و درخواست‌های آپدیت یا دانلود پکیج به این میرور ارسال می‌شود.

## بازگشت به تنظیمات قبلی

اگر خواستید تنظیمات قبلی را برگردانید، دستورات زیر را اجرا کنید:

```bash
rm -f /etc/yum.repos.d/liara-mirror.repo
cp -f /etc/yum.repos.d/backup/*.repo /etc/yum.repos.d/
yum clean all && yum makecache
```

## all links

[All links of docs](https://docs.liara.ir/all-links-llms.txt)
