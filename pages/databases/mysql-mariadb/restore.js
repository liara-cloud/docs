import Layout from "../../../components/Layout";
import Notice from "../../../components/Notice";
import Head from "next/head";
import ZoomableImage from "../../../components/ZoomableImage";

export default () => (
  <Layout>
    <Head>
      <title>سرویس ابری لیارا | مستندات اتصال به دیتابیس‌های ابری</title>
    </Head>

    <h1>دیتابیس MySQL / MariaDB</h1>
    <span className="page-description">(MySQL / MariaDB Database)</span>

    <h3>MySQL / MariaDB Restore</h3>

    <p>
      کافیست فایل پشتیبان مدنظرتان را دانلود کنید و بعد از خارج کردن آن از حالت
      فشرده، به ازای هر دیتابیس، یک فایل dump دارید. برای بازگرداندن اطلاعات
      مربوط به یک دیتابیس خاص که فرض می‌کنیم اسم آن در اینجا liaraDB است
      کافیست دستور زیر را وارد کنید:
    </p>
    <code>
      {`$ mysql -u DB_USER -pDB_PASS -h DB_HOST -P DB_PORT < liaraDB.sql`}
    </code>
    <p>
      همچنین می‌توانید برای راحتی بیشتر، از طریق پنل phpMyAdmin و از بخش import،
      فایل هر دیتابیس را به همان حالت فشرده بارگذاری کنید.
    </p>
    <Notice variant="info">
      در فایل بالا تصور کردیم شما میخواهید اطلاعات یک دیتابیس فرضی به نام
      liaraDB را بازگردانی کنید. برای هر دیتابیس می‌توانید دستور بالا را با فایل
      dump مربوط به همان دیتابیس انجام دهید.
    </Notice>
  </Layout>
);
