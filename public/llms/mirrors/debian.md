Original link: https://docs.liara.ir/mirrors/debian/

# تنظیم میرور در سیستم عامل Debian

لیارا برای سیستم عامل Debian، میرورهای زیر را ارائه می‌دهد:

```bash
http://linux-mirror.liara.ir/repository/debian/
http://linux-mirror.liara.ir/repository/debian-security/
```

> نسخه‌های پشتیبانی‌شده: `Debian 12 (bookworm)` و `Debian 13 (trixie)`.

برای تنظیم میرورهای فوق در سیستم عامل Debian خود، گام‌های زیر را طی کنید:

۱. تهیه بکاپ و خالی کردن sources.list  
قبل از تنظیم میرورهای لیارا، دستور زیر از فایل‌های `sources.list` و `debian.sources` بکاپ می‌گیرد (در پوشه‌ی `/etc/apt/backup`) و سپس محتوای `/etc/apt/sources.list` را پاک می‌کند تا مخازن قدیمی با میرور لیارا تداخل نداشته باشند:

```bash
sudo mkdir -p /etc/apt/backup
for f in /etc/apt/sources.list /etc/apt/sources.list.d/debian.sources; do
  b="/etc/apt/backup/$(basename "$f")"
  [ -f "$f" ] && [ ! -e "$b" ] && sudo cp "$f" "$b"
done
sudo truncate -s 0 /etc/apt/sources.list
```

۲. تنظیم میرور لیارا  
دستور زیر نام نسخه‌ی سیستم عامل شما (مثل `bookworm`) را خودکار تشخیص می‌دهد و فایل `debian.sources` را با میرورهای لیارا می‌سازد:

```bash
CODENAME=$(. /etc/os-release && echo "$VERSION_CODENAME")
sudo tee /etc/apt/sources.list.d/debian.sources <<EOF
Types: deb deb-src
URIs: http://linux-mirror.liara.ir/repository/debian
Suites: $CODENAME $CODENAME-updates
Components: main non-free-firmware
Signed-By: /usr/share/keyrings/debian-archive-keyring.gpg

Types: deb deb-src
URIs: http://linux-mirror.liara.ir/repository/debian-security
Suites: $CODENAME-security
Components: main non-free-firmware
Signed-By: /usr/share/keyrings/debian-archive-keyring.gpg
EOF
```

۳. آپدیت سیستم  
اکنون دستور زیر را اجرا کنید تا فهرست مخازن به‌روزرسانی شود:

```bash
sudo apt update
```

با انجام کارهای فوق، میرورهای لیارا در سیستم عامل شما تنظیم خواهند شد و درخواست‌های آپدیت یا دانلود پکیج به این میرورها ارسال خواهند شد.

## بازگشت به تنظیمات قبلی

اگر خواستید تنظیمات قبلی را برگردانید، دستورات زیر را اجرا کنید:

```bash
sudo cp /etc/apt/backup/sources.list /etc/apt/sources.list
if [ -f /etc/apt/backup/debian.sources ]; then
  sudo cp /etc/apt/backup/debian.sources /etc/apt/sources.list.d/debian.sources
else
  sudo rm -f /etc/apt/sources.list.d/debian.sources
fi
sudo apt update
```

## نکات

- در گام ۱ محتوای `/etc/apt/sources.list` به‌طور کامل پاک می‌شود. اگر مخازن دیگری (غیر از Debian) در این فایل اضافه کرده بودید، آن‌ها را از فایل بکاپ به یک فایل جدید در `/etc/apt/sources.list.d/` منتقل کنید.
- بکاپ‌ها فقط در اولین اجرا ساخته می‌شوند. اگر دستور گام ۱ را دوباره اجرا کنید، بکاپ اصلی بازنویسی نمی‌شود.

## all links

[All links of docs](https://docs.liara.ir/all-links-llms.txt)
