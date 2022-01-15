import Head from "next/head";
import Layout from "../../../components/Layout";
import PlatformIcon from "../../../components/PlatformIcon";
import ZoomableImage from "../../../components/ZoomableImage";

export default () => (
  <Layout>
    <Head>
      <title>
        مستندات نصب و راه‌اندازی دیتابیس‌های Redis - سرویس ابری لیارا
      </title>
    </Head>

    <div className="page-head">
      <PlatformIcon platform="redis" />
      <div className="page-title">
        <h1>دیتابیس Redis</h1>
        <span className="page-description">(Redis key/value Database)</span>
      </div>
    </div>

    <h3>نصب و راه‌اندازی</h3>
    <p>
      برای راه‌اندازی Redis ابتدا وارد منوی <b>دیتابیس‌ها</b> شوید و سپس روی{" "}
      <b>راه‌اندازی دیتابیس‌</b> کلیک کنید.
    </p>
    <ZoomableImage
      src="/static/databases/mysql-create-1.png"
      alt="صفحه‌ لیست دیتابیس‌ها"
    />
    <p>
      سپس دیتابیس‌ <b>Redis</b> و نسخه مدنظرتان را انتخاب کنید و با انتخاب شناسه
      برای دیتابیس‌‌تان و پلن دلخواه، دیتابیس را <b>راه‌اندازی و نصب</b> کنید.
    </p>
    <ZoomableImage
      src="/static/databases/redis-create-1.png"
      alt="صفحه‌ ساخت دیتابیس‌ها"
    />
    <p>
      ممکن است راه‌اندازی دیتابیس چند ثانیه‌ای زمان ببرد و بعد از آن دیتابیس شما
      آماده استفاده می‌شود.
    </p>

    <h3>ماژول‌های نصب‌شده</h3>
    <p>ماژول‌های زیر به‌صورت پیش‌فرض روی سرویس‌های Redis نصب و فعال شده‌اند:</p>
    <ul dir="ltr">
      <li>RedisJson</li>
      <li>RediSearch</li>
      <li>RedisBloom</li>
      <li>RedisGraph</li>
      <li>RedisTimeseries</li>
      <li>RedisAI</li>
    </ul>
  </Layout>
);
