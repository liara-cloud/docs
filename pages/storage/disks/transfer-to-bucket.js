import Head from "next/head";
import Link from "next/link";
import Layout from "../../../components/Layout";
import Notice from "../../../components/Notice";
import ZoomableImage from "../../../components/ZoomableImage";
import Asciinema from "../../../components/Asciinema";
import Highlight from "react-highlight";

export default () => (
  <Layout>
    <Head>
      <title>
        {" "}
        مستندات انتقال فایل‌ها از دیسک‌ها به فضای ذخیره‌سازی ابری لیارا - لیارا
      </title>
    </Head>

    <h1>انتقال فایل‌های از دیسک‌ها به فضای ذخیره‌سازی ابری لیارا</h1>
    <span className="page-description">
      (transfer files from disks to buckets)
    </span>

    <p>
      در صورتی که تمایلی به خواندن آموزش متنی ندارید می‌توانید ویدیوی آموزشی زیر
      ‌را مشاهده کنید.
    </p>
    <video
      src="https://files.liara.ir/liara/rclone/rclone-transfer-files-from-disk-to-bucket.mp4"
      controls="controls"
      className="block w-full"
      width="100%"
    ></video>

    <p>
      برای انتقال فایل‌های درون یک دیسک به یک باکت در لیارا، در ابتدا کافیست تا
      برنامه{" "}
      <a href="https://rclone.org/" target="_blank" rel="noopener noreferrer">
        Rclone
      </a>{" "}
      را از صفحه{" "}
      <a
        href="https://rclone.org/downloads/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Downloads
      </a>{" "}
      متناسب با سیستم عامل خود، دانلود کنید.
    </p>

    <p>
      سپس، باید یک دسترسی FTP برای دیسک خود ایجاد کنید. برای ایجاد دسترسی FTP،
      وارد بخش دیسک‌ها شده و روی دیسک مورد نظرتان کلیک کنید. سپس وارد منوی{" "}
      <strong>دسترسی FTP</strong> شوید و بر روی دکمه‌ی{" "}
      <strong>ایجاد دسترسی FTP</strong> کلیک کنید. در پنجره‌ی باز شده، نام
      کاربری مدنظرتان را وارد کرده و درنهایت بر روی دکمه‌ی{" "}
      <strong>ایجاد دسترسی</strong> کلیک کنید.
    </p>

    <p>
      در قدم بعد باید با اجرای دستور <span className="code">rclone config</span>{" "}
      یک <span className="code">remote</span> جدید را برای دیسک پیکربندی کنید:
    </p>

    <Asciinema id="rclone-disk-ftp-remote" />

    <p>
      بعد از انجام کار فوق، اکنون باید مجدداً با اجرای دستور{" "}
      <span className="code">rclone config</span> یک{" "}
      <span className="code">remote</span> جدید دیگر را برای باکت پیکربندی کنید:
    </p>

    <Asciinema id="rclone-backup-bucket" />

    <p>
      درنهایت شما می‌توانید با اجرای دستور زیر یک نسخه از فایل‌های موجود در دیسک
      موردنظرتان را در باکت نیز، ذخیره کنید:
    </p>

    <Highlight className="plaintext">
      rclone copy -PM [disk-remote]:/ [bucket-remote]:/[bucket-name]
    </Highlight>

    <p>
      البته اگر که قصد انتقال فایل‌ها را از دیسک به باکت دارید، می‌توانید دستور
      زیر را اجرا کنید:
    </p>

    <Highlight className="plaintext">
      rclone move -PM [disk-remote]:/ [bucket-remote]:/[bucket-name]
    </Highlight>

    <p>
      برای مثال اگر یک باکت با نام <span className="code">app-bucket</span> و یک
      دیسک در لیارا داشته باشید، می‌توانید با اجرای دستور زیر، تمامی فایل‌های
      موجود در دیسک را به باکت app-bucket انتقال دهید.
    </p>

    <Highlight className="bash">
      {`rclone move -PM r2:/ r1:/app-bucket`}
    </Highlight>
  </Layout>
);
