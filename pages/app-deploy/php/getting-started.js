import Head from "next/head";
import Link from "next/link";
import Notice from "../../../components/Notice";
import Layout from "../../../components/Layout";
import PlatformIcon from "../../../components/PlatformIcon";

export default () => (
  <Layout>
    <Head>
      <title>مستندات شروع به کار برنامه‌های PHP - سرویس ابری لیارا</title>
    </Head>

    <div className="page-head">
      <PlatformIcon platform="php" />
      <div className="page-title">
        <h1>برنامه‌های PHP</h1>
        <span className="page-description">(PHP Apps)</span>
      </div>
    </div>

    <h3>🚀 شروع به کار</h3>

    <p>
      شما می‌توانید در سریع‌ترین زمان ممکن یک برنامه PHP را با استفاده از ابزار{" "}
      <Link href="/app-deploy/php/desktop">Liara Desktop</Link>، بر روی سرویس
      ابری لیارا مستقر کنید. البته درصورتی که استفاده از Terminal را ترجیح
      می‌دهید یا تصمیم داشته باشید با{" "}
      <Link href="/cicd/about">راه‌اندازی CI/CD</Link>، مسئولیت استقرار برنامه‌ی
      خود را به سرویس <Link href="/cicd/github">GitHub</Link> و یا{" "}
      <Link href="/cicd/gitlab">GitLab</Link> بسپرید، امکان استفاده از ابزار{" "}
      <Link href="/app-deploy/php/cli">Liara CLI</Link> وجود دارد. در ادامه در
      هر گام، با یک ویژگی هاست ابری PHP لیارا آشنا خواهید شد و می‌توانید از
      آن‌ها در برنامه‌ی‌تان استفاده کنید.
    </p>

    <p>
      در حال حاضر، این نسخه‌ها از PHP در هاست ابری PHP لیارا پشتیبانی می‌شود:
    </p>

    <ul>
      <li>
        <b>7.2 (پیش‌فرض)</b>
      </li>
    </ul>

    <Link href="/app-deploy/php/desktop">متوجه شدم، برو گام بعدی!</Link>
  </Layout>
);
