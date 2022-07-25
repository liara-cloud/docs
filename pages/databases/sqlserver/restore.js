import Head from "next/head";
import Link from "next/link";
import Layout from "../../../components/Layout";
import PlatformIcon from "../../../components/PlatformIcon";

export default () => (
  <Layout>
    <Head>
      <title>
        مستندات بازگردانی فایل پشتیبان در دیتابیس‌های SQL Server - سرویس ابری
        لیارا
      </title>
    </Head>

    <div className="page-head">
      <PlatformIcon platform="mssql" />
      <div className="page-title">
        <h1>دیتابیس SQL Server</h1>
        <span className="page-description">(SQL Server Database)</span>
      </div>
    </div>

    <h3>بازیابی فایل پشتیبان</h3>
    <p>
      برای بازیابی فایل پشتیبان در دیتابیس‌های SQL Server می‌توانید وارد صفحه‌ی
      پشتیبان‌گیری دیتابیس خود شده و با کلیک روی گزینه‌ی{" "}
      <strong>
        بازیابی فایل{" "}
        <div style={{ direction: "ltr", display: "inline-block" }}>.bak</div>
      </strong>{" "}
      آدرس مستقیم فایل پشتیبان خود را وارد کنید. شما می‌توانید فایل پشتیبان را
      در <Link href="/buckets/about">فضای ذخیره‌سازی ابری</Link> آپلود کرده و
      درنهایت آدرس مستقیم فایل پشتیبان را در این قسمت وارد کنید. لیارا به‌صورت
      خودکار فایل پشتیبان را در مسیر{" "}
      <span className="code">/var/opt/mssql/data</span> قرار می‌دهد و شما
      می‌توانید با استفاده از ابزار SSMS (SQL Server Management Studio)، فایل
      پشتیبان را از این مسیر در دیتابیس خود بازیابی کنید.
    </p>
  </Layout>
);
