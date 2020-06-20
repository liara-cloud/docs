import Layout from "../../../components/Layout";
import Link from "next/link";
import Head from "next/head";
import Highlight from "react-highlight";
import Notice from "../../../components/Notice";

export default () => (
  <Layout>
    <Head>
      <title>Flask سرویس ابری لیارا | مستندات استقرار برنامه‌های</title>
    </Head>

    <h1>برنامه‌های Flask</h1>
    <span className="pageDescription">(Flask Apps)</span>

    <h3>اتصال به دیتابیس‌ها</h3>
    <p>
      خیلی کم پیش‌می‌آید که در برنامه‌ای از دیتابیس استفاده نشده‌باشد. اگر در
      پروژه Flask ای‌‌تان از دیتابیس استفاده کرده اید میتوانید به‌این‌صورت به آن
      متصل شوید.
    </p>
    <ul>
      <li>
        <b>MongoDB</b>
      </li>
      <p>
        {" "}
        اگر از این پایگاه داده استفاده کرده‌اید کافیست اطلاعات وصل شدن به
        دیتابیس MongoDB را در بخش ENV ها وارد کنید:
      </p>
      <Highlight className="config">
        {`MONGO_URI="mongodb://USERNAME:PASSWORD@HOST:PORT/DB_NAME?authSource=admin"`}
      </Highlight>
      و سپس در برنامه به وسیله درایور و کتابخانه مدنظرتان متصل شوید (ما برای
      نمونه از Flask-PyMongo استفاده کرده‌ایم.)
      <Highlight className="python">
        {`if(os.getenv('MONGO_URI') is None):
    return 'MONGO_URI not set!'
mongo = PyMongo(app, uri=os.getenv('MONGO_URI'))`}
      </Highlight>
    </ul>

    <br />

    <Link href="/app-deploy/flask/disks">متوجه شدم، برو بعدی!</Link>
  </Layout>
);
