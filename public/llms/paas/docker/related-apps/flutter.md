Original link: https://docs.liara.ir/paas/docker/related-apps/flutter/

# استقرار برنامه‌های Flutter در لیارا

[Flutter](https://flutter.dev/) یک فریم‌ورک توسعه رابط کاربری (UI) متن‌باز است که توسط گوگل ساخته شده است. این فریم‌ورک به توسعه‌دهندگان امکان می‌دهد تا اپلیکیشن‌های native زیبا و با عملکرد بالا را برای سیستم‌عامل‌های iOS و Android و وب و دسکتاپ با استفاده از یک کدبیس واحد توسعه دهند. Flutter از زبان برنامه‌نویسی Dart استفاده می‌کند و ابزارک‌های (widgets) سفارشی خود را ارائه می‌دهد که به طراحی رابط‌های کاربری پیچیده کمک می‌کند.


شما می‌توانید برنامه‌های Flutter خود را با [ایجاد برنامه‌های Docker](../../how-tos/create-app) در لیارا، مستقر کنید.
برای این‌کار، کافیست تا در مسیر اصلی پروژه در Local، یک فایل به نام `Dockerfile` ایجاد کنید و قطعه کد زیر را درون آن، قرار دهید:

```dockerfile
#Stage 1 - Install dependencies and build the app
FROM debian:latest

ARG DEBIAN_FRONTEND=noninteractive

# Install flutter dependencies
RUN apt-get update && \\
    apt-get install -y --no-install-recommends \\
      curl \\
      git \\
      wget \\
      unzip \\
      ca-certificates \\
      libgconf-2-4 \\
      gdb \\
      libstdc++6 \\
      libglu1-mesa \\
      fonts-droid-fallback \\
      lib32stdc++6 \\
      python3 \\
    && \\
    apt-get clean && \\
    rm -rf /var/lib/apt/lists

# Clone the flutter repo
RUN git clone https://github.com/flutter/flutter.git /usr/local/flutter

# Set flutter path
# RUN /usr/local/flutter/bin/flutter doctor -v
ENV PATH="/usr/local/flutter/bin:/usr/local/flutter/bin/cache/dart-sdk/bin:\${PATH}"

# Run flutter doctor
RUN flutter doctor -v
# Enable flutter web
RUN flutter channel stable && \\
    flutter upgrade && \\
    flutter config --enable-web

# Copy files to container and build
WORKDIR /app
COPY . .
RUN flutter pub get && \\
    flutter build web

# Stage 2 - Create the run-time image
FROM registry2.iran.liara.ir/platforms/static-platform:base
COPY --from=0 /app/build/web /usr/share/nginx/html
```


در نهایت، در مسیری که `Dockerfile` قرار گرفته است، دستور زیر را اجرا کنید تا برنامه‌تان در لیارا مستقر شود:

```js
liara deploy --platform=docker --port=80
```


> `Dockerfile` فوق، صرفاً یک نمونه است و شما می‌توانید آن را با توجه به نیاز خودتان ویرایش کنید۔

## all links

[All links of docs](https://docs.liara.ir/all-links-llms.txt)
