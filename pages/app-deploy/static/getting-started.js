import Layout from "../../../components/Layout";
import Head from "next/head";
import Link from "next/link";

export default () => (
  <Layout>
    <Head>
      <title>مستندات شروع به کار برنامه‌های Static - سرویس ابری لیارا</title>
    </Head>

    <div className="page-head">
      <img
        className="page-icon"
        src="/static/platformicons/HTML5.svg"
        alt="HTML5"
      />
      <div className="page-title">
        <h1>برنامه‌های Static</h1>
        <span className="page-description">(Static Apps)</span>
      </div>
    </div>

    <h3>🚀 شروع به کار</h3>

    <p>
      در صورتی که تمایلی به خواندن آموزش متنی ندارید می‌توانید ویدیوی آموزشی زیر
      ‌را مشاهده کنید.
    </p>
    <video
      src="https://files.liara.ir/liara/static.mp4"
      controls="controls"
      className="block w-full"
      width="100%"
    ></video>
    <p>
      در این بخش به شما کمک می‌کنیم که بتوانید در سریع‌ترین زمان ممکن، یک برنامه
      Static را روی بستر ابری لیارا مستقر کنید. برنامه‌های Static در حقیت شامل
      برنامه‌هایی می‌شوند که با HTML/CSS/JS ساخته شده‌اند یا نسخه‌ای Build شده
      از فریم‌ورک‌های JS مثل React یا Vue هستند. در هر گام، شما با یک ویژگی در
      لیارا آشنا می‌شوید و می‌توانید از آن‌ها در برنامه‌ی‌تان استفاده کنید.
    </p>

    <Link href="/app-deploy/static/deploy">متوجه شدم، برو گام بعدی!</Link>
  </Layout>
);
