import Head from "next/head";
import Link from "next/link";
import Highlight from "react-highlight";
import Layout from "../../components/Layout";
import PlatformIcon from "../../components/PlatformIcon";

export default () => (
  <Layout>
    <Head>
      <title>نحوه استفاده از ابزار Vite - لیارا</title>
    </Head>

    <div className="page-head">
      <PlatformIcon platform="vite" />
      <div className="page-title">
        <h1>نحوه استفاده از ابزار Vite</h1>
        <span className="page-description">(Vite tool)</span>
      </div>
    </div>

    <p>
      <a href="https://vitejs.dev/" target="_blank" rel="noopener noreferrer">
        Vite
      </a>{" "}
      یک build tool برای برنامه‌های فرانت‌اند است که با استفاده از آن می‌توانید
      به فرایند توسعه‌ی برنامه‌‌تان سرعت ببخشید. حال درصورتی که در برنامه‌های
      خود از ابزار Vite استفاده می‌کنید و قصد استقرار برنامه‌تان در لیارا را
      داشته باشید باید با اضافه کردن قطعه‌کد مربوطه در فایل{" "}
      <span className="code">vite.config.js</span>، مسیر ذخیره‌سازی نسخه‌ی نهایی
      برنامه‌تان را ویرایش کنید.
    </p>

    <h2 id="react">برنامه‌های React</h2>

    <Highlight className="javascript">
      {`// vite.config.js

export default {
    // ... rest of configuration
    build: {
        outDir: "build"
    }
}`}
    </Highlight>

    <h2 id="vue">برنامه‌های Vue</h2>

    <Highlight className="javascript">
      {`// vite.config.js

export default {
    // ... rest of configuration
    build: {
        outDir: "dist"
    }
}`}
    </Highlight>
  </Layout>
);
