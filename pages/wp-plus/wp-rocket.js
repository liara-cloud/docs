import Head from "next/head";
import Link from "next/link";
import Notice from "../../components/Notice";
import Layout from "../../components/Layout";
import PlatformIcon from "../../components/PlatformIcon";

export default () => (
  <Layout>
    <Head>
      <title>مستندات فعال‌سازی افزونه WP Rocket - لیارا</title>
    </Head>

    <div className="page-head">
      <PlatformIcon platform="wordpress" />
      <div className="page-title">
        <h1>وردپرس پلاس</h1>
        <span className="page-description">(WordPress plus)</span>
      </div>
    </div>

    <h2>افزونه WP Rocket</h2>

    <p>
      افزونه WP Rocket یکی از برترین افزونه‌ها برای بهبود سرعت و SEO برنامه‌های
      وردپرس است. به همین منظور لیارا لایسنس اورجینال این افزونه را تهیه کرده و
      شما می‌توانید در برنامه‌های وردپرس پلاس، به‌صورت رایگان از قابلیت‌های این
      افزونه بهره‌مند شوید.
    </p>

    <h3 id="activate">فعال‌سازی افزونه WP Rocket</h3>
    <p>
      بعد از نصب و پیکربندی برنامه‌ی وردپرس خود می‌توانید وارد بخش افزونه‌ها شده
      و افزونه WP Rocket را فعال کنید. با فعال‌سازی این افزونه، Caching به‌صورت
      خودکار فعال می‌شود.
    </p>

    <p>
      برای نصب افزونه WP Rocket در برنامه‌‌های وردپرس که با روش‌های{" "}
      <Link href="/wp-plus/migrate-from-cpanel">انتقال از cPanel</Link> یا{" "}
      <Link href="/wp-plus/duplicator">بسته نصب آسان (duplicator)</Link> در
      لیارا راه‌اندازی شده، وارد اطلاعات کلی سرویس وردپرس شده و افزونه‌ی
      wp-rocket رو دانلود کنید. سپس:
    </p>

    <ul>
      <li>
        <p>از پیشخوان وردپرس گزینه افزونه‌ها و سپس افزودن را انتخاب کنید.</p>
      </li>
      <li>
        <p>گزینه بارگذاری افزونه را انتخاب کنید.</p>
      </li>
      <li>
        <p>
          گزینه Choose File را انتخاب کنید و فایل زیپ افزونه را بارگذاری کنید و
          سپس روی گزینه نصب کلیک کنید.
        </p>
      </li>
    </ul>

    <p>
      بعد از نصب، گزینه "فعال کردن" افزونه را انتخاب کنید تا افزونه فعال شود.
    </p>
  </Layout>
);
