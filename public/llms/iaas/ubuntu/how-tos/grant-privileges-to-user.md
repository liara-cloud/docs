Original link: https://docs.liara.ir/iaas/ubuntu/how-tos/grant-privileges-to-user/

# نحوه اعطای دسترسی مدیریتی به یک کاربر

پس از [اتصال به سرور مجازی ابری خود با استفاده از SSH](https://docs.liara.ir/iaas/ubuntu/how-tos/connect-to-server-using-ssh) و [ساخت کاربر جدید](https://docs.liara.ir/iaas/ubuntu/how-tos/create-new-user)، برای اعطای دسترسی مدیریتی (sudo) به آن، می‌توانید از دستور زیر استفاده کنید (به جای `lorem`، نام واقعی کاربر خود را، وارد کنید):

```bash
sudo usermod -aG sudo lorem
```

## all links

[All links of docs](https://docs.liara.ir/all-links-llms.txt)
