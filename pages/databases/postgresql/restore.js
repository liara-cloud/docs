import Layout from "../../../components/Layout";
import Notice from "../../../components/Notice";
import Head from "next/head";
import ZoomableImage from "../../../components/ZoomableImage";

export default () => (
  <Layout>
    <Head>
      <title>سرویس ابری لیارا | مستندات اتصال به دیتابیس‌های ابری</title>
    </Head>

    <h1>دیتابیس PostgreSQL</h1>
    <span className="pageDescription">(PostgreSQL Database)</span>

    <h3>PostgreSQL Restore</h3>
    <p>
      کافیست فایل پشتیبان مدنظرتان را دانلود کنید و بعد از خارج کردن آن از حالت
      فشرده، به ازای هر دیتابیس، یک فایل dump دارید. برای بازگرداندن اطلاعات
      مربوط به یک دیتابیس خاص که فرض می‌کنیم اسم آن در اینجا liaraDB است،
      کافیست دستور زیر را وارد کنید:
    </p>
    <code>
      {`$ pg_restore -h DB_HOST -p DB_PORT -U DB_USERNAME -F c --create -d postgres liaraDB.dump`}
    </code>
    <Notice variant="info">
      در فایل بالا تصور کردیم شما میخواهید اطلاعات یک دیتابیس فرضی به نام
      liaraDB را بازگردانی کنید. برای هر دیتابیس می‌توانید دستور بالا را با فایل
      dump مربوط به همان دیتابیس انجام دهید.
    </Notice>
    <Notice variant="info">
      دستور pg_restore امکانات زیادی دارد که می‌توانید درباره آن در{" "}
      <a
        href="https://www.postgresql.org/docs/current/app-pgrestore.html"
        target="_blank"
      >
        مستندات pg_restore
      </a>{" "}
      اطلاعات بیشتری کسب کنید.
    </Notice>
  </Layout>
);
