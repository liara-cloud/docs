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

    <h1>فریم‌ورک ASP.Net Core</h1>
    <span className="pageDescription">(ASP.Net Core Framework)</span>

    <h3>مشاهده لاگ‌های پروژه</h3>
    <p>
      لاگ‌ها یا Logs، بخش مهمی از هر برنامه هستند و به برنامه‌نویسان کمک میکنند
      تا بدونن دقیقا چه اتفاقاتی در نرم‌افزار رخ داده. به صورت خلاصه شما
      میتوانید لاگ‌های پروژه‌ی‌تان را در بخش لاگ‌های پنل لیارا مشاهده کنید. برای
      نمونه در پروژه تستی‌مان چون سطح لاگ‌ها را روی Information قرار داده‌ایم،
      هر وقت کاربری به صفحه اصلی سایت درخواستی ارسال کند آن را لاگ میکنیم:
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
    <p>
      سپس با رفرش کردن چندباره سایت میتوانیم آن‌هارا در منوی لاگ‌های لیارا
      ببینیم:
    </p>
    <ZoomableImage src="/static/dotnet-logs.png" />

    <p>
      البته ممکن است شما لاگ‌ها را داخل کنسول قرار ندهید و آن‌ها‌ را در فایل
      ذخیره کنید. از آنجایی که مبحث لاگ در هر فریم‌ورک و زبان ممکن است
      سازوکارهای متفاوتی داشته باشد درباره لاگ‌ها در ASP.Net Core و مدیریت آن‌ها
      در لیارا در بخش <b>توضیحات و نکات تکمیلی</b> بیشتر توضیح داده‌ایم.
    </p>

    <Link href="/apps/netcore/liarajson">متوجه شدم، برو بعدی!</Link>
  </Layout>
);
