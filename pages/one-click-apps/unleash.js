import Head from "next/head";
import Notice from "../../components/Notice";
import Layout from "../../components/Layout";
import PlatformIcon from "../../components/PlatformIcon";
import ZoomableImage from "../../components/ZoomableImage";

export default () => (
  <Layout>
    <Head>
      <title>مستندات Unleash - لیارا</title>
    </Head>

    <div className="page-head">
      <PlatformIcon platform="unleash" />
      <div className="page-title">
        <h1>مدیریت ویژگی Unleash</h1>
        <span className="page-description">(Unleash one-click app)</span>
      </div>
    </div>

    <h3>درباره Unleash</h3>
    <p>
      <a href="https://www.getunleash.io/" target="_blank" rel="noopener">
        Unleash
      </a>{" "}
      یک راه حل مدیریت ویژگی متن باز است که به بهبود فرایند کاری تیم توسعه شما
      کمک می‌کند و منجر به تحویل سریع‌تر نرم‌افزار می‌شود.
    </p>

    <h3>🚀 راه‌اندازی</h3>
    <p>
      در صورتی که تمایلی به خواندن آموزش متنی ندارید می‌توانید ویدیوی آموزشی زیر
      ‌را مشاهده کنید.
    </p>

    <ZoomableImage src="https://files.liara.ir/docs/unleash/create.gif"></ZoomableImage>

    <p>
      برای راه‌اندازی برنامه‌ی آماده Unleash باید در بخش{" "}
      <a href="https://console.liara.ir/apps" target="_blank">
        برنامه‌های
      </a>{" "}
      کنسول لیارا بر روی دکمه‌ی <strong>ایجاد برنامه</strong> کلیک کرده و در
      صفحه‌ی باز شده وارد بخش برنامه‌های آماده شوید. سپس برنامه‌ی Unleash را
      انتخاب و یک شناسه‌ی یکتا برای برنامه‌ی خود درنظر بگیرید، همچنین پلن مورد
      نظر خود را انتخاب کنید و در آخر بر روی دکمه‌ی{" "}
      <strong>ایجاد برنامه</strong> کلیک کنید.
    </p>

    <Notice variant="info">
      برای اتصال دامنه‌ی اختصاصی به این برنامه کافیست به{" "}
      <a href="/domains/management" target="_blank">
        مستندات دامنه‌ها
      </a>{" "}
      مراجعه کرده و طبق مستندات، دامنه‌ اختصاصی مورد نظرتان را به برنامه متصل
      کنید.
    </Notice>
  </Layout>
);
