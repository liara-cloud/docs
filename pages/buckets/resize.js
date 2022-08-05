import Layout from "../../components/Layout";
import Notice from "../../components/Notice";
import ZoomableImage from "../../components/ZoomableImage";
import Head from "next/head";

export default () => (
  <Layout>
    <Head>
      <title>تغییر اندازه ذخیره‌سازی ابری - سرویس ابری لیارا</title>
    </Head>

    <h1>ذخیره‌سازی ابری</h1>

    <h2>تغییر اندازه</h2>
    <ZoomableImage src="https://files.liara.ir/docs/buckets/resize-bucket.gif" />

    <Notice variant="warning">
      توجه داشته باشید که در ذخیره‌سازی ابری، امکان برگشت به پلن قبل وجود ندارد.
    </Notice>

    <p>
      برای تغییر اندازه و ارتقا پلن ذخیره‌سازی ابری باید وارد باکت مورد نظرتان
      شوید و در بخش <strong>تنظیمات</strong>، پلن خود را ارتقا دهید. درنهایت
      می‌توانید روی گزینه‌ی <strong>تایید</strong> کلیک کنید تا عملیات تغییر
      اندازه انجام شود.
    </p>
  </Layout>
);
