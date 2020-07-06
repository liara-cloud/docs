import Layout from "../../../components/Layout";
import Link from "next/link";
import Head from "next/head";
import ZoomableImage from "../../../components/ZoomableImage";

export default () => (
  <Layout>
    <Head>
      <title>ReactJS سرویس ابری لیارا | مستندات استقرار برنامه‌های</title>
    </Head>

    <div className="page-head">
      <img className="page-icon" src="/static/platformicons/react.svg" alt="react"/>
      <div className="page-title">
        <h1>برنامه‌های ReactJS</h1>
        <span className="page-description">(ReactJS Apps)</span>
      </div>
    </div>

    <h3>مشاهده لاگ‌های برنامه</h3>
    <p>
      لاگ بخش مهمی از هر برنامه است و به برنامه‌نویسان کمک می‌کند
      تا بتوانند راحت‌تر از اتفاقات رخ‌ داده در برنامه‌ی‌شان آگاه شوند. به صورت
      خلاصه شما می‌توانید لاگ‌های برنامه‌ی‌تان را در بخش لاگ‌های پنل لیارا مشاهده
      کنید:
    </p>

    <ZoomableImage src="/static/react-logs.png" />
    <br />

    <Link href="/app-deploy/react/liarajson">متوجه شدم، برو گام بعدی!</Link>
  </Layout>
);
