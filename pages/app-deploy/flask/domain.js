import Layout from "../../../components/Layout";
import Link from "next/link";
import Head from "next/head";
import ZoomableImage from "../../../components/ZoomableImage";

export default () => (
  <Layout>
    <Head>
      <title>مستندات اتصال دامنه به برنامه‌های Flask - سرویس ابری لیارا</title>
    </Head>

    <div className="page-head">
      <img
        className="page-icon"
        src="/static/platformicons/flask.svg"
        alt="flask"
      />
      <div className="page-title">
        <h1>برنامه‌های Flask</h1>
        <span className="page-description">(Flask Apps)</span>
      </div>
    </div>

    <h3>اتصال دامنه به برنامه</h3>
    <p>
      لیارا به صورت رایگان یک زیردامنه به همراه https برای شما ایجاد کرده است که
      از طریق بخش برنامه‌ها می‌توانید لینک آن‌را مشاهده کنید. این دامنه برای تست
      و بررسی برنامه و نشان دادن برنامه به دیگران و کارفرمایان کار را راحت‌تر
      کرده است.
    </p>
    <ZoomableImage src="/static/flask-default-domain.png" alt="دامنه پیش‌فرض" />
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
      همچنین می‌توانید در{" "}
      <a
        href="https://github.com/liara-cloud/flask-getting-started"
        target="_blank"
      >
        این آدرس،
      </a>{" "}
      نمونه کد‌های یک برنامه Flask قابل استقرار را مشاهده کنید.
    </p>

    {/* <Link href="/app-deploy/flask/tips">متوجه شدم، برو گام بعدی!</Link> */}
  </Layout>
);
