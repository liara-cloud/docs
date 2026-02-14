Original link: https://docs.liara.ir/iaas/debian/how-tos/grant-privileges-to-user/

# نحوه اعطای دسترسی مدیریتی به یک کاربر

> در صورتی که با کاربر `root` به سرور دبیان متصل شده‌اید، نیازی نیست که از عبارت `sudo` قبل از دستورات استفاده کنید.

پس از [اتصال به سرور مجازی ابری خود با استفاده از SSH](https://docs.liara.ir/iaas/debian/how-tos/connect-to-server-using-ssh) و [ساخت کاربر جدید](https://docs.liara.ir/iaas/debian/how-tos/create-new-user)، برای اعطای دسترسی مدیریتی (sudo) به آن، در ابتدا باید پکیج `sudo` را نصب کنید:

```bash
sudo apt update && sudo apt install sudo
```

در ادامه، می‌توانید از دستور زیر استفاده کنید (به جای `lorem`، نام واقعی کاربر خود را، وارد کنید):

```bash
sudo usermod -aG sudo lorem
```

## all links

[All links of docs](https://docs.liara.ir/all-links-llms.txt)
