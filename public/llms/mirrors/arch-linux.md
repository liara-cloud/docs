Original link: https://docs.liara.ir/mirrors/arch-linux/

# تنظیم میرور در سیستم عامل Arch Linux


لیارا برای سیستم عامل Arch Linux، میرور زیر را ارائه می‌دهد:



```bash
https://linux-mirror.liara.ir/repository/arch/
```


> این میرور فقط مخازن رسمی Arch Linux (معماری `x86_64`) را دارد. توزیع‌هایی که مخازن مخصوص خودشان را دارند (مثل Garuda Linux یا Manjaro) با این میرور کار نمی‌کنند.

برای تنظیم میرور فوق در سیستم عامل Arch Linux خود، گام‌های زیر را طی کنید:

۱. تهیه بکاپ از تنظیمات فعلی  
قبل از تنظیم میرور لیارا، بهتر است یک بکاپ از تنظیمات فعلی تهیه کنید:

```bash
[ -e /etc/pacman.d/mirrorlist.bak ] || sudo cp /etc/pacman.d/mirrorlist /etc/pacman.d/mirrorlist.bak
```

۲. تنظیم میرور لیارا  
برای تنظیم میرور لیارا، دستور زیر را اجرا کنید:

```bash
sudo tee /etc/pacman.d/mirrorlist <<'EOF'
Server = https://linux-mirror.liara.ir/repository/arch/$repo/os/$arch
EOF
```

> عبارت‌های `$repo` و `$arch` را تغییر ندهید و دستور را دقیقاً با همین شکل (با `{`<<'EOF'`}` و تک‌کوتیشن) اجرا کنید. این دو متغیر را خود `pacman` پر می‌کند و اگر شل آن‌ها را جایگزین کند، آدرس نادرست می‌شود.

۳. آپدیت سیستم  
اکنون دستور زیر را اجرا کنید تا فهرست مخازن به‌روزرسانی شود:

```bash
sudo pacman -Syyu
```



با انجام کارهای فوق، میرور لیارا در سیستم عامل Arch Linux شما تنظیم خواهد شد و درخواست‌های آپدیت یا دانلود پکیج به این میرور ارسال می‌شود.

## بازگشت به تنظیمات قبلی

اگر خواستید تنظیمات قبلی را برگردانید، دستورات زیر را اجرا کنید:


```bash
sudo cp /etc/pacman.d/mirrorlist.bak /etc/pacman.d/mirrorlist
sudo pacman -Syy
```


## نکات

- آدرس میرور را باید به‌صورت `.../repository/arch/$repo/os/$arch` در `Server` بنویسید. اگر فقط آدرس پایه (`.../repository/arch/`) را بدهید، `pacman` فایل‌های دیتابیس را پیدا نمی‌کند و خطای 404 می‌گیرد.
- بکاپ فقط در اولین اجرا ساخته می‌شود. اگر دستور گام ۱ را دوباره اجرا کنید، بکاپ اصلی بازنویسی نمی‌شود.

## all links

[All links of docs](https://docs.liara.ir/all-links-llms.txt)
