import Head from "next/head";
import Link from "next/link";
import Notice from "../../components/Notice";
import Layout from "../../components/Layout";
import Asciinema from "../../components/Asciinema";
import Highlight from "react-highlight";

export default () => (
  <Layout>
    <Head>
      <title>مستندات نصب و راه‌ندازی لیارا CLI - لیارا</title>
    </Head>

    <h1>رابط خط فرمان لیارا</h1>
    <span className="page-description">(Liara CLI)</span>

    <p>
      رابط خط فرمان و یا همان Liara CLI، این امکان را به شما می‌دهد که فقط با
      چند دستور ساده، اپلیکیشن خود را در بستر ابری ما مستقر کنید. اگر با محیط خط
      فرمان و ترمینال آشنایی ندارید، نگران نباشید. دستوراتی که برای کار با لیارا
      نیاز خواهید داشت، بسیار مختصر و کوتاه هستند و نیاز به دانش خاصی ندارند.
    </p>

    <h3>نصب و راه‌اندازی</h3>
    <p>
      برای نصب، فرقی نمی‌کند سیستم‌‌عامل شما Windows ،Linux یا macOS باشد، تنها
      به NodeJS و npm نیاز دارید. برای دانلود و نصب NodeJS می‌توانید از لینک
      مقابل استفاده کنید:{" "}
      <a href="https://nodejs.org/en/">وب‌سایت رسمی NodeJS</a>
    </p>
    <p>
      بعد از نصب NodeJS، با استفاده از دستور زیر، آخرین نسخه CLI بر روی کامپیوتر
      شما نصب می‌گردد:
    </p>

    <Highlight className="bash">npm install -g @liara/cli</Highlight>

    <Asciinema id="452862" />

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
      در صورتی که موفق به نصب CLI نمی‌شوید، از طریق تیکت با پشتیبانی لیارا
      ارتباط بگیرید.
    </Notice>

    <br />
    <Link href="/cli/login" className="next-page">
      متوجه شدم، برو گام بعدی!
    </Link>
  </Layout>
);
