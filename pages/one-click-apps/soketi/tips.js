import Head from "next/head";
import Highlight from "react-highlight";
import Layout from "../../../components/Layout";
import PlatformIcon from "../../../components/PlatformIcon";

export default () => (
  <Layout>
    <Head>
      <title>مستندات راه‌اندازی Soketi - لیارا</title>
    </Head>
    <div className="page-head">
      <PlatformIcon platform="soketi" />
      <div className="page-title">
        <h1>برنامه‌ی آماده Soketi</h1>
        <span className="page-description">(Soketi one-click app)</span>
      </div>
    </div>

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
    "image": "quay.io/soketi/soketi:<your-version>",
    "port": 6001,
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
