import Layout from "../../../components/Layout";
import Head from "next/head";
import Link from "next/link";

export default () => (
  <Layout>
    <Head>
      <title>Static سرویس ابری لیارا | مستندات استقرار برنامه‌های</title>
    </Head>

    <h1>سایت‌های Static</h1>
    <span className="pageDescription">(Static Sites)</span>
    <p>
      در این بخش به شما کمک میکنیم که در سریع‌ترین زمان ممکن برنامه Static ای‌
      که نوشتید را روی بستر ابری Liara مستقر کنید. برای راحتی شما با یک مثال
      واقعی تمام مراحل رو پیش میبریم. میتونید این پروژه رو از github دریافت
      کنید: (البته بدون در نظرگرفتن این پروژه تستی نیز میتوانید نحوه استقرار
      برنامه‌ی‌تان را یاد بگیرید.)
      <pre>
        <code>
          {`$ git clone https://github.com/liara-cloud/static-getting-started
$ cd static-getting-started`}
        </code>
      </pre>
    </p>
    <p>
      برای این که مطمئن بشید همه چیز درست کار میکنه کافیه فایل{" "}
      <span className="code">index.html</span> رو داخل یک مرورگر باز کنید کنید.
      اگر همه چیز درست نمایش داده میشه، یعنی آماد‌ه‌ایم که این برنامه رو روی
      لیارا مستقر کنیم.
    </p>

    <Link href="/apps/static/deploy">متوجه شدم، برو بعدی!</Link>
  </Layout>
);
