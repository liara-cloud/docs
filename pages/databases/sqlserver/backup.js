import Head from "next/head";
import Layout from "../../../components/Layout";
import PlatformIcon from "../../../components/PlatformIcon";
import ZoomableImage from "../../../components/ZoomableImage";

export default () => (
  <Layout>
    <Head>
      <title>
        مستندات تهیه فایل پشتیبان از دیتابیس‌های SQL Server - سرویس ابری لیارا
      </title>
    </Head>

    <div className="page-head">
      <PlatformIcon platform="mssql" />
      <div className="page-title">
        <h1>دیتابیس SQL Server</h1>
        <span className="page-description">(SQL Server Database)</span>
      </div>
    </div>

    <h3>SQL Server Backup</h3>
    <p>
      لیارا هر روز به صورت خودکار از دیتابیس‌های شما Backup یا همان فایل پشتیبان
      تهیه می‌کند. برای مشاهده این فایل‌ها کافیست به منوی <b>پشتیبان‌گیری</b> در
      صفحه دیتابیس موردنظرتان بروید:
    </p>
    <ZoomableImage
      src="/static/databases/mysql-liara-backup.png"
      alt="sql server backup page"
    />
  </Layout>
);
