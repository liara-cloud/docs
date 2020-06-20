import Layout from "../../../components/Layout";
import Head from "next/head";
import ZoomableImage from "../../../components/ZoomableImage";

export default () => (
  <Layout>
    <Head>
      <title>سرویس ابری لیارا | مستندات اتصال به دیتابیس‌های ابری</title>
    </Head>

    <h1>دیتابیس PostgreSQL</h1>
    <span className="pageDescription">(PostgreSQL Database)</span>

    <h3>PostgreSQL Backup</h3>
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
    <p>
      سپس کافیست فایل پشتیبان موردنظرتان از لحاظ زمانی را دانلود کرده و از آن
      استفاده نمایید. محتویات این فایل‌ها شامل تمام اطلاعات دیتابیس PostgreSQL
      تان میباشد. اگر دوست دارید بیشتر بدانید که لیارا چطور بک‌آپ میگیرد، در
      حقیقت این فایل ها از خروجی دستوری شبیه دستور زیر ایجاد می‌شوند. البته برای
      هر دیتابیسی که شما در PostgreSQL ساخته باشید، بک‌آپ مجزایی از آن گرفته شده
      است. مثلا دستور زیر فقط از یک دیتابیس فرضی به نام liaraDB بک‌آپ میگیرد، و
      اگر شما چندین دیتابیس داشته باشید، دستور به ازای هر دیتابیس شما اجرا میشود
      و برای هر دیتابیس در فایل پشتیبان یک فایل اختصاصی ایجاد میشود.
    </p>
    <code>
      {`$ pg_dump -h DB_HOST -p DB_PORT -U DB_USERNAME --create --clean -F c liaraDB > liaraDB.dump`}
    </code>
  </Layout>
);
