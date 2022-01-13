import Link from "next/link";
import Head from "next/head";
import Layout from "../../../components/Layout";
import PlatformIcon from "../../../components/PlatformIcon";

export default () => (
  <Layout>
    <Head>
      <title>مستندات شروع به کار برنامه‌های Flask - سرویس ابری لیارا</title>
    </Head>

    <div className="page-head">
      <PlatformIcon platform="flask" />
      <div className="page-title">
        <h1>برنامه‌های Flask</h1>
        <span className="page-description">(Flask Apps)</span>
      </div>
    </div>

    <h3>🚀 شروع به کار</h3>
    <p>
      در این بخش به شما کمک می‌کنیم که بتوانید در سریع‌ترین زمان ممکن، یک برنامه
      Flask را روی بستر ابری لیارا مستقر کنید. در هر گام، شما با یک ویژگی در
      لیارا آشنا می‌شوید و می‌توانید از آن‌ها در برنامه‌ی‌تان استفاده کنید.
    </p>
    <Link href="/app-deploy/flask/deploy">متوجه شدم، برو گام بعدی!</Link>
  </Layout>
);
