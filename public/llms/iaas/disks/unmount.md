Original link: https://docs.liara.ir/iaas/disks/unmount/

# قطع اتصال یک نقطه از دیسک (unmount)

مفهوم unmount کردن به معنای قطع اتصال یک دستگاه ذخیره‌سازی (مانند دیسک سخت، پارتیشن یا درایو USB) از سیستم فایل لینوکس است. وقتی یک دیسک یا پارتیشن را unmount می‌کنید، سیستم عامل آن را از دایرکتوری خاصی (که به آن "mount point" گفته می‌شود) جدا می‌کند تا شما دیگر نتوانید به داده‌های ذخیره‌شده روی آن دسترسی پیدا کنید. به عبارت دیگر، با unmount کردن یک دیسک، آن دیسک از ساختار فایل سیستم لینوکس جدا می‌شود و شما نمی‌توانید با دستورات معمول سیستم‌عامل، به فایل‌ها و پوشه‌های آن دسترسی داشته باشید.

هنگام قطع اتصال دیسک از سرور مجازی ابری، باید مطمئن شوید که هیچ فرآیندی در حال استفاده از دیسک نیست. در غیر این صورت، ممکن است داده‌ها از دست بروند یا سیستم دچار مشکل شود.

برای قطع اتصال دیسک، می‌توانید به دو صورت عمل کنید. یا فضای دیسک را از گروه LVM جدا کنید و یا به‌صورت سنتی، دیسک را از مسیر موردنظر خود، unmount کنید.

## LVM

برای قطع اتصال دیسک از مسیر مدنظرتان و حذف آن از سیستم LVM، گام‌های زیر را دنبال کنید:

۱. بررسی نام Logical Volume   

ابتدا نام Logical Volume (LV) و Mount Point را با اجرای دستور زیر، پیدا کنید:

```bash
lvdisplay
```

خروجی، مشابه زیر خواهد بود:

```bash
--- Logical volume ---
  LV Path                /dev/some/some-lv
  LV Name                some-lv
  VG Name                some
  LV UUID                G9L8KX-LQ8R-vbFn-Y2yg-PmYd-IaJM-IEKF6f
  LV Write Access        read/write
  LV Creation host, time ubuntu-vm-name, 2025-03-08 08:14:36 +0000
  LV Status              available
  # open                 0
  LV Size                <5.00 GiB
  Current LE             1279
  Segments               1
  Allocation             inherit
  Read ahead sectors     auto
  - currently set to     256
  Block device           253:0

  --- Logical volume ---
  LV Path                /dev/ubuntu-vg/ubuntu-lv
  LV Name                ubuntu-lv
  VG Name                ubuntu-vg
  LV UUID                SXzKTt-zdfc-CraI-GYlS-bOqB-0r6Q-jlRYSI
  LV Write Access        read/write
  LV Creation host, time ubuntu-server, 2025-02-22 12:31:15 +0000
  LV Status              available
  # open                 1
  LV Size                <32.54 GiB
  Current LE             8330
  Segments               3
  Allocation             inherit
  Read ahead sectors     auto
  - currently set to     256
  Block device           253:1
```

در خروجی دستور فوق، `LV Path` مسیری است برای قطع اتصال دیسک، باید آن را unmount کنید.

۲. Unmount کردن Logical Volume   

اگر نام Logical Volume (مثلاً `/dev/<vg-name>/<lv-name>`) را پیدا کردید، آن را با دستور زیر unmount کنید:

```bash
umount /dev/<vg-name>/<lv-name>
```

در صورتی که با خطای `.umount: <path-to-directory>: target is busy` مواجه شدید، باید ابتدا فرآیندی که از دیسک استفاده می‌کند را پیدا کرده و آن را ببندید. برای مشاهده فرایندهای موجود در دیسک، از دستور زیر استفاده کنید:

```bash
lsof +D /path/to/myDir
```

در دستور فوق، به جای `path/to/myDir/`، مسیری که در خروجی خطا نمایش داده شده است را وارد کنید. برای بستن پردازش‌های موجود در این مسیر، از دستور زیر استفاده کنید:

```bash
fuser -k /path/to/myDir
```

۳. حذف Logical Volume (اختیاری)   

اگر قصد دارید Logical Volume را از LVM خارج کنید، آن را در ابتدا، غیرفعال (deactivate) کنید:

```bash
lvchange -an /dev/<vg-name>/<lv-name>
```

سپس، برای حذف LV به طور کامل، دستور زیر را اجرا کنید:

```bash
lvremove /dev/<vg-name>/<lv-name>
```

۴. حذف Volume Group (اختیاری)   

اگر هیچ LV دیگری در Volume Group باقی نمانده و قصد دارید که Volume Group را حذف کنید، دستور زیر را، اجرا کنید.

```bash
vgremove <vg-name>
```

۵. حذف Physical Volume (اختیاری)   

در نهایت، می‌توانید Physical Volume را حذف کنید. برای این کار، از دستور زیر استفاده کنید:

```bash
pvremove /dev/<disk-name>
```

## Traditional

برای قطع اتصال دیسک از مسیر مدنظرتان، گام‌های زیر را دنبال کنید:

۱. مشاهده دیسک‌های موجود   

با استفاده از دستور `lsblk` دیسک‌های موجود و پارتیشن‌های آن‌ها را مشاهده کنید.

```bash
lsblk
```

همانطور که در خروجی دستور فوق مشاهده می‌کنید، دیسک‌های متصل به سرور نمایش داده می‌شوند.

۲. unmount کردن دیسک   

برای unmount کردن دیسک، کافیست تا دستور زیر را اجرا کنید:

```bash
umount /path/to/myDir
```

در قطعه کد فوق، عبارت `path/to/myDir/` را با مسیری که می‌خواهید دیسک را از آن unmount کنید، جایگزین کنید.
در صورتی که با خطای `.umount: <path-to-dir>: target is busy` مواجه شدید، باید ابتدا فرآیندی که از دیسک استفاده می‌کند را پیدا کرده و آن را ببندید. برای مشاهده فرایندهای موجود در دیسک، از دستور زیر استفاده کنید:

```bash
lsof +D /path/to/myDir
```

در دستور فوق، به جای `path/to/myDir/`، مسیری که در خروجی خطا نمایش داده شده است را وارد کنید. برای بستن پردازش‌های موجود در این مسیر، از دستور زیر استفاده کنید:

```bash
fuser -k /path/to/myDir
```

## all links

[All links of docs](https://docs.liara.ir/all-links-llms.txt)
