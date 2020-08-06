import Layout from "../../../components/Layout";
import Link from "next/link";
import Head from "next/head";
import Highlight from "react-highlight";

export default () => (
  <Layout>
    <Head>
      <title>
        مستندات پیکربندی https در برنامه‌های Laravel - سرویس ابری لیارا
      </title>
    </Head>

    <div className="page-head">
      <img
        className="page-icon"
        src="/static/platformicons/laravel.svg"
        alt="laravel"
      />
      <div className="page-title">
        <h1>برنامه‌های Laravel</h1>
        <span className="page-description">(Laravel Apps)</span>
      </div>
    </div>

    <h3>پیکربندی https</h3>
    <p>
      برای آن که مطمئن شوید لاراول از https برای نمایش تصاویر و سایر asset ها
      استفاده می‌کند، می‌توانید تکه کد زیر را به فایل{" "}
      <span className="code">app/Providers/AppServiceProvider.php</span> داخل
      متد <span className="code">boot()</span> اضافه کنید:
    </p>
    <Highlight className="php">
      {`if($this->app->environment('production')) {
    \\URL::forceScheme('https');
}
`}
    </Highlight>
    <p>
      کد بالا به سادگی چک می‌کند که اگر متغیر APP_ENV برابر production باشد،
      لاراول حتما از https برای نمایش تصاویر و سایر asset ها استفاده کند. این
      متغیر به صورت پیش‌فرض برابر production است، مگر این که از بخش متغیرهای
      لیارا مقدار آن را تغییر داده باشید.
    </p>

    <Link href="/app-deploy/laravel/logs">متوجه شدم، برو گام بعدی!</Link>
  </Layout>
);
