import Layout from "../../../components/Layout";
import Link from "next/link";
import Head from "next/head";
import Highlight from "react-highlight";

export default () => (
  <Layout>
    <Head>
      <title>
        مستندات اتصال به دیتابیس‌ها در برنامه‌های Flask - سرویس ابری لیارا
      </title>
    </Head>

    <div className="page-head">
      <img
        className="page-icon"
        src="/static/platformicons/flask.svg"
        alt="flask"
      />
      <div className="page-title">
        <h1>برنامه‌های Flask</h1>
        <span className="page-description">(Flask Apps)</span>
      </div>
    </div>

    <h3>اتصال به دیتابیس‌ها</h3>
    <p>
      به‌ندرت پیش‌می‌آید که در برنامه‌ای از دیتابیس استفاده نشده‌باشد. اگر در
      برنامه Flask ای‌‌تان از دیتابیس استفاده کرده‌اید می‌توانید به‌این‌صورت به
      آن متصل شوید.
    </p>
    <ul>
      <li id="sqlite">
        <b>SQLite</b>
      </li>
      <p>
        برای استفاده از SQLite باید در نظر داشته باشید که فایل سیستم برنامه‌های
        لیارا، <a href="/app-features/file-system">Read-Only</a> است. به عبارتی،
        بعد از عملیات استقرار، امکان ذخیره‌سازی فایل‌های جدید در کنار فایل‌های
        پروژه، وجود ندارد و داده‌های پایدار را باید داخل دیسک ذخیره کنید. برای
        این کار، یک پوشه‌ی اختصاصی برای دیتابیس‌تان بسازید و فایل دیتابیس را
        داخل آن قرار بدهید و سپس آن پوشه را به عنوان دیسک تعریف کرده و دیپلوی
        کنید.{" "}
        <Link href="/storage/disks/about">
          <a>اطلاعات بیشتر درباره‌ی دیسک‌ها</a>
        </Link>
      </p>
      <li id="postgresql">
        <b>PostgreSQL</b>
      </li>
      <p>
        {" "}
        برای اتصال به دیتابیس PostgreSQL کافیست اطلاعات اتصال به آن را در بخش
        متغیرهای محیطی یا همان ENVs وارد کنید:
      </p>
      <Highlight className="config">
        {`DATABASE_URL=postgres://USER:PASSWORD@HOST:PORT/NAME`}
      </Highlight>
      <p>
        و حالا با اضافه‌شدن این متغیر، می‌توانید آن را از داخل کدهای‌تان
        فراخوانی کرده و با آن به دیتابیس متصل شوید.
      </p>
      <li id="mysql">
        <b>MySQL</b>
      </li>
      <p>
        {" "}
        برای اتصال به دیتابیس MySQL کافیست اطلاعات اتصال به آن را در بخش
        متغیرهای محیطی یا همان ENVs وارد کنید:
      </p>
      <Highlight className="config">
        {`DATABASE_URL=mysql://USER:PASSWORD@HOST:PORT/NAME`}
      </Highlight>
      <p>
        و حالا با اضافه‌شدن این متغیر، می‌توانید آن را از داخل کدهای‌تان
        فراخوانی کرده و با آن به دیتابیس متصل شوید.
      </p>
      <li id="mongodb">
        <b>MongoDB</b>
      </li>
      <p>
        {" "}
        اگر از این پایگاه داده استفاده کرده‌اید کافیست اطلاعات اتصال به دیتابیس
        MongoDB را در بخش env ها وارد کنید:
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

    <Link href="/app-deploy/flask/disks">متوجه شدم، برو گام بعدی!</Link>
  </Layout>
);
