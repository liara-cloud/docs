import Head from "next/head";
import Notice from "../../components/Notice";
import Layout from "../../components/Layout";
import PlatformIcon from "../../components/PlatformIcon";
import ZoomableImage from "../../components/ZoomableImage";
import Highlight from "react-highlight";

export default () => (
  <Layout>
    <Head>
      <title>مستندات NextCloud - لیارا</title>
    </Head>

    <div className="page-head">
      <PlatformIcon platform="nextcloud" />
      <div className="page-title">
        <h1>فضای ذخیره‌سازی Nextcloud</h1>
        <span className="page-description">(Nextcloud one-click app)</span>
      </div>
    </div>

    <h3>درباره Nextcloud</h3>
    <p>
      Nextcloud ابزاری متن باز است که با استفاده از آن می‌توانید یک فضای
      ذخیره‌سازی ابری مانند Google Drive و Dropbox را راه‌اندازی و مدیریت کنید.
      برای کسب اطلاعات بیشتری می‌توانید به وبسایت{" "}
      <a href="https://nextcloud.com/" target="_blank">
        nextcloud.com
      </a>{" "}
      مراجعه کنید.
    </p>

    <h3>نصب و اجرا</h3>
    <p>
      برای راه‌اندازی فضای ابری Nextcloud کافیست این برنامه را از بخش برنامه‌های
      آماده انتخاب کرده و شناسه مورد نظرتان را وارد کنید. درنهایت زمانیکه بر روی
      دکمه‌ی <b>ایجاد برنامه</b> کلیک کردید، لیارا به‌طور خودکار یک دیتابیس
      MySQL راه‌اندازی و برنامه‌ی شما را به آن متصل می‌کند بنابراین نیازی نیست
      که شما درگیر نصب و پیکربندی دیتابیس شوید.
    </p>
    <ZoomableImage src="https://files.liara.ir/docs/nextcloud/create-next-cloud-one-click-app.gif" />

    <Notice variant="info">
      برای اتصال دامنه‌ی اختصاصی به این برنامه کافیست به{" "}
      <a href="/domains/management" target="_blank">
        مستندات دامنه‌ها
      </a>{" "}
      مراجعه کرده و طبق مستندات، دامنه‌ اختصاصی مورد نظرتان را به برنامه متصل
      کنید.
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
    "image": "nextcloud:<your-version>",
    "port": 80,
    "app": "<your-app-name>",
    "disks": [
      {
          "name": "tmp",
          "mountTo": "/tmp"
      },
      {
        "name": "data",
        "mountTo": "/var/www/html"
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
