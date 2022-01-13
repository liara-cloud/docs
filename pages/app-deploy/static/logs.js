import Link from "next/link";
import Head from "next/head";
import Layout from "../../../components/Layout";
import PlatformIcon from "../../../components/PlatformIcon";
import ZoomableImage from "../../../components/ZoomableImage";

export default () => (
  <Layout>
    <Head>
      <title>مستندات لاگ‌ها در برنامه‌های Static - سرویس ابری لیارا</title>
    </Head>

    <div className="page-head">
      <PlatformIcon platform="HTML5" />
      <div className="page-title">
        <h1>برنامه‌های Static</h1>
        <span className="page-description">(Static Apps)</span>
      </div>
    </div>

    <h3>مشاهده لاگ‌های برنامه</h3>
    <p>
      لاگ بخش مهمی از هر برنامه است و به برنامه‌نویسان کمک می‌کند تا بتوانند
      راحت‌تر از اتفاقات رخ‌ داده در برنامه‌ی‌شان آگاه شوند. به صورت خلاصه شما
      می‌توانید لاگ‌های برنامه‌ی‌تان را در بخش لاگ‌های پنل لیارا مشاهده کنید:
    </p>

    <ZoomableImage src="/static/static-logs.png" />
    <br />

    <Link href="/app-deploy/static/liarajson">متوجه شدم، برو گام بعدی!</Link>
  </Layout>
);
