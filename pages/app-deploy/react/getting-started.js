import Head from "next/head";
import Link from "next/link";
import Notice from "../../../components/Notice";
import Layout from "../../../components/Layout";
import PlatformIcon from "../../../components/PlatformIcon";

export default () => (
  <Layout>
    <Head>
      <title>مستندات شروع به کار برنامه‌های React - لیارا</title>
    </Head>

    <div className="page-head">
      <PlatformIcon platform="react" />
      <div className="page-title">
        <h1>پلتفرم ReactJS</h1>
        <span className="page-description">(ReactJS Platform)</span>
      </div>
    </div>

    <h3>🚀 شروع به کار</h3>

    <p>
      شما می‌توانید در سریع‌ترین زمان ممکن یک برنامه React را با استفاده از
      ابزار <Link href="/app-deploy/react/desktop">Liara Desktop</Link>، بر روی
      لیارا مستقر کنید. البته درصورتی که استفاده از Terminal را ترجیح می‌دهید یا
      تصمیم داشته باشید با <Link href="/cicd/about">راه‌اندازی CI/CD</Link>،
      مسئولیت استقرار برنامه‌ی خود را به سرویس{" "}
      <Link href="/cicd/github">GitHub</Link> و یا{" "}
      <Link href="/cicd/gitlab">GitLab</Link> بسپرید، امکان استفاده از ابزار{" "}
      <Link href="/app-deploy/react/cli">Liara CLI</Link> وجود دارد. در ادامه در
      هر گام، با یک ویژگی هاست ابری React لیارا آشنا خواهید شد و می‌توانید از
      آن‌ها در برنامه‌ی‌تان استفاده کنید.
    </p>

    <div className="platforms">
      <Link href="/app-deploy/nextjs/getting-started">
        <a>
          <PlatformIcon platform="next" />
          <span>NextJS</span>
        </a>
      </Link>
    </div>

    <br />

    <Link href="/app-deploy/react/desktop">
      <a className="next-page">متوجه شدم، برو گام بعدی!</a>
    </Link>
  </Layout>
);
