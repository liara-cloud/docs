import Layout from "../../../components/Layout";
import Link from "next/link";
import Head from "next/head";
import Highlight from "react-highlight";
import Notice from "../../../components/Notice";

export default () => (
  <Layout>
    <Head>
      <title>Laravel سرویس ابری لیارا | مستندات استقرار برنامه‌های</title>
    </Head>

    <h1>برنامه‌های Laravel</h1>
    <span className="pageDescription">(Laravel Apps)</span>

    <h3>اتصال به دیتابیس‌ها</h3>
    <p>
      به‌ندرت پیش‌ می‌آید که در برنامه‌ای از دیتابیس استفاده نشده ‌باشد. اگر در
      برنامه Laravel ای‌‌تان از دیتابیس استفاده کرده‌اید می‌توانید به‌این‌صورت به
      آن متصل شوید.
    </p>
    <ul>
      <li>
        <b>MySQL:</b>
      </li>
      <p>
        اگر از این پایگاه داده استفاده کرده‌اید کافیست اطلاعات اتصال به
        دیتابیس MySQL را در بخش env ها وارد کنید (در چند بخش قبل درباره اضافه
        کردن env ها توضیحاتی داده بودیم):
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
    </ul>
    <Notice variant="warning">
      توجه داشته باشید که اطلاعات بالا همگی تستی است. شما متناسب با اطلاعات
      دیتابیس برنامه‌ی‌تان باید مقادیر را جایگذاری کنید.
    </Notice>
    <br />

    <Link href="/app-deploy/laravel/migrations">متوجه شدم، برو گام بعدی!</Link>
  </Layout>
);
