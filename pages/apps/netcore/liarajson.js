import Layout from "../../../components/Layout";
import Link from "next/link";
import Highlight from "react-highlight";
import Head from "next/head";

export default () => (
  <Layout>
    <Head>
      <title>ASP .Net Core سرویس ابری لیارا | مستندات استقرار برنامه‌های</title>
    </Head>

    <h1>پلتفرم ASP .Net Core</h1>
    <span className="pageDescription">(ASP .Net Core Platform)</span>
    <h3>
      استفاده‌ از فایل <span className="code">liara.json</span>
    </h3>
    <p>
      شاید پرسیدن شناسه برنامه و پورت آن در هر استقرار برای شما جالب نباشد. برای
      این موضوع میتوانید از فایل‌ <span className="code">liara.json</span>{" "}
      استفاده کنید. اگرچه کاربرد‌های این فایل بیشتر از این‌هاست ولی در اینجا به
      همین نکته بسنده میکنیم و در بخش <b>توضیحات و نکات تکمیلی</b> درباره تمام
      کاربرد‌های آن در پروژه‌های ASP.NET Core توضیح داده ایم.
    </p>
    <p>
      کافیست وارد ریشه پروژه‌ی‌تان شده و یک فایل به نام{" "}
      <span className="code">liara.json</span> با این محتوا ایجاد کنید:
    </p>
    <Highlight className="json">
      {`{
  "platform": "netcore",
  "app": "dotnets-starter",
  "port": "5000"
}
`}
    </Highlight>
    <p>
      در این فایل برای پروژه تستی‌مان پلتفرم و نام برنامه‌ی‌مان به همراه پورت
      اجرایی آن را مشخص کرده‌ایم. لیارا در هربار اجرای دستور{" "}
      <span className="code">liara deploy</span> ابتدا محتویات این فایل‌ را چک
      میکند و سپس عملیات استقرار را آغاز میکند. توجه داشته باشید مقدار port و
      app در این فایل برابر شناسه و پورت پروژه تستی‌مان میباشد و شما متناسب با
      شناسه برنامه‌ی‌تان باید آن را تغییر دهید.
    </p>

    <Link href="/apps/netcore/update">متوجه شدم، برو بعدی!</Link>
  </Layout>
);
