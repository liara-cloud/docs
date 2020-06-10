import Layout from "../../../components/Layout";
import Link from "next/link";
import Head from "next/head";
import ZoomableImage from "../../../components/ZoomableImage";
import Highlight from "react-highlight";

export default () => (
  <Layout>
    <Head>
      <title>NodeJS سرویس ابری لیارا | مستندات استقرار برنامه‌های</title>
    </Head>
    <h1>زبان NodeJS</h1>
    <span className="pageDescription">(NodeJS Language)</span>

    <h3>
      استفاده‌ از فایل <span className="code">liara.json</span>
    </h3>
    <p>
      شاید پرسیدن شناسه برنامه یا پورت آن در هر استقرار برای شما جالب نباشد.
      برای این موضوع میتوانید از فایل‌ <span className="code">liara.json</span>{" "}
      استفاده کنید. اگرچه کاربرد‌های این فایل بیشتر از این‌هاست ولی در اینجا به
      همین نکته بسنده میکنیم و در بخش <b>توضیحات و نکات تکمیلی</b> درباره تمام
      کاربرد‌های آن در پروژه‌های NodeJS توضیح داده ایم.
    </p>
    <p>
      کافیست وارد ریشه پروژه‌ی‌تان شده و یک فایل به نام{" "}
      <span className="code">liara.json</span> با این محتوا ایجاد کنید:
    </p>
    <Highlight className="json">
      {`{
  "platform": "node",
  "app": "nodejs-starter",
  "port": 8000
}
`}
    </Highlight>
    <p>
      در این فایل برای پروژه تستی‌مان پلتفرم، پورت و نام برنامه‌ی‌مان را مشخص
      کرده‌ایم. لیارا در هربار اجرای دستور{" "}
      <span className="code">liara deploy</span> ابتدا محتویات این فایل‌ را چک
      میکند و سپس عملیات استقرار را آغاز میکند. توجه داشته باشید مقادیر app و
      port در مثال بالا متناسب با شناسه و پورت برنامه‌ی‌ تستی‌مان میباشد و شما
      متناسب با شناسه و پورت برنامه‌ی‌تان باید آن را تغییر دهید.
    </p>

    <Link href="/apps/nodejs/update">متوجه شدم، برو بعدی!</Link>
  </Layout>
);
