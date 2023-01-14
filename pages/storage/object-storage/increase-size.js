import Layout from "../../../components/Layout";
import Head from "next/head";
import Notice from "../../../components/Notice";
import ZoomableImage from "../../../components/ZoomableImage";
import Link from "next/link";

export default () => (
  <Layout>
    <Head>
      <title>مستندات افزایش حجم آبجکت استوریج - لیارا</title>
    </Head>

    <h1>آبجکت استوریج</h1>
    <span className="page-description">(Object Storage)</span>

    <Notice variant="danger">
      از این پس سرویس فایل در لیارا ارائه نمی‌شود و می‌توانید به‌عنوان جایگزین
      از <Link href="/buckets/about">ذخیره‌سازی ابری</Link> استفاده کنید.
    </Notice>

    <h3>افزایش حجم سرویس فایل</h3>
    <p>
      برای افزایش حجم سرویس فایل‌تان نیاز به کار خاصی به جز چند کلیک ندارید.
      کافیست فقط پلنی با حجم بیشتر را انتخاب و سپس روی دکمه <b>تغییر اندازه</b>،
      کلیک کنید. بعد از افزایش حجم، نیاز به هیچ تغییری در برنامه‌ها و کد‌هایتان
      ندارید.
    </p>
    <ZoomableImage
      src="/static/storage-increase.png"
      alt="ورود به داشبورد مدیریتی سرویس فایل"
    />
  </Layout>
);
