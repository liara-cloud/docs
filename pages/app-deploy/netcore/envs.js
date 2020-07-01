import Layout from "../../../components/Layout";
import Link from "next/link";
import Head from "next/head";
import Highlight from "react-highlight";
import ZoomableImage from "../../../components/ZoomableImage";
import Notice from "../../../components/Notice";

export default () => (
  <Layout>
    <Head>
      <title>ASP.Net Core سرویس ابری لیارا | مستندات استقرار برنامه‌های</title>
    </Head>

    <h1>برنامه‌های ASP.Net Core</h1>
    <span className="pageDescription">(ASP.Net Core Apps)</span>

    <h3>تنظیم متغیرها (Environment Variables)</h3>

    <p>
      متغیرهای محیطی یا همان Environment Variables به شما کمک می‌کنند تا
      برنامه‌ی‌تان در هر محیط اطلاعات مربوط به همان محیط را دریافت کند. برای مثال، اطلاعات اتصال به دیتابیس را می‌توانید از این بخش وارد کنید.
{' '}
<Link href="/app-features/environment-variables">توضیحات بیشتر</Link>
    </p>
    <p>
      برای افزودن یک ENV کافیست که به بخش تنظیمات برنامه‌ی‌تان بروید و یک key به
      عنوان اسم و یک value به عنوان مقدار اضافه کنید، و با زدن دکمه{" "}
      <b>ثبت تغییرات</b> یک ENV به برنامه‌ی‌تان اضافه کنید. برای نمونه، ENV ای
      با عنوان LIARA_URL و مقدار https://liara.ir را به این صورت اضافه کنید.
    </p>
    <ZoomableImage src="/static/php-env.png" />
    <p> حالا به راحتی می‌توانید از‌ آن در برنامه‌ی‌تان استفاده کنید:</p>
    <Highlight className="dotnet">
      {`string url = Environment.GetEnvironmentVariable("LIARA_URL");
if(url == null)
{
    Console.WriteLine("LIARA_URL not set.");
}
else
{
    Console.WriteLine(url);
}`}
    </Highlight>
    <p>
      بعد از کلیک روی دکمه <b>ثبت تغییرات</b> برنامه‌ی‌ شما به صورت خودکار
      ریستارت می‌شود و در استقرار جدید این متغیر‌های محیطی در داخل برنامه قابل
      استفاده می‌شوند. به این شیوه که LIARA_URL را اضافه کردید می‌توانید هر ENV
      دیگری را نیز به برنامه اضافه کنید.
    </p>

    <Notice variant="info">
      در پلتفرم netcore به صورت پیشفرض همه برنامه‌ها با
      <span className="code">ASPNETCORE_ENVIRONMENT=Production</span>
      مستقر می‌شوند.
    </Notice>
    <br />
    <Link href="/app-deploy/netcore/logs">متوجه شدم، برو گام بعدی!</Link>
  </Layout>
);
