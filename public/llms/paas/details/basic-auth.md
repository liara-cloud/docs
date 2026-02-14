Original link: https://docs.liara.ir/paas/details/basic-auth/

# قابلیت Basic Auth در سرورهای Apache و Nginx

قابلیت Basic Auth یک روش ساده و ابتدایی برای احراز هویت کاربران در یک وب‌سرویس یا API است. در این روش، نام کاربری و رمز عبور به صورت base64 کدگذاری شده و به عنوان هدر HTTP به سرور ارسال می‌شود. سرور این اطلاعات را دریافت کرده و آنها را برای احراز هویت کاربر استفاده می‌کند.
شما می‌توانید در برنامه‌های مبتنی بر وب‌سرورهای Apache مانند برنامه‌های PHP یا Nginx مانند برنامه‌های Django، این قابلیت را فعال و استفاده نمایید.

## Apache

برای فعال سازی Basic Authentication در وب‌سرور Apache ابتدا باید `apache2-utils` را با اجرای دستور زیر نصب کنید:

```bash
sudo apt install apache2-utils
```

حال می‌توانید به‌شکل زیر و با استفاده از ابزار `htpasswd` کاربر مورد نظر خود را در فایل `htpasswd.` اضافه کنید:

```bash
htpasswd -c [path/to/.htpasswd] [username]
```

در آخرین مرحله تنها کافیست پیکربندی زیر را در فایل `htaccess.` اضافه کنید:

```bash
# enable basic auth in apache 

AuthName "Dialog prompt"
AuthType Basic
AuthUserFile [path/to/.htpasswd]
Require valid-user
```

## Nginx

برای فعال سازی Basic authentication در وب‌سرور Nginx ابتدا باید نام کاربری و رمز عبور دلخواه‌تان را با اجرای دستورهای زیر در فایل `htpasswd.` اضافه کنید:

```bash
# add username
$ echo -n "username:" >> [path/to/.htpasswd]

# add password
$ openssl passwd -apr1 >> [path/to/.htpasswd]
```

و در آخرین مرحله تنها کافیست پیکربندی زیر را در فایل `liara_nginx.conf` اضافه کنید:

```bash
location / {
  auth_basic "Restricted Content";
  auth_basic_user_file [path/to/.htpasswd];
}
```

## all links

[All links of docs](https://docs.liara.ir/all-links-llms.txt)
