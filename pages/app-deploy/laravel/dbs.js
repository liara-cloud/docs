import Link from "next/link";
import Head from "next/head";
import Highlight from "react-highlight";
import Notice from "../../../components/Notice";
import Layout from "../../../components/Layout";
import PlatformIcon from "../../../components/PlatformIcon";

export default () => (
  <Layout>
    <Head>
      <title>مستندات اتصال به دیتابیس‌ها در برنامه‌های Laravel - لیارا</title>
    </Head>

    <div className="page-head">
      <PlatformIcon platform="laravel" />
      <div className="page-title">
        <h1>پلتفرم Laravel</h1>
        <span className="page-description">(Laravel Platform)</span>
      </div>
    </div>

    <h3>اتصال به دیتابیس‌ها</h3>
    <p>
      در صورتی که تمایلی به خواندن آموزش متنی ندارید می‌توانید ویدیوی آموزشی زیر
      ‌را مشاهده کنید.
    </p>
    <video
      src="https://files.liara.ir/liara/laravel/laravel-mariadb.mp4"
      controls="controls"
      className="block w-full"
      width="100%"
    ></video>
    <p>
      به‌ندرت پیش‌ می‌آید که در برنامه‌ای از دیتابیس استفاده نشده ‌باشد. اگر در
      برنامه Laravel خود، از دیتابیس استفاده کرده‌اید می‌توانید به‌این‌صورت به
      آن متصل شوید.
    </p>
    <p>
      از هر دیتابیسی که لاراول پشتیبانی می‌کند می‌توانید استفاده کنید. صرفا
      کافیست که اطلاعات اتصال به دیتابیسی که ساخته‌اید را از بخش متغیرها برای
      برنامه‌ی‌تان تنظیم کنید. برای نمونه، در ادامه اطلاعات اتصال به یک دیتابیس
      MySQL را قرار داده‌ایم:
    </p>
    <Highlight className="config">
      {`DB_CONNECTION=mysql
DB_HOST=s11.liara.ir
DB_PORT=3306
DB_DATABASE=laravel-starter-db
DB_USERNAME=root
DB_PASSWORD=xxxxxxxxxxxx
`}
    </Highlight>
    <Notice variant="warning">
      توجه داشته باشید که اطلاعات بالا همگی صرفا برای نمونه وارد شده‌اند. شما
      باید متناسب با اطلاعات دیتابیس خودتان مقادیر را جایگذاری کنید.
    </Notice>

    <h3 id="cp">قابلیت Connection Pooling</h3>
    <p>
      شما می‌توانید در برنامه Laravel خود، قابلیت Connection Pooling را نیز فعال
      کنید. در Connection Pooling برنامه به جای ایجاد یک ارتباط (Connection)
      جدید برای انجام عملیات دیتابیسی و بستن آن پس از پایان عملیات، از
      ارتباط‌هایی که قبلاً ایجاد شده‌اند، استفاده می‌کند.
    </p>

    <p>
      استفاده از Connection Pooling کارایی برنامه را افزایش می‌دهد و تاثیر بسیار
      زیادی در بهینه‌سازی و کاهش منابع مورد استفاده برنامه و دیتابیس دارد.
      بنابراین توصیه می‌شود که حتماً در حالت Production، از این قابلیت، استفاده
      کنید.
    </p>
    <p>
      برای فعال‌سازی این قابلیت در برنامه‌های Laravel کافیست که در فایل{" "}
      <span className="code">config/database.php</span> قطعه کد زیر را در بخش
      option تنظیمات مربوط به دیتابیس‌تان بگذارید:
    </p>
    <Highlight className="php">{`PDO::ATTR_PERSISTENT => true,`}</Highlight>
    <p>به عنوان مثال، پیکربندی مربوط به دیتابیس MySQL باید به شکل زیر باشد:</p>
    <Highlight className="code">
      {`'mysql' => [
'driver' => 'mysql',
'url' => env('DB_URL'),
'host' => env('DB_HOST', '127.0.0.1'),
'port' => env('DB_PORT', '3306'),
'database' => env('DB_DATABASE', 'laravel'),
'username' => env('DB_USERNAME', 'root'),
'password' => env('DB_PASSWORD', ''),
'unix_socket' => env('DB_SOCKET', ''),
'charset' => env('DB_CHARSET', 'utf8mb4'),
'collation' => env('DB_COLLATION', 'utf8mb4_unicode_ci'),
'prefix' => '',
'prefix_indexes' => true,
'strict' => true,
'engine' => null,
'options' => extension_loaded('pdo_mysql') ? array_filter([
    PDO::MYSQL_ATTR_SSL_CA => env('MYSQL_ATTR_SSL_CA'),
    PDO::ATTR_PERSISTENT => true,
]) : [],
],`}
    </Highlight>

    <br />

    <Link href="/app-deploy/laravel/migrations" className="next-page">
      متوجه شدم، برو گام بعدی!
    </Link>
  </Layout>
);
