import Layout from "../../../components/Layout";
import Link from "next/link";
import Head from "next/head";
import Highlight from "react-highlight";

export default () => (
  <Layout>
    <Head>
      <title>PHP سرویس ابری لیارا | مستندات استقرار برنامه‌های</title>
    </Head>
    <h1>برنامه‌های PHP</h1>
    <span className="pageDescription">(PHP Apps)</span>

    <h3>به‌روز‌رسانی برنامه</h3>
    <p>
      بعد از هر تغییر در برنامه‌ی‌تان به راحتی با اجرای مجدد دستور{" "}
      <span className="code">liara deploy</span> میتوانید فقط تغییرات را ارسال
      کنید. CLI لیارا این هوشمندی را دارد که در هر بار عملیات استقرار، فقط
      فایل‌هایی که تغییر کرده باشند و یا به تازگی اضافه شده باشند را آپلود
      می‌کند و سایر فایل‌ها از روی سرور خوانده می‌شوند. این کار باعث می‌شود که
      سرعت دیپلوی‌ها افزایش یابد و نیاز نباشد که شما گاها به خاطر تغییر یک فایل،
      منتظر آپلودشدن کل فایل‌ها باشید.
    </p>
    <p>
      {" "}
      برای این که در هر استقرار بتوانید بعدا متوجه شوید علت این استقرار چه بوده،
      میتوانید از message در دستور deploy استفاده کنید. فرض کنید استقرار مد نظر
      شما به علت رفع باگ auth کاربران بوده. پس اینطوری نسخه جدید را deploy
      میکنیم:
    </p>
    <Highlight className="shell">
      {`$ liara deploy --message="Fix auth bug in login api"`}
    </Highlight>
    <p>
      {" "}
      البته اگر شما از Git استفاده میکنید، لیارا همیشه از آخرین Commit message
      روی Branch جاری شما برای توضیحات استقرار استفاده میکند. البته به این شرط
      که شما <span className="code">--message</span> را خالی گذاشته باشید.
    </p>

    <Link href="/apps/php/dbs">متوجه شدم، برو بعدی!</Link>
  </Layout>
);
