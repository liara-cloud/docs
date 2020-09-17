import Layout from "../../../components/Layout";
import Head from "next/head";
import ZoomableImage from "../../../components/ZoomableImage";

export default () => (
  <Layout>
    <Head>
      <title>
        مستندات تهیه فایل پشتیبان از دیتابیس‌های PostgreSQL - سرویس ابری لیارا
      </title>
    </Head>

    <div className="page-head">
      <img
        className="page-icon"
        src="/static/platformicons/postgres.svg"
        alt="postgres"
      />
      <div className="page-title">
        <h1>دیتابیس PostgreSQL</h1>
        <span className="page-description">(PostgreSQL Database)</span>
      </div>
    </div>

    <h3>PostgreSQL Backup</h3>
    <p>
      لیارا هر روز به صورت خودکار از دیتابیس‌های شما Backup یا همان فایل پشتیبان
      تهیه می‌کند. برای مشاهده این فایل‌ها کافیست به منوی <b>پشتیبان‌گیری</b> در
      صفحه دیتابیس موردنظرتان بروید:
    </p>
    <ZoomableImage
      src="/static/databases/mysql-liara-backup.png"
      alt="postgres backup page"
    />
    {/* <p>
      سپس کافیست فایل پشتیبان موردنظرتان از لحاظ زمانی را دانلود کرده و از آن
      استفاده نمایید. محتویات این فایل‌ها شامل تمام اطلاعات دیتابیس PostgreSQL
      تان است. اگر دوست دارید بیشتر بدانید که لیارا چطور بک‌آپ میگیرد، در
      حقیقت این فایل‌ها از خروجی دستوری شبیه دستور زیر ایجاد می‌شوند. البته برای
      هر دیتابیسی که شما در PostgreSQL ساخته باشید، بک‌آپ مجزایی از آن گرفته شده
      است. مثلا دستور زیر فقط از یک دیتابیس فرضی به نام liaraDB بک‌آپ میگیرد، و
      اگر شما چندین دیتابیس داشته باشید، دستور به ازای هر دیتابیس شما اجرا می‌شود
      و برای هر دیتابیس در فایل پشتیبان یک فایل اختصاصی ایجاد می‌شود.
    </p>
    <code>
      {`$ pg_dump -h DB_HOST -p DB_PORT -U DB_USERNAME --create --clean -F c liaraDB > liaraDB.dump`}
    </code> */}
  </Layout>
);
