import Head from "next/head";
import Notice from "../../components/Notice";
import Layout from "../../components/Layout";
import PlatformIcon from "../../components/PlatformIcon";
import ZoomableImage from "../../components/ZoomableImage";

export default () => (
  <Layout>
    <Head>
      <title>مستندات نصب و راه‌اندازی n8n - لیارا</title>
    </Head>
    <div className="page-head">
      <PlatformIcon platform="n8n" />
      <div className="page-title">
        <h1>اتوماسیون فرایند کاری با n8n</h1>
        <span className="page-description">(n8n one-click app)</span>
      </div>
    </div>

    <p>
      <a href="https://n8n.io/" target="_blank" rel="noopener">
        n8n
      </a>{" "}
      یک سرویس اتوماسیون فرایند کاری با قابلیت اتصال به بیش از ۲۰۰ سرویس مختلف
      است. با استفاده از n8n، می‌توانید فرایندهای کاری خود را به صورت بصری و
      بدون نوشتن کد ایجاد کرده و به یک دیگر متصل کنید. با استفاده از این سرویس،
      می‌توانید یک فرایند کاری با مراحل مختلف تعریف کرده و هر مرحله را به
      سرویس‌های دیگری مثل Google Sheets، Slack، Trello و... متصل کنید. از
      ویژگی‌های دیگر این سرویس می‌توان به پشتیبانی از متدهای HTTP، ارسال و
      دریافت ایمیل، ایجاد فایل‌های PDF و ایجاد تغییرات در پایگاه داده‌های SQL
      اشاره کرد.
    </p>

    <h3>🚀 راه‌اندازی</h3>

    <p>
      در صورتی که تمایلی به خواندن آموزش متنی ندارید می‌توانید ویدیوی آموزشی زیر
      ‌را مشاهده کنید.
    </p>

    <ZoomableImage src="https://files.liara.ir/docs/n8n/create-n8n-one-click-app.gif"></ZoomableImage>

    <p>
      برای راه‌اندازی برنامه‌ی آماده n8n باید در بخش{" "}
      <a href="https://console.liara.ir/apps" target="_blank">
        برنامه‌های
      </a>{" "}
      کنسول لیارا بر روی دکمه‌ی <strong>برنامه‌های آماده</strong> کلیک کنید. سپس
      برنامه‌ی n8n را انتخاب و یک شناسه‌ی یکتا برای برنامه‌ی خود درنظر بگیرید،
      همچنین پلن مورد نظر خود را انتخاب کنید و در آخر بر روی دکمه‌ی{" "}
      <strong>ایجاد برنامه</strong> کلیک کنید.
    </p>

    <Notice variant="info">
      برای اتصال دامنه‌ی اختصاصی به این برنامه کافیست به{" "}
      <a href="/domains" target="_blank">
        مستندات دامنه‌ها
      </a>{" "}
      مراجعه کرده و طبق مستندات، دامنه‌ اختصاصی مورد نظرتان را به برنامه متصل
      کنید.
    </Notice>
  </Layout>
);
