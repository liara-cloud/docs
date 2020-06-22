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

    <h3>Redis Backup</h3>
    <p>
      {" "}
      لیارا، روزانه، هفتگی و ماهانه از دیتابیس‌های شما به صورت خودکار Backup یا
      همان فایل پشتیبان تهیه میکند. برای مشاهده این فایل ها کافیست به منوی{" "}
      <b>پشتیبان‌گیری</b> در صفحه دیتابیس موردنظرتان بروید:
    </p>
    <ZoomableImage
      src="/static/databases/mysql-liara-backup.png"
      alt="mysql backup page"
    />
    {/* <p>
      سپس کافیست فایل پشتیبان موردنظرتان از لحاظ زمانی را دانلود کرده و از آن
      استفاده نمایید. محتویات این فایل‌ها شامل تمام اطلاعات دیتابیس Redis تان
      میباشد. اگر دوست دارید بیشتر بدانید که لیارا چطور بک‌آپ میگیرد، در حقیقت
      این فایل ها، فایل RDB هستند که از خروجی دستور زیر ساخته میشوند:
    </p>
    <code>
      {`$ redi-cli: BGSAVE`}
    </code> */}
  </Layout>
);
