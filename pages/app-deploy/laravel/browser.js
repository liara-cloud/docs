import Head from "next/head";
import Link from "next/link";
import Highlight from "react-highlight";
import Notice from "../../../components/Notice";
import Layout from "../../../components/Layout";
import PlatformIcon from "../../../components/PlatformIcon";
import ZoomableImage from "../../../components/ZoomableImage";

export default () => (
  <Layout>
    <Head>
      <title>
        مستندات استقرار برنامه‌های Laravel با استفاده از مرورگر - لیارا
      </title>
    </Head>

    <div className="page-head">
      <PlatformIcon platform="laravel" />
      <div className="page-title">
        <h1>پلتفرم Laravel</h1>
        <span className="page-description">(Laravel Platform)</span>
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
    </ul>

    <h3 id="video">ویدیوی آموزشی استقرار با مرورگر</h3>

    <p>
      در صورتی که تمایلی به خواندن آموزش متنی ندارید می‌توانید ویدیوی آموزشی زیر
      ‌را مشاهده کنید.
    </p>

    <video
      src="https://files.liara.ir/liara/laravel/laravel-desktop.mp4"
      controls="controls"
      className="block w-full"
      width="100%"
    ></video>

    <Notice variant="info">
      پروژه و کدهای مورد استفاده در ویدیوی فوق در{" "}
      <Link href="https://github.com/liara-cloud/laravel-getting-started">
        اینجا
      </Link>{" "}
      قابل مشاهده و دسترسی هستند.{" "}
    </Notice>

    <h3 id="how-to-deploy">چهار گام استقرار برنامه با مرورگر</h3>
    <p>
      <b>گام اول)</b> کافیست به بخش{" "}
      <a href="https://console.liara.ir/apps/create" target="_blank">
        ایجاد برنامه‌ها در لیارا
      </a>{" "}
      بروید و با انتخاب پلتفرم LARAVEL و نوشتن شناسه برنامه‌ی موردنظرتان و در
      نهایت انتخاب پلن، برنامه خود را ایجاد کنید. برای نمونه، ما در این آموزش
      برای برنامه آزمایشی‌مان، شناسه laravel-starter را انتخاب کردیم.
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
      شد، به صفحه جدیدی هدایت می‌شوید؛ در این صفحه کافیست تا بخش‌های زیر را بر
      اساس نیازهای برنامه خود، تنظیم کنید:
    </p>
    <ul>
      <li>
        <b>تنظیمات دیسک‌ها: </b>اگر که در برنامه خود،{" "}
        <a href="/app-deploy/laravel/disks">دیسک</a> تعریف کردید؛ می‌توانید در
        این بخش، آن را به برنامه خود متصل کنید.
      </li>
      <li>
        <b>تنظیمات پلتفرم:</b> در این بخش، می‌توانید یک‌سری قابلیت‌ها را از جمله
        تعیین نسخه PHP تا قابلیت SSR با استفاده از Inertia را در برنامه خود مشخص
        و فعال (یا غیرفعال) کنید.
      </li>
      <li>
        <b>تنظیمات build: </b> در این بخش می‌توانید{" "}
        <a href="/app-features/build-location">موقعیت build</a> برنامه خود را
        مشخص کنید.
      </li>
    </ul>
    <p>
      <b>گام چهارم و پایانی) </b> در نهایت، کافیست که بر روی گزینه{" "}
      <span className="code">شروع عملیات استقرار</span> کلیک کنید تا استقرار
      برنامه‌تان آغاز شود.
    </p>
    <Notice variant="info">
      لیارا به صورت خودکار پکیج‌هایی که در فایل‌های
      <span className="code">composer.json</span>و
      <span className="code">package.json</span>
      لیست شده‌اند را برای شما نصب می‌کند. پس نیازی ندارید که به دنبال اجرای
      دستورات composer install و یا npm install باشید. از آن‌جایی که اجرای این
      دستورات زمان‌بر است، برای سرعت بیشتر، این دستورات را روی سرورهای
      قدرتمندمان اجرا می‌کنیم تا زمان زیادی را منتظر نمانید.
    </Notice>
    <p>
      بعد از انجام گام‌های قبلی، لیارا به برنامه شما یک زیردامنه رایگان اختصاص
      می‌دهد که به وسیله آن می‌توانید مطمئن شوید که برنامه‌ی‌تان به صورت صحیح به
      بستر لیارا منتقل شده است یا خیر. این آدرس بر اساس شناسه برنامه‌ی شما است،
      برای نمونه:
    </p>

    <Highlight className="shell">
      {`https://laravel-starter.liara.run`}
    </Highlight>
    <br />

    <Link href="/app-deploy/laravel/cli" className="next-page">
      متوجه شدم، برو گام بعدی!
    </Link>
  </Layout>
);
