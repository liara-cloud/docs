import Head from "next/head";
import Layout from "../../components/Layout";
import ZoomableImage from "../../components/ZoomableImage";
import Notice from "../../components/Notice";

export default () => (
  <Layout>
    <Head>
      <title>سرویس ابری لیارا | مستندات برنامه‌های آماده</title>
    </Head>

    <h1>نرم‌افزار چت و ارتباطات تیمی RocketChat</h1>

    <h3>درباره RocketChat</h3>
    <p>
      اگر برای ارتباطات درون‌تیمی و سازمانی به ابزاری منبع‌باز و با امکانات زیاد
      نیاز دارید، RocketChat میتواند یک گزینه خوب باشد. امکاناتی مثل چت کاربران،
      گروه‌های مختلف گفتگو، اشتراک فایل و ... . اگر قبلا از کاربران Slack بوده
      باشید، RocketChat میتواند یک جایگزین خوب باشد. برای کسب اطلاعات بیشتر
      میتوانید به وبسایت{" "}
      <a href="https://rocket.chat/" target="_blank">
        rocket.chat
      </a>{" "}
      مراجعه کنید.
    </p>
    <h3>نصب و اجرا</h3>
    <p>
      کافیست از بخش <b>برنامه‌های آماده</b> روی ROCKET.CHAT کلیک کنید و سپس
      شناسه برنامه‌‌ی موردنظرتان را وارد کنید، مثلا{" "}
      <span className="code">my-company</span>. سپس لیارا به صورت خودکار یک
      دیتابیس MongoDB میسازد و به RocketChat متصل میکند و شما نیازی به درگیری با
      نصب و کانفیگ دیتابیس و اتصال آن ندارید.
    </p>
    <ZoomableImage src="/static/rocket-add.png" />

    <p>
      بعد از طی کردن مراحل بالا و با کلیک روی دکمه <b>ایجاد برنامه،</b> وارد
      صفحه ‌ای شبیه زیر میشوید:
    </p>
    <ZoomableImage src="/static/rocketchat.png" />
    <p>بعد از اتمام موفقیت‌آمیز، میتوانید لینک برنامه‌ی‌تان را مشاهده کنید.</p>

    <Notice variant="info">
      شما میتوانید به هر برنامه آماده‌ای که در لیارا ایجاد میکنید، دامنه اختصاصی
      متصل کنید. کافیست به{" "}
      <a href="/domains/management" target="_blank">
        مستندات دامنه‌ها
      </a>{" "}
      مراجعه کنید و طبق مستندات، دامنه‌ اختصاصی را به برنامه متصل کنید.
    </Notice>
  </Layout>
);
