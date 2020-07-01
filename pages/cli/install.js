import Layout from "../../components/Layout";
import Head from "next/head";
import Notice from "../../components/Notice";

export default () => (
  <Layout>
    <Head>
      <title>سرویس ابری لیارا | مستندات رابط خط فرمان - Liara CLI</title>
    </Head>

    <h1>رابط خط فرمان لیارا</h1>
    <span className="pageDescription">(Liara CLI)</span>

    <p>
      رابط خط فرمان و یا همان Liara CLI، این امکان را به شما می‌دهد که فقط با
      چند دستور ساده، اپلیکیشن خود را در بستر ابری ما مستقر کنید. اگر با محیط خط
      فرمان و ترمینال آشنایی ندارید، نگران نباشید. دستوراتی که برای کار با لیارا
      نیاز خواهید داشت، بسیار مختصر و کوتاه هستند و نیاز به دانش خاصی ندارند.
    </p>

    <h3>نصب و راه‌اندازی</h3>
    <p>
      برای نصب، فرقی نمی‌کند سیستم‌‌عامل شما Windows ،Linux یا macOS باشد، تنها
      به NodeJS و NPM نیاز دارید.
      <br />
      برای دانلود و نصب NodeJS می‌توانید از لینک مقابل استفاده کنید:{" "}
      <a href="https://nodejs.org/en/">وب‌سایت رسمی NodeJS</a>
    </p>
    <p>
      بعد از نصب NodeJS، با استفاده از دستور زیر، آخرین نسخه CLI بر روی کامپیوتر
      شما نصب می‌گردد:
    </p>
    <pre>
      <code>npm install -g @liara/cli</code>
    </pre>

    <a name="upgrade"></a>
    <h3>ارتقا به نسخه‌ی جدیدتر</h3>
    <p>
      اگر Liara cli را قبلا نصب کرده‌اید و الان صرفا قصد ارتقا آن را دارید، با
      استفاده از دستور زیر می‌توانید نسخه‌ی جدید را نصب کنید:
    </p>
    <pre>
      <code>npm install -g @liara/cli</code>
    </pre>
    <p>و حالا با دستور زیر می‌توانید نسخه‌ی CLI جدید را چک کنید:</p>
    <pre>
      <code>liara -v</code>
    </pre>

    <h3>ورود به حساب کاربری</h3>
    <p>
      برای این‌که بتوانید از CLI استفاده کنید، لازم است که در ابتدا، با استفاده
      از اطلاعات حساب کاربری‌تان در لیارا، وارد شوید:
    </p>
    <pre>
      <code>liara login</code>
    </pre>
    <p>
      بعد از وارد کردن دستور بالا، باید ایمیل و رمز عبور کاربری که با آن در
      لیارا ثبت نام کرده‌اید را وارد کنید.
      <br />
      اگر اطلاعات صحیح باشند، با موفقیت وارد خواهید شد و CLI قابل استفاده خواهد
      بود.
      <br />
      اگر هنوز ثبت نام نکرده‌اید، می‌توانید از لینک رو به رو اقدام کنید:{" "}
      <a href="https://console.liara.ir/register">ثبت نام در لیارا</a>
    </p>

    <a name="trouble"></a>
    <h3>خطاهای رایج در اجرای Liara CLI</h3>
    <p>
      اگر بعد از نصب CLI، خطایی را مانند خطاهای زیر مشاهده کردید، این بخش را
      حتما مطالعه کنید.
      <ul dir="ltr">
        <li>
          <span className="code">command not found</span>
        </li>
        <li>
          <span className="code">
            command is not recognized as an internal or external command
          </span>
        </li>
      </ul>
      دلیل این خطاها معمولا این است که مسیر پکیج‌های{" "}
      <span className="code">npm</span>
      در متغیر <span className="code">PATH</span>
      سیستم عامل شما اضافه نشده است. این مشکل معمولا به دلیل نصب ناقص NodeJS رخ
      می‌دهد.
    </p>
    <p>
      اما جای نگرانی نیست، چرا که می‌توانید به شکل زیر دستورات Liara CLI را وارد
      کنید:
    </p>
    <pre>
      <code>
        {`npx liara login
npx liara deploy`}
      </code>
    </pre>
    <p>و یا به این صورت امتحان کنید:</p>
    <pre>
      <code>
        {`npx @liara/cli login
npx @liara/cli deploy`}
      </code>
    </pre>

    <Notice variant="info">
      در صورت وجود هر مشکل دیگر، حتما به پشتیبانی لیارا اطلاع دهید.
    </Notice>
  </Layout>
);
