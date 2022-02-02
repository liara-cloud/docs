import Head from "next/head";
import Highlight from "react-highlight";
import Layout from "../../../components/Layout";
import Asciinema from "../../../components/Asciinema";
import PlatformIcon from "../../../components/PlatformIcon";

export default () => (
  <Layout>
    <Head>
      <title>
        مستندات بازگردانی فایل پشتیبان در دیتابیس‌های Redis - سرویس ابری لیارا
      </title>
    </Head>

    <div className="page-head">
      <PlatformIcon platform="redis" />
      <div className="page-title">
        <h1>دیتابیس Redis</h1>
        <span className="page-description">(Redis key/value Database)</span>
      </div>
    </div>

    <h3>بازیابی فایل پشتیبان</h3>

    <p>
      برای بازگردانی فایل پشتیبان در دیتابیس‌های Redis می‌توانید به‌شکل زیر از
      پکیج{" "}
      <a
        href="https://github.com/sripathikrishnan/redis-rdb-tools"
        target="_blank"
      >
        rdbtools
      </a>{" "}
      و ابزار <span className="code">redis-cli</span> استفاده کنید.
    </p>

    <Highlight className="bash">
      {`$ mysql -u DB_USER -pDB_PASS -h DB_HOST -P DB_PORT < /path/to/backup-file.sql`}
    </Highlight>

    <Asciinema id="466080" />
  </Layout>
);
