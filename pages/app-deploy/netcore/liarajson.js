import Layout from "../../../components/Layout";
import Link from "next/link";
import Highlight from "react-highlight";
import Head from "next/head";

export default () => (
  <Layout>
    <Head>
      <title>
        مستندات استفاده از فایل liara.json در برنامه‌های .Net Core - سرویس ابری
        لیارا
      </title>
    </Head>

    <div className="page-head">
      <img
        className="page-icon"
        src="/static/platformicons/netcore.svg"
        alt="netcore"
      />
      <div className="page-title">
        <h1>برنامه‌های ASP.Net Core</h1>
        <span className="page-description">(ASP.Net Core Apps)</span>
      </div>
    </div>

    <h3>
      استفاده‌ از فایل <span className="code">liara.json</span>
    </h3>
    <p>
      شاید پرسیدن شناسه برنامه و پورت آن در هر استقرار برای شما جالب نباشد. برای
      این موضوع می‌توانید از فایل‌ <span className="code">liara.json</span>{" "}
      استفاده کنید. اگرچه کاربرد‌های این فایل بیشتر از این‌هاست ولی در اینجا به
      همین نکته بسنده می‌کنیم و در بخش <b>توضیحات و نکات تکمیلی</b> درباره تمام
      کاربرد‌های آن در برنامه‌های ASP.NET Core توضیح داده‌ایم.
    </p>
    <p>
      کافیست وارد ریشه برنامه‌ی‌تان شده و یک فایل به نام{" "}
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
      در این فایل، پلتفرم، پورت و نام برنامه‌ی‌تان را مشخص می‌کنید. لیارا در هر
      بار اجرای دستور <span className="code">liara deploy</span> ابتدا محتویات
      این فایل‌ را چک می‌کند و سپس عملیات استقرار را آغاز می‌کند. توجه داشته
      باشید مقادیر app و port در مثال بالا تستی است و شما متناسب با شناسه و پورت
      برنامه‌ی‌تان باید آن را تغییر دهید.
    </p>

    <Link href="/app-deploy/netcore/update">متوجه شدم، برو گام بعدی!</Link>
  </Layout>
);
