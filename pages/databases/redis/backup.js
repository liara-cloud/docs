import Head from "next/head";
import Layout from "../../../components/Layout";
import PlatformIcon from "../../../components/PlatformIcon";
import ZoomableImage from "../../../components/ZoomableImage";
import Link from "next/link";

export default () => (
  <Layout>
    <Head>
      <title>مستندات تهیه فایل پشتیبان از دیتابیس‌های Redis - لیارا</title>
    </Head>

    <div className="page-head">
      <PlatformIcon platform="redis" />
      <div className="page-title">
        <h1>دیتابیس Redis</h1>
        <span className="page-description">(Redis key/value Database)</span>
      </div>
    </div>

    <h3>تهیه فایل پشتیبان</h3>

    <p>
      تهیه فایل پشتیبان از دیتابیس‌ها در لیارا به‌صورت روزانه و خودکار انجام
      می‌شود. همچنین شما می‌توانید از منوی <strong>پشتیبان‌گیری</strong> سرویس
      دیتابیس خود و با کلیک بر روی دکمه‌ی <strong>ایجاد فایل پشتیبان</strong>،{" "}
      به‌صورت دستی اقدام به تهیه فایل پشتیبان کنید.
    </p>
    <ZoomableImage
      src="https://files.liara.ir/docs/redis/backup.gif"
      alt="redis backup page"
    />

    <br />

    <Link href="/databases/redis/restore" className="next-page">
      متوجه شدم، برو گام بعدی!
    </Link>
  </Layout>
);
