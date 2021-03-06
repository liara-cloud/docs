import Layout from "../../../components/Layout";
import Link from "next/link";
import Head from "next/head";
import Notice from "../../../components/Notice";
import ZoomableImage from "../../../components/ZoomableImage";
import Highlight from "react-highlight";

export default () => (
  <Layout>
    <Head>
      <title>مستندات اتصال دامنه به برنامه‌های NodeJS - سرویس ابری لیارا</title>
    </Head>

    <div className="page-head">
      <img
        className="page-icon"
        src="/static/platformicons/nodejs.svg"
        alt="nodejs"
      />
      <div className="page-title">
        <h1>برنامه‌های NodeJS</h1>
        <span className="page-description">(NodeJS Apps)</span>
      </div>
    </div>

    <h3>اتصال دامنه به برنامه</h3>
    <p>
      لیارا به صورت رایگان یک زیردامنه به همراه https برای شما ایجاد کرده است که
      از طریق بخش برنامه‌ها می‌توانید لینک آن ‌را مشاهده کنید. این دامنه برای
      تست و بررسی برنامه و نشان دادن برنامه به دیگران و کارفرمایان کار را
      راحت‌تر کرده است.
    </p>
    <ZoomableImage src="/static/nodejs-default-domain.png" />
    <p>
      اما در اکثر موارد نیاز دارید که دامنه اختصاصی خود را به برنامه متصل کنید.
      برای اتصال یک دامنه به لیارا نیازمند پیکربندی DNS های دامنه به سمت زیرساخت
      لیارا هستید. به ‌همین خاطر در صورتی که قصد اضافه کردن دامنه اختصاصی دارید،
      کافیست مستندات{" "}
      <a href="/domains/management" target="_blank">
        دامنه‌ها
      </a>{" "}
      را مطالعه کنید. البته توصیه ما این‌است که تمام بخش‌های برنامه خود را با
      موفقیت روی لیارا مستقر کنید و سپس به کار‌های مربوط به اتصال دامنه
      بپردازید.
    </p>
    <p>
      شما باید تا الان توانسته باشید برنامه‌ی‌تان را با موفقیت در لیارا مستقر
      کرده باشید. اما پلتفرم NodeJS نکات و توضیحات بیشتری نیز دارد که در بخش
      بعدی یعنی <b>توضیحات و نکات تکمیلی</b> به آن‌ها پرداخته‌ایم.
    </p>

    <Link href="/app-deploy/nodejs/tips">متوجه شدم، برو گام بعدی!</Link>
  </Layout>
);
