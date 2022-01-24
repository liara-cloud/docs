import Head from "next/head";
import Notice from "../../components/Notice";
import Layout from "../../components/Layout";
import PlatformIcon from "../../components/PlatformIcon";
import ZoomableImage from "../../components/ZoomableImage";

export default () => (
  <Layout>
    <Head>
      <title>مستندات نصب و راه‌اندازی Parse - سرویس ابری لیارا</title>
    </Head>
    <div className="page-head">
      <PlatformIcon platform="parseserver" />
      <div className="page-title">
        <h1>پلتفرم Parse</h1>
        <span className="page-description">(Parse one-click app)</span>
      </div>
    </div>

    <p>
      <a href="https://parseplatform.org/" target="_blank" rel="noopener">
        Parse
      </a>{" "}
      یک فریم‌ورک متن‌باز BaaS است که در ابتدا توسط فیس‌بوک توسعه داده شد اما در
      حال حاضر توسط یک جامعه کاربری فعال توسعه داده می‌شود. به‌کمک این پلتفرم
      می‌توانید برنامه‌های خود را سریع‌تر از گذشته توسعه دهید زیرا بسیاری از
      قابلیت‌های مورد نیاز را در اختیار شما قرار می‌دهد.
    </p>
    <h3>🚀 راه‌اندازی</h3>

    <p>
      در صورتی که تمایلی به خواندن آموزش متنی ندارید می‌توانید ویدیوی آموزشی زیر
      ‌را مشاهده کنید.
    </p>

    <ZoomableImage src="https://files.liara.ir/docs/parse/create-parse-one-click-app.gif"></ZoomableImage>

    <p>
      برای راه‌اندازی برنامه‌ی آماده Parse باید در بخش{" "}
      <a href="https://console.liara.ir/apps" target="_blank">
        برنامه‌های
      </a>{" "}
      کنسول لیارا بر روی دکمه‌ی <strong>ایجاد برنامه</strong> کلیک کرده و در
      صفحه‌ی باز شده وارد بخش برنامه‌های آماده شوید. سپس برنامه‌ی Parse را
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
