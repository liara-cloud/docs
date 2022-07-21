import Layout from "../../../components/Layout";
import Head from "next/head";

export default () => (
  <Layout>
    <Head>
      <title>مدیریت فضای ذخیره‌سازی ابری - سرویس ابری لیارا</title>
    </Head>

    <h1>فضای ذخیره‌سازی ابری</h1>

    <h2>مدیریت فضای ذخیره‌سازی ابری با استفاده از رابط کاربری</h2>

    <h4>فهرست عناوین:</h4>
    <ul className="mt-0">
      <li>
        <a href="#create-bucket">ایجاد باکت</a>
      </li>
      <li>
        <a href="upload">آپلود فایل</a>
      </li>
      <li>
        <a href="#download">دانلود فایل</a>
      </li>
      <li>
        <a href="#delete">حذف فایل</a>
      </li>
      <li>
        <a href="#view">مشاهده فایل</a>
      </li>
      <li>
        <a href="#share">اشتراک‌گذاری فایل</a>
      </li>
    </ul>
  </Layout>
);
