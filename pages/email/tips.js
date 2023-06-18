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
        <a href="#check-spam-rate">بررسی درصد هرزنامه بودن ایمیل</a>
      </li>
      <li>
        <a href="#outgoing-email-rate-limits">محدودیت ارسال ایمیل‌</a>
      </li>
      <li>
        <a href="#common-email-problems">مشکلات رایج ایمیل</a>
      </li>
    </ul>

    <h3 id="pop3-imap">پروتکل‌های POP3/IMAP</h3>

    <p>
      باتوجه به اینکه سرویس ایمیل لیارا ارائه دهنده صندوق پستی (Mailbox) نیست و
      برای نیازمندی‌های برنامه‌نویسی طراحی شده است، امکان استفاده از پروتکل‌های
      POP3/IMAP وجود ندارد. در لیارا پنلی اختصاصی برای نمایش{" "}
      <Link href="/email/inbound-email#mail-server-inbox">
        ایمیل‌های دریافتی
      </Link>{" "}
      در نظر گرفته شده است.
    </p>

    <h3 id="send-spam">محدودیت ارسال هرزنامه</h3>

    <p>
      در هنگام ارسال ایمیل، درصد هرزنامه‌ی ایمیل شما (Spam Rate) بررسی خواهد شد
      و امکان ارسال ایمیل با درصد هرزنامه‌ی بالا وجود ندارد.
    </p>

    <h3 id="check-spam-rate">بررسی درصد هرزنامه بودن ایمیل</h3>

    <p>
      شما می‌توانید درصد Spam بودن هر ایمیل را در صفحه‌های{" "}
      <Link href="/email/inbound-email#mail-server-inbox">صندوق ورودی</Link>،{" "}
      <Link href="/email/send-email">ارسال شده‌ها</Link> و صفحه‌‌ای که محتوای هر
      ایمیل را نمایش می‌دهد، مشاهده کنید. چنانچه درصد اسپم بودن ایمیل‌های ارسال
      شده توسط شما ٪۱۰۰ باشد، ایمیل شما از طرف لیارا ارسال نخواهد شد.
    </p>

    <p>
      برای مطالعه در رابطه با نحوه‌ی بهبود ایمیل می‌توانید این{" "}
      <a
        href="https://www.copernica.com/en/documentation/some-tips-to-lower-your-email-spam-score"
        target="_blank"
      >
        نوشته
      </a>{" "}
      را مطالعه کرده و همچنین ایمیل خود را با استفاده از ابزارهای زیر،
      اعتبارسنجی کنید:
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

    <h3 id="outgoing-email-rate-limits">محدودیت ارسال ایمیل‌</h3>

    <p>
      برای جلوگیری از ارسال ایمیل هرزنامه، به صورت پیش‌فرض محدودیت‌هایی بر روی
      تمام سرورهای ایمیل اعمال شده است. در صورت نیاز، با بررسی ایمیل‌های ارسالی
      شما، این امکان وجود دارد تا محدودیت را برای شما به عدد بالاتری افزایش
      دهیم. نیاز است یک تیکت ارسال کرده و مورد استفاده‌ی خود را توضیح دهید. در
      صورت تایید، به شما اجازه‌ی ارسال ایمیل‌های بیشتر داده خواهد شد.
    </p>

    <p>به صورت پیش‌فرض محدودیت‌ها به شرح زیر است:</p>

    <table className="endpoint-inputs" style={{ direction: "rtl" }}>
      <tr className="endpoint-inputs__group">
        <td width="30%">بازه‌ی زمانی</td>
        <td>تعداد ایمیل ارسالی مجاز</td>
      </tr>
      <tr>
        <td>در هر ساعت</td>
        <td>۵۰</td>
      </tr>
      <tr className="endpoint-inputs__group">
        <td>در هر روز</td>
        <td>۵۰۰</td>
      </tr>
      <tr>
        <td>در هر ماه</td>
        <td>۵۰۰۰</td>
      </tr>
    </table>

    <h3 id="common-email-problems">مشکلات رایج ایمیل</h3>

    <p>
      ممکن است چندین دلیل وجود داشته باشد که ایمیل شما ارسال نشود و یا ایمیل شما
      به مقصد نرسد. برخی از دلایل معمول عبارتند از:
    </p>

    <p>
      ۱. آدرس ایمیل نادرست: اگر آدرس ایمیل وارد شده نادرست باشد، پیام تحویل داده
      نخواهد شد.
    </p>

    <p>
      ۲. فیلتر هرزنامه: اگر پیام شما حاوی کلمات کلیدی یا عبارات خاصی باشد که
      فیلتر هرزنامه را فعال کند، ممکن است ایمیل شما به دریافت کننده تحویل داده
      نشود.
    </p>

    <p>
      ۳. آدرس ایمیل فرستنده مسدود شده باشد: اگر دریافت کننده آدرس ایمیل شما را
      مسدود کرده باشد، پيام شما تحويل داده نخواهد شد.
    </p>

    <p>
      ۴. محدوديت حجم پيوست: حداکثر حجم پيوست برای ايميل های ارسال شده ۱۰ مگابایت
      هست. اگر پيوست شما بيش از حداکثر حجم باشد، پيام شما تحويل داده نخواهد شد.
    </p>

    <p>
      ۵. خطای "530 authentication error" معمولاً با فرایند تأیید اعتبار SMTP
      مرتبط است. این خطا هنگامی رخ می دهد که کاربر سعی می کند یک ایمیل را ارسال
      کند اما اطلاعات مرتبط با `SMTP` را به درستی وارد نکرده‌ است. اگر هنگام
      تلاش برای ارسال ایمیل نام کاربری یا گذرواژه را اشتباه وارد کنید، این خطا
      را دریافت خواهید کرد. لطفا اطلاعات مرتبط با اعتبارسنجی `SMTP` خود را
      دوباره بررسی کرده و مجددا ایمیل‌ مورد نظرتان را ارسال کنید.
    </p>
  </Layout>
);
