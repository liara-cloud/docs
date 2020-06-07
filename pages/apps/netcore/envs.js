import Layout from "../../../components/Layout";
import Link from "next/link";
import Head from "next/head";
import Highlight from "react-highlight";
import ZoomableImage from "../../../components/ZoomableImage";
import Notice from "../../../components/Notice";

export default () => (
  <Layout>
    <Head>
      <title>ASP .Net Core سرویس ابری لیارا | مستندات استقرار برنامه‌های</title>
    </Head>

    <h1>پلتفرم ASP .Net Core</h1>
    <span className="pageDescription">(ASP .Net Core Platform)</span>

    <h3>پیکربندی ENV‌ها</h3>

    <p>
      متغیرهای محیطی یا همان Environment Variables ها به شما کمک میکنند تا
      برنامه‌ی‌تان در هر محیط اطلاعات مربوط به همان محیط را دریافت کند.
    </p>
    <p>
      شما با ابزارهای مختلفی میتوانید در پلتفرم ASP .Net Core  مقادیر ENV ها را مدیریت
      کنید. ولی به صورت خیلی ساده و برای نمونه یک ENV از طریق پنل لیارا اضافه
      میکنیم و در سایت نمایش میدهیم. به همین شیوه شما میتوانید از ENV ها در
      پروژه‌ی‌تان استفاده کنید.
    </p>
    <p>
      برای اضافه کردن یک ENV به برنامه‌ی‌تان کافیست که به بخش تنظیمات
      برنامه‌ی‌تان بروید و با اضافه کردن یک key به عنوان اسم و یک value به عنوان
      مقدار آن، و با زدن دکمه <b>ثبت تغییرات</b> یک ENV به برنامه‌ی‌تان اضافه
      کنید. برای نمونه ما ENV ای با عنوان LIARA_URL و مقدار
      https://dotnet-starter.liara.run اضافه کردیم.
    </p>
    <ZoomableImage src="/static/php-env.png" />
    <p> حالا به راحتی میتوانیم از‌ آن در برنامه‌ی‌مان استفاده کنیم:</p>
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
      ریستارت میشود و در استقرار جدید این متغیر‌های محیطی در داخل برنامه قابل
      استفاده میشوند. به این شیوه که LIARA_URL را اضافه کردید میتوانید هر ENV
      دیگری را نیز به پروژه اضافه کنید.
    </p>

    <Notice variant="info">
      در پلتفرم netcore به صورت پیشفرض همه برنامه‌ها با
      <span className="code">ASPNETCORE_ENVIRONMENT=Production</span>
      مستقر میشوند.
    </Notice>
    <br />
    <Link href="/apps/netcore/envs">متوجه شدم، برو بعدی!</Link>
  </Layout>
);
