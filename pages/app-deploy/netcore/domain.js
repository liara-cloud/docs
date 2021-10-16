import Layout from "../../../components/Layout";
import Link from "next/link";
import Head from "next/head";
import ZoomableImage from "../../../components/ZoomableImage";

export default () => (
  <Layout>
    <Head>
      <title>
        مستندات اتصال دامنه به برنامه‌های .Net Core - سرویس ابری لیارا
      </title>
    </Head>

    <div className="page-head">
      <img
        className="page-icon"
        src="/static/platformicons/netcore.svg"
        alt="netcore"
      />
      <div className="page-title">
        <h1>برنامه‌های ASP.Net Core</h1>
        <span className="page-description">(ASP.Net Core Apps)</span>
      </div>
    </div>

    <h3>اتصال دامنه به برنامه</h3>
    <p>
      لیارا یک زیردامنه‌ی رایگان با پشتیبانی از SSL به هر برنامه‌ی ایجاد شده اختصاص می‌دهد که شما می‌توانید این آدرس را در بخش اطلاعات کلی هر برنامه مشاهده کنید و به‌کمک این دامنه، تست و بررسی برنامه برای شما ساده‌تر خواهد شد. همچنین این امکان برای شما وجود خواهد داشت که آدرس برنامه را برای دوستان و کارفرمایان خود ارسال کنید.
    </p>
    <ZoomableImage
      src="/static/netcore-default-domain.png"
      alt="دامنه پیش‌فرض"
    />
    <p>
      اما برای اتصال دامنه‌ی اختصاصی به برنامه باید طبق مستندات <Link href="/domains/management#add-domain">اضافه‌کردن دامنه‌</Link> عمل کنید. البته پلتفرم Asp.Net Core نکات و توضیحات بیشتری دارد که در بخش بعدی یعنی <b>توضیحات و نکات تکمیلی</b> به آن‌ها پرداخته‌ایم.
    </p>

    <Link href="/app-deploy/netcore/email">متوجه شدم، برو گام بعدی!</Link>
  </Layout>
);
