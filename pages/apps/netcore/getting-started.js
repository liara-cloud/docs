import Layout from "../../../components/Layout";
import Link from "next/link";
import Head from "next/head";

export default () => (
  <Layout>
    <Head>
      <title>ASP .Net Core سرویس ابری لیارا | مستندات استقرار برنامه‌های</title>
    </Head>

    <h1>پلتفرم ASP .Net Core</h1>
    <span className="pageDescription">(ASP .Net Core Platform)</span>

    <h3>🚀 شروع به کار</h3>
    <p>
      در این بخش به شما کمک میکنیم که در سریع‌ترین زمان ممکن برنامه ASP .Net
      Core ای‌ که نوشتید را روی بستر ابری Liara مستقر کنید. برای راحتی شما با یک
      مثال واقعی تمام مراحل رو پیش میبریم. میتونید این پروژه رو از github دریافت
      کنید:
      <pre>
        <code>
          {`$ git clone https://github.com/liara-cloud/dotnetcore-starter
$ cd dotnetcore-starter`}
        </code>
      </pre>
    </p>
    <p>
      برای این که مطمئن بشید همه چیز درست کار میکنه کافیه پروژه رو توی سیستم
      خودتون این شکلی اجرا کنید:
      <pre>
        <code>
          {`$ dotnet restore
$ dotnet run`}
        </code>
      </pre>
      و درنهایت توی مرورگرتون پروژه رو با آدرس
      <span className="code">http://127.0.0.1:5000</span> باز کنید. اگر همه چیز
      درسته یعنی آماد‌ه‌ایم که این برنامه رو روی لیارا مستقر کنیم.
    </p>

    <Link href="/apps/netcore/deploy">متوجه شدم، برو بعدی!</Link>
  </Layout>
);
