import Layout from "../../../components/Layout";
import Link from "next/link";
import Head from "next/head";
import Highlight from "react-highlight";

export default () => (
  <Layout>
    <Head>
      <title>Laravel سرویس ابری لیارا | مستندات استقرار برنامه‌های</title>
    </Head>

    <div className="page-head">
      <img className="page-icon" src="/static/platformicons/laravel.svg" alt="laravel"/>
      <div className="page-title">
        <h1>برنامه‌های Laravel</h1>
        <span className="page-description">(Laravel Apps)</span>
      </div>
    </div>

    <h3>به‌روز‌رسانی برنامه</h3>
    <p>
      بعد از هر تغییر در برنامه‌ی‌تان به راحتی با اجرای مجدد دستور{" "}
      <span className="code">liara deploy</span> می‌توانید فقط تغییرات را ارسال
      کنید. Liara CLI این هوشمندی را دارد که در هر بار عملیات استقرار، فقط
      فایل‌هایی که تغییر کرده باشند و یا به تازگی اضافه شده باشند را آپلود
      کند و سایر فایل‌ها از روی سرور خوانده می‌شوند. این کار باعث می‌شود که
      سرعت دیپلوی‌ها افزایش یابد و نیاز نباشد که شما گاها به خاطر تغییر یک فایل،
      منتظر آپلودشدن کل فایل‌ها باشید.
    </p>
    <p>
      {" "}
      برای این که در هر استقرار بتوانید بعدا متوجه شوید علت این استقرار چه بوده،
      می‌توانید از message در دستور deploy استفاده کنید. فرض کنید استقرار مد نظر
      شما به علت رفع باگ auth کاربران بوده. این‌گونه می‌توانیم نسخه‌ی جدید را  همراه با یک پیام توضیح مستقر کنیم:
    </p>
    <Highlight className="shell">
      {`$ liara deploy --message="Fix auth bug in login api"`}
    </Highlight>
    <p>
      {" "}
      البته اگر شما از Git استفاده می‌کنید، لیارا همیشه از آخرین Commit message
      روی Branch جاری شما برای توضیحات استقرار استفاده می‌کند.
    </p>

    <Link href="/app-deploy/laravel/dbs">متوجه شدم، برو گام بعدی!</Link>
  </Layout>
);
