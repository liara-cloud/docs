import Layout from "../../../components/Layout";
import Link from "next/link";
import Head from "next/head";
import ZoomableImage from "../../../components/ZoomableImage";
import Highlight from "react-highlight";

export default () => (
  <Layout>
    <Head>
      <title>NodeJS سرویس ابری لیارا | مستندات استقرار برنامه‌های</title>
    </Head>

    <div className="page-head">
      <img className="page-icon" src="/static/platformicons/nodejs.svg" alt="nodejs"/>
      <div className="page-title">
        <h1>برنامه‌های NodeJS</h1>
        <span className="page-description">(NodeJS Apps)</span>
      </div>
    </div>

    <h3>مشاهده لاگ‌های برنامه</h3>
    <p>
      لاگ بخش مهمی از هر برنامه است و به برنامه‌نویسان کمک می‌کند
      تا بتوانند راحت‌تر از اتفاقات رخ‌ داده در برنامه‌ی‌شان آگاه شوند. به صورت
      خلاصه شما می‌توانید لاگ‌های برنامه‌ی‌تان را در بخش لاگ‌های پنل لیارا مشاهده
      کنید. برای نمونه می‌توانید یک Log خیلی ساده بدین‌صورت در برنامه‌ی‌تان ایجاد
      کنید:
    </p>
    <Highlight className="js">{`console.log(\`--> a user here!\`);`}</Highlight>
    <p>
      سپس با رفرش کردن چندباره سایت می‌توانید آن‌هارا در منوی لاگ‌های لیارا
      ببینید:
    </p>
    <ZoomableImage src="/static/nodejs-logs.png" />

    <p>
      مدیریت Log ها در NodeJS می‌تواند روش‌های مختلفی داشته باشد و وابسته به
      پیاده‌سازی برنامه‌ی‌تان و تصمیمات شما است. ممکن است لاگ‌های مهم‌تر
      را در فایل ذخیره کنید و بخشی را در کنسول نمایش دهید.
    </p>

    <Link href="/app-deploy/nodejs/liarajson">متوجه شدم، برو گام بعدی!</Link>
  </Layout>
);
