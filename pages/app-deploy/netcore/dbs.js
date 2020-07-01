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

    <h1>برنامه‌های ASP.Net Core</h1>
    <span className="pageDescription">(ASP.Net Core Apps)</span>

    <h3>اتصال به دیتابیس‌ها</h3>
    <p>
      به‌ندرت پیش‌ می‌آید که در برنامه‌ای از دیتابیس استفاده نشده‌باشد. اگر در
      برنامه ASP.Net Core از دیتابیس استفاده کرده‌اید می‌توانید به‌ این ‌صورت به
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
        {`ConnectionStrings:DefaultConnection="server=URL:PORT;uid=USERNAME;pwd=PASS;database=NAME"`}
      </Highlight>
      <li>
        <b>بقیه دیتابیس‌ها</b>
      </li>
      <p>کافیست env ها را در بخش تنظیمات، مانند مثال بالا وارد کنید.</p>
    </ul>

    <br />

    <Link href="/app-deploy/netcore/disks">متوجه شدم، برو گام بعدی!</Link>
  </Layout>
);
