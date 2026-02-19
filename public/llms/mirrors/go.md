Original link: https://docs.liara.ir/mirrors/go/

# تنظیم میرورهای گولنگ

لیارا میرور Go Modules را در آدرس زیر، ارائه می‌دهد:

```bash
https://package-mirror.liara.ir/repository/go/
```

برای تنظیم میرور فوق کافیست تا دستورات زیر را اجرا کنید: 

```bash
go env -w GOPROXY=https://package-mirror.liara.ir/repository/go/
go env -w GOSUMDB=off
```

برای بررسی میرورها، می‌توانید از دستور زیر استفاده کنید (متغیر `GOPROXY` را بررسی کنید):

```bash
go env # for linux: go env | grep GOPROXY
```

## all links

[All links of docs](https://docs.liara.ir/all-links-llms.txt)
