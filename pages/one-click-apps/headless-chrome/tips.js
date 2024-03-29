import Head from "next/head";
import Highlight from "react-highlight";
import Layout from "../../../components/Layout";
import PlatformIcon from "../../../components/PlatformIcon";
import ZoomableImage from "../../../components/ZoomableImage";

export default () => (
  <Layout>
    <Head>
      <title>توضیحات و نکات تکمیلی در برنامه‌های Headless Chrome - لیارا</title>
    </Head>
    <div className="page-head">
      <PlatformIcon platform="chrome" />
      <div className="page-title">
        <h1>برنامه‌ی Headless Chrome</h1>
        <span className="page-description">
          (Headless Chrome one-click app)
        </span>
      </div>
    </div>

    <h3>🎯 توضیحات و نکات تکمیلی</h3>
    <h4 id="add-token">اضافه کردن توکن و اتصال امن به Headless Chrome</h4>
    <p>
      لیارا به‌صورت خودکار متغیر <b>TOKEN</b> را مقداردهی می‌کند اما درصورت نیاز
      به تغییر این مقدار می‌توانید وارد تب برنامه‌ها شده و برنامه‌ی Headless
      Chrome خود را انتخاب کنید. درنهایت می‌توانید توکن مورد نظر خود را در بخش{" "}
      <b>تنظیمات متغیرها</b>، در فیلد <b>Value</b> متغیر <b>TOKEN</b> قرار دهید
      و درنهایت بر روی دکمه‌ی <b>ثبت تغییرات</b> کلیک کنید.
    </p>
    <ZoomableImage src="https://files.liara.ir/docs/headless-chrome/add-new-token-to-headless-chrome-app.gif"></ZoomableImage>

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
    "image": "browserless/chrome:<your-version>",
    "port": 3000,
    "app": "<your-app-name>"
}`}
    </Highlight>
    <p>
      در اینجا مقدار app، برابر هست با نام برنامه‌ای که در لیارا ایجاد کردید و
      مقدار image، برابر هست نام image برنامه‌تان. در قسمت port، پورتی که
      برنامه‌تان بر روی آن اجرا می‌شود. در نهایت با{" "}
      <span className="code">liara-cli</span> و سپس دستور زیر برنامه‌تان مستقر
      کنید:
    </p>
    <Highlight className="json">{`liara deploy`}</Highlight>
  </Layout>
);
