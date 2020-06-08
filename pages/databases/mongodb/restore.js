import Layout from "../../../components/Layout";
import Head from "next/head";
import ZoomableImage from "../../../components/ZoomableImage";

export default () => (
  <Layout>
    <Head>
      <title>سرویس ابری لیارا | مستندات اتصال به دیتابیس‌های ابری</title>
    </Head>

    <h1>دیتابیس MongoDB</h1>
    <span className="pageDescription">(MongoDB Database)</span>

    <h1>MongoDB Restore</h1>
    <p>
      اگر تصور کنیم که دیتابیس شما دچار مشکل شده است و قصد دارید به کمک آخرین
      فایل پشتیبان، داده‌های آن‌را در دیتابیس جدیدی بازسازی کنید میتوانید طبق
      این سناریو پیش بروید:
    </p>
    <ul>
      <li>
        ابتدا فایل پشتیبان مدنظرتان را دانلود کنید و آن‌را از حالت فشرده خارج
        کنید. احتمالا فایل‌هایی شبیه تصویر زیر خواهید داشت.
      </li>
      <br />
      <ZoomableImage src="/static/databases/mongo-backup-1.png" />
      <br />

      <li>
        دیتابیس جدیدی هم‌نسخه با دیتابیس قدیم ایجاد میکنید، سپس کافیست به وسیله
        دستور mongorestore داده‌ها را به دیتابیس جدید منتقل کنید: (این اطلاعات
        برای یک دیتابیس نمونه است و شما باید متناسب با اطلاعات دیتابیس‌‌تان
        آن‌هارا پر کنید.)
      </li>
      <br />
      <code>
        {`$ mongorestore -u root -p Oz4YNoqSiHtglXpWzVcbmSdu --host s11.liara.ir --port 31255 --authenticationDatabase admin --verbose --gzip --archive=2020-05-24T00-41-28-1590264688336.dump`}
      </code>
      <br />
      <ZoomableImage src="/static/databases/mongo-backup-2.png" />
      <br />

      <li>
        همانطور که در تصویر بالا میبینید، به داخل پوشه فایل‌های بک‌آپ رفتیم و با
        دستور mongorestore اطلاعات فایل بک‌آپ را به دیتابیس‌‌ جدید منتقل کردیم.
      </li>
    </ul>
  </Layout>
);
