Original link: https://docs.liara.ir/mirrors/ghcr/

# تنظیم میرور GitHub Container Registry (ghcr)

لیارا میرور ghcr را در آدرس زیر ارائه می‌دهد:

```bash
ghcr-mirror.liara.ir
```

## نحوه‌ی استفاده

برای دانلود ایمیج کافیست در آدرس ایمیج، `ghcr.io` را با `ghcr-mirror.liara.ir` جایگزین کنید.

مثلاً به‌جای:

```bash
docker pull ghcr.io/google/cadvisor:v0.60.6
```

بزنید:

```bash
docker pull ghcr-mirror.liara.ir/google/cadvisor:v0.60.6
```

این روش در `docker-compose.yml` و Dockerfile هم کار می‌کند:

```yaml
services:
  cadvisor:
    image: ghcr-mirror.liara.ir/google/cadvisor:v0.60.6
```

> تنظیم `registry-mirrors` در `daemon.json` برای ghcr کار نمی‌کند (داکر میرور را فقط برای Docker Hub در نظر می‌گیرد)؛ بنابراین باید آدرس ایمیج را مستقیماً تغییر دهید.

## all links

[All links of docs](https://docs.liara.ir/all-links-llms.txt)
