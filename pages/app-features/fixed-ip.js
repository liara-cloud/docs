import Layout from "../../components/Layout";
import ZoomableImage from "../../components/ZoomableImage";
import Head from "next/head";
import Notice from "../../components/Notice";

export default () => (
  <Layout>
    <Head>
      <title>مستندات آی‌پی ثابت Fixed - Static IP - لیارا</title>
    </Head>

    <h1>آی‌پی ثابت</h1>
    <span className="page-description">(Fixed / Static IP)</span>

    <p>
      لیارا این امکان را برای‌تان فراهم کرده که در برنامه خود از آی‌پی ثابت
      اشتراکی برخوردار باشید. در این صورت تمام درخواست‌های خروجی شما با یک آی‌پی
      مشخص خواهند بود.
    </p>

    <h3>آی‌پی ثابت اشتراکی</h3>
    <p>
      توجه داشته باشید IP ای که در اختیار شما قرار گرفته، ممکن است به چندین
      برنامه‌ی دیگر هم در لیارا اختصاص داده شده باشد. یعنی آی‌پی ثابتی که لیارا
      به شما می‌دهد اشتراکی است و مانند VPS ها اختصاصی نیست. این مورد مشکل خاصی
      برای‌تان ایجاد نمی‌کند و می‌توانید با خیال راحت آن را به بانک یا سرویس
      مورد نظرتان بدهید.
    </p>
  </Layout>
);
