import Link from "next/link";
import Head from "next/head";
import Highlight from "react-highlight";
import Layout from "../../../components/Layout";
import PlatformIcon from "../../../components/PlatformIcon";

export default () => (
  <Layout>
    <Head>
      <title>
        مستندات استفاده از فایل liara.json در برنامه‌های Golang - سرویس ابری
        لیارا
      </title>
    </Head>

    <div className="page-head">
      <PlatformIcon platform="go" />
      <div className="page-title">
        <h1>پلتفرم Golang</h1>
        <span className="page-description">(Golang Platform)</span>
      </div>
    </div>

    <h3>
      استفاده‌ از فایل <span className="code">liara.json</span>
    </h3>
    <p>
      شاید پرسیدن شناسه و پورت برنامه در هر استقرار برای شما جالب نباشد. برای
      رفع این موضوع می‌توانید از فایل‌ <span className="code">liara.json</span>{" "}
      استفاده کنید. اگرچه کاربرد‌های این فایل بیشتر از این‌هاست ولی در اینجا به
      همین نکته بسنده می‌کنیم و در بخش <b>توضیحات و نکات تکمیلی</b> درباره تمام
      کاربرد‌های آن در برنامه‌های Golang توضیح داده‌ایم.
    </p>
    <p>
      کافیست وارد ریشه برنامه‌ی‌تان شده و یک فایل به نام{" "}
      <span className="code">liara.json</span> با این محتوا ایجاد کنید:
    </p>
    <Highlight className="json">
      {`{
  "platform": "docker",
  "app": "go-blog",
  "port": 8080
}
`}
    </Highlight>
    <p>
      در این فایل، پلتفرم و شناسه و پورت برنامه‌ی‌تان را مشخص می‌کنید. لیارا در
      هر بار اجرای دستور <span className="code">liara deploy</span> ابتدا
      محتویات این فایل‌ را چک می‌کند و سپس عملیات استقرار را آغاز می‌کند. توجه
      داشته باشید مقدار app و port در مثال بالا تستی است و شما متناسب با شناسه و
      پورت برنامه‌ی‌تان باید آن را تغییر دهید.
    </p>

    <Link href="/app-deploy/golang/update" className="next-page">
      متوجه شدم، برو گام بعدی!
    </Link>
  </Layout>
);
