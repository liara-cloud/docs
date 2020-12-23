import Layout from "../../../components/Layout";
import Link from "next/link";
import Head from "next/head";

export default () => (
  <Layout>
    <Head>
      <title>مستندات شروع به کار برنامه‌های .Net Core - سرویس ابری لیارا</title>
    </Head>

    <div className="page-head">
      <img
        className="page-icon"
        src="/static/platformicons/netcore.svg"
        alt="netcore"
      />
      <div className="page-title">
        <h1>برنامه‌های ASP.Net Core</h1>
        <span className="page-description">(ASP.Net Core Apps)</span>
      </div>
    </div>

    <h3>🚀 شروع به کار</h3>
    <p>
      در این بخش به شما کمک می‌کنیم که بتوانید در سریع‌ترین زمان ممکن، یک برنامه
      ASP.Net Core را روی بستر ابری لیارا مستقر کنید. در هر گام، شما با یک ویژگی
      در لیارا آشنا می‌شوید و می‌توانید از آن‌ها در برنامه‌ی‌تان استفاده کنید.
    </p>

    <p>در حال حاضر، از نسخه‌های زیر پشتیبانی می‌کنیم:</p>
    <ul>
      <li>5.0</li>
      <li>3.1 <b>(LTS)</b></li>
      <li>3.0</li>
      <li>2.2</li>
      <li>2.1 <b>(LTS)</b></li>
    </ul>

    <p>
      برای انتخاب نسخه، صفحه‌ی
      {' '}
      <Link href="/app-deploy/netcore/tips">توضیحات و نکات تکمیلی</Link>
      {' '}
      را مطالعه بفرمایید.
    </p>

    <Link href="/app-deploy/netcore/deploy">متوجه شدم، برو گام بعدی!</Link>
  </Layout>
);
