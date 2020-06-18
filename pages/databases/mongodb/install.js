import Layout from "../../../components/Layout";
import Head from "next/head";
import Notice from "../../../components/Notice";
import ZoomableImage from "../../../components/ZoomableImage";

export default () => (
  <Layout>
    <Head>
      <title>سرویس ابری لیارا | مستندات اتصال به دیتابیس‌های ابری</title>
    </Head>

    <h1>دیتابیس MongoDB</h1>
    <span className="pageDescription">(MongoDB Database)</span>

    <h3>نصب و راه‌اندازی</h3>
    <p>
      برای راه‌اندازی MongoDB در پلتفرم لیارا نیاز به هیچ‌کاری به جز چند کلیک
      ساده ندارید! ابتدا کافی‌ست وارد منوی <b>دیتابیس‌ها</b> شوید و سپس روی{" "}
      <b>راه‌اندازی دیتابیس‌</b> کلیک کنید.
    </p>
    <ZoomableImage
      src="/static/databases/mysql-create-1.png"
      alt="صفحه‌ لیست دیتابیس‌ها"
    />
    <p>
      سپس دیتابیس‌ <b>MONGODB</b> و نسخه مدنظرتان را انتخاب کنید و با انتخاب یک
      شناسه دلخواه برای دیتابیس‌‌تان و پلن دلخواه، دیتابیس را{" "}
      <b>راه‌اندازی و نصب</b> کنید.
    </p>
    <ZoomableImage
      src="/static/databases/mongo-create-1.png"
      alt="صفحه‌ ساخت دیتابیس‌ها"
    />
    <p>
      ممکن است راه‌اندازی دیتابیس چند ثانیه‌ای زمان ببرد و بعد از آن دیتابیس شما
      آماده استفاده می‌شود.
    </p>

    <Notice variant="info">
      اگر قصد دارید بعضی از خواص MongoDB که فقط در حالت ReplicaSet فعال میشود
      (مثل{" "}
      <a
        target="_blank"
        href="https://docs.mongodb.com/manual/core/replica-set-oplog/"
      >
        Oplogs
      </a>{" "}
      ) را داشته‌باشید کافیست تیک آن را در بخش تنظیمات بزنید.
      <br />
      <ZoomableImage
        src="/static/databases/mongo-oplogs.png"
        alt="فعال کردن replicaset"
      />
    </Notice>
  </Layout>
);
