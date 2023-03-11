import Head from "next/head";
import Link from "next/link";
import Layout from "../../components/Layout";
import ZoomableImage from "../../components/ZoomableImage";

export default () => (
  <Layout>
    <Head>
      <title>مستندات دریافت ایمیل - لیارا</title>
    </Head>

    <h1>دریافت ایمیل</h1>
    <span className="page-description">(Inbound email)</span>

    <h4>فهرست عناوین:</h4>
    <ul className="mt-0">
      <li>
        <a href="#mail-server-inbox">صندوق ورودی</a>
      </li>
      <li>
        <a href="#mail-server-forwarder">فوروارد‌ها (Forwards)</a>
      </li>
    </ul>

    <h3 id="mail-server-inbox">صندوق ورودی</h3>

    <p>
      در صندوق ورودی لیستی از ایمیل‌های دریافتی نمایش داده می‌شود. دایره‌ی بزرگی
      که در سمت راست هر ایمیل قرار دارد، احتمال هرزنامه بودن را نمایش می‌دهد.
    </p>

    <ZoomableImage src="/static/mail-server-inbox.png" />

    <h3 id="mail-server-forwarder">فوروارد‌ها (Forwards)</h3>

    <p>
      در این قسمت می‌توانید،‌ ایمیل‌های دریافتی را به آدرس ایمیل مشخصی ارسال
      کنید. در صورتی که در نظر دارید یک نسخه از ایمیل‌های دریافتی شما به‌صورت
      خودکار به آدرس ایمیل دیگری ارسال شود، می‌تونید از این قابلیت استفاده کنید.
    </p>

    <ZoomableImage src="/static/mail-server-forwarder.png" />

    <p>
      برای اضافه کردن فوروارد، روی گزینه‌ی <b>ایجاد فوروارد</b> کلیک کرده و
      نشانی مقصد را وارد کنید.
    </p>

    <ZoomableImage src="/static/mail-server-add-forwarder.png" />
  </Layout>
);
