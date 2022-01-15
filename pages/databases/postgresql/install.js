import Head from "next/head";
import Layout from "../../../components/Layout";
import DatabaseIcon from "../../../components/DatabaseIcon";
import ZoomableImage from "../../../components/ZoomableImage";

export default () => (
  <Layout>
    <Head>
      <title>
        مستندات نصب و راه‌اندازی دیتابیس‌های PostgreSQL - سرویس ابری لیارا
      </title>
    </Head>

    <div className="page-head">
      <DatabaseIcon database="postgres" />
      <div className="page-title">
        <h1>دیتابیس PostgreSQL</h1>
        <span className="page-description">(PostgreSQL Database)</span>
      </div>
    </div>

    <h3>نصب و راه‌اندازی</h3>
    <p>
      برای راه‌اندازی PostgreSQL ابتدا وارد منوی <b>دیتابیس‌ها</b> شوید و سپس
      روی <b>راه‌اندازی دیتابیس‌</b> کلیک کنید.
    </p>
    <ZoomableImage src="/static/databases/mysql-create-1.png" />
    <p>
      سپس دیتابیس‌ <b>PostgreSQL</b> و نسخه مدنظرتان را انتخاب کنید و با انتخاب
      شناسه برای دیتابیس‌‌تان و پلن دلخواه، دیتابیس را <b>راه‌اندازی و نصب</b>{" "}
      کنید.
    </p>
    <ZoomableImage src="/static/databases/postgresql-create-1.png" />
    <p>
      ممکن است راه‌اندازی دیتابیس چند ثانیه‌ای زمان ببرد و بعد از آن دیتابیس شما
      آماده استفاده می‌شود.
    </p>
  </Layout>
);
