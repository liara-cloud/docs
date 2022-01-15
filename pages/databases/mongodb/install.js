import Head from "next/head";
import Layout from "../../../components/Layout";
import Notice from "../../../components/Notice";
import DatabaseIcon from "../../../components/DatabaseIcon";
import ZoomableImage from "../../../components/ZoomableImage";

export default () => (
  <Layout>
    <Head>
      <title>
        مستندات نصب و راه‌اندازی دیتابیس‌های MongoDB - سرویس ابری لیارا
      </title>
    </Head>

    <div className="page-head">
      <DatabaseIcon database="mongodb" />
      <div className="page-title">
        <h1>دیتابیس MongoDB</h1>
        <span className="page-description">(MongoDB Database)</span>
      </div>
    </div>

    <h3>نصب و راه‌اندازی</h3>
    <p>
      برای راه‌اندازی MongoDB ابتدا وارد منوی <b>دیتابیس‌ها</b> شوید و سپس روی{" "}
      <b>راه‌اندازی دیتابیس‌</b> کلیک کنید.
    </p>
    <ZoomableImage
      src="/static/databases/mysql-create-1.png"
      alt="صفحه‌ لیست دیتابیس‌ها"
    />
    <p>
      سپس دیتابیس‌ <b>MongoDB</b> و نسخه مدنظرتان را انتخاب کنید و با انتخاب
      شناسه برای دیتابیس‌‌تان و پلن دلخواه، دیتابیس را <b>راه‌اندازی و نصب</b>{" "}
      کنید.
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
      اگر قصد دارید بعضی از خواص MongoDB که فقط در حالت ReplicaSet فعال می‌شود
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
