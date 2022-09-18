import Layout from "../../components/Layout";
import Head from "next/head";
import Asciinema from "../../components/Asciinema";
import Highlight from "react-highlight";

export default () => (
  <Layout>
    <Head>
      <title>
        مستندات تهیه فایل پشتیبان از ذخیره‌سازی ابری - سرویس ابری لیارا
      </title>
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

    <Asciinema id="522043" />

    <p>
      درنهایت شما می‌توانید با اجرای دستور{" "}
      <span className="code">
        rclone copy [remote]:[bucket-name] /path/to/folder
      </span>{" "}
      یک نسخه از فایل‌های موجود در فضای ذخیره‌سازی ابری لیارا را در لوکال خود
      داشته باشید. برای مثال اگر یک باکت با نام{" "}
      <span className="code">novels</span> در لیارا داشته باشید، می‌توانید با
      اجرای دستور زیر، تمامی فایل‌های موجود در فضای ذخیره‌سازی ابری را در دسکتاپ
      خود کپی کنید.
    </p>

    <Highlight className="bash">
      {`rclone copy liara:novels ~/Desktop/novels`}
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
      یک رابط وب برای مدیریت فضای ذخیره‌سازی مبتنی بر پروتکل S3 در سیستم‌عامل
      ویندوز است. حال برای تهیه‌ی فایل پشتیبان از باکت ایجاد شده در لیارا
      می‌توانید طبق دستورالعمل زیر از این ابزار استفاده کنید.
    </p>
  </Layout>
);
