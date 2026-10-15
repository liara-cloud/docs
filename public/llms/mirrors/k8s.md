Original link: https://docs.liara.ir/mirrors/k8s/

# تنظیم میرور روی کوبرنتیز (K8S)

لیارا میرور K8S را در آدرس زیر ارائه می‌دهد:

```bash
k8s-mirror.liara.ir
```

## نحوه‌ی استفاده

برای دانلود ایمیج کافیست در آدرس ایمیج، `registry.k8s.io` را با `k8s-mirror.liara.ir` جایگزین کنید.

مثلاً به‌جای:

```bash
docker pull registry.k8s.io/etcd:3.5.9-0
```

بزنید:

```bash
docker pull k8s-mirror.liara.ir/etcd:3.5.9-0
```

## استفاده در مانیفست‌ها

```yaml
spec:
  containers:
    - name: etcd
      image: k8s-mirror.liara.ir/etcd:3.5.9-0
```

## استفاده در kubeadm

می‌توانید آدرس میرور را به‌عنوان ریپازیتوری ایمیج‌ها به kubeadm بدهید:

```bash
kubeadm config images pull --image-repository k8s-mirror.liara.ir
kubeadm init --image-repository k8s-mirror.liara.ir
```

> تنظیم `registry-mirrors` در `daemon.json` برای K8S کار نمی‌کند (داکر میرور را فقط برای Docker Hub در نظر می‌گیرد)؛ بنابراین باید آدرس ایمیج را مستقیماً تغییر دهید.

## all links

[All links of docs](https://docs.liara.ir/all-links-llms.txt)
