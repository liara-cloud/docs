import Head from "next/head";
import Link from "next/link";
import Layout from "../../../components/Layout";
import Notice from "../../../components/Notice";
import ZoomableImage from "../../../components/ZoomableImage";

export default () => (
  <Layout>
    <Head>
      <title>مستندات دسترسی به دیسک‌ها با دسترسی FTP - لیارا</title>
    </Head>

    <h1>دیسک‌ها</h1>
    <span className="page-description">(Disks)</span>

    <h4>فهرست عناوین:</h4>
    <ul className="mt-0">
      <li>
        <a href="#get-access-to-disk">دسترسی به دیسک‌ها با FTP</a>
      </li>
      <li>
        <a href="#create-ftp-account">ایجاد دسترسی FTP</a>
      </li>
      <li>
        <a href="#winscp">اتصال از طریق WinSCP</a>
      </li>
      <li>
        <a href="#filezilla">اتصال از طریق FileZilla</a>
      </li>
    </ul>

    <h3 id="get-access-to-disk">دسترسی به دیسک‌ها با FTP</h3>
    <p>
      برای مدیریت فایل‌ها و دایرکتوری‌های موجود در دیسک‌های برنامه‌تان،
      می‌توانید از دسترسی FTP که لیارا در اختیار شما می‌گذارد استفاده کنید.
      همچنین این قابلیت را هم دارید که برای هر دیسک، حداکثر ۱۰ کاربر تعریف کنید
      تا هر کدام از اعضای تیم‌تان دسترسی منحصر به خودش را داشته باشد.
    </p>
    <h3 id="create-ftp-account">ایجاد دسترسی FTP</h3>
    <p>
      در صورتی که تمایلی به خواندن آموزش متنی ندارید می‌توانید ویدیوی آموزشی زیر
      ‌را مشاهده کنید.
    </p>
    <ZoomableImage src="https://files.liara.ir/docs/disks/add-new-ftp-user.gif" />
    <p>
      برای ایجاد دسترسی FTP، وارد بخش دیسک‌ها شده و روی دیسک مورد نظرتان کلیک
      کنید. سپس وارد منوی <strong>دسترسی FTP</strong> شوید و بر روی دکمه‌ی{" "}
      <strong>ایجاد دسترسی FTP</strong> کلیک کنید. در پنجره‌ی باز شده، نام
      کاربری مدنظرتان را وارد کرده و درنهایت بر روی دکمه‌ی{" "}
      <strong>ایجاد دسترسی</strong> کلیک کنید.
    </p>
    <h3>اتصال به دیسک</h3>
    <p>
      برای اتصال به دیسک از طریق دسترسی FTP می‌توانید از نرم‌افزار{" "}
      <Link href="#winscp">WinSCP</Link> و یا{" "}
      <Link href="#filezilla">FileZilla</Link> استفاده کنید.
    </p>
    <h4 id="winscp">اتصال از طریق WinSCP</h4>
    <p>
      در صورتی که تمایلی به خواندن آموزش متنی ندارید می‌توانید ویدیوی آموزشی زیر
      ‌را مشاهده کنید.
    </p>
    <ZoomableImage src="https://files.liara.ir/docs/disks/connect-to-disks-with-winscp.gif" />
    <p>
      برای دانلود WinSCP می‌توانید از لینک روبرو استفاده کنید:{" "}
      <a
        href="https://files.liara.ir/liara/WinSCP.5.17.5.Build.10414.zip"
        target="_blank"
      >
        دانلود WinSCP
      </a>{" "}
    </p>
    <p>
      پس از اجرای نرم‌افزار، روی <strong>New Session</strong> کلیک کنید و{" "}
      <strong>File protocol</strong> را <strong>FTP</strong> قرار دهید. سپس
      اطلاعات دسترسی FTP ایجاد شده در بخش قبل را در فیلدهای مربوطه وارد کرده و
      درنهایت بر روی دکمه‌ی <strong>login</strong> کلیک کنید.
    </p>

    <h4 id="filezilla">اتصال از طریق FileZilla</h4>
    <p>
      در صورتی که تمایلی به خواندن آموزش متنی ندارید می‌توانید ویدیوی آموزشی زیر
      ‌را مشاهده کنید.
    </p>
    <ZoomableImage src="https://files.liara.ir/docs/disks/connect-to-disks-with-filezilla.gif" />

    <p>
      برای دانلود FileZilla برای ویندوز، با توجه به معماری سیستم‌تان یکی از دو
      نسخه زیر را دانلود و نصب کنید:
    </p>

    <p>
      <a
        href="https://files.liara.ir/liara/FileZilla.3.48.1.x86.zip"
        target="_blank"
      >
        دانلود FileZilla برای ویندوز 32bit
      </a>
    </p>
    <p>
      <a
        href="https://files.liara.ir/liara/FileZilla.3.48.1.x64.zip"
        target="_blank"
      >
        دانلود FileZilla برای ویندوز 64bit
      </a>
    </p>

    <p>
      برای نصب FileZilla در لینوکس با توجه به توزیع لینوکس‌تان از یکی از
      دستورهای زیر استفاده کنید:
    </p>
    <p style={{ direction: "ltr" }}>
      Debian based:
      <span className="code">sudo apt install filezilla</span>
    </p>
    <p style={{ direction: "ltr" }}>
      RedHat based:
      <span className="code">sudo dnf install filezilla</span>
    </p>

    <p>
      پس از اجرای نرم‌افزار، اطلاعات دسترسی FTP ایجاد شده در بخش قبل را در
      فیلدهای مربوطه وارد کرده و درنهایت بر روی دکمه‌ی{" "}
      <strong>Quickconnect</strong> کلیک کنید.
    </p>

    <Notice variant="warning">
      توجه کنید اگر دسترسی‌ای را پاک کنید اتصال کاربری که از طریق آن دسترسی متصل
      شده است قطع نمی‌شود.
    </Notice>
  </Layout>
);
