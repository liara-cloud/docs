import Link from "next/link";
import Head from "next/head";
import Notice from "../../../components/Notice";
import Layout from "../../../components/Layout";
import PlatformIcon from "../../../components/PlatformIcon";
import ZoomableImage from "../../../components/ZoomableImage";

export default () => (
  <Layout>
    <Head>
      <title>
        مستندات تنظیم متغیرها (Environment Variables) در برنامه‌های Laravel -
        لیارا
      </title>
    </Head>

    <div className="page-head">
      <PlatformIcon platform="laravel" />
      <div className="page-title">
        <h1>پلتفرم Laravel</h1>
        <span className="page-description">(Laravel Platform)</span>
      </div>
    </div>

    <h3>تنظیم متغیرها (Environment Variables)</h3>
    <p>
      متغیرهای محیطی یا همان Environment Variables به شما کمک می‌کنند تا
      برنامه‌ی‌تان در هر محیط اطلاعات مربوط به همان محیط را دریافت کند. برای
      مثال، اطلاعات اتصال به دیتابیس را می‌توانید از این بخش وارد کنید.{" "}
      <Link href="/app-features/environment-variables">توضیحات بیشتر</Link>{" "}
      Laravel نیز به وسیله فایل‌های <span className="code">.env</span> متغیرهای
      محیطی خود را نگهداری می‌کند. یکی از این env های مهم در Laravel متغیر
      APP_KEY است که لاراول به وسیله آن رمزنگاری‌های مختلفی را انجام می‌دهد.
      برای ساخت این کلید و انتقال آن به لیارا این اقدامات را انجام دهید:
    </p>
    <Notice variant="info">
      در پلتفرم Laravel لیارا، متغیر APP_KEY به صورت خودکار با ساخت برنامه ایجاد
      می‌شود و شما می‌توانید از این مراحل صرف نظر کنید و صرفاً برای یادگیری
      مدیریت env ها در لیارا آن را مطالعه کنید.
    </Notice>
    <p>
      <b>گام اول)</b> دستور زیر را در برنامه‌ی‌تان وارد کنید:
    </p>
    <pre>
      <code>{`$ php artisan key:generate --show`}</code>
    </pre>
    <p style={{ overflowWrap: "anywhere" }}>
      این دستور خروجی مشابه{" "}
      <span className="code">
        base64:3uoN2edh6vBwFm6xKWqxBoC0VlEsCm7a5HEOzblXLzs=
      </span>{" "}
      به شما می‌دهد.
    </p>
    <p>
      <b>گام دوم)</b> در پنل تنظیمات برنامه‌ی‌تان ‌و در قسمت <b>متغیرها</b>{" "}
      کافیست که روی دکمه <b>افزودن متغیر جدید</b> کلیک کنید و key آن ‌را APP_KEY
      و value آن ‌را مقداری که از دستور بالا گرفتید قرار دهید و سپس روی{" "}
      <b>ثبت تغییرات</b> کلیک کنید.
      <br />
      <br />
      <ZoomableImage
        src="/static/laravel-env.png"
        alt="اولین متغیر محیطی در برنامه‌های لاراولی"
      />
    </p>
    <p>
      بعد از این تغییرات برنامه‌ی‌ شما به صورت خودکار ری‌استارت می‌شود و در
      استقرار جدید این متغیر‌های محیطی در داخل برنامه قابل استفاده می‌شوند. به
      این شیوه که APP_KEY را اضافه کردید می‌توانید هر ENV دیگری را نیز به برنامه
      اضافه کنید.
    </p>

    <Link href="/app-deploy/laravel/logs" className="next-page">
      متوجه شدم، برو گام بعدی!
    </Link>
  </Layout>
);
