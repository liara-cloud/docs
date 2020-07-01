import Layout from "../../../components/Layout";
import Link from "next/link";
import Head from "next/head";
import Notice from "../../../components/Notice";
import ZoomableImage from "../../../components/ZoomableImage";

export default () => (
  <Layout>
    <Head>
      <title>Laravel سرویس ابری لیارا | مستندات استقرار برنامه‌های</title>
    </Head>

    <h1>برنامه‌های Laravel</h1>
    <span className="pageDescription">(Laravel Apps)</span>

    <h3>اجرای Migrationها</h3>
    <p>
      لاراول قابلیت بسیار خوبی برای تعریف ساختار دیتابیس‌ها به نام Migration ها
      دارد که در آن می‌توانید Schema جداول دیتابیس را تعریف کنید و با اجرای
      Migration ها، آن‌ها را به دیتابیس اضافه کنید. برای نمونه خود لاراول چند
      Migration اولیه به صورت پیشفرض دارد که بدین‌ صورت می‌توانید آن‌ها را اجرا
      کنید:
    </p>
    <p>
      کافیست ابتدا از طریق پنل لیارا، وارد بخش <b>خط فرمان</b> شده و سپس دستورات
      لازم را وارد نمایید:
    </p>
    <pre>
      <code>{`$ php artisan migrate`}</code>
    </pre>
    <ZoomableImage
      src="/static/laravel-migrate-success.png"
      alt="اجرای دستورات migrations"
    />

    <Notice variant="info">
      در نظر داشته باشید که هرزمان از طریق خط‌ فرمان لیارا متصل می‌شوید، در ریشه
      برنامه قرار دارید و به راحتی بعد از اتصال می‌توانید دستورات{" "}
      <span className="code">php artisan</span> را اجرا کنید.
    </Notice>
    <br />

    <Link href="/app-deploy/laravel/disks">متوجه شدم، برو گام بعدی!</Link>
  </Layout>
);
