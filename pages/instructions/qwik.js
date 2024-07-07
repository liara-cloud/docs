import Head from "next/head";
import Link from "next/link";
import Highlight from "react-highlight";
import Layout from "../../components/Layout";
import PlatformIcon from "../../components/PlatformIcon";
import ZoomableImage from "../../components/ZoomableImage";
import Notice from "../../components/Notice";

export default () => (
  <Layout>
    <Head>
      <title>استقرار برنامه‌های Qwik - لیارا</title>
    </Head>

    <div className="page-head">
      <PlatformIcon platform="qwik" />
      <div className="page-title">
        <h1>استقرار برنامه‌های Qwik</h1>
        <span className="page-description">(Qwik Apps)</span>
      </div>
    </div>
    <p>
      <a href="https://qwik.dev/">Qwik</a> یک فریم‌ورک جدید در جاوااسکریپت است
      که توسط تیم سازنده‌ی Builder.io توسعه یافته است. این فریم‌ورک طراحی شده
      است تا برنامه‌های وب سریع و بهینه‌ای را با تمرکز بر عملکرد بالا و زمان
      بارگذاری کم ایجاد کند. شما می‌توانید برنامه‌های Qwik را با ایجاد
      برنامه‌های <Link href="/app-deploy/nodejs/getting-started">NodeJS</Link>{" "}
      بر روی لیارا دیپلوی کنید.
    </p>
    <p>
      توجه داشته باشید که برای دیپلوی برنامه‌های Qwik تنها کافیست تا در مسیر
      اصلی پروژه، دستور زیر را اجرا کنید:
    </p>
    <Highlight className="bash">{`npm run qwik add`}</Highlight>

    <p>
      بعد از اجرای این دستور، بایستی گزینه{" "}
      <span className="code">Adapter: Node.js Server</span> را انتخاب کرده و سپس
      گزینه <span className="code">Yes looks good, finish update!</span> را
      بزنید.
    </p>
    <ZoomableImage src="https://files.liara.ir/liara/docs/qwik-create-deployment-files.gif" />

    <p>
      با اجرای دستور فوق، یک‌سری فایل جدید برای شما ایجاد می‌شوند. اکنون بایستی
      اسکریپت <span className="code">start</span> را به شکل زیر تغییر دهید:
    </p>
    <Highlight className="json">{`"scripts": {
    // other scripts
    "start": "node server/entry.node-server",
    // other scripts
  },`}</Highlight>

    <p>
      در نهایت دستور
      <span className="code">liara deploy --port 3000 --platform node</span>
      را اجرا کنید تا برنامه‌ی شما به لیارا منتقل شده و اجرا شود.
    </p>

    <Notice variant="info">
      یک نمونه پروژه‌ی Qwik که آماده مستقر شدن در لیارا است را می‌توانید در{" "}
      <Link href="https://github.com/liara-cloud/qwik-getting-started">
        اینجا
      </Link>{" "}
      مشاهده کنید.{" "}
    </Notice>
  </Layout>
);
