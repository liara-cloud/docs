import Layout from "../../components/Layout";
import Notice from "../../components/Notice";
import ZoomableImage from "../../components/ZoomableImage";
import Head from "next/head";

export default () => (
  <Layout>
    <Head>
      <title>مدیریت کلیدها در ذخیره‌سازی ابری - لیارا</title>
    </Head>

    <h1>ذخیره‌سازی ابری</h1>

    <h2>مدیریت کلیدها</h2>

    <h3>ایجاد کلید</h3>
    <ZoomableImage src="https://files.liara.ir/docs/buckets/generate-keys.gif" />

    <Notice variant="warning">
      توجه داشته باشید که Secret Key تنها یک‌بار به شما نمایش داده می‌شود
      بنابراین آن را در جایی مطمئن ذخیره کنید.
    </Notice>

    <p>
      برای اتصال به ذخیره‌سازی ابری با استفاده از AWS SDK به کلیدهای Access Key
      و Secret Key نیاز خواهید داشت. حال برای ایجاد کلید باید وارد بخش{" "}
      <a href="https://console.liara.ir/buckets/keys" target="_blank">
        کلیدها
      </a>{" "}
      شوید و روی گزینه‌ی{" "}
      <strong>
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          style={{ display: "inline" }}
        >
          <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"></path>
        </svg>
        ایجاد کلید
      </strong>{" "}
      کلیک کنید. در قدم بعد باید توضیحاتی برای کلید قرار دهید و همچنین دسترسی
      کلید به باکت‌های مورد نظرتان را مشخص کنید. درنهایت می‌توانید روی گزینه‌ی{" "}
      <strong>تایید</strong> کلیک کنید تا کلیدهای Access Key و Secret Key ساخته
      شوند.
    </p>

    <h3>ساخت کلید جدید</h3>
    <ZoomableImage src="https://files.liara.ir/docs/buckets/revoke-keys.gif" />
    <p>
      درصورتی که به‌هر دلیلی Secret Key را از دست بدهید باید روی گزینه‌ی{" "}
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        style={{ display: "inline" }}
      >
        <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path>
      </svg>
      کلیک کرده و پس از کلیک روی گزینه‌ی <strong>کلید جدید</strong>، درنهایت روی
      گزینه‌ی <strong>ساخت کلید جدید</strong> کلیک کنید.
    </p>

    <h3>حذف کلید</h3>
    <ZoomableImage src="https://files.liara.ir/docs/buckets/delete-keys.gif" />
    <p>
      برای حذف کلید می‌توانید روی گزینه‌ی{" "}
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        style={{ display: "inline" }}
      >
        <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path>
      </svg>{" "}
      کلیک کنید و پس از کلیک روی گزینه‌ی <strong>حذف کلید</strong>، درنهایت روی
      گزینه‌ی <strong>حذف کلید</strong> کلیک کنید.
    </p>
  </Layout>
);
