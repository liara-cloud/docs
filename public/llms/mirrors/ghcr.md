Original link: https://docs.liara.ir/mirrors/ghcr/

# تنظیم میرورهای Github Container Registry

لیارا میرور ghcr را در آدرس زیر، ارائه می‌دهد:

```bash
https://ghcr-mirror.liara.ir
```

برای تنظیم میرور فوق کافیست تا گام‌های زیر را طی کنید: 

> در نظر داشته باشید که گام‌های زیر، برای داکر نسخه `25` و بالاتر از آن، مناسب است.

۱. تهیه بکاپ از تنظیمات فعلی  
قبل از تنظیم میرورهای لیارا، بهتر است با اجرای دستور زیر، یک بکاپ از تنظیمات فعلی سیستم عامل خود تهیه کنید:

```bash
cp /etc/docker/daemon.json /etc/docker/daemon.json.bak
```

۲. تنظیم میرور لیارا  
برای تنظیم میرور لیارا، دستور زیر را اجرا کنید:

```bash
echo '{
  "registry-mirrors": [
    "https://ghcr-mirror.liara.ir"
  ]
}' > /etc/docker/daemon.json
```

۳. ری‌استارت برنامه و فایل‌های کانفیگ  
اکنون کافیست تا دستورات زیر را اجرا کنید تا از میرور لیارا، استفاده شود:

```bash
systemctl daemon-reload
systemctl restart docker
```

با انجام کارهای فوق، میرورهای لیارا در سیستم عامل شما تنظیم خواهند شد و درخواست‌های آپدیت یا دانلود پکیج  
به این میرورها ارسال خواهند شد.

## all links

[All links of docs](https://docs.liara.ir/all-links-llms.txt)
