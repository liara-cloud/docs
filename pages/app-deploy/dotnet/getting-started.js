import Link from "next/link";
import Head from "next/head";
import Notice from "../../../components/Notice";
import Layout from "../../../components/Layout";
import PlatformIcon from "../../../components/PlatformIcon";

export default () => (
  <Layout>
    <Head>
      <title>مستندات شروع به کار برنامه‌های .Net Core - لیارا</title>
    </Head>

    <div className="page-head">
      <PlatformIcon platform="dotnet" />
      <div className="page-title">
        <h1>پلتفرم Net.</h1>
        <span className="page-description">(DotNet Platform)</span>
      </div>
    </div>

    <h3>🚀 شروع به کار</h3>

    <p>
      شما می‌توانید در سریع‌ترین زمان ممکن یک برنامه
      <Link href="https://dotnet.microsoft.com/en-us/"> NET. </Link> را با
      استفاده از <Link href="/app-deploy/dotnet/browser">مرورگر</Link>، بر روی
      لیارا مستقر کنید. البته درصورتی که استفاده از Terminal را ترجیح می‌دهید یا
      تصمیم داشته باشید با <Link href="/cicd/about">راه‌اندازی CI/CD</Link>،
      مسئولیت استقرار برنامه‌ی خود را به سرویس{" "}
      <Link href="/cicd/github">GitHub</Link> و یا{" "}
      <Link href="/cicd/gitlab">GitLab</Link> بسپارید، امکان استفاده از ابزار{" "}
      <Link href="/app-deploy/dotnet/cli">Liara CLI</Link> وجود دارد. در ادامه
      در هر گام، با یک ویژگی هاست ابری NET. لیارا آشنا خواهید شد و می‌توانید از
      آن‌ها در برنامه‌ی‌تان استفاده کنید.
    </p>
    <p>
      ما همراه شما هستیم. برای اینکه عملیات استقرار پروژه شما را بیش از پیش،
      ساده‌تر کنیم؛ آموزش صفر تا صد استقرار برنامه Net. در لیارا را برای شما
      تهیه کرده‌ایم: در این دوره آموزشی، تمامی مراحل لازم برای استقرار و اجرای
      یک برنامه، قدم به قدم توضیح داده شده است. برای مشاهده آموزش کلیک کنید:{" "}
      <a href="/tv/courses/dotnet">
        صفر تا صد استقرار برنامه‌های Net. در لیارا
      </a>
    </p>

    <p>در حال حاضر، این نسخه‌ها از NET. در لیارا پشتیبانی می‌شود:</p>

    <ul>
      <li>8.0</li>
      <li>7.0</li>
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
      اگر قصد دارید نسخه‌ی پیش‌فرض NET. را تغییر دهید می‌توانید مستندات{" "}
      <Link href="/app-deploy/dotnet/tips#dotnet-version">
        انتخاب نسخه‌ی NET.
      </Link>{" "}
      را در توضیحات و نکات تکمیلی این پلتفرم مطالعه بفرمایید.
    </Notice>

    <Notice variant="warning">
      EOL مخفف عبارت END OF LIFE و به‌معنای پایان عمر یک نسخه است بنابراین
      باوجود پشتیبانی از نسخه‌های EOL در لیارا توصیه می‌کنیم پروژه‌هایتان را به
      نسخه‌های جدیدتر ارتقا دهید.
    </Notice>
    <br />
    <Link href="/app-deploy/dotnet/browser" className="next-page">
      متوجه شدم، برو گام بعدی!
    </Link>
  </Layout>
);
