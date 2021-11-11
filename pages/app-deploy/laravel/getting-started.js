import Layout from "../../../components/Layout";
import Link from "next/link";
import Head from "next/head";
import Notice from "../../../components/Notice";

export default () => (
  <Layout>
    <Head>
      <title>مستندات شروع به کار برنامه‌های Laravel - سرویس ابری لیارا</title>
    </Head>

    <div className="page-head">
      <img
        className="page-icon"
        src="/static/platformicons/laravel.svg"
        alt="laravel"
      />
      <div className="page-title">
        <h1>برنامه‌های Laravel</h1>
        <span className="page-description">(Laravel Apps)</span>
      </div>
    </div>

    <h3>🚀 شروع به کار</h3>
    <p>
      در صورتی که تمایلی به خواندن آموزش متنی ندارید می‌توانید ویدیوی آموزشی زیر
      ‌را مشاهده کنید.
    </p>
    <video
      src="https://files.liara.ir/liara/laravel.mp4"
      controls="controls"
      className="block w-full"
      width="100%"
    ></video>
    <p>
      در این بخش به شما کمک می‌کنیم که در سریع‌ترین زمان ممکن برنامه Laravel ای‌
      که نوشتید را روی بستر ابری لیارا مستقر کنید. در هر گام، شما با یک قابلیت
      مهم در لیارا آشنا می‌شوید و می‌توانید از آن‌ها در استقرار برنامه‌ی‌تان
      استفاده کنید.
    </p>
    {/* <Notice variant="info"> */}
    <p>
      در حال حاضر، این نسخه‌ها از Laravel در سرویس ابری لیارا پشتیبانی می‌شود:
    </p>

    <ul dir="ltr">
      <li>5.5.^</li>
      <li>6.^</li>
      <li>7.^</li>
      <li>8.^</li>
    </ul>
    {/* </Notice> */}
    {/* <pre>
      <code>
        {`$ git clone https://github.com/liara-cloud/laravel-getting-started
$ cd laravel-getting-started`}
      </code>
    </pre>
    <p>
      برای این‌که مطمئن شوید همه چیز درست کار می‌کند، کافیست برنامه را در سیستم
      خودتان به صورت زیر اجرا کنید.
    </p>
    <pre>
      <code>
        {`$ composer install
$ php artisan serve --port 8000`}
      </code>
    </pre>
    <p>
      و درنهایت داخل مرورگر برنامه را با آدرس
      <span className="code">http://127.0.0.1:8000</span> باز کنید. اگر همه چیز
      درست بود یعنی آماد‌ه‌اید که برنامه را روی لیارا مستقر کنید.
    </p> */}

    <Notice variant="info">
      اگر قصد دارید تنظیمات پیش‌فرض php.ini را تغییر دهید
      و یا با Queue ها کار کنید
      صفحه‌ی
      {' '}
      <Link href="/app-deploy/laravel/tips">توضیحات و نکات تکمیلی</Link>
      {' '}
      را مطالعه بفرمایید.
    </Notice>

    <br />

    <Link href="/app-deploy/laravel/deploy">متوجه شدم، برو گام بعدی!</Link>
  </Layout>
);
