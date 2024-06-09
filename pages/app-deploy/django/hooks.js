import Head from "next/head";
import Link from "next/link";
import Highlight from "react-highlight";
import Layout from "../../../components/Layout";
import Notice from "../../../components/Notice";
import PlatformIcon from "../../../components/PlatformIcon";
import Table from "../../../components/Table";

const table_headers = [
  "نام هوک",
  "زمان اجرا",
  "امکان دسترسی به envها",
  "مناسب برای",
];
const table_body = [
  [
    "liara_pre_build.sh",
    "قبل از بیلد فایل‌های قسمت فرانت برنامه",
    "ندارد",
    "نصب پکیج‌های سیستمی لازم با apt-get",
  ],
  [
    "liara_post_build.sh",
    "بعد از بیلد فایل‌های قسمت فرانت برنامه",
    "ندارد",
    "اجرای دستورات مرتبط با cache و بهینه‌سازی",
  ],
  [
    "liara_pre_start.sh",
    "قبل از اجرای برنامه ",
    "دارد",
    "مناسب اجرای migrationها",
  ],
];

export default () => (
  <Layout>
    <Head>
      <title>مستندات استفاده از hooks در برنامه‌های Django - لیارا</title>
    </Head>

    <div className="page-head">
      <PlatformIcon platform="django" />
      <div className="page-title">
        <h1>پلتفرم Django</h1>
        <span className="page-description">(Django Platform)</span>
      </div>
    </div>

    <h3>Hookها</h3>

    <p>
      Hook در توسعه یک برنامه، تکنیکی است که به شما امکان می‌دهد تا رفتار
      پیش‌فرض فریم‌ورک یا سیستم برنامه خود را تغییر دهید یا بهبود بخشید. Hook به
      برنامه‌نویسان اجازه می‌دهد تا کدهای خود را در نقاط خاصی از اجرای یک برنامه
      وارد کنند و به این ترتیب تعامل بیشتری با برنامه داشته باشند.
    </p>

    <h3>استفاده از Hook در برنامه‌های Django</h3>
    <p>
      برای استفاده از Hookها در برنامه خود می‌توانید سه فایل زیر را در برنامه
      خود ایجاد کنید:
    </p>

    <Table headers={table_headers} data={table_body} />

    <p>
      به عنوان مثال، می‌توانید در فایل{" "}
      <span className="code">liara_pre_start.sh</span> دستورات مربوط به
      migration را بنویسید تا نیازی نباشد که پس از استقرار برنامه، آن را به صورت
      دستی در خط فرمان برنامه خود، اجرا کنید:
    </p>

    <Highlight className="sh">
      {`echo "Running pre-start script..."

# run migrations
python manage.py migrate

# other needed commands
# ...

echo "Pre-start script finished."`}
    </Highlight>

    <Notice variant="warning">
      توجه داشته باشید که در{" "}
      <a href="/app-deploy/django/tips#python-version">
        نسخه‌های بدون آپدیت پایتون{" "}
      </a>
      ، این قابلیت پشتیبانی نمی‌شود.
    </Notice>
    <br />
    <Link href="/app-deploy/django/tips" className="next-page">
      متوجه شدم، برو گام بعدی!
    </Link>
  </Layout>
);
