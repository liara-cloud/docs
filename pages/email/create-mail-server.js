import Head from "next/head";
import Link from "next/link";
import Layout from "../../components/Layout";
import Notice from "../../components/Notice";
import ZoomableImage from "../../components/ZoomableImage";

export default () => (
  <Layout>
    <Head>
      <title>مستندات ساخت سرور ایمیل - لیارا</title>
    </Head>

    <h1>ساخت سرور ایمیل</h1>
    <span className="page-description">(Create a new Mail Server)</span>

    <h4>فهرست عناوین:</h4>
    <ul className="mt-0">
      <li>
        <a href="#transactional-email">
          ایمیل تراکنشی (Transactional Email) چیست؟
        </a>
      </li>
      <li>
        <a href="#create-mail-server">ساخت سرور ایمیل</a>
      </li>
      <li>
        <a href="#config-dns-setup">تنظیم رکوردهای DNS</a>
      </li>
      <li>
        <a href="#mail-server-mode">تفاوت حالت توسعه (DEV) و LIVE</a>
      </li>
      <li>
        <a href="#change-mail-server-mode">تغییر حالت سرور ایمیل</a>
      </li>
    </ul>

    <h3 id="transactional-email">ایمیل تراکنشی (Transactional Email) چیست؟</h3>

    <p>
      ایمیل تراکنشی یا همان <strong>Transactional Email</strong> به ایمیل‌هایی
      گفته می‌شود که در پاسخ به یک عمل ارسال می‌شوند. برای مثال می‌توان
      ایمیل‌های تایید ثبت نام، فراموشی رمز عبور و سایر موارد مشابه را از دسته‌ی
      ایمیل‌های تراکنشی دانست.
    </p>

    <Notice variant="warning">
      توجه داشته باشید که نمی‌توانید از این سرویس برای ارسال ایمیل‌های تبلیغاتی
      مانند: خبرنامه، جشنواره فروش و سایر موارد مشابه استفاده کنید و در صورت
      مشاهده، سرویس ایمیل شما مسدود خواهد شد.
    </Notice>

    <h3 id="create-mail-server">ساخت سرور ایمیل</h3>

    <p>
      در صورتی که تمایلی به خواندن آموزش متنی ندارید؛ می‌توانید ویدیوی آموزشی
      زیر ‌را مشاهده کنید.
    </p>

    <video
      src="https://files.liara.ir/liara/email-server/email-service-interface.mp4"
      controls="controls"
      className="block w-full"
      width="100%"
    ></video>
    <p>
      وارد قسمت <b>ایمیل</b> شده و بر روی گزینه‌ی <b>ایجاد سرور ایمیل</b> کلیک
      کنید.
    </p>
    <p>
      ساخت سرور ایمیل برای ریشه‌ی دامنه یعنی <strong>example.com</strong> و یا
      زیر دامنه‌هایی مانند <strong>subdomain.example.com</strong> ممکن است.
    </p>

    <ZoomableImage src="/static/create-mail-server.png" />

    <p>
      در مرحله بعد نام دامنه‌ای که تمایل دارید از آن ایمیل ارسال کنید را وارد
      کنید. توجه داشته باشید برای ایجاد سرویس ایمیل باید دسترسی به ایجاد
      رکورد‌های <b>DNS</b> برای دامنه‌تان را داشته باشید.
    </p>

    <ZoomableImage src="/static/mail-server-domain.png" />

    <h3 id="config-dns-setup">تنظیم رکوردهای DNS</h3>

    <p>
      پس از ایجاد سرور ایمیل و انتقال به صفحه‌ی زیر بایستی رکوردهای <b>DNS</b>{" "}
      نمایش داده شده را به رکوردهای ثبت شده در زمان اتصال دامنه، اضافه کرده و بر
      روی دکمه‌ی بررسی وضعیت رکوردها کلیک کنید. در صورتی که از سرویس <b>DNS</b>{" "}
      لیارا استفاده می‌کنید، این امکان وجود دارد که با کلیک بر روی گزینه‌ی{" "}
      <b>افزودن خودکار رکوردها</b> رکورد‌های مورد نیاز سرور ایمیل رو ثبت کنید.
      همچنین این امکان برای شما فراهم است تا درصورت انتخاب دامنه‌ی اشتباه و یا
      هر دلیل دیگر سرور ایمیل‌ را حذف کرده و مجددا برای ایجاد سرور ایمیل اقدام
      بفرمایید.
    </p>

    <ZoomableImage src="/static/mail-server-dns.png" />

    <h4>DKIM Record</h4>
    <p>
      یک رکورد <span className="code">TXT</span>
      است که یک<span className="code">Public Key</span>
      که به‌صورت تصادفی توسط لیارا ساخته شده را نگه‌داری می‌کند.
      <br />
      برای هر سرور ایمیل یک <span className="code">Private Key</span>
      هم ساخته می‌شود که توسط لیارا نگه‌داری شده و با استفاده از آن، ایمیل‌های
      ارسالی شما امضای دیجیتال خواهند داشت.
      <br />
      در این حالت، گیرنده‌ی ایمیل می‌تواند مطمئن شود که ایمیل‌ها واقعا از
      دامنه‌ی شما ارسال شده‌اند و توسط شخص دیگری که قصد سو استفاده از دامنه‌ی
      شما را دارد، ارسال نشده‌اند.
    </p>

    <h4>SPF Record</h4>
    <p>
      رکورد Sender Policy Framework نوعی رکورد <span className="code">TXT</span>{" "}
      است. احراز هویت ایمیل برای جلوگیری از ارسال پیام از طرف دامنه شما به
      وسیله‌ی ارسال کننده‌های SPAM از طریق این رکورد انجام می‌شود. این رکورد
      مشخص می‌کند کدام سرور‌های ایمیل مجاز هستند تا از طرف دامنه‌ی شما ایمیل
      ارسال کنند.
    </p>

    <h4>MX Record</h4>
    <p>
      رکورد <span className="code">MX (Mail Exchanger)</span> تعیین می کند که
      کدام سرور ایمیل، مسئول رسیدگی و دریافت ایمیل‌های شما است. با تنظیم این
      رکورد، لیارا امکان دریافت، ذخیره و نمایش ایمیل‌های دریافتی را خواهد داشت.
    </p>

    <h4>Return Path Record</h4>
    <p>
      تنظیم این رکورد <span className="code">CNAME</span>، برای سازگار شدن
      ایمیل‌های ارسالی شما با پروتکل <span className="code">DMARC</span>و تحویل
      بهتر ایمیل‌های ارسالی شما نیاز است.
    </p>

    <br />
    <p>
      درنهایت درصورتی که تمام رکوردها را به‌درستی وارد کرده باشید به صفحه‌ی زیر
      منتقل خواهید شد.
    </p>

    <ZoomableImage src="/static/mail-server-index.png" />

    <h3 id="mail-server-mode">تفاوت حالت توسعه (DEV) و LIVE</h3>

    <p>
      به صورت پیش‌فرض سرور ایمیل در حالت <b>DEV</b> ساخته می‌شود. با فعال‌بودن
      حالت توسعه (DEV) ، ایمیل‌ها در صندوق خروجی شما باقی می‌مانند و به کاربر
      ارسال نمی‌شوند تا شما بتوانید در زمان توسعه و تست نرم‌افزارتان، به‌راحتی
      به هر آدرسی ایمیل ارسال کنید و نگران اسپم‌شدن سرور ایمیل‌تان نباشید. برای
      استفاده در محیط production نیاز هست حالت توسعه (DEV) رو غیر فعال کرده، در
      این صورت حالت سرور ایمیل شما به LIVE تغییر یافته و ایمیل‌های شما به ایمیل
      مقصد ارسال می‌شوند.
    </p>

    <h3 id="change-mail-server-mode">تغییر حالت سرور ایمیل</h3>

    <p>
      برای غیر فعال کردن حالت توسعه (DEV) نیاز هست وارد سرور ایمیل شده و در قسمت
      تنظیمات حالت توسعه (DEV) را غیر فعال کنید.
    </p>

    <ZoomableImage src="/static/mail-server-mode.png" />
  </Layout>
);
