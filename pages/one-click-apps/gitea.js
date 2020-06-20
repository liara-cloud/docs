import Head from "next/head";
import Layout from "../../components/Layout";
import ZoomableImage from "../../components/ZoomableImage";
import Notice from "../../components/Notice";

export default () => (
  <Layout>
    <Head>
      <title>سرویس ابری لیارا | مستندات برنامه‌های آماده</title>
    </Head>

    <h1>سیستم مدیریت نسخه Gitea</h1>

    <h3>درباره Gitea</h3>
    <p>
      Gitea در حقیقت یک{" "}
      <a href="https://en.wikipedia.org/wiki/Version_control" target="_blank">
        VCS
      </a>{" "}
      یا سیستم مدیریت نسخه است. Gitea پروژه‌ای منبع‌باز میباشد که امکانات خیلی
      خوبی مشابه GitHub و GitLab به شما میدهد. برای کسب اطلاعات بیشتر میتوانید
      به وبسایت{" "}
      <a href="https://gitea.io/en-us/" target="_blank">
        gitea.io
      </a>{" "}
      مراجعه کنید.
    </p>
    <h3>نصب و اجرا</h3>
    <p>
      کافیست از بخش <b>برنامه‌های آماده</b> روی GITEA کلیک کنید و سپس شناسه
      برنامه‌‌ی موردنظرتان را وارد کنید، مثلا{" "}
      <span className="code">git-server</span>. سپس در بخش <b>انتخاب دیتابیس</b>{" "}
      میتوانید انتخاب کنید که به صورت خودکار دیتابیس توسط لیارا ایجاد شود یا این
      که خودتان یک دیتابیس اجرا کنید و Gitea را به آن متصل کنید. توصیه ما این
      است که اجازه دهید لیار به صورت خودکار برای شما دیتابیس بسازد زیرا فرایند
      را بسیار ساده و سریع‌تر میکند و همچنین به صورت خودکار برنامه Gitea شما به
      دیتابیس‌ متصل میشود و شما میتوانید به صورت مستقیم بدون درگیری با بخش‌های
      مرتبط با کانفیگ دیتابیس، وارد پنل Gitea شوید
    </p>
    <ZoomableImage src="/static/gitea-add.png" />

    <p>
      بعد از طی کردن مراحل بالا و با کلیک روی دکمه <b>ایجاد برنامه،</b> وارد
      صفحه ‌ای شبیه زیر میشوید:
    </p>
    <ZoomableImage src="/static/gitea.png" />
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
