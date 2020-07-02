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

    <h1>MongoDB Backup</h1>
    <p>
      {" "}
      لیارا، روزانه، هفتگی و ماهانه از دیتابیس‌های شما به صورت خودکار Backup یا
      همان فایل پشتیبان تهیه می‌کند. برای مشاهده این فایل‌ها کافیست به منوی{" "}
      <b>پشتیبان‌گیری</b> در صفحه دیتابیس موردنظرتان بروید:
    </p>
    <ZoomableImage
      src="/static/databases/mysql-liara-backup.png"
      alt="mysql backup page"
    />
    {/* <p>
      سپس کافیست فایل پشتیبان موردنظرتان از لحاظ زمانی را دانلود کرده و از آن
      استفاده نمایید. اگر دوست دارید بیشتر بدانید که لیارا چطور بک‌آپ میگیرد، در
      حقیقت این فایل‌ها از خروجی دستوری شبیه دستور زیر ایجاد می‌شوند. محتویات
      فایل‌های Backup شامل تمام اطلاعات دیتابیس MongoDB‌ تان است.
    </p>
    <code>
      {`$ mongodump -u DB_USERNAME -p DB_PASSWORD --host DB_HOST --port DB_PORT --authenticationDatabase admin --archive=/tmp/mongobackup.dump --quiet`}
    </code> */}
  </Layout>
);
