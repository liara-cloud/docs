import Head from "next/head";
import Highlight from "react-highlight";
import Layout from "../../../components/Layout";
import Notice from "../../../components/Notice";
import Asciinema from "../../../components/Asciinema";
import PlatformIcon from "../../../components/PlatformIcon";
import ZoomableImage from "../../../components/ZoomableImage";

export default () => (
  <Layout>
    <Head>
      <title>
        مستندات بازگردانی فایل پشتیبان در دیتابیس‌های MySQL - سرویس ابری لیارا
      </title>
    </Head>

    <div className="page-head">
      <PlatformIcon platform="mysql" />
      <div className="page-title">
        <h1>دیتابیس MySQL</h1>
        <span className="page-description">(MySQL Database)</span>
      </div>
    </div>

    <h3>بازیابی فایل پشتیبان</h3>
    <p>
      ممکن است در زمان انتقال سرویس و یا پس از مواجه شدن با هرگونه Data
      corruption تصمیم بگیرید فایل پشتیبان دیتابیس خود را بازیابی کنید.
    </p>

    <h4 id="phpmyadmin">PHPMyAdmin</h4>
    <p>
      بازیابی فایل پشتیبان در دیتابیس‌های MySQL و MariaDB یکی از قابلیت‌هایی است
      که ابزار مشهور PHPMyAdmin در اختیار شما قرار می‌‌دهد و شما می‌توانید
      به‌شکل زیر از این ابزار برای بازیابی فایل‌های پشتیبان استفاده کنید.
    </p>

    <ZoomableImage src="https://files.liara.ir/docs/mysql/restore-backup-into-mysql-database-with-phpmyadmin.gif" />

    <Notice variant="warning">
      ابزار PHPMyAdmin برای بازیابی فایل‌های پشتیبان سنگین مناسب نیست. به‌همین
      علت توصیه می‌کنیم به‌عنوان جایگزین از ابزار{" "}
      <a href="#mysql-client">MySQL Command-Line Client</a> استفاده کنید.
    </Notice>

    <h4 id="mysql-client">MySQL Command-Line Client</h4>
    <p>
      در صورتی که قصد داشته باشید فایل پشتیبان را از طریق خط فرمان سیستم‌عامل
      خود در دیتابیس‌های MySQL و MariaDB بازیابی کنید می‌توانید به‌شکل زیر از
      ابزار <span className="code">mysql-client</span> استفاده کنید.
    </p>

    <Highlight className="bash">
      {`mysql -u DB_USER -pDB_PASS -h DB_HOST -P DB_PORT < /path/to/backup-file.sql`}
    </Highlight>

    <Asciinema id="465863" />
  </Layout>
);
