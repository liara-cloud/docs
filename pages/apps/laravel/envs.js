import Layout from "../../../components/Layout";
import Link from "next/link";
import Head from "next/head";
import Notice from "../../../components/Notice";
import ZoomableImage from "../../../components/ZoomableImage";

export default () => (
  <Layout>
    <Head>
      <title>
        سرویس ابری لیارا | مستندات استقرار برنامه‌های Laravel - Laravel
      </title>
    </Head>

    <h1>فریم‌ورک Laravel</h1>
    <span className="pageDescription">(Laravel Framework)</span>

    <h3>پیکربندی ENV‌ها</h3>
    <p>
      متغیرهای محیطی یا همان Environment Variables ها به شما کمک میکنند تا
      برنامه‌ی‌تان در هر محیط اطلاعات مربوط به همان محیط را دریافت کند. Laravel
      نیز به وسیله فایل‌های <span className="code">.env</span> متغیرهای محیطی
      خود را نگهداری میکند. یکی از این ENV های مهم در Laravel متغیر APP_KEY
      میباشد که لاراول به وسیله آن رمزنگاری‌های مختلفی را انجام میدهد. برای ساخت
      این کلید و انتقال آن به لیارا این اقدامات را انجام میدهیم:
    </p>
    <Notice variant="info">
      در پتلفرم Laravel، متغیر APP_KEY به صورت خودکار با ساخت برنامه ایجاد میشود
      و شما میتوانید از این مراحل صرف نظر کنید و صرفاً برای یادگیری مدیریت ENV
      ها در لیارا آن را مطالعه کنید.
    </Notice>
    <p>
      <b>گام اول)</b> دستور زیر را در پروژه وارد میکنیم.
      <pre>
        <code>{`$ php artisan key:generate --show`}</code>
      </pre>
      این دستور خروجی‌ای شبیه{" "}
      <span className="code">
        base64:3uoN2edh6vBwFm6xKWqxBoC0VlEsCm7a5HEOzblXLzs=
      </span>{" "}
      به شما میدهد.
    </p>
    <p>
      <b>گام دوم)</b> در پنل تنظیمات برنامه‌ی‌تان ‌و در قسمت <b>متغیرها</b>{" "}
      کافیست که روی دکمه <b>افزودن متغیر جدید</b> کلیک کنید و key آن ‌را APP_KEY
      و value آن ‌را مقداری که از دستور بالا گرفتید قرار دهید و سپس روی{" "}
      <b>ثبت تغییرات</b> کلیک کنید.
      <br />
      <br />
      <ZoomableImage
        src="/static/laravel-app-key.png"
        alt="اولین متغیر محیطی در پروژه‌های لاراولی"
      />
    </p>
    <p>
      بعد از این تغییرات برنامه‌ی‌ شما به صورت خودکار ریستارت میشود و در استقرار
      جدید این متغیر‌های محیطی در داخل برنامه قابل استفاده میشوند. به این شیوه
      که APP_KEY را اضافه کردید میتوانید هر ENV دیگری را نیز به پروژه اضافه
      کنید.
    </p>

    <Link href="/apps/laravel/https">متوجه شدم، برو بعدی!</Link>
  </Layout>
);
