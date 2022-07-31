import Layout from "../../components/Layout";
import Notice from "../../components/Notice";
import Head from "next/head";

export default () => (
  <Layout>
    <Head>
      <title>اتصال دامنه به فضای ذخیره‌سازی ابری - سرویس ابری لیارا</title>
    </Head>

    <h1>فضای ذخیره‌سازی ابری</h1>

    <h2>اتصال دامنه</h2>
    <p>
      برای اتصال دامنه باید وارد باکت مورد نظرتان شوید و در بخش{" "}
      <strong>دامنه‌ها</strong>، روی گزینه‌ی{" "}
      <strong>
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          style={{ display: "inline" }}
        >
          <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"></path>
        </svg>
        افزودن دامنه
      </strong>{" "}
      کلیک کنید. حال در صفحه‌ی <strong>اتصال دامنه جدید</strong> می‌توانید نام
      دامنه‌تان را وارد کرده و روی گزینه‌ی <strong>ایجاد دامنه</strong> کلیک
      کنید تا دامنه‌تان در لیارا اضافه شود.
    </p>

    <p>
      بعد از اضافه کردن دامنه باید رکوردهای DNS درخواست شده را تنظیم کنید. در
      صورتی که به دنبال سرویس DNS خاصی برای مدیریت رکوردهای DNS دامنه‌تان هستید،
      ما به شما سرویس رایگان{" "}
      <a
        href="https://www.cloudflare.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Cloudflare
      </a>{" "}
      را پیشنهاد می‌کنیم.
    </p>

    <p>
      بعد از تنظیم رکوردهای DNS، روی گزینه‌ی{" "}
      <strong>بررسی وضعیت رکوردها</strong> کلیک کنید. اگر وضعیت رکوردها از قرمز
      به سبز تغییر پیدا کرد یعنی اتصال با موفقیت برقرار شده است.
    </p>
  </Layout>
);
