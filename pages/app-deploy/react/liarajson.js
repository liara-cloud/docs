import Layout from "../../../components/Layout";
import Link from "next/link";
import Highlight from "react-highlight";
import Head from "next/head";

export default () => (
  <Layout>
    <Head>
      <title>
        مستندات استفاده از فایل liara.json در برنامه‌های React - سرویس ابری
        لیارا
      </title>
    </Head>

    <div className="page-head">
      <img
        className="page-icon"
        src="/static/platformicons/react.svg"
        alt="react"
      />
      <div className="page-title">
        <h1>برنامه‌های ReactJS</h1>
        <span className="page-description">(ReactJS Apps)</span>
      </div>
    </div>

    <h3>
      استفاده‌ از فایل <span className="code">liara.json</span>
    </h3>
    <p>
      شاید پرسیدن شناسه برنامه در هر استقرار برای شما جالب نباشد. برای رفع این
      موضوع می‌توانید از فایل‌ <span className="code">liara.json</span> استفاده
      کنید.
    </p>
    <p>
      کافیست وارد ریشه برنامه‌ی‌تان شده و یک فایل به نام{" "}
      <span className="code">liara.json</span> با این محتوا ایجاد کنید:
    </p>
    <Highlight className="json">
      {`{
  "platform": "react",
  "app": "react-starter"
}
`}
    </Highlight>
    <p>
      در این فایل، پلتفرم و نام برنامه‌ی‌تان را مشخص می‌کنید. لیارا در هر بار
      اجرای دستور <span className="code">liara deploy</span> ابتدا محتویات این
      فایل‌ را چک می‌کند و سپس عملیات استقرار را آغاز می‌کند. توجه داشته باشید
      مقدار app در مثال بالا تستی است و شما متناسب با شناسه برنامه‌ی‌تان باید آن
      را تغییر دهید.
    </p>

    <Link href="/app-deploy/react/update">متوجه شدم، برو گام بعدی!</Link>
  </Layout>
);
