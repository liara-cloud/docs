import Layout from "../../../components/Layout";
import Link from "next/link";
import Head from "next/head";
import Highlight from "react-highlight";
import Notice from "../../../components/Notice";

export default () => (
  <Layout>
    <Head>
      <title>ASP.Net Core سرویس ابری لیارا | مستندات استقرار برنامه‌های</title>
    </Head>

    <h1>فریم‌ورک ASP.Net Core</h1>
    <span className="pageDescription">(ASP.Net Core Framework)</span>

    <h3>اتصال به دیتابیس‌ها</h3>
    <p>
      خیلی کم پیش‌ می‌آید که در برنامه‌ای از دیتابیس استفاده نشده‌باشد. اگر در
      پروژه ASP.Net Core از دیتابیس استفاده کرده اید میتوانید به‌ این ‌صورت به
      آن متصل شوید.
    </p>
    <ul>
      <li>
        <b>MySQL:</b>
      </li>
      <p>
        اگر از این پایگاه داده استفاده کرده‌اید کافیست اطلاعات وصل شدن به
        دیتابیس MySQL را در بخش ENV ها وارد کنید (در چند بخش قبل درباره اضافه
        کردن ENV‌ها توضیحاتی داده بودیم):
      </p>
      <Highlight className="config">
        {`ConnectionStrings:DefaultConnection="server=URL:PORT;uid=USERNAME;pwd=PASS;database=NAME"`}
      </Highlight>
      <li>
        <b>بقیه دیتابیس‌ها</b>
      </li>
      <p>کافیست ENV ها را در بخش تنظیمات، مانند مثال بالا وارد کنید.</p>
    </ul>

    <br />

    <Link href="/apps/netcore/disks">متوجه شدم، برو بعدی!</Link>
  </Layout>
);
