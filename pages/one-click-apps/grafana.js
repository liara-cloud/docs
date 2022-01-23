import Head from "next/head";
import Notice from "../../components/Notice";
import Layout from "../../components/Layout";
import PlatformIcon from "../../components/PlatformIcon";
import ZoomableImage from "../../components/ZoomableImage";

export default () => (
  <Layout>
    <Head>
      <title>مستندات نصب و راه‌اندازی Grafana - سرویس ابری لیارا</title>
    </Head>

    <div className="page-head">
      <PlatformIcon platform="grafana" />
      <div className="page-title">
        <h1>پلتفرم Grafana</h1>
        <span className="page-description">(Grafana one-click app)</span>
      </div>
    </div>

    <p>
      <a href="https://grafana.com/" target="_blank" rel="noopener">
        Grafana
      </a>{" "}
      پلتفرمی بسیار محبوب و ساده برای تحلیل و نمایش داده‌های به دست آمده از
      پایگاه‌های داده خصوصا دیتابیس‌های سری زمانی (Time-series Databases) است.
      گرافانا از دیتابیس‌های مختلفی از جمله InfluxDB و Prometheus پشتیبانی
      می‌کند.
    </p>

    <h3>🚀 راه‌اندازی</h3>

    <p>
      در صورتی که تمایلی به خواندن آموزش متنی ندارید می‌توانید ویدیوی آموزشی زیر
      ‌را مشاهده کنید.
    </p>

    <ZoomableImage src="https://files.liara.ir/docs/grafana/create-grafana-one-click-app.gif"></ZoomableImage>

    <p>
      برای راه‌اندازی برنامه‌ی آماده Grafana باید در بخش{" "}
      <a href="https://console.liara.ir/apps" target="_blank">
        برنامه‌های
      </a>{" "}
      کنسول لیارا بر روی دکمه‌ی <strong>ایجاد برنامه</strong> کلیک کرده و در
      صفحه‌ی باز شده وارد بخش برنامه‌های آماده شوید. سپس برنامه‌ی Grafana را
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
