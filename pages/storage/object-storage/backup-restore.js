import Layout from "../../../components/Layout";
import Head from "next/head";
import Notice from "../../../components/Notice";
import ZoomableImage from "../../../components/ZoomableImage";

export default () => (
  <Layout>
    <Head>
      <title>سرویس ابری لیارا | مستندات آبجکت‌استوریج</title>
    </Head>

    <h1>آبجکت استوریج</h1>
    <span className="pageDescription">(Object Storage)</span>

    <h3>Backup</h3>
    <p>
      لیارا به صورت خودکار و هر هفته از داده‌های شما فایل پشتیبان تهیه میکند تا
      در صورت بروز مشکل یا خرابی اطلاعات بتوانید با آن‌ها اطلاعات خود را بازیابی
      کنید. برای دریافت فایل‌های پشتیبان کافیست تیکت بزنید.
    </p>
  </Layout>
);
