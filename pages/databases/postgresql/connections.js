import Layout from "../../../components/Layout";
import Notice from "../../../components/Notice";
import Head from "next/head";
import ZoomableImage from "../../../components/ZoomableImage";
import Link from "next/link";

export default () => (
  <Layout>
    <Head>
      <title>مستندات اتصال به دیتابیس‌های PostgreSQL - سرویس ابری لیارا</title>
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

    <h3>راه‌های اتصال به PostgreSQL</h3>
    <p>
      در صورتی که قصد دارید داده‌های دیتابیس‌‌تان را ببینید و در یک محیط گرافیکی
      یا کامندلاینی به مدیریت دیتابیس‌‌تان بپردازید، می‌توانید از راه‌های زیر
      اقدام کنید:
    </p>
    <ul>
      <li>
        <b>استفاده از PGAdmin</b>
      </li>
      <p>
        لیارا برای دیتابیس PostgreSQL امکان راه‌اندازی PGAdmin را به راحتی فراهم
        کرده است. برای این کار کافیست که به صفحه دیتابیس مورد نظرتان بروید و از
        بخش <b>راه‌اندازی PGAdmin</b> آن را اجرا کنید.
      </p>
      <ZoomableImage
        src="/static/databases/pgadmin.png"
        alt="آماده شدن دیتابیس"
      />
      <p>
        سپس به راحتی با اطلاعات دیتابیس‌‌تان وارد پنل شوید و از امکانات PGAdmin
        استفاده کنید.
      </p>
      <br />
      <li>
        <b>استفاده از Adminer</b>
      </li>
      <p>
        اگر از نرم‌افزار Adminer استفاده می‌کنید، می‌توانید به راحتی به
        دیتابیس‌‌تان در لیارا متصل شوید. کافیست اطلاعات اتصال به دیتابیس‌‌تان را
        وارد کنید و سپس Login کنید. حتما از بخش System گزینه PostgreSQL را
        انتخاب کرده باشید.
      </p>
      <ZoomableImage src="/static/databases/login-adminer.png" />
      <br />
      <li>
        <b>استفاده از psql</b>
      </li>
      <p>
        در صورتی که قصد دارید از طریق psql به دیتابیس‌‌تان متصل شوید کافیست که
        ابتدا postgresql-client را متناسب با سیستم‌عامل‌تان نصب کنید. سپس به روش
        زیر می‌توانید به دیتابیس متصل شوید:
      </p>
      <code>{`$ psql -h DB_HOST -p DB_PORT -U DB_USERNAME -W postgres`}</code>
      <p>بعد از وارد کردن دستور بالا از شما رمزعبور پرسیده می‌شود.</p>
      <ZoomableImage src="/static/databases/psql-cli.png" />
    </ul>
    <Notice variant="info">
      شما می‌توانید از هر نرم‌افزار دلخواهی به PostgreSQL در لیارا متصل شوید. در
      صورتی که مشکلی در اتصال به دیتابیس PostgreSQL داشتید، به پشتیبانی لیارا
      اطلاع دهید.
    </Notice>
    <Notice variant="info">
      در همه موارد گفته شده در بالا میتوان به جای اتصال مستقیم به دیتابیس از
      قابلیت <b>Secure SSH Tunnel</b> نیز استفاده کرد. برای راه اندازی این
      قابلیت کافی‌ست مستندات{" "}
      <b>
        <Link href="/databases/tunnel">
          <a>اتصال امن به دیتابیس‌ها</a>
        </Link>
      </b>{" "}
      را مطالعه کنید.
    </Notice>
  </Layout>
);
