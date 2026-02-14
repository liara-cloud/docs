Original link: https://docs.liara.ir/iaas/disks/see-disk-details/

# مشاهده دیسک‌ها

برای مشاهده دیسک‌ها و اطلاعات مربوط به آن‌ها، می‌توانید پس از اتصال به سرور مجازی خود با استفاده از SSH، از دستورات زیر، استفاده کنید:

## دستور lsblk
دستور `lsblk`  اطلاعات مربوط به دیسک‌ها، پارتیشن‌ها و دستگاه‌های ذخیره‌سازی متصل به سیستم را نمایش می‌دهد.  
خروجی این دستور، شامل  نام دیسک/پارتیشن، حجم (Size)، نوع (Type: disk/part/lvm) و نقطه اتصال دیسک (Mountpoint) است:

```bash
lsblk
```

طبق خروجی دستور فوق، دیسک اصلی با نام `sda` ظرفیت ۱۵ گیگابایت دارد و شامل چند پارتیشن است: 

- `sda1`: با اندازه ۷۱۵ مگابایت که برای بخش بوت در سیستم UEFI به‌کار می‌رود.
- `sda2`: با اندازه ۱.۸ گیگابایت به‌عنوان محل ذخیره فایل‌های بوت لینوکس به‌کار می‌رود.
- `sda3`: با اندازه ۱۲.۵ گیگابایت که از نوع LVM است و به Volume Group با نام `ubuntu-vg` اضافه شده است.

همچنین، دیسک ثانویه با نام `sdb` ظرفیت ۲۵ گیگابایت دارد و بدون پارتیشن‌های اضافی است.  
این دیسک نیز به Volume Group با نام `ubuntu-vg` اضافه شده است.  

## دستور fdisk

دستور `fdisk` اطلاعات جامع‌تری درباره‌ی دیسک‌های فیزیکی، نوع پارتیشن‌ها و اندازه آن‌ها نمایش می‌دهد.

```bash
fdisk -l
```

```bash
root@ubuntu-my-server:~# fdisk -l
Disk /dev/sda: 15 GiB, 16106127360 bytes, 31457280 sectors
Disk model: Virtual disk
Units: sectors of 1 * 512 = 512 bytes
Sector size (logical/physical): 512 bytes / 512 bytes
I/O size (minimum/optimal): 512 bytes / 512 bytes
Disklabel type: gpt
Disk identifier: 038E8868-5902-4262-BA6C-5BCB9FEB5AB1

Device       Start      End  Sectors  Size Type
/dev/sda1     2048  1466367  1464320  715M EFI System
/dev/sda2  1466368  5136383  3670016  1.8G Linux filesystem
/dev/sda3  5136384 31455231 26318848 12.5G Linux filesystem


Disk /dev/sdb: 25 GiB, 26843545600 bytes, 52428800 sectors
Disk model: Virtual disk
Units: sectors of 1 * 512 = 512 bytes
Sector size (logical/physical): 512 bytes / 512 bytes
I/O size (minimum/optimal): 512 bytes / 512 bytes


Disk /dev/mapper/ubuntu--vg-ubuntu--lv: 37.54 GiB, 40311455744 bytes, 78733312 sectors
Units: sectors of 1 * 512 = 512 bytes
Sector size (logical/physical): 512 bytes / 512 bytes
I/O size (minimum/optimal): 512 bytes / 512 bytes
```

## دستور df

`df` مخفف Disk Filesystem است و برای نمایش میزان فضای استفاده‌شده و آزاد روی پارتیشن‌های مونت‌شده استفاده می‌شود.  
در کنار این دستور، معمولاً فلگ `h-` نیز استفاده می‌شود تا اندازه‌ها به صورت خوانا نمایش داده شوند:

```bash
df -h
```

## all links

[All links of docs](https://docs.liara.ir/all-links-llms.txt)
