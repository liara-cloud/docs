import Head from "next/head";
import Link from "next/link";
import Layout from "../../components/Layout";
import ZoomableImage from "../../components/ZoomableImage";

export default () => (
  <Layout>
    <Head>
      <title>مستندات ارسال ایمیل - لیارا</title>
    </Head>

    <h1>ارسال ایمیل</h1>
    <span className="page-description">(Send email)</span>

    <h4>فهرست عناوین:</h4>
    <ul className="mt-0">
      <li>
        <a href="#mail-server-account">اضافه کردن نشانی</a>
      </li>
      <li>
        <a href="#send-email-console">ارسال ایمیل از طریق پنل اختصاصی لیارا</a>
      </li>
      <li>
        <a href="#add-smtp-user">افزودن کاربر SMTP</a>
      </li>
    </ul>

    <h3 id="mail-server-account">اضافه کردن نشانی‌</h3>

    <p>
      در این قسمت می‌توانید برای اهداف ارسال ایمیل‌تون نشانی دلخواه ایجاد کنید.
      به عنوان مثال:‌ <b>info, support, sales</b>
    </p>

    <ZoomableImage src="/static/mail-server-account.png" />

    <p>
      برای اضافه کردن نشانی، روی گزینه‌ی <b>افزودن نشانی</b> کلیک کرده و نشانی
      دلخواه را وارد کنید.
    </p>

    <ZoomableImage src="/static/mail-server-account-add.png" />

    <h3 id="send-email-console">ارسال ایمیل از طریق پنل اختصاصی لیارا</h3>

    <p>
      شما می‌توانید در این بخش با تعیین عنوان، فرستنده، گیرنده و محتوا به‌منظور
      ارسال ایمیل‌های فوری و آزمایشی استفاده کنید. همچنین امکان پیوست فایل فراهم
      است.
    </p>

    <ZoomableImage src="/static/mail-server-send-email-console.png" />

    <h3 id="add-smtp-user">افزودن کاربر SMTP</h3>

    <p>
      برای ارسال ایمیل از طریق <b>SMTP</b> نیاز هست در این قسمت دسترسی{" "}
      <b>SMTP</b> بسازید. امکان ساخت چندین کاربر <b>SMTP</b> وجود داره.
    </p>

    <ZoomableImage src="/static/mail-server-smtp.png" />

    {/* TODO:
      - How to create SMTP users?
      - Where to find SMTP server host and port?
      - List platform logos and link to their respective docs
    */}
  </Layout>
);
