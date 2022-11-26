import Head from "next/head";
import Link from "next/link";
import Notice from "../../components/Notice";
import Layout from "../../components/Layout";
import PlatformIcon from "../../components/PlatformIcon";

export default () => (
  <Layout>
    <Head>
      <title>مستندات فعال‌سازی افزونه WP Rocket - سرویس ابری لیارا</title>
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

    <Notice variant="info">
      برای نصب افزونه WP Rocket در برنامه‌‌های وردپرس که با روش‌های{" "}
      <Link href="/wp-plus/migrate-from-cpanel">انتقال از cPanel</Link> یا{" "}
      <Link href="/wp-plus/duplicator">بسته نصب آسان (duplicator)</Link> در
      لیارا راه‌اندازی شده، نیاز هست{" "}
      <a href="https://console.liara.ir/tickets" target="_blank" rel="noopener">
        تیکت
      </a>{" "}
      ثبت کنید.
    </Notice>
  </Layout>
);
