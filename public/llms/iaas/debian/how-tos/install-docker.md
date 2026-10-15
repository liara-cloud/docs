Original link: https://docs.liara.ir/iaas/debian/how-tos/install-docker/

# نصب Docker روی Debian با میرور لیارا

لیارا برای نصب Docker روی `Debian`، مخزن و کلید GPG اختصاصی ارائه می‌دهد. همچنین برای دانلود ایمیج‌ها، [میرور DockerHub](https://docs.liara.ir/mirrors/docker) در دسترس است:

```bash
https://docker-mirror.liara.ir
```

برای شروع، طبق مستندات [اتصال به سرور با SSH](https://docs.liara.ir/iaas/debian/how-tos/connect-to-server-using-ssh)، به سرور متصل شوید. دستورات با `sudo` نوشته شده‌اند؛ اگر با کاربر root وارد شده‌اید، می‌توانید `sudo` را حذف کنید.

## ۱. نصب پیش‌نیازها

```bash
sudo apt-get update
sudo apt-get install -y ca-certificates curl
```

## ۲. دریافت کلید GPG از میرور لیارا

```bash
sudo install -m 0755 -d /etc/apt/keyrings
sudo curl -fsSL https://linux-mirror.liara.ir/repository/debian-docker/gpg -o /etc/apt/keyrings/docker.asc
sudo chmod a+r /etc/apt/keyrings/docker.asc
```

## ۳. افزودن مخزن Docker لیارا

```bash
sudo tee /etc/apt/sources.list.d/docker.sources <<EOF
Types: deb
Architectures: amd64
URIs: https://linux-mirror.liara.ir/repository/debian-docker/
Suites: $(. /etc/os-release && echo "$VERSION_CODENAME")
Components: stable
Signed-By: /etc/apt/keyrings/docker.asc
EOF
```

## ۴. تنظیم میرور DockerHub

ابتدا از تنظیمات فعلی (در صورت وجود) بکاپ بگیرید:

```bash
sudo mkdir -p /etc/docker
[ -f /etc/docker/daemon.json ] && sudo cp /etc/docker/daemon.json /etc/docker/daemon.json.bak
```

سپس میرور لیارا را تنظیم کنید:

```bash
sudo tee /etc/docker/daemon.json > /dev/null <<EOF
{
  "registry-mirrors": [
    "https://docker-mirror.liara.ir"
  ]
}
EOF
```

## ۵. نصب Docker

```bash
sudo apt-get update
sudo apt-get install -y docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin
```

## ۶. اجرای Docker بدون sudo

برای اینکه کاربر فعلی بتواند بدون `sudo` از Docker استفاده کند، آن را به گروه `docker` اضافه کنید:

```bash
sudo usermod -aG docker $USER
```

سپس یک‌بار از سیستم خارج و دوباره وارد شوید تا تغییر اعمال شود. برای اعمال سریع در همان ترمینال هم می‌توانید دستور زیر را بزنید:

```bash
newgrp docker
```

> دسترسی به گروه `docker` عملاً معادل دسترسی root روی سرور است؛ فقط کاربرهای مورد اعتماد را به این گروه اضافه کنید.

## ۷. بررسی نصب

```bash
docker --version
docker compose version
docker info | grep -A1 "Registry Mirrors"
```

برای اطمینان از کارکرد میرور، یک ایمیج تست دانلود کنید:

```bash
docker run --rm hello-world
```

## اگر Docker از قبل نصب بوده است

اگر Docker از قبل روی سرور نصب بوده، بعد از تغییر `daemon.json` باید آن را ری‌استارت کنید تا میرور اعمال شود:

```bash
sudo systemctl daemon-reload
sudo systemctl restart docker
```

## نکات

- مخزن Docker لیارا برای معماری `amd64` تنظیم شده است.
- تنظیم `registry-mirrors` فقط برای DockerHub کار می‌کند. برای [ghcr](https://docs.liara.ir/mirrors/ghcr)، [mcr](https://docs.liara.ir/mirrors/mcr)، [quay](https://docs.liara.ir/mirrors/quay) و [k8s](https://docs.liara.ir/mirrors/k8s) باید آدرس ایمیج را مستقیماً تغییر دهید. همچنین می‌توانید برای DockerHub هم به‌جای تنظیم سراسری، آدرس را به ابتدای نام ایمیج اضافه کنید:

```bash
docker pull docker-mirror.liara.ir/nginx:1.31
```

## all links

[All links of docs](https://docs.liara.ir/all-links-llms.txt)
