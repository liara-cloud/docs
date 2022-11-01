import Head from "next/head";
import Link from "next/link";
import Layout from "../components/Layout";
import PlatformIcon from "../components/PlatformIcon";

export default () => (
  <Layout>
    <Head>
      <title>مستندات DNS - سرویس ابری لیارا</title>
    </Head>

    <h1>DNS</h1>
    <span className="page-description">(DNS)</span>

    <h3 id="add-domain">اضافه کردن دامنه</h3>

    <p>
      در صورتی که تمایلی به خواندن آموزش متنی ندارید می‌توانید ویدیو‌های آموزشی
      زیر ‌را مشاهده کنید.
    </p>
    <video
      src="https://files.liara.ir/liara/domain/dns.mp4"
      controls="controls"
      className="block w-full"
      width="100%"
    ></video>
  </Layout>
);
