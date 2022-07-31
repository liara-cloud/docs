import Layout from "../../components/Layout";
import Notice from "../../components/Notice";
import Head from "next/head";

export default () => (
  <Layout>
    <Head>
      <title>تغییر اندازه فضای ذخیره‌سازی ابری - سرویس ابری لیارا</title>
    </Head>

    <h1>فضای ذخیره‌سازی ابری</h1>

    <h2>تغییر اندازه</h2>

    <p>
      برای تغییر اندازه و ارتقا پلن فضای ذخیره‌سازی ابری باید وارد باکت مورد
      نظرتان شوید و در بخش <strong>تنظیمات</strong>، پلن خود را ارتقا دهید.
      درنهایت می‌توانید روی گزینه‌ی <strong>تایید</strong> کلیک کنید تا عملیات
      تغییر اندازه انجام شود.
    </p>

    <Notice variant="warning">
      توجه داشته باشید که در فضای ذخیره‌سازی ابری، امکان برگشت به پلن قبل وجود
      ندارد.
    </Notice>
  </Layout>
);
