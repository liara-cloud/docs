import Head from "next/head";
import Link from "next/link";
import Notice from "../../components/Notice";
import Layout from "../../components/Layout";
import PlatformIcon from "../../components/PlatformIcon";
import ZoomableImage from "../../components/ZoomableImage";

export default () => (
  <Layout>
    <Head>
      <title>راه‌اندازی برنامه وردپرس در ساب‌دایرکتوی - سرویس ابری لیارا</title>
    </Head>

    <div className="page-head">
      <PlatformIcon platform="wordpress" />
      <div className="page-title">
        <h1>وردپرس پلاس</h1>
        <span className="page-description">(WordPress plus)</span>
      </div>
    </div>

    <h2>راه‌اندازی برنامه وردپرس در ساب‌دایرکتوی</h2>

    <h4>فهرست عناوین:</h4>
    <ul className="mt-0">
      <li>
        <a href="#nginx">راه‌اندازی و پیکربندی Nginx</a>
      </li>
    </ul>

    <h3 id="nginx">راه‌اندازی و پیکربندی Nginx</h3>
    <p></p>
  </Layout>
);
