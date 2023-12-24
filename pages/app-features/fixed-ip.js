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

    <p align="justify">
      لیارا این امکان را برای ما فراهم کرده که در برنامه خود از آی‌پی ثابت
      اشتراکی برخوردار باشیم. زمانی که یک برنامه جدید در لیارا ایجاد می‌کنیم، به
      صورت پیش‌فرض یک IP اشتراکی و ثابت به برنامه ما تعلق می‌گیرد و تمام
      درخواست‌های خروجی برنامه ما با یک آی‌پی مشخص خواهند بود:
    </p>
    <br></br>
    <ZoomableImage
      src="/static/fixed-ip-for-app.png"
      alt="آی‌پی ثابت و اشتراکی که برای هر app وجود دارد."
    ></ZoomableImage>

    <h3>آی‌پی ثابت اشتراکی</h3>
    <p align="justify">
      توجه داشته باشید IP که در اختیار شما قرار گرفته، ممکن است به چندین
      برنامه‌ی دیگر هم در لیارا اختصاص داده شده باشد. یعنی آی‌پی ثابتی که لیارا
      به شما می‌دهد اشتراکی است و مانند VPS ها اختصاصی نیست. این مورد مشکل خاصی
      برای‌تان ایجاد نمی‌کند و می‌توانید با خیال راحت آن را به بانک یا سرویس
      مورد نظرتان بدهید.
    </p>
  </Layout>
);
