import Layout from "../../../components/Layout";
import Head from "next/head";
import ZoomableImage from "../../../components/ZoomableImage";

export default () => (
  <Layout>
    <Head>
      <title>سرویس ابری لیارا | مستندات اتصال به دیتابیس‌های ابری</title>
    </Head>

    <h1>دیتابیس PostgreSQL</h1>
    <span className="pageDescription">(PostgreSQL Database)</span>

    <h3>نصب و راه‌اندازی</h3>
    <p>
      برای راه‌اندازی PostgreSQL در پلتفرم لیارا نیاز به هیچ‌کاری به جز چند کلیک
      ساده نداریم! ابتدا کافی‌ست وارد منوی <b>دیتابیس‌ها</b> شوید و سپس روی{" "}
      <b>راه‌اندازی دیتابیس‌</b> کلیک کنید.
    </p>
    <ZoomableImage src="/static/databases/mysql-create-1.png" />
    <p>
      سپس دیتابیس‌ <b>PostgreSQL</b> و نسخه مدنظرتان را انتخاب کنید و با انتخاب
      یک شناسه دلخواه برای دیتابیس‌‌تان و پلن دلخواه، دیتابیس را{" "}
      <b>راه‌اندازی و نصب</b> کنید.
    </p>
    <ZoomableImage src="/static/databases/postgresql-create-1.png" />
    <p>
      ممکن است راه‌اندازی دیتابیس چند ثانیه‌ای زمان ببرد و بعد از آن دیتابیس شما
      آماده استفاده می‌شود.
    </p>
  </Layout>
);
