import Layout from "../../../components/Layout";
import Head from "next/head";
import ZoomableImage from "../../../components/ZoomableImage";
import Link from "next/link";

export default () => (
  <Layout>
    <Head>
      <title>NodeJS سرویس ابری لیارا | مستندات استقرار برنامه‌های</title>
    </Head>

    <h1>زبان NodeJS</h1>
    <span className="pageDescription">(NodeJS Language)</span>

    <h3>🚀 شروع به کار</h3>

    <p>
      در این بخش به شما کمک میکنیم که در سریع‌ترین زمان ممکن برنامه NodeJS ای‌
      که نوشتید را روی بستر ابری Liara مستقر کنید. برای راحتی شما با یک مثال
      واقعی تمام مراحل رو پیش میبریم. میتونید این پروژه رو از github دریافت
      کنید: (البته بدون در نظرگرفتن این پروژه تستی نیز میتوانید نحوه استقرار
      برنامه‌ی‌تان را یاد بگیرید.)
      <pre>
        <code>
          {`$ git clone https://github.com/liara-cloud/nodejs-getting-started
$ cd nodejs-getting-started`}
        </code>
      </pre>
    </p>
    <p>
      برای این که مطمئن بشید همه چیز درست کار میکنه کافیه پروژه رو توی سیستم
      خودتون این شکلی اجرا کنید:
      <pre>
        <code>
          {`$ npm install
$ npm start`}
        </code>
      </pre>
      و درنهایت توی مرورگرتون پروژه رو با آدرس
      <span className="code">http://127.0.0.1:8000</span> باز کنید. اگر همه چیز
      درسته یعنی آماد‌ه‌ایم که این برنامه رو روی لیارا مستقر کنیم.
    </p>

    <Link href="/apps/nodejs/deploy">متوجه شدم، برو بعدی!</Link>
  </Layout>
);
