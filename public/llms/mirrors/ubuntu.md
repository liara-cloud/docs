Original link: https://docs.liara.ir/mirrors/ubuntu/

# تنظیم میرور در سیستم عامل Ubuntu


## سرویس میرور Ubuntu لیارا چیست؟

میرور Ubuntu لیارا یک نسخه‌ی کامل و به‌روز از مخازن رسمی Ubuntu و همچنین بخش‌های امنیتی آن شامل Ubuntu Security Team است.



این سرویس با هدف افزایش سرعت، پایداری و دسترس‌پذیری پکیج‌ها و آپدیت‌های امنیتی طراحی شده و نسخه‌های مختلف مخازن اصلی و مخزن امنیتی را با سرعت بسیار بالا ارائه می‌دهد.



در این ساختار، درخواست‌های apt ابتدا به سرورهای داخلی لیارا ارسال شده و بسته‌ی مورد نظر از کش داخلی بازیابی می‌شود. با این رویکرد، دریافت آپدیت‌ها و پکیج‌ها بدون مواجهه با محدودیت‌های خارجی، تحریم‌ها یا قطع و وصل اینترنت بین‌الملل انجام می‌شود.

## تنظیم میرور در سیستم عامل Ubuntu

لیارا برای سیستم عامل Ubuntu، میرورهای زیر را ارائه می‌دهد:



```bash
http://linux-mirror.liara.ir/repository/ubuntu/
http://linux-mirror.liara.ir/repository/ubuntu-security/
```


برای تنظیم میرورهای فوق در سیستم عامل Ubuntu خود، گام‌های زیر را طی کنید:

۱. تهیه بکاپ و خالی کردن sources.list  
قبل از تنظیم میرورهای لیارا، دستور زیر از فایل‌های `sources.list` و `ubuntu.sources` بکاپ می‌گیرد (در پوشه‌ی `/etc/apt/backup`) و سپس محتوای `/etc/apt/sources.list` را پاک می‌کند تا مخازن قدیمی با میرور لیارا تداخل نداشته باشند:

```bash
sudo mkdir -p /etc/apt/backup
for f in /etc/apt/sources.list /etc/apt/sources.list.d/ubuntu.sources; do
  b="/etc/apt/backup/$(basename "$f")"
  [ -f "$f" ] && [ ! -e "$b" ] && sudo cp "$f" "$b"
done
sudo truncate -s 0 /etc/apt/sources.list
```

۲. تنظیم میرور لیارا  
دستور زیر نام نسخه‌ی سیستم عامل شما (مثل `noble`) را خودکار تشخیص می‌دهد و فایل `ubuntu.sources` را با میرورهای لیارا می‌سازد:

```bash
CODENAME=$(. /etc/os-release && echo "$VERSION_CODENAME")
sudo tee /etc/apt/sources.list.d/ubuntu.sources <<EOF
Types: deb
URIs: http://linux-mirror.liara.ir/repository/ubuntu
Suites: $CODENAME $CODENAME-updates $CODENAME-backports
Components: main restricted universe multiverse
Signed-By: /usr/share/keyrings/ubuntu-archive-keyring.gpg

Types: deb
URIs: http://linux-mirror.liara.ir/repository/ubuntu-security
Suites: $CODENAME-security
Components: main restricted universe multiverse
Signed-By: /usr/share/keyrings/ubuntu-archive-keyring.gpg
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
sudo cp /etc/apt/backup/ubuntu.sources /etc/apt/sources.list.d/ubuntu.sources
sudo apt update
```


## نکات

- در گام ۱ محتوای `/etc/apt/sources.list` به‌طور کامل پاک می‌شود. اگر مخازن دیگری (غیر از Ubuntu) در این فایل اضافه کرده بودید، آن‌ها را از فایل بکاپ به یک فایل جدید در `/etc/apt/sources.list.d/` منتقل کنید.
- بکاپ‌ها فقط در اولین اجرا ساخته می‌شوند. اگر دستور گام ۱ را دوباره اجرا کنید، بکاپ اصلی بازنویسی نمی‌شود.

## all links

[All links of docs](https://docs.liara.ir/all-links-llms.txt)
