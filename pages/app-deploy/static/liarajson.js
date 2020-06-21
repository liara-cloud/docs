import Layout from "../../../components/Layout";
import Link from "next/link";
import Highlight from "react-highlight";
import Head from "next/head";

export default () => (
  <Layout>
    <Head>
      <title>Static سرویس ابری لیارا | مستندات استقرار برنامه‌های</title>
    </Head>

    <h1>برنامه‌های Static</h1>
    <span className="pageDescription">(Static Apps)</span>

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
  "platform": "static",
  "app": "static-starter"
}
`}
    </Highlight>
    <p>
      در این فایل، پلتفرم و نام برنامه‌ی‌تان را مشخص میکنید. لیارا در هربار
      اجرای دستور <span className="code">liara deploy</span> ابتدا محتویات این
      فایل‌ را چک میکند و سپس عملیات استقرار را آغاز میکند. توجه داشته باشید
      مقدار app در مثال بالا تستی میباشد و شما متناسب با شناسه برنامه‌ی‌تان باید
      آن را تغییر دهید.
    </p>

    <Link href="/app-deploy/static/update">متوجه شدم، برو گام بعدی!</Link>
  </Layout>
);
