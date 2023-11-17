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
      <li>
        <a href="#mail-spam-setting">تنظیم هرزنامه</a>
      </li>
      <li>
        <a href="#mail-block-inbound-rule">مسدود کردن ایمیل‌های ورودی</a>
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

    <h3 id="mail-spam-setting">تنظیم هرزنامه</h3>

    <p>
      با تنظیم حد هرزنامه، لیارا تمام پیام‌های ورودی که امتیاز هرزنامه بالاتر از
      محدوده تعیین‌شده دارند را مسدود می‌کند. با مشخص‌کردن عدد مدنظر خود،
      ایمیل‌های دریافتی‌ای که نمره‌ی هرزنامه‌ی آن‌ها بیشتر از این عدد باشند، در
      بخش <b>هرزنامه</b> قرار می‌گیرند. به صورت پیش‌فرض حدفعلی برابر با ۵ در نظر
      گرفته شده‌است. برای تغییر حد هرزنامه نیاز هست وارد تنظیمات سرور ایمیل
      شوید.
    </p>

    <ZoomableImage src="/static/mail-spam-setting.png" />

    <h3 id="mail-block-inbound-rule">مسدود کردن ایمیل‌های ورودی</h3>
    <p>
      آدرس های ایمیل ورودی را مسدود کنید. با مسدود کردن آدرس ایمیل ورودی، لیارا
      هر پیام ورودی به سرور ایمیل شما را بررسی می کند و پیام‌های دریافتی از سمت
      آدرس ایمیل مسدود شده را دریافت نخواهید کرد. برای مسدود کردن آدرس ایمیل
      ورودی، نیاز هست وارد بخش تنظیمات سرور ایمیل شوید.
    </p>

    <ZoomableImage src="/static/mail-block-inbound-rule.png" />
  </Layout>
);
