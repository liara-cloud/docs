import Layout from "../../../components/Layout";
import Link from "next/link";
import Head from "next/head";
import Highlight from "react-highlight";

export default () => (
  <Layout>
    <Head>
      <title>مستندات به‌روزرسانی در برنامه‌های Docker - سرویس ابری لیارا</title>
    </Head>

    <div className="page-head">
      <img
        className="page-icon"
        src="/static/platformicons/docker.svg"
        alt="docker"
      />
      <div className="page-title">
        <h1>برنامه‌های Docker</h1>
        <span className="page-description">(Docker Apps)</span>
      </div>
    </div>

    <h3>به‌روز‌رسانی برنامه</h3>
    <p>
      بعد از هر تغییر در برنامه‌ی‌تان به راحتی با اجرای مجدد دستور{" "}
      <span className="code">liara deploy</span> می‌توانید فقط تغییرات را ارسال
      کنید. Liara CLI این هوشمندی را دارد که در هر بار عملیات استقرار، فقط
      فایل‌هایی که تغییر کرده باشند و یا به تازگی اضافه شده باشند را آپلود کند و
      سایر فایل‌ها از روی سرور خوانده می‌شوند. این کار باعث می‌شود که سرعت
      استقرار‌ها افزایش یابد و نیاز نباشد که شما گاها به خاطر تغییر یک فایل،
      منتظر آپلودشدن کل فایل‌ها باشید.
    </p>
    <p>
      برای این که بتوانید در آینده از علت هر استقرار آگاه باشید، می‌توانید از
      سوییچ <span className="code">message</span> در دستور{" "}
      <span className="code">deploy</span> استفاده کنید. فرض کنید استقرار مد نظر
      شما به علت رفع باگ auth کاربران بوده. پس به این روش نسخه جدید را مستقر
      کنید:
    </p>
    <Highlight className="shell">
      {`$ liara deploy --message="Fix auth bug in login api"`}
    </Highlight>
    <p>
      البته اگر شما از Git استفاده می‌کنید، لیارا همیشه از آخرین Commit message
      روی Branch جاری شما برای توضیحات استقرار استفاده می‌کند. البته به این شرط
      که شما <span className="code">--message</span> را خالی گذاشته باشید.
    </p>

    <Link href="/app-deploy/docker/disks">متوجه شدم، برو گام بعدی!</Link>
  </Layout>
);
