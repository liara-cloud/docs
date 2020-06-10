import Layout from "../../../components/Layout";
import Link from "next/link";
import Head from "next/head";
import Highlight from "react-highlight";

export default () => (
  <Layout>
    <Head>
      <title>
        سرویس ابری لیارا | مستندات استقرار برنامه‌های Laravel - Laravel
      </title>
    </Head>

    <h1>فریم‌ورک Laravel</h1>
    <span className="pageDescription">(Laravel Framework)</span>

    <h3>پیکربندی https</h3>
    <p>
      برای آن که لاراول حتما از https برای نمایش تصاویر و سایر asset ها استفاده
      کند میتوانیم تکه کد زیر را به فایل{" "}
      <span className="code">app/Providers/AppServiceProvider.php</span> داخل
      متد <span className="code">boot()</span> اضافه کنیم:
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

    <Link href="/apps/laravel/logs">متوجه شدم، برو بعدی!</Link>
  </Layout>
);
