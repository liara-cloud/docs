import Head from "next/head";
import Layout from "../../../components/Layout";
import PlatformIcon from "../../../components/PlatformIcon";
import ZoomableImage from "../../../components/ZoomableImage";

export default () => (
  <Layout>
    <Head>
      <title>
        مستندات تهیه فایل پشتیبان از دیتابیس‌های MariaDB - سرویس ابری لیارا
      </title>
    </Head>

    <div className="page-head">
      <PlatformIcon platform="mariadb" />
      <div className="page-title">
        <h1>دیتابیس MariaDB</h1>
        <span className="page-description">(MariaDB Database)</span>
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
      src="/static/databases/mysql-liara-backup.png"
      alt="mysql backup page"
    />
  </Layout>
);
