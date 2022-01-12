import Link from "next/link";
import Head from "next/head";
import Highlight from "react-highlight";
import Layout from "../../../components/Layout";
import ProjectIcon from "../../../components/ProjectIcon";
import ZoomableImage from "../../../components/ZoomableImage";

export default () => (
  <Layout>
    <Head>
      <title>مستندات لاگ‌ها در برنامه‌های Docker - سرویس ابری لیارا</title>
    </Head>

    <div className="page-head">
      <ProjectIcon platform="docker" />
      <div className="page-title">
        <h1>برنامه‌های Docker</h1>
        <span className="page-description">(Docker Apps)</span>
      </div>
    </div>

    <h3>مشاهده لاگ‌های برنامه</h3>
    <p>
      لاگ‌ها بخش مهمی را در هر برنامه‌ای به عهده دارند. لیارا این امکان را
      برای‌تان فراهم کرده‌است که بعد از مستقر کردن برنامه‌های‌تان بتوانید
      لاگ‌های آن‌ها را مشاهده و دنبال کنید.
    </p>

    <ZoomableImage src="/static/logs.png" alt="بخش لاگ‌ها" />

    <p>
      لیارا تنها لاگ‌هایی را می‌تواند نمایش دهد که بر روی stdout و یا stderr
      نوشته شوند. مثلا اگر در NodeJS با
      <span className="code">console.log('Hello World!')</span>
      یک لاگ ایجاد کنید، لیارا آن را نشان خواهد داد. اما اگر لاگ‌ها‌ی‌تان را
      داخل فایلی بریزید، از این بخش نمی‌توانید آن‌ها را مشاهده کنید و ممکن است
      بخواهید از بخش <a href="/apps/console">کنسول</a> استفاده کنید. که البته
      توصیه‌ی ما این است که از همان stdout و یا stderr استفاده کنید و لاگ‌های
      مهم‌تر را نیز علاوه بر کنسول در فایل نیز نگهداری کنید.
    </p>

    <Link href="/app-deploy/docker/liarajson">متوجه شدم، برو گام بعدی!</Link>
  </Layout>
);
