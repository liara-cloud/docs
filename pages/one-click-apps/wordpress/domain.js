import Layout from "../../../components/Layout";
import Link from "next/link";
import Head from "next/head";
import ZoomableImage from "../../../components/ZoomableImage";

export default () => (
  <Layout>
    <Head>
      <title>
        مستندات اتصال دامنه به برنامه‌های WordPress - سرویس ابری لیارا
      </title>
    </Head>

    <div className="page-head">
      <img
        className="page-icon"
        src="/static/platformicons/wordpress.svg"
        alt="wordpress"
      />
      <div className="page-title">
        <h1>برنامه‌های آماده WordPress</h1>
        <span className="page-description">(WordPress one-click app)</span>
      </div>
    </div>

    <h3>اتصال دامنه</h3>

    <p>
      لیارا یک زیردامنه‌ی رایگان با پشتیبانی از SSL به هر برنامه‌ی ایجاد شده
      اختصاص می‌دهد که شما می‌توانید این آدرس را در بخش اطلاعات کلی هر برنامه
      مشاهده کنید و به‌کمک این دامنه، تست و بررسی برنامه برای شما ساده‌تر خواهد
      شد. همچنین این امکان برای شما وجود خواهد داشت که آدرس برنامه را برای
      دوستان و کارفرمایان خود ارسال کنید.
    </p>
    <ZoomableImage src="/static/wordpress-default-domain.png" />
    <p>
      اما در مواردی که نیاز است دامنه‌ی اختصاصی خود را به برنامه متصل کنید باید
      طبق مستندات{" "}
      <Link href="/domains/management#add-domain">اضافه‌کردن دامنه‌</Link> عمل
      کرده و سپس در تنظیمات عمومی سیستم مدیریت محتوای WordPress مقادیر{" "}
      <b>نشانی وردپرس (URL)</b> و <b>نشانی سایت (URL)</b> را با آدرس دامنه‌ی
      اختصاصی خود جایگزین کنید.
    </p>
  </Layout>
);
