import Head from "next/head";
import Link from "next/link";
import Notice from "../../../components/Notice";
import Layout from "../../../components/Layout";
import PlatformIcon from "../../../components/PlatformIcon";
import Highlight from "react-highlight";

export default () => (
  <Layout>
    <Head>
      <title>
        مستندات استقرار برنامه‌های Golang با استفاده از ابزار Liara Desktop -
        لیارا
      </title>
    </Head>

    <div className="page-head">
      <PlatformIcon platform="go" />
      <div className="page-title">
        <h1>پلتفرم Golang</h1>
        <span className="page-description">(Golang Platform)</span>
      </div>
    </div>

    <h4>فهرست عناوین:</h4>
    <ul className="mt-0">
      <li>
        <a href="#video">استقرار با Liara Desktop</a>
      </li>
      <li>
        <a href="#installing-liara-desktop">نصب Liara Desktop</a>
      </li>
      <li>
        <a href="#login">ورود به حساب کاربری</a>
      </li>
      <li>
        <a href="#deploy">اولین استقرار</a>
      </li>
      <li>
        <a href="#dockerfile">ساختار Dockerfile</a>
      </li>
    </ul>

    <h3 id="video">استقرار با Liara Desktop</h3>

    <p>
      در صورتی که تمایلی به خواندن آموزش متنی ندارید می‌توانید ویدیوی آموزشی زیر
      ‌را مشاهده کنید.
    </p>

    <video
      src="https://files.liara.ir/liara/docker/docker-desktop.mp4"
      controls="controls"
      className="block w-full"
      width="100%"
    ></video>

    <p>
      <h3 id="installing-liara-desktop">نصب Liara Desktop</h3>
      شما می‌توانید از طریق این <Link href="/desktop/install">لینک</Link>؛ Liara
      Desktop را؛ متناسب با سیستم عامل خود دانلود و نصب کنید.
    </p>
    <h3 id="login">ورود به حساب کاربری</h3>
    <p>
      برای ورود به حساب کاربری از طریق Liara Desktop، ابتدا نرم‌افزار را اجرا
      کرده، سپس از طریق مروگر، وارد حساب‌تان شوید.
    </p>
    <h3 id="deploy">اولین استقرار</h3>
    <p>
      <b>گام اول)</b> کافیست به بخش{" "}
      <a href="https://console.liara.ir/apps/create" target="_blank">
        ایجاد برنامه‌ها در لیارا
      </a>{" "}
      بروید و با انتخاب پلتفرم Docker و نوشتن شناسه برنامه‌ی موردنظرتان و در
      نهایت انتخاب پلن، برنامه خود را ایجاد کنید. برای نمونه، ما در این آموزش
      برای برنامه آزمایشی‌مان، شناسه go-blog را انتخاب کردیم.
    </p>
    <p>
      <b>گام دوم و پایانی) </b>
      در قدم بعدی کافیست Liara Desktop را اجرا کرده و پوشه پروژه‌تان را انتخاب
      کنید. بعد از انتخاب پروژه‌تان، از شما شناسه برنامه‌ موردنظرتان پرسیده
      می‌شود و بعد از انتخاب شناسه، لیارا عملیات استقرار را شروع می‌کند.
    </p>
    <p>
      برنامه‌ی go شما حتما باید داکرایز شده باشد و در مسیر اصلی پروژه یک
      Dockerfile وجود داشته باشد؛ یک نمونه‌ی پروژه‌ی Golang که آماده‌ی مستقر شدن
      در لیارا است را در لینک زیر می‌توانید مشاهده کنید:
    </p>
    <p dir="ltr">
      <a
        href="https://github.com/liara-cloud/golang-getting-started/tree/go-dockerized"
        target="_blank"
      >
        https://github.com/liara-cloud/golang-getting-started
      </a>
    </p>
    <h3 id="dockerfile">ساختار Dockerfile</h3>
    <p>
      از آنجایی که برای استقرار برنامه‌های golang از پلتفرم داکر استفاده
      می‌کنیم؛ کافیست که یک فایل به نام Dockerfile در مسیر اصلی پروژه ایجاد کرده
      و به نحو زیر آن را بنویسیم:
    </p>
    <Highlight className="code">
      {`# Use the official Golang image as the base image
FROM golang:latest
        
# Set the working directory inside the container
WORKDIR /app

# Copy the local code to the container
COPY . .

# Download Go modules
RUN go mod download

# Build the Go application
RUN go build -o main .

# Expose port 8080 to the outside world
# EXPOSE 8080

# Command to run the executable
CMD ["./main"]`}
    </Highlight>
    <p>
      در ابتدا با استفاده از دستور{" "}
      <span className="code">FROM golang:latest</span> image رسمی golang به
      عنوان base image تنظیم می‌شود و تگ latest باعث می‌شود تا برنامه از آخرین
      نسخه golang استفاده کند. سپس، دستور{" "}
      <span className="code">WORKDIR /app</span> مسیر کاری داخل container را به
      دایرکتوری app تنظیم می‌کند. در واقع app همان دایرکتوری است که که کد برنامه
      ما در آنجا کپی می‌شود و دستورات بعدی در آن اجرا می‌شوند.
    </p>

    <p>
      دستور <span className="code">COPY . .</span> محتوای دایرکتوری که
      Dockerfile در آن قرار دارد را به دایرکتوری app درون container کپی می‌کند.
      این دستور این فرض را دارد که کد برنامه شما در همان دایرکتوری Dockerfile
      قرار دارد. سپس، دستور <span className="code">RUN go mod download</span>{" "}
      ماژول‌های go که در فایل <span className="code">go.mod</span> تعریف شده‌اند
      را دانلود می‌کند.
    </p>

    <p>
      دستور <span className="code">RUN go build -o main .</span> برنامه golang
      شما را اجرا می‌کند. پرچم o- نام فایل خروجی را به main تنظیم می‌کند و
      نقطه‌ای که در انتهای دستور قرار دارد؛ نشان‌دهنده این است که کد منبع در
      دایرکتوری فعلی قرار دارد. پس از آن، دستور{" "}
      <span className="code">CMD ["./main"]</span> دستوری را که هنگام شروع
      کانتینر اجرا می‌شود، مشخص می‌کند.
    </p>

    <Notice variant="info">
      شما می‌توانید با استفاده از دستور <span className="code">EXPOSE</span>{" "}
      پورتی که برنامه توسط آن به درخواست کاربران listen می‌کند را مشخص کنید.
      البته چون که در حین استقرار، لیارا از ما port برنامه را می‌پرسد بنابراین
      برای استقرار برنامه‌های داکرایز شده در لیارا، نیازی به نوشتن این دستور در
      Dockerfile نیست.
    </Notice>

    <p>
      با فرض این‌که شناسه برنامه را go-blog انتخاب کرده‌ایم؛ پس از استقرار موفق،
      برنامه در آدرس زیر قابل مشاهده و دسترسی خواهد بود:
    </p>
    <p dir="ltr">https://go-blog.iran.liara.run</p>

    <Link href="/app-deploy/golang/cli" className="next-page">
      متوجه شدم، برو گام بعدی!
    </Link>
  </Layout>
);
