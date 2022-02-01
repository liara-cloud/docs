import Head from "next/head";
import Highlight from "react-highlight";
import Layout from "../../../components/Layout";
import Asciinema from "../../../components/Asciinema";
import PlatformIcon from "../../../components/PlatformIcon";

export default () => (
  <Layout>
    <Head>
      <title>
        مستندات بازگردانی فایل پشتیبان در دیتابیس‌های MariaDB - سرویس ابری لیارا
      </title>
    </Head>

    <div className="page-head">
      <PlatformIcon platform="mariadb" />
      <div className="page-title">
        <h1>دیتابیس MariaDB</h1>
        <span className="page-description">(MariaDB Database)</span>
      </div>
    </div>

    <h3>بازیابی فایل پشتیبان</h3>

    <p>
      برای بازگردانی فایل پشتیبان در دیتابیس‌های MariaDB می‌توانید به‌شکل زیر از
      ابزار <span className="code">mysql-client</span> استفاده کنید.
    </p>

    <Highlight className="bash">
      {`$ mysql -u DB_USER -pDB_PASS -h DB_HOST -P DB_PORT < /path/to/backup-file.sql`}
    </Highlight>

    <Asciinema id="465864" />
  </Layout>
);
