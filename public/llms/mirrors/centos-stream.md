Original link: https://docs.liara.ir/mirrors/centos-stream/

# تنظیم میرور در سیستم عامل CentOS Stream


لیارا برای سیستم عامل CentOS Stream، میرور زیر را ارائه می‌دهد: 



```bash
https://linux-mirror.liara.ir/repository/centos/
```


برای تنظیم میرور فوق در سیستم عامل CentOS Stream خود، گام‌های زیر را طی کنید: 

۱. تهیه بکاپ و تنظیم میرورهای لیارا  
برای تهیه بکاپ از تنظیمات فعلی، غیرفعال کردن میرورهای فعلی و تنظیم میرور لیارا، تنها کافیست تا دستور زیر را اجرا کنید:

```bash
cat >/etc/yum.repos.d/liara-mirror.repo <<'EOF'
[liara-baseos]
name=Liara CentOS Stream $releasever - BaseOS
baseurl=https://linux-mirror.liara.ir/repository/centos/$releasever-stream/BaseOS/$basearch/os/
enabled=1
countme=1
metadata_expire=6h
gpgcheck=1
repo_gpgcheck=0
gpgkey=https://linux-mirror.liara.ir/repository/keys/RPM-GPG-KEY-CentOS-Official-SHA256

[liara-appstream]
name=Liara CentOS Stream $releasever - AppStream
baseurl=https://linux-mirror.liara.ir/repository/centos/$releasever-stream/AppStream/$basearch/os/
enabled=1
countme=1
metadata_expire=6h
gpgcheck=1
repo_gpgcheck=0
gpgkey=https://linux-mirror.liara.ir/repository/keys/RPM-GPG-KEY-CentOS-Official-SHA256

[liara-crb]
name=Liara CentOS Stream $releasever - CRB
baseurl=https://linux-mirror.liara.ir/repository/centos/$releasever-stream/CRB/$basearch/os/
enabled=0
countme=1
metadata_expire=6h
gpgcheck=1
repo_gpgcheck=0
gpgkey=https://linux-mirror.liara.ir/repository/keys/RPM-GPG-KEY-CentOS-Official-SHA256
EOF
```

۳. آپدیت سیستم  
اکنون کافیست تا دستور زیر را اجرا کنید تا فهرست مخازن به‌روزرسانی شود:

```bash
yum update
```




با انجام کارهای فوق، میرورهای لیارا در سیستم عامل شما تنظیم خواهند شد و درخواست‌های آپدیت یا دانلود پکیج  
به این میرورها ارسال خواهند شد. 



## غیرفعال کردن میرورهای لیارا

برای غیرفعال کردن میرور لیارا، سریع‌ترین راه، بازیابی فایل بکاپ و حذف تنظیمات فعلی است؛ تنها کافیست تا گام‌های زیر را جلو بروید: 

۱. حذف تنظیمات فعلی  
با اجرای دستور زیر، در ابتدا، تنظیمات فعلی خود را حذف کنید:

> حتماً قبل از اجرای دستور زیر، از وجود و سلامت فایل پشتیبان اطمینان حاصل کنید.

```bash
rm -f /etc/yum.repos.d/liara-mirror.repo
```

۲. بازگردانی فایل پشتیبان  
یک کپی از فایل پشتیبان با دستور زیر، با نام فایل اصلی، بگیرید:

```bash
cp -f /etc/yum.repos.d/backup/*.repo /etc/yum.repos.d/
```

۳. آپدیت سیستم  
اکنون کافیست تا دستور زیر را اجرا کنید تا فهرست مخازن به‌روزرسانی شود و مطمئن شوید که همه چیز به درستی کار می‌کند:

```bash
yum clean all && yum makecache && yum repolist
```

## all links

[All links of docs](https://docs.liara.ir/all-links-llms.txt)
