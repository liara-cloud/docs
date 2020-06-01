import Layout from "../../../components/Layout";
import Link from "next/link";
import Highlight from "react-highlight";
import Head from "next/head";

export default () => (
  <Layout>
    <Head>
      <title>Angular سرویس ابری لیارا | مستندات استقرار برنامه‌های</title>
    </Head>

    <h1>برنامه‌های Angular</h1>
    <span className="pageDescription">(Angular Apps)</span>

    <h3>
      استفاده‌ از فایل <span className="code">liara.json</span>
    </h3>
    <p>
      شاید پرسیدن شناسه برنامه در هر استقرار برای شما جالب نباشد. برای این موضوع
      میتوانید از فایل‌ <span className="code">liara.json</span> استفاده کنید.
    </p>
    <p>
      کافیست وارد ریشه پروژه‌ی‌تان شده و یک فایل به نام{" "}
      <span className="code">liara.json</span> با این محتوا ایجاد کنید:
    </p>
    <Highlight className="json">
      {`{
  "platform": "angular",
  "app": "angular-starter"
}
`}
    </Highlight>
    <p>
      در این فایل برای پروژه تستی‌مان پلتفرم و نام برنامه‌ی‌مان را مشخص
      کرده‌ایم. لیارا در هربار اجرای دستور{" "}
      <span className="code">liara deploy</span> ابتدا محتویات این فایل‌ را چک
      میکند و سپس عملیات استقرار را آغاز میکند. توجه داشته باشید مقدار app در
      این فایل برابر شناسه پروژه تستی‌مان میباشد و شما متناسب با شناسه
      برنامه‌ی‌تان باید آن را تغییر دهید.
    </p>

    <Link href="/apps/angular/update">متوجه شدم، برو بعدی!</Link>
  </Layout>
);
