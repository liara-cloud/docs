import Head from "next/head";
import Highlight from "react-highlight";
import Layout from "../../../components/Layout";
import Asciinema from "../../../components/Asciinema";
import PlatformIcon from "../../../components/PlatformIcon";
import ZoomableImage from "../../../components/ZoomableImage";

export default () => (
  <Layout>
    <Head>
      <title>مستندات اتصال به دیتابیس‌های MariaDB - سرویس ابری لیارا</title>
    </Head>

    <div className="page-head">
      <PlatformIcon platform="mariadb" />
      <div className="page-title">
        <h1>دیتابیس MariaDB</h1>
        <span className="page-description">(MariaDB Database)</span>
      </div>
    </div>

    <h3>راه‌های اتصال به MariaDB</h3>
    <p>
      پس از نصب و راه‌اندازی یک دیتابیس جدید نوبت به مدیریت آن می‌رسد و شما
      می‌توانید برای مشاهده و مدیریت داده‌های دیتابیس‌های MariaDB یکی از
      ابزارهای زیر را انتخاب کنید.
    </p>
    <h4 id="phpmyadmin">PHPMyAdmin</h4>
    <p>
      اکثر توسعه‌دهندگان با ابزار مشهور PHPMyAdmin که امکان مدیریت دیتابیس‌های
      MySQL و MariaDB را در محیط وب فراهم می‌کند، آشنا هستند. برای راه‌اندازی
      این ابزار در لیارا تنها کافیست وارد منوی <strong>نحوه‌ی اتصال</strong> به
      دیتابیس شده و گزینه‌ی <strong>راه‌اندازی PHPMyAdmin</strong> را فعال کنید.
    </p>
    <ZoomableImage
      src="/static/databases/mysql-create-4.png"
      alt="آماده شدن دیتابیس"
    />
    <p>
      سپس می‌توانید با کلیک بر روی دکمه‌ی <strong>باز کردن PHPMyAdmin</strong> و
      وارد کردن نام کاربری و رمز عبور دیتابیس‌تان از امکانات این ابزار استفاده
      کنید.
    </p>
    <ZoomableImage
      src="/static/databases/mysql-phpmyadmin.png"
      alt="پنل phpmyadmin"
    />

    <h4 id="database-management-tools">
      مدیریت دیتابیس با استفاده از رابط‌های کاربری گرافیکی (GUI)
    </h4>
    <p>
      حال اگر بخواهید دیتابیس‌های MariaDB را با استفاده از رابط‌های کاربری
      گرافیکی (GUI) مدیریت کنید، می‌توانید از ابزار{" "}
      <a
        href="https://www.mysql.com/products/workbench/"
        target="_blank"
        rel="noopener"
      >
        MySQL Workbench
      </a>
      ،{" "}
      <a href="https://dbeaver.io/" target="_blank" rel="noopener">
        DBeaver
      </a>{" "}
      و یا{" "}
      <a href="https://www.heidisql.com/" target="_blank" rel="noopener">
        HeidiSQL
      </a>{" "}
      استفاده کنید.
    </p>

    <h5 id="mariadb-dbeaver">DBeaver</h5>
    <ZoomableImage src="https://files.liara.ir/docs/mariadb/connect-to-mariadb-database-with-dbeaver.gif" />

    <h4 id="mysql-client">MySQL Command-Line Client</h4>
    <p>
      در صورتی که قصد داشته باشید از طریق خط فرمان سیستم‌عامل خود به دیتابیس‌های
      MySQL و MariaDB متصل شوید می‌توانید ابزار MySQL Command-Line Client را نصب
      کرده و با اجرای دستور زیر به سرویس دیتابیس خود متصل شوید.
    </p>

    <Highlight className="bash">
      {`$ mysql -u DB_USER -pDB_PASSWORD --host DB_HOST --port DB_PORT`}
    </Highlight>

    <Asciinema id="465244" />
  </Layout>
);
