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
        <p>
          {" "}
          ابتدا فایل پشتیبان مدنظرتان را دانلود کنید و آن‌را از حالت فشرده خارج
          کنید. احتمالا فایل‌هایی شبیه تصویر زیر خواهید داشت.
        </p>
      </li>
      <br />
      <ZoomableImage src="/static/databases/mongo-backup-1.png" />
      <br />

      <li>
        <p>
          {" "}
          دیتابیس جدیدی هم‌نسخه با دیتابیس قدیم ایجاد میکنید، سپس کافیست به
          وسیله دستور mongorestore داده‌ها را به دیتابیس جدید منتقل کنید:
        </p>
      </li>
      <br />
      <code>
        {`$ mongorestore -u DB_USERNAME -p DB_PASSWORD --host DB_HOST --port DB_PORT --authenticationDatabase admin --verbose --archive=/path/BACKUP_FILE.dump`}
      </code>
      <br />
      <ZoomableImage src="/static/databases/mongo-backup-2.png" />
      <br />

      <li>
        <p>
          {" "}
          همانطور که در تصویر بالا میبینید، به داخل پوشه فایل‌های بک‌آپ رفتیم و
          با دستور mongorestore اطلاعات فایل بک‌آپ را به دیتابیس‌‌ جدید منتقل
          کردیم.
        </p>
      </li>
    </ul>
  </Layout>
);
