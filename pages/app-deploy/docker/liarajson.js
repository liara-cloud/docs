import Layout from "../../../components/Layout";
import Link from "next/link";
import Head from "next/head";
import Highlight from "react-highlight";

export default () => (
  <Layout>
    <Head>
      <title>
        مستندات استفاده از فایل liara.json در برنامه‌های Docker - سرویس ابری
        لیارا
      </title>
    </Head>

    <div className="page-head">
      <img
        className="page-icon"
        src="/static/platformicons/docker.svg"
        alt="docker"
      />
      <div className="page-title">
        <h1>برنامه‌های Docker</h1>
        <span className="page-description">(Docker Apps)</span>
      </div>
    </div>

    <h3>
      استفاده‌ از فایل <span className="code">liara.json</span>
    </h3>
    <p>
      شاید پرسیدن شناسه برنامه یا پورت آن در هر استقرار برای شما جالب نباشد.
      برای رفع این موضوع می‌توانید از فایل‌{" "}
      <span className="code">liara.json</span> استفاده کنید. اگرچه کاربرد‌های
      این فایل شامل نکات بیشتری می‌شود که در بخش‌های بعد بیشتر به آن‌ها
      می‌پردازیم.
    </p>
    <p>
      کافیست وارد ریشه برنامه‌ی‌تان شده و یک فایل به نام{" "}
      <span className="code">liara.json</span> با این محتوا ایجاد کنید:
    </p>
    <Highlight className="json">
      {`{
  "platform": "docker",
  "app": "docker-starter",
  "port": 8000
}
`}
    </Highlight>
    <p>
      در این فایل، پلتفرم، پورت و نام برنامه‌ی‌تان را مشخص می‌کنید. لیارا در هر
      بار اجرای دستور <span className="code">liara deploy</span> ، ابتدا محتویات
      این فایل‌ را چک می‌کند و سپس عملیات استقرار را آغاز می‌کند. توجه داشته
      باشید مقادیر <span className="code">app</span> و{" "}
      <span className="code">port</span> در مثال بالا تستی است و شما متناسب با
      شناسه و پورت برنامه‌ی‌تان باید آن را تغییر دهید.
    </p>

    <Link href="/app-deploy/docker/update">متوجه شدم، برو گام بعدی!</Link>
  </Layout>
);
