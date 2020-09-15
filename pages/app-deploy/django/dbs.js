import Layout from "../../../components/Layout";
import Link from "next/link";
import Head from "next/head";
import Highlight from "react-highlight";
import Notice from "../../../components/Notice";

export default () => (
  <Layout>
    <Head>
      <title>
        مستندات اتصال به دیتابیس‌ها در برنامه‌های Django - سرویس ابری لیارا
      </title>
    </Head>

    <div className="page-head">
      <img
        className="page-icon"
        src="/static/platformicons/django.svg"
        alt="django"
      />
      <div className="page-title">
        <h1>برنامه‌های Django</h1>
        <span className="page-description">(Django Apps)</span>
      </div>
    </div>

    <h3>اتصال به دیتابیس‌ها</h3>
    <ul>
      <li>
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
      <li>
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
        {" "}
        حال برنامه‌ بعد از اضافه شدن این ENV می‌تواند به دیتابیس PostgreSQL وصل
        شود.
      </p>
      <li>
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
        {" "}
        حال برنامه‌ بعد از اضافه شدن این ENV می‌تواند به دیتابیس MySQL وصل شود.
      </p>
    </ul>

    <Notice variant="info">
      توجه داشته باشید برای اتصال به هر دیتابیس باید درایور‌های آن را نصب کرده
      باشید. مثلا برای MySQL و PostgreSQL نیاز است تا مقادیر زیر در فایل
      requirements.txt شما وجود داشته باشد. این یک فایل نمونه برای Django است:
      <Highlight className="config">
        {`Django == 3.0.7
psycopg2 == 2.8.5
mysqlclient == 1.4.6‍`}
      </Highlight>
    </Notice>
    <br />

    <Link href="/app-deploy/django/migrations">متوجه شدم، برو گام بعدی!</Link>
  </Layout>
);
