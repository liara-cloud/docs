Original link: https://docs.liara.ir/iaas/details/openssh-package/

# ابزار OpenSSH 

[OpenSSH](https://www.openssh.com/) یک ابزار متن‌باز برای برقراری ارتباط امن از طریق پروتکل SSH (Secure Shell) است. این ابزار شامل سرویس‌دهنده sshd، سرویس‌گیرنده ssh و ابزارهایی مانند scp و sftp برای انتقال امن داده‌ها است. OpenSSH از رمزگذاری (encryption)، احراز هویت (authentication) و port forwarding پشتیبانی می‌کند و برای مدیریت امن سرورها در شبکه‌های ناامن استفاده می‌شود. این پروژه توسط OpenBSD توسعه داده شده و روی اکثر سیستم‌عامل‌های یونیکس و لینوکس در دسترس است.

## SSH چیست؟

SSH (Secure Shell) یک پروتکل رمزنگاری‌شده برای اتصال امن به سرورهای مجازی ابری از طریق شبکه‌های ناامن، مانند اینترنت است. این پروتکل جایگزین امنی برای Telnet و سایر روش‌های قدیمی ورود به سرورها محسوب می‌شود، زیرا تمام داده‌های ارسالی و دریافتی را رمزنگاری می‌کند. SSH معمولاً برای مدیریت سرورهای لینوکسی، انتقال فایل (با استفاده از SCP یا SFTP) و اجرای دستورات از راه دور استفاده می‌شود. 

یکی از روش‌های توصیه‌شده برای اتصال به سرور مجازی ابری، استفاده از ابزار OpenSSH است که می‌توانید مطابق با سیستم‌عامل‌تان، آن را نصب کرده و به سرور مجازی ابری خود، متصل شوید.

## نصب OpenSSH

### Windows

از ویندوز ۱۰ به بعد، OpenSSH به‌صورت پیش‌فرض بر روی سیستم، نصب شده است.  
می‌توانید نصب بودن آن را با اجرای دستور زیر، بررسی کنید:

```bash
ssh -V
```

اگر OpenSSH بر روی سیستم‌عامل‌تان، نصب نیست، می‌توانید آن را با استفاده از ابزار PowerShell، بر روی سیستم‌عامل خود، نصب کنید. در ابتدا، PowerShell را با دسترسی administrator باز کنید، سپس دستور زیر را در آن، اجرا کنید:

```bash
Get-WindowsCapability -Online | ? Name -like 'OpenSSH.Client*' | Add-WindowsCapability -Online
```

---

### MacOS

در MacOS، پکیج OpenSSH به‌صورت پیش‌فرض بر روی سیستم، نصب شده است.  
می‌توانید نصب بودن آن را با اجرای دستور زیر، بررسی کنید:

```bash
ssh -V
```

اگر OpenSSH بر روی سیستم‌عامل‌تان، نصب نیست، می‌توانید آن را با استفاده از دستور `brew`، بر روی سیستم‌عامل خود، نصب کنید:

```bash
brew install openssh
```

---

### Linux

پکیج OpenSSH معمولاً به‌صورت پیش‌فرض در اکثر توزیع‌های لینوکس نصب است، می‌توانید نصب بودن یا نبودن این پکیج را با اجرای دستور زیر در ترمینال خود، بررسی کنید:

```bash
ssh -V
```

اگر OpenSSH بر روی سیستم‌عامل‌تان، نصب نیست، می‌توانید آن را با توجه به نوع توزیع خود نصب کنید:

#### Debian

برای نصب OpenSSH، دستورات زیر را اجرا کنید:

```bash
sudo apt update
sudo apt install -y openssh-client
```

#### Debian (duplicate tab)

برای نصب OpenSSH، دستورات زیر را اجرا کنید:

```bash
sudo apt update
sudo apt install -y openssh-client
```

#### Rocky Linux

برای نصب OpenSSH، دستورات زیر را اجرا کنید:

```bash
sudo yum install -y openssh-clients
# sudo dnf install openssh-clients -y # برای نسخه‌های جدیدتر
```

#### CentOS

برای نصب OpenSSH، دستورات زیر را اجرا کنید:

```bash
sudo yum install -y openssh-clients
# sudo dnf install openssh-clients -y # برای نسخه‌های جدیدتر
```

#### RHEL

برای نصب OpenSSH، دستورات زیر را اجرا کنید:

```bash
sudo yum install -y openssh-clients
# sudo dnf install openssh-clients -y # برای نسخه‌های جدیدتر
```

#### AlmaLinux

برای نصب OpenSSH، دستورات زیر را اجرا کنید:

```bash
sudo yum install -y openssh-clients
# sudo dnf install openssh-clients -y # برای نسخه‌های جدیدتر
```

#### Arch Linux

برای نصب OpenSSH، دستور زیر را اجرا کنید:

```bash
sudo pacman -S openssh
```

#### Manjaro

برای نصب OpenSSH، دستور زیر را اجرا کنید:

```bash
sudo pacman -S openssh
```

## all links

[All links of docs](https://docs.liara.ir/all-links-llms.txt)
