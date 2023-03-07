import Head from "next/head";
import Link from "next/link";
import Layout from "../../components/Layout";

export default () => (
  <Layout>
    <Head>
      <title>مستندات نکات تکمیلی سرویس ایمیل - لیارا</title>
    </Head>

    <h1>توضیحات و نکات تکمیلی</h1>
    <span className="page-description">
      (Tips, Spam checks and Rate limits)
    </span>

    <h4>فهرست عناوین:</h4>
    <ul className="mt-0">
      <li>
        <a href="#pop3-imap">پروتکل‌های POP3/IMAP</a>
      </li>
      <li>
        <a href="#send-spam">محدودیت ارسال هرزنامه</a>
      </li>
      <li>
        <a href="#check-spam-rate">بررسی درصد اسپم بودن ایمیل</a>
      </li>
      <li>
        <a href="#outgoing-email-rate-limit">محدودیت ارسال ایمیل‌</a>
      </li>
    </ul>

    <h3 id="pop3-imap">پروتکل‌های POP3/IMAP</h3>

    <p>
      باتوجه به اینکه سرویس ایمیل لیارا ارائه دهنده صندوق پستی (mailbox) نیست،
      امکان استفاده از پروتکل‌های POP3/IMAP وجود ندارد. در لیارا پنل اختصاصی
      برای نمایش{" "}
      <Link href="/email/inbound-email#mail-server-inbox">
        ایمیل‌های دریافتی
      </Link>{" "}
      در نظر گرفته شده است.
    </p>

    <h3 id="send-spam">محدودیت ارسال هرزنامه</h3>

    <p>
      در هنگام ارسال ایمیل میزان اسپم بودن ایمیل شما بررسی خواهد شد و امکان
      ارسال ایمیل با درصد اسپم بالا وجود نداره.
    </p>

    <h3 id="check-spam-rate">بررسی درصد اسپم بودن ایمیل</h3>

    <p>
      شما می‌توانید درصد اسپم بودن هر ایمیل را در صفحه‌های{" "}
      <Link href="/email/inbound-email#mail-server-inbox">صندوق ورودی</Link>،{" "}
      <Link href="/email/send-emaill">ارسال شده‌ها</Link> و صفحه‌‌ای که محتوای
      هر ایمیل را نمایش می‌دهد، مشاهده کنید. چنانچه درصد اسپم بودن ایمیل‌های
      ارسال شده توسط شما ۱۰۰٪ باشد، ایمیل شما از طرف لیارا ارسال نخواهد شد.
    </p>

    <p>
      برای مطالعه در رابطه با نحوه‌ی بهبود ایمیل می‌توانید این{" "}
      <a
        href="https://www.copernica.com/en/documentation/some-tips-to-lower-your-email-spam-score"
        target="_blank"
      >
        مطلب
      </a>{" "}
      را مطالعه کرده و همچنین ایمیل خود را با استفاده از ابزارهای زیر، اعتبار
      سنجی کنید:
    </p>
    <ul>
      <li>
        <a href="https://www.mailgenius.com/" target="_blank" rel="noopener">
          mailgenius
        </a>
      </li>
      <li>
        <a
          href="https://www.barracudacentral.org/lookups"
          target="_blank"
          rel="noopener"
        >
          barracudacentral lookups
        </a>
      </li>
      <li>
        <a href="https://www.mail-tester.com/" target="_blank" rel="noopener">
          mail-tester
        </a>
      </li>
    </ul>
    <p>
      درصورتی که احساس کردید ایمیل‌های شما به مقصد مورد نظر ارسال نمی‌شود باید
      به‌کمک ابزارهای زیر بررسی کنید که دامنه‌ی شما در لیست سیاه قرار نگرفته
      باشد:
    </p>
    <ul>
      <li>
        <a
          href="https://mxtoolbox.com/blacklists.aspx"
          target="_blank"
          rel="noopener"
        >
          mxtoolbox blacklists check
        </a>
      </li>
      <li>
        <a
          href="https://www.debouncer.com/blacklistlookup"
          target="_blank"
          rel="noopener"
        >
          debouncer blacklistlookup
        </a>
      </li>
    </ul>

    <h3 id="check-spam-rate">محدودیت ارسال ایمیل‌</h3>

    <p>
      برای جلوگیری از ارسال ایمیل اسپم به صورت پیش‌فرض محدودیت اعمال شده. در
      صورت نیاز، با بررسی ایمیل‌های ارسالی شما، این امکان وجود دارد تا محدودیت
      رو برای شما به عدد بالاتری افزایش دهیم. نیاز هست یک تیکت ارسال کرده و مورد
      استفاده‌ی خود را توضیح بفرمایید.
    </p>

    <p>به صورت پیش‌فرض محدودیت‌ها به شرح زیر می‌باشد:</p>

    <table className="endpoint-inputs">
      <tr className="endpoint-inputs__group">
        {/* <td colSpan={3}>BODY</td> */}
      </tr>
      <tr>
        <td>۵۰</td>
        <td>در هر ساعت</td>
        <td className="endpoint-inputs__description"></td>
      </tr>
      <tr className="endpoint-inputs__group ">
        <td>۵۰۰</td>
        <td>در هر روز</td>
        <td className="endpoint-inputs__description"></td>
      </tr>
      <tr>
        <td>۵۰۰۰</td>
        <td>در هر ماه</td>
        <td className="endpoint-inputs__description"></td>
      </tr>
    </table>
  </Layout>
);
