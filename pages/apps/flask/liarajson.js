import Layout from "../../../components/Layout";
import Link from "next/link";
import Head from "next/head";
import Highlight from "react-highlight";

export default () => (
  <Layout>
    <Head>
      <title>Flask سرویس ابری لیارا | مستندات استقرار برنامه‌های</title>
    </Head>

    <h1>فریم‌ورک Flask</h1>
    <span className="pageDescription">(Flask Framework)</span>

    <h3>
      استفاده‌ از فایل <span className="code">liara.json</span>
    </h3>
    <p>
      شاید پرسیدن شناسه برنامه در هر استقرار برای شما جالب نباشد. برای این موضوع
      میتوانید از فایل‌ <span className="code">liara.json</span> استفاده کنید.
      اگرچه کاربرد‌های این فایل بیشتر از این‌هاست ولی در اینجا به همین نکته
      بسنده میکنیم و در بخش <b>توضیحات و نکات تکمیلی</b> درباره تمام کاربرد‌های
      آن در پروژه‌های Laravel ای‌ توضیح داده ایم.
    </p>
    <p>
      کافیست وارد ریشه پروژه‌ی‌تان شده و یک فایل به نام{" "}
      <span className="code">liara.json</span> با این محتوا ایجاد کنید:
    </p>
    <Highlight className="json">
      {`{
  "platform": "flask",
  "app": "flask-starter"
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

    <Link href="/apps/flask/update">متوجه شدم، برو بعدی!</Link>
  </Layout>
);
