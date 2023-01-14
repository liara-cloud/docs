import Link from "next/link";
import Head from "next/head";
import Layout from "../../../components/Layout";
import PlatformIcon from "../../../components/PlatformIcon";
import Notice from "../../../components/Notice";

export default () => (
  <Layout>
    <Head>
      <title>مستندات شروع به کار برنامه‌های Flask - لیارا</title>
    </Head>

    <div className="page-head">
      <PlatformIcon platform="flask" />
      <div className="page-title">
        <h1>پلتفرم Flask</h1>
        <span className="page-description">(Flask Platform)</span>
      </div>
    </div>

    <h3>🚀 شروع به کار</h3>
    <p>
      شما می‌توانید در سریع‌ترین زمان ممکن یک برنامه Flask را با استفاده از
      ابزار <Link href="/app-deploy/flask/desktop">Liara Desktop</Link>، بر روی
      لیارا مستقر کنید. البته درصورتی که استفاده از Terminal را ترجیح می‌دهید یا
      تصمیم داشته باشید با <Link href="/cicd/about">راه‌اندازی CI/CD</Link>،
      مسئولیت استقرار برنامه‌ی خود را به سرویس{" "}
      <Link href="/cicd/github">GitHub</Link> و یا{" "}
      <Link href="/cicd/gitlab">GitLab</Link> بسپرید، امکان استفاده از ابزار{" "}
      <Link href="/app-deploy/flask/cli">Liara CLI</Link> وجود دارد. در ادامه در
      هر گام، با یک ویژگی هاست ابری Flask لیارا آشنا خواهید شد و می‌توانید از
      آن‌ها در برنامه‌ی‌تان استفاده کنید.
    </p>

    <p>
      در حال حاضر، این نسخه‌ها از Python در هاست ابری Flask لیارا پشتیبانی
      می‌شود:
    </p>

    <ul>
      <li>3.7</li>
      <li>
        <b>3.8 (پیش‌فرض)</b>
      </li>
      <li>3.9</li>
      <li>3.10</li>
      <li>3.11</li>
    </ul>

    <Notice variant="info">
      اگر قصد دارید نسخه‌ی پیش‌فرض Python را تغییر دهید می‌توانید مستندات{" "}
      <Link href="/app-deploy/flask/tips#python-version">
        انتخاب نسخه‌ی Python
      </Link>{" "}
      را در توضیحات و نکات تکمیلی این پلتفرم مطالعه بفرمایید.
    </Notice>

    <br />

    <Link href="/app-deploy/flask/desktop">
      <a className="next-page">متوجه شدم، برو گام بعدی!</a>
    </Link>
  </Layout>
);
