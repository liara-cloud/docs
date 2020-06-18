import Layout from "../../../components/Layout";
import Head from "next/head";
import ZoomableImage from "../../../components/ZoomableImage";

export default () => (
  <Layout>
    <Head>
      <title>سرویس ابری لیارا | مستندات اتصال به دیتابیس‌های ابری</title>
    </Head>

    <h1>دیتابیس Redis</h1>
    <span className="pageDescription">(Redis key/value Database)</span>

    <h3>نصب و راه‌اندازی</h3>
    <p>
      برای راه‌اندازی Redis در پلتفرم لیارا نیاز به هیچ‌کاری به جز چند کلیک ساده
      ندارید! ابتدا کافی‌ست وارد منوی <b>دیتابیس‌ها</b> شوید و سپس روی{" "}
      <b>راه‌اندازی دیتابیس‌</b> کلیک کنید.
    </p>
    <ZoomableImage
      src="/static/databases/mysql-create-1.png"
      alt="صفحه‌ لیست دیتابیس‌ها"
    />
    <p>
      سپس دیتابیس‌ <b>REDIS</b> و نسخه مدنظرتان را انتخاب کنید و با انتخاب یک
      شناسه دلخواه برای دیتابیس‌‌تان و پلن دلخواه، دیتابیس را{" "}
      <b>راه‌اندازی و نصب</b> کنید.
    </p>
    <ZoomableImage
      src="/static/databases/redis-create-1.png"
      alt="صفحه‌ ساخت دیتابیس‌ها"
    />
    <p>
      ممکن است راه‌اندازی دیتابیس چند ثانیه‌ای زمان ببرد و بعد از آن دیتابیس شما
      آماده استفاده می‌شود.
    </p>
  </Layout>
);
