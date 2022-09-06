import Head from "next/head";
import Link from "next/link";
import Notice from "../../../components/Notice";
import Layout from "../../../components/Layout";
import PlatformIcon from "../../../components/PlatformIcon";

export default () => (
  <Layout>
    <Head>
      <title>مستندات شروع به کار برنامه‌های Angular - سرویس ابری لیارا</title>
    </Head>

    <div className="page-head">
      <PlatformIcon platform="angularjs" />
      <div className="page-title">
        <h1>پلتفرم Angular</h1>
        <span className="page-description">(Angular Platform)</span>
      </div>
    </div>

    <h3>🚀 شروع به کار</h3>

    <p>
      شما می‌توانید در سریع‌ترین زمان ممکن یک برنامه Angular را با استفاده از
      ابزار <Link href="/app-deploy/angular/desktop">Liara Desktop</Link>، بر
      روی سرویس ابری لیارا مستقر کنید. البته درصورتی که استفاده از Terminal را
      ترجیح می‌دهید یا تصمیم داشته باشید با{" "}
      <Link href="/cicd/about">راه‌اندازی CI/CD</Link>، مسئولیت استقرار برنامه‌ی
      خود را به سرویس <Link href="/cicd/github">GitHub</Link> و یا{" "}
      <Link href="/cicd/gitlab">GitLab</Link> بسپرید، امکان استفاده از ابزار{" "}
      <Link href="/app-deploy/angular/cli">Liara CLI</Link> وجود دارد. در ادامه
      در هر گام، با یک ویژگی هاست ابری Angular لیارا آشنا خواهید شد و می‌توانید
      از آن‌ها در برنامه‌ی‌تان استفاده کنید.
    </p>

    <Link href="/app-deploy/angular/desktop">متوجه شدم، برو گام بعدی!</Link>
  </Layout>
);
