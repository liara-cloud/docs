import Head from "next/head";
import Layout from "../../../components/Layout";
import Notice from "../../../components/Notice";
import PlatformIcon from "../../../components/PlatformIcon";
import ZoomableImage from "../../../components/ZoomableImage";

export default () => (
  <Layout>
    <Head>
      <title>مستندات نصب و راه‌اندازی دیتابیس‌های MongoDB - لیارا</title>
    </Head>

    <div className="page-head">
      <PlatformIcon platform="mongodb" />
      <div className="page-title">
        <h1>دیتابیس MongoDB</h1>
        <span className="page-description">(MongoDB Database)</span>
      </div>
    </div>

    <h3>نصب و راه‌اندازی</h3>

    <p>
      در صورتی که تمایلی به خواندن آموزش متنی ندارید می‌توانید ویدیوی آموزشی زیر
      ‌را مشاهده کنید.
    </p>

    <video
      src="https://files.liara.ir/tutorials/DATABASES/MONGODB.mp4"
      controls="controls"
      className="block w-full"
      width="100%"
    ></video>

    <p>
      برای راه‌اندازی دیتابیس MongoDB باید در بخش{" "}
      <a href="https://console.liara.ir/databases" target="_blank">
        دیتابیس‌های
      </a>{" "}
      کنسول لیارا بر روی دکمه‌ی <strong>راه‌اندازی دیتابیس</strong> کلیک کنید.
      پس از انتخاب دیتابیس MongoDB نسخه‌ی مورد نظر خود را انتخاب کرده و همچنین
      یک شناسه‌ی یکتا برای دیتابیس خود درنظر بگیرید. علاوه‌براین‌‌ها درصورتی که
      سرعت و امنیت از شاخصه‌های کلیدی برنامه‌‌های شما هستند می‌توانید دسترسی از
      طریق شبکه‌ی عمومی را در زمان راه‌اندازی دیتابیس غیرفعال کنید. در نهایت پس
      از انتخاب پلن دیتابیس خود می‌توانید بر روی دکمه‌ی{" "}
      <strong>راه‌اندازی و نصب</strong> کلیک کنید.
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
        src="/static/databases/mongo.png"
        alt="فعال کردن replicaset"
      />
    </Notice>

    <Notice varient="info">
      ممکن است راه‌اندازی دیتابیس چند ثانیه‌ای زمان ببرد و بعد از آن دیتابیس شما
      آماده استفاده می‌شود.
    </Notice>
  </Layout>
);
