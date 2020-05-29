import Layout from "../../../components/Layout";
import Link from "next/link";
import Head from "next/head";
import Highlight from "react-highlight";
import Notice from "../../../components/Notice";

export default () => (
  <Layout>
    <Head>
      <title>
        سرویس ابری لیارا | مستندات استقرار برنامه‌های Laravel - Laravel
      </title>
    </Head>

    <h1>فریم‌ورک Laravel</h1>
    <span className="pageDescription">(Laravel Framework)</span>

    <h3>اتصال به دیتابیس‌ها</h3>
    <p>
      خیلی کم پیش‌می‌آید که در برنامه‌ای از دیتابیس استفاده نشده‌باشد. اگر در
      پروژه Laravel ای‌‌تان از دیتابیس استفاده کرده اید میتوانید به‌این‌صورت به
      آن متصل شوید.
      <ul>
        <li>
          <b>MySQL:</b>
        </li>
        اگر از این پایگاه داده استفاده کرده‌اید کافیست اطلاعات وصل شدن به
        دیتابیس MySQL را در بخش ENV ها وارد کنید (در چند بخش قبل درباره اضافه
        کردن ENV‌ها توضیحاتی داده بودیم):
        <Highlight className="config">
          {`DB_CONNECTION=mysql
DB_HOST=s11.liara.ir
DB_PORT=3306
DB_DATABASE=laravel-starter-db
DB_USERNAME=root
DB_PASSWORD=xxxxxxxxxxxx
`}
        </Highlight>
        <li>
          <b>Redis</b>
        </li>
        در دست تکمیل
        <li>
          <b>MongoDB</b>
        </li>
        در دست تکمیل
      </ul>
    </p>
    <Notice variant="warning">
      توجه داشته باشید که اطلاعات بالا همگی برای برنامه‌ی تست این آموزش میباشد.
      شما متناسب با اطلاعات دیتابیس برنامه‌ی‌تان باید مقادیر را جایگذاری کنید.
    </Notice>
    <br />

    <Link href="/apps/laravel/migrations">متوجه شدم، برو بعدی!</Link>
  </Layout>
);
