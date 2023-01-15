import Head from "next/head";
import Highlight from "react-highlight";
import Layout from "../../../components/Layout";
import Asciinema from "../../../components/Asciinema";
import PlatformIcon from "../../../components/PlatformIcon";
import ZoomableImage from "../../../components/ZoomableImage";

export default () => (
  <Layout>
    <Head>
      <title>
        مستندات بازگردانی فایل پشتیبان در دیتابیس‌های MongoDB - لیارا
      </title>
    </Head>

    <div className="page-head">
      <PlatformIcon platform="mongodb" />
      <div className="page-title">
        <h1>دیتابیس MongoDB</h1>
        <span className="page-description">(MongoDB Database)</span>
      </div>
    </div>

    <h3>بازیابی فایل پشتیبان</h3>
    <p>
      برای بازگردانی فایل پشتیبان در دیتابیس‌های MongoDB می‌توانید به‌شکل زیر از
      ابزار <span className="code">mongorestore</span> استفاده کنید.
    </p>

    <Highlight className="bash">
      {`$ mongorestore -u DB_USERNAME \\
               -p DB_PASSWORD \\
               --host DB_HOST \\
               --port DB_PORT \\
               --authenticationDatabase admin \\
               --archive=/path/to/backup-file.dump \\
               --verbose`}
    </Highlight>

    <Asciinema id="465642" />
  </Layout>
);
