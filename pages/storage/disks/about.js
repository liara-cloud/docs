import Layout from "../../../components/Layout";
import Head from "next/head";
import Link from "next/link";

export default () => (
  <Layout>
    <Head>
      <title>مستندات دیسک‌ها - سرویس ابری لیارا</title>
    </Head>

    <h1>دیسک‌ها</h1>
    <span className="page-description">(Disks)</span>

    <h3>درباره دیسک‌ها</h3>

    <p>
      فایل سیستم برنامه‌های لیارا،{" "}
      <a href="/app-features/file-system">Read-Only</a> است. به عبارتی، بعد از
      عملیات استقرار، امکان ذخیره‌سازی فایل‌های جدید در کنار فایل‌های پروژه،
      وجود ندارد. لیارا امکانی با عنوان «دیسک» دارد که می‌تواند فایل‌های درون
      پوشه‌هایی که شما آن‌ها را مشخص می‌کنید را نگه‌داری کند.
    </p>
    <p>
      برای مثال ممکن است یک پوشه با نام
      <span className="code">uploads</span>
      داشته باشید که می‌توانید آن را به عنوان دیسک تعریف کرده و دیگر نگران از
      بین رفتن فایل‌های درون این پوشه نباشید. در برنامه‌هایی که از Laravel به
      عنوان فریم‌ورک استفاده می‌کنید، ممکن است که پوشه‌ی
      <span className="code">storage</span>
      را به عنوان دیسک تعریف کنید. به همین ترتیب، در برنامه‌های جنگو پوشه‌ی
      <span className="code">media</span>
      را و متناسب با ساختار برنامه‌ی‌تان، پوشه(های) دلخواه‌تان را به یک دیسک
      متصل کنید.
    </p>

    <Link href="/storage/disks/management">متوجه شدم، برو گام بعدی!</Link>
  </Layout>
);
