import Layout from "../../components/Layout";
import ZoomableImage from "../../components/ZoomableImage";
import Head from "next/head";

export default () => (
  <Layout>
    <Head>
      <title>سرویس ابری لیارا | مستندات کنسول - ssh - console</title>
    </Head>

    <h1>کنسول / خط‌فرمان</h1>
    <span className="pageDescription">(Console - Terminal)</span>

    <p>
      در اکثر برنامه‌ها، لازم است که بعد از مستقر کردن روی سرور، یک سری کارها
      انجام شود. برای مثال ممکن است بخواهید دیتابیس را با داده‌های اولیه پر کنید
      و یا ساختار جداول را ایجاد کنید (migrations). کنسول بهترین جایی است که
      می‌توانید دستوراتی که معمولا یک بار لازم است اجرا شوند را اجرا کنید.
    </p>

    <h3>دسترسی به کنسول</h3>
    <p>
      با مراجعه به فهرست «برنامه‌ها»، روی برنامه‌ی مورد نظرتان کلیک کنید.
      <br />
      سپس روی گزینه‌ی کنسول از فهرست سمت راست کلیک کنید تا وارد صفحه‌ی کنسول
      شوید.
    </p>
    <ZoomableImage src="/static/console2.png" alt="صفحه‌ی کنسول" />
    <p>
      در این صفحه، با کلیک کردن روی دکمه‌ی «اتصال»، به کنسول متصل شده و یک
      ترمینال برای‌تان اجرا خواهد شد.
      <br />
      این ترمینال،
      <span className="code">/bin/bash</span>
      را اجرا می‌کند. بنابراین می‌توانید هر دستوری که در bash قابل اجرا است را
      وارد نمایید.
    </p>
    <ZoomableImage src="/static/console1.png" alt="صفحه‌ی ترمینال" />
  </Layout>
);
