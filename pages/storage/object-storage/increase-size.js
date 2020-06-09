import Layout from "../../../components/Layout";
import Head from "next/head";
import ZoomableImage from "../../../components/ZoomableImage";

export default () => (
  <Layout>
    <Head>
      <title>سرویس ابری لیارا | مستندات آبجکت‌استوریج</title>
    </Head>

    <h1>آبجکت استوریج</h1>
    <span className="pageDescription">(Object Storage)</span>

    <h3>افزایش حجم سرویس فایل</h3>
    <p>
      برای افزایش حجم سرویس فایل‌تان نیاز به کار خاصی به جز چند کلیک ندارید.
      کافیست فقط پلنی با حجم بیشتر را انتخاب و سپس روی دکمه <b>تغییر اندازه</b>،
      کلیک کنید. برای ارتقای حجم نیاز به هیچ تغییری در برنامه‌ها و کد‌هایتان
      ندارید.
    </p>
    <ZoomableImage
      src="/static/storage-increase.png"
      alt="ورود به داشبورد مدیریتی سرویس فایل"
    />
  </Layout>
);
