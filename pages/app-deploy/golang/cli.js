import Head from "next/head";
import Link from "next/link";
import Highlight from "react-highlight";
import Notice from "../../../components/Notice";
import Layout from "../../../components/Layout";
import PlatformIcon from "../../../components/PlatformIcon";

export default () => (
  <Layout>
    <Head>
      <title>
        مستندات استقرار برنامه‌های Golang با استفاده از ابزار Liara CLI - سرویس
        ابری لیارا
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
        <a href="#video">استقرار با Liara CLI</a>
      </li>
      <li>
        <a href="#installing-liara-cli">نصب Liara CLI</a>
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

    <h3 id="video">استقرار با Liara CLI</h3>

    <p>
      در صورتی که تمایلی به خواندن آموزش متنی ندارید می‌توانید ویدیوی آموزشی زیر
      ‌را مشاهده کنید.
    </p>

    <video
      src="https://files.liara.ir/liara/docker/docker-cli.mp4"
      controls="controls"
      className="block w-full"
      width="100%"
    ></video>

    <h3 id="installing-liara-cli">نصب Liara CLI</h3>
    <p>
      اگر Liara CLI را نصب ندارید می‌توانید با اجرای دستور زیر آن‌ را به‌راحتی
      نصب کنید: <Link href="/cli/install">توضیحات بیشتر</Link>
    </p>
    <pre>
      <code>{`$ npm install -g @liara/cli`}</code>
    </pre>
    <h3 id="login">ورود به حساب کاربری</h3>
    <p>
      برای ورود به حساب کاربری خود به وسیله Liara CLI کافیست دستور زیر را وارد
      کنید و ایمیل و رمزعبوری که با آن حساب کاربری خود را ایجاد کرده‌اید را وارد
      نمایید:
    </p>
    <pre>
      <code>{`$ liara login`}</code>
    </pre>
    <h3 id="deploy">اولین استقرار</h3>
    <p>
      <b>گام اول)</b> کافیست به بخش{" "}
      <a href="https://console.liara.ir/apps/create" target="_blank">
        ایجاد برنامه‌ها در لیارا
      </a>{" "}
      بروید و با انتخاب پلتفرم Docker و نوشتن شناسه برنامه‌ی موردنظرتان و در
      نهایت انتخاب پلن، برنامه خود را ایجاد کنید. برای نمونه، ما در این آموزش
      برای برنامه آزمایشی‌مان، شناسه go-blog را انتخاب کردیم. همچنین شما
      می‌توانید از طریق Liara CLI با دستور زیر برنامه‌ی خود را ایجاد کنید.
    </p>
    <Highlight className="json">{`$ liara create`}</Highlight>

    <p>
      <b>گام دوم و پایانی)</b> کافیست وارد ریشه برنامه‌ی‌تان شده و به وسیله
      دستور زیر اولین استقرار خود را اجرا کنید. بعد از وارد کردن، دستور از شما
      شناسه و پورت برنامه‌ موردنظرتان را می‌پرسد و بعد از انتخاب شناسه، لیارا
      عملیات استقرار را شروع می‌کند.
    </p>
    <pre>
      <code>{`$ liara deploy`}</code>
    </pre>
    <p>
      یک نمونه‌ی پروژه‌ی Golang که آماده‌ی مستقر شدن در لیارا است را در لینک زیر
      می‌توانید مشاهده کنید:
    </p>
    <p dir="ltr">
      <a
        href="https://github.com/liara-cloud/golang-getting-started/tree/go-dockerized"
        target="_blank"
      >
        https://github.com/liara-cloud/golang-getting-started
      </a>
    </p>
    <p>
      بعد از وارد کردن دستور دیپلوی، Liara CLI به صورت خودکار، تشخیص خواهد داد
      که برنامه‌ی شما را باید به عنوان یک برنامه‌ی Docker اجرا کند و عملیات
      استقرار را آغاز خواهد کرد. اما اگر مشکلی در تشخیص وجود داشت، می‌توانید از
      دستور زیر استفاده کنید:
    </p>
    <pre>
      <code>{`$ liara deploy --platform=docker`}</code>
    </pre>

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

    <Link href="/app-deploy/golang/envs" className="next-page">
      متوجه شدم، برو گام بعدی!
    </Link>
  </Layout>
);
