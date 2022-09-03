import Link from "next/link";
import Head from "next/head";
import Notice from "../../../components/Notice";
import Layout from "../../../components/Layout";
import PlatformIcon from "../../../components/PlatformIcon";

export default () => (
  <Layout>
    <Head>
      <title>مستندات شروع به کار برنامه‌های .Net Core - سرویس ابری لیارا</title>
    </Head>

    <div className="page-head">
      <PlatformIcon platform="netcore" />
      <div className="page-title">
        <h1>برنامه‌های ASP.Net Core</h1>
        <span className="page-description">(ASP.Net Core Apps)</span>
      </div>
    </div>

    <h3>🚀 شروع به کار</h3>

    <p>
      شما می‌توانید در سریع‌ترین زمان ممکن یک برنامه .NET را با استفاده از ابزار{" "}
      <Link href="/app-deploy/netcore/desktop">Liara Desktop</Link>، بر روی
      سرویس ابری لیارا مستقر کنید. البته درصورتی که استفاده از Terminal را ترجیح
      می‌دهید یا تصمیم داشته باشید با{" "}
      <Link href="/cicd/about">راه‌اندازی CI/CD</Link>، مسئولیت استقرار برنامه‌ی
      خود را به سرویس <Link href="/cicd/github">GitHub</Link> و یا{" "}
      <Link href="/cicd/gitlab">GitLab</Link> بسپرید، امکان استفاده از ابزار{" "}
      <Link href="/app-deploy/netcore/cli">Liara CLI</Link> وجود دارد. در ادامه
      در هر گام، با یک ویژگی هاست ابری .NET لیارا آشنا خواهید شد و می‌توانید از
      آن‌ها در برنامه‌ی‌تان استفاده کنید.
    </p>

    <p>در حال حاضر، این نسخه‌ها از .NET در لیارا پشتیبانی می‌شود:</p>

    <ul>
      <li>
        6.0 <strong>(LTS)</strong>
      </li>
      <li>5.0</li>
      <li>
        3.1 <strong>(LTS)</strong> (پیش‌فرض)
      </li>
      <li>3.0 (EOL)</li>
      <li>2.2 (EOL)</li>
      <li>2.1 (EOL)</li>
    </ul>

    <Notice variant="info">
      اگر قصد دارید نسخه‌ی پیش‌فرض .NET را تغییر دهید می‌توانید مستندات{" "}
      <Link href="/app-deploy/netcore/tips#dotnet-version">
        انتخاب نسخه‌ی .NET
      </Link>{" "}
      را در توضیحات و نکات تکمیلی این پلتفرم مطالعه بفرمایید.
    </Notice>

    <Notice variant="warning">
      EOL مخفف عبارت END OF LIFE و به‌معنای پایان عمر یک نسخه است بنابراین
      باوجود پشتیبانی از نسخه‌های EOL در لیارا توصیه می‌کنیم پروژه‌هایتان را به
      نسخه‌های جدیدتر ارتقا دهید.
    </Notice>
    <br />
    <Link href="/app-deploy/netcore/desktop">متوجه شدم، برو گام بعدی!</Link>
  </Layout>
);
