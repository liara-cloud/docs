import Head from "next/head";
import Link from "next/link";
import Highlight from "react-highlight";
import Layout from "../../components/Layout";
import Notice from "../../components/Notice";
import PlatformIcon from "../../components/PlatformIcon";

export default () => (
  <Layout>
    <Head>
      <title>استقرار برنامه‌های Flutter Web - سرویس ابری لیارا</title>
    </Head>

    <div className="page-head">
      <PlatformIcon platform="flutter" />
      <div className="page-title">
        <h1>استقرار برنامه‌های Flutter Web</h1>
        <span className="page-description">(Flutter Web Apps)</span>
      </div>
    </div>

    <Notice variant="warning">
      در حال حاضر برنامه‌های Flutter Web به‌صورت مستقیم در لیارا پشتیبانی
      نمی‌شوند اما شما می‌توانید پروژه‌های توسعه داده شده با این فریم‌ورک را طبق
      دستورالعمل زیر در لیارا مستقر کنید.
    </Notice>

    <p>
      برای این‌کار، ابتدا لازم است که از بخش <strong>برنامه‌ها</strong> یک{" "}
      <Link href="/app-deploy/docker/getting-started">برنامه Docker</Link> با
      نام و پلن دلخواه‌تان بسازید.
    </p>
    <p>
      سپس یک فایل با نام
      <span className="code">Dockerfile</span>
      در ریشه‌ی برنامه‌ی‌تان بسازید و سپس قطعه‌کد زیر را در این فایل قرار دهید:
    </p>
    <Highlight className="dockerfile">
      {`#Stage 1 - Install dependencies and build the app
FROM debian:latest AS build-env

# Install flutter dependencies
RUN apt-get update && \\
    apt-get install -y curl git wget unzip libgconf-2-4 gdb libstdc++6 libglu1-mesa fonts-droid-fallback lib32stdc++6 python3 && \\
    apt-get clean

# Clone the flutter repo
RUN git clone https://github.com/flutter/flutter.git /usr/local/flutter

# Set flutter path
# RUN /usr/local/flutter/bin/flutter doctor -v
ENV PATH="/usr/local/flutter/bin:/usr/local/flutter/bin/cache/dart-sdk/bin:\${PATH}"
ENV HTTPS_PROXY="http://fodev.org:8118"

# Run flutter doctor
RUN flutter doctor -v
# Enable flutter web
RUN flutter channel master && \\
    flutter upgrade && \\
    flutter config --enable-web

# Copy files to container and build
RUN mkdir /app/
COPY . /app/
WORKDIR /app/
RUN flutter pub get && \\
    flutter build web

# Stage 2 - Create the run-time image
FROM liararepo/static-platform:base
COPY --from=build-env /app/build/web /usr/share/nginx/html`}
    </Highlight>
    <p>
      در نهایت، CMD و یا ترمینال را در پوشه‌ای که{" "}
      <span className="code">Dockerfile</span>
      را داخل آن قرار دادید باز کرده و سپس دستور زیر را برای استقرار و اجرای
      برنامه وارد کنید:
    </p>
    <pre>
      <code>$ liara deploy --platform docker --port 80</code>
    </pre>
    <p>
      <Link href="/cli/install">راهنمای نصب Liara CLI</Link>
    </p>
    <p>
      مقالات زیادی وجود دارند که نحوه‌ی Dockerize‌کردن برنامه‌های Flutter Web را
      توضیح داده‌اند که شما می‌توانید آن‌ها را جستجو و مطالعه کنید.
      <span className="code">Dockerfile</span>ای که ما در این صفحه قرار دادیم،
      صرفا یک نمونه است و شما می‌توانید آن را با توجه به نیاز خودتان ویرایش
      کنید.
    </p>

    <h5>توجه داشته باشید که</h5>
    <ul>
      <li>
        در صفحه‌ی <Link href="/app-features/logs">لاگ‌ها</Link> امکان دنبال‌کردن
        زنده‌ی لاگ‌های‌تان را دارید.
      </li>
    </ul>
  </Layout>
);
