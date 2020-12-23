import Layout from "../../../components/Layout";
import Head from "next/head";
import Link from "next/link";
import Notice from "../../../components/Notice";

export default () => (
  <Layout>
    <Head>
      <title>مستندات دیسک‌ها - سرویس ابری لیارا</title>
    </Head>

    <h1>دیسک‌ها</h1>
    <span className="page-description">(Disks)</span>

    <h3>درباره دیسک‌ها</h3>

    <Notice variant="warning">
      توجه کنید که اگر قبلا از قابلیت
      <span className="code">volume</span>
      استفاده می‌کردید، این قابلیت منسوخ شده و به دیسک تغییر نام داده شده‌است.
      اما شما می‌توانید بدون نیاز به اقدامی، همچنان از همان قابلیت استفاده کنید.
      <br />
      برای مهاجرت از
      <span className="code">volume</span>
      به دیسک‌ها،{" "}
      <Link href="/storage/disks/management#migrate">
        این بخش را مطالعه کنید.
      </Link>
    </Notice>

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

    <Notice variant="info">
      برای استفاده از این قابلیت، Liara CLI باید دارای نسخه‌ی 2.4.0 یا بالاتر
      باشد.{" "}
      <Link href="/cli/install">
        راهنمای نصب و ارتقا CLI
      </Link>
    </Notice>
  </Layout>
);
