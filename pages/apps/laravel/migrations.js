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

    <h3>اجرای Migrationها</h3>
    <p>
      لاراول قابلیت بسیار خوبی برای تعریف ساختار دیتابیس‌ها به نام Migrationها
      دارد که در آن میتوانیم Schema جداول دیتابیس را تعریف کنیم و با اجرای
      Migrationها، آن‌ها را به دیتابیس اضافه کنیم. برای نمونه خود لاراول چند
      Migration اولیه به صورت پیشفرض دارد که بدین‌صورت آن‌هارا اجرا میکنیم:
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
      در نظر داشته باشید که هرزمان از طریق خط‌ فرمان لیارا متصل میشوید، در ریشه
      پروژه قرار دارید و به راحتی بعد از اتصال میتوانید دستورات{" "}
      <span className="code">php artisan</span> را اجرا کنید.
    </Notice>
    <br />

    <Link href="/apps/laravel/disks">متوجه شدم، برو بعدی!</Link>
  </Layout>
);
