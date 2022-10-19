import Head from "next/head";
import Link from "next/link";
import Notice from "../../../components/Notice";
import Layout from "../../../components/Layout";
import PlatformIcon from "../../../components/PlatformIcon";

export default () => (
  <Layout>
    <Head>
      <title>
        مستندات استقرار برنامه‌های Laravel با استفاده از ابزار Liara Desktop -
        سرویس ابری لیارا
      </title>
    </Head>

    <div className="page-head">
      <PlatformIcon platform="laravel" />
      <div className="page-title">
        <h1>پلتفرم Laravel</h1>
        <span className="page-description">(Laravel Platform)</span>
      </div>
    </div>

    <h3>استقرار با Liara Desktop</h3>

    <p>
      در صورتی که تمایلی به خواندن آموزش متنی ندارید می‌توانید ویدیوی آموزشی زیر
      ‌را مشاهده کنید.
    </p>

    <video
      src="https://files.liara.ir/liara/laravel/laravel-desktop.mp4"
      controls="controls"
      className="block w-full"
      width="100%"
    ></video>

    <Link href="/app-deploy/laravel/cli">متوجه شدم، برو گام بعدی!</Link>
  </Layout>
);
