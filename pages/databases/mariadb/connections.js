import Head from "next/head";
import Highlight from "react-highlight";
import Layout from "../../../components/Layout";
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

    <h4 id="mysql-workbench">MySQL Workbench</h4>
    <p>
      حال اگر بخواهید سرویس دیتابیس را در محیط سیستم‌عامل مدیریت کنید می‌توانید
      یکی از ابزارهای{" "}
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
      یا{" "}
      <a href="https://www.heidisql.com/" target="_blank" rel="noopener">
        HeidiSQL
      </a>{" "}
      را انتخاب کنید. اتصال به دیتابیس با استفاده از این ابزارها بسیار ساده است
      و برای مثال در ابزار MySQL Workbench پس از وارد کردن اطلاعات اتصال به
      دیتابیس می‌توانید روی دکمه‌ی <strong>Test Connection</strong> کلیک کرده و
      به این شکل از صحت اطلاعات وارد شده اطمینان حاصل کنید. درنهایت می‌توانید
      روی گزینه‌ی <strong>OK</strong> کلیک کنید تا امکان مدیریت داده‌های سرویس
      دیتابیس و استفاده از امکانات این ابزار برای شما فراهم شود.
    </p>
    <ZoomableImage
      src="/static/databases/mysql-workbrench.png"
      alt="پنل phpmyadmin"
    />
    <h4 id="mysql-client">MySQL Command-Line Client</h4>
    <p>
      در صورتی که قصد داشته باشید از طریق خط فرمان سیستم‌عامل خود به دیتابیس‌های
      MySQL و MariaDB متصل شوید می‌توانید ابزار MySQL Command-Line Client را نصب
      کرده و با اجرای دستور زیر به سرویس دیتابیس خود متصل شوید.
    </p>

    <Highlight className="bash">
      {`$ mysql -u DB_USER -pDB_PASSWORD --host DB_HOST --port DB_PORT`}
    </Highlight>

    <br />

    <ZoomableImage src="/static/databases/mysql-cli.png" alt="mysql cli" />
  </Layout>
);
