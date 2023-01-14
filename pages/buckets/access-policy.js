import Layout from "../../components/Layout";
import Notice from "../../components/Notice";
import ZoomableImage from "../../components/ZoomableImage";
import Head from "next/head";
import Link from "next/link";

export default () => (
  <Layout>
    <Head>
      <title>تغییر سطح دسترسی ذخیره‌سازی ابری - لیارا</title>
    </Head>

    <h1>ذخیره‌سازی ابری</h1>

    <h2>تغییر سطح دسترسی</h2>
    <ZoomableImage src="https://files.liara.ir/docs/buckets/change-access-policy.gif" />

    <Notice variant="warning">
      توجه داشته باشید که برای دسترسی به لینک دائمی فایل‌ها باید سطح دسترسی
      باکت، <strong>عمومی</strong> باشد.
    </Notice>

    <p>
      شما در زمان <Link href="/buckets/console#create-bucket">ایجاد باکت</Link>{" "}
      می‌توانید سطح دسترسی هر باکت را مشخص کنید. حال درصورتی که قصد داشته باشید
      بعد از ایجاد باکت، سطح دسترسی باکت خود را تغییر دهید می‌توانید وارد{" "}
      <strong>تنظیمات</strong> باکت شوید و <strong>سطح دسترسی</strong> مورد
      نظرتان را انتخاب کنید. درنهایت می‌توانید روی گزینه‌ی{" "}
      <strong>تایید</strong> کلیک کنید تا عملیات تغییر سطح دسترسی انجام شود.
    </p>
  </Layout>
);
