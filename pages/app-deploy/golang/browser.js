import Head from "next/head";
import Link from "next/link";
import Notice from "../../../components/Notice";
import Layout from "../../../components/Layout";
import PlatformIcon from "../../../components/PlatformIcon";
import Highlight from "react-highlight";
import ZoomableImage from "../../../components/ZoomableImage";

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
        <a href="#video">ویدیوی آموزشی استقرار با مرورگر</a>
      </li>
      <li>
        <a href="#how-to-deploy">چهار گام استقرار برنامه با مرورگر</a>
      </li>
      <li>
        <a href="#dockerfile">ساختار Dockerfile</a>
      </li>
    </ul>

    <h3 id="video">ویدیوی آموزشی استقرار با مرورگر</h3>

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
    <Notice variant="info">
      پروژه و کدهای مورد استفاده در ویدیوی فوق در{" "}
      <Link href="https://github.com/liara-cloud/golang-getting-started">
        اینجا
      </Link>{" "}
      قابل مشاهده و دسترسی هستند.{" "}
    </Notice>

    <h3 id="how-to-deploy">چهار گام استقرار برنامه با مرورگر</h3>

    <Notice variant="warning">
      توجه کنید که برنامه‌ی golang شما حتماً باید داکرایز شده باشد و در مسیر
      اصلی پروژه یک Dockerfile وجود داشته باشد.
    </Notice>

    <p>
      <b>گام اول)</b> کافیست به بخش{" "}
      <a href="https://console.liara.ir/apps/create" target="_blank">
        ایجاد برنامه‌ها در لیارا
      </a>{" "}
      بروید و با انتخاب پلتفرم Docker و نوشتن شناسه برنامه‌ی موردنظرتان و در
      نهایت انتخاب پلن، برنامه خود را ایجاد کنید. برای نمونه، ما در این آموزش
      برای برنامه آزمایشی‌مان، شناسه golang-starter را انتخاب کردیم.
    </p>
    <p>
      <b>گام دوم)</b> در این گام، بایستی پوشه پروژه خود را حتماً درون یک فایل با
      فرمت <span className="code">zip</span>
      قرار دهید؛ سپس فایل zip را کشیده و در مرورگر رها کنید؛ یا می‌توانید بر روی
      گزینه انتخاب فایل کلیک کرده و فایل zip مد نظر خود را انتخاب کنید.
    </p>
    <ZoomableImage src="https://files.liara.ir/liara/drag-and-drop/drag_and_drop_project.gif"></ZoomableImage>

    <p>
      <b>گام سوم)</b> پس از اینکه فایل zip پروژه‌تان به صورت کامل در لیارا آپلود
      شد، به صفحه جدیدی هدایت می‌شوید؛ در این صفحه در ابتدا، باید پورتی را وارد
      کنید که برنامه‌تان در آن به درخواست کاربران{" "}
      <span className="code">listen</span> می‌کند یا اصطلاحاً گوش می‌دهد. مقدار
      این پورت معمولاً در برنامه‌های golang بر روی 8080 تنظیم می‌شود.
    </p>

    <p>
      <b>گام چهارم و پایانی) </b> در نهایت، کافیست که بر روی گزینه{" "}
      <span className="code">شروع عملیات استقرار</span> کلیک کنید تا استقرار
      برنامه‌تان آغاز شود.
    </p>

    <p>
      بعد از انجام گام‌های قبلی، لیارا به برنامه شما یک زیردامنه رایگان اختصاص
      می‌دهد که به وسیله آن می‌توانید مطمئن شوید که برنامه‌ی‌تان به صورت صحیح به
      بستر لیارا منتقل شده است یا خیر. این آدرس بر اساس شناسه برنامه‌ی شما است،
      برای نمونه:
    </p>

    <Highlight className="shell">
      {`https://golang-starter.liara.run`}
    </Highlight>

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
    <br />

    <Link href="/app-deploy/golang/cli" className="next-page">
      متوجه شدم، برو گام بعدی!
    </Link>
  </Layout>
);
