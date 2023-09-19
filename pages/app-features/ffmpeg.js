import Layout from "../../components/Layout";
import Notice from "../../components/Notice";
import Head from "next/head";

export default () => (
  <Layout>
    <Head>
      <title>ماژول FFMPEG - لیارا</title>
    </Head>

    <h3>ماژول FFMPEG</h3>
    <p>
      در حال حاضر ماژول FFMPEG در پلتفرم‌های زیر نصب شده و متغیر محیطی{" "}
      <span className="code">FFPROBE_PATH</span> به‌صورت پیش‌فرض تنظیم شده است.
    </p>
    <ul>
      <li>Laravel</li>
      <li>Flask</li>
      <li>NodeJS</li>
    </ul>
  </Layout>
);
