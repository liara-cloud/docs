import Head from "next/head";
import Highlight from "react-highlight";
import Layout from "../../../components/Layout";
import Notice from "../../../components/Notice";
import Asciinema from "../../../components/Asciinema";
import PlatformIcon from "../../../components/PlatformIcon";

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
      برای بازگردانی فایل پشتیبان در دیتابیس‌های PostgreSQL می‌توانید به‌شکل زیر
      از ابزار <span className="code">pg_restore</span> استفاده کنید.
    </p>

    <Highlight className="bash">
      {`$ pg_restore -h DB_HOST -p DB_PORT -U DB_USERNAME -F c --create -d postgres /path/to/backup-file.dump`}
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
