import Layout from "../../../components/Layout";
import Link from "next/link";
import Head from "next/head";
import ZoomableImage from "../../../components/ZoomableImage";
import Highlight from "react-highlight";

export default () => (
  <Layout>
    <Head>
      <title>
        مستندات تنظیم متغیرها (Environment Variables) در برنامه‌های Docker -
        سرویس ابری لیارا
      </title>
    </Head>

    <div className="page-head">
      <img
        className="page-icon"
        src="/static/platformicons/docker.svg"
        alt="docker"
      />
      <div className="page-title">
        <h1>برنامه‌های Docker</h1>
        <span className="page-description">(Docker Apps)</span>
      </div>
    </div>

    <h3>تنظیم متغیرها (Environment Variables)</h3>
    <p>
      متغیرهای محیطی یا همان Environment Variables به شما کمک می‌کنند تا
      برنامه‌ی‌تان در هر محیط اطلاعات مربوط به همان محیط را دریافت کند. برای
      مثال، اطلاعات اتصال به دیتابیس را می‌توانید از این بخش وارد کنید.{" "}
      <Link href="/app-features/environment-variables">توضیحات بیشتر</Link>
    </p>
    <p>
      برای افزودن یک ENV کافیست که به بخش تنظیمات برنامه‌ی‌تان بروید و یک key به
      عنوان اسم و یک value به عنوان مقدار اضافه کنید، و با زدن دکمه{" "}
      <b>ثبت تغییرات</b> یک ENV به برنامه‌ی‌تان اضافه کنید. برای نمونه، ENV ای
      با عنوان <span className="code">LIARA_URL</span> و مقدار{" "}
      <span className="code">https://liara.ir</span> را به این صورت اضافه کنید.
    </p>
    <ZoomableImage src="/static/php-env.png" />
    <p> حالا به راحتی می‌توانید از‌ آن در برنامه‌ی‌تان استفاده کنید.</p>
    <p>
      بعد از کلیک روی دکمه <b>ثبت تغییرات</b> برنامه‌ی‌ شما به صورت خودکار
      ری‌استارت می‌شود و در استقرار جدید این متغیر‌های محیطی در داخل برنامه قابل
      استفاده می‌شوند. به این شیوه که <span className="code">LIARA_URL</span> را
      اضافه کردید می‌توانید هر ENV دیگری را نیز به برنامه اضافه کنید.
    </p>
    <Link href="/app-deploy/docker/logs">متوجه شدم، برو گام بعدی!</Link>
  </Layout>
);
