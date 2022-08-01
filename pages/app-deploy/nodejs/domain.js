import Link from "next/link";
import Head from "next/head";
import Layout from "../../../components/Layout";
import Notice from "../../../components/Notice";
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

    <h2>اتصال دامنه به برنامه‌های NodeJS</h2>

    <h3>اضافه کردن دامنه</h3>
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

    <ZoomableImage src="" />

    <p>
      در این مرحله باید رکوردهای DNS درخواست شده را با استفاده از یک سرویس DNS
      مانند Cloudflare بر روی دامنه‌تان تنظیم کنید. درنهایت پس از ثبت رکوردهای
      DNS می‌توانید بر روی گزینه‌ی{" "}
      <strong>
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          style={{ display: "inline" }}
        >
          <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path>
        </svg>{" "}
        بررسی وضعیت رکوردها
      </strong>{" "}
      کلیک کنید و با تغییر تیک‌های قرمز رنگ به سبز، یعنی اتصال دامنه‌ی شما به
      لیارا با موفقیت صورت گرفته است.
    </p>

    <Notice variant="info">
      ۱. توجه داشته باشید که درصورت استفاده از CDN باید گواهی SSL را نیز از
      سرویس‌دهنده‌ی DNS فعلی‌تان تهیه کنید.
      <br />
      ۲. درصورت استفاده از CDN می‌توانید تیک قرمز رنگ و خطای تنظیم نشدن رکوردها
      را نادیده بگیرید.
    </Notice>

    <h3 id="www">ساخت زیردامنه‌ی www</h3>
    <h3 id="ssl">تهیه گواهی SSL</h3>

    <Link href="/app-deploy/nodejs/email">متوجه شدم، برو گام بعدی!</Link>
  </Layout>
);
