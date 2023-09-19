import Head from "next/head";
import Link from "next/link";
import Highlight from "react-highlight";
import Notice from "../../components/Notice";
import Layout from "../../components/Layout";
import PlatformIcon from "../../components/PlatformIcon";
import ZoomableImage from "../../components/ZoomableImage";

export default () => (
  <Layout>
    <Head>
      <title>نصب قالب با استفاده از بسته نصب آسان (duplicator) - لیارا</title>
    </Head>

    <div className="page-head">
      <PlatformIcon platform="wordpress" />
      <div className="page-title">
        <h1>وردپرس پلاس</h1>
        <span className="page-description">(WordPress plus)</span>
      </div>
    </div>

    <h2>نصب قالب با استفاده از بسته نصب آسان (duplicator)</h2>

    <h4>فهرست عناوین:</h4>
    <ul className="mt-0">
      <li>
        <a href="#installer">آپلود بسته نصب آسان</a>
      </li>
      <li>
        <a href="#config">نصب قالب</a>
      </li>
      <li>
        <a href="#too-many-redirects">خطای err_too_many_redirects</a>
      </li>
    </ul>

    <h3 id="installer">آپلود بسته نصب آسان</h3>
    <p>
      برای آپلود بسته نصب آسان وارد برنامه شده و از منوی{" "}
      <strong>دسترسی FTP</strong>، یک دسترسی FTP جدید بسازید. بعد از ایجاد
      دسترسی FTP می‌توانید با استفاده از نرم‌افزارهایی مثل{" "}
      <Link href="/storage/disks/ftp#filezilla">FileZilla</Link> یا{" "}
      <Link href="/storage/disks/ftp#winscp">WinSCP</Link> به محتوای برنامه‌ی
      وردپرس دسترسی پیدا کنید.
    </p>
    <p>
      حال باید تمامی فایل‌ها و پوشه‌ها را انتخاب کرده و آن‌ها را حذف کنید. سپس
      می‌توانید بسته نصب آسان را در لوکال از حالت فشرده خارج کرده و فایل‌ها و
      پوشه‌های بسته نصب آسان را آپلود کنید.
    </p>

    <h3 id="config">نصب قالب</h3>
    <p>
      برای نصب بسته آسان باید فایل <span className="code">installer.php</span>{" "}
      را با استفاده از زیردامنه‌ی رایگان <strong>iran.liara.run</strong> در
      مرورگر باز کرده و پیکربندی‌های لازم را براساس راهنمای قالب انجام دهید.
    </p>
    <Notice variant="info">
      برای مشاهده‌ی اطلاعات دیتابیس ایجاد شده می‌توانید وارد منوی سرویس{" "}
      <strong>دیتابیس</strong> شوید و اطلاعات دیتابیس را از منوی{" "}
      <strong>نحوه‌ی اتصال</strong> کپی کنید.
    </Notice>

    <h3 id="too-many-redirects">خطای err_too_many_redirects</h3>
    <p>
      درصورتی که برنامه‌ی شما با خطای too many redirects مواجه شد باید قطعه کد
      زیر را با استفاده از دسترسی FTP به فایل <strong>wp-config.php</strong>{" "}
      اضافه کرده و مجدد برنامه را بررسی کنید.
    </p>
    <Highlight className="php">{`$_SERVER['HTTPS'] = 'on';
/* That's all, stop editing! Happy publishing. <-- قبل از این کامنت */`}</Highlight>
    <br />
    {/* <ZoomableImage src="https://files.liara.ir/docs/wordpress/debugging-err-too-many-redirects.gif"></ZoomableImage> */}
  </Layout>
);
