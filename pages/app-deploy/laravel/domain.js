import Layout from "../../../components/Layout";
import Link from "next/link";
import Head from "next/head";
import Notice from "../../../components/Notice";
import ZoomableImage from "../../../components/ZoomableImage";
import Highlight from "react-highlight";

export default () => (
  <Layout>
    <Head>
      <title>Laravel سرویس ابری لیارا | مستندات استقرار برنامه‌های</title>
    </Head>

    <h1>برنامه‌های Laravel</h1>
    <span className="pageDescription">(Laravel Apps)</span>

    <h3>وصل کردن دامنه به پروژه</h3>
    <p>
      لیارا به صورت رایگان یک زیردامنه به همراه https برای شما ایجاد کرده است که
      از طریق بخش برنامه‌ها میتوانید لینک آن‌را مشاهده کنید. این دامنه برای تست
      و بررسی پروژه و نشان دادن برنامه به دیگران و کارفرمایان کار را راحت‌تر
      کرده است.
    </p>
    <ZoomableImage
      src="/static/laravel-defualt-domain.png"
      alt="دامنه پیش‌فرض"
    />
    <p>
      اما در اکثر موارد نیاز دارید که دامنه اختصاصی خود را به پروژه متصل کنید.
      برای اتصال یک دامنه به لیارا نیازمند پیکربندی DNS های دامنه به سمت زیرساخت
      لیارا هستید. به ‌همین خاطر در صورتی که قصد اضافه کردن دامنه اختصاصی دارید،
      کافیست مستندات{" "}
      <a href="/domains/management" target="_blank">
        دامنه‌ها
      </a>{" "}
      را مطالعه کنید. البته توصیه ما این‌است که تمام بخش‌های پروژه خود را با
      موفقیت روی لیارا مستقر کنید و سپس به کار‌های مربوط به اتصال دامنه
      بپردازید.
    </p>
    <p>
      شما باید تا الان توانسته باشید برنامه‌ی‌تان را با موفقیت در لیارا مستقر
      کرده باشید. اما پلتفرم Laravel نکات و توضیحات بیشتری نیز دارد که در بخش
      بعدی یعنی <b>توضیحات و نکات تکمیلی</b> به آن‌ها پرداخته‌ایم.
    </p>

    <p>
      همچنین میتوانید در{" "}
      <a
        href="https://github.com/liara-cloud/laravel-getting-started"
        target="_blank"
      >
        این آدرس،
      </a>{" "}
      نمونه کد‌های یک برنامه Laravel قابل استقرار را مشاهده کنید.
    </p>

    <Link href="/app-deploy/laravel/tips">متوجه شدم، برو گام بعدی!</Link>
  </Layout>
);
