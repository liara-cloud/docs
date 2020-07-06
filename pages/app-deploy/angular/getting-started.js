import Layout from "../../../components/Layout";
import Head from "next/head";
import Link from "next/link";

export default () => (
  <Layout>
    <Head>
      <title>Angular سرویس ابری لیارا | مستندات استقرار برنامه‌های</title>
    </Head>

    <div className="page-head">
      <img className="page-icon" src="/static/platformicons/angularjs.svg" alt="angular"/>
      <div className="page-title">
        <h1>برنامه‌های Angular</h1>
        <span className="page-description">(Angular Apps)</span>
      </div>
    </div>

    <h3>🚀 شروع به کار</h3>
    <video
      width="730"
      src="https://files.liara.ir/liara/react.mp4"
      controls="controls"
      className="block w-full"
    ></video>
    <p>
      در این بخش به شما کمک می‌کنیم که بتوانید در سریع‌ترین زمان ممکن، یک برنامه
      Angular را روی بستر ابری لیارا مستقر کنید. در هر گام، شما با یک ویژگی در
      لیارا آشنا می‌شوید و می‌توانید از آن‌ها در برنامه‌ی‌تان استفاده کنید.
    </p>

    <p>
      شما می‌توانید برنامه‌هایی که با <span className="code">angular cli</span>
      ساخته‌شده‌اند را روی لیارا مستقر کنید.
    </p>

    <Link href="/app-deploy/angular/deploy">متوجه شدم، برو گام بعدی!</Link>
  </Layout>
);
