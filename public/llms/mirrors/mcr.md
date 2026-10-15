Original link: https://docs.liara.ir/mirrors/mcr/

# تنظیم میرور MCR (Microsoft Container Registry)

لیارا میرور MCR را در آدرس زیر ارائه می‌دهد:

```bash
mcr-mirror.liara.ir
```

## نحوه‌ی استفاده

برای دانلود ایمیج کافیست در آدرس ایمیج، `mcr.microsoft.com` را با `mcr-mirror.liara.ir` جایگزین کنید.

مثلاً به‌جای:

```bash
docker pull mcr.microsoft.com/dotnet/aspnet:8.0
```

بزنید:

```bash
docker pull mcr-mirror.liara.ir/dotnet/aspnet:8.0
```

این روش در `docker-compose.yml` و Dockerfile هم کار می‌کند:

```dockerfile
FROM mcr-mirror.liara.ir/dotnet/aspnet:8.0
```

> تنظیم `registry-mirrors` در `daemon.json` برای MCR کار نمی‌کند (داکر میرور را فقط برای Docker Hub در نظر می‌گیرد)؛ بنابراین باید آدرس ایمیج را مستقیماً تغییر دهید.

## all links

[All links of docs](https://docs.liara.ir/all-links-llms.txt)
