import Head from "next/head";
import Highlight from "react-highlight";
import Notice from "../../../components/Notice";
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

    <h3>بازیابی فایل پشتیبان با ابزار mongorestore</h3>
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

    <h3>بازیابی فایل پشتیبان از طریق MongoDB Compass</h3>

    <Notice variant="warning">
      توجه داشته باشید از فایل‌هایی با فرمت‌های{" "}
      <span className="code">CSV</span> و <span className="code">JSON</span>
      برای بازگردانی فایل‌های پشتیبان از طریق{" "}
      <span className="code">MongoDB Compass</span> استفاده می‌شود.
    </Notice>

    <p>
      برای بازگردانی فایل‌های پشتیبان وارد نرم افزار{" "}
      <span className="code">MongoDB Compass</span> شده و طریق شبکه عمومی به
      دیتابیس‌تان متصل شوید، سپس بعد از انتخاب دیتابیس مورد نظر، کالکشن مورد نظر
      را انتخاب کنید و فایل پشتیبانی‌تان را انتخاب کنید.
    </p>

    <ZoomableImage src="https://files.liara.ir/docs/mongodb/compass-restore.gif" />
  </Layout>
);
