import Layout from "../../../components/Layout";
import Head from "next/head";
import Link from "next/link";
import Notice from "../../../components/Notice";

export default () => (
  <Layout>
    <Head>
      <title>مستندات شروع به کار برنامه‌های NodeJS - سرویس ابری لیارا</title>
    </Head>

    <div className="page-head">
      <img
        className="page-icon"
        src="/static/platformicons/nodejs.svg"
        alt="nodejs"
      />
      <div className="page-title">
        <h1>برنامه‌های NodeJS</h1>
        <span className="page-description">(NodeJS Apps)</span>
      </div>
    </div>

    <h3>🚀 شروع به کار</h3>
    <p>
      در صورتی که تمایلی به خواندن آموزش متنی ندارید می‌توانید ویدیوی آموزشی زیر
      ‌را مشاهده کنید.
    </p>
    <video
      src="https://files.liara.ir/liara/node.mp4"
      controls="controls"
      className="block w-full"
      width="100%"
    ></video>

    <p>
      در این بخش به شما کمک می‌کنیم که بتوانید در سریع‌ترین زمان ممکن، یک برنامه
      NodeJS را روی بستر ابری لیارا مستقر کنید. در هر گام، شما با یک ویژگی در
      لیارا آشنا می‌شوید و می‌توانید از آن‌ها در برنامه‌ی‌تان استفاده کنید.
    </p>
    {/* <Notice variant="info"> */}
    <p>
      در حال حاضر، این نسخه‌ها از NodeJS در سرویس ابری لیارا پشتیبانی می‌شود:
    </p>
    <ul dir="ltr">
      <li>8</li>
      <li>10</li>
      <li>12</li>
      <li>14</li>
    </ul>
    <Notice variant="info">
      برنامه‌های NextJS و NuxtJS را هم می‌توانید بدون تنظیمات خاصی در بخش
      برنامه‌های NodeJS مستقر کنید.
    </Notice>

    {/* <p>
      در این بخش به شما کمک می‌کنیم که در سریع‌ترین زمان ممکن برنامه NodeJS ای‌
      که نوشتید را روی بستر ابری لیارا مستقر کنید. برای راحتی شما با یک مثال
      واقعی تمام مراحل را پیش میبریم. می‌توانید این برنامه را از github دریافت
      کنید: (البته بدون در نظرگرفتن این برنامه تستی نیز می‌توانید نحوه استقرار
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
      و درنهایت داخل مرورگر برنامه را با آدرس
      <span className="code">http://127.0.0.1:8000</span> باز کنید. اگر همه چیز
      درست بود یعنی آماد‌ه‌اید که برنامه را روی لیارا مستقر کنید.
    </p> */}

    <Notice variant="info">
      اگر قصد دارید نسخه‌ی پیش‌فرض NodeJS را تغییر دهید
      و یا در رابطه با نحوه‌ی استقرار فریم‌ورک AdonisJS
      بدانید، صفحه‌ی
      {' '}
      <Link href="/app-deploy/nodejs/tips">توضیحات و نکات تکمیلی</Link>
      {' '}
      را مطالعه بفرمایید.
    </Notice>

    <br />

    <Link href="/app-deploy/nodejs/deploy">متوجه شدم، برو گام بعدی!</Link>
  </Layout>
);
