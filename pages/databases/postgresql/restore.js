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
        مستندات بازگردانی فایل پشتیبان در دیتابیس‌های PostgreSQL - سرویس ابری
        لیارا
      </title>
    </Head>

    <div className="page-head">
      <PlatformIcon platform="postgres" />
      <div className="page-title">
        <h1>دیتابیس PostgreSQL</h1>
        <span className="page-description">(PostgreSQL Database)</span>
      </div>
    </div>

    <h3>بازیابی فایل پشتیبان</h3>

    <p>
      ممکن است در زمان انتقال سرویس و یا پس از مواجه شدن با هرگونه Data
      corruption تصمیم بگیرید فایل پشتیبان دیتابیس خود را بازیابی کنید.
    </p>

    <h4 id="pgadmin">pgAdmin</h4>

    <p>
      بازیابی فایل پشتیبان در دیتابیس‌های PostgreSQL یکی از قابلیت‌هایی است که
      ابزار pgAdmin در اختیار شما قرار می‌‌دهد و شما می‌توانید به‌شکل زیر از این
      ابزار برای بازیابی فایل‌های پشتیبان استفاده کنید.
    </p>

    <ZoomableImage src="https://files.liara.ir/docs/postgresql/restore-backup-into-postgresql-database-with-pgadmin.gif" />

    <Notice variant="warning">
      برای بازیابی فایل‌های پشتیبان سنگین توصیه می‌کنیم از ابزار{" "}
      <a href="#pg-restore">pg_restore</a> استفاده کنید.
    </Notice>

    <h4 id="pg-restore">pg_restore</h4>
    <p>
      در صورتی که قصد داشته باشید فایل پشتیبان را از طریق خط فرمان سیستم‌عامل
      خود در دیتابیس‌های PostgreSQL بازیابی کنید می‌توانید به‌شکل زیر از ابزار{" "}
      <span className="code">pg_restore</span> استفاده کنید.
    </p>

    <Highlight className="bash">
      {`$ pg_restore -h DB_HOST \\
             -p DB_PORT \\
             -U DB_USERNAME \\
             -F c --create -d postgres /path/to/backup-file.dump`}
    </Highlight>

    <Asciinema id="466058" />

    <Notice variant="info">
      برای کسب اطلاعات بیشتر می‌توانید{" "}
      <a
        href="https://www.postgresql.org/docs/current/app-pgrestore.html"
        target="_blank"
      >
        مستندات ابزار pg_restore
      </a>{" "}
      را مطالعه کنید.
    </Notice>
  </Layout>
);
