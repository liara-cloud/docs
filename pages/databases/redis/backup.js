import Head from "next/head";
import Layout from "../../../components/Layout";
import PlatformIcon from "../../../components/PlatformIcon";
import ZoomableImage from "../../../components/ZoomableImage";

export default () => (
  <Layout>
    <Head>
      <title>
        مستندات تهیه فایل پشتیبان از دیتابیس‌های Redis - سرویس ابری لیارا
      </title>
    </Head>

    <div className="page-head">
      <PlatformIcon platform="redis" />
      <div className="page-title">
        <h1>دیتابیس Redis</h1>
        <span className="page-description">(Redis key/value Database)</span>
      </div>
    </div>

    <h3>Redis Backup</h3>
    <p>
      لیارا هر روز به صورت خودکار از دیتابیس‌های شما Backup یا همان فایل پشتیبان
      تهیه می‌کند. برای مشاهده این فایل‌ها کافیست به منوی <b>پشتیبان‌گیری</b> در
      صفحه دیتابیس موردنظرتان بروید:
    </p>
    <ZoomableImage
      src="/static/databases/mysql-liara-backup.png"
      alt="redis backup page"
    />
    {/* <p>
      سپس کافیست فایل پشتیبان موردنظرتان از لحاظ زمانی را دانلود کرده و از آن
      استفاده نمایید. محتویات این فایل‌ها شامل تمام اطلاعات دیتابیس Redis تان
      است. اگر دوست دارید بیشتر بدانید که لیارا چطور بک‌آپ میگیرد، در حقیقت
      این فایل‌ها، فایل RDB هستند که از خروجی دستور زیر ساخته می‌شوند:
    </p>
    <code>
      {`$ redi-cli: BGSAVE`}
    </code> */}
  </Layout>
);
