import Layout from "../../components/Layout";
import Head from "next/head";
import Link from "next/link";
import Highlight from "react-highlight";

export default () => (
  <Layout>
    <Head>
      <title>
        استقرار برنامه‌های Golang - سرویس ابری لیارا
      </title>
    </Head>

    <h1>استقرار برنامه‌های Golang</h1>
    <p>
      در حال حاضر Golang
      جزو پلتفرم‌ها پشتیبانی‌شده توسط لیارا نیست. اما این به این معنا نیست که شما نمی‌توانید
      برنامه‌هایی که با این زبان قدرتمند نوشته شده‌اند را در لیارا مستقر کنید.
      بلکه صرفا به این معناست که باید
      <span className="code">Dockerfile</span>
      مربوطه را خودتان به برنامه‌ی‌تان اضافه کنید.
    </p>

    <p>
      برای این‌کار، ابتدا لازم است که از بخش «برنامه‌ها» یک برنامه از نوع
      Docker
      و با نام و پلن دلخواه‌تان بسازید.
    </p>
    <p>
      سپس یک فایل به نام
      <span className="code">Dockerfile</span>
      در ریشه‌ی برنامه‌ی‌تان بسازید. توجه داشته باشید که نام این فایل را دقیقا به همین صورت باید وارد کنید، بدون هیچ‌گونه پسوندی.
    </p>
    <p>
      سپس، محتویات زیر را داخل فایل
      <span className="code">Dockerfile</span>
      قرار دهید:
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
      توجه داشته باشید که در خط اول، می‌توانید نسخه‌ی
      Golang
      مدنظرتان را وارد کنید. در مقابل
      <span className="code">EXPOSE</span>،
      پورتی را که وب‌سرور شما به آن listen
      می‌کند را بنویسید. در زمان دیپلوی هم لیارا این پورت را از شما می‌پرسد که باید
      همان مقدار <span className="code">EXPOSE</span>
      را وارد کنید.
    </p>
    <p>
      در نهایت، CMD و یا ترمینال
      را در پوشه‌ای که <span className="code">Dockerfile</span>
      را داخل آن قرار دادید باز کرده و سپس
      دستور زیر را برای استقرار و اجرای برنامه وارد کنید:
    </p>
    <pre>
      <code>$ liara deploy</code>
    </pre>
    <p>
      <Link href="/cli/install">
        راهنمای نصب Liara CLI
      </Link>
    </p>
    <p>
      مقالات زیادی وجود دارند که نحوه‌ی Dockerize‌کردن
      برنامه‌های Golang
      را توضیح داده‌اند که شما می‌توانید آن‌ها را جستجو و مطالعه کنید.
      <span className="code">Dockerfile</span>ای
      که ما در این صفحه قرار دادیم، صرفا یک نمونه است و شما می‌توانید آن را با
      توجه به نیاز خودتان ویرایش کنید.
    </p>

    <h3>توجه داشته باشید که</h3>
    <ul>
      <li>
        اگر با خطای ReadOnly Filesystem
        مواجه شدید، لازم است که بخش «<Link href="/app-features/file-system">فایل‌سیستم</Link>» را مطالعه کنید.
      </li>
      <li>
        بین برنامه‌ها و دیتابیس‌ها شبکه‌ی خصوصی برقرار است که در صورت استقرار
        Microservice‌ها
        و ارتباط درون‌شبکه‌ای، بسیار کاربردی است.
      </li>
      <li>
        در صفحه‌ی <Link href="/app-features/logs">لاگ‌ها</Link> امکان دنبال‌کردن زنده‌ی
        لاگ‌های‌تان را دارید.
      </li>
      <li>
        برای تنظیم Environment Variableها،
        بخش «<Link href="/app-features/environment-variables">متغیرهای محیطی</Link>» را مطالعه کنید.
      </li>
    </ul>
  </Layout>
);
