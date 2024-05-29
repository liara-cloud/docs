import Head from "next/head";
import Link from "next/link";
import Layout from "../../components/Layout";
import Notice from "../../components/Notice";
import PlatformIcon from "../../components/PlatformIcon";
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
        <a href="#send-email-console">ارسال سریع ایمیل از کنسول لیارا</a>
      </li>
      <li>
        <a href="#add-smtp-user">افزودن کاربر SMTP</a>
      </li>
      <li>
        <a href="#smtp-server-address">اطلاعات دسترسی به سرور SMTP</a>
      </li>
      <li>
        <a href="#mail-server-platform">آموزش استفاده در پلتفرم‌ها</a>
      </li>
    </ul>

    <h3 id="mail-server-account">اضافه کردن نشانی‌</h3>

    <p>
      در این قسمت می‌توانید برای اهداف ارسال و دریافت ایمیل نشانی دلخواه ایجاد
      کنید. به عنوان مثال:‌ <b>info, support, sales</b>
      <br />
      توجه داشته باشید که تنها از این نشانی‌ها می‌توانید در بخش
      <span className="code">From</span>
      ایمیل‌های ارسالی استفاده کنید.
    </p>

    <ZoomableImage src="/static/mail-server-account.png" />

    <p>
      برای اضافه کردن نشانی، روی گزینه‌ی <b>افزودن نشانی</b> کلیک کرده و نشانی
      دلخواه را وارد کنید.
    </p>

    <ZoomableImage src="/static/mail-server-account-add.png" />

    <h3 id="send-email-console">ارسال سریع ایمیل از کنسول لیارا</h3>

    <p>
      شما می‌توانید در این بخش با تعیین عنوان، فرستنده، گیرنده و محتوا به‌منظور
      ارسال ایمیل‌های فوری و آزمایشی استفاده کنید. همچنین امکان پیوست فایل فراهم
      است.
    </p>

    <ZoomableImage src="/static/mail-server-send-email-console.png" />

    <h3 id="add-smtp-user">افزودن کاربر SMTP</h3>

    <p>
      برای ارسال ایمیل از طریق پروتکل <b>SMTP</b> نیاز هست در این قسمت یک دسترسی
      ایجاد کنید. در نظر داشته باشید امکان ساخت چندین کاربر <b>SMTP</b> ممکن
      هست.
    </p>

    <ZoomableImage src="/static/mail-server-smtp.png" />

    <p>
      برای اضافه کردن کاربر <b>SMTP</b>، روی گزینه‌ی افزودن کاربر <b>SMTP</b>{" "}
      کلیک کنید. در این قسمت نیاز هست توضیحاتی برای کاربر <b>SMTP</b> وارد کنید
      تا در آینده کاربرد آن را فراموش نکنید. در نهایت روی گزینه‌ی{" "}
      <b>ساخت کاربر</b> کلیک کنید.
    </p>

    <ZoomableImage src="/static/mail-server-smtp-desc.png" />

    <br />
    <Notice variant="warning">
      توجه داشته باشید که Password تنها یک‌بار به شما نمایش داده می‌شود بنابراین
      آن را در جایی مطمئن ذخیره کنید.
    </Notice>

    <br />

    <ZoomableImage src="/static/mail-server-add-smtp.png" />

    <h3 id="smtp-server-address">اطلاعات دسترسی به سرور SMTP</h3>

    <p>
      در این بخش اطلاعات لازم برای استفاده از دسترسی SMTP نمایش داده می‌شود.
    </p>

    <ZoomableImage src="/static/mail-server-smtp-address.png" />

    <h3 id="mail-server-platform">آموزش استفاده در پلتفرم‌ها</h3>

    <p>
      برای کسب اطلاعات بیشتر در رابطه با نحوه‌ی استفاده از دسترسی SMTP، روی
      پلتفرم مورد نظرتان کلیک کنید.
    </p>

    <div className="platforms">
      <Link href="/app-deploy/nodejs/email">
        <PlatformIcon platform="nodejs" />
        <span>NodeJS</span>
      </Link>

      <Link href="/app-deploy/php/email">
        <PlatformIcon platform="php" />
        <span>PHP</span>
      </Link>

      <Link href="/app-deploy/laravel/email">
        <PlatformIcon platform="laravel" />
        <span>Laravel</span>
      </Link>

      <Link href="/app-deploy/django/email">
        <PlatformIcon platform="django" />
        <span>Django</span>
      </Link>

      <Link href="/app-deploy/flask/email">
        <PlatformIcon platform="flask" />
        <span>Flask</span>
      </Link>

      <Link href="/app-deploy/dotnet/email">
        <PlatformIcon platform="dotnet" />
        <span>.NET</span>
      </Link>
    </div>
  </Layout>
);
