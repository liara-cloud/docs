Original link: https://docs.liara.ir/one-click-apps/jitsi/quick-start/

# راه‌اندازی سریع برنامه‌های Jitsi

[Video link](https://media.liara.ir/jitsi/setup.mp4)

[Jitsi Meet](https://jitsi.org/) یک پلتفرم Open Source برای ویدئوکنفرانس است که بر پایه‌ی WebRTC ساخته شده و امکان برگزاری جلسات صوتی/تصویری، Screen Sharing و Chat و Poll و Reactions و قابلیت‌هایی مثل Virtual Background را بدون نیاز به نصب نرم‌افزار در مرورگر فراهم می‌کند. همچنین SDKهای Web و Native دارد و می‌توان آن را مستقیماً داخل یک وب‌اپلیکیشن Embed کرد. 

برای راه‌اندازی برنامه با استفاده از ابزار [Liara Console](https://docs.liara.ir/references/console/about) کافیست تا مراحل زیر را طی کنید:

۱. ورود به حساب کاربری  
وارد [کنسول لیارا](https://console.liara.ir) شوید و با وارد کردن ایمیل یا شماره همراه ثبت شده، به اکانت خود در لیارا، لاگین کنید.

۲. انتخاب حساب  
حساب شخصی یا تیم مدنظرتان برای راه‌اندازی برنامه آماده را انتخاب کنید.

> همچنین بخوانید: [مدیریت تیم‌ها در لیارا](https://docs.liara.ir/references/team/about/)

## پیکربندی Jisti
پس از ساخت برنامه، در بخش **سرور مجازی ابری**، برنامه jitsi خود را انتخاب کنید. وارد بخش **اتصال** شوید و طبق [مستندات اتصال به سرور مجازی با SSH](https://docs.liara.ir/iaas/debian/how-tos/connect-to-server-using-ssh)، به سرور مجازی برنامه jitsi متصل شوید.  
پس از اتصال به سرور، دستورات زیر رو اجرا کنید:

```bash
cd /opt/appwrite
docker compose exec prosody bash
```

سپس، دستور زیر را اجرا کنید (به جای `User` و `YourPassword`، نام کاربری و رمزعبور خود را وارد کنید).

```bash
prosodyctl --config /run/prosody/config/prosody.cfg.lua register User meet.jitsi YourPassword
```

در نهایت، می‌توانید در آدرس `https://IP` وارد برنامه Jitsi خود شوید (به جای `IP`، آدرس IP برنامه خود را وارد کنید)

> همچنین بخوانید: [مدیریت تیم‌ها در لیارا](https://docs.liara.ir/references/team/about/)


- #### تغییر نسخه‌ی برنامه مستقر شده  
  [https://docs.liara.ir/one-click-apps/Jitsi/how-tos/choose-version](https://docs.liara.ir/one-click-apps/Jitsi/how-tos/choose-version)

## all links

[All links of docs](https://docs.liara.ir/all-links-llms.txt)
