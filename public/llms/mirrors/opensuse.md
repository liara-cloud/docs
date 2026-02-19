Original link: https://docs.liara.ir/mirrors/opensuse/

# تنظیم میرور در سیستم عامل OpenSUSE

لیارا برای سیستم عامل OpenSUSE، میرور زیر را ارائه می‌دهد: 

```bash
https://linux-mirror.liara.ir/repository/opensuse/
```

برای تنظیم میرور فوق در سیستم عامل OpenSUSE خود، کافیست تا دستورات زیر را اجرا کنید: 

```bash
zypper addrepo \\
  --priority 100 \\
  --no-gpgcheck \\
  https://linux-mirror.liara.ir/repository/opensuse/distribution/leap/$releasever/repo/oss/ \\
  opensuse-oss
```

```bash
zypper refresh
```

با انجام کار فوق، میرورهای لیارا در سیستم عامل شما تنظیم خواهند شد و درخواست‌های آپدیت یا دانلود پکیج 
به این میرورها ارسال خواهند شد. 

## all links

[All links of docs](https://docs.liara.ir/all-links-llms.txt)
