import Link from "next/link";
import Head from "next/head";
import Layout from "../../../components/Layout";
import ProjectIcon from "../../../components/ProjectIcon";
import ZoomableImage from "../../../components/ZoomableImage";

export default () => (
  <Layout>
    <Head>
      <title>مستندات لاگ‌ها در برنامه‌های Angular - سرویس ابری لیارا</title>
    </Head>

    <div className="page-head">
      <ProjectIcon platform="angularjs" />
      <div className="page-title">
        <h1>برنامه‌های Angular</h1>
        <span className="page-description">(Angular Apps)</span>
      </div>
    </div>

    <h3>مشاهده لاگ‌های برنامه</h3>
    <p>
      لاگ بخش مهمی از هر برنامه است و به برنامه‌نویسان کمک می‌کند تا بتوانند
      راحت‌تر از اتفاقات رخ‌ داده در برنامه‌ی‌شان آگاه شوند. به صورت خلاصه شما
      می‌توانید لاگ‌های برنامه‌ی‌تان را در بخش لاگ‌های پنل لیارا مشاهده کنید:
    </p>

    <ZoomableImage src="/static/angular-logs.png" />
    <br />

    <Link href="/app-deploy/angular/liarajson">متوجه شدم، برو گام بعدی!</Link>
  </Layout>
);
