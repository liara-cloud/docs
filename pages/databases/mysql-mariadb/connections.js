import Layout from "../../../components/Layout";
import Head from "next/head";
import Notice from "../../../components/Notice";
import ZoomableImage from "../../../components/ZoomableImage";
import Link from "next/link";

export default () => (
  <Layout>
    <Head>
      <title>
        مستندات اتصال به دیتابیس‌های MySQL / MariaDB - سرویس ابری لیارا
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

    <h3>راه‌های اتصال به MySQL / MariaDB</h3>
    <p>
      در صورتی که قصد دارید داده‌های دیتابیس‌‌تان را ببینید و در یک محیط گرافیکی
      یا کامندلاینی به مدیریت دیتابیس‌‌تان بپردازید، می‌توانید از راه‌های زیر
      اقدام کنید:
    </p>
    <ul>
      <li>
        <b>استفاده از PHPMyAdmin</b>
      </li>
      <p>
        لیارا برای دیتابیس MySQL / MariaDB امکان راه‌اندازی PHPMyAdmin را به
        راحتی فراهم کرده است. برای این کار کافیست که به صفحه دیتابیس مورد نظرتان
        بروید و از بخش <b>راه‌اندازی PHPMyAdmin</b> آن را اجرا کنید.
      </p>
      <ZoomableImage
        src="/static/databases/mysql-create-4.png"
        alt="آماده شدن دیتابیس"
      />
      <p>
        سپس با نام کاربری و رمز عبور دیتابیس‌تان وارد PHPMyAdmin شوید و از
        امکانات آن استفاده کنید:
      </p>
      <ZoomableImage
        src="/static/databases/mysql-phpmyadmin.png"
        alt="پنل phpmyadmin"
      />
      <br />
      <li>
        <b>استفاده از MySQL Workbench</b>
      </li>
      <p>
        اگر از نرم‌افزار Workbench روی سیستم‌تان استفاده می‌کنید، می‌توانید به
        وسیله‌ی آن به دیتابیس‌‌تان در لیارا متصل شوید. کافیست اطلاعات اتصال به
        دیتابیس‌‌تان را وارد کنید. بعد از وارد کردن اطلاعات کافی‌ست تست اتصال یا
        همان Test Connection را بزنید تا مطمئن شوید اتصال به لیارا با موفقیت
        برقرار شده است.
      </p>
      <ZoomableImage
        src="/static/databases/mysql-workbrench.png"
        alt="پنل phpmyadmin"
      />
      <br />
      <li>
        <b>استفاده از MySQL CLI</b>
      </li>
      <p>
        در صورتی که قصد دارید از طریق MySQL CLI به دیتابیس‌‌تان متصل شوید کافیست
        که ابتدا mysql-client را متناسب با سیستم‌عامل‌تان نصب کنید. سپس به روش
        زیر می‌توانید به دیتابیس متصل شوید:
      </p>
      <code>
        {`$ mysql -u DB_USER -pDB_PASSWORD --host DB_HOST --port DB_PORT`}
      </code>
      <br />

      <ZoomableImage src="/static/databases/mysql-cli.png" alt="mysql cli" />
    </ul>
    <Notice variant="info">
      شما می‌توانید از هر نرم‌افزار دلخواهی به MySQL در لیارا متصل شوید. در
      صورتی که مشکلی در اتصال به دیتابیس MySQL داشتید، از طریق تیکت به پشتیبانی
      لیارا اطلاع دهید.
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
