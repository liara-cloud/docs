import Layout from "../../components/Layout";
import Head from "next/head";

export default () => (
  <Layout>
    <Head>
      <title>مدیریت فضای ذخیره‌سازی ابری - سرویس ابری لیارا</title>
    </Head>

    <h1>فضای ذخیره‌سازی ابری</h1>

    <h2>توضیحات و نکات تکمیلی</h2>

    <h4>فهرست عناوین:</h4>
    <ul className="mt-0">
      <li>
        <a href="#metrics">گزارشات</a>
      </li>
      <li>
        <a href="#resize">تغییر اندازه</a>
      </li>
      <li>
        <a href="#search">نحوه‌ی جستجو فایل</a>
      </li>
      <li>
        <a href="#file-addresses">نحوه‌ی آدرس‌دهی فایل‌ها</a>
      </li>
      <li>
        <a href="#access-policy">تغییر سطح دسترسی باکت</a>
      </li>
    </ul>
  </Layout>
);
