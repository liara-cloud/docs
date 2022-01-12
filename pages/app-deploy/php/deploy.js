import Link from "next/link";
import Head from "next/head";
import Notice from "../../../components/Notice";
import Layout from "../../../components/Layout";
import ProjectIcon from "../../../components/ProjectIcon";

export default () => (
  <Layout>
    <Head>
      <title>مستندات استقرار برنامه‌های PHP - سرویس ابری لیارا</title>
    </Head>

    <div className="page-head">
      <ProjectIcon platform="php" />
      <div className="page-title">
        <h1>برنامه‌های PHP</h1>
        <span className="page-description">(PHP Apps)</span>
      </div>
    </div>

    <h3>‌استقرار اولین برنامه</h3>

    <h4>فهرست عناوین:</h4>
    <ul className="mt-0">
      <li><a href="#installing-liara-cli">نصب Liara CLI</a></li>
      <li><a href="#login">ورود به حساب کاربری</a></li>
      <li><a href="#deploy">اولین استقرار</a></li>
    </ul>

    <h3 id="installing-liara-cli">نصب Liara CLI</h3>
    <p>
      اگر Liara CLI را نصب ندارید می‌توانید با اجرای دستور زیر آن‌ را به‌راحتی
      نصب کنید:
      {' '}
      <Link href="/cli/install">
        توضیحات بیشتر
      </Link>
    </p>
    <pre>
      <code>{`$ npm install -g @liara/cli`}</code>
    </pre>
    <h3 id="login">ورود به حساب کاربری</h3>
    <p>
      برای ورود به حساب کاربری خود به وسیله Liara CLI کافیست دستور زیر را وارد
      کنید و ایمیل و رمزعبوری که با آن حساب کاربری خود را ایجاد کرده‌اید را وارد
      نمایید:
    </p>
    <pre>
      <code>{`$ liara login`}</code>
    </pre>
    <h3 id="deploy">اولین استقرار</h3>
    <p>
      <b>گام اول)</b> کافیست به بخش{" "}
      <a href="https://console.liara.ir/apps/create" target="_blank">
        ایجاد برنامه‌ها در لیارا
      </a>{" "}
      بروید و با انتخاب پلتفرم PHP و نوشتن شناسه برنامه‌ی موردنظرتان و در نهایت
      انتخاب پلن، برنامه خود را ایجاد کنید. برای نمونه، ما در این آموزش برای
      برنامه آزمایشی‌مان، شناسه php-starter را انتخاب کردیم.
    </p>
    <p>
      <b>گام دوم)</b> کافیست وارد ریشه برنامه‌ی‌تان شده و به وسیله دستور زیر
      اولین استقرار خود را اجرا کنید. بعد از وارد کردن، دستور از شما شناسه
      برنامه‌ موردنظرتان را می‌پرسد و بعد از انتخاب شناسه، لیارا عملیات استقرار
      را شروع می‌کند.
    </p>
    <pre>
      <code>{`$ liara deploy`}</code>
    </pre>
    <p>
      توجه داشته باشید که لازم است در ریشه‌ی برنامه‌ی‌تان حداقل یک فایل با نام
      <span className="code">index.php</span>
      داشته باشید. در غیر این صورت لیارا نمی‌تواند پلتفرم برنامه‌ی‌تان را تشخیص
      دهد و لازم خواهد بود با استفاده از دستور زیر پلتفرم‌تان را مشخص کنید.
    </p>
    <pre>
      <code>{`$ liara deploy --platform=php`}</code>
    </pre>
    <Notice variant="info">
      لیارا به صورت خودکار پکیج‌هایی که در فایل
      <span className="code">composer.json</span>
      لیست شده‌اند را برای شما نصب می‌کند. پس نیازی ندارید که به دنبال اجرای
      دستور
      <span className="code">composer install</span>
      باشید. از آن‌جایی که اجرای این دستور زمان‌بر است، برای سرعت بیشتر، این
      دستور را روی سرورهای قدرتمندمان اجرا می‌کنیم تا زمان زیادی را منتظر
      نمانید.
    </Notice>
    <p>
      <b>گام سوم و پایانی)</b> بعد از اجرای دستورات گام‌های قبلی، لیارا به
      برنامه شما یک زیردامنه رایگان اختصاص می‌دهد که به وسیله آن می‌توانید مطمئن
      شوید که برنامه‌ی‌تان به صورت صحیح به بستر لیارا منتقل شده است یا خیر. این
      آدرس بر اساس شناسه برنامه‌ی شما است، برای نمونه:
    </p>

    <p dir="ltr">https://php-starter.liara.run</p>

    <Link href="/app-deploy/php/envs">متوجه شدم، برو گام بعدی!</Link>
  </Layout>
);
