import Head from "next/head";
import Layout from "../../../components/Layout";
import PlatformIcon from "../../../components/PlatformIcon";
import ZoomableImage from "../../../components/ZoomableImage";

export default () => (
  <Layout>
    <Head>
      <title>مستندات راه‌اندازی Soketi - سرویس ابری لیارا</title>
    </Head>
    <div className="page-head">
      <PlatformIcon platform="soketi" />
      <div className="page-title">
        <h1>برنامه‌های آماده Soketi</h1>
        <span className="page-description">(Soketi one-click app)</span>
      </div>
    </div>

    <h3>🚀 راه‌اندازی</h3>

    <p>
      <a href="https://docs.soketi.app/" target="_blank" rel="noopener">
        Soketi
      </a>{" "}
      یک جایگزین رایگان و متن‌باز برای سرویس Pusher است که کاملا با پروتکل{" "}
      <a
        href="https://pusher.com/docs/channels/library_auth_reference/pusher-websockets-protocol/#version-7-2017-11"
        target="_blank"
      >
        Pusher v7
      </a>{" "}
      سازگار شده و به شما در توسعه‌ی برنامه‌های Real-time کمک می‌کند.
    </p>

    <ZoomableImage src="https://files.liara.ir/docs/pusher/create-new-pusher-one-click-app.gif"></ZoomableImage>
    <p>
      برای راه‌اندازی برنامه‌ی Soketi باید در بخش برنامه‌های کنسول لیارا بر روی
      دکمه‌ی <b>ایجاد برنامه</b> کلیک کرده و در صفحه‌ی باز شده وارد بخش
      برنامه‌های آماده شوید. سپس برنامه‌ی <b>Soketi</b> را انتخاب و یک شناسه‌ی
      یکتا برای برنامه‌ی خود درنظر بگیرید، همچنین پلن مورد نظر خود را انتخاب
      کنید و در آخر بر روی دکمه‌ی <b>ایجاد برنامه</b> کلیک کنید.
    </p>
  </Layout>
);
