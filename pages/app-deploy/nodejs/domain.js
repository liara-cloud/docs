import Link from "next/link";
import Head from "next/head";
import Layout from "../../../components/Layout";
import PlatformIcon from "../../../components/PlatformIcon";
import ZoomableImage from "../../../components/ZoomableImage";

export default () => (
  <Layout>
    <Head>
      <title>مستندات اتصال دامنه به برنامه‌های NodeJS - سرویس ابری لیارا</title>
    </Head>

    <div className="page-head">
      <PlatformIcon platform="nodejs" />
      <div className="page-title">
        <h1>برنامه‌های NodeJS</h1>
        <span className="page-description">(NodeJS Apps)</span>
      </div>
    </div>

    <h3>اتصال دامنه به برنامه</h3>
    <p>
      برای اتصال دامنه به برنامه‌های NodeJS در لیارا باید وارد برنامه‌ی مورد
      نظرتان شوید و از منوی سمت راست، روی گزینه‌ی <strong>دامنه‌ها</strong> کلیک
      کنید. سپس روی گزینه‌ی{" "}
      <strong>
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          style={{ display: "inline" }}
        >
          <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"></path>
        </svg>
        افزودن دامنه
      </strong>{" "}
      کلیک کرده و نام دامنه‌تان (مثلا example.com) را وارد کنید. درنهایت با کلیک
      روی گزینه‌ی <strong>ایجاد دامنه</strong>، دامنه شما در لیارا اضافه می‌شود
      و همچنین به صفحه‌ی <strong>مدیریت دامنه</strong> هدایت می‌شوید.
    </p>
    <Link href="/app-deploy/nodejs/email">متوجه شدم، برو گام بعدی!</Link>
  </Layout>
);
