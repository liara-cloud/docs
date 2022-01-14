import Link from "next/link";
import Head from "next/head";
import Layout from "../../../components/Layout";
import Notice from "../../../components/Notice";
import PlatformIcon from "../../../components/PlatformIcon";

export default () => (
  <Layout>
    <Head>
      <title>مستندات شروع به کار برنامه‌های Laravel - سرویس ابری لیارا</title>
    </Head>

    <div className="page-head">
      <PlatformIcon platform="laravel" />
      <div className="page-title">
        <h1>برنامه‌های Laravel</h1>
        <span className="page-description">(Laravel Apps)</span>
      </div>
    </div>

    <h3>🚀 شروع به کار</h3>
    <p>
      در صورتی که تمایلی به خواندن آموزش متنی ندارید می‌توانید ویدیوی آموزشی زیر
      ‌را مشاهده کنید.
    </p>
    <video
      src="https://files.liara.ir/liara/laravel.mp4"
      controls="controls"
      className="block w-full"
      width="100%"
    ></video>
    <p>
      در این بخش به شما کمک می‌کنیم که در سریع‌ترین زمان ممکن برنامه{" "}
      <a href="https://laravel.com/" target="_blank" rel="noopener">
        Laravel
      </a>{" "}
      و یا{" "}
      <a href="https://lumen.laravel.com/" target="_blank" rel="noopener">
        Lumen
      </a>{" "}
      ای‌ که نوشتید را روی بستر ابری لیارا مستقر کنید. در هر گام، شما با یک
      قابلیت مهم در لیارا آشنا می‌شوید و می‌توانید از آن‌ها در استقرار
      برنامه‌ی‌تان استفاده کنید.
    </p>
    <p>
      در حال حاضر، این نسخه‌ها از Laravel و Lumen در سرویس ابری لیارا پشتیبانی
      می‌شود:
    </p>

    <ul dir="ltr">
      <li>Laravel and Lumen 5.5.^</li>
      <li>Laravel and Lumen 6.^</li>
      <li>Laravel and Lumen 7.^</li>
      <li>Laravel and Lumen 8.^</li>
    </ul>

    <p>
      همچنین، این نسخه‌ها از PHP را هم پشتیبانی می‌کنیم:{" "}
      <Link href="/app-deploy/laravel/tips#php-version">
        (تغییر نسخه‌ی PHP)
      </Link>
    </p>

    <ul dir="ltr">
      <li>PHP 7.2</li>
      <li>PHP 7.3</li>
      <li>
        <b>PHP 7.4 (پیش‌فرض)</b>
      </li>
      <li>PHP 8.0</li>
    </ul>

    <Notice variant="info">
      اگر قصد دارید تنظیمات پیش‌فرض php.ini را تغییر دهید و یا با Queue ها کار
      کنید صفحه‌ی{" "}
      <Link href="/app-deploy/laravel/tips">توضیحات و نکات تکمیلی</Link> را
      مطالعه بفرمایید.
    </Notice>

    <br />

    <Link href="/app-deploy/laravel/deploy">متوجه شدم، برو گام بعدی!</Link>
  </Layout>
);
