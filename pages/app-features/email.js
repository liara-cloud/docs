import Layout from "../../components/Layout";
import Notice from "../../components/Notice";
import Head from "next/head";

export default () => (
  <Layout>
    <Head>
      <title>سرویس ابری لیارا | مستندات ایمیل</title>
    </Head>

    <h1>ایمیل</h1>
    <span className="page-description">(Email)</span>

    <Notice variant="info">
      به زودی این بخش تکمیل می‌شود. در حال حاضر اگر سوال یا مشکلی داشتید با
      پشتیبانی لیارا در میان بگذارید.
    </Notice>
  </Layout>
);
