import Layout from "../../components/Layout";
import Notice from "../../components/Notice";
import Head from "next/head";

export default () => (
  <Layout>
    <Head>
      <title>اتصال دامنه به فضای ذخیره‌سازی ابری - سرویس ابری لیارا</title>
    </Head>

    <h1>فضای ذخیره‌سازی ابری</h1>

    <h2>اتصال دامنه</h2>
    <p>
      برای اتصال دامنه باید وارد باکت مورد نظرتان شوید و در بخش دامنه‌ها، روی
      گزینه‌ی{" "}
      <strong>
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          style={{ display: "inline" }}
        >
          <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"></path>
        </svg>
        افزودن دامنه
      </strong>{" "}
      کلیک کنید.
    </p>
  </Layout>
);
