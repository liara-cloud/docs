import Layout from "../../../components/Layout";
import Link from "next/link";
import Head from "next/head";
import Notice from "../../../components/Notice";
import ZoomableImage from "../../../components/ZoomableImage";
import Highlight from "react-highlight";

export default () => (
  <Layout>
    <Head>
      <title>مستندات اتصال دامنه به برنامه‌های PHP - سرویس ابری لیارا</title>
    </Head>

    <div className="page-head">
      <img
        className="page-icon"
        src="/static/platformicons/php.svg"
        alt="php"
      />
      <div className="page-title">
        <h1>برنامه‌های PHP</h1>
        <span className="page-description">(PHP Apps)</span>
      </div>
    </div>

    <h3>اتصال دامنه به برنامه</h3>
    <p>
      لیارا یک زیردامنه‌ی رایگان با پشتیبانی از SSL به هر برنامه‌ی ایجاد شده اختصاص می‌دهد که شما می‌توانید این آدرس را در بخش اطلاعات کلی هر برنامه مشاهده کنید و به‌کمک این دامنه، تست و بررسی برنامه برای شما ساده‌تر خواهد شد. همچنین این امکان برای شما وجود خواهد داشت که آدرس برنامه را برای دوستان و کارفرمایان خود ارسال کنید.
    </p>
    <ZoomableImage src="/static/php-defualt-domain.png" />
    <p>
      اما برای اتصال دامنه‌ی اختصاصی به برنامه باید طبق مستندات <Link href="/domains/management#add-domain">اضافه‌کردن دامنه‌</Link> عمل کنید. البته پلتفرم PHP نکات و توضیحات بیشتری دارد که در بخش بعدی یعنی <b>توضیحات و نکات تکمیلی</b> به آن‌ها پرداخته‌ایم.
    </p>

    <Link href="/app-deploy/php/email">متوجه شدم، برو گام بعدی!</Link>
  </Layout>
);
