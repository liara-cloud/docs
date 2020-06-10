import Layout from "../../../components/Layout";
import Link from "next/link";
import Head from "next/head";
import ZoomableImage from "../../../components/ZoomableImage";

export default () => (
  <Layout>
    <Head>
      <title>Angular سرویس ابری لیارا | مستندات استقرار برنامه‌های</title>
    </Head>

    <h1>فریم‌ورک Angular</h1>
    <span className="pageDescription">(Angular Framework)</span>

    <h3>مشاهده لاگ‌های پروژه</h3>
    <p>
      لاگ‌ها یا Logs، بخش مهمی از هر برنامه هستند و به برنامه‌نویسان کمک میکنند
      تا بدونن دقیقا چه اتفاقاتی در نرم‌افزار رخ داده. به صورت خلاصه شما
      میتوانید لاگ‌های پروژه‌ی‌تان را در بخش لاگ‌های پنل لیارا مشاهده کنید.
    </p>

    <ZoomableImage src="/static/angular-logs.png" />
    <br />

    <Link href="/apps/angular/liarajson">متوجه شدم، برو بعدی!</Link>
  </Layout>
);
