import Layout from "../../../components/Layout";
import Head from "next/head";
import Notice from "../../../components/Notice";

export default () => (
  <Layout>
    <Head>
      <title>سرویس ابری لیارا | مستندات آبجکت‌استوریج</title>
    </Head>
    <h1>آبجکت استوریج</h1>
    <span className="page-description">(Object Storage)</span>
    <h3>درباره MinIO CLI</h3>
    <p>
      از آنجایی که در لیارا از MinIO برای زیرساخت Object Storage استفاده می‌شود،
      برای کار با آن می‌توانید از ابزار کاربردی MinIO CLI نیز استفاده کنید.
    </p>
    <h3>نصب MinIO CLI</h3>
    <p>
      {" "}
      طبق{" "}
      <a
        href="https://docs.min.io/docs/minio-client-quickstart-guide.html"
        target="_blank"
      >
        مستندات MinIO CLI
      </a>{" "}
      می‌توانید این ابزار را در لینوکس، ویندوز و مک و همچنین به صورت Docker ای
      نصب کنید.
    </p>
    <h3>راه‌اندازی MinIO CLI</h3>
    <p>برای اولین اتصال به لیارا کافیست بدین صورت عمل کنید:</p>
    <pre>
      <code>$ mc config host add liara API_ENDPOINT ACCESS_KEY SECRET_KEY</code>
    </pre>
    <Notice variant="info">
      در دستور بالا یک کانکشن به اسم liara درست کردیم. شما می‌توانید به جای liara
      هر اسم دلخواه دیگری نیز وارد کنید.
    </Notice>
    <Notice variant="info">
      مقدار API_ENDPOINT را که از پنل کپی می‌کنید حتما به ابتدای آن{" "}
      <span className="code">https://</span> نیز اضافه کنید.
    </Notice>
    <h3>لیست کردن باکت‌ها</h3>
    <pre>
      <code>$ mc ls liara</code>
    </pre>
    <h3>لیست کردن آبجکت‌های(فایل‌های) موجود در یک باکت خاص</h3>
    <pre>
      <code>$ mc ls liara/videos</code>
    </pre>
    <Notice variant="info">
      در دستور بالا لیست فایل‌های موجود در باکت videos داخل کانکشن liara را
      درخواست کرده‌ایم.
    </Notice>

    <h3>آپلود یک فایل در یک باکت خاص</h3>
    <pre>
      <code>$ mc cp test.mp4 liara/videos</code>
    </pre>
    <Notice variant="info">
      در دستور بالا فایل test.mp4 را از سیستم خودمان به باکت videos در کانکشن
      liara ارسال کرده‌ایم.
    </Notice>
    <br />
    <p>
      ابزار MinIO CLI امکانات بسیار زیادی دارد. برای آشنایی با همه آن‌ها به{" "}
      <a
        href="https://docs.min.io/docs/minio-client-quickstart-guide.html"
        target="_blank"
      >
        مستندات MinIO CLI
      </a>{" "}
      مراجعه کنید.
    </p>
  </Layout>
);
