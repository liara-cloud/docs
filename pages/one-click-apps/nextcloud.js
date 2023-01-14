import Head from "next/head";
import Notice from "../../components/Notice";
import Layout from "../../components/Layout";
import PlatformIcon from "../../components/PlatformIcon";
import ZoomableImage from "../../components/ZoomableImage";

export default () => (
  <Layout>
    <Head>
      <title>مستندات NextCloud - لیارا</title>
    </Head>

    <div className="page-head">
      <PlatformIcon platform="nextcloud" />
      <div className="page-title">
        <h1>فضای ذخیره‌سازی Nextcloud</h1>
        <span className="page-description">(Nextcloud one-click app)</span>
      </div>
    </div>

    <h3>درباره Nextcloud</h3>
    <p>
      Nextcloud ابزاری متن باز است که با استفاده از آن می‌توانید یک فضای
      ذخیره‌سازی ابری مانند Google Drive و Dropbox را راه‌اندازی و مدیریت کنید.
      برای کسب اطلاعات بیشتری می‌توانید به وبسایت{" "}
      <a href="https://nextcloud.com/" target="_blank">
        nextcloud.com
      </a>{" "}
      مراجعه کنید.
    </p>

    <h3>نصب و اجرا</h3>
    <p>
      برای راه‌اندازی فضای ابری Nextcloud کافیست این برنامه را از بخش برنامه‌های
      آماده انتخاب کرده و شناسه مورد نظرتان را وارد کنید. درنهایت زمانیکه بر روی
      دکمه‌ی <b>ایجاد برنامه</b> کلیک کردید، لیارا به‌طور خودکار یک دیتابیس
      MySQL راه‌اندازی و برنامه‌ی شما را به آن متصل می‌کند بنابراین نیازی نیست
      که شما درگیر نصب و پیکربندی دیتابیس شوید.
    </p>
    <ZoomableImage src="https://files.liara.ir/docs/nextcloud/create-next-cloud-one-click-app.gif" />

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
