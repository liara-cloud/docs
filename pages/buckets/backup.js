import Head from "next/head";
import Highlight from "react-highlight";
import Layout from "../../components/Layout";
import Asciinema from "../../components/Asciinema";
import ZoomableImage from "../../components/ZoomableImage";

export default () => (
  <Layout>
    <Head>
      <title>مستندات تهیه فایل پشتیبان از ذخیره‌سازی ابری - لیارا</title>
    </Head>

    <h1>ذخیره‌سازی ابری</h1>

    <h3>تهیه فایل پشتیبان</h3>

    <h4 id="rclone">Rclone</h4>
    <p>
      <a href="https://rclone.org/" target="_blank" rel="noopener noreferrer">
        Rclone
      </a>{" "}
      یک ابزار تحت command-line است که می‌توانید به‌کمک آن، فایل‌های درون فضای
      ذخیره‌سازی ابری را مدیریت کنید. حال برای تهیه‌ی فایل پشتیبان از باکت ایجاد
      شده در لیارا می‌توانید طبق دستورالعمل زیر از این ابزار استفاده کنید.
    </p>

    <p>
      در صورتی که تمایلی به خواندن آموزش متنی ندارید می‌توانید ویدیوی آموزشی زیر
      ‌را مشاهده کنید.
    </p>

    <video
      src="files.liara.ir/liara/rclone/rclone-bucket-backup.mp4"
      controls="controls"
      className="block w-full"
      width="100%"
    ></video>

    <p>
      در ابتدا از صفحه‌ی{" "}
      <a
        href="https://rclone.org/downloads/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Downloads
      </a>
      ، آخرین نسخه‌ی این ابزار را متناسب با سیستم‌عامل فعلی‌تان دانلود کرده و آن
      را نصب کنید. در قدم بعد باید با اجرای دستور{" "}
      <span className="code">rclone config</span> یک{" "}
      <span className="code">remote</span> جدید را پیکربندی کنید.
    </p>

    <Asciinema id="rclone-backup-bucket" />

    <p>
      درنهایت شما می‌توانید با اجرای دستور{" "}
      <span className="code">
        rclone copy -PM [remote]:[bucket-name] /path/to/folder
      </span>{" "}
      یک نسخه از فایل‌های موجود در باکت موردنظرتان را در لوکال ذخیره کنید. برای
      مثال اگر یک باکت با نام <span className="code">novels</span> در لیارا
      داشته باشید، می‌توانید با اجرای دستور زیر، تمامی فایل‌های موجود در این
      باکت را در دسکتاپ خود کپی کنید.
    </p>

    <Highlight className="bash">
      {`rclone copy -PM liara:novels ~/Desktop/novels`}
    </Highlight>

    <h4 id="s3-browser">S3 Browser</h4>
    <p>
      <a
        href="https://s3browser.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        S3 Browser
      </a>{" "}
      یک رابط گرافیکی برای مدیریت فضای ذخیره‌سازی مبتنی بر پروتکل S3 در
      سیستم‌عامل ویندوز است. حال برای تهیه‌ی فایل پشتیبان از باکت ایجاد شده در
      لیارا می‌توانید طبق دستورالعمل زیر از این ابزار استفاده کنید.
    </p>

    <p>
      بعد از نصب و اجرای S3 Browser باید از منوی <strong>Accounts</strong> روی
      گزینه‌ی <strong>Add New Account</strong> کلیک کرده و اطلاعات درخواست شده
      را وارد کنید.
    </p>

    <ZoomableImage
      src="/static/buckets/add-new-s3-browser-account.png"
      alt="اضافه کردن یک باکت جدید در s3 browser"
    />

    <p>
      بعد از اضافه شدن حساب می‌توانید با کلیک راست روی باکت موردنظرتان و انتخاب
      گزینه‌ی <strong>Download all files to</strong>، تمامی فایل‌های موجود در
      این باکت را در مسیر موردنظرتان ذخیره کنید.
    </p>

    <ZoomableImage
      src="/static/buckets/save-bucket-files-into-local-folder.png"
      alt="دانلود تمام داده‌های باکت در لوکال"
    />
  </Layout>
);
