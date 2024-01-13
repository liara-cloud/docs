import Head from "next/head";
import Layout from "../../../components/Layout";
import PlatformIcon from "../../../components/PlatformIcon";
import ZoomableImage from "../../../components/ZoomableImage";
import Link from "next/link";

export default () => (
  <Layout>
    <Head>
      <title>مستندات تهیه فایل پشتیبان از دیتابیس‌های SQL Server - لیارا</title>
    </Head>

    <div className="page-head">
      <PlatformIcon platform="mssql" />
      <div className="page-title">
        <h1>دیتابیس SQL Server</h1>
        <span className="page-description">(SQL Server Database)</span>
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
      src="https://files.liara.ir/docs/sql-server/mssql-backup.gif"
      alt="sql server backup page"
    />

    <br />

    <Link href="/databases/sqlserver/restore" className="next-page">
      متوجه شدم، برو گام بعدی!
    </Link>
  </Layout>
);
