import Layout from "../../components/Layout";
import ZoomableImage from "../../components/ZoomableImage";
import Head from "next/head";

export default () => (
  <Layout>
    <Head>
      <title>
        انتقال فایل‌ها از سرویس فایل به ذخیره‌سازی ابری - سرویس ابری لیارا
      </title>
    </Head>

    <h1>ذخیره‌سازی ابری</h1>

    <h2>انتقال فایل‌ها از سرویس فایل به ذخیره‌سازی ابری</h2>

    <h3>ثبت درخواست انتقال</h3>

    <ZoomableImage src="https://files.liara.ir/docs/buckets/migrate-from-object-storage-to-buckets.gif" />

    <p>
      برای انتقال داده‌ها و فایل‌ها از سرویس فایل به ذخیره‌سازی ابری در لیارا
      تنها کافیست از منوی{" "}
      <a
        href="https://console.liara.ir/storage/move"
        rel="noopener noreferrer"
        target="_blank"
      >
        درخواست انتقال
      </a>{" "}
      سرویس فایل فعلی‌تان، روی گزینه‌ی <strong>درخواست انتقال</strong> کلیک
      کنید. حال می‌توانید <strong>باکت مبدا</strong>، <strong>باکت مقصد</strong>{" "}
      و <strong>نام فولدر مقصد</strong> را مشخص کنید و درنهایت روی گزینه‌ی{" "}
      <strong>تایید</strong> کلیک کنید تا درخواست انتقال شما ثبت شود. لازم به
      ذکر است که با تغییر وضعیت درخواست به <strong>انتقال انجام شد</strong>{" "}
      می‌توانید به داده‌ها و فایل‌های‌تان در ذخیره‌سازی ابری دسترسی پیدا کنید.
    </p>
  </Layout>
);
