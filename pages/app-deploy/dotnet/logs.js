import Link from "next/link";
import Head from "next/head";
import Highlight from "react-highlight";
import Layout from "../../../components/Layout";
import PlatformIcon from "../../../components/PlatformIcon";
import ZoomableImage from "../../../components/ZoomableImage";

export default () => (
  <Layout>
    <Head>
      <title>مستندات لاگ‌ها در برنامه‌های .Net Core - لیارا</title>
    </Head>

    <div className="page-head">
      <PlatformIcon platform="dotnet" />
      <div className="page-title">
        <h1>پلتفرم Net.</h1>
        <span className="page-description">(DotNet Platform)</span>
      </div>
    </div>

    <h3>مشاهده لاگ‌های برنامه</h3>
    <p>
      لاگ بخش مهمی از هر برنامه است و به برنامه‌نویسان کمک می‌کند تا بتوانند
      راحت‌تر از اتفاقات رخ‌ داده در برنامه‌ی‌شان آگاه شوند. به صورت خلاصه شما
      می‌توانید لاگ‌های برنامه‌ی‌تان را در بخش لاگ‌های پنل لیارا مشاهده کنید.
      برای نمونه اگر سطح لاگ‌ها را روی Information قرار داده‌ باشید، هر وقت
      کاربری به سایت درخواستی ارسال کند لاگ می‌شود:
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
    <p>با رفرش سایت می‌توانید آن‌ها را در منوی لاگ‌های لیارا ببینید:</p>
    <ZoomableImage src="/static/dotnet-log.png" />

    <p>
      مدیریت Log ها در Net. می‌تواند روش‌های مختلفی داشته باشد و وابسته به
      پیاده‌سازی برنامه‌ی‌تان و تصمیمات شما است. ممکن است لاگ‌های مهم‌تر را در
      فایل ذخیره کنید و بخشی را در کنسول نمایش دهید.
    </p>

    <Link href="/app-deploy/dotnet/liarajson" className="next-page">
      متوجه شدم، برو گام بعدی!
    </Link>
  </Layout>
);
