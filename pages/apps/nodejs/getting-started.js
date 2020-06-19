import Layout from "../../../components/Layout";
import Head from "next/head";
import ZoomableImage from "../../../components/ZoomableImage";
import Link from "next/link";

export default () => (
  <Layout>
    <Head>
      <title>NodeJS سرویس ابری لیارا | مستندات استقرار برنامه‌های</title>
    </Head>

    <h1>برنامه‌های NodeJS</h1>
    <span className="pageDescription">(NodeJS Apps)</span>

    <h3>🚀 شروع به کار</h3>
    <video
      src="https://files.liara.ir/liara/node.mp4"
      controls="controls"
      className="block w-full"
    ></video>
    <p>
      در این بخش به شما کمک میکنیم که در سریع‌ترین زمان ممکن برنامه NodeJS ای‌
      که نوشتید را روی بستر ابری لیارا مستقر کنید. برای راحتی شما با یک مثال
      واقعی تمام مراحل را پیش میبریم. میتوانید این پروژه را از github دریافت
      کنید: (البته بدون در نظرگرفتن این پروژه تستی نیز میتوانید نحوه استقرار
      برنامه‌ی‌تان را یاد بگیرید.)
    </p>
    <pre>
      <code>
        {`$ git clone https://github.com/liara-cloud/nodejs-getting-started
$ cd nodejs-getting-started`}
      </code>
    </pre>
    <p>
      برای این‌که مطمئن شوید همه چیز درست کار می‌کند، کافیست برنامه را در سیستم
      خودتان به صورت زیر اجرا کنید.
    </p>
    <pre>
      <code>
        {`$ npm install
$ npm start`}
      </code>
    </pre>
    <p>
      و درنهایت داخل مرورگر پروژه را با آدرس
      <span className="code">http://127.0.0.1:8000</span> باز کنید. اگر همه چیز
      درست بود یعنی آماد‌ه‌اید که برنامه را روی لیارا مستقر کنید.
    </p>

    <Link href="/apps/nodejs/deploy">متوجه شدم، برو بعدی!</Link>
  </Layout>
);
