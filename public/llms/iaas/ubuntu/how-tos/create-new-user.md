Original link: https://docs.liara.ir/iaas/ubuntu/how-tos/create-new-user/

# نحوه ساخت کاربر جدید در سرور مجازی ابری

پس از [اتصال به سرور مجازی ابری خود با استفاده از SSH](https://docs.liara.ir/iaas/ubuntu/how-tos/connect-to-server-using-ssh)، می‌توانید از دستور زیر برای ایجاد یک کاربر جدید استفاده کنید (به جای `lorem`، نام واقعی کاربر خود را، وارد کنید):

```js
sudo adduser lorem
```

پس از اجرای این دستور، باید رمز عبور و اطلاعات اضافی کاربر را وارد کنید:

تمامی کارها انجام شده است و شما اکنون، می‌توانید با کاربر جدید خود و دسترسی SSH، مانند دستور زیر، به سرور مجازی ابری خود، متصل شوید:

```bash
ssh lorem@<server-ip-address>
```

## all links

[All links of docs](https://docs.liara.ir/all-links-llms.txt)
