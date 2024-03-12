import Head from "next/head";
import Highlight from "react-highlight";
import Layout from "../../components/Layout";
import Asciinema from "../../components/Asciinema";
import ZoomableImage from "../../components/ZoomableImage";
import Notice from "../../components/Notice";

export default () => (
  <Layout>
    <Head>
      <title>مستندات انتقال فایل از یک باکت به باکت دیگر - لیارا</title>
    </Head>

    <h1>انتقال فایل‌ها از یک باکت به باکت دیگر در لیارا</h1>

    <h4>فهرست عناوین:</h4>
    <ul className="mt-0">
      <li>
        <a href="#same">انتقال فایل باکت به باکت در یک اکانت</a>
      </li>
      <li>
        <a href="#diff">انتقال فایل باکت به باکت در دو اکانت متفاوت</a>
      </li>
    </ul>

    <h4 id="same">انتقال فایل باکت به باکت در یک اکانت</h4>

    <p>
      در صورتی که تمایلی به خواندن آموزش متنی ندارید می‌توانید ویدیوی آموزشی زیر
      ‌را مشاهده کنید:
    </p>

    <video
      src="https://files.liara.ir/liara/rclone/rclone-transfer-files-between-buckets.mp4"
      controls="controls"
      className="block w-full"
      width="100%"
    ></video>
    <p>
      برای انتقال فایل‌های درون یک باکت به یک باکت دیگر در یک اکانت، در ابتدا
      کافیست تا برنامه{" "}
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
      متناسب با سیستم عامل خود، دانلود کنید. در قدم بعد باید با اجرای دستور{" "}
      <span className="code">rclone config</span> یک{" "}
      <span className="code">remote</span> جدید را پیکربندی کنید:
    </p>

    <Asciinema id="rclone-backup-bucket" />

    <Notice variant="info">
      در نظر داشته باشید که ایجاد یک کلید برای هر دو باکت کافی است و نیازی نیست
      تا برای هر باکت، یک کلید و یک ریموت مجزا در rclone تعریف شود. و شما
      می‌توانید با استفاده از یک ریموت و کلید، عملیات انتقال را انجام دهید.
    </Notice>

    <p>
      درنهایت شما می‌توانید با اجرای دستور زیر یک نسخه از فایل‌های موجود در باکت
      موردنظرتان را در باکت جدید نیز، ذخیره کنید:
    </p>

    <Highlight className="plaintext">
      rclone copy -PM [remote]:/[first-bucket-name]
      [remote]:/[second-bucket-name]
    </Highlight>

    <p>
      البته اگر که قصد انتقال فایل‌ها را از باکت اول به باکت دوم دارید،
      می‌توانید دستور زیر را اجرا کنید:
    </p>

    <Highlight className="plaintext">
      rclone move -PM [remote]:/[first-bucket-name]
      [remote]:/[second-bucket-name]
    </Highlight>

    <p>
      برای مثال اگر یک باکت با نام <span className="code">app-bucket</span> و یک
      باکت دیگر با نام <span className="code">newbie</span> در لیارا داشته
      باشید، می‌توانید با اجرای دستور زیر، تمامی فایل‌های موجود در باکت
      app-bucket را به باکت newbie انتقال دهید.
    </p>

    <Highlight className="bash">
      {`rclone move -PM r1:/app-bucket r1:/newbie`}
    </Highlight>

    <Asciinema id="transfer-files-between-buckets" />

    <h4 id="diff">انتقال فایل باکت به باکت در دو اکانت متفاوت</h4>

    <p>
      در صورتی که تمایلی به خواندن آموزش متنی ندارید می‌توانید ویدیوی آموزشی زیر
      ‌را مشاهده کنید:
    </p>

    <video
      src="https://files.liara.ir/liara/rclone/rclone-transfer-files-between-buckets-across-accounts.mp4"
      controls="controls"
      className="block w-full"
      width="100%"
    ></video>

    <p>
      فرایند این کار هم همانند انتقال باکت به باکت در یک اکانت است؛ با این تفاوت
      که شما باید در کنار <span className="code">remote</span> اول، یک ریموت
      ثانویه نیز ایجاد کنید و درون آن، اطلاعات باکت اکانت دوم خود را وارد کنید.
    </p>
    <p>
      پس از ثبت هر دو ریموت، شما می‌توانید فایل‌های درون باکت اول را به باکت دوم
      که در اکانت دیگری است، انتقال دهید. برای مثال، فرض کنید که r1 ریموت اول و
      r2 نام ریموت دوم است. برای انتقال فایل‌های درون باکت app-bucket در اکانت
      اول به باکت newbie در اکانت دوم، می‌توانیم دستور زیر را اجرا کنیم:
    </p>

    <Highlight className="bash">
      {`rclone move -PM r1:/app-bucket r2:/newbie`}
    </Highlight>
  </Layout>
);
