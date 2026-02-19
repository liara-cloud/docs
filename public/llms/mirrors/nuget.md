Original link: https://docs.liara.ir/mirrors/nuget/

# تنظیم میرورهای نوگت

لیارا میرور NuGet را در آدرس زیر، ارائه می‌دهد:

```bash
https://package-mirror.liara.ir/repository/nuget/index.json
```

برای تنظیم میرور فوق کافیست تا دستور زیر را اجرا کنید: 

```bash
dotnet nuget add source "https://package-mirror.liara.ir/repository/nuget/index.json" -n LiaraMirror
```

برای بررسی میرورها، می‌توانید از دستور زیر استفاده کنید:

```bash
dotnet nuget list source
```

## all links

[All links of docs](https://docs.liara.ir/all-links-llms.txt)
