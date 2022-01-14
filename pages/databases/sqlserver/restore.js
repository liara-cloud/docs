import Head from "next/head";
import Layout from "../../../components/Layout";
import DatabaseIcon from "../../../components/DatabaseIcon";

export default () => (
  <Layout>
    <Head>
      <title>
        مستندات بازگردانی فایل پشتیبان در دیتابیس‌های SQL Server - سرویس ابری
        لیارا
      </title>
    </Head>

    <div className="page-head">
      <DatabaseIcon database="mssql" />
      <div className="page-title">
        <h1>دیتابیس SQL Server</h1>
        <span className="page-description">(SQL Server Database)</span>
      </div>
    </div>

    <h3>SQL Server Restore</h3>
    <p>
      به زودی این بخش تکمیل می‌شود. در حال حاضر اگر سوال یا مشکلی داشتید، از
      طریق تیکت به پشتیبانی لیارا اطلاع دهید.
    </p>
  </Layout>
);
