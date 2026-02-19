Original link: https://docs.liara.ir/mirrors/manjaro/

# تنظیم میرور در سیستم عامل Manjaro

لیارا برای سیستم عامل Manjaro، میرور زیر را ارائه می‌دهد: 

```bash
https://linux-mirror.liara.ir/repository/manjaro/
```

برای تنظیم میرور فوق در سیستم عامل Manjaro خود، گام‌های زیر را طی کنید: 

۱. تهیه بکاپ از تنظیمات فعلی  
قبل از تنظیم میرورهای لیارا، بهتر است با اجرای دستورات زیر، یک بکاپ از تنظیمات فعلی سیستم عامل خود تهیه کنید:

```bash
cp /etc/pacman.d/mirrorlist /etc/pacman.d/mirrorlist.bak
```

۲. تنظیم میرور لیارا  
برای تنظیم میرور لیارا در سیستم عامل مانجارو خود، در ابتدا دستور زیر را اجرا کنید:

```bash
echo "Server = https://linux-mirror.liara.ir/repository/manjaro/stable/\$repo/\$arch" \
 | tee /etc/pacman.d/mirrorlist > /dev/null
```

۳. آپدیت سیستم  
اکنون کافیست تا دستور زیر را اجرا کنید تا فهرست مخازن به‌روزرسانی شود:

```bash
pacman -Syyu
```

با انجام کارهای فوق، میرورهای لیارا در سیستم عامل شما تنظیم خواهند شد و درخواست‌های آپدیت یا دانلود پکیج  
به این میرورها ارسال خواهند شد. 

## all links

[All links of docs](https://docs.liara.ir/all-links-llms.txt)
