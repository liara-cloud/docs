import Layout from "../../../components/Layout";
import Link from "next/link";
import Head from "next/head";
import Notice from "../../../components/Notice";

export default () => (
  <Layout>
    <Head>
      <title>Static سرویس ابری لیارا | مستندات استقرار برنامه‌های</title>
    </Head>

    <h1>برنامه‌های Static</h1>
    <span className="pageDescription">(Static Apps)</span>

    <h3>استقرار اولین برنامه</h3>
    <h3>- نصب liara cli</h3>
    <p>
      اگر liara cli را نصب ندارید میتوانید به وسیله دستور زیر آن‌ را به‌راحتی
      نصب کنید:
    </p>
    <pre>
      <code>{`$ npm install -g @liara/cli`}</code>
    </pre>
    <h3>- ورود به حساب</h3>
    <p>
      برای ورود به حساب کاربری خود به وسیله liara cli کافیست دستور زیر را وارد
      کنید و ایمیل و رمزعبوری که با آن حساب کاربری خود را ایجاد کرده اید را وارد
      نمایید:
    </p>
    <pre>
      <code>{`$ liara login`}</code>
    </pre>
    <h3>- اولین استقرار!</h3>
    <p>
      <b>گام اول)</b> کافیست به بخش{" "}
      <a href="https://console.liara.ir/apps/create" target="_blank">
        ایجاد برنامه‌ها در لیارا
      </a>{" "}
      بروید و با انتخاب پلتفرم STATIC و نوشتن شناسه برنامه‌موردنظرتان و در نهایت
      انتخاب پلن، برنامه خود را ایجاد کنید. برای نمونه، ما در این آموزش برای
      پروژه تست‌مون، شناسه static-starter را انتخاب کردیم.
    </p>
    <p>
      <b>گام دوم)</b> حالا کافیست که برنامه‌ی‌تان را اگر build نگرفته‌اید{" "}
      <span className="code">build</span> کنید و در پوشه‌ی نهایی برنامه که حتما
      باید شامل یک فایل<span className="code">index.html</span>باشد، دستور زیر
      وارد نمایید و بعد از آن لیارا از شما شناسه برنامه‌ی‌تان را میپرسد و سپس
      عملیات استقرار آغاز میشود.
    </p>
    <pre>
      <code>{`$ liara deploy --platform=static`}</code>
    </pre>
    <Notice variant="info">
      میتوانید <span className="code">--platform=static</span> را در دستور وارد
      نکنید، زیرا لیارا به صورت خودکار تشخیص میدهد که برنامه شما از چه پلتفرمی
      استفاده میکند.
    </Notice>
    <p>
      <b>گام سوم و پایانی)</b> بعد از اجرای دستورات گام‌های قبلی، لیارا به
      برنامه شما یک زیردامنه رایگان اختصاص میدهد که به وسیله آن میتوانید مطمئن
      شوید که برنامه‌ی‌تان به صورت صحیح به بستر لیارا منتقل شده است یا خیر. این
      آدرس بر اساس شناسه برنامه‌ی شما میباشد، برای نمونه:
    </p>
    
    <p dir="ltr">
      <a href="https://static-starter.liara.run/" target="_blank">
        https://static-starter.liara.run
      </a>
    </p>

    <Link href="/app-deploy/static/logs">متوجه شدم، برو بعدی!</Link>
  </Layout>
);
