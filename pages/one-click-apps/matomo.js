import Head from "next/head";
import Notice from "../../components/Notice";
import Layout from "../../components/Layout";
import PlatformIcon from "../../components/PlatformIcon";
import ZoomableImage from "../../components/ZoomableImage";

export default () => (
  <Layout>
    <Head>
      <title>مستندات Matomo - لیارا</title>
    </Head>

    <div className="page-head">
      <PlatformIcon platform="matomo" />
      <div className="page-title">
        <h1>نرم‌افزار آنالیز وب Matomo</h1>
        <span className="page-description">(Matomo one-click app)</span>
      </div>
    </div>

    <h3>درباره Matomo</h3>
    <p>
      <a href="https://matomo.org/" target="_blank" rel="noopener">
        Matomo
      </a>{" "}
      یک نرم‌افزار آنالیز وب مانند Google Analytics است که اطلاعات رفتار کاربران
      در وب‌سایت را ردیابی و تحلیل می‌کند و امکاناتی مانند حریم خصوصی بالا و
      گزارش‌های جامع را ارائه می‌دهد.
    </p>

    <h3>🚀 راه‌اندازی</h3>
    <p>
      در صورتی که تمایلی به خواندن آموزش متنی ندارید می‌توانید ویدیوی آموزشی زیر
      ‌را مشاهده کنید.
    </p>

    <ZoomableImage src="https://files.liara.ir/docs/matomo/create-matomo-one-click-app.gif"></ZoomableImage>

    <p>
      برای راه‌اندازی برنامه‌ی آماده Matomo باید در بخش{" "}
      <a href="https://console.liara.ir/apps" target="_blank">
        برنامه‌های
      </a>{" "}
      کنسول لیارا بر روی دکمه‌ی <strong>ایجاد برنامه</strong> کلیک کرده و در
      صفحه‌ی باز شده وارد بخش برنامه‌های آماده شوید. سپس برنامه‌ی Matomo را
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
