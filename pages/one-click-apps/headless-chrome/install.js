import Head from "next/head";
import Layout from "../../../components/Layout";
import PlatformIcon from "../../../components/PlatformIcon";
import ZoomableImage from "../../../components/ZoomableImage";
import Link from "next/link";

export default () => (
  <Layout>
    <Head>
      <title>مستندات راه‌اندازی Headless Chrome - لیارا</title>
    </Head>
    <div className="page-head">
      <PlatformIcon platform="chrome" />
      <div className="page-title">
        <h1>راه‌اندازی برنامه Headless Chrome</h1>
        <span className="page-description">
          (Headless Chrome one-click app)
        </span>
      </div>
    </div>
    <h3>🚀 راه‌اندازی</h3>
    <p>
      برای راه‌اندازی برنامه‌ی Headless Chrome باید در بخش برنامه‌های کنسول
      لیارا بر روی دکمه‌ی <b>ایجاد برنامه</b> کلیک کرده و در صفحه‌ی باز شده وارد
      بخش برنامه‌های آماده شوید. سپس برنامه‌ی <b>Chrome</b> را انتخاب و یک
      شناسه‌ی یکتا برای برنامه‌ی خود درنظر بگیرید، همچنین پلن مورد نظر خود را
      انتخاب کنید و در آخر بر روی دکمه‌ی <b>ایجاد برنامه</b> کلیک کنید.
    </p>

    <Link
      href="/one-click-apps/headless-chrome/puppeteer/"
      className="next-page"
    >
      متوجه شدم، برو گام بعدی!
    </Link>
  </Layout>
);
