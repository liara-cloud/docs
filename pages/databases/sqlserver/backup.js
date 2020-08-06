import Layout from "../../../components/Layout";
import Head from "next/head";
import ZoomableImage from "../../../components/ZoomableImage";

export default () => (
  <Layout>
    <Head>
      <title>
        مستندات تهیه فایل پشتیبان از دیتابیس‌های SQL Server - سرویس ابری لیارا
      </title>
    </Head>

    <div className="page-head">
      <img
        className="page-icon"
        src="/static/platformicons/mssql.svg"
        alt="mssql"
      />
      <div className="page-title">
        <h1>دیتابیس SQL Server</h1>
        <span className="page-description">(SQL Server Database)</span>
      </div>
    </div>

    <h3>SQL Server Backup</h3>
    <p>
      به زودی این بخش تکمیل می‌شود. در حال حاضر اگر سوال یا مشکلی داشتید با
      پشتیبانی لیارا در میان بگذارید.
    </p>
  </Layout>
);
