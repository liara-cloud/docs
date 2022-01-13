import Layout from "../../../components/Layout";
import Head from "next/head";
import Highlight from "react-highlight";

export default () => (
  <Layout>
    <Head>
      <title>
        توضیحات و نکات تکمیلی دیتابیس‌های MySQL / MariaDB - سرویس ابری لیارا
      </title>
    </Head>

    <div className="page-head">
      <img
        className="page-icon"
        src="/static/platformicons/mysql.svg"
        alt="mysql"
      />
      <div className="page-title">
        <h1>دیتابیس MySQL / MariaDB</h1>
        <span className="page-description">(MySQL / MariaDB Database)</span>
      </div>
    </div>

    <h3>🎯 توضیحات و نکات تکمیلی</h3>
    <h3 id="remove-logs">حذف لاگ‌ها</h3>
    <p>
      درصورتی که ثبت لاگ‌ها در دیتابیس‌های MariaDB / MySQL حجم زیادی را اشغال
      کرده است می‌توانید با اجرای کوئری زیر به‌صورت بازه‌ای لاگ‌ها را پاک کنید.
    </p>
    <Highlight className="mysql">{`RESET MASTER;`}</Highlight>
  </Layout>
);
