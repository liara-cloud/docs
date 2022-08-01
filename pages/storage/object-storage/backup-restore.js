import Layout from "../../../components/Layout";
import Head from "next/head";
import Notice from "../../../components/Notice";
import ZoomableImage from "../../../components/ZoomableImage";
import Link from "next/link";

export default () => (
  <Layout>
    <Head>
      <title>
        مستندات تهیه فایل پشتیبان از آبجکت استوریج - سرویس ابری لیارا
      </title>
    </Head>

    <h1>آبجکت استوریج</h1>
    <span className="page-description">(Object Storage)</span>

    <Notice variant="danger">
      از این پس سرویس فایل در لیارا ارائه نمی‌شود و می‌توانید به‌عنوان جایگزین
      از <Link href="/buckets/about">فضای ذخیره‌سازی ابری</Link> استفاده کنید.
    </Notice>

    <h3>Backup</h3>
    <p>
      لیارا به صورت خودکار و هر هفته از داده‌های شما فایل پشتیبان تهیه می‌کند تا
      در صورت بروز مشکل یا خرابی اطلاعات بتوانید با آن‌ها اطلاعات خود را بازیابی
      کنید. برای دریافت فایل‌های پشتیبان کافیست تیکت بزنید.
    </p>
  </Layout>
);
