Original link: https://docs.liara.ir/mirrors/docker/

# تنظیم میرور DockerHub


لیارا میرور داکر را در آدرس زیر ارائه می‌دهد:


```bash
https://docker-mirror.liara.ir
```


دو روش برای استفاده وجود دارد.

## روش اول: تنظیم سراسری (registry-mirrors)

با این روش همه‌ی `docker pull`ها به‌صورت خودکار از میرور انجام می‌شوند.

۱. تهیه بکاپ از تنظیمات فعلی  
قبل از تنظیم میرورهای لیارا، بهتر است یک بکاپ از تنظیمات فعلی تهیه کنید:

```bash
cp /etc/docker/daemon.json /etc/docker/daemon.json.bak
```

۲. تنظیم میرور لیارا

```bash
echo '{
  "registry-mirrors": [
    "https://docker-mirror.liara.ir"
  ]
}' > /etc/docker/daemon.json
```

> اگر فایل `daemon.json` از قبل تنظیمات دیگری دارد، این دستور آن را بازنویسی می‌کند. به همین خاطر بکاپ گرفتن در گام اول مهم است.

۳. ری‌استارت داکر

```bash
systemctl daemon-reload
systemctl restart docker
```



با انجام این کارها، درخواست‌های دانلود ایمیج از Docker Hub به میرور لیارا ارسال می‌شود.



برای بازگشت به تنظیمات قبلی، فایل بکاپ را برگردانید و داکر را ری‌استارت کنید:


```bash
cp /etc/docker/daemon.json.bak /etc/docker/daemon.json
systemctl daemon-reload && systemctl restart docker
```


## روش دوم: استفاده مستقیم از آدرس میرور

بدون هیچ تغییری در تنظیمات داکر، کافیست آدرس میرور را به ابتدای نام ایمیج اضافه کنید.



مثلاً به‌جای:


```bash
docker pull nginx:1.31
```


بزنید:


```bash
docker pull docker-mirror.liara.ir/nginx:1.31
```


این روش در `docker-compose.yml` و Dockerfile هم کار می‌کند:


```yaml
services:
  web:
    image: docker-mirror.liara.ir/nginx:1.31
```


```dockerfile
FROM docker-mirror.liara.ir/nginx:1.31
```


> تنظیم `registry-mirrors` در `daemon.json` فقط برای `Docker Hub` کار می‌کند و برای ghcr، mcr و quay اثری ندارد. برای آن رجیستری‌ها باید آدرس ایمیج را مستقیماً عوض کنید (به مستندات هر کدام مراجعه کنید).

## all links

[All links of docs](https://docs.liara.ir/all-links-llms.txt)
