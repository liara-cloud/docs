import Link from "next/link";
import Head from "next/head";
import Highlight from "react-highlight";
import Notice from "../../../components/Notice";
import Layout from "../../../components/Layout";
import PlatformIcon from "../../../components/PlatformIcon";

export default () => (
  <Layout>
    <Head>
      <title>
        مستندات اتصال به دیتابیس‌ها در برنامه‌های Laravel - سرویس ابری لیارا
      </title>
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
      برنامه Laravel ای‌‌تان از دیتابیس استفاده کرده‌اید می‌توانید به‌این‌صورت
      به آن متصل شوید.
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
    <br />

    <Link href="/app-deploy/laravel/migrations">متوجه شدم، برو گام بعدی!</Link>
  </Layout>
);
