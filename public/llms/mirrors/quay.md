Original link: https://docs.liara.ir/mirrors/quay/

# تنظیم میرور Quay


لیارا میرور Quay را در آدرس زیر ارائه می‌دهد:


```bash
quay-mirror.liara.ir
```


## نحوه‌ی استفاده

برای دانلود ایمیج کافیست در آدرس ایمیج، `quay.io` را با `quay-mirror.liara.ir` جایگزین کنید.



مثلاً به‌جای:


```bash
docker pull quay.io/prometheus/prometheus:v2.53.0
```


بزنید:


```bash
docker pull quay-mirror.liara.ir/prometheus/prometheus:v2.53.0
```


این روش در `docker-compose.yml` و Dockerfile هم کار می‌کند:


```yaml
services:
  prometheus:
    image: quay-mirror.liara.ir/prometheus/prometheus:v2.53.0
```


> تنظیم `registry-mirrors` در `daemon.json` برای Quay کار نمی‌کند (داکر میرور را فقط برای Docker Hub در نظر می‌گیرد)؛ بنابراین باید آدرس ایمیج را مستقیماً تغییر دهید.

## all links

[All links of docs](https://docs.liara.ir/all-links-llms.txt)
