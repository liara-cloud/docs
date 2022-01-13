import Link from "next/link";
import Head from "next/head";
import Highlight from "react-highlight";
import Layout from "../../../components/Layout";
import ProjectIcon from "../../../components/ProjectIcon";

export default () => (
  <Layout>
    <Head>
      <title>
        مستندات استفاده از فایل liara.json در برنامه‌های .Net Core - سرویس ابری
        لیارا
      </title>
    </Head>

    <div className="page-head">
      <ProjectIcon platform="netcore" />
      <div className="page-title">
        <h1>برنامه‌های ASP.Net Core</h1>
        <span className="page-description">(ASP.Net Core Apps)</span>
      </div>
    </div>

    <h3>
      استفاده‌ از فایل <span className="code">liara.json</span>
    </h3>
    <p>
      شاید پرسیدن شناسه برنامه در هر استقرار برای شما جالب نباشد. برای
      این موضوع می‌توانید از فایل‌ <span className="code">liara.json</span>{" "}
      استفاده کنید. اگرچه کاربرد‌های این فایل بیشتر از این‌هاست ولی در اینجا به
      همین نکته بسنده می‌کنیم و در بخش <Link href="/app-deploy/netcore/tips">توضیحات و نکات تکمیلی</Link> درباره تمام
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
