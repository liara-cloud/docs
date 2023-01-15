import Head from "next/head";
import Notice from "../../components/Notice";
import Layout from "../../components/Layout";
import PlatformIcon from "../../components/PlatformIcon";
import ZoomableImage from "../../components/ZoomableImage";

export default () => (
  <Layout>
    <Head>
      <title>استقرار Prestashop - لیارا</title>
    </Head>

    <div className="page-head">
      <PlatformIcon platform="prestashop" />
      <div className="page-title">
        <h1>مستندات نصب و راه‌اندازی Prestashop</h1>
        <span className="page-description">(Prestashop one-click app)</span>
      </div>
    </div>

    <p>
      <a href="https://www.prestashop.com/" target="_blank" rel="noopener">
        Prestashop
      </a>{" "}
      یک سامانه فروشگاه ساز اینترنتی است که به صورت رایگان در دسترس قرار گرفته
      است. این سیستم با برنامه نویسی PHP و دیتابیس MySQL طراحی و برنامه‌نویسی
      شده است که با نصب آن می‌توانید فروشگاه خود را در زمانی کوتاه ایجاد کنید.
    </p>

    <h3>🚀 راه‌اندازی</h3>

    <p>
      در صورتی که تمایلی به خواندن آموزش متنی ندارید می‌توانید ویدیوی آموزشی زیر
      ‌را مشاهده کنید.
    </p>

    <ZoomableImage src="https://files.liara.ir/docs/prestashop/create-prestashop-one-click-app.gif"></ZoomableImage>

    <p>
      برای راه‌اندازی برنامه‌ی آماده Prestashop باید در بخش{" "}
      <a href="https://console.liara.ir/apps" target="_blank">
        برنامه‌های
      </a>{" "}
      کنسول لیارا بر روی دکمه‌ی <strong>ایجاد برنامه</strong> کلیک کرده و در
      صفحه‌ی باز شده وارد بخش برنامه‌های آماده شوید. سپس برنامه‌ی Prestashop را
      انتخاب و یک شناسه‌ی یکتا برای برنامه‌ی خود درنظر بگیرید، همچنین پلن مورد
      نظر خود را انتخاب کنید و در آخر بر روی دکمه‌ی{" "}
      <strong>ایجاد برنامه</strong> کلیک کنید.
    </p>

    <Notice variant="warning">
      توجه داشته باشید که راه‌اندازی این سرویس زمان‌بر است و شما می‌توانید مراحل
      پیشرفت نصب را از صفحه‌ی لاگ‌ها دنبال کنید.
    </Notice>

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
