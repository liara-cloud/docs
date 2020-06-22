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

    <h3>مشاهده لاگ‌های پروژه</h3>
    <p>
      لاگ‌ها یا Logs، بخش مهمی از هر برنامه است و به برنامه‌نویسان کمک میکند
      تا بتوانند راحت‌تر از اتفاقات رخ‌ داده در برنامه‌ی‌شان آگاه شوند. به صورت
      خلاصه شما میتوانید لاگ‌های پروژه‌ی‌تان را در بخش لاگ‌های پنل لیارا مشاهده
      کنید. برای نمونه اگر سطح لاگ‌ها را روی Information قرار داده‌ باشید، هر
      وقت کاربری به سایت درخواستی ارسال کند لاگ میشود:
    </p>
    <Highlight className="php">
      {`{ 
    "Logging": {
        "LogLevel": {
            "Default": "Information",
            "Microsoft": "Information",
            "Microsoft.Hosting.Lifetime": "Information"
        }
}`}
    </Highlight>
    <p>با رفرش سایت میتوانید آن‌ها را در منوی لاگ‌های لیارا ببینید:</p>
    <ZoomableImage src="/static/dotnet-logs.png" />

    <p>
      مدیریت Log ها در ASP.Net Core میتواند روش‌های مختلفی داشته باشد و وابسته
      به پیاده‌سازی پروژه‌ی‌تان و تصمیمات شما است. ممکن است لاگ‌های مهم‌تر را
      در فایل ذخیره کنید و بخشی را در کنسول نمایش دهید.
    </p>

    <Link href="/app-deploy/netcore/liarajson">متوجه شدم، برو گام بعدی!</Link>
  </Layout>
);
