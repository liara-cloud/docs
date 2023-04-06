import Head from "next/head";
import Highlight from "react-highlight";

import Notice from "../../components/Notice";
import Layout from "../../components/Layout";
import PlatformIcon from "../../components/PlatformIcon";
import ZoomableImage from "../../components/ZoomableImage";

export default () => (
  <Layout>
    <Head>مستندات نصب و راه‌اندازی Ghost - لیارا</Head>

    <div className="page-head">
      <PlatformIcon platform="ghost" />
      <div className="page-title">
        <h1>وبلاگ نویسی با Ghost</h1>
        <span className="page-description">(Ghost one-click app)</span>
      </div>
    </div>

    <p>
      <a href="https://ghost.org" target="_blank" rel="noopener">
        Ghost
      </a>{" "}
      پلتفرم Ghost یک CMS مشابه وردپرس است که با NodeJS نوشته شده است و به شما
      امکانات خوبی برای مدیریت وبلاگ و وبسایت‌های مختلف می‌دهد. ghost به شما کمک
      می‌کند تا یک کسب و کار را حول محتوایی که ایجاد می‌کنید بسازید. این
      اپلیکیشن با ابزار‌های مدرنی که برای ساخت وب‌سایت، منتشر کردن محتوا، ارسال
      خبرنامه و ارائه اشتراک‌‌های مرتبط با عضویت همراه است، ارائه شده است.
    </p>

    <h3>🚀 راه‌اندازی</h3>

    <p>
      در صورتی که تمایلی به خواندن آموزش متنی ندارید می‌توانید ویدیوی آموزشی زیر
      ‌را مشاهده کنید.
    </p>

    <ZoomableImage src="https://files.liara.ir/docs/ghost/create-ghost-one-click-app.gif" />

    <p>
      برای راه‌اندازی برنامه‌ی آماده Ghost باید در بخش{" "}
      <a href="https://console.liara.ir/apps" target="_blank">
        برنامه‌های
      </a>{" "}
      کنسول لیارا بر روی دکمه‌ی <strong>ایجاد برنامه</strong> کلیک کرده و در
      صفحه‌ی باز شده وارد بخش برنامه‌های آماده شوید. سپس برنامه‌ی Ghost را
      انتخاب و یک شناسه‌ی یکتا برای برنامه‌ی خود درنظر بگیرید، همچنین پلن مورد
      نظر خود را انتخاب کنید و در آخر بر روی دکمه‌ی{" "}
      <strong>ایجاد برنامه</strong> کلیک کنید.
    </p>

    <Notice variant="info">
      برای اتصال دامنه‌ی اختصاصی به این برنامه کافیست به{" "}
      <a href="/domains/management" target="_blank">
        مستندات دامنه‌ها
      </a>{" "}
      مراجعه کرده و طبق مستندات، دامنه‌ اختصاصی مورد نظرتان را به برنامه متصل
      کنید.
    </Notice>

    <h3>🎯 توضیحات و نکات تکمیلی</h3>

    <h4 id="ghost-setup-smtp">راه‌اندازی SMTP برای Ghost</h4>
    <p>
      برای ارسال ایمیل از طریق SMTP، نیاز هست وارد تنظیمات برنامه‌تون شده و{" "}
      <a href="/app-features/environment-variables" target="_blank">
        متغیر‌‌های محیطی
      </a>{" "}
      زیر را ثبت کنید و در نهایت بر روی دکمه‌ی ثبت تغییرات کلیک کنید.
    </p>

    <Highlight className="plaintext">
      {`mail__transport=SMTP
mail__from=from@example.com
mail__options__service=Liara
mail__options__host=smtp.c1.liara.email
mail__options__port=587
mail__options__auth__user=*********
mail__options__auth__pass=*********`}
    </Highlight>

    <Notice variant="warning">
      قابل ذکر است که مقدار <span className="code">from@example.com</span> در
      قطعه کد زیر باید یکی از نشانی‌های اضافه شده در سرویس ایمیل باشد.
    </Notice>
  </Layout>
);
