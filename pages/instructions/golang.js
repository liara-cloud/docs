import Head from "next/head";
import Link from "next/link";
import Highlight from "react-highlight";
import Layout from "../../components/Layout";
import Notice from "../../components/Notice";
import PlatformIcon from "../../components/PlatformIcon";

export default () => (
  <Layout>
    <Head>
      <title>استقرار برنامه‌های Golang - سرویس ابری لیارا</title>
    </Head>

    <div className="page-head">
      <PlatformIcon platform="go" />
      <div className="page-title">
        <h1>استقرار برنامه‌های Golang</h1>
        <span className="page-description">(Golang Apps)</span>
      </div>
    </div>

    <Notice variant="warning">
      در حال حاضر برنامه‌های Go به‌صورت مستقیم در لیارا پشتیبانی نمی‌شوند اما
      شما می‌توانید پروژه‌های توسعه داده شده با این زبان برنامه‌نویسی را طبق
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
    <Highlight>
      {`FROM golang:1.15-alpine AS build

WORKDIR /app

COPY . ./

# Install dependencies
RUN go mod download && \\
  # Build the app
  GOOS=linux GOARCH=amd64 go build -o main && \\
  # Make the final output executable
  chmod +x ./main

FROM alpine:latest

# Install os packages
RUN apk --no-cache add bash

WORKDIR /app

COPY --from=build /app/main .

CMD ["./main"]

EXPOSE 8000`}
    </Highlight>
    <p>
      توجه داشته باشید که در خط اول، می‌توانید نسخه‌ی Golang مدنظرتان را وارد
      کنید. در مقابل
      <span className="code">EXPOSE</span>، پورتی را که وب‌سرور شما به آن listen
      می‌کند را بنویسید. در زمان دیپلوی هم لیارا این پورت را از شما می‌پرسد که
      باید همان مقدار <span className="code">EXPOSE</span>
      را وارد کنید.
    </p>
    <p>
      در نهایت، CMD و یا ترمینال را در پوشه‌ای که{" "}
      <span className="code">Dockerfile</span>
      را داخل آن قرار دادید باز کرده و سپس دستور زیر را برای استقرار و اجرای
      برنامه وارد کنید:
    </p>
    <pre>
      <code>$ liara deploy</code>
    </pre>
    <p>
      <Link href="/cli/install">راهنمای نصب Liara CLI</Link>
    </p>
    <p>
      مقالات زیادی وجود دارند که نحوه‌ی Dockerize‌کردن برنامه‌های Golang را
      توضیح داده‌اند که شما می‌توانید آن‌ها را جستجو و مطالعه کنید.
      <span className="code">Dockerfile</span>ای که ما در این صفحه قرار دادیم،
      صرفا یک نمونه است و شما می‌توانید آن را با توجه به نیاز خودتان ویرایش
      کنید.
    </p>

    <h3>توجه داشته باشید که</h3>
    <ul>
      <li>
        اگر با خطای ReadOnly Filesystem مواجه شدید، لازم است که بخش «
        <Link href="/app-features/file-system">فایل‌سیستم</Link>» را مطالعه
        کنید.
      </li>
      <li>
        بین برنامه‌ها و دیتابیس‌ها شبکه‌ی خصوصی برقرار است که در صورت استقرار
        Microservice‌ها و ارتباط درون‌شبکه‌ای، بسیار کاربردی است.
      </li>
      <li>
        در صفحه‌ی <Link href="/app-features/logs">لاگ‌ها</Link> امکان دنبال‌کردن
        زنده‌ی لاگ‌های‌تان را دارید.
      </li>
      <li>
        برای تنظیم Environment Variableها، بخش «
        <Link href="/app-features/environment-variables">متغیرهای محیطی</Link>»
        را مطالعه کنید.
      </li>
    </ul>
  </Layout>
);
