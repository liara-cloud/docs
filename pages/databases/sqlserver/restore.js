import Head from "next/head";
import Layout from "../../../components/Layout";
import Notice from "../../../components/Notice";

export default () => (
  <Layout>
    <Head>
      <title>
        مستندات بازگردانی فایل پشتیبان در دیتابیس‌های SQL Server - سرویس ابری
        لیارا
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

    <h3>SQL Server Restore</h3>
    <p>
      به زودی این بخش تکمیل می‌شود. در حال حاضر اگر سوال یا مشکلی داشتید با
      پشتیبانی لیارا در میان بگذارید.
    </p>
  </Layout>
);
