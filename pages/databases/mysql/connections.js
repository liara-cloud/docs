import Head from "next/head";
import Highlight from "react-highlight";
import Layout from "../../../components/Layout";
import Asciinema from "../../../components/Asciinema";
import PlatformIcon from "../../../components/PlatformIcon";
import ZoomableImage from "../../../components/ZoomableImage";

export default () => (
  <Layout>
    <Head>
      <title>مستندات اتصال به دیتابیس‌های MySQL - لیارا</title>
    </Head>

    <div className="page-head">
      <PlatformIcon platform="mysql" />
      <div className="page-title">
        <h1>دیتابیس MySQL</h1>
        <span className="page-description">(MySQL Database)</span>
      </div>
    </div>

    <h3>راه‌های اتصال به MySQL</h3>
    <p>
      پس از نصب و راه‌اندازی یک دیتابیس جدید نوبت به مدیریت آن می‌رسد و شما
      می‌توانید برای مشاهده و مدیریت داده‌های دیتابیس‌های MySQL، یکی از ابزارهای
      زیر را انتخاب کنید.
    </p>
    <h4 id="phpmyadmin">phpMyAdmin</h4>

    <video
      src="https://files.liara.ir/liara/mysql/mysql-phpmyadmin.mp4"
      controls="controls"
      className="block w-full"
      width="100%"
    ></video>

    <h4 id="database-management-tools">
      مدیریت دیتابیس با استفاده از رابط‌های کاربری گرافیکی (GUI)
    </h4>

    <p>
      حال اگر بخواهید دیتابیس‌های MySQL را با استفاده از رابط‌های کاربری گرافیکی
      (GUI) مدیریت کنید، می‌توانید از ابزار{" "}
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

    <h5 id="mysql-dbeaver">DBeaver</h5>
    <video
      src="https://files.liara.ir/liara/mysql/mysql-dbeaver.mp4"
      controls="controls"
      className="block w-full"
      width="100%"
    ></video>

    <h5 id="mysql-mysql-workbench">MySQL Workbench</h5>
    <video
      src="https://files.liara.ir/liara/mysql/mysql-workbench.mp4"
      controls="controls"
      className="block w-full"
      width="100%"
    ></video>

    <h4 id="mysql-client">MySQL Command-Line Client</h4>
    <p>
      در صورتی که قصد داشته باشید از طریق خط فرمان سیستم‌عامل خود به دیتابیس‌های
      MySQL و MariaDB متصل شوید می‌توانید ابزار MySQL Command-Line Client را نصب
      کرده و با اجرای دستور زیر به سرویس دیتابیس خود متصل شوید.
    </p>

    <Highlight className="bash">
      {`$ mysql -u DB_USER -pDB_PASSWORD --host DB_HOST --port DB_PORT`}
    </Highlight>

    <video
      src="https://files.liara.ir/liara/mysql/mysql-cmd.mp4"
      controls="controls"
      className="block w-full"
      width="100%"
    ></video>
  </Layout>
);
