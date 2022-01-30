import Head from "next/head";
import Highlight from "react-highlight";
import Layout from "../../../components/Layout";
import Asciinema from "../../../components/Asciinema";
import PlatformIcon from "../../../components/PlatformIcon";
import ZoomableImage from "../../../components/ZoomableImage";

export default () => (
  <Layout>
    <Head>
      <title>مستندات اتصال به دیتابیس‌های PostgreSQL - سرویس ابری لیارا</title>
    </Head>

    <div className="page-head">
      <PlatformIcon platform="postgres" />
      <div className="page-title">
        <h1>دیتابیس PostgreSQL</h1>
        <span className="page-description">(PostgreSQL Database)</span>
      </div>
    </div>

    <h3>راه‌های اتصال به PostgreSQL</h3>
    <p>
      پس از نصب و راه‌اندازی یک دیتابیس جدید نوبت به مدیریت آن می‌رسد و شما
      می‌توانید برای مشاهده و مدیریت داده‌های دیتابیس‌های PostgreSQL یکی از
      ابزارهای زیر را انتخاب کنید.
    </p>
    <h4 id="pgadmin">PGAdmin</h4>
    <p>
      ابزار PGAdmin امکان مدیریت دیتابیس‌های PostgreSQL را در محیط وب فراهم
      می‌کند. برای راه‌اندازی این ابزار در لیارا تنها کافیست وارد منوی{" "}
      <strong>نحوه‌ی اتصال</strong> به دیتابیس شده و گزینه‌ی{" "}
      <strong>راه‌اندازی PGAdmin</strong> را فعال کنید.
    </p>
    <ZoomableImage
      src="/static/databases/pgadmin.png"
      alt="آماده شدن دیتابیس"
    />
    <p>
      سپس می‌توانید با کلیک بر روی دکمه‌ی <strong>بازکردن PGAdmin</strong> و
      وارد کردن اطلاعات اتصال به دیتابیس‌تان از امکانات این ابزار استفاده کنید.
    </p>

    <h4 id="database-management-tools">
      مدیریت دیتابیس با استفاده از رابط‌های کاربری گرافیکی (GUI)
    </h4>
    <p>
      حال اگر بخواهید دیتابیس‌های PostgreSQL را با استفاده از رابط‌های کاربری
      گرافیکی (GUI) مدیریت کنید، می‌توانید ابزار{" "}
      <a href="https://dbeaver.io/" target="_blank" rel="noopener">
        DBeaver
      </a>{" "}
      و یا{" "}
      <a href="https://www.heidisql.com/" target="_blank" rel="noopener">
        HeidiSQL
      </a>{" "}
      را انتخاب کنید.
    </p>

    <h5 id="postgresql-dbeaver">DBeaver</h5>
    <ZoomableImage src="https://files.liara.ir/docs/postgresql/connect-to-postgresql-database-with-dbeaver.gif" />

    <h4 id="psql">psql</h4>
    <p>
      در صورتی که قصد داشته باشید از طریق خط فرمان سیستم‌عامل خود به دیتابیس‌های
      PostgreSQL متصل شوید می‌توانید ابزار PostgreSQL Client را نصب کرده و با
      اجرای دستور زیر به سرویس دیتابیس خود متصل شوید.
    </p>

    <Highlight className="bash">{`$ psql -h DB_HOST -p DB_PORT -U DB_USERNAME -W postgres`}</Highlight>
    <p>بعد از وارد کردن دستور فوق، رمز عبور دیتابیس از شما پرسیده خواهد شد..</p>

    <Asciinema id="465245" />
  </Layout>
);
