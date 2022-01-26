import Head from "next/head";
import Layout from "../../../components/Layout";
import PlatformIcon from "../../../components/PlatformIcon";
import ZoomableImage from "../../../components/ZoomableImage";

export default () => (
  <Layout>
    <Head>
      <title>
        مستندات تهیه فایل پشتیبان از دیتابیس‌های MariaDB - سرویس ابری لیارا
      </title>
    </Head>

    <div className="page-head">
      <PlatformIcon platform="mariadb" />
      <div className="page-title">
        <h1>دیتابیس MariaDB</h1>
        <span className="page-description">(MariaDB Database)</span>
      </div>
    </div>

    <h3>MariaDB Backup</h3>
    <p>
      لیارا هر روز به صورت خودکار از دیتابیس‌های شما Backup یا همان فایل پشتیبان
      تهیه می‌کند. برای مشاهده این فایل‌ها کافیست به منوی <b>پشتیبان‌گیری</b> در
      صفحه دیتابیس موردنظرتان بروید:
    </p>
    <ZoomableImage
      src="/static/databases/mysql-liara-backup.png"
      alt="mysql backup page"
    />
    {/* <p>
      سپس کافیست فایل پشتیبان موردنظرتان از لحاظ زمانی را دانلود کرده و از آن
      استفاده نمایید. محتویات این فایل‌ها شامل تمام اطلاعات دیتابیس MySQL تان
      است. اگر دوست دارید بیشتر بدانید که لیارا چطور بک‌آپ میگیرد، در حقیقت
      این فایل‌ها از خروجی دستوری شبیه دستور زیر ایجاد می‌شوند. البته برای هر
      دیتابیسی که شما در MySQL ساخته باشید، بک‌آپ مجزایی از آن گرفته شده است.
      مثلا دستور زیر فقط از یک دیتابیس فرضی به نام liaraDB بک‌آپ میگیرد، و اگر
      شما چندین دیتابیس داشته باشد،‌این دستور به ازای هر دیتابیس شما اجرا می‌شود
      و برای هر دیتابیس در فایل پشتیبان یک فایل اختصاصی ایجاد می‌شود.
    </p>
    <code>
      {`$ mysqldump -u DB_USERNAME -pDB_PASSWORD --host DB_HOST --port DB_PORT --single-transaction --quick --add-drop-database --lock-tables=false --databases liaraDB > liaraDB.sql`}
    </code> */}
  </Layout>
);
