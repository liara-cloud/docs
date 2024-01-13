import Head from "next/head";
import Notice from "../../components/Notice";
import Layout from "../../components/Layout";
import PlatformIcon from "../../components/PlatformIcon";
import ZoomableImage from "../../components/ZoomableImage";
import Highlight from "react-highlight";

export default () => (
  <Layout>
    <Head>
      <title>مستندات RocketChat - لیارا</title>
    </Head>

    <div className="page-head">
      <PlatformIcon platform="rocketchat" />
      <div className="page-title">
        <h1>نرم‌افزار چت و ارتباطات تیمی RocketChat</h1>
        <span className="page-description">(RocketChat one-click app)</span>
      </div>
    </div>

    <h3>درباره RocketChat</h3>
    <p>
      اگر برای ارتباطات درون‌تیمی و سازمانی به ابزاری منبع‌باز و با امکانات زیاد
      نیاز دارید، RocketChat می‌تواند یک گزینه خوب باشد. امکاناتی مثل چت
      کاربران، گروه‌های مختلف گفتگو، اشتراک فایل و ... . اگر قبلا از کاربران
      Slack بوده باشید، RocketChat می‌تواند یک جایگزین خوب باشد. برای کسب
      اطلاعات بیشتر می‌توانید به وبسایت{" "}
      <a href="https://rocket.chat/" target="_blank">
        rocket.chat
      </a>{" "}
      مراجعه کنید.
    </p>
    <h3>نصب و اجرا</h3>

    <p>
      در صورتی که تمایلی به خواندن آموزش متنی ندارید می‌توانید ویدیوی آموزشی زیر
      ‌را مشاهده کنید.
    </p>

    <video
      src="https://files.liara.ir/liara/rocketchat/rocketchat.mp4"
      controls="controls"
      className="block w-full"
      width="100%"
    ></video>

    <p>
      کافیست از بخش <b>برنامه‌های آماده</b> روی ROCKET.CHAT کلیک کنید و سپس
      شناسه برنامه‌‌ی موردنظرتان را وارد کنید، مثلا{" "}
      <span className="code">my-company</span>. سپس لیارا به صورت خودکار یک
      دیتابیس MongoDB میسازد و به RocketChat متصل می‌کند و شما نیازی به درگیری
      با نصب و کانفیگ دیتابیس و اتصال آن ندارید.
    </p>
    <ZoomableImage src="/static/rocket-add.jpg" />

    <p>
      بعد از طی کردن مراحل بالا و با کلیک روی دکمه <b>ایجاد برنامه،</b> وارد
      صفحه ‌ای شبیه زیر می‌شوید:
    </p>
    <ZoomableImage src="/static/rocketchat.png" />
    <p>بعد از اتمام موفقیت‌آمیز، می‌توانید لینک برنامه‌ی‌تان را مشاهده کنید.</p>

    <Notice variant="info">
      شما می‌توانید به هر برنامه آماده‌ای که در لیارا ایجاد می‌کنید، دامنه
      اختصاصی متصل کنید. کافیست به{" "}
      <a href="/domains/management" target="_blank">
        مستندات دامنه‌ها
      </a>{" "}
      مراجعه کنید و طبق مستندات، دامنه‌ اختصاصی را به برنامه متصل کنید.
    </Notice>

    <h3>🎯 توضیحات و نکات تکمیلی</h3>

    <h4 id="upgrade">تغییر نسخه‌ی برنامه مستقر شده</h4>
    <p>
      برخی مواقع لازم شده که نسخه برنامه‌ی آماده‌ای که مستقر کردیم رو تغییر
      بدیم. برای مثال، نسخه جدیدی از آن برنامه منتشر شده و ما می‌خواهیم از آن
      استفاده بکنیم. نکته‌ای که باید قبل تغییر نسخه برنامه‌مان در نظر داشته
      باشیم، این است که آن نسخه با لیارا سازگاری داشته باشد و در صورتی که لازم
      باشد از دیسک‌ها برای مواردی همچون تغییرات در برنامه یا نگهداری اطلاعات‌مان
      استفاده بکنیم. یا حتی لازم باشد یک سری متغیر‌هایی در برنامه‌مان تنظیم
      کنیم. در اینجا شما می‌تونید یک نمونه ساده از تغییر نسخه را مشاهده کنید.
      برای شروع لازم هست ابتدا در سیستم لوکال فایلی تحت عنوان{" "}
      <span className="code">liara.json</span>
      ایجاد کنید و مقادیر زیر رو در اون قرار بدید:
    </p>
    <Highlight className="json">
      {`{
    "image": "rocket.chat:<your-version>",
    "port": 3000,
    "app": "<your-app-name>",
    "disks": [
      {
          "name": "uploads",
          "mountTo": "/app/uploads"
      }
  ]
}`}
    </Highlight>
    <p>
      در اینجا مقدار app، برابر هست با نام برنامه‌ای که در لیارا ایجاد کردید و
      مقدار image، برابر هست نام image برنامه‌تان. در قسمت port، پورتی که
      برنامه‌تان بر روی آن اجرا می‌شود و در قسمت disks، قرار داده شده است نام
      دیسک‌هایی که به صورت پیش‌فرض برای برنامه‌تان نیاز هست. در نهایت با{" "}
      <span className="code">liara-cli</span> و سپس دستور زیر برنامه‌تان مستقر
      کنید:
    </p>
    <Highlight className="json">{`liara deploy`}</Highlight>
  </Layout>
);
