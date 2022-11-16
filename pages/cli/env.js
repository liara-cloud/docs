import Head from "next/head";
import Link from "next/link";
import Highlight from "react-highlight";
import Asciinema from "../../components/Asciinema";
import Layout from "../../components/Layout";

export default () => (
  <Layout>
    <Head>
      <title>
        مستندات مدیریت متغیرهای محیطی با استفاده از لیارا CLI - سرویس ابری لیارا
      </title>
    </Head>

    <div className="page-head">
      <div className="page-title">
        <h1>رابط خط فرمان لیارا</h1>
        <span className="page-description">(Liara CLI)</span>
      </div>
    </div>

    <h4>مدیریت متغیرهای محیطی</h4>
    <Highlight className="bash">{`$ liara env`}</Highlight>
    <Asciinema id="453594" />
    <p>
      با اجرای این دستور می‌توانید دستورات مرتبط با مدیریت متغیرهای محیطی
      برنامه‌ها را مشاهده کنید.
    </p>

    <ol dir="ltr">
      <li>&nbsp;&nbsp;env:list</li>
      <p dir="rtl" className="commandDescription">
        ۱. <Link href="#list">مشاهده‌ی لیستی از متغیرهای محیطی تنظیم شده</Link>
      </p>

      <li>&nbsp;&nbsp;env:set</li>
      <p dir="rtl" className="commandDescription">
        ۲. <Link href="#set">تنظیم و یا ویرایش متغیرهای محیطی</Link>
      </p>

      <li>&nbsp;&nbsp;env:unset</li>
      <p dir="rtl" className="commandDescription">
        ۳. <Link href="#unset">حذف متغیرهای محیطی</Link>
      </p>
    </ol>

    <h4 id="list">مشاهده‌ی لیستی از متغیرهای محیطی تنظیم شده</h4>
    <Highlight className="bash">{`$ liara env:list`}</Highlight>
    <Asciinema id="453595" />

    <h5>
      دستور <span className="code">liara env:list</span> یا به اختصار{" "}
      <span className="code">liara env:ls</span> این پارامتر‌ها را می‌پذیرد:
    </h5>

    <ol dir="ltr">
      <li>&nbsp;&nbsp;-a, --app</li>
      <p dir="rtl" className="commandDescription">
        ۱. شناسه برنامه‌ای که قصد مشاهده‌ی متغیرهای محیطی آن را دارید
      </p>

      <li>&nbsp;&nbsp;-h, --help</li>
      <p dir="rtl" className="commandDescription">
        ۲. نمایش راهنما
      </p>

      <li>&nbsp;&nbsp;--csv</li>
      <p dir="rtl" className="commandDescription">
        ۳. ارائه خروجی CSV از لیست متغیرهای محیطی فعلی
      </p>

      <li>&nbsp;&nbsp;--sort</li>
      <p dir="rtl" className="commandDescription">
        ۴. مرتب سازی لیست متغیرهای محیطی فعلی اضافه شده براساس Key و یا Value
      </p>

      <li>&nbsp;&nbsp;--region=iran|germany</li>
      <p dir="rtl" className="commandDescription">
        ۵. مشخص‌کردن موقعیت جغرافیایی برنامه
      </p>
    </ol>

    <h4 id="set">تنظیم و یا ویرایش متغیرهای محیطی</h4>
    <Highlight className="bash">{`$ liara env:set [ENV]`}</Highlight>

    <Asciinema id="453596" />

    <h5>
      دستور <span className="code">liara env:set</span> این پارامتر‌ها را
      می‌پذیرد:
    </h5>

    <ol dir="ltr">
      <li>&nbsp;&nbsp;-a, --app</li>
      <p dir="rtl" className="commandDescription">
        ۱. شناسه برنامه‌ای که قصد تنظیم و یا ویرایش متغیرهای محیطی آن را دارید
      </p>

      <li>&nbsp;&nbsp;-f, --force</li>
      <p dir="rtl" className="commandDescription">
        ۲. تنظیم و یا ویرایش متغیرهای محیطی یک برنامه بدون نیاز به تایید
      </p>

      <li>&nbsp;&nbsp;-h, --help</li>
      <p dir="rtl" className="commandDescription">
        ۳. نمایش راهنما
      </p>

      <li>&nbsp;&nbsp;--api-token=</li>
      <p dir="rtl" className="commandDescription">
        ۴. اجرای آنی عملیات تنظیم و یا ویرایش متغیرهای محیطی برنامه به کمک{" "}
        <a href="https://console.liara.ir/API" target="_blank">
          api token
        </a>{" "}
        بدون ورود به حساب کاربری
      </p>

      <li>&nbsp;&nbsp;--region=iran|germany</li>
      <p dir="rtl" className="commandDescription">
        ۵. مشخص‌کردن موقعیت جغرافیایی
      </p>
    </ol>

    <h4 id="unset">حذف متغیرهای محیطی</h4>
    <Highlight className="bash">{`$ liara env:unset [KEY]`}</Highlight>

    <Asciinema id="453597" />

    <h5>
      دستور <span className="code">liara env:unset</span> این پارامتر‌ها را
      می‌پذیرد:
    </h5>

    <ol dir="ltr">
      <li>&nbsp;&nbsp;-a, --app</li>
      <p dir="rtl" className="commandDescription">
        ۱. شناسه برنامه‌ای که قصد تنظیم و یا ویرایش متغیرهای محیطی آن را دارید
      </p>

      <li>&nbsp;&nbsp;-f, --force</li>
      <p dir="rtl" className="commandDescription">
        ۲. حذف متغیرهای محیطی یک برنامه بدون نیاز به تایید
      </p>

      <li>&nbsp;&nbsp;-h, --help</li>
      <p dir="rtl" className="commandDescription">
        ۳. نمایش راهنما
      </p>

      <li>&nbsp;&nbsp;--api-token=</li>
      <p dir="rtl" className="commandDescription">
        ۴. اجرای آنی عملیات حذف متغیرهای محیطی برنامه به کمک{" "}
        <a href="https://console.liara.ir/API" target="_blank">
          api token
        </a>{" "}
        بدون ورود به حساب کاربری
      </p>

      <li>&nbsp;&nbsp;--region=iran|germany</li>
      <p dir="rtl" className="commandDescription">
        ۵. مشخص‌کردن موقعیت جغرافیایی
      </p>
    </ol>

    <br />
    <Link href="/cli/plan">
      <a className="next-page">متوجه شدم، برو گام بعدی!</a>
    </Link>
  </Layout>
);
